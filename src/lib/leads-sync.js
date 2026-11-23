import "server-only";
import { getSupabase } from "./supabase-server";
import { jesperConfigured, pushLead, pushSignal } from "./jesper";
import { notify } from "./notify";

// Moves website leads and visitor signals from Supabase (the website's database) into Jesper (the CRM).
// Supabase always gets the record first, so nothing is lost if Jesper is slow or down: unsynced rows are
// retried by the daily job. Jesper processes each externalRef once, so retries never create duplicates.

const MAX_ATTEMPTS = 8;

const SERVICE = {
  ai_automation: "AI automation & agents",
  mvp: "SaaS / MVP build",
  discovery_sprint: "IT consulting",
  support: "Maintenance & support",
  custom: "Custom software",
};
const BUDGET = {
  under_2500: "Under $2,500", "2500_7500": "$2,500 - $7,500", "7500_15k": "$7,500 - $15,000",
  "15k_50k": "$15,000 - $50,000", "50k_plus": "$50,000+", not_sure: "Not sure yet",
};
const TIMELINE = {
  asap: "As soon as possible", "1_month": "Within 1 month", "3_months": "Within 3 months",
  "6_months": "Within 6 months", flexible: "Flexible",
};

/** The visitor's history in the shape Jesper expects. */
export function toWeb(v) {
  if (!v) return undefined;
  return {
    score: v.score, visits: v.visits, firstSource: v.first_source || undefined, landingPage: v.landing_page || undefined,
    country: v.country || undefined, firstSeen: v.created_at, lastSeen: v.last_seen,
    pages: Array.isArray(v.pages) ? v.pages : [], sections: v.sections || {}, signals: Array.isArray(v.signals) ? v.signals : [],
  };
}

async function visitor(id) {
  if (!id) return null;
  const { data } = await getSupabase().from("web_visitors").select("*").eq("id", id).maybeSingle();
  return data || null;
}

function attributionText(a = {}) {
  const parts = [];
  if (a.utm?.utm_source || a.source) parts.push(`from ${a.utm?.utm_source || a.source}`);
  if (a.utm?.utm_campaign) parts.push(`campaign ${a.utm.utm_campaign}`);
  if (a.landing) parts.push(`landed on ${a.landing}`);
  return parts.join(" · ").slice(0, 300) || undefined;
}

async function markSynced(table, row, result) {
  const attempts = (row.jesper_attempts || 0) + 1;
  const patch = result.ok
    ? { jesper_status: "synced", jesper_lead_ref: result.data?.lead?.ref || null, jesper_error: null, jesper_synced_at: new Date().toISOString(), jesper_attempts: attempts }
    : { jesper_status: "failed", jesper_error: result.error || "Unknown error", jesper_attempts: attempts };
  await getSupabase().from(table).update(patch).eq("id", row.id);
  if (!result.ok && attempts >= MAX_ATTEMPTS) {
    await notify("A website lead could not reach Jesper", [`${row.name || "Unknown"} <${row.email || "no email"}>`, `Saved in Supabase table ${table}. Last error: ${result.error}`]);
  }
  if (result.ok && row.visitor_id) {
    await getSupabase().from("web_visitors")
      .update({ jesper_lead_ref: result.data?.lead?.ref || null, jesper_signal_at: new Date().toISOString() })
      .eq("id", row.visitor_id);
  }
}

/** Send one contact-form row to Jesper. Safe to call again for the same row. */
export async function syncContact(row) {
  if (!jesperConfigured()) return { ok: false, skipped: true };
  const v = await visitor(row.visitor_id);
  const result = await pushLead({
    externalRef: `web:contact:${row.id}`,
    name: row.name,
    email: row.email,
    phone: row.phone || undefined,
    company: row.company || undefined,
    services: SERVICE[row.project_type] ? [SERVICE[row.project_type]] : undefined,
    budget: BUDGET[row.budget] || row.budget || undefined,
    timeline: TIMELINE[row.timeline] || row.timeline || undefined,
    message: row.message || undefined,
    source: "Website contact form",
    sourceDetail: attributionText(row.attribution),
    tags: ["website"],
    visitorId: row.visitor_id || undefined,
    web: toWeb(v),
  });
  await markSynced("contacts", row, result);
  return result;
}

/** Send one verified booking to Jesper: lead at "Discovery call" with a meeting task at the booked time. */
export async function syncBooking(row) {
  if (!jesperConfigured()) return { ok: false, skipped: true };
  const v = await visitor(row.visitor_id);
  const answers = (Array.isArray(row.answers) ? row.answers : []).map((a) => `${a.question}: ${a.answer}`).join("\n");
  const result = await pushLead({
    externalRef: `web:booking:${row.id}`,
    name: row.name,
    email: row.email,
    message: answers || undefined,
    source: "Website booking",
    sourceDetail: attributionText(row.attribution),
    tags: ["website"],
    meetingAt: row.start_time,
    visitorId: row.visitor_id || undefined,
    web: toWeb(v),
  });
  await markSynced("bookings", row, result);
  return result;
}

/** Retry everything not yet in Jesper (last 30 days, up to MAX_ATTEMPTS each). */
export async function syncPending() {
  if (!jesperConfigured()) return { skipped: true };
  const since = new Date(Date.now() - 30 * 86400000).toISOString();
  const out = { contacts: 0, bookings: 0, failed: 0 };
  const sb = getSupabase();
  const [contacts, bookings] = await Promise.all([
    sb.from("contacts").select("*").in("jesper_status", ["pending", "failed"]).lt("jesper_attempts", MAX_ATTEMPTS).gte("created_at", since).order("created_at").limit(20),
    sb.from("bookings").select("*").eq("verified", true).in("jesper_status", ["pending", "failed"]).lt("jesper_attempts", MAX_ATTEMPTS).gte("created_at", since).order("created_at").limit(20),
  ]);
  for (const row of contacts.data || []) (await syncContact(row)).ok ? out.contacts++ : out.failed++;
  for (const row of bookings.data || []) (await syncBooking(row)).ok ? out.bookings++ : out.failed++;
  return out;
}

const HOUR = 3600000;

/** Should this visitor update go to the CRM? Known people on each new visit; strangers only when clearly interested. */
export function shouldSignal(v) {
  if (!v) return false;
  const last = v.jesper_signal_at ? Date.parse(v.jesper_signal_at) : 0;
  const since = Date.now() - last;
  const jump = (v.score || 0) - (v.jesper_signal_score || 0);
  const known = Boolean(v.email || v.track_token || v.jesper_lead_ref);
  if (known) return (v.new_session && since > 6 * HOUR) || (jump >= 15 && since > 30 * 60000) || !last;
  return v.score >= 50 && jump >= 15;
}

/** Report a visitor to Jesper and alert you when it lands on a lead. */
export async function sendVisitorSignal(v) {
  if (!jesperConfigured()) return null;
  const result = await pushSignal({ visitorId: v.id, trackToken: v.track_token || undefined, email: v.email || undefined, web: toWeb(v) });
  if (!result.ok) return result;
  await getSupabase().from("web_visitors")
    .update({ jesper_signal_at: new Date().toISOString(), jesper_signal_score: v.score, jesper_lead_ref: result.data?.linked || v.jesper_lead_ref || null })
    .eq("id", v.id);
  if (result.data?.logged) {
    const top = Object.entries(v.sections || {}).sort((a, b) => b[1] - a[1]).slice(0, 3)
      .map(([k, ms]) => `${k} ${Math.round(ms / 1000)}s`).join(", ");
    await notify(`Lead ${result.data.linked} is on the website`, [`Intent ${v.score}/100 · visit ${v.visits}`, top && `Time spent: ${top}`, "Follow-up task added in Jesper."]);
  }
  return result;
}

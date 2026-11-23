import { NextResponse, after } from "next/server";
import { getSupabase } from "@/lib/supabase-server";
import { sendVisitorSignal, shouldSignal } from "@/lib/leads-sync";

// Receives batched page events from visitors who accepted cookies (see VisitorTracker).
// Raw events stay in Supabase; only high-intent visitors are forwarded to Jesper, after the response.

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const SESSION = /^[a-z0-9]{8,40}$/i;
const TOKEN = /^[0-9a-f]{12}$/;
const TYPES = new Set(["page_view", "section", "read", "booking_opened", "booking_completed", "form_started", "form_sent", "evaluation_finished", "pricing_viewed", "newsletter_joined"]);
const BOTS = /bot|crawl|spider|slurp|preview|headless|lighthouse|pagespeed|facebookexternalhit|embedly|monitor/i;
const MAX_BYTES = 16 * 1024;

const str = (v, max) => (typeof v === "string" && v.trim() ? v.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, max) : undefined);
const path = (v) => {
  const p = str(v, 200);
  return p && p.startsWith("/") && !p.startsWith("//") ? p.split(/[?#]/)[0] : undefined;
};
const num = (v, max) => {
  const n = Math.round(Number(v));
  return Number.isFinite(n) && n >= 0 ? Math.min(n, max) : 0;
};

function cleanEvents(list) {
  if (!Array.isArray(list)) return [];
  return list.slice(0, 60).flatMap((e) => {
    if (!e || typeof e !== "object" || !TYPES.has(e.t)) return [];
    const out = { t: e.t, p: path(e.p) };
    if (e.t === "section") {
      out.s = str(e.s, 80);
      out.ms = num(e.ms, 3_600_000);
      if (!out.s || out.ms < 1000) return [];
    }
    if (e.t === "read") out.d = num(e.d, 100);
    return [out];
  });
}

function cleanMeta(m = {}) {
  const utm = {};
  if (m.utm && typeof m.utm === "object") {
    for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
      const v = str(m.utm[k], 120);
      if (v) utm[k] = v;
    }
  }
  const ref = str(m.ref, 12)?.toLowerCase();
  return {
    source: str(m.source, 200), referrer: str(m.referrer, 300), landing: path(m.landing), utm,
    ref: ref && TOKEN.test(ref) ? ref : undefined,
  };
}

export async function POST(req) {
  // Same-site requests only: stops other sites from posting junk with a visitor's browser.
  const site = req.headers.get("sec-fetch-site");
  if (site && site !== "same-origin") return new NextResponse(null, { status: 403 });
  if (BOTS.test(req.headers.get("user-agent") || "")) return new NextResponse(null, { status: 204 });
  if (Number(req.headers.get("content-length") || 0) > MAX_BYTES) return new NextResponse(null, { status: 413 });

  let body;
  try {
    const text = await req.text();
    if (text.length > MAX_BYTES) return new NextResponse(null, { status: 413 });
    body = JSON.parse(text);
  } catch {
    return new NextResponse(null, { status: 400 });
  }
  const visitorId = typeof body?.v === "string" && UUID.test(body.v) ? body.v.toLowerCase() : null;
  const session = typeof body?.s === "string" && SESSION.test(body.s) ? body.s : null;
  const events = cleanEvents(body?.e);
  if (!visitorId || !session || !events.length) return new NextResponse(null, { status: 400 });

  const meta = cleanMeta(body.m);
  meta.country = str(req.headers.get("x-vercel-ip-country"), 2);

  const { data: visitor, error } = await getSupabase().rpc("record_web_events", {
    p_visitor: visitorId, p_session: session, p_meta: meta, p_events: events,
  });
  if (error) {
    console.error("record_web_events failed:", error.message);
    return new NextResponse(null, { status: 500 });
  }

  if (shouldSignal(visitor)) {
    after(async () => {
      const r = await sendVisitorSignal(visitor);
      if (r && !r.ok) console.error("Visitor signal to Jesper failed:", r.error);
    });
  }
  return new NextResponse(null, { status: 204 });
}

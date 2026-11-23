import crypto from "node:crypto";
import { NextResponse, after } from "next/server";
import { getSupabase } from "@/lib/supabase-server";
import { syncBooking } from "@/lib/leads-sync";

// Cal.com webhook: Settings → Developer → Webhooks → Subscriber URL https://www.jenisys.in/api/booking/cal,
// with a secret. The same secret goes in Vercel as CAL_WEBHOOK_SECRET.
// Every request is checked against Cal.com's signature (HMAC-SHA256 of the raw body, header
// x-cal-signature-256) before anything is read. Cal.com retries deliveries; each booking is stored once.

export const dynamic = "force-dynamic";

const MAX_BYTES = 128 * 1024;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const UID = /^[A-Za-z0-9_-]{6,100}$/;
const short = (v, max) => (typeof v === "string" && v.trim() ? v.trim().slice(0, max) : undefined);
const iso = (v) => (typeof v === "string" && Number.isFinite(Date.parse(v)) ? new Date(v).toISOString() : null);

function validSignature(raw, header, secret) {
  if (!header || !secret) return false;
  const expected = crypto.createHmac("sha256", secret).update(raw, "utf8").digest("hex");
  const a = Buffer.from(expected, "utf8");
  const b = Buffer.from(String(header).trim().toLowerCase(), "utf8");
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

// Booking-form answers, in "question: answer" form (name and email are kept separately).
function answers(p) {
  const out = [];
  const responses = p.responses && typeof p.responses === "object" ? p.responses : {};
  for (const [key, r] of Object.entries(responses).slice(0, 20)) {
    if (["name", "email", "rescheduleReason"].includes(key)) continue;
    const value = r && typeof r === "object" ? r.value : r;
    const text = Array.isArray(value) ? value.join(", ") : typeof value === "object" && value ? JSON.stringify(value) : value;
    const label = (r && typeof r === "object" && r.label) || key;
    if (text !== undefined && text !== null && String(text).trim()) out.push({ question: short(String(label), 200), answer: short(String(text), 1000) });
  }
  if (!out.length && p.additionalNotes) out.push({ question: "Notes", answer: short(String(p.additionalNotes), 1000) });
  return out;
}

export async function POST(req) {
  const secret = process.env.CAL_WEBHOOK_SECRET;
  if (!secret) return NextResponse.json({ message: "Webhook not configured" }, { status: 503 });
  if (Number(req.headers.get("content-length") || 0) > MAX_BYTES) return NextResponse.json({ message: "Too large" }, { status: 413 });
  const raw = await req.text();
  if (raw.length > MAX_BYTES) return NextResponse.json({ message: "Too large" }, { status: 413 });
  if (!validSignature(raw, req.headers.get("x-cal-signature-256"), secret)) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }

  let event;
  try {
    event = JSON.parse(raw);
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }
  const trigger = String(event?.triggerEvent || "");
  const p = event?.payload && typeof event.payload === "object" ? event.payload : {};
  if (trigger === "PING" || !p.uid) return NextResponse.json({ ok: true, message: "pong" });
  if (!UID.test(String(p.uid))) return NextResponse.json({ message: "Invalid booking id" }, { status: 400 });

  const sb = getSupabase();
  const key = `cal:${p.uid}`;

  if (trigger === "BOOKING_CANCELLED") {
    await sb.from("bookings").update({ status: "cancelled" }).eq("invitee_uri", key);
    return NextResponse.json({ ok: true });
  }
  if (!["BOOKING_CREATED", "BOOKING_RESCHEDULED", "BOOKING_REQUESTED"].includes(trigger)) {
    return NextResponse.json({ ok: true, ignored: trigger });
  }

  const attendee = Array.isArray(p.attendees) && p.attendees[0] ? p.attendees[0] : {};
  const responses = p.responses && typeof p.responses === "object" ? p.responses : {};
  const meta = p.metadata && typeof p.metadata === "object" ? p.metadata : {};
  const vid = typeof meta.vid === "string" && UUID.test(meta.vid) ? meta.vid.toLowerCase() : null;
  const oldUid = short(p.rescheduleUid || p.fromReschedule, 100);

  let previous = null;
  if (trigger === "BOOKING_RESCHEDULED" && oldUid && UID.test(oldUid)) {
    const { data } = await sb.from("bookings").select("id, start_time, visitor_id").eq("invitee_uri", `cal:${oldUid}`).maybeSingle();
    previous = data || null;
    if (previous) await sb.from("bookings").update({ status: "rescheduled" }).eq("id", previous.id);
  }

  const row = {
    invitee_uri: key,
    event_uri: short(p.type || p.eventTypeSlug || p.title, 200) || null,
    provider: "cal.com",
    status: trigger === "BOOKING_REQUESTED" ? "requested" : trigger === "BOOKING_RESCHEDULED" ? "rescheduled_to" : "booked",
    verified: true,
    name: short(attendee.name || responses.name?.value || responses.name, 120) || null,
    email: short(attendee.email || responses.email?.value || responses.email, 200)?.toLowerCase() || null,
    timezone: short(attendee.timeZone, 60) || null,
    start_time: iso(p.startTime),
    end_time: iso(p.endTime),
    answers: [
      ...answers(p),
      ...(previous?.start_time ? [{ question: "Rescheduled from", answer: new Date(previous.start_time).toUTCString() }] : []),
    ],
    meeting_url: short(meta.videoCallUrl || p.location, 500) || null,
    visitor_id: vid || previous?.visitor_id || null,
    attribution: {
      source: short(meta.source, 100), landing: short(meta.landing, 200), ref: short(meta.ref, 12),
      utm: meta.campaign ? { utm_campaign: short(meta.campaign, 100) } : {},
    },
    jesper_status: "pending",
  };
  if (!row.email) return NextResponse.json({ message: "Booking without an email" }, { status: 400 });

  const { data, error } = await sb.from("bookings").upsert(row, { onConflict: "invitee_uri", ignoreDuplicates: true }).select("*");
  if (error) {
    console.error("Cal.com booking insert failed:", error.message);
    return NextResponse.json({ message: "Could not record the booking" }, { status: 500 }); // Cal.com will retry
  }
  const saved = data?.[0];
  if (!saved) return NextResponse.json({ ok: true, duplicate: true });

  after(async () => {
    if (saved.visitor_id) await sb.from("web_visitors").update({ email: saved.email }).eq("id", saved.visitor_id);
    const r = await syncBooking(saved);
    if (r && !r.ok && !r.skipped) console.error("Booking to Jesper failed (the daily job will retry):", r.error);
  });
  return NextResponse.json({ ok: true });
}

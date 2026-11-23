import { NextResponse, after } from "next/server";
import { getSupabase } from "@/lib/supabase-server";
import { syncBooking } from "@/lib/leads-sync";
import { notify } from "@/lib/notify";

// Called by the booking dialog when Calendly reports a scheduled call.
// The browser only sends Calendly URLs; with CALENDLY_TOKEN set, the server fetches the real booking from
// Calendly, so a forged request cannot create a lead. Each booking is stored once (invitee URL is unique).

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const INVITEE = /^https:\/\/api\.calendly\.com\/scheduled_events\/[A-Za-z0-9-]{6,64}\/invitees\/[A-Za-z0-9-]{6,64}$/;
const EVENT = /^https:\/\/api\.calendly\.com\/scheduled_events\/[A-Za-z0-9-]{6,64}$/;
const short = (v, max) => (typeof v === "string" && v.trim() ? v.trim().slice(0, max) : undefined);

async function calendly(uri) {
  const res = await fetch(uri, {
    headers: { authorization: `Bearer ${process.env.CALENDLY_TOKEN}` },
    signal: AbortSignal.timeout(6000),
    cache: "no-store",
  });
  if (!res.ok) return null;
  return (await res.json().catch(() => null))?.resource || null;
}

export async function POST(req) {
  const site = req.headers.get("sec-fetch-site");
  if (site && site !== "same-origin") return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  const body = await req.json().catch(() => null);
  const inviteeUri = short(body?.inviteeUri, 300);
  const eventUri = short(body?.eventUri, 300);
  if (!inviteeUri || !INVITEE.test(inviteeUri) || (eventUri && !EVENT.test(eventUri))) {
    return NextResponse.json({ message: "Invalid booking" }, { status: 400 });
  }
  const visitorId = typeof body.visitorId === "string" && UUID.test(body.visitorId) ? body.visitorId.toLowerCase() : null;
  const a = body.attribution && typeof body.attribution === "object" ? body.attribution : {};
  const attribution = { source: short(a.source, 200), landing: short(a.landing, 300), ref: short(a.ref, 12), utm: a.utm && typeof a.utm === "object" ? { utm_source: short(a.utm.utm_source, 120), utm_campaign: short(a.utm.utm_campaign, 120) } : {} };

  let row = { invitee_uri: inviteeUri, event_uri: eventUri || null, visitor_id: visitorId, attribution, verified: false, jesper_status: "skipped" };
  if (process.env.CALENDLY_TOKEN) {
    const invitee = await calendly(inviteeUri);
    if (!invitee || (eventUri && invitee.event !== eventUri)) {
      return NextResponse.json({ message: "Booking not found" }, { status: 400 });
    }
    const event = await calendly(invitee.event);
    row = {
      ...row,
      event_uri: invitee.event,
      verified: true,
      jesper_status: "pending",
      name: short(invitee.name, 120) || null,
      email: short(invitee.email, 200)?.toLowerCase() || null,
      timezone: short(invitee.timezone, 60) || null,
      answers: (invitee.questions_and_answers || []).slice(0, 10).map((q) => ({ question: short(q.question, 200), answer: short(q.answer, 1000) })),
      start_time: event?.start_time || null,
      end_time: event?.end_time || null,
    };
  }

  const { data, error } = await getSupabase().from("bookings").upsert(row, { onConflict: "invitee_uri", ignoreDuplicates: true }).select("*");
  if (error) {
    console.error("Booking insert failed:", error.message);
    return NextResponse.json({ message: "Could not record the booking" }, { status: 500 });
  }
  const saved = data?.[0];
  if (!saved) return NextResponse.json({ success: true }); // already recorded

  after(async () => {
    if (visitorId && saved.email) await getSupabase().from("web_visitors").update({ email: saved.email }).eq("id", visitorId);
    if (saved.verified) {
      const crm = await syncBooking(saved);
      const when = saved.start_time ? new Date(saved.start_time).toUTCString() : "time in Calendly";
      await notify("New call booked", [`${saved.name || "Someone"} <${saved.email || "no email"}>`, `When: ${when}`, crm?.ok ? `In Jesper: ${crm.data?.lead?.ref} (Discovery call)` : "Saved on the website; it will reach Jesper on the next sync."]);
    } else {
      await notify("Someone booked a call", ["The details are in Calendly.", "Add CALENDLY_TOKEN in Vercel to bring bookings into Jesper automatically."]);
    }
  });
  return NextResponse.json({ success: true });
}

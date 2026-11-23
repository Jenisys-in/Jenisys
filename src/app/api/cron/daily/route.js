import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase-server";
import { syncPending } from "@/lib/leads-sync";
import { jesperHealth } from "@/lib/jesper";
import { notify } from "@/lib/notify";

// Daily maintenance, run by Vercel Cron (vercel.json):
//  1. Writes a heartbeat row, so the free Supabase project never counts as inactive and pauses.
//  2. Calls Jesper's /health, which runs a query and wakes the CRM database.
//  3. Retries any lead or booking that has not reached Jesper yet.
//  4. Deletes raw page events older than 90 days and anonymous visitors unseen for 180 days.
// With CRON_SECRET set, only Vercel Cron can run it. Without it, it runs at most once every 6 hours.

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(req) {
  const sb = getSupabase();
  const secret = process.env.CRON_SECRET;
  if (secret) {
    if (req.headers.get("authorization") !== `Bearer ${secret}`) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  } else {
    const { data } = await sb.from("heartbeat").select("at").eq("id", 1).maybeSingle();
    if (data?.at && Date.now() - Date.parse(data.at) < 6 * 3600000) return NextResponse.json({ skipped: "ran recently" });
  }

  const report = {};
  const { data: hb } = await sb.from("heartbeat").select("runs").eq("id", 1).maybeSingle();
  const { error: hbErr } = await sb.from("heartbeat").upsert({ id: 1, at: new Date().toISOString(), runs: Number(hb?.runs || 0) + 1, note: "daily" });
  report.heartbeat = hbErr ? hbErr.message : "ok";

  const health = await jesperHealth();
  report.jesper = health.ok ? `ok (schema ${health.data?.schema ?? "?"})` : health.skipped ? "not configured" : health.error;

  report.sync = await syncPending().catch((e) => ({ error: e.message }));

  const cutoff = new Date(Date.now() - 90 * 86400000).toISOString();
  const { count: events } = await sb.from("web_events").delete({ count: "exact" }).lt("created_at", cutoff);
  const stale = new Date(Date.now() - 180 * 86400000).toISOString();
  const { count: visitors } = await sb.from("web_visitors").delete({ count: "exact" }).lt("last_seen", stale).is("email", null).is("jesper_lead_ref", null);
  report.cleanup = { events: events || 0, visitors: visitors || 0 };

  if (!health.ok && !health.skipped) await notify("Jesper did not answer the daily check", [health.error]);
  return NextResponse.json(report);
}

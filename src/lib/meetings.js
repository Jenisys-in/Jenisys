import "server-only";
import { getSupabase } from "./supabase-server";

// Maps a meetings row to the camelCase shape the API has always returned.
const toMeeting = (r) => ({
  _id: r.id,
  id: r.id,
  userName: r.user_name,
  userEmail: r.user_email,
  userPhone: r.user_phone,
  userCompany: r.user_company,
  userNotes: r.user_notes,
  eventType: r.event_type,
  eventDuration: r.event_duration,
  eventDescription: r.event_description,
  startTime: r.start_time,
  endTime: r.end_time,
  timezone: r.timezone,
  status: r.status,
  googleCalendarEventId: r.google_calendar_event_id,
  meetingLink: r.meeting_link,
  createdAt: r.created_at,
  updatedAt: r.updated_at,
});

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function getMeeting(id) {
  if (!UUID.test(String(id))) return null;
  const { data, error } = await getSupabase().from("meetings").select("*").eq("id", id).maybeSingle();
  if (error) throw new Error(`Supabase read failed: ${error.message}`);
  return data ? toMeeting(data) : null;
}

export async function listMeetings({ from, to } = {}) {
  let q = getSupabase().from("meetings").select("*").order("start_time", { ascending: true });
  if (from) q = q.gte("start_time", from);
  if (to) q = q.lt("start_time", to);
  const { data, error } = await q;
  if (error) throw new Error(`Supabase read failed: ${error.message}`);
  return data.map(toMeeting);
}

export async function updateMeeting(id, fields) {
  const { error } = await getSupabase().from("meetings").update(fields).eq("id", id);
  if (error) throw new Error(`Supabase update failed: ${error.message}`);
}

// Admin endpoints accept the key in the x-api-key header.
export function isAdmin(req) {
  const expected = process.env.ADMIN_API_KEY || process.env.NEXT_PUBLIC_ADMIN_API_KEY;
  const got = req.headers.get("x-api-key");
  return Boolean(expected) && got === expected;
}

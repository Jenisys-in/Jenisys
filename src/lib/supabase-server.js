import "server-only";
import { createClient } from "@supabase/supabase-js";

// Server-only Supabase client. Uses the secret (service_role) key, which bypasses RLS,
// so it must never be imported from a client component. Tables have RLS on with no
// public policies: nothing is readable or writable from the browser.
let client;

export function getSupabase() {
  if (client) return client;
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Supabase is not configured: set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_SECRET_KEY).");
  }
  client = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}

// Throws with a readable message when Supabase returns an error.
export async function insertRow(table, row) {
  const { error } = await getSupabase().from(table).insert(row);
  if (error) throw new Error(`Supabase insert into ${table} failed: ${error.message}`);
}

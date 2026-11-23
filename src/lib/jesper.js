import "server-only";

// Server-only client for the Jesper CRM API. The key never reaches the browser.
// Set JESPER_API_URL (e.g. https://…neon.tech) and JESPER_API_KEY (scopes: leads:write, web:write) in Vercel.
// Without them every call is skipped and the website keeps working on Supabase alone.

const TIMEOUT_MS = 8000;

export function jesperConfigured() {
  return Boolean(process.env.JESPER_API_URL && process.env.JESPER_API_KEY);
}

async function call(path, { method = "POST", body } = {}) {
  if (!jesperConfigured()) return { ok: false, skipped: true, status: 0, error: "Jesper is not configured" };
  const base = process.env.JESPER_API_URL.replace(/\/+$/, "");
  try {
    const res = await fetch(base + path, {
      method,
      headers: { "content-type": "application/json", authorization: `Bearer ${process.env.JESPER_API_KEY}` },
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: AbortSignal.timeout(TIMEOUT_MS),
      cache: "no-store",
    });
    const json = await res.json().catch(() => null);
    // /health answers { ok: true, … }; the API answers { success: true, data }.
    if (path === "/health" && res.ok && json?.ok) return { ok: true, status: res.status, data: json };
    if (!res.ok || !json?.success) {
      return { ok: false, status: res.status, error: String(json?.error || `HTTP ${res.status}`).slice(0, 300) };
    }
    return { ok: true, status: res.status, data: json.data };
  } catch (err) {
    return { ok: false, status: 0, error: err?.name === "TimeoutError" ? "Jesper did not answer in time" : String(err?.message || err).slice(0, 300) };
  }
}

/** Create or update a lead. externalRef makes retries safe: Jesper processes each one once. */
export const pushLead = (lead) => call("/api/v1/leads", { body: lead });

/** Report a high-intent visitor. Jesper links it to a lead when it can; it never creates a lead. */
export const pushSignal = (signal) => call("/api/v1/signals", { body: signal });

/** Wake the CRM database and confirm the API is up. */
export const jesperHealth = () => call("/health", { method: "GET" });

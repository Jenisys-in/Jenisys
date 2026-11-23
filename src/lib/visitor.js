"use client";
import { readConsent } from "./consent";

// Visitor identity and first-touch attribution, kept in this browser only after the visitor accepts cookies.
// Declined or undecided visitors get no ID and nothing is sent.

const VID = "j_vid";
const FIRST = "j_ft";
const SID = "j_sid";

const safe = (fn, fallback = null) => {
  try { return fn(); } catch { return fallback; }
};
const uuid = () => (crypto.randomUUID ? crypto.randomUUID() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)));

export function consented() {
  return readConsent() === true;
}

/** The visitor's ID, or null without consent. */
export function visitorId() {
  if (!consented()) return null;
  return safe(() => {
    let id = localStorage.getItem(VID);
    if (!id) { id = uuid(); localStorage.setItem(VID, id); }
    return id;
  });
}

/** One ID per browser tab session, used to count visits. */
export function sessionId() {
  return safe(() => {
    let id = sessionStorage.getItem(SID);
    if (!id) { id = uuid().replace(/-/g, "").slice(0, 20); sessionStorage.setItem(SID, id); }
    return id;
  }, "nosession0000");
}

/** Where the visitor first came from. Stored once; later visits keep the first source. */
export function attribution() {
  if (!consented()) return null;
  return safe(() => {
    const saved = localStorage.getItem(FIRST);
    const url = new URL(window.location.href);
    const ref = url.searchParams.get("r");
    let first = saved ? JSON.parse(saved) : null;
    if (!first) {
      const utm = {};
      for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
        const v = url.searchParams.get(k);
        if (v) utm[k] = v.slice(0, 120);
      }
      let referrer = "";
      try { referrer = document.referrer && new URL(document.referrer).host !== window.location.host ? new URL(document.referrer).host : ""; } catch {}
      first = { source: utm.utm_source || referrer || "direct", referrer, landing: url.pathname, utm, at: new Date().toISOString() };
    }
    // A personal link (?r=…) from an email or message is remembered even on a later visit.
    if (ref && /^[0-9a-f]{12}$/i.test(ref)) first.ref = ref.toLowerCase();
    localStorage.setItem(FIRST, JSON.stringify(first));
    return first;
  });
}

/** Forget this browser: used when the visitor withdraws consent. */
export function forgetVisitor() {
  safe(() => { localStorage.removeItem(VID); localStorage.removeItem(FIRST); sessionStorage.removeItem(SID); });
}

// ── Event queue ────────────────────────────────────────────────────────────

const queue = [];
let listeners = [];

/** Record a buying signal (booking opened, form sent…). Dropped without consent. */
export function signal(type) {
  if (!consented()) return;
  queue.push({ t: type, p: window.location.pathname });
  listeners.forEach((fn) => fn());
}

export function pushEvent(event) {
  if (!consented()) return;
  queue.push(event);
}

export function onSignal(fn) {
  listeners.push(fn);
  return () => { listeners = listeners.filter((x) => x !== fn); };
}

/** Send queued events. sendBeacon survives tab closes and never delays navigation. */
export function flush() {
  if (!queue.length) return;
  const v = visitorId();
  if (!v) { queue.length = 0; return; }
  const batch = queue.splice(0, 60);
  const a = attribution() || {};
  const body = JSON.stringify({ v, s: sessionId(), m: { source: a.source, referrer: a.referrer, landing: a.landing, utm: a.utm, ref: a.ref }, e: batch });
  // Sent as plain text: Chromium can drop JSON-typed beacons while a page unloads. The server parses it either way.
  const sent = navigator.sendBeacon?.("/api/t", body);
  if (!sent) fetch("/api/t", { method: "POST", body, headers: { "content-type": "application/json" }, keepalive: true }).catch(() => {});
  if (queue.length) flush();
}

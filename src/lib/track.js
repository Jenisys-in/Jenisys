"use client";
import { track as vercelTrack } from "@vercel/analytics";
import { signal } from "./visitor";

// Conversion events that also count as buying signals for the CRM (sent only with cookie consent).
const SIGNALS = {
  call_opened: "booking_opened",
  brief_started: "form_started",
  brief_sent: "form_sent",
  newsletter_joined: "newsletter_joined",
  pricing_viewed: "pricing_viewed",
  evaluation_finished: "evaluation_finished",
};

// Conversion events. Vercel Analytics is cookie-free, so these run without consent.
// Event names: call_opened, brief_started, brief_sent, newsletter_joined, pricing_viewed, evaluation_finished.
export function track(name, props) {
  try {
    if (SIGNALS[name]) signal(SIGNALS[name]);
  } catch {
    /* never affect the page */
  }
  try {
    vercelTrack(name, props);
  } catch {
    /* analytics blocked or unavailable: never affect the page */
  }
}

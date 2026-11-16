"use client";
import { track as vercelTrack } from "@vercel/analytics";

// Conversion events. Vercel Analytics is cookie-free, so these run without consent.
// Event names: call_opened, brief_started, brief_sent, newsletter_joined, pricing_viewed, evaluation_finished.
export function track(name, props) {
  try {
    vercelTrack(name, props);
  } catch {
    /* analytics blocked or unavailable: never affect the page */
  }
}

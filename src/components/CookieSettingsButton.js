"use client";
import { CONSENT_OPEN_EVENT } from "@/lib/consent";

// Reopens the cookie bar so a visitor can change their choice at any time.
export default function CookieSettingsButton({ className = "" }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))}>
      Cookie settings
    </button>
  );
}

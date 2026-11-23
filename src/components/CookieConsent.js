"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CONSENT_OPEN_EVENT, readConsent, writeConsent } from "@/lib/consent";

// Compact consent bar: a slim strip on phones, a small card bottom-left on larger screens.
// Accept and Decline carry equal weight. Trackers only load after Accept (see ConsentScripts).
const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const open = () => setIsVisible(true);
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    let timer;
    if (readConsent() === null) timer = setTimeout(open, 1200);
    return () => {
      clearTimeout(timer);
      window.removeEventListener(CONSENT_OPEN_EVENT, open);
    };
  }, []);

  const choose = (granted) => {
    writeConsent(granted);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{ animation: "j-cookie-in 240ms cubic-bezier(.2,.8,.2,1) both" }}
      className="j-night fixed inset-x-0 bottom-0 z-[100] border-t border-line bg-deep px-4 py-3 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-[22rem] sm:rounded-2xl sm:border sm:p-5 sm:shadow-2xl"
    >
      <p className="text-[13px] leading-snug text-ink-muted sm:text-sm">
        Analytics and visitor-tracking cookies load only if you accept.{" "}
        <Link href="/privacy-policy" className="text-ink underline underline-offset-2 hover:text-signal">Privacy Policy</Link>
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => choose(true)}
          className="min-h-[44px] flex-1 rounded-lg bg-ink px-4 text-sm font-semibold text-void transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => choose(false)}
          className="min-h-[44px] flex-1 rounded-lg border border-ink-muted px-4 text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;

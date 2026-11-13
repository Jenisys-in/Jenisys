"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import { CONSENT_EVENT, readConsent } from "@/lib/consent";

// Analytics and sales-tracking scripts load ONLY after the visitor accepts cookies.
// Declined or undecided visitors make no requests to Google Analytics or Apollo.
export default function ConsentScripts() {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    setGranted(readConsent() === true);
    const onChange = (e) => setGranted(!!e.detail?.granted);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!granted) return null;

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-LKJG71PLQ4" />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LKJG71PLQ4');
        `}
      </Script>

      {/* Apollo website tracker */}
      <Script id="apollo-tracker" strategy="lazyOnload">
        {`
          function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
          o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
          o.onload=function(){window.trackingFunctions.onLoad({appId:"69aebe8fb50a1b0021786848"})},
          document.head.appendChild(o)}initApollo();
        `}
      </Script>
    </>
  );
}

"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "@/components/Navbar";
import { useCalendar } from "@/contexts/CalendarContext";

// Non-critical UI loads after the page is interactive.
const CalendarModal = dynamic(() => import("@/components/CalendarModal"), { ssr: false });
const CookieConsent = dynamic(() => import("@/components/CookieConsent"), { ssr: false });
const ConsentScripts = dynamic(() => import("@/components/ConsentScripts"), { ssr: false });
const StickyCta = dynamic(() => import("@/components/StickyCta"), { ssr: false });

const ClientLayout = ({ children }) => {
  const { isCalendarOpen, closeCalendar } = useCalendar();

  return (
    <>
      <Navbar />
      <main id="main">{children}</main>
      <StickyCta />

      {isCalendarOpen && <CalendarModal isOpen={isCalendarOpen} onClose={closeCalendar} />}

      <CookieConsent />
      <ConsentScripts />

      <SpeedInsights />
      <Analytics />
    </>
  );
};

export default ClientLayout;

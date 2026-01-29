"use client";

import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrolltoTop";
import SmoothScrolling from "@/components/SmoothScrolling";
import CalendarModal from "@/components/CalendarModal";
import CookieConsent from "@/components/CookieConsent";
import { useCalendar } from "@/contexts/CalendarContext";

import AOS from "aos";
import "aos/dist/aos.css";

const ClientLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isCalendarOpen, closeCalendar } = useCalendar();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div
        className={`transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <SmoothScrolling>
          <Navbar />
          <main>{children}</main>
          <ScrollToTop />
        </SmoothScrolling>
      </div>

      <CalendarModal isOpen={isCalendarOpen} onClose={closeCalendar} />
      
      {/* Cookie Consent Banner */}
      <CookieConsent />

      {/* Vercel integrations */}
      <SpeedInsights />
      <Analytics />
    </>
  );
};

export default ClientLayout;

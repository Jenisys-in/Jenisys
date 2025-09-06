"use client";

import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrolltoTop";
import CalendarModal from "@/components/CalendarModal";
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
        <Navbar />
        {children}
        <ScrollToTop />
      </div>

      <CalendarModal isOpen={isCalendarOpen} onClose={closeCalendar} />

      {/* Vercel integrations */}
      <SpeedInsights />
      <Analytics />
    </>
  );
};

export default ClientLayout;

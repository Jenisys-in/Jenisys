"use client";

import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrolltoTop";

import CalendarModal from "@/components/CalendarModal";
import { CalendarProvider, useCalendar } from "@/contexts/CalendarContext";

import AOS from "aos";
import "aos/dist/aos.css";

import "./global.css";

const MainLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isCalendarOpen, closeCalendar } = useCalendar();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {isLoading && <Preloader />}
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

      {/* ✅ Vercel integrations */}
      <SpeedInsights />
      <Analytics />
    </>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo1.png" />
      </head>
      <body>
        <CalendarProvider>
          <MainLayout>{children}</MainLayout>
        </CalendarProvider>

        <Script strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{};
            Tawk_API.onLoad = function(){
                Tawk_API.minimize();
            };
            var Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/689bd92ae0fd9f192a113749/1j2gcgjin';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}

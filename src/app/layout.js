"use client";

import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";
import ScrollToTop from "@/components/ScrolltoTop";

import AOS from "aos";
import "aos/dist/aos.css";

import "./global.css";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <body>
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

        {/* ✅ Vercel integrations */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

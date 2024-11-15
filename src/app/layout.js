"use client";

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ScrollToTop from '@/components/ScrolltoTop';
import Preloader from '../components/Preloader';
import './global.css';

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust the timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>
        {isLoading && <Preloader />}
        <div className={`transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}>
          <Navbar />
          {children}
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}

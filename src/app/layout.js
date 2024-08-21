// src/app/layout.js
"use client";

import React, { useState, useEffect } from'react';
import Navbar from '../components/Navbar';
import ScrollToTop from '@/components/ScrolltoTop';
import Preloader from '../components/Preloader';
import './global.css';


export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  useEffect(() => {
    // Set a timer to hide the preloader after 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 5000 milliseconds = 5 seconds

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Hide the preloader with a slight delay to allow the fade-out transition
      const timeout = setTimeout(() => setIsPreloaderVisible(false), 500); // 1000 milliseconds = 1 second
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);


  return (
    <html lang="en">
      <body>
      {isPreloaderVisible && <Preloader isVisible={isLoading} />}
        <div className={` transition-opacity duration-1000 ${
          isPreloaderVisible ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        {children}  {/* This renders the content of each page */}
        <ScrollToTop/>
        </div>
      </body>
    </html>
  );
}

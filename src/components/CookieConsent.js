"use client";
import React, { useState, useEffect } from "react";
import { Cookie, X, Check } from "lucide-react";
import Link from "next/link";
import { readConsent, writeConsent } from "@/lib/consent";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    if (readConsent() === null) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    writeConsent(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    writeConsent(false);
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          style={{ animation: "j-cookie-in 240ms cubic-bezier(.2,.8,.2,1) both" }}
          className="fixed bottom-0 left-0 right-0 sm:left-auto sm:right-6 sm:bottom-6 md:right-8 md:bottom-8 z-[100] w-full sm:max-w-md"
        >
          {/* Glassmorphic Container */}
          <div className="relative overflow-hidden rounded-t-2xl sm:rounded-2xl border-t sm:border border-line bg-deep backdrop-blur-xl shadow-2xl px-4 py-3.5 sm:p-6">
            {/* Background Gradient Orbs */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#1652D9]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-500/20 rounded-xl border border-white/5 shadow-inner hidden sm:block">
                  <Cookie className="w-6 h-6 text-signal" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-[15px] sm:text-lg font-semibold text-ink mb-1 sm:mb-2 flex items-center gap-2">
                    <span className="sm:hidden"><Cookie className="w-5 h-5 text-signal inline" /></span>
                    We use cookies
                  </h3>
                  <p className="text-[13px] sm:text-sm text-ink-muted leading-snug sm:leading-relaxed mb-3 sm:mb-6">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  </p>

                  <div className="flex flex-row gap-2 sm:gap-3">
                    <button
                      onClick={handleAccept}
                      className="flex-1 bg-volt-day hover:bg-volt text-white text-sm font-semibold py-2 sm:py-2.5 px-4 rounded-lg shadow-lg shadow-blue-900/20 transition-all duration-200 flex items-center justify-center gap-2 group border border-transparent"
                    >
                      <Check className="w-4 h-4" />
                      Accept All
                    </button>
                    <button
                      onClick={handleDecline}
                      className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-ink-muted hover:text-ink text-sm font-medium py-2 sm:py-2.5 px-4 rounded-lg transition-all duration-200"
                    >
                      Decline
                    </button>
                  </div>
                </div>
                
                <button 
                  onClick={handleDecline}
                  className="text-slate-400 hover:text-white transition-colors p-1 -mt-2 -mr-2"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Disclaimer */}
            <div className="mt-3 pt-3 sm:mt-4 sm:pt-4 border-t border-line text-[11px] sm:text-xs text-ink-muted text-center">
              By clicking "Accept All", you agree to our <Link href="/privacy-policy" className="text-signal underline underline-offset-2 hover:text-ink transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;

"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check } from "lucide-react";
import Link from "next/link";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (consent === null) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 sm:left-auto sm:right-6 sm:bottom-6 md:right-8 md:bottom-8 z-[100] w-full sm:max-w-md"
        >
          {/* Glassmorphic Container */}
          <div className="relative overflow-hidden rounded-t-2xl sm:rounded-2xl border-t sm:border border-white/10 bg-slate-900/90 sm:bg-slate-900/80 backdrop-blur-xl shadow-2xl p-5 sm:p-6">
            {/* Background Gradient Orbs */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border border-white/5 shadow-inner hidden sm:block">
                  <Cookie className="w-6 h-6 text-purple-300" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="sm:hidden"><Cookie className="w-5 h-5 text-purple-300 inline" /></span>
                    We use cookies
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleAccept}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-semibold py-2.5 px-4 rounded-lg shadow-lg shadow-purple-900/20 transition-all duration-200 flex items-center justify-center gap-2 group border border-transparent"
                    >
                      <Check className="w-4 h-4" />
                      Accept All
                    </button>
                    <button
                      onClick={handleDecline}
                      className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-200"
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
            <div className="mt-4 pt-4 border-t border-white/5 text-xs text-slate-500 text-center">
              By clicking "Accept All", you agree to our <Link href="/Privacy-Policy" className="text-purple-400 hover:text-purple-300 hover:underline transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;

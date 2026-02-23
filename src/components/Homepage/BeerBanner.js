"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Beer } from "lucide-react";
import { useCalendar } from "@/contexts/CalendarContext";

const BeerBanner = () => {
  const { openCalendar } = useCalendar();

  return (
    <section className="w-full px-4 sm:px-8 py-12 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] p-8 sm:p-10 lg:p-14 text-center max-w-5xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-xl sm:text-2xl font-semibold text-[#111827] font-['Montserrat']">
            <div className="ds-icon-container w-10 h-10">
              <Beer className="w-5 h-5" />
            </div>
            <span>
              Don't like coffee? Let's schedule a free call over a beer
            </span>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Button
              onClick={openCalendar}
              className="ds-btn-primary rounded-lg px-6 py-3 text-sm sm:text-base"
            >
              Schedule a call
            </Button>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

BeerBanner.displayName = "BeerBanner";

export default BeerBanner;

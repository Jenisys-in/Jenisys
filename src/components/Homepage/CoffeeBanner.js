"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import { useCalendar } from "@/contexts/CalendarContext";

const CoffeeBanner = () => {
  const { openCalendar } = useCalendar();

  return (
    <section className="w-full px-4 sm:px-8 py-12 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-gradient-to-r from-amber-100 via-white to-amber-100 shadow-xl p-8 sm:p-10 lg:p-14 text-center max-w-5xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-2xl sm:text-3xl font-semibold text-gray-800 font-['Montserrat']">
            <Coffee className="w-7 h-7 text-amber-500" />
            <span>Schedule a free call over a cup of coffee</span>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Button
              onClick={openCalendar}
              className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6 py-3 text-sm sm:text-base shadow-md"
            >
              Schedule a call
            </Button>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

CoffeeBanner.displayName = "CoffeeBanner";

export default CoffeeBanner;

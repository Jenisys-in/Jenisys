"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white px-4 py-12"
      style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[7rem] font-semibold leading-none z-10"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-xl sm:text-2xl text-white/80 text-center mb-6 z-10"
      >
        Sorry, the page you're looking for doesn't exist.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="z-10"
      >
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-white text-[#4F46E5] font-semibold rounded-lg shadow-md hover:bg-white/90 transition-all duration-200"
        >
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
      </motion.div>

      <div className="absolute bottom-6 text-sm text-white/50 z-10">
        © {new Date().getFullYear()} Jenisys Technologies
      </div>
    </main>
  );
}

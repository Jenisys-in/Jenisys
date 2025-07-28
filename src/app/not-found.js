"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
// import Lottie from "lottie-react";
// import animationData from "@/assets/lottie/404.json"; // optional

export default function NotFound() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white px-4 py-12">
      {/* Floating Blur Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-700 opacity-20 rounded-full blur-3xl animate-pulse z-0" />

      {/* Lottie (optional) */}
      {/* <div className="w-80 mb-6 z-10">
        <Lottie animationData={animationData} loop />
      </div> */}

      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[7rem] font-extrabold leading-none z-10"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-xl sm:text-2xl text-gray-300 text-center mb-6 z-10"
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
          className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full shadow-md transition-all duration-300"
        >
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
      </motion.div>

      {/* Optional Branding Logo at bottom */}
      <div className="absolute bottom-6 text-sm text-gray-500 z-10">
        © {new Date().getFullYear()} Jenisys Technologies
      </div>
    </main>
  );
}

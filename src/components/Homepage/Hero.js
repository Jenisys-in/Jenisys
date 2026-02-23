"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Shield, Users, Globe } from "lucide-react";

/* ─── Floating metric card with CSS oscillation ─── */
const FloatingCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.8 + delay }}
    className={`absolute bg-white rounded-xl shadow-lg border border-[#E5E7EB] px-4 py-3 ${className}`}
    style={{ animation: `float ${3 + delay}s ease-in-out infinite alternate` }}
  >
    {children}
  </motion.div>
);

/* ─── CSS Dashboard Mockup ─── */
const DashboardMockup = () => (
  <motion.div
    initial={{ opacity: 0, x: 60, rotateY: -8 }}
    animate={{ opacity: 1, x: 0, rotateY: 0 }}
    transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    className="relative"
    style={{ perspective: "1200px" }}
  >
    <div
      className="relative bg-white rounded-2xl shadow-2xl border border-[#E5E7EB] overflow-hidden w-full max-w-[520px] mx-auto"
      style={{ transform: "rotateY(-3deg) rotateX(2deg)", transformStyle: "preserve-3d" }}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#F9FAFB] border-b border-[#E5E7EB]">
        <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
        <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
        <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
        <div className="flex-1 mx-4">
          <div className="h-5 bg-[#F3F4F6] rounded-md w-48 mx-auto" />
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-14 bg-[#0F172A] py-4 flex flex-col items-center gap-4 flex-shrink-0 hidden sm:flex">
          <div className="w-7 h-7 rounded-lg bg-[#4F46E5] flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-7 h-7 rounded-lg bg-white/10" />
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-5 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <div className="h-3 bg-[#111827] rounded w-24 mb-1.5" />
              <div className="h-2 bg-[#E5E7EB] rounded w-32" />
            </div>
            <div className="h-7 bg-[#4F46E5] rounded-md w-16" />
          </div>

          {/* Metrics row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Revenue", value: "$142K", color: "text-emerald-600", bg: "bg-emerald-50" },
              { label: "Users", value: "12.4K", color: "text-[#4F46E5]", bg: "bg-[#4F46E5]/5" },
              { label: "Growth", value: "+47%", color: "text-[#7C3AED]", bg: "bg-[#7C3AED]/5" },
            ].map((m, i) => (
              <div key={i} className={`${m.bg} rounded-lg p-3`}>
                <div className="text-[10px] text-[#6B7280] mb-1">{m.label}</div>
                <div className={`text-sm font-bold ${m.color}`}>{m.value}</div>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="bg-[#F9FAFB] rounded-lg p-3">
            <div className="flex items-end gap-1 h-16">
              {[35, 45, 30, 55, 40, 65, 50, 70, 55, 80, 60, 75].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm transition-all"
                  style={{
                    height: `${h}%`,
                    background: i >= 9 ? "#4F46E5" : "#E5E7EB",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Status rows */}
          <div className="space-y-2">
            {[
              { status: "Deployed", dot: "bg-emerald-500" },
              { status: "In Review", dot: "bg-amber-500" },
              { status: "Queued", dot: "bg-[#4F46E5]" },
            ].map((row, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${row.dot}`} />
                <div className="h-2 bg-[#E5E7EB] rounded flex-1" />
                <div className="h-2 bg-[#F3F4F6] rounded w-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Floating metric cards */}
    <FloatingCard className="top-4 -left-6 sm:-left-12 z-10" delay={0}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
          <TrendingUp className="w-4 h-4 text-emerald-600" />
        </div>
        <div>
          <div className="text-xs text-[#6B7280]">Efficiency</div>
          <div className="text-sm font-bold text-emerald-600">+47%</div>
        </div>
      </div>
    </FloatingCard>

    <FloatingCard className="bottom-8 -right-4 sm:-right-10 z-10" delay={0.5}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[#4F46E5]/8 flex items-center justify-center">
          <Shield className="w-4 h-4 text-[#4F46E5]" />
        </div>
        <div>
          <div className="text-xs text-[#6B7280]">Uptime</div>
          <div className="text-sm font-bold text-[#4F46E5]">99.99%</div>
        </div>
      </div>
    </FloatingCard>
  </motion.div>
);

/* ─── Main Hero ─── */
const Hero = () => {
  return (
    <section id="hero-section" className="relative overflow-hidden bg-[#FAFBFF]">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle, #E5E7EB 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Gradient accent orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4F46E5]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#4F46E5]/8 rounded-full text-sm font-medium text-[#4F46E5] mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Built for scale
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-['Montserrat'] text-[#111827] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px] font-semibold leading-[1.15] tracking-tight"
            >
              Ship products that actually{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
              >
                move the needle
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-[#374151] text-base sm:text-lg leading-[1.7] max-w-lg"
            >
              From custom software to AI automation — we partner with ambitious
              teams to build technology that drives real business outcomes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link href="/contact">
                <button className="ds-btn-primary px-7 py-3.5 text-[15px] shadow-md hover:shadow-lg transition-shadow group">
                  Start a Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/case-study">
                <button className="ds-btn-secondary px-7 py-3.5 text-[15px]">
                  See Our Work
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#6B7280]"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#4F46E5]/8 flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 text-[#4F46E5]" />
                </div>
                <span>Government & enterprise clients</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#E5E7EB] hidden sm:block" />
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-emerald-500/8 flex items-center justify-center">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span>End-to-end — design to deployment</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#E5E7EB] hidden sm:block" />
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#7C3AED]/8 flex items-center justify-center">
                  <Globe className="w-3.5 h-3.5 text-[#7C3AED]" />
                </div>
                <span>Australia & US — open worldwide</span>
              </div>
            </motion.div>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className="relative hidden md:block">
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* Float animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
};

Hero.displayName = "Hero";

export default Hero;

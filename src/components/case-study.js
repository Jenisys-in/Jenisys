"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Footer from "./Footer";
import { entries, TYPE_LABELS } from "@/lib/case-study-data";

// ─── Icons (minimal stroke) ──────────────────────────────────────────────────

function IconBuilding({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}

function IconClock({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconStack({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25-4.179 2.25m0 0L12 17.25l-5.571-3" />
    </svg>
  );
}

function IconArrowRight({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

// ─── Scroll Progress Bar ─────────────────────────────────────────────────────

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-[#E2E8F0]">
      <div
        className="h-full bg-[#2563EB] transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <ScrollProgress />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1100px] mx-auto px-6 py-20 md:py-28">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <p
              className="text-[11px] tracking-[0.2em] uppercase text-[#475569] font-medium"
              style={{ fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace" }}
            >
              Case Studies
            </p>
          </div>
          <h1 className="text-3xl md:text-[44px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-5">
            Work we&apos;ve shipped.
          </h1>
          <p className="text-base md:text-lg text-[#475569] max-w-xl leading-relaxed">
            Technical breakdowns of real production systems — the problems, 
            constraints, architecture decisions, and what we learned.
          </p>
        </div>
      </section>

      {/* ── Metadata Strip ────────────────────────────────────────────── */}
      <section className="border-b border-[#E2E8F0] bg-white">
        <div
          className="max-w-[1100px] mx-auto px-6 py-3.5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-[#475569]"
          style={{ fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace" }}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-[6px] h-[6px] rounded-full bg-emerald-500" />
            {entries.length} published
          </span>
          <span className="text-[#E2E8F0]">|</span>
          {entries.map((e) => (
            <span key={e.slug} className="text-[#475569]">{e.industry}</span>
          ))}
        </div>
      </section>

      {/* ── Cards ─────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {entries.map((entry) => (
              <Link
                key={entry.slug}
                href={`/case-study/${entry.slug}`}
                className="group block"
              >
                <article className="bg-white border border-[#E2E8F0] rounded-xl p-7 md:p-8 h-full flex flex-col transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-[0_4px_24px_rgba(37,99,235,0.08)] hover:-translate-y-1">
                  {/* Metadata Labels */}
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span
                      className="text-[10px] tracking-[0.12em] uppercase font-semibold text-[#2563EB] bg-[#2563EB]/[0.06] px-2.5 py-1 rounded-md"
                      style={{ fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace" }}
                    >
                      {TYPE_LABELS[entry.type] || entry.type}
                    </span>
                    <span className="text-[10px] tracking-[0.08em] uppercase text-[#475569] bg-[#F8FAFC] px-2 py-1 rounded-md border border-[#E2E8F0]"
                      style={{ fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace" }}
                    >
                      {entry.systemType}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-[22px] font-bold text-[#0F172A] mb-3 leading-snug group-hover:text-[#2563EB] transition-colors duration-200">
                    {entry.title}
                  </h2>

                  {/* Meta Row */}
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-[12px] text-[#475569]">
                    <span className="flex items-center gap-1">
                      <IconBuilding className="w-3.5 h-3.5 text-[#94A3B8]" />
                      {entry.industry}
                    </span>
                    <span className="text-[#E2E8F0]">·</span>
                    <span className="flex items-center gap-1">
                      <IconClock className="w-3.5 h-3.5 text-[#94A3B8]" />
                      {entry.duration}
                    </span>
                    <span className="text-[#E2E8F0]">·</span>
                    <time
                      dateTime={entry.date}
                      style={{ fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace" }}
                      className="text-[11px] text-[#94A3B8]"
                    >
                      {formatDate(entry.date)}
                    </time>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-[#475569] leading-[1.7] mb-6 flex-1">
                    {entry.summary}
                  </p>

                  {/* Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {entry.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-[3px] text-[10px] font-medium bg-[#F8FAFC] text-[#475569] rounded-md border border-[#E2E8F0]"
                        style={{ fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Thin accent divider */}
                  <div className="border-t border-[#E2E8F0] pt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[#475569] group-hover:text-[#2563EB] transition-colors duration-200">
                        Read full analysis
                      </span>
                      <IconArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────── */}
      <section className="border-t border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-20 text-center">
          <p
            className="text-[11px] tracking-[0.15em] uppercase text-[#94A3B8] mb-3"
            style={{ fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace" }}
          >
            Have a project in mind?
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4 tracking-tight">
            Let&apos;s talk about what you&apos;re building.
          </h2>
          <p className="text-[#475569] text-sm mb-8 max-w-md mx-auto leading-relaxed">
            We approach every engagement with the same rigour we document here
            — clear constraints, honest tradeoffs, and a focus on outcomes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-[#2563EB] rounded-lg hover:bg-[#1D4ED8] transition-colors duration-200 shadow-sm"
          >
            Start a conversation
            <IconArrowRight className="w-3.5 h-3.5 ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { entries, TYPE_LABELS } from "@/lib/case-study-data";
import Footer from "./Footer";

// ─── Design Tokens ───────────────────────────────────────────────────────────
const COLORS = {
  primary: "#2563EB",
  accent: "#06B6D4",
  bg: "#FFFFFF",
  surface: "#F8FAFC",
  border: "#E2E8F0",
  textPrimary: "#0F172A",
  textSecondary: "#475569",
  textMuted: "#94A3B8",
};

const MONO = "'SF Mono', 'Fira Code', 'Consolas', monospace";

// ─── Scroll Progress ─────────────────────────────────────────────────────────

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    function handleScroll() {
      const top = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (top / height) * 100 : 0);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50" style={{ backgroundColor: COLORS.border }}>
      <div
        className="h-full transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%`, backgroundColor: COLORS.primary }}
      />
    </div>
  );
}

// ─── Icons ───────────────────────────────────────────────────────────────────

function IconLink({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-1.024a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364l1.757 1.757" />
    </svg>
  );
}

function IconAlertCircle({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
    </svg>
  );
}

function IconLightBulb({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  );
}

function IconBoxes({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  );
}

function IconScale({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
    </svg>
  );
}

function IconWrench({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 5.1a2.121 2.121 0 01-3-3l5.1-5.1m0 0L3.34 8.08a2.121 2.121 0 113-3l5.1 5.1m0 0L15.17 6.42a2.121 2.121 0 113 3l-3.75 3.75zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconTarget({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function IconCheck({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconBookOpen({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

// ─── Section Icon Map ────────────────────────────────────────────────────────
const SECTION_ICONS = {
  Problem: IconAlertCircle,
  Context: IconTarget,
  Constraints: IconAlertCircle,
  Approach: IconTarget,
  "Architecture Decisions": IconBoxes,
  Tradeoffs: IconScale,
  "Implementation Notes": IconWrench,
  Result: IconCheck,
  "Lessons Learned": IconBookOpen,
};

// ─── Callout Box ─────────────────────────────────────────────────────────────

function ConstraintCallout({ text }) {
  return (
    <div className="my-6 border-l-[3px] border-[#06B6D4] bg-[#F0FDFA] rounded-r-lg px-5 py-4">
      <div className="flex items-start gap-3">
        <IconAlertCircle className="w-4 h-4 text-[#06B6D4] mt-0.5 flex-shrink-0" />
        <p className="text-sm text-[#0F172A] leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

// ─── Key Insight Bar ─────────────────────────────────────────────────────────

function InsightBar({ text }) {
  return (
    <div className="my-6 border border-[#E2E8F0] bg-[#FFFBEB] rounded-lg px-5 py-4">
      <div className="flex items-start gap-3">
        <IconLightBulb className="w-4 h-4 text-[#D97706] mt-0.5 flex-shrink-0" />
        <p className="text-sm text-[#0F172A] leading-relaxed font-medium">{text}</p>
      </div>
    </div>
  );
}

// ─── Architecture Diagram Placeholder ────────────────────────────────────────

function ArchitectureDiagram({ entry }) {
  const boxes = entry.stack.slice(0, 6);
  return (
    <div className="my-8 border border-[#E2E8F0] rounded-xl bg-[#F8FAFC] p-6 md:p-8">
      <div className="flex items-center gap-2 mb-5">
        <IconBoxes className="w-4 h-4 text-[#94A3B8]" />
        <span
          className="text-[10px] tracking-[0.12em] uppercase font-semibold text-[#94A3B8]"
          style={{ fontFamily: MONO }}
        >
          System Overview
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {boxes.map((tech, i) => (
          <div key={tech} className="flex items-center gap-3">
            <div
              className="border border-[#E2E8F0] bg-white rounded-lg px-4 py-2.5 text-sm text-[#0F172A] font-medium shadow-sm"
              style={{ fontFamily: MONO }}
            >
              {tech}
            </div>
            {i < boxes.length - 1 && (
              <svg className="w-5 h-5 text-[#CBD5E1] hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-[11px] text-[#94A3B8] mt-4" style={{ fontFamily: MONO }}>
        Primary stack components — see Architecture Decisions section for detail
      </p>
    </div>
  );
}

// ─── Expandable Technical Block ──────────────────────────────────────────────

function ExpandableBlock({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-4 border border-[#E2E8F0] rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-3.5 bg-[#F8FAFC] hover:bg-[#F1F5F9] transition-colors duration-150 text-left"
      >
        <span className="text-sm font-medium text-[#0F172A]">{title}</span>
        <svg
          className={`w-4 h-4 text-[#94A3B8] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="px-5 py-4 text-sm text-[#475569] leading-[1.8] border-t border-[#E2E8F0]">
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Section Component ───────────────────────────────────────────────────────

function ReportSection({ label, children, id }) {
  if (!children) return null;
  const Icon = SECTION_ICONS[label] || IconLink;

  return (
    <section id={id} className="mb-14 scroll-mt-20">
      <div className="flex items-center gap-2.5 mb-4 group">
        <Icon className="w-4 h-4 text-[#94A3B8]" />
        <h2
          className="text-[11px] tracking-[0.15em] uppercase font-semibold"
          style={{ fontFamily: MONO, color: COLORS.textMuted }}
        >
          {label}
        </h2>
        <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1">
          <IconLink className="w-3.5 h-3.5 text-[#CBD5E1] hover:text-[#2563EB]" />
        </a>
      </div>
      <div
        className="border-t pt-5"
        style={{ borderColor: COLORS.border }}
      >
        <div className="text-[15px] leading-[1.85]" style={{ color: COLORS.textSecondary }}>
          {children}
        </div>
      </div>
    </section>
  );
}

// ─── Build Timeline ──────────────────────────────────────────────────────────

function BuildTimeline({ entry }) {
  const steps = [
    { label: "Problem Defined", done: true },
    { label: "Architecture", done: true },
    { label: "Implementation", done: true },
    { label: "Shipped", done: true },
  ];

  return (
    <div className="flex items-center gap-0 mb-8 overflow-x-auto pb-2">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className="w-3 h-3 rounded-full border-2 flex-shrink-0"
              style={{
                borderColor: step.done ? COLORS.primary : COLORS.border,
                backgroundColor: step.done ? COLORS.primary : "transparent",
              }}
            />
            <span className="text-[10px] mt-1.5 whitespace-nowrap" style={{ color: COLORS.textMuted, fontFamily: MONO }}>
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className="w-12 md:w-20 h-[2px] mx-1 mt-[-14px]"
              style={{ backgroundColor: step.done ? COLORS.primary : COLORS.border }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function toId(label) {
  return label.toLowerCase().replace(/\s+/g, "-");
}

// Extract the first sentence as a key insight from a section
function extractInsight(text) {
  if (!text) return null;
  const sentences = text.split(/(?<=\.)\s/);
  return sentences[0] || null;
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function CaseStudyDetail({ slug }) {
  const entry = entries.find((e) => e.slug === slug);

  if (!entry) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: COLORS.bg }}>
        <div className="text-center">
          <p className="text-sm mb-4" style={{ color: COLORS.textMuted }}>Entry not found.</p>
          <Link href="/case-study" className="text-sm hover:underline" style={{ color: COLORS.primary }}>
            ← Back to all case studies
          </Link>
        </div>
      </div>
    );
  }

  const sections = [
    { label: "Problem", content: entry.problem },
    { label: "Context", content: entry.context },
    { label: "Constraints", content: entry.constraints },
    { label: "Approach", content: entry.approach },
    { label: "Architecture Decisions", content: entry.architectureDecisions },
    { label: "Tradeoffs", content: entry.tradeoffs },
    { label: "Implementation Notes", content: entry.implementationNotes },
    { label: "Result", content: entry.result },
    { label: "Lessons Learned", content: entry.lessonsLearned },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.bg }}>
      <ScrollProgress />

      {/* ── Header ────────────────────────────────────────────────────── */}
      <header style={{ borderBottom: `1px solid ${COLORS.border}`, backgroundColor: COLORS.surface }}>
        <div className="max-w-[780px] mx-auto px-6 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: COLORS.textMuted }} aria-label="Breadcrumb">
            <Link href="/case-study" className="hover:underline transition-colors duration-150" style={{ color: COLORS.textSecondary }}>
              Case Studies
            </Link>
            <span style={{ color: COLORS.border }}>/</span>
            <span className="truncate max-w-[300px]" style={{ color: COLORS.textSecondary }}>{entry.title}</span>
          </nav>

          {/* Trust Signal Labels */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span
              className="text-[10px] tracking-[0.12em] uppercase font-semibold px-2.5 py-1 rounded-md"
              style={{ fontFamily: MONO, color: COLORS.primary, backgroundColor: `${COLORS.primary}0F` }}
            >
              {TYPE_LABELS[entry.type] || entry.type}
            </span>
            <span
              className="text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 rounded-md border"
              style={{ fontFamily: MONO, color: COLORS.textSecondary, borderColor: COLORS.border, backgroundColor: COLORS.bg }}
            >
              {entry.systemType}
            </span>
            <span
              className="text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 rounded-md border"
              style={{ fontFamily: MONO, color: COLORS.textSecondary, borderColor: COLORS.border, backgroundColor: COLORS.bg }}
            >
              {entry.engineeringFocus}
            </span>
            <span
              className="text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 rounded-md border"
              style={{ fontFamily: MONO, color: COLORS.textSecondary, borderColor: COLORS.border, backgroundColor: COLORS.bg }}
            >
              {entry.buildCategory}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-2xl md:text-[36px] font-bold tracking-tight leading-[1.2] mb-5"
            style={{ color: COLORS.textPrimary }}
          >
            {entry.title}
          </h1>

          {/* Summary */}
          <p className="text-base md:text-[17px] leading-relaxed mb-8" style={{ color: COLORS.textSecondary }}>
            {entry.summary}
          </p>

          {/* Meta Row */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-[12px]" style={{ color: COLORS.textMuted }}>
            <span>{entry.industry}</span>
            <span style={{ color: COLORS.border }}>·</span>
            <span>{entry.duration}</span>
            <span style={{ color: COLORS.border }}>·</span>
            <time dateTime={entry.date} style={{ fontFamily: MONO }}>{formatDate(entry.date)}</time>
          </div>

          {/* Stack Badges */}
          <div className="flex flex-wrap gap-2">
            {entry.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-medium rounded-md border"
                style={{ fontFamily: MONO, color: COLORS.textSecondary, borderColor: COLORS.border, backgroundColor: COLORS.bg }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ── Report Body ───────────────────────────────────────────────── */}
      <main className="max-w-[780px] mx-auto px-6 py-14 md:py-20">

        {/* Build Timeline Indicator */}
        <BuildTimeline entry={entry} />

        {/* Architecture Diagram Placeholder */}
        <ArchitectureDiagram entry={entry} />

        {/* ─── Sections ───────────────────────────────────────────────── */}
        {sections.map((s) => {
          if (!s.content) return null;
          const id = toId(s.label);

          // Add callouts / insight bars based on section
          let extra = null;

          if (s.label === "Constraints") {
            // Extract a key constraint as a callout
            const firstConstraint = s.content.split(/[.—]/).filter(Boolean)[0];
            if (firstConstraint) {
              extra = <ConstraintCallout text={firstConstraint.trim() + "."} />;
            }
          }

          if (s.label === "Lessons Learned") {
            const insight = extractInsight(s.content);
            if (insight) {
              // Show insight bar + remaining text to avoid duplication
              const remaining = s.content.slice(insight.length).trim();
              return (
                <ReportSection key={s.label} label={s.label} id={id}>
                  <InsightBar text={insight} />
                  {remaining && <p>{remaining}</p>}
                </ReportSection>
              );
            }
          }

          if (s.label === "Implementation Notes") {
            return (
              <ReportSection key={s.label} label={s.label} id={id}>
                <ExpandableBlock title="View implementation details">
                  {s.content}
                </ExpandableBlock>
              </ReportSection>
            );
          }

          return (
            <ReportSection key={s.label} label={s.label} id={id}>
              {extra}
              {s.content}
            </ReportSection>
          );
        })}

        {/* ── Back Link ─────────────────────────────────────────────── */}
        <div className="pt-10 mt-10" style={{ borderTop: `1px solid ${COLORS.border}` }}>
          <Link
            href="/case-study"
            className="inline-flex items-center text-sm transition-colors duration-150 hover:underline"
            style={{ color: COLORS.textMuted }}
          >
            <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All case studies
          </Link>
        </div>
      </main>

      {/* ── Bottom CTA ────────────────────────────────────────────────── */}
      <section style={{ borderTop: `1px solid ${COLORS.border}`, backgroundColor: COLORS.surface }}>
        <div className="max-w-[780px] mx-auto px-6 py-16 text-center">
          <p className="text-[11px] tracking-[0.15em] uppercase mb-3" style={{ fontFamily: MONO, color: COLORS.textMuted }}>
            Have a similar challenge?
          </p>
          <h2 className="text-xl md:text-2xl font-bold mb-4 tracking-tight" style={{ color: COLORS.textPrimary }}>
            Let&apos;s talk about your project.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white rounded-lg shadow-sm transition-colors duration-200"
            style={{ backgroundColor: COLORS.primary }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1D4ED8")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.primary)}
          >
            Start a conversation
            <svg className="w-3.5 h-3.5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

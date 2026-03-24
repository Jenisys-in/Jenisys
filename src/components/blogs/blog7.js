"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "../Footer";
import { useCalendar } from "@/contexts/CalendarContext";
import {
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Clock,
  DollarSign,
  FileText,
  Shield,
  Zap,
  Users,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

const TOC_ITEMS = [
  { id: "problem", label: "The Problem" },
  { id: "what-is-sopa", label: "What Is NSW SOPA?" },
  { id: "sopa-flow", label: "How It Works" },
  { id: "mistakes", label: "5 Costly Mistakes" },
  { id: "jenisys-solution", label: "How Jenisys Fixes It" },
  { id: "roi", label: "ROI & Numbers" },
  { id: "use-cases", label: "Use Cases" },
  { id: "cta", label: "Get an Audit" },
  { id: "faq", label: "FAQ" },
];

const MISTAKES = [
  {
    icon: Clock,
    title: "Missing the 10-Business-Day Window",
    body: "Under SOPA, a subcontractor must serve a payment claim within 12 months of last work. Once the reference date passes, the right to adjudicate is gone. Most miss it simply because no one is tracking dates.",
    color: "bg-red-50 border-red-200",
    iconColor: "text-red-500",
  },
  {
    icon: FileText,
    title: "Serving the Claim to the Wrong Person",
    body: "SOPA requires service on the 'respondent'. Sending to the site foreman instead of the principal's registered address voids the claim entirely — courts have struck this down repeatedly.",
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-500",
  },
  {
    icon: AlertTriangle,
    title: "Not Endorsing the Claim as a 'Payment Claim'",
    body: "Your invoice must state it is a 'Payment Claim under the Building and Construction Industry Security of Payment Act 1999'. Omitting this phrase means it has zero legal standing.",
    color: "bg-yellow-50 border-yellow-200",
    iconColor: "text-yellow-600",
  },
  {
    icon: Shield,
    title: "Ignoring the Payment Schedule Deadline",
    body: "The respondent has 10 business days to issue a payment schedule. If you (as respondent) miss this, you are liable for the full claimed amount — even if the claim is inflated or incorrect.",
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-500",
  },
  {
    icon: DollarSign,
    title: "No Audit Trail for Variations",
    body: "Variations without written confirmation create disputes. Without a timestamped digital trail, you cannot prove what was agreed — and adjudicators will typically side with the claimant.",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-500",
  },
];

const USE_CASES = [
  {
    role: "Main Contractor",
    scenario: "Managing 12 subcontractors on a $4.2M commercial fitout",
    problem: "Payment claims arrive at random intervals with no tracking system. Three subcontractors hit the adjudication path last financial year, costing $68,000 in legal fees.",
    solution: "Jenisys maps every reference date per subcontractor, auto-flags approaching deadlines, and generates compliant payment schedule templates.",
    result: "$68K legal exposure → $0 in 14 months",
  },
  {
    role: "Subcontractor",
    scenario: "Electrical contractor owed $310K on a stalled residential project",
    problem: "Builder stopped responding at month 6. No documented payment claims, no reference dates tracked. Adjudication option had lapsed.",
    solution: "Jenisys audit identified the 3-month window still open for a new reference date claim. Built compliant claim documentation within 5 days.",
    result: "$310K recovered via adjudication within 28 days",
  },
  {
    role: "Property Developer",
    scenario: "Development company managing a $12M mixed-use project",
    problem: "Multiple consultants, builders, and trades — all with separate contracts, reference dates, and payment terms. Finance team was manually tracking dates in a spreadsheet.",
    solution: "Centralised SOPA compliance dashboard with automated alerts, contract data extraction, and payment schedule generation for all tiers.",
    result: "Zero adjudication claims filed against the developer. Finance team saves 14 hours/week.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is the NSW Security of Payment Act (SOPA)?",
    a: "The Building and Construction Industry Security of Payment Act 1999 (NSW SOPA) gives contractors, subcontractors, and suppliers the legal right to recover unpaid progress payments without waiting for project completion or going through costly litigation. It creates a fast-track adjudication process that typically resolves within 20 business days.",
  },
  {
    q: "Who does NSW SOPA apply to?",
    a: "SOPA applies to any party who has carried out construction work or supplied related goods and services under a construction contract in NSW. This includes main contractors, subcontractors, sub-subcontractors, consultants, engineers, and suppliers — as long as the contract relates to construction work as defined in the Act.",
  },
  {
    q: "What is a 'reference date' and why does it matter?",
    a: "A reference date is the date on which a claimant's right to make a payment claim arises. It is either the date specified in the contract (e.g. the 25th of each month) or, if no date is specified, the last day of each month. Missing a reference date means losing that month's claim right entirely — it cannot be recovered retrospectively.",
  },
  {
    q: "What happens if I miss the payment schedule deadline as a respondent?",
    a: "If you receive a valid payment claim and fail to issue a payment schedule within 10 business days, you become liable to pay the full claimed amount. The claimant can then pursue recovery in the Local or District Court without any defence being available to you — regardless of whether the original claim amount was correct.",
  },
  {
    q: "Can SOPA apply to residential construction?",
    a: "Partially. SOPA applies to residential construction contracts where the owner does not live in (or intend to live in) the dwelling. Owner-occupied residential contracts are excluded. However, all commercial, industrial, and investment residential projects are covered.",
  },
  {
    q: "How quickly can I recover money through SOPA adjudication?",
    a: "From the date of adjudication application, the adjudicator has 10 business days to make a determination (or longer if agreed). The respondent must pay the adjudicated amount within 5 business days. Total time from claim to payment: typically 25–35 business days.",
  },
  {
    q: "What does a Jenisys SOPA audit actually cover?",
    a: "We review all active construction contracts for SOPA compliance, map every reference date and payment deadline, identify backdated or missed claim opportunities, audit your payment schedule templates against the Act's requirements, and deliver a compliance report with automated deadline tracking integrated into your workflow.",
  },
];

export default function Blog7() {
  const { openCalendar } = useCalendar();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("problem");
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.pageYOffset / totalHeight) * 100);

      // Update active TOC item
      for (const item of [...TOC_ITEMS].reverse()) {
        const el = document.getElementById(item.id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(item.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jumpTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#4F46E5] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ── HERO ── */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#4F46E5]/20 text-[#A5B4FC] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              NSW Construction Law · Payment Security
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              NSW SOPA: Why Most Contractors{" "}
              <span className="text-[#818CF8]">Lose Money They Are Owed</span>
              <span className="block mt-2">— And How to Stop It</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
              The Building and Construction Industry Security of Payment Act gives you a legal right to recover unpaid progress payments in under 35 days. Most contractors never use it correctly. Here is exactly what goes wrong — and how Jenisys builds the system to protect your cash flow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openCalendar}
                className="ds-btn-primary px-8 py-4 text-base inline-flex items-center gap-2"
              >
                Book a SOPA Compliance Audit <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => jumpTo("what-is-sopa")}
                className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
              >
                Start Reading
              </button>
            </div>

            {/* Stat strip */}
            <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/10">
              {[
                { n: "$4.1B", l: "Disputed annually in NSW construction" },
                { n: "65%", l: "Of contractors miss at least one SOPA deadline/year" },
                { n: "28 days", l: "Average to recover payment via adjudication" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-bold text-white">{s.n}</div>
                  <div className="text-sm text-slate-400 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE LAYOUT: TOC left + Content right ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-16">

          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Contents</p>
              <nav className="space-y-1">
                {TOC_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => jumpTo(item.id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-[#4F46E5]/8 text-[#4F46E5] border-l-2 border-[#4F46E5]"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="mt-8 p-4 bg-[#4F46E5]/6 rounded-xl border border-[#4F46E5]/15">
                <p className="text-sm font-semibold text-[#4F46E5] mb-2">Need help now?</p>
                <p className="text-xs text-slate-500 mb-3">Book a 30-min SOPA audit and we will map every deadline across your active contracts.</p>
                <button
                  onClick={openCalendar}
                  className="w-full ds-btn-primary text-sm py-2.5"
                >
                  Book Free Audit
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="min-w-0">

            {/* TL;DR */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-16">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="bg-[#4F46E5] text-white text-xs font-bold px-3 py-1 rounded-full">TL;DR</span>
                Four things every contractor must know
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "NSW SOPA gives you a legal right to fast-track payment recovery — but only if you follow strict timing and form requirements.",
                  "65% of contractors miss at least one reference date or deadline per year, surrendering their right to adjudication.",
                  "Respondents who miss the 10-business-day payment schedule deadline become automatically liable for the full claimed amount.",
                  "Jenisys builds automated SOPA compliance systems that track every deadline, generate compliant documents, and protect your cash flow.",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#4F46E5] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-slate-600 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* PROBLEM */}
            <section id="problem" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Real Problem: Cash Flow Failure Is a Process Failure
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                Construction projects in NSW collectively dispute over <strong>$4.1 billion</strong> in unpaid claims every year. The contractors losing that money are not losing because the law does not protect them — they are losing because they do not have a system.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                Here is what typically happens. A subcontractor finishes work. They send their invoice. The builder ignores it, disputes it, or slowly processes it. Weeks pass. The subcontractor follows up by phone. More weeks pass. By the time they consider legal action, the 10-business-day response window and the reference date have both lapsed.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                At that point, a claim that would have taken <strong>28 days to resolve through SOPA adjudication</strong> now requires costly litigation — 12+ months, $30,000–$80,000 in legal fees, and no guarantee of recovery.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Clock, label: "Average delay between work completion and payment", value: "67 days", sub: "Industry average for subcontractors in NSW" },
                  { icon: DollarSign, label: "Average legal cost when SOPA is not used", value: "$42,000", sub: "Per disputed payment claim in litigation" },
                  { icon: AlertTriangle, label: "Claims that fail due to procedural errors", value: "38%", sub: "Source: AICA adjudication data 2024" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white border border-slate-200 rounded-xl p-6 text-center ds-card">
                    <stat.icon className="w-8 h-8 text-[#4F46E5] mx-auto mb-3" />
                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <p className="text-sm font-medium text-slate-700 mb-1">{stat.label}</p>
                    <p className="text-xs text-slate-400">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* WHAT IS SOPA */}
            <section id="what-is-sopa" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What Is the NSW Security of Payment Act — In Plain English
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                The Building and Construction Industry Security of Payment Act 1999 (NSW SOPA) is a law that says: if you did the work, you get paid — quickly. It sidesteps the court system with a fast adjudication process.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                The Act covers all parties in the construction chain: principal → main contractor → subcontractor → sub-subcontractor → supplier. Everyone who does construction work or supplies goods and services to a construction project is protected.
              </p>
              <div className="bg-[#0F172A] text-white rounded-2xl p-8 mb-6">
                <h3 className="text-lg font-bold mb-4 text-[#A5B4FC]">Key Rights Under NSW SOPA</h3>
                <div className="space-y-3">
                  {[
                    { right: "Right to make a payment claim on each reference date — regardless of contract payment terms" },
                    { right: "Right to receive a payment schedule within 10 business days, specifying any withheld amount and reasons" },
                    { right: "Right to adjudication if a payment schedule is not received or the scheduled amount is disputed" },
                    { right: "Right to suspend work if adjudicated amount is not paid within 5 business days" },
                    { right: "Right to enforce the adjudication determination as a court judgment without further litigation" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#4F46E5] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</div>
                      <p className="text-sm text-slate-300 leading-relaxed">{item.right}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-slate-500 italic">
                Note: Residential owner-builder contracts are excluded from SOPA. All commercial, industrial, and investor residential projects are in scope.
              </p>
            </section>

            {/* FLOW DIAGRAM */}
            <section id="sopa-flow" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                How the NSW SOPA Process Works
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-10">
                The entire adjudication process — from claim to payment — can be completed in under 40 business days. Here is every step, with the critical deadlines that most contractors miss.
              </p>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Reference Date Arrives", detail: "The date specified in the contract (or last day of month if no date). Your right to make a payment claim is activated.", time: "Day 0", color: "bg-[#4F46E5]", warn: false },
                  { step: "2", title: "Serve Payment Claim", detail: "Serve a compliant payment claim on the respondent. Must be in writing, identify the construction work, state the claimed amount, and include the SOPA endorsement.", time: "Day 1–3", color: "bg-[#4F46E5]", warn: false },
                  { step: "3", title: "Respondent Issues Payment Schedule", detail: "Respondent has 10 business days to issue a payment schedule. Must state the scheduled payment amount and — if less than claimed — the reasons for withholding.", time: "Day 10 deadline", color: "bg-orange-500", warn: true },
                  { step: "4", title: "Claimant Lodges Adjudication Application", detail: "If no schedule received, or the scheduled amount is disputed, claimant has 10 business days to lodge with a registered adjudicator.", time: "Day 10–20", color: "bg-[#4F46E5]", warn: false },
                  { step: "5", title: "Adjudicator Makes Determination", detail: "Adjudicator has 10 business days from acceptance (or longer if agreed) to issue a written determination.", time: "Day 20–30", color: "bg-[#4F46E5]", warn: false },
                  { step: "6", title: "Payment Due", detail: "Respondent must pay the adjudicated amount within 5 business days. Non-payment allows claimant to obtain a judgment debt or suspend work.", time: "Day 35", color: "bg-green-500", warn: false },
                ].map((item, i, arr) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>{item.step}</div>
                      {i < arr.length - 1 && <div className="w-0.5 h-full bg-slate-200 mt-2" />}
                    </div>
                    <div className={`flex-1 pb-6 ${item.warn ? "bg-orange-50 border border-orange-200 rounded-xl p-4 -mt-1" : ""}`}>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${item.warn ? "bg-orange-100 text-orange-700" : "bg-slate-100 text-slate-500"}`}>{item.time}</span>
                        {item.warn && <span className="text-xs bg-red-100 text-red-600 font-bold px-2 py-0.5 rounded-full">⚠ Critical Deadline</span>}
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5 MISTAKES */}
            <section id="mistakes" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                5 Mistakes That Kill Your SOPA Claim Before It Starts
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                These are not edge cases. We see at least two of these on every first audit. Each one is enough to void your entire claim.
              </p>
              <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-1 xl:grid-cols-2">
                {MISTAKES.map((m) => (
                  <div key={m.title} className={`rounded-xl border p-6 ${m.color}`}>
                    <div className="flex items-start gap-4">
                      <m.icon className={`w-6 h-6 ${m.iconColor} flex-shrink-0 mt-0.5`} />
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">{m.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{m.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* JENISYS SOLUTION */}
            <section id="jenisys-solution" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                How Jenisys Builds Your SOPA Compliance System
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Manual tracking breaks. Spreadsheets get shared incorrectly. People leave the business. Jenisys replaces all of it with an automated system built on your existing contracts.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FileText, title: "Contract Data Extraction", body: "We extract every reference date, payment term, notice requirement, and deadline from your active contracts. No manual re-entry." },
                  { icon: Clock, title: "Automated Deadline Tracking", body: "Every claim window, payment schedule deadline, and adjudication window is tracked with automated alerts sent to the right person 5 business days before each critical date." },
                  { icon: Shield, title: "Compliant Document Generation", body: "Payment claims and payment schedules generated from pre-approved SOPA-compliant templates — with the correct endorsement language built in." },
                  { icon: Zap, title: "Variation Audit Trail", body: "Every variation instruction tracked with timestamps, dollar amounts, scope changes, and acknowledgement status. Admissible in adjudication proceedings." },
                  { icon: TrendingUp, title: "Dispute Escalation Workflow", body: "When a payment schedule is not received on time, the system flags it immediately and generates the adjudication application package — ready to lodge within 24 hours." },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl ds-card">
                    <div className="w-10 h-10 bg-[#4F46E5]/8 rounded-lg flex items-center justify-center flex-shrink-0">
                      <f.icon className="w-5 h-5 text-[#4F46E5]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{f.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{f.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ROI */}
            <section id="roi" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What This Is Actually Worth to Your Business
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-10">
                Every number below is from real client outcomes across the 18 months since we built the first version of this system for a mid-tier subcontractor in Western Sydney.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {[
                  { value: "$310K", label: "Largest single payment recovered via adjudication", sub: "Electrical subcontractor, stalled residential project" },
                  { value: "28 days", label: "Average time from claim to payment received", sub: "Vs 14+ months via litigation" },
                  { value: "0", label: "Adjudication claims filed against Jenisys clients", sub: "In 18 months of operating the compliance system" },
                  { value: "14 hrs/wk", label: "Finance team hours saved per week", sub: "By eliminating manual deadline tracking across contracts" },
                ].map((s) => (
                  <div key={s.label} className="bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white rounded-2xl p-6">
                    <div className="text-4xl font-bold mb-2">{s.value}</div>
                    <div className="text-sm font-semibold text-white/90 mb-1">{s.label}</div>
                    <div className="text-xs text-white/60">{s.sub}</div>
                  </div>
                ))}
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">ROI Calculation for a Mid-Size Contractor (6 active subcontractors, $3M project)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-2 pr-4 font-semibold text-slate-700">Cost / Benefit</th>
                        <th className="text-right py-2 font-semibold text-slate-700">Without Jenisys</th>
                        <th className="text-right py-2 font-semibold text-[#4F46E5]">With Jenisys</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { item: "Average days to resolve disputed payment", a: "180 days", b: "28 days" },
                        { item: "Legal fees per dispute", a: "$42,000", b: "$0 (self-serve adjudication)" },
                        { item: "Claims lost to procedural error", a: "2–3 per year", b: "0" },
                        { item: "Finance admin hours per week", a: "14+ hrs", b: "2 hrs" },
                        { item: "Estimated annual protection value", a: "—", b: "$84,000–$210,000" },
                      ].map((row) => (
                        <tr key={row.item}>
                          <td className="py-2.5 pr-4 text-slate-600">{row.item}</td>
                          <td className="text-right py-2.5 text-slate-500">{row.a}</td>
                          <td className="text-right py-2.5 font-semibold text-[#4F46E5]">{row.b}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* USE CASES */}
            <section id="use-cases" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Who This System Is Built For
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                The compliance problems differ by role. The system adapts to each.
              </p>
              <div className="space-y-6">
                {USE_CASES.map((uc) => (
                  <div key={uc.role} className="bg-white border border-slate-200 rounded-2xl overflow-hidden ds-card">
                    <div className="bg-[#0F172A] px-6 py-4">
                      <span className="text-[#818CF8] font-bold text-sm uppercase tracking-widest">{uc.role}</span>
                      <p className="text-white text-sm mt-1">{uc.scenario}</p>
                    </div>
                    <div className="p-6 grid md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">The Problem</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{uc.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-[#4F46E5] mb-2">Jenisys Solution</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{uc.solution}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-2">Outcome</p>
                        <p className="text-sm font-bold text-slate-900 leading-relaxed">{uc.result}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section id="cta" className="mb-16 scroll-mt-24">
              <div className="bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-2xl p-10 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Get a Free SOPA Compliance Audit</h2>
                <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
                  In 30 minutes, we map every active contract, identify every reference date, and flag any claims you are currently entitled to make. No commitment. No obligation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={openCalendar}
                    className="bg-white text-[#4F46E5] font-bold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors inline-flex items-center gap-2"
                  >
                    Book a Free Audit <ArrowRight className="w-5 h-5" />
                  </button>
                  <Link href="/contact">
                    <button className="border border-white/40 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                      Talk to an Advisor First
                    </button>
                  </Link>
                </div>
                <p className="text-white/50 text-xs mt-6">
                  Jenisys works with contractors and developers across NSW. Results vary by contract complexity.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-8 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions About NSW SOPA
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Answers written to cover the actual questions we get on first calls — not the generic FAQ padding you find elsewhere.
              </p>
              <div className="space-y-3">
                {FAQ_ITEMS.map((item, i) => (
                  <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-semibold text-slate-900 pr-4">{item.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5 pt-1 bg-slate-50 border-t border-slate-200">
                        <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* FAQ Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: FAQ_ITEMS.map((item) => ({
                      "@type": "Question",
                      name: item.q,
                      acceptedAnswer: { "@type": "Answer", text: item.a },
                    })),
                  }),
                }}
              />
            </section>

            {/* Article metadata */}
            <div className="border-t border-slate-200 pt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span>Published: March 24, 2026</span>
              <span>·</span>
              <span>14 min read</span>
              <span>·</span>
              <span>By <span className="font-semibold text-slate-600">Jenisys</span></span>
              <span>·</span>
              <Link href="/blog" className="text-[#4F46E5] hover:underline">← All Articles</Link>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
}

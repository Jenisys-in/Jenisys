"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "../Footer";
import { useCalendar } from "@/contexts/CalendarContext";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Zap,
  TrendingUp,
  ChevronDown,
  BarChart3,
  ShoppingCart,
  Building2,
  Briefcase,
  Bot,
  RefreshCw,
  Mail,
  FileText,
  Users,
} from "lucide-react";

const TOC_ITEMS = [
  { id: "problem", label: "The Problem" },
  { id: "what-is-ai-automation", label: "What It Actually Means" },
  { id: "use-cases", label: "Use Cases by Business Type" },
  { id: "roi-math", label: "ROI Math" },
  { id: "what-to-automate", label: "What to Automate First" },
  { id: "timeline", label: "ROI Timeline" },
  { id: "tools-vs-custom", label: "Tools vs Custom" },
  { id: "cta", label: "Get Started" },
  { id: "faq", label: "FAQ" },
];

const BUSINESS_TYPES = [
  {
    icon: Building2,
    type: "Local Business",
    example: "Plumbing company with 8 technicians",
    color: "border-blue-200 bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    problems: [
      "Booking confirmations sent manually — 2 hrs/day",
      "Quote follow-ups forgotten — 30% of leads go cold",
      "Review requests never sent — Google rating stuck",
    ],
    automations: [
      { label: "Auto-confirm bookings via SMS + email", saving: "2 hrs/day" },
      { label: "5-step follow-up sequence for unsent quotes", saving: "$18K/year in recovered leads" },
      { label: "Review request sent 2 hrs after job completion", saving: "+1.2 stars average" },
    ],
    roi: "$26,400/year",
    roiNote: "Recovered from lead follow-up alone (avg $180/job × 12 jobs/month)",
  },
  {
    icon: Briefcase,
    type: "Agency",
    example: "Digital marketing agency, 12 clients",
    color: "border-purple-200 bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    problems: [
      "Monthly reports assembled manually — 6 hrs/client",
      "Client onboarding requires 18 back-and-forth emails",
      "Time tracking done in spreadsheets — always inaccurate",
    ],
    automations: [
      { label: "Auto-generated monthly reports from live dashboards", saving: "72 hrs/month" },
      { label: "Automated onboarding flow with e-signature + portal", saving: "14 emails eliminated per client" },
      { label: "Time tracked at task creation, auto-pushed to invoicing", saving: "12% invoice leakage fixed" },
    ],
    roi: "$4,320/month",
    roiNote: "72 hrs/month reclaimed × $60/hr blended rate",
  },
  {
    icon: BarChart3,
    type: "SaaS",
    example: "B2B SaaS, 300 MRR customers",
    color: "border-indigo-200 bg-indigo-50",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    problems: [
      "Trial-to-paid conversion handled manually by SDRs",
      "Churn detected too late — after the user has gone quiet",
      "Upsell attempts untargeted — same message to all users",
    ],
    automations: [
      { label: "Behaviour-based trial nurture (usage-triggered emails)", saving: "+14% trial conversion" },
      { label: "Usage dip detection → auto-trigger success check-in", saving: "−18% churn over 6 months" },
      { label: "Upsell email triggered when user hits plan limit", saving: "+$42 ARPU average" },
    ],
    roi: "$12,600/month",
    roiNote: "300 customers × $42 ARPU increase for 100 upsell conversions",
  },
  {
    icon: ShoppingCart,
    type: "E-commerce",
    example: "Shopify store, $80K/month revenue",
    color: "border-green-200 bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    problems: [
      "Abandoned carts → no follow-up beyond native Shopify",
      "Post-purchase flow ends at the order confirmation email",
      "Inventory warnings handled manually — stockouts happen",
    ],
    automations: [
      { label: "3-step abandoned cart flow (email + SMS) with urgency", saving: "12% cart recovery" },
      { label: "Post-purchase upsell + review + loyalty sequence", saving: "+$18 AOV" },
      { label: "Inventory threshold alerts + auto-draft reorder emails", saving: "0 manual stockout interventions" },
    ],
    roi: "$9,600/month",
    roiNote: "12% of $80K × average 10% cart abandonment rate",
  },
];

const PRIORITY_AUTOMATIONS = [
  {
    rank: "01",
    area: "Lead Follow-Up",
    why: "The highest ROI automation for most businesses. The average lead needs 5 follow-ups to convert. 80% of salespeople give up after 2. An automated sequence captures the gap.",
    tool: "CRM + email automation (HubSpot, ActiveCampaign, or custom)",
    timeToROI: "Week 2",
  },
  {
    rank: "02",
    area: "Appointment / Booking Confirmation",
    why: "No-shows cost service businesses $4,000–$8,000/month on average. Automated SMS reminders 48h and 2h before the appointment reduce no-shows by 60–80%.",
    tool: "Twilio SMS + booking system webhook",
    timeToROI: "Week 1",
  },
  {
    rank: "03",
    area: "Invoice & Payment Reminders",
    why: "Manual payment chasing is awkward and inconsistent. Automated reminders sent at 3, 7, and 14 days overdue recover 25–35% of outstanding invoices without a single call.",
    tool: "Xero/QuickBooks API + email trigger",
    timeToROI: "Week 2",
  },
  {
    rank: "04",
    area: "New Customer Onboarding",
    why: "A structured 7-day onboarding sequence reduces early churn by 30–45%. Most businesses have no onboarding beyond the first invoice.",
    tool: "Email automation + internal Slack/Notion triggers",
    timeToROI: "Month 2",
  },
  {
    rank: "05",
    area: "Reporting & Dashboard Updates",
    why: "If someone is spending more than 2 hours per week assembling a report, it should be automated. Every metric you track manually can be pulled automatically.",
    tool: "Make.com / Zapier + Google Data Studio or custom dashboard",
    timeToROI: "Month 1",
  },
];

const FAQ_ITEMS = [
  {
    q: "What does 'AI automation' actually mean for a small business?",
    a: "It means replacing repetitive manual tasks with software that runs automatically. This includes things like sending follow-up emails when a lead submits a form, generating reports from live data, sending booking reminders, or triggering an invoice when a project is marked complete. It is not about replacing people — it is about removing the tasks that waste their time.",
  },
  {
    q: "How much does it cost to automate business processes?",
    a: "It depends heavily on complexity. Off-the-shelf tools (Zapier, Make.com, HubSpot) cost $50–$400/month and can handle most standard automations. Custom-built systems cost $8,000–$40,000 upfront but own the infrastructure and have no per-task pricing that scales against you. For most small businesses, the right starting point is a hybrid: standard tools for simple workflows, custom for core business processes.",
  },
  {
    q: "How long does it take to see ROI from automation?",
    a: "Lead follow-up and booking confirmation automations typically show ROI within the first 2 weeks — they start recovering previously lost leads immediately. Reporting and onboarding automations show ROI by month 2. Churn reduction and upsell automations typically take 3–6 months of data to see the full effect.",
  },
  {
    q: "What is the difference between using tools like Zapier and a custom system?",
    a: "Zapier and Make.com are excellent for connecting existing software tools and handling low-to-medium volume workflows. They break at scale, have per-task pricing that grows fast, and cannot handle complex logic or business-specific rules. A custom system is built exactly for your workflow, costs a flat fee to build, and has no ongoing per-task cost — it is the right choice when you are running high-volume or business-critical automation.",
  },
  {
    q: "What are the most common automations for a service-based business?",
    a: "In order of ROI: (1) lead follow-up sequences, (2) booking confirmations and reminders, (3) invoice and payment reminders, (4) review request delivery after service completion, (5) monthly reporting, and (6) referral request to satisfied customers. These six alone typically recover 8–20% of annual revenue for a service business running $500K–$3M.",
  },
  {
    q: "Does my business need AI, or just automation?",
    a: "Most businesses need automation first, not AI. Automation means rules-based workflows: if X happens, do Y. AI adds a layer of decision-making: what is the best next action given Z context. Start with automation for your highest-repetition tasks. Once those are stable, layer AI on top for things like lead scoring, email personalisation, or content generation — where the output changes based on context.",
  },
  {
    q: "Can Jenisys automate my existing tools without replacing them?",
    a: "Yes, in almost every case. We build on top of your existing CRM, accounting software, booking system, and communication tools. We use APIs, webhooks, and automation middleware to connect them — you keep your existing tools and we make them work together automatically.",
  },
  {
    q: "How does Jenisys measure the ROI of the automation it builds?",
    a: "Before we build anything, we baseline the hours spent on the tasks being automated, the leads or revenue lost due to gaps in current processes, and the error rate in manual workflows. After implementation, we track the same metrics and report the delta monthly. Every automation comes with a clear target ROI figure agreed before work starts.",
  },
];

export default function Blog8() {
  const { openCalendar } = useCalendar();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("problem");
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.pageYOffset / totalHeight) * 100);
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
              <Bot className="w-4 h-4" />
              AI Automation · Business Operations · ROI
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              AI Automation for Small Business:{" "}
              <span className="text-[#818CF8]">What It Actually Costs,</span>
              <span className="block mt-2">What It Actually Returns</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
              Every small business is losing money to manual tasks right now. Not because they do not have the revenue to fix it — but because they have not been shown the specific numbers. This article breaks down the exact ROI of AI automation by business type, with real calculations, not estimates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openCalendar}
                className="ds-btn-primary px-8 py-4 text-base inline-flex items-center gap-2"
              >
                Book a Free Automation Audit <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => jumpTo("use-cases")}
                className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
              >
                See Your Business Type
              </button>
            </div>

            {/* Stat strip */}
            <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/10">
              {[
                { n: "23 hrs", l: "Average weekly hours lost to manual tasks in small businesses" },
                { n: "8–20%", l: "Annual revenue typically recovered through process automation" },
                { n: "Week 2", l: "When most businesses see their first measurable ROI" },
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

      {/* ── ARTICLE LAYOUT ── */}
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
                <p className="text-sm font-semibold text-[#4F46E5] mb-2">Not sure where to start?</p>
                <p className="text-xs text-slate-500 mb-3">We map your highest-ROI automation opportunities in a free 30-min session.</p>
                <button onClick={openCalendar} className="w-full ds-btn-primary text-sm py-2.5">
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
                The four things this article proves
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "The average small business loses 23 hours/week to manual tasks that can be fully or partially automated today.",
                  "The ROI from automation is measurable within 2–4 weeks for the five highest-priority processes.",
                  "Off-the-shelf tools handle 70% of automations. The other 30% — the ones that touch core business logic — require custom systems.",
                  "Businesses that automate lead follow-up alone recover $18,000–$40,000/year in revenue that was previously going cold.",
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
                The Problem: Manual Processes Are a Silent Revenue Leak
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                You will not see it in a profit and loss statement. But every hour your team spends on manual tasks is an hour not spent generating or serving revenue.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                Here is the typical picture for a service business doing $800K–$2M annually. The owner spends 4 hours a week on follow-up. The admin spends 8 hours on scheduling, confirmations, and rescheduling. Someone manually pulls data into a weekly report. Invoices go out late because someone has to log in and create them. Quote follow-ups get forgotten because there is no system.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Add it up: <strong>23 hours of manual overhead per week</strong>. At a blended team cost of $45/hour, that is <strong>$53,820 a year</strong> spent on tasks that should run automatically.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Clock, value: "23 hrs/wk", label: "Lost to manual tasks", color: "text-red-500" },
                  { icon: Mail, value: "40%", label: "Leads that go cold due to no follow-up", color: "text-orange-500" },
                  { icon: DollarSign, value: "$53K/yr", label: "Cost of manual overhead (typical)", color: "text-yellow-600" },
                  { icon: RefreshCw, value: "6.2 apps", label: "Average tools used that don't talk to each other", color: "text-[#4F46E5]" },
                ].map((s) => (
                  <div key={s.label} className="bg-white border border-slate-200 rounded-xl p-5 text-center ds-card">
                    <s.icon className={`w-7 h-7 ${s.color} mx-auto mb-2`} />
                    <div className="text-2xl font-bold text-slate-900 mb-1">{s.value}</div>
                    <p className="text-xs text-slate-500 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <p className="text-sm text-amber-800 leading-relaxed">
                  <strong>The real cost is not the admin hours.</strong> It is the leads that went cold because no one followed up. The customers who churned because onboarding was disorganised. The invoice that went out 3 weeks late. Automation fixes the process, which fixes the outcome.
                </p>
              </div>
            </section>

            {/* WHAT IS AI AUTOMATION */}
            <section id="what-is-ai-automation" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What AI Automation Actually Means in Practice
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Most businesses hear "AI automation" and picture robots or science fiction. Here is what it actually means for a business with 5–50 employees.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: RefreshCw,
                    title: "Rules-Based Automation",
                    body: "If X happens, trigger Y. A lead submits a form → a welcome email goes out and a CRM contact is created. 100% predictable. No AI required. This is where 70% of the value lives.",
                    tag: "Start here",
                    tagColor: "bg-green-100 text-green-700",
                  },
                  {
                    icon: Bot,
                    title: "AI-Enhanced Automation",
                    body: "Rules with intelligence layered on top. Lead scores based on behaviour. Email subject lines personalised by segment. Content drafted from a brief. This is where AI adds real leverage.",
                    tag: "Layer in month 2–3",
                    tagColor: "bg-blue-100 text-blue-700",
                  },
                  {
                    icon: Zap,
                    title: "Fully Autonomous Workflows",
                    body: "End-to-end processes that run without human intervention: from lead capture to qualified meeting booked, from invoice sent to payment reconciled. Built on the first two layers.",
                    tag: "Scale phase",
                    tagColor: "bg-purple-100 text-purple-700",
                  },
                ].map((l) => (
                  <div key={l.title} className="bg-white border border-slate-200 rounded-xl p-6 ds-card">
                    <div className="w-10 h-10 bg-[#4F46E5]/8 rounded-lg flex items-center justify-center mb-4">
                      <l.icon className="w-5 h-5 text-[#4F46E5]" />
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${l.tagColor} mb-3 inline-block`}>{l.tag}</span>
                    <h3 className="font-bold text-slate-900 mb-2">{l.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{l.body}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#0F172A] text-white rounded-2xl p-8">
                <h3 className="font-bold text-[#A5B4FC] mb-4">The Practical Rule</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  If a task involves the same steps every time and someone could write those steps down as a checklist — it can be automated. If the outcome changes based on context (e.g. a customer replied with a complaint vs. a question) — that is where AI layers in.
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  For most small businesses: <strong className="text-white">start with automation, add AI where it multiplies the outcome.</strong> Doing it in reverse wastes budget.
                </p>
              </div>
            </section>

            {/* USE CASES BY BUSINESS TYPE */}
            <section id="use-cases" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Use Cases by Business Type — With Real Numbers
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-10">
                Generic automation advice does not help. Here is what automation looks like for each business type — specific problems, specific automations, specific outcomes.
              </p>
              <div className="space-y-8">
                {BUSINESS_TYPES.map((bt) => (
                  <div key={bt.type} className={`rounded-2xl border overflow-hidden ${bt.color}`}>
                    <div className="px-6 py-5 border-b border-inherit flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl ${bt.iconBg} flex items-center justify-center`}>
                        <bt.icon className={`w-5 h-5 ${bt.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">{bt.type}</h3>
                        <p className="text-xs text-slate-500">{bt.example}</p>
                      </div>
                      <div className="ml-auto text-right">
                        <div className="text-2xl font-bold text-[#4F46E5]">{bt.roi}</div>
                        <div className="text-xs text-slate-500">{bt.roiNote}</div>
                      </div>
                    </div>
                    <div className="p-6 grid md:grid-cols-2 gap-6 bg-white">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3">Current Pain Points</p>
                        <ul className="space-y-2">
                          {bt.problems.map((p, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-[#4F46E5] mb-3">Automations + Outcomes</p>
                        <ul className="space-y-3">
                          {bt.automations.map((a, i) => (
                            <li key={i} className="text-sm">
                              <div className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-[#4F46E5] mt-0.5 flex-shrink-0" />
                                <span className="text-slate-700">{a.label}</span>
                              </div>
                              <div className="ml-6 text-xs font-semibold text-green-600 mt-0.5">→ {a.saving}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ROI MATH */}
            <section id="roi-math" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                ROI Math — By Business Type
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                These are conservative figures. They assume a 50% success rate on recovered leads, no revenue growth from freed-up capacity, and no compounding effects.
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      {["Business Type", "Hours Saved/Wk", "$ Saved/Year (Labour)", "Revenue Recovered/Yr", "Total First-Year ROI"].map((h) => (
                        <th key={h} className="text-left px-5 py-4 font-bold text-slate-700 whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { type: "Local Business", hrs: "14 hrs", labour: "$32,760", revenue: "$26,400", roi: "$59,160" },
                      { type: "Agency", hrs: "72 hrs/mo", labour: "$51,840", revenue: "$28,000", roi: "$79,840" },
                      { type: "SaaS", hrs: "18 hrs", labour: "$19,440", revenue: "$151,200", roi: "$170,640" },
                      { type: "E-commerce", hrs: "22 hrs", labour: "$23,760", revenue: "$115,200", roi: "$138,960" },
                    ].map((row) => (
                      <tr key={row.type} className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-semibold text-slate-900">{row.type}</td>
                        <td className="px-5 py-4 text-slate-600">{row.hrs}</td>
                        <td className="px-5 py-4 text-slate-600">{row.labour}</td>
                        <td className="px-5 py-4 text-slate-600">{row.revenue}</td>
                        <td className="px-5 py-4 font-bold text-[#4F46E5]">{row.roi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400 mt-3">Assumes $45/hr blended team cost. Labour savings based on full automation of the top 5 highest-repetition tasks.</p>
            </section>

            {/* WHAT TO AUTOMATE FIRST */}
            <section id="what-to-automate" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What to Automate First — In Priority Order
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Start here. These five automations cover 80% of the ROI available to a business under $5M revenue. Do not jump to complex AI workflows until these are running.
              </p>
              <div className="space-y-4">
                {PRIORITY_AUTOMATIONS.map((item) => (
                  <div key={item.rank} className="flex gap-5 p-6 bg-white border border-slate-200 rounded-xl ds-card">
                    <div className="text-3xl font-black text-[#4F46E5]/20 leading-none flex-shrink-0 w-10">{item.rank}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="font-bold text-slate-900">{item.area}</h3>
                        <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">ROI by {item.timeToROI}</span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">{item.why}</p>
                      <p className="text-xs text-slate-400"><span className="font-semibold text-slate-500">Tooling:</span> {item.tool}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ROI TIMELINE */}
            <section id="timeline" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                ROI Timeline — Week by Week
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                This is what a typical Jenisys automation engagement looks like from kickoff to scale.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    phase: "Weeks 1–4",
                    title: "Quick Wins",
                    color: "bg-blue-600",
                    items: [
                      "Lead follow-up sequence live (Day 3)",
                      "Booking confirmations + reminders active",
                      "Invoice reminders running",
                      "First recovered leads identified",
                      "Baseline metrics locked",
                    ],
                  },
                  {
                    phase: "Months 2–3",
                    title: "Core Operations",
                    color: "bg-[#4F46E5]",
                    items: [
                      "Onboarding workflow operating",
                      "Reporting automated — zero manual pulls",
                      "CRM fully synced across all tools",
                      "Churn / at-risk signals active (SaaS)",
                      "ROI report #1 delivered",
                    ],
                  },
                  {
                    phase: "Month 4+",
                    title: "Scale & AI Layer",
                    color: "bg-purple-600",
                    items: [
                      "AI lead scoring based on behaviour",
                      "Personalised sequences by segment",
                      "Upsell triggers from product usage data",
                      "Full pipeline automation",
                      "Quarterly automation audit + expansion",
                    ],
                  },
                ].map((col) => (
                  <div key={col.phase} className="bg-white border border-slate-200 rounded-2xl overflow-hidden ds-card">
                    <div className={`${col.color} px-5 py-4 text-white`}>
                      <div className="text-xs font-bold uppercase tracking-widest opacity-80">{col.phase}</div>
                      <div className="text-lg font-bold">{col.title}</div>
                    </div>
                    <div className="p-5">
                      <ul className="space-y-3">
                        {col.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* TOOLS VS CUSTOM */}
            <section id="tools-vs-custom" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Off-the-Shelf Tools vs. Custom Systems — When to Use Which
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                This is the question every business asks wrong. It is not "tools or custom?" — it is "which use case fits which approach?"
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="text-left px-5 py-4 font-bold text-slate-700">Factor</th>
                      <th className="text-center px-5 py-4 font-bold text-blue-600">Off-the-Shelf Tools</th>
                      <th className="text-center px-5 py-4 font-bold text-[#4F46E5]">Custom System</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { factor: "Setup time", tools: "Hours to days", custom: "Weeks to months" },
                      { factor: "Upfront cost", tools: "$0–$2,000", custom: "$8,000–$40,000" },
                      { factor: "Ongoing cost", tools: "$50–$800/month (scales with usage)", custom: "Hosting + maintenance only" },
                      { factor: "Handles complex business logic", tools: "Limited — breaks at edge cases", custom: "Built for exactly your rules" },
                      { factor: "Scales to high volume", tools: "Expensive at scale (per-task pricing)", custom: "Flat cost regardless of volume" },
                      { factor: "Integrates with any system", tools: "Only if a connector exists", custom: "Custom API integration for any tool" },
                      { factor: "You own the IP", tools: "No — you depend on the vendor", custom: "Yes — fully portable code" },
                      { factor: "Right for", tools: "Standard workflows, early stage", custom: "Core business processes, growth phase" },
                    ].map((row) => (
                      <tr key={row.factor} className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-3 font-medium text-slate-700">{row.factor}</td>
                        <td className="px-5 py-3 text-center text-slate-600">{row.tools}</td>
                        <td className="px-5 py-3 text-center font-medium text-slate-800">{row.custom}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>Jenisys recommendation:</strong> Start with off-the-shelf tools for all standard workflows. When a process involves unique business logic, carries high revenue risk, or runs at a volume where per-task pricing becomes expensive — build custom. We typically see this threshold at 200+ automation triggers per day or when the workflow touches pricing, payments, or client-facing agreements.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section id="cta" className="mb-16 scroll-mt-24">
              <div className="bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-2xl p-10 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Book a Free Automation Audit</h2>
                <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
                  In 30 minutes, we identify the top 5 automation opportunities in your business, calculate the projected ROI for each, and give you a prioritised action plan — whether you work with us or not.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={openCalendar}
                    className="bg-white text-[#4F46E5] font-bold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors inline-flex items-center gap-2"
                  >
                    Book the Free Audit <ArrowRight className="w-5 h-5" />
                  </button>
                  <Link href="/evaluate">
                    <button className="border border-white/40 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                      Self-Assess First
                    </button>
                  </Link>
                </div>
                <p className="text-white/50 text-xs mt-6">
                  No sales pitch. No commitment. If we cannot show a clear ROI case, we will tell you.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-8 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions About AI Automation for Small Business
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Direct answers to the questions we hear on every first call.
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

            {/* Article footer */}
            <div className="border-t border-slate-200 pt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span>Published: March 24, 2026</span>
              <span>·</span>
              <span>16 min read</span>
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

// Single source of truth for Jenisys offers and launch pricing (USD).
// Competitive launch pricing set Nov 2026. Every price is a "from" price;
// larger or unusual work gets a custom quote.

export const offers = [
  {
    slug: "ai-automation",
    name: "AI Automation",
    short: "Automations that give your team hours back every week.",
    audience: "For service businesses",
    who: "Accounting and bookkeeping firms, real estate agencies, clinics, law firms, recruiters, trades and home services.",
    problem:
      "Your team re-types data between tools, chases follow-ups by hand and lets enquiries sit unanswered after hours.",
    outcomes: [
      "Enquiries answered and followed up automatically, day and night",
      "Invoices, forms and documents read and filed without re-typing",
      "Your CRM, inbox, calendar and accounting tools finally talking to each other",
    ],
    examples: [
      { title: "Lead capture and follow-up", body: "Every website, email and form enquiry lands in your CRM, gets an instant reply and a follow-up sequence." },
      { title: "Document and invoice processing", body: "AI reads invoices, receipts and forms, pulls out the details and files them in your accounting or practice software." },
      { title: "AI chat and booking assistant", body: "Answers common questions from your own content and books appointments straight into your calendar." },
      { title: "Reporting dashboards", body: "The numbers you pull together every Monday, updated automatically in one place." },
    ],
    stack: ["OpenAI", "Claude", "Make", "n8n", "Zapier", "HubSpot", "Xero", "QuickBooks", "Google Workspace", "Microsoft 365"],
    timeline: "1–4 weeks",
    from: 1500,
  },
  {
    slug: "mvp-development",
    name: "MVP Development",
    short: "Your product, live in weeks, built by engineers who ship to production.",
    audience: "For founders",
    who: "First-time founders, small startup teams and established businesses launching a new digital product.",
    problem:
      "You need a working product in front of users or investors fast, you can’t hire a full team yet, and freelancers have let you down before.",
    outcomes: [
      "A working web or mobile app your users can sign up to",
      "A fixed price and a fixed scope agreed before we start",
      "Clean code you own, ready to grow into a full product",
    ],
    examples: [
      { title: "SaaS and web apps", body: "Accounts, payments, dashboards and admin tools on Next.js, Node.js and Postgres." },
      { title: "Mobile apps", body: "iOS and Android from one codebase with React Native or Flutter, when your product needs to be on a phone." },
      { title: "Marketplaces and portals", body: "Two-sided platforms, client portals and booking systems with roles and permissions." },
      { title: "AI-powered features", body: "Search, chat, summaries and document understanding built into your product." },
    ],
    stack: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Supabase", "Stripe", "React Native", "Flutter", "AWS", "Vercel"],
    timeline: "4–10 weeks",
    from: 7500,
  },
  {
    slug: "discovery-sprint",
    name: "Discovery Sprint",
    short: "One week to turn an idea into a plan, a prototype and a fixed quote.",
    audience: "The first step",
    who: "Anyone who wants to know exactly what they’re buying, what it costs and how long it takes before committing.",
    problem: "Most software projects go over budget because nobody pinned down the scope before the build started.",
    outcomes: [
      "A written scope with every feature, screen and integration listed",
      "A clickable prototype or workflow map you can show your team",
      "A fixed price and timeline, credited in full if you build with us",
    ],
    examples: [
      { title: "Days 1–2: Workshop", body: "We map your users, your process and what success looks like." },
      { title: "Days 3–4: Design", body: "Prototype screens or automation flows, reviewed with you." },
      { title: "Day 5: Plan and quote", body: "Scope document, technical plan and a fixed quote for the build." },
    ],
    stack: [],
    timeline: "5 working days",
    from: 499,
  },
  {
    slug: "support",
    name: "Support & Maintenance",
    short: "Updates, fixes and small improvements every month, so nothing breaks.",
    audience: "After launch",
    who: "Businesses with a website, app or automation that has to keep working.",
    problem:
      "Software nobody looks after slowly breaks: libraries go out of date, integrations change and small bugs pile up.",
    outcomes: [
      "Security updates and monitoring handled for you",
      "Bugs fixed and small changes made from your monthly hours",
      "One team that already knows your system",
    ],
    examples: [
      { title: "Monitoring and updates", body: "Uptime checks, dependency and security updates, backups verified." },
      { title: "Fixes and small changes", body: "A monthly block of developer hours for fixes and improvements." },
      { title: "Monthly report", body: "What we did, what we found and what we recommend next." },
    ],
    stack: [],
    timeline: "Monthly, cancel anytime",
    from: 499,
    per: "month",
  },
];

export const offerBySlug = Object.fromEntries(offers.map((o) => [o.slug, o]));

// Pricing tiers shown on /pricing and the service pages.
export const pricing = [
  {
    offer: "discovery-sprint",
    tiers: [
      {
        name: "Discovery Sprint",
        price: 499,
        note: "Credited in full against your build",
        features: ["5 working days", "Scope document", "Prototype or workflow map", "Fixed quote and timeline"],
      },
    ],
  },
  {
    offer: "ai-automation",
    tiers: [
      {
        name: "Automation Starter",
        price: 1500,
        note: "One workflow, live in about 2 weeks",
        features: ["1 automated workflow", "Up to 3 connected tools", "An AI step (reading, writing or sorting)", "30 days of fixes after launch"],
      },
      {
        name: "Automation Growth",
        price: 4000,
        note: "Up to 3 workflows, about 4 weeks",
        featured: true,
        features: ["Up to 3 automated workflows", "Unlimited connected tools", "AI assistant trained on your content", "Simple reporting dashboard", "60 days of fixes after launch"],
      },
    ],
  },
  {
    offer: "mvp-development",
    tiers: [
      {
        name: "MVP Launch",
        price: 7500,
        note: "Web app, about 6 weeks",
        featured: true,
        features: ["Web app with sign-up and accounts", "Up to 8 core screens", "Payments or one key integration", "Admin panel", "Weekly demos", "60 days of fixes after launch"],
      },
      {
        name: "MVP Plus",
        price: 15000,
        note: "Web + mobile, about 10 weeks",
        features: ["Everything in MVP Launch", "iOS and Android app", "Up to 15 core screens", "Up to 3 integrations", "App store submission", "90 days of fixes after launch"],
      },
    ],
  },
  {
    offer: "support",
    tiers: [
      {
        name: "Support Essentials",
        price: 499,
        per: "month",
        note: "10 developer hours a month",
        features: ["Monitoring and security updates", "10 hours of fixes or changes", "Monthly report", "Cancel anytime"],
      },
      {
        name: "Support Plus",
        price: 999,
        per: "month",
        note: "25 developer hours a month",
        features: ["Everything in Essentials", "25 hours of fixes or changes", "Response within 1 business day", "Quarterly improvement plan"],
      },
    ],
  },
];

export const promises = [
  { title: "Fixed price", body: "You get a fixed quote after discovery. If we underestimated, that’s on us." },
  { title: "Weekly demos", body: "You see working software every week, not a big reveal at the end." },
  { title: "You own the code", body: "Your code, your accounts, your data. No lock-in." },
  { title: "US and India teams", body: "Offices in Atlanta and Kolkata, so work keeps moving around the clock." },
];

export const faqs = [
  { q: "How much does a project cost?", a: "AI automations start at $1,500 and MVPs at $7,500. Most clients start with a $499 Discovery Sprint, which gives you a fixed quote and is credited in full if you go ahead. Larger or unusual projects get a custom quote." },
  { q: "How long does it take?", a: "A single automation is usually live in about 2 weeks. A web MVP takes about 6 weeks, and a web plus mobile MVP about 10 weeks. You get the exact timeline in writing after discovery." },
  { q: "Who owns the code?", a: "You do. The code, the hosting accounts and the data are yours from day one." },
  { q: "What if I need changes after launch?", a: "Every build includes a free fix period after launch. After that, a Support plan from $499 a month covers updates, fixes and small changes." },
  { q: "Do you work with clients outside India?", a: "Yes. We work with clients in Australia, the US and the UK, with offices in Atlanta and Kolkata." },
  { q: "Can you work with the tools we already use?", a: "Usually, yes. We connect to common CRM, accounting, email, calendar and payment tools, and confirm every integration during discovery." },
];

export const money = (n) => `$${n.toLocaleString("en-US")}`;

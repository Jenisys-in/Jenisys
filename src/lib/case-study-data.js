// ─── Case Study Data ─────────────────────────────────────────────────────────
// Shared data used by both the listing page and the detail page route.
// This file has NO "use client" directive so it can be imported safely
// from server components (generateStaticParams, generateMetadata, etc.).

export const TYPE_LABELS = {
  "case-study": "Case Study",
};

export const TAB_FILTERS = [
  { key: "all", label: "All" },
  { key: "case-study", label: "Case Studies" },
];

export const entries = [
  {
    slug: "nsw-sopa-adjudication-platform",
    title: "Adjudication Registry Platform for NSW Building & Construction",
    type: "case-study",
    date: "2024-09-12",
    industry: "Government / Construction",
    systemType: "Regulatory Compliance Platform",
    engineeringFocus: "Workflow Automation & Document Processing",
    buildCategory: "Full-Stack Application",
    duration: "7 months",
    stack: ["Next.js", "Node.js", "PostgreSQL", "AWS", "S3", "Docker", "Redis", "TypeScript"],
    summary:
      "Designed and built a web-based adjudication registry system aligned with the NSW Building and Construction Industry Security of Payment Act (SOPA). The platform replaced a largely manual, paper-driven claims process with structured digital workflows for claimants, respondents, and Authorised Nominating Authorities (ANAs).",
    problem:
      "The existing adjudication process under the NSW SOPA framework was administered through a combination of PDF forms, email chains, and manual tracking spreadsheets. ANAs had limited visibility into claim status. Claimants frequently submitted incomplete applications, causing delays and re-work. There was no centralised record of adjudication outcomes, making regulatory reporting difficult. Average claim processing time from submission to adjudicator appointment was roughly 18 business days, with significant variance depending on the ANA's internal capacity.",
    context:
      "The NSW SOPA framework governs progress payment disputes in the construction industry. When a payment claim is disputed, the claimant can apply for adjudication through an ANA. The ANA reviews the application for completeness, appoints an adjudicator, and manages the response timeline. The process involves strict statutory deadlines — a response must be lodged within a defined window, and the adjudicator must issue a determination within a fixed period. The system needed to support multiple ANAs, each with their own panel of adjudicators and internal processes.",
    constraints:
      "All statutory deadlines defined in the SOPA legislation had to be enforced programmatically — the system could not allow extensions beyond what the Act permits. Document uploads needed to handle large construction files (drawings, contracts, progress reports) up to 200MB per file. The system had to support concurrent access by claimants, respondents, ANA staff, and adjudicators — each with different permission levels and views. Data sovereignty was non-negotiable: all data had to remain within Australian AWS regions.",
    approach:
      "We modelled the adjudication lifecycle as a state machine with clearly defined transitions: Draft → Submitted → Under Review → Accepted → Adjudicator Appointed → Response Period → Determination → Closed. Each state transition triggers validation checks (e.g., mandatory fields, deadline compliance) and notifications. Document management uses S3 with presigned URLs for secure, direct uploads from the browser. Role-based access control ensures each party only sees what they are entitled to at each stage.",
    architectureDecisions:
      "Chose PostgreSQL over a document database because the adjudication process has well-defined relational structures — claims, responses, determinations, and appointments map cleanly to normalised tables. Used a state machine library rather than ad-hoc status flags to enforce valid transitions and prevent illegal state changes (e.g., a claim cannot move to 'Adjudicator Appointed' without passing completeness review). File uploads go directly to S3 from the client using presigned URLs, bypassing the application server to avoid memory pressure from large files. Redis handles session management and caches frequently-accessed reference data (adjudicator panels, fee schedules).",
    tradeoffs:
      "We implemented statutory deadline calculations in application code rather than relying on database triggers. This adds a testing burden — every deadline rule needs unit tests against edge cases like public holidays and weekends — but gives us better visibility and easier debugging when deadline disputes arise. We also chose server-side rendering for the claim submission forms rather than a single-page approach, because the multi-step form needed to persist partial progress reliably even if the user closes the browser mid-submission.",
    implementationNotes:
      "The deadline engine accounts for NSW public holidays, weekends, and the specific counting rules defined in the SOPA legislation (e.g., 'business days' vs 'calendar days' differ across different sections of the Act). We built a notification system that sends email reminders at configurable intervals before each deadline — default is 5 days, 2 days, and 1 day before expiry. The admin dashboard for ANA staff includes a Kanban-style view of active claims grouped by status, with colour-coded deadline indicators (green/amber/red). PDF generation for determination records uses a headless rendering pipeline to ensure consistent formatting across all ANAs.",
    result:
      "Average processing time from submission to adjudicator appointment dropped from 18 business days to 6 business days. Incomplete application submissions fell from roughly 40% to under 8%, largely due to front-end validation and the guided submission workflow. ANA staff reported spending approximately 60% less time on administrative follow-ups. The system currently handles claims across multiple ANAs operating under the NSW SOPA framework.",
    lessonsLearned:
      "The statutory deadline logic was the most complex part of the build — not because the rules are individually complicated, but because they interact in non-obvious ways (e.g., if a deadline falls on a public holiday, it rolls to the next business day, but the counting method differs depending on the section of the Act). We ended up building a dedicated deadline calculation module with its own test suite of over 120 cases, many derived from real disputed scenarios provided by the client. The other significant learning was around document handling: early in the project, we routed uploads through the API server, which caused timeouts and memory issues with large construction files. Moving to presigned S3 uploads resolved this cleanly.",
  },
  {
    slug: "us-saas-subscription-billing-platform",
    title: "Subscription & Billing Platform for US SaaS Company",
    type: "case-study",
    date: "2024-05-20",
    industry: "SaaS / B2B",
    systemType: "Billing & Revenue Operations Platform",
    engineeringFocus: "API Integration & Data Pipeline",
    buildCategory: "Backend-Heavy Full-Stack",
    duration: "5 months",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe API", "Redis", "Docker", "AWS", "TypeScript"],
    summary:
      "Built a custom billing and subscription management platform for a mid-stage US SaaS company that had outgrown Stripe's native dashboard. The system handles plan management, usage-based metering, invoice generation, dunning workflows, and revenue reporting — all integrated with Stripe as the payment processor.",
    problem:
      "The company had approximately 1,200 paying accounts across three pricing tiers, with a growing segment on usage-based plans. Their billing workflow was a patchwork of Stripe dashboard operations, manual spreadsheet adjustments for usage overages, and a custom script that ran monthly to reconcile subscription changes. Finance spent roughly two full days each month closing the books because the source of truth for revenue was split between Stripe, their internal database, and a shared Google Sheet. Proration errors on mid-cycle plan changes were a recurring support issue — roughly 15 tickets per month were billing disputes.",
    context:
      "The product is a B2B analytics platform sold to mid-market companies. Pricing includes a base subscription fee plus usage-based charges calculated from API call volume and data storage. Customers can upgrade, downgrade, add seats, or switch between annual and monthly billing at any point in their cycle. The existing setup used Stripe Billing for subscription management, but all usage-based charges were calculated externally and pushed to Stripe as manual invoice line items. There was no self-service portal — all plan changes went through the support team.",
    constraints:
      "Stripe had to remain the payment processor — the company's finance team had built their revenue recognition workflow around Stripe's reporting, and switching processors was out of scope. Usage data needed to be metered in near-real-time (within 15 minutes of the API call) to support customers who monitor their usage dashboards throughout the day. The system had to handle proration correctly for every combination of plan change, billing cycle, and payment method. PCI compliance requirements meant we could not store or transmit card data — everything had to go through Stripe's tokenisation layer.",
    approach:
      "We built a billing service layer that sits between the product and Stripe. All subscription lifecycle events (creation, upgrades, downgrades, cancellations, renewals) are managed through our service, which translates business logic into Stripe API calls and maintains a local copy of subscription state. Usage metering is event-driven: the product emits usage events to a Redis-backed queue, which a worker process aggregates into 15-minute windows and writes to PostgreSQL. Invoice generation pulls from both the subscription and usage tables to produce a unified invoice.",
    architectureDecisions:
      "Chose to maintain a local subscription state mirror rather than relying solely on Stripe's API for reads. This avoids rate-limiting issues during bulk operations and gives us sub-millisecond read latency for the customer dashboard. Used Stripe webhooks as the source of truth for payment outcomes — our system processes webhook events idempotently and updates local state accordingly. The usage metering pipeline uses Redis Streams for event ingestion because it handles backpressure well and gives us exactly-once processing semantics with consumer groups. PostgreSQL stores aggregated usage records, not raw events — we accepted losing raw event granularity to keep the database manageable.",
    tradeoffs:
      "Maintaining a local state mirror of Stripe subscriptions introduces the risk of state drift. We mitigate this with a nightly reconciliation job that compares our local records against the Stripe API and flags discrepancies. In practice, drift has been rare (two incidents in five months, both caused by webhook delivery delays during Stripe maintenance windows). We also chose not to build a full self-service portal in the initial release — customers can view their usage and invoices but still contact support for plan changes. This was a scope decision: the plan change logic (proration, credit application, mid-cycle adjustments) needed more validation with real scenarios before we exposed it to self-service.",
    implementationNotes:
      "The proration engine was the most technically involved piece. It handles mid-cycle upgrades (charge the difference for the remaining period), downgrades (apply credit to the next invoice), annual-to-monthly switches (calculate the refundable portion of the annual payment), and seat additions (prorated to the current billing period). Each scenario has its own calculation path, and we maintain a ledger of all adjustments for auditability. The dunning workflow sends a sequence of emails (day 1, day 3, day 7, day 14 after failed payment) and can automatically pause the account after the final attempt. Finance has a dashboard that shows MRR, churn, expansion revenue, and ARPU — all calculated from our local data, not Stripe's reporting.",
    result:
      "Monthly close time for the finance team went from two full days to approximately four hours. Billing-related support tickets dropped from around 15 per month to 2–3 per month. Usage data is now visible to customers within 15 minutes of the API call, compared to the previous next-day batch update. The company's finance team now uses the platform's revenue dashboard as their primary reporting tool rather than exporting data from Stripe and reconciling it manually.",
    lessonsLearned:
      "The biggest lesson was that billing logic is domain-specific in ways that are hard to anticipate. Stripe handles the common cases well, but every company has edge cases that don't fit neatly into Stripe's model — things like custom contract terms, negotiated discounts that apply only to the base fee but not usage charges, or mid-cycle plan changes that coincide with a failed payment retry. We spent roughly 30% of the project timeline on proration and edge case handling alone. The reconciliation job was originally an afterthought but turned out to be essential for the finance team's confidence in the system. If we were starting over, we'd design the reconciliation layer from day one rather than bolting it on later.",
  },
];

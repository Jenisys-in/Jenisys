// Home page copy. Case study text and testimonials are carried over from the previous site.
// Testimonials are no longer shown until each is confirmed and attributed (planning/06, section 3).

// Wording below was proposed in planning/06-conversion-and-content.md (hero option A) and awaits owner sign-off.
export const hero = {
  titleTop: "We turn manual work",
  titleEffect: "into software that runs itself.",
  title: "We turn manual work into software that runs itself.",
  cta: "Book your free strategy call",
  lead: "AI automations for service businesses and first products for founders. Fixed price, weekly demos, results you can measure.",
};

export const caseStudiesIntro = {
  titleA: "Proven Impact",
  titleB: "Through Innovation",
  lead: "Discover how we've transformed businesses across industries with cutting-edge technology solutions.",
};

export const caseStudies = [
  {
    slug: "nsw-sopa-adjudication-platform",
    title: "Adjudication Registry Platform for NSW Building & Construction",
    description:
      "Replaced a manual, paper-driven claims process with structured digital workflows under the NSW SOPA framework — cutting processing time from 18 days to 6.",
    industry: "Government / Construction",
    metrics: [
      ["Improvement", "67% faster"],
      ["Scale", "Multiple ANAs"],
      ["Timeline", "7 months"],
    ],
  },
  {
    slug: "us-saas-subscription-billing-platform",
    title: "Subscription & Billing Platform for US SaaS Company",
    description:
      "Custom billing system that replaced manual spreadsheet reconciliation — reducing monthly close from 2 days to 4 hours and cutting billing support tickets by 80%.",
    industry: "SaaS / B2B",
    metrics: [
      ["Improvement", "80% fewer tickets"],
      ["Scale", "1,200+ accounts"],
      ["Timeline", "5 months"],
    ],
  },
];

export const testimonialsIntro = {
  title: "Testimonials",
  lead: "Real stories from our clients showcasing our dedication to impactful, high-performance solutions.",
};

export const testimonials = [
  { quote: "We came in with a messy spreadsheet and a tight deadline. They didn't just build the platform — they helped us rethink the entire workflow. Six months later, our processing time dropped by two-thirds.", name: "Rajesh", title: "Operations Lead" },
  { quote: "What impressed me was the questions they asked before writing a single line of code. They understood the regulatory constraints better than vendors who'd been in our space for years.", name: "Sarah", title: "Program Director" },
  { quote: "Our billing was held together with duct tape — manual exports, a shared Google Sheet, two days every month just to close books. They replaced all of it in five months. Finance actually enjoys month-end now.", name: "David", title: "Head of Finance" },
  { quote: "I've worked with agencies that overcommit and underdeliver. Jenisys was the opposite — they flagged scope risks early, communicated tradeoffs clearly, and shipped on time.", name: "Priya", title: "CTO, Series B Startup" },
  { quote: "They treated our project like their own product. When we hit an edge case with payment proration mid-cycle, they built a dedicated test suite instead of patching around it.", name: "Marcus", title: "Engineering Manager" },
  { quote: "Most teams either understand the tech or the business. These folks do both. They pushed back on features that didn't add value and suggested things we hadn't considered.", name: "Ananya", title: "Product Owner" },
];

export const blogIntro = {
  title: "From the Blog",
  lead: "Stay up-to-date with the latest industry trends, insights, and news from our team of experts.",
};

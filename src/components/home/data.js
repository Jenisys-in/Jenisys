// All copy below is taken verbatim from the previous home page components.
// Do not add or rewrite text here without the owner's approval (see docs/brand/brand-system.md §10).

export const hero = {
  titleStart: "Ship products that actually",
  titleEnd: "move the needle",
  lead: "From custom software to AI automation — we partner with ambitious teams to build technology that drives real business outcomes.",
  proof: ["Government & enterprise clients", "End-to-end — design to deployment", "Australia & US — open worldwide"],
};

// Figures are verbatim from the published case studies. Gain labels approved by the owner.
export const outcomes = [
  { eyebrow: "NSW · Government / Construction", what: "Claims processing time", before: "18 days", after: 6, unit: " days", gain: "Two-thirds faster", href: "/case-study/nsw-sopa-adjudication-platform" },
  { eyebrow: "US · SaaS billing", what: "Monthly close", before: "2 days", after: 4, unit: " hrs", gain: "Close in an afternoon", href: "/case-study/us-saas-subscription-billing-platform" },
  { eyebrow: "US · SaaS billing", what: "Billing support tickets", before: null, after: 80, prefix: "−", unit: "%", gain: "Measured after launch", href: "/case-study/us-saas-subscription-billing-platform" },
];

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

export const servicesIntro = {
  eyebrow: "What We Do",
  lead: "Explore the services we offer and the industries we empower with cutting-edge technology solutions.",
};

export const services = [
  { title: "AI Automation", description: "Streamlining business operations through intelligent automation solutions using AI models, machine learning, and workflow orchestration to enhance efficiency and reduce manual effort.", link: "/services/ai-ml" },
  { title: "Web Development", description: "Building fast, responsive and scalable web applications with modern technologies like React, Next.js, and Node.js for optimal performance.", link: "/services/web-development" },
  { title: "App Development", description: "Crafting native and cross-platform mobile applications for Android and iOS with React Native and Flutter frameworks.", link: "/services/mobile-development" },
  { title: "Cloud Solutions", description: "Deploying scalable cloud infrastructures, DevOps automation, and serverless architectures on AWS, Azure, and Google Cloud.", link: "/services/cloud-solutions" },
  { title: "Custom Software Development", description: "Tailored software solutions built to match your unique business needs — scalable, secure, and ready to fuel your growth.", link: "/services/Custom-Software-Development" },
  { title: "IT consulting", description: "Strategic IT guidance to help you innovate, optimize operations, and make technology work for your business goals.", link: "/services/IT-consulting" },
  { title: "Maintenance & Support", description: "Reliable ongoing support and maintenance to keep your systems running smoothly, securely, and without interruptions.", link: "/services/Maintenance" },
];

export const industries = [
  { title: "Healthcare", description: "HIPAA-compliant platforms, telemedicine solutions, and patient management systems with advanced security protocols." },
  { title: "Retail & E-commerce", description: "Custom storefronts, inventory management systems, payment gateways, and analytics dashboards for business growth." },
  { title: "Education", description: "Interactive learning management systems, virtual classrooms, and comprehensive student progress tracking platforms." },
  { title: "Finance & Fintech", description: "Custom accounting platforms, secure payment gateways, and real-time financial analytics dashboards tailored for financial institutions and startups." },
  { title: "Hospitality & Food Services", description: "Restaurant POS systems, online food ordering platforms, and reservation management apps designed to enhance customer experience." },
  { title: "Real Estate", description: "Dynamic property listing websites, virtual tours, and CRM systems built for agents and real estate companies to manage sales pipelines." },
  { title: "Legal & Professional Services", description: "Case management software, secure document portals, and automated billing systems tailored for law firms and consulting agencies." },
  { title: "Travel & Tourism", description: "Custom booking engines, itinerary planners, and mobile apps for travel agencies to enhance customer engagement and streamline operations." },
  { title: "Media & Entertainment", description: "Interactive content platforms, OTT streaming apps, and event booking systems for creators, studios, and entertainment brands." },
];

export const processIntro = {
  title: "Our Development Process",
  lead: "A transparent, step-by-step approach to building impactful digital solutions.",
};

export const process = [
  { title: "Discovery & Strategy", description: "We begin by understanding your vision, goals, and audience. Together, we define the roadmap and strategy to ensure success." },
  { title: "UI/UX Design", description: "We design intuitive, user-focused experiences with wireframes and prototypes to align with your vision." },
  { title: "Development", description: "Our team builds robust, scalable, and efficient solutions using modern technologies." },
  { title: "Testing & Deployment", description: "We conduct rigorous testing for performance and security, followed by a smooth deployment." },
  { title: "Quality Assurance", description: "Every product undergoes strict quality checks to meet the highest industry standards." },
  { title: "Maintenance & Support", description: "We provide ongoing support, updates, and improvements to keep your product performing." },
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

export const vision =
  "To be the trusted partner for businesses seeking transformative custom software. We empower growth by turning innovative ideas into powerful, effective technology.";

export const mission = [
  "Build custom software for your business's unique growth.",
  "Drive innovation with AI to solve your toughest challenges.",
  "Deliver reliable, high-quality products on time and on budget.",
  "Be your trusted partner from concept to long-term success.",
];

export const valuesIntro = { eyebrow: "Our Values", titleA: "Innovative Tech Solutions for", titleB: "Transformative Growth" };

export const values = [
  { title: "Cutting-Edge Technology", description: "We leverage the latest technologies and frameworks to build scalable, future-proof solutions that drive real digital transformation." },
  { title: "Innovation First", description: "We constantly explore emerging technologies like AI and automation to create groundbreaking solutions for your most complex challenges." },
  { title: "Security & Reliability", description: "Every solution we build prioritizes robust security, data protection, and 99.9% uptime to ensure seamless business continuity." },
  { title: "Client-Centric Approach", description: "We partner closely with our clients, understanding your unique needs to deliver personalized tech solutions that consistently exceed your expectations." },
];

export const techIntro = {
  title: "Our Technology Stack",
  lead: "We leverage the best technologies in the industry to build scalable, high-performance, and secure solutions for our clients.",
};

export const tech = ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Node.js", "Express.js", "GraphQL", "Python", "MongoDB", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Git", "AWS", "Figma", "Jest"];

export const blogIntro = {
  title: "From the Blog",
  lead: "Stay up-to-date with the latest industry trends, insights, and news from our team of experts.",
};

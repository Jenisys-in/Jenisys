import Blog1 from "@/components/blogs/blog1";
import Blog2 from "@/components/blogs/blog2";
import Blog3 from "@/components/blogs/blog3";
import Blog4 from "@/components/blogs/blog4";
import Blog5 from "@/components/blogs/blog5";
import Blog6 from "@/components/blogs/blog6";
import Blog7 from "@/components/blogs/blog7";
import Blog8 from "@/components/blogs/blog8";

export const blogs = [
  {
    id: 1,
    slug: "digital-transformation-fortune-500",
    title: "Digital Transformation in Fortune 500 Companies",
    description:
      "Explore the profound impact of digital transformation on Fortune 500 companies and how they are navigating the complexities of the modern digital landscape.",
    excerpt:
      "Explore the profound impact of digital transformation on Fortune 500 companies and how they are navigating the complexities of the modern digital landscape.",
    keywords: [
      "digital transformation",
      "Fortune 500",
      "enterprise technology",
      "business innovation",
    ],
    author: { name: "Jenisys" },
    component: Blog5,
    thumbnail: "/img/blog_1.jpeg",
    category: "Business",
    tags: ["Digital Transformation", "Fortune 500"],
    date: "2025-07-15",
    dateModified: "2025-07-15",
    readingTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    slug: "future-ai-business-2025",
    title: "The Future of AI in Business by 2025",
    description:
      "Discover the transformative potential of Artificial Intelligence in the business world by 2025 and how it will reshape industries and create new opportunities.",
    excerpt:
      "Discover the transformative potential of Artificial Intelligence in the business world by 2025 and how it will reshape industries and create new opportunities.",
    keywords: [
      "artificial intelligence",
      "AI in business",
      "future of technology",
      "machine learning",
    ],
    author: { name: "Jenisys" },
    component: Blog1,
    thumbnail: "/img/blog_2.png",
    category: "Technology",
    tags: ["AI", "Machine Learning"],
    date: "2025-07-10",
    dateModified: "2025-07-10",
    readingTime: "10 min read",
    featured: false,
  },
  {
    id: 3,
    slug: "cybersecurity-trends-cto-2025",
    title: "Top Cybersecurity Trends for CTOs in 2025",
    description:
      "An essential guide for CTOs on the most critical cybersecurity trends to watch for in 2025 to protect their organizations from evolving threats.",
    excerpt:
      "An essential guide for CTOs on the most critical cybersecurity trends to watch for in 2025 to protect their organizations from evolving threats.",
    keywords: [
      "cybersecurity",
      "CTO",
      "information security",
      "technology trends",
    ],
    author: { name: "Jenisys" },
    component: Blog4,
    thumbnail: "/img/blog_3.png",
    category: "Security",
    tags: ["Cybersecurity", "CTO"],
    date: "2025-07-05",
    dateModified: "2025-07-05",
    readingTime: "12 min read",
    featured: false,
  },
  {
    id: 4,
    slug: "cloud-migration-strategies-startups",
    title: "Cloud Migration Strategies for Startups",
    description:
      "A comprehensive overview of effective cloud migration strategies tailored for startups, ensuring a smooth, secure, and cost-effective transition to the cloud.",
    excerpt:
      "A comprehensive overview of effective cloud migration strategies tailored for startups, ensuring a smooth, secure, and cost-effective transition to the cloud.",
    keywords: [
      "cloud migration",
      "startups",
      "cloud computing",
      "AWS",
      "Azure",
      "Google Cloud",
    ],
    author: { name: "Jenisys" },
    component: Blog2,
    thumbnail: "/img/blog_4.png",
    category: "Technology",
    tags: ["Cloud", "Startups"],
    date: "2025-06-28",
    dateModified: "2025-06-28",
    readingTime: "9 min read",
    featured: false,
  },
  {
    id: 5,
    slug: "scalable-react-applications-guide",
    title: "A Guide to Building Scalable React Applications",
    description:
      "Learn the best practices and architectural patterns for developing scalable and maintainable applications using the React framework.",
    excerpt:
      "Learn the best practices and architectural patterns for developing scalable and maintainable applications using the React framework.",
    keywords: [
      "React",
      "web development",
      "scalability",
      "front-end development",
      "javascript",
    ],
    author: { name: "Jenisys" },
    component: Blog3,
    thumbnail: "/img/blog_5.png",
    category: "Development",
    tags: ["React", "JavaScript"],
    date: "2025-06-20",
    dateModified: "2025-06-20",
    readingTime: "15 min read",
    featured: true,
  },
  {
    id: 6,
    slug: "api-design-principles-modern-web",
    title: "Best Practices for Modern API Design",
    description:
      "Learn the key principles and best practices for designing scalable, secure, and developer-friendly APIs in today’s interconnected software ecosystem.",
    excerpt:
      "Learn the key principles and best practices for designing scalable, secure, and developer-friendly APIs in today’s interconnected software ecosystem.",
    keywords: [
      "API design",
      "RESTful APIs",
      "web development",
      "software architecture",
    ],
    author: { name: "Jenisys" },
    component: Blog6,
    thumbnail: "/img/blog_6.png",
    category: "Development",
    tags: ["API", "Web Development"],
    date: "2025-06-12",
    dateModified: "2025-06-12",
    readingTime: "11 min read",
    featured: false,
  },
  {
    id: 7,
    slug: "nsw-sopa-payment-system",
    title: "NSW SOPA: Why Most Contractors Lose Money They Are Owed — And How to Stop It",
    description:
      "Learn how the NSW Security of Payment Act (SOPA) works, the 5 most common mistakes contractors make that void their claims, and how Jenisys builds automated compliance systems to protect your cash flow.",
    excerpt:
      "The Building and Construction Industry Security of Payment Act gives you a legal right to recover unpaid progress payments in under 35 days. Most contractors never use it correctly.",
    keywords: [
      "NSW SOPA",
      "Security of Payment Act NSW",
      "contractor payment disputes NSW",
      "building construction payment act",
      "payment claim adjudication",
      "construction contract compliance",
    ],
    author: { name: "Jenisys" },
    component: Blog7,
    thumbnail: "/img/blog_7_sopa.png",
    category: "Business",
    tags: ["NSW SOPA", "Construction", "Payment", "Compliance"],
    date: "2026-03-24",
    dateModified: "2026-03-24",
    readingTime: "14 min read",
    featured: true,
  },
  {
    id: 8,
    slug: "ai-automation-small-business-roi",
    title: "AI Automation for Small Business: What It Actually Costs, What It Actually Returns",
    description:
      "A practical breakdown of AI automation ROI for small businesses — with real numbers by business type (local, agency, SaaS, e-commerce), a priority automation list, ROI timeline, and tools vs custom comparison.",
    excerpt:
      "Every small business is losing money to manual tasks right now. Here is the exact ROI of AI automation by business type, with real calculations — not estimates.",
    keywords: [
      "AI automation for small business",
      "business automation ROI",
      "automate small business operations",
      "workflow automation ROI",
      "small business AI tools",
      "process automation",
    ],
    author: { name: "Jenisys" },
    component: Blog8,
    thumbnail: "/img/blog_8_ai.png",
    category: "Technology",
    tags: ["AI Automation", "ROI", "Small Business", "Workflow"],
    date: "2026-03-24",
    dateModified: "2026-03-24",
    readingTime: "16 min read",
    featured: true,
  },
];

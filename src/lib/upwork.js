// Facts taken from the owner's Upwork profile and agency profile (read via the Upwork connector, 16 Nov 2026).
// Nothing here is invented: every figure and quote below is on the public Upwork profile.
export const upwork = {
  profileUrl: "https://www.upwork.com/freelancers/~012845875e467d10e3",
  topRated: true,
  reviewCount: 7,
  fiveStarCount: 7, // all seven scored reviews are 5 out of 5
  foundedYear: 2023, // agency profile "year founded"
  offices: ["Atlanta, GA, USA", "Kolkata, India"],
  person: {
    name: "Tuhin Das",
    title: "Full-Stack & AI Engineer",
    // From his Upwork overview, verbatim.
    lines: [
      "Most software problems aren't complex. They're just poorly designed.",
      "I build systems that hold up under real-world pressure, and I fix the ones that don't.",
    ],
    education: "Bachelor of Computer Science, Georgia State University",
    stack: ["React", "Node.js", "Python", "Supabase", "PostgreSQL", "OpenAI API", "Stripe"],
  },
};

// Client reviews from the Upwork work history. Quotes are verbatim (first paragraph where long).
// Client names are left out on purpose: the page shows the project title instead.
export const reviews = [
  {
    quote:
      "Tuhin is easy to work with despite the time difference, and is focused on creating a deliverable that goes above and beyond any expectations. Everything from start to finish was treated with complete professionalism. I'd be happy to recommend Tuhin to anyone.",
    project: "Node.js middleware bridge between a low-code platform and a third-party API",
    date: "March 2025",
  },
  {
    quote:
      "Completing the project with Tuhin has been an absolute pleasure. They are not only technically skilled but also incredibly responsive, reliable, and proactive. From the start, they took the time to fully understand the project requirements and delivered high-quality work. Their attention to detail and problem-solving abilities really set them apart.",
    project: "HTTPS proxy middleware for a Node.js web app",
    date: "July 2025",
  },
  {
    quote:
      "Tuhin is very lovely to work with and really goes all the way. Even in technology, if some things don't work the first time, he goes back and resolves the matters until you are happy. I love working with Tuhin.",
    project: "Dockerized app deployment with Supabase and Auth0",
    date: "May 2026",
  },
  {
    quote: "Tuhin is a great developer to work and we also learn a lot from him.",
    project: "MVP refinement and end-to-end self-serve flow",
    date: "July 2026",
  },
];

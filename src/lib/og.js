// Social card content, looked up by page path so the /og endpoint only renders text that exists on the site.
import { offerBySlug, offerHeadlines } from "./offers";
import { entries } from "./case-study-data";
import { blogs } from "./blogData";

const STATIC = {
  "": { kicker: "AI automation · MVP development", title: "We turn manual work into software that runs itself." },
  "/services": { kicker: "Services", title: "Four ways to work with us" },
  "/pricing": { kicker: "Pricing", title: "Clear prices. Fixed quotes. No surprises." },
  "/case-study": { kicker: "Work", title: "Work we’ve shipped." },
  "/blog": { kicker: "Blog", title: "Notes on automation and building products" },
  "/about": { kicker: "About", title: "About Jenisys" },
  "/contact": { kicker: "Contact", title: "Tell us what you want to build or automate." },
  "/career": { kicker: "Careers", title: "Careers at Jenisys" },
  "/evaluate": { kicker: "Free tool", title: "Technical Fit Evaluation" },
  "/privacy-policy": { kicker: "Legal", title: "Privacy Policy" },
};

export function ogContent(path = "") {
  if (STATIC[path]) return STATIC[path];
  const svc = path.match(/^\/services\/([\w-]+)$/);
  if (svc && offerBySlug[svc[1]]) return { kicker: offerBySlug[svc[1]].name, title: offerHeadlines[svc[1]] };
  const cs = path.match(/^\/case-study\/([\w-]+)$/);
  if (cs) {
    const e = entries.find((x) => x.slug === cs[1]);
    if (e) return { kicker: "Case study · " + e.industry, title: e.title };
  }
  const bl = path.match(/^\/blog\/([\w-]+)$/);
  if (bl) {
    const b = blogs.find((x) => x.slug === bl[1]);
    if (b) return { kicker: "Article · " + b.category, title: b.title };
  }
  return STATIC[""];
}

export const ogUrl = (path = "") => `https://www.jenisys.in/og?path=${encodeURIComponent(path)}`;

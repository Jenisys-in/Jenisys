import type { MetadataRoute } from "next";
import { offers } from "@/lib/offers";
import { blogs } from "@/lib/blogData";
import { entries } from "@/lib/case-study-data";

const SITE = "https://www.jenisys.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    page("", 1, "weekly"),
    page("/services", 0.9),
    ...offers.map((o) => page(`/services/${o.slug}`, 0.9)),
    page("/pricing", 0.9),
    page("/case-study", 0.8),
    ...entries.map((e) => ({ ...page(`/case-study/${e.slug}`, 0.7), lastModified: new Date(e.date) })),
    page("/blog", 0.8, "weekly"),
    ...blogs.map((b) => ({ ...page(`/blog/${b.slug}`, 0.7), lastModified: new Date(b.dateModified || b.date) })),
    page("/about", 0.6),
    page("/contact", 0.8),
    page("/career", 0.4),
    page("/evaluate", 0.6),
    page("/Privacy-Policy", 0.2, "yearly"),
  ];
}

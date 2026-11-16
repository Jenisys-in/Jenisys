import CaseStudiesPage from "@/components/case-study";

import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Work: Case Studies in Software and Automation | Jenisys",
  description:
    "Two production systems, broken down: a government adjudication registry (18 days to 6) and a SaaS billing platform (2-day close to 4 hours).",
  path: "/case-study",
});

const ld = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Work", item: `${SITE}/case-study` },
  ],
};

export default function CaseStudiesRoute() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /><CaseStudiesPage /></>;
}

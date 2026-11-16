// src/app/about/page.js

import AboutUs from '../../components/About-us/about-us';
import { pageMeta } from "@/lib/seo";
import Script from "next/script";

export const metadata = pageMeta({
  title: "About Jenisys: Software Agency in Atlanta and Kolkata",
  description:
    "Jenisys is a software agency with offices in Atlanta and Kolkata, building AI automations for service businesses and MVPs for founders at fixed prices.",
  path: "/about",
});

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.jenisys.in/about#tuhin-das",
  name: "Tuhin Das",
  jobTitle: "Full-Stack & AI Engineer",
  worksFor: { "@id": "https://www.jenisys.in#organization" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Georgia State University" },
  sameAs: ["https://www.upwork.com/freelancers/~012845875e467d10e3"],
};

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      <AboutUs />
    </>
  );
}

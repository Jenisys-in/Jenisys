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

export default function About() {
  return <AboutUs />;
}



// src/app/contact/page.js

import Contact from '../../components/contact';
import { pageMeta } from "@/lib/seo";
import Script from "next/script";


export const metadata = pageMeta({
  title: "Contact Jenisys: Get a Fixed Quote or Book a Free Call",
  description:
    "Tell us what you want to build or automate. Get a fixed quote for AI automation or MVP development, or book a free 30-minute call with Jenisys.",
  path: "/contact",
});

export default function contact() {
  return <Contact />;
}

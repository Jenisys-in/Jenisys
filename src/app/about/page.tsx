// src/app/about/page.js

import AboutUs from '../../components/About-us/about-us';
import Script from "next/script";

export const metadata = {
  title: "About Us - Jenisys",
  description: "Learn more about Jenisys, a tech incubator providing top-tier software and digital solutions. Discover our mission, vision, and core values.",
  keywords: ["tech incubator", "software solutions", "digital transformation", "Jenisys mission"],
  openGraph: {
    title: "About Us - Jenisys",
    description: "Learn more about Jenisys, a tech incubator providing top-tier software and digital solutions. Discover our mission, vision, and core values.",
    url: "https://www.jenisys.in/about",
    siteName: "Jenisys",
    images: [
      {
        url: "https://www.jenisys.in/img/logo2.svg",
        width: 1200,
        height: 630,
        alt: "Jenisys - Software Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Jenisys",
    description: "Learn more about Jenisys, a tech incubator providing top-tier software and digital solutions. Discover our mission, vision, and core values.",
    images: ["https://www.jenisys.in/img/logo2.svg"],
  },
  alternates: {
    canonical: "https://www.jenisys.in/about",
  },
};

export default function About() {
  return <AboutUs />;
}

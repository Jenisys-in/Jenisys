// src/app/services/web-development/page.tsx

import WebDevelopmentPage from '@/components/services/web-development';
import Script from "next/script";

export const metadata = {
  title: "Web Development Services - Jenisys",
  description:
    "Discover how Jenisys crafts modern, scalable, and high-performing websites tailored to your business goals through expert web development services.",
  keywords: ["web development", "website development", "responsive design", "ecommerce development"],
  openGraph: {
    title: "Web Development Services - Jenisys",
    description:
      "Discover how Jenisys crafts modern, scalable, and high-performing websites tailored to your business goals through expert web development services.",
    url: "https://www.jenisys.in/services/web-development",
    siteName: "Jenisys",
    images: [
      {
        url: "https://www.jenisys.in/img/logo2.svg",
        width: 1200,
        height: 630,
        alt: "Jenisys - Web Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services - Jenisys",
    description:
      "Discover how Jenisys crafts modern, scalable, and high-performing websites tailored to your business goals through expert web development services.",
    images: ["https://www.jenisys.in/img/logo2.svg"],
  },
  alternates: {
    canonical: "https://www.jenisys.in/services/web-development",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.jenisys.in/services/web-development",
  },
  name: "Web Development Services",
  description:
    "Discover how Jenisys crafts modern, scalable, and high-performing websites tailored to your business goals through expert web development services.",
  provider: {
    "@type": "Organization",
    name: "Jenisys",
    url: "https://www.jenisys.in/",
  },
};

export default function WebDevelopmentRoute() {
  return (
    <>
      <Script
  id="service-jsonld"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
      <WebDevelopmentPage />
    </>
  );
}

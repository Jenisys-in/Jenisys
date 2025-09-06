// src/app/services/mobile-development/page.tsx

import MobileAppLanding from '@/components/services/mobile-development';
import Script from "next/script";


export const metadata = {
  title: "App Development Services - Jenisys",
  description:
    "Discover how Jenisys builds modern, scalable, and high-performing mobile apps tailored to your business goals through expert app development services.",
  keywords: ["app development", "mobile app development", "ios development", "android development"],
  openGraph: {
    title: "App Development Services - Jenisys",
    description:
      "Discover how Jenisys builds modern, scalable, and high-performing mobile apps tailored to your business goals through expert app development services.",
    url: "https://www.jenisys.in/services/mobile-development",
    siteName: "Jenisys",
    images: [
      {
        url: "https://www.jenisys.in/img/logo2.svg",
        width: 1200,
        height: 630,
        alt: "Jenisys - App Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Development Services - Jenisys",
    description:
      "Discover how Jenisys builds modern, scalable, and high-performing mobile apps tailored to your business goals through expert app development services.",
    images: ["https://www.jenisys.in/img/logo2.svg"],
  },
  alternates: {
    canonical: "https://www.jenisys.in/services/mobile-development",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.jenisys.in/services/mobile-development",
  },
  name: "App Development Services",
  description:
    "Discover how Jenisys builds modern, scalable, and high-performing mobile apps tailored to your business goals through expert app development services.",
  provider: {
    "@type": "Organization",
    name: "Jenisys",
    url: "https://www.jenisys.in/",
  },
};

export default function MobileDevelopmentRoute() {
  return (
    <>
      <Script
  id="service-jsonld"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
      <MobileAppLanding />
    </>
  );
}

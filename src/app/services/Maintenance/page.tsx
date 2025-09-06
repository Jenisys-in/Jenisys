import MaintenanceSupport from '@/components/services/Maintenance';
import Script from "next/script";

export const metadata = {
  title: "Maintenance & Support Services - Jenisys",
  description:
    "Ensure uninterrupted performance and reliability with Jenisys' Maintenance & Support services — from bug fixes to system updates and ongoing technical support.",
  keywords: ["maintenance and support", "technical support", "system updates", "bug fixes"],
  openGraph: {
    title: "Maintenance & Support Services - Jenisys",
    description:
      "Ensure uninterrupted performance and reliability with Jenisys' Maintenance & Support services — from bug fixes to system updates and ongoing technical support.",
    url: "https://www.jenisys.in/services/Maintenance",
    siteName: "Jenisys",
    images: [
      {
        url: "https://www.jenisys.in/img/logo2.svg",
        width: 1200,
        height: 630,
        alt: "Jenisys - Maintenance & Support Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maintenance & Support Services - Jenisys",
    description:
      "Ensure uninterrupted performance and reliability with Jenisys' Maintenance & Support services — from bug fixes to system updates and ongoing technical support.",
    images: ["https://www.jenisys.in/img/logo2.svg"],
  },
  alternates: {
    canonical: "https://www.jenisys.in/services/Maintenance",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.jenisys.in/services/Maintenance",
  },
  name: "Maintenance & Support Services",
  description:
    "Ensure uninterrupted performance and reliability with Jenisys' Maintenance & Support services — from bug fixes to system updates and ongoing technical support.",
  provider: {
    "@type": "Organization",
    name: "Jenisys",
    url: "https://www.jenisys.in/",
  },
};

export default function MaintenanceRoute() {
  return (
    <>
      <Script
  id="service-jsonld"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
      <MaintenanceSupport />
    </>
  );
}

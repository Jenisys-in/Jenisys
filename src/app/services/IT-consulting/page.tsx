import ITConsultingPage from '@/components/services/it-consulting';
import Script from "next/script";

export const metadata = {
  title: "IT Consulting Services - Jenisys",
  description:
    "Jenisys provides expert IT consulting to help businesses optimize tech strategies, enhance security, and ensure scalable, future-ready infrastructure and operations.",
  keywords: ["IT consulting", "tech strategy", "cybersecurity consulting", "scalable infrastructure"],
  openGraph: {
    title: "IT Consulting Services - Jenisys",
    description:
      "Jenisys provides expert IT consulting to help businesses optimize tech strategies, enhance security, and ensure scalable, future-ready infrastructure and operations.",
    url: "https://www.jenisys.in/services/IT-consulting",
    siteName: "Jenisys",
    images: [
      {
        url: "https://www.jenisys.in/img/logo2.svg",
        width: 1200,
        height: 630,
        alt: "Jenisys - IT Consulting Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Consulting Services - Jenisys",
    description:
      "Jenisys provides expert IT consulting to help businesses optimize tech strategies, enhance security, and ensure scalable, future-ready infrastructure and operations.",
    images: ["https://www.jenisys.in/img/logo2.svg"],
  },
  alternates: {
    canonical: "./",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.jenisys.in/services/IT-consulting",
  },
  name: "IT Consulting Services",
  description:
    "Jenisys provides expert IT consulting to help businesses optimize tech strategies, enhance security, and ensure scalable, future-ready infrastructure and operations.",
  provider: {
    "@type": "Organization",
    name: "Jenisys",
    url: "https://www.jenisys.in/",
  },
};

export default function ITConsultingRoute() {
  return (
    <>
      <Script
        id="service-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ITConsultingPage />
    </>
  );
}

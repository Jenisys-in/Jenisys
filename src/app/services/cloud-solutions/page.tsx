import Cloudsln from '@/components/services/cloud-solutions';

export const metadata = {
  title: "Cloud Services - Jenisys",
  description:
    "Jenisys offers secure, scalable cloud solutions to help businesses streamline operations, reduce infrastructure costs, and enhance agility with modern cloud technologies.",
  keywords: ["cloud solutions", "cloud services", "infrastructure as a service", "scalable cloud"],
  openGraph: {
    title: "Cloud Services - Jenisys",
    description:
      "Jenisys offers secure, scalable cloud solutions to help businesses streamline operations, reduce infrastructure costs, and enhance agility with modern cloud technologies.",
    url: "https://www.jenisys.in/services/cloud-solutions",
    siteName: "Jenisys",
    images: [
      {
        url: "https://www.jenisys.in/img/Logo.png",
        width: 1200,
        height: 630,
        alt: "Jenisys - Cloud Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Services - Jenisys",
    description:
      "Jenisys offers secure, scalable cloud solutions to help businesses streamline operations, reduce infrastructure costs, and enhance agility with modern cloud technologies.",
    images: ["https://www.jenisys.in/img/Logo.png"],
  },
  alternates: {
    canonical: "https://www.jenisys.in/services/cloud-solutions",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.jenisys.in/services/cloud-solutions",
  },
  name: "Cloud Services",
  description:
    "Jenisys offers secure, scalable cloud solutions to help businesses streamline operations, reduce infrastructure costs, and enhance agility with modern cloud technologies.",
  provider: {
    "@type": "Organization",
    name: "Jenisys",
    url: "https://www.jenisys.in/",
  },
};

export default function CloudRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Cloudsln />
    </>
  );
}

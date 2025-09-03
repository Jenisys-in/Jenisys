import Jenisyssftdev from '@/components/services/Custom-Software-Development';

export const metadata = {
  title: "Custom Software Development - Jenisys",
  description:
    "Jenisys builds tailored software solutions that fit your business needs — from enterprise systems to scalable custom platforms, ensuring high performance and long-term value.",
  keywords: ["custom software development", "tailored software solutions", "enterprise systems", "scalable platforms"],
  openGraph: {
    title: "Custom Software Development - Jenisys",
    description:
      "Jenisys builds tailored software solutions that fit your business needs — from enterprise systems to scalable custom platforms, ensuring high performance and long-term value.",
    url: "https://www.jenisys.in/services/Custom-Software-Development",
    siteName: "Jenisys",
    images: [
      {
        url: "https://www.jenisys.in/img/logo2.svg",
        width: 1200,
        height: 630,
        alt: "Jenisys - Custom Software Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development - Jenisys",
    description:
      "Jenisys builds tailored software solutions that fit your business needs — from enterprise systems to scalable custom platforms, ensuring high performance and long-term value.",
    images: ["https://www.jenisys.in/img/logo2.svg"],
  },
  alternates: {
    canonical: "https://www.jenisys.in/services/Custom-Software-Development",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.jenisys.in/services/Custom-Software-Development",
  },
  name: "Custom Software Development",
  description:
    "Jenisys builds tailored software solutions that fit your business needs — from enterprise systems to scalable custom platforms, ensuring high performance and long-term value.",
  provider: {
    "@type": "Organization",
    name: "Jenisys",
    url: "https://www.jenisys.in/",
  },
};

export default function CustomSoftwareDevelopmentRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Jenisyssftdev />
    </>
  );
}

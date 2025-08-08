import MaintenanceSupport from '@/components/services/Maintenance';

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
        url: "https://www.jenisys.in/img/Logo.png",
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
    images: ["https://www.jenisys.in/img/Logo.png"],
  },
  alternates: {
    canonical: "https://www.jenisys.in/services/Maintenance",
  },
};

export default function MaintenanceRoute() {
  return <MaintenanceSupport />;
}

// src/app/services/web-development/page.tsx

import WebDevelopmentPage from '@/components/services/web-development';

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
        url: "https://www.jenisys.in/img/Logo.png",
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
    images: ["https://www.jenisys.in/img/Logo.png"],
  },
  alternates: {
    canonical: "https://www.jenisys.in/services/web-development",
  },
};

export default function WebDevelopmentRoute() {
  return <WebDevelopmentPage />;
}

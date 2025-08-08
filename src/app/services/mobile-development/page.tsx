// src/app/services/mobile-development/page.tsx

import MobileAppLanding from '@/components/services/mobile-development';


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
        url: "https://www.jenisys.in/img/Logo.png",
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
    images: ["https://www.jenisys.in/img/Logo.png"],
  },
  alternates: {
    canonical: "https://www.jenisys.in/services/mobile-development",
  },
};

export default function MobileDevelopmentRoute() {
  return <MobileAppLanding />;
}

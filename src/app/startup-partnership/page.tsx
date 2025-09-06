import StartupPartnership from '@/components/startup-partnership';
import Script from "next/script";

export const metadata = {
  title: "Startup Partnership Program - Jenisys",
  description:
    "Partner with Jenisys to accelerate your startup's growth. Get access to affordable or equity-based development, mentorship, and strategic guidance to turn your vision into reality.",
  keywords: [
    "startup partnership",
    "startup accelerator",
    "equity based development",
    "affordable software development",
    "startup mentorship",
    "tech startup growth",
    "startup funding partnerships",
    "Jenisys startup program",
    "startup equity deals"
  ],
  openGraph: {
    title: "Startup Partnership Program - Jenisys",
    description:
      "Partner with Jenisys to accelerate your startup's growth. Get access to affordable or equity-based development, mentorship, and strategic guidance to turn your vision into reality.",
    url: "https://www.jenisys.in/startup-partnership",
    siteName: "Jenisys",
    images: [
      {
        url: "https://www.jenisys.in/img/logo2.svg",
        width: 1200,
        height: 630,
        alt: "Jenisys Startup Partnership Program",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Partnership Program - Jenisys",
    description:
      "Partner with Jenisys to accelerate your startup's growth. Get access to affordable or equity-based development, mentorship, and strategic guidance to turn your vision into reality.",
    images: ["https://www.jenisys.in/img/logo2.svg"],
  },
  alternates: {
    canonical: "https://www.jenisys.in/startup-partnership",
  },
};

export default function StartupPartnershipPage() {
  return <StartupPartnership />;
}

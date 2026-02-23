import CaseStudiesPage from "@/components/case-study";

export const metadata = {
  title: "Build Logs & Case Studies — Jenisys",
  description:
    "Real engineering builds, experiments, and technical breakdowns from the Jenisys engineering team. No marketing fluff — just systems, decisions, and lessons.",
  keywords: [
    "case studies",
    "engineering",
    "build logs",
    "architecture",
    "software development",
    "technical analysis",
  ],
  openGraph: {
    title: "Build Logs & Case Studies — Jenisys",
    description:
      "Real engineering builds, experiments, and technical breakdowns from the Jenisys team.",
    url: "https://www.jenisys.in/case-study",
    siteName: "Jenisys",
    images: [
      {
        url: "https://www.jenisys.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jenisys Case Studies",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Logs & Case Studies — Jenisys",
    description:
      "Real engineering builds from the Jenisys team. Systems, decisions, and lessons.",
    images: ["https://www.jenisys.in/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.jenisys.in/case-study",
  },
};

export default function CaseStudiesRoute() {
  return <CaseStudiesPage />;
}

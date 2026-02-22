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
};

export default function CaseStudiesRoute() {
  return <CaseStudiesPage />;
}

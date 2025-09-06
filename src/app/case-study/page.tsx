import CaseStudiesPage from '@/components/case-study';
import Script from "next/script";

export const metadata = {
  title: "Case Studies - Jenisys",
  description:
    "Explore real-world case studies showcasing how Jenisys has helped businesses across industries succeed through custom digital solutions and technology innovation.",
  keywords: ["case studies", "digital solutions", "business success stories", "technology innovation"],
};

export default function CaseStudiesRoute() {
  return <CaseStudiesPage />;
}

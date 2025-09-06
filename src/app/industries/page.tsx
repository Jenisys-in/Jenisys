import IndustriesPage from '../../components/About-us/industries';
import Script from "next/script";

export const metadata = {
  title: "Industries We Serve - Jenisys",
  description:
    "Explore how Jenisys helps businesses across industries solve real-world problems with tailored digital solutions, automation, and startup-friendly models.",
  keywords: ["industry solutions", "digital automation", "startup solutions", "business technology"],
};

export default function IndustriesRoute() {
  return <IndustriesPage />;
}

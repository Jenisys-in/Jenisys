import CareerHome from '@/components/career/career_home';
import { pageMeta } from "@/lib/seo";
import Script from "next/script";

export const metadata = pageMeta({
  title: "Careers at Jenisys: Join Our Talent Pool",
  description:
    "Remote-friendly engineering and product roles at Jenisys. No open roles right now, so join our talent pool and hear first when one opens.",
  path: "/career",
});

export default function CareerRoute() {
  return <CareerHome />;
}

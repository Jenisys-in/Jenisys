import Blog from '@/components/Blog';
import { pageMeta } from "@/lib/seo";
import Script from "next/script";

export const metadata = pageMeta({
  title: "Blog: AI Automation, MVPs and Software Insights | Jenisys",
  description:
    "Practical articles on AI automation for small businesses, MVP development, cloud, APIs and security from the Jenisys engineering team.",
  path: "/blog",
});

export default function BlogRoute() {
  return <Blog />;
}

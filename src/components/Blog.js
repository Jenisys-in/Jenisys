import Footer from "./Footer";
import PageHero from "./ui-brand/PageHero";
import CallBanner from "./home/CallBanner";
import BlogList from "./blog/BlogList";
import { blogs } from "@/lib/blogData";

// Server-rendered: every post is in the HTML for search engines; filtering is a small client island.
export default function Blog() {
  const posts = [...blogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(({ component, ...meta }) => meta);

  return (
    <div className="j-night">
      <PageHero
        eyebrow="Blog"
        title="Notes on automation and building products"
        lead="Articles on AI automation, MVPs and software, from the Jenisys team."
      />

      <div className="j-paper"><BlogList posts={posts} /></div>

      <CallBanner />
      <Footer />
    </div>
  );
}

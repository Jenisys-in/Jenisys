import Footer from "./Footer";
import PageCta from "./ui-brand/PageCta";
import BlogList from "./blog/BlogList";
import { blogs } from "@/lib/blogData";

// Server-rendered: every post is in the HTML for search engines; filtering is a small client island.
export default function Blog() {
  const posts = [...blogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(({ component, ...meta }) => meta);

  return (
    <div className="j-night">
      <section className="relative isolate overflow-hidden border-b border-line">
        <div aria-hidden="true" className="absolute inset-0 -z-10 j-grid-bg" />
        <div className="j-wrap pt-16 pb-14 md:pt-24 md:pb-16">
          <p className="j-eyebrow mb-5">Blog</p>
          <h1 className="j-h1 max-w-3xl">Insights &amp; Innovation</h1>
          <p className="j-lead mt-6">
            Explore cutting-edge articles, expert insights, and innovative ideas that drive digital transformation and business growth.
          </p>
        </div>
      </section>

      <BlogList posts={posts} />

      <PageCta
        title="Ready to build something great?"
        text="Let's discuss how we can help transform your business with technology."
        label="Start a Conversation"
      />
      <Footer />
    </div>
  );
}

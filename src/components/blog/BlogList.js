"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const categories = ["All", "Technology", "Development", "Business", "Security"];
const fmt = (d) => new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

export default function BlogList({ posts }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const shown = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return posts.filter((p) => {
      if (activeCategory !== "All" && p.category !== activeCategory) return false;
      if (!q) return true;
      return [p.title, p.description, p.category, ...(p.tags || []), ...(p.keywords || [])]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [posts, searchTerm, activeCategory]);

  const [lead, ...rest] = shown;
  const filtered = searchTerm || activeCategory !== "All";

  return (
    <section className="py-12 md:py-16">
      <div className="j-wrap">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActiveCategory(c)}
                aria-pressed={activeCategory === c}
                className={`rounded-full border px-4 py-2 text-sm transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal ${
                  activeCategory === c ? "border-signal bg-signal/10 text-ink" : "border-line text-ink-muted hover:border-ink-muted hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative md:w-80">
            <label htmlFor="blog-search" className="sr-only">Search articles</label>
            <input
              id="blog-search"
              type="search"
              placeholder="Search articles, authors, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-line bg-deep px-4 py-2.5 text-[15px] text-ink placeholder:text-ink-muted/70 focus:border-signal focus:outline-none"
            />
          </div>
        </div>

        <p className="mt-6 font-mono text-[13px] text-ink-muted" aria-live="polite">
          Showing <span className="text-ink">{shown.length}</span> of <span className="text-ink">{posts.length}</span> articles
          {filtered && (
            <span>
              {searchTerm && ` for "${searchTerm}"`}
              {searchTerm && activeCategory !== "All" && " in "}
              {activeCategory !== "All" && ` ${activeCategory}`}
            </span>
          )}
        </p>

        {shown.length === 0 ? (
          <div className="mt-16 border-t border-line pt-16">
            <h2 className="j-h3">No articles found</h2>
            <p className="mt-3 text-ink-muted">Try adjusting your search terms or category filter.</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
              }}
              className="j-btn j-btn-secondary mt-8"
            >
              View All Articles
            </button>
          </div>
        ) : (
          <>
            <Link href={`/blog/${lead.slug}`} className="group mt-10 grid gap-8 border-t border-line pt-10 md:grid-cols-2 md:items-center focus:outline-none">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-raised">
                <Image src={lead.thumbnail} alt={lead.title} fill priority sizes="(max-width: 768px) 100vw, 600px" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-signal">
                  {lead.category} <span className="text-ink-muted">· {fmt(lead.date)} · {lead.readingTime}</span>
                </p>
                <h2 className="j-h2 mt-4 !text-[clamp(26px,3vw,40px)] transition-colors duration-200 group-hover:text-signal">{lead.title}</h2>
                <p className="mt-4 text-[17px] leading-relaxed text-ink-muted">{lead.excerpt || lead.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[15px] text-ink">
                  Read More <span className="font-mono transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                </span>
              </div>
            </Link>

            {rest.length > 0 && (
              <ul className="mt-14 grid gap-x-8 gap-y-14 border-t border-line pt-14 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="group block focus:outline-none">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-raised">
                        <Image src={p.thumbnail} alt={p.title} fill sizes="(max-width: 640px) 100vw, 400px" className="object-cover opacity-90 transition-[transform,opacity] duration-300 group-hover:scale-[1.03] group-hover:opacity-100" />
                      </div>
                      <p className="mt-5 font-mono text-xs uppercase tracking-[0.08em] text-signal">
                        {p.category} <span className="text-ink-muted">· {fmt(p.date)} · {p.readingTime}</span>
                      </p>
                      <h3 className="j-h3 mt-3 text-ink transition-colors duration-200 group-hover:text-signal">{p.title}</h3>
                      <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-ink-muted">{p.excerpt || p.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </section>
  );
}

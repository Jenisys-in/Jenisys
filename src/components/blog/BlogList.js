import Link from "next/link";

const fmt = (d) => new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

// Article list. Covers are the generated brand cards (/og), so they match the site and carry no baked-in artwork.
export default function BlogList({ posts }) {
  return (
    <section className="j-section-tight" aria-label="Articles">
      <div className="j-wrap">
        <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {posts.map((p, i) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
                <div className="overflow-hidden rounded-xl border border-line bg-raised">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/og?path=${encodeURIComponent(`/blog/${p.slug}`)}`}
                    alt=""
                    width={1200}
                    height={630}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="aspect-[1200/630] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.08em] text-signal">
                  {p.category} <span className="text-ink-muted">· {fmt(p.date)} · {p.readingTime}</span>
                </p>
                <h2 className="j-h3 mt-3 text-ink transition-colors duration-200 group-hover:text-signal">{p.title}</h2>
                <p className="mt-3 line-clamp-3 text-[16px] leading-relaxed text-ink-muted">{p.excerpt || p.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[15px] text-ink">
                  Read the article <span className="font-mono transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

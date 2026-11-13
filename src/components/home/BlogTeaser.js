import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/lib/blogData";
import { blogIntro } from "./data";

const fmt = (d) => new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

export default function BlogTeaser() {
  const posts = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
  return (
    <section className="j-night bg-deep border-t border-line py-24 md:py-32" aria-labelledby="blog-title">
      <div className="j-wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 id="blog-title" className="j-h2">{blogIntro.title}</h2>
            <p className="j-lead mt-4">{blogIntro.lead}</p>
          </div>
          <Link href="/blog" className="j-btn j-btn-secondary">
            View All Posts <span className="j-arrow">→</span>
          </Link>
        </div>
        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group block focus:outline-none">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-raised">
                  <Image
                    src={p.thumbnail}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover opacity-90 transition-[transform,opacity] duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
                  />
                </div>
                <p className="mt-5 font-mono text-xs uppercase tracking-[0.08em] text-signal">
                  {p.category} <span className="text-ink-muted">· {fmt(p.date)} · {p.readingTime}</span>
                </p>
                <h3 className="j-h3 mt-3 text-ink transition-colors duration-200 group-hover:text-signal group-focus-visible:text-signal">{p.title}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-[15px] text-ink-muted group-hover:text-ink">
                  Read More <span className="font-mono transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

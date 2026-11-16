import Link from "next/link";
import { entries } from "@/lib/case-study-data";
import { outcomes } from "@/lib/outcomes";
import { ChapterHead } from "./Chapter";

// Pointer from a service page to the matching proof. Honest framing: some are larger systems,
// some are smaller engagements; each row links to its write-up.
export default function RelatedWork({ n = "04", slug }) {
  const list = (slug ? entries.filter((e) => e.serves?.includes(slug)) : entries).slice(0, 3);
  return (
    <section id="related" className="j-night j-section-tight scroll-mt-32" aria-labelledby="related-title">
      <div className="j-wrap">
        <ChapterHead
          n={n}
          name="Related work"
          id="related-title"
          title={slug ? "Work behind this service" : "Delivered work"}
          lead="Delivered projects that used the same engineering. Each links to its write-up."
          className="mb-10"
        />
        <ul className="j-divided border-y border-line">
          {list.map((c) => {
            const o = outcomes.find((x) => x.slug === c.slug);
            return (
              <li key={c.slug}>
                <Link href={`/case-study/${c.slug}`} className="group grid items-baseline gap-x-8 gap-y-2 py-7 transition-colors hover:bg-deep md:grid-cols-12 md:px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
                  <span className="md:col-span-7">
                    <span className="j-eyebrow">{c.industry}</span>
                    <span className="j-h3 mt-2 block text-ink">{c.title}</span>
                  </span>
                  <span className="flex items-baseline gap-3 tabular-nums md:col-span-4 md:justify-end">
                    {o && o.before ? (
                      <>
                        <s className="font-mono text-ink-muted">{o.before}</s>
                        <span className="font-mono text-signal" aria-hidden="true">→</span>
                        <span className="font-display text-3xl font-bold tracking-[-0.03em] text-ink">{o.after}{o.unit}</span>
                      </>
                    ) : (
                      <span className="font-mono text-[13px] text-ink">{c.headline}</span>
                    )}
                  </span>
                  <span className="hidden font-mono text-signal transition-transform group-hover:translate-x-1 md:col-span-1 md:block md:text-right" aria-hidden="true">→</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

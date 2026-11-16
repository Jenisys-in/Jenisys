import Link from "next/link";
import { AdjudicationVisual } from "../visuals/CaseVisuals";
import OutcomeShift from "../ui-brand/OutcomeShift";
import { ChapterHead } from "../ui-brand/Chapter";
import { caseStudies } from "./data";
import { outcomes } from "@/lib/outcomes";
import { entries } from "@/lib/case-study-data";

// Chapter 03 — one story told properly, plus a pointer to the second.
export default function FeaturedStory() {
  const main = caseStudies[0];
  const other = caseStudies[1];
  const shift = outcomes.find((o) => o.slug === main.slug);
  const otherShift = outcomes.find((o) => o.slug === other.slug);
  return (
    <section className="j-night j-edge j-section" aria-labelledby="story-title">
      <div className="j-wrap">
        <ChapterHead
          n="03"
          name="The work"
          id="story-title"
          title="Delivered work, and what changed"
          lead="Two larger systems and three recent engagements. Our automation and MVP packages use the same engineering at a smaller scale."
          className="j-rise"
        />

        <Link
          href={`/case-study/${main.slug}`}
          className="j-panel j-light-edge group mt-14 grid overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-signal lg:grid-cols-2"
        >
          <div className="flex flex-col p-7 md:p-12">
            <span className="j-eyebrow">{main.industry}</span>
            <h3 className="j-h3 mt-3 text-ink">{main.title}</h3>
            <div className="mt-8"><OutcomeShift o={shift} fill={false} /></div>
            <p className="mt-8 max-w-[52ch] text-[16px] leading-relaxed text-ink-muted">{main.description}</p>
            <dl className="mt-8 grid grid-cols-1 gap-4 border-t border-line pt-5 min-[420px]:grid-cols-3">
              {main.metrics.map(([k, v]) => (
                <div key={k} className="min-w-0">
                  <dt className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-muted">{k}</dt>
                  <dd className="mt-1.5 font-display text-lg font-semibold leading-tight text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <span className="mt-auto inline-flex items-center gap-2 pt-8 text-[15px] font-medium text-signal">
              Read the full case study <span className="font-mono transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </span>
          </div>
          <div className="flex items-center border-t border-line bg-void/40 px-4 py-8 lg:border-l lg:border-t-0 lg:px-10">
            <AdjudicationVisual className="w-full" />
          </div>
        </Link>

        <Link
          href={`/case-study/${other.slug}`}
          className="group mt-6 flex flex-col gap-4 rounded-2xl border border-line p-6 transition-colors hover:bg-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-signal md:flex-row md:items-center md:justify-between md:p-8"
        >
          <div className="min-w-0">
            <span className="j-eyebrow">{other.industry}</span>
            <h3 className="j-h3 mt-2 text-ink">{other.title}</h3>
          </div>
          <div className="flex shrink-0 items-baseline gap-3 whitespace-nowrap tabular-nums">
            <s className="font-mono text-lg text-ink-muted">{otherShift.before}</s>
            <span className="font-mono text-signal" aria-hidden="true">→</span>
            <span className="font-display text-4xl font-bold tracking-[-0.03em] text-ink">{otherShift.after}{otherShift.unit}</span>
            <span className="font-mono text-[12px] uppercase tracking-[0.06em] text-gain">monthly close</span>
          </div>
        </Link>

        <div className="mt-20">
          <p className="j-eyebrow mb-6">Recent engagements · from our Upwork portfolio</p>
          <ul className="j-divided border-y border-line">
            {entries.filter((e) => e.source === "upwork").map((e) => {
              const o = outcomes.find((x) => x.slug === e.slug);
              return (
                <li key={e.slug}>
                  <Link href={`/case-study/${e.slug}`} className="group grid items-baseline gap-x-8 gap-y-2 py-6 transition-colors hover:bg-deep md:grid-cols-12 md:px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
                    <span className="font-display text-xl font-semibold tracking-[-0.015em] text-ink md:col-span-7">{e.title}</span>
                    <span className="flex items-baseline gap-2 tabular-nums md:col-span-4 md:justify-end">
                      {o ? (
                        <>
                          <span className="font-display text-3xl font-bold tracking-[-0.03em] text-ink">{o.prefix || ""}{o.after}{o.unit}</span>
                          <span className="font-mono text-[12px] uppercase tracking-[0.06em] text-gain">{o.what}</span>
                        </>
                      ) : (
                        <span className="font-mono text-[13px] text-ink">{e.headline}</span>
                      )}
                    </span>
                    <span className="hidden font-mono text-signal transition-transform group-hover:translate-x-1 md:col-span-1 md:block md:text-right" aria-hidden="true">→</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

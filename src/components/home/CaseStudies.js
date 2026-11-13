import Link from "next/link";
import { AdjudicationVisual, BillingVisual } from "../visuals/CaseVisuals";
import { caseStudies, caseStudiesIntro } from "./data";

const visuals = { "nsw-sopa-adjudication-platform": AdjudicationVisual, "us-saas-subscription-billing-platform": BillingVisual };

export default function CaseStudies() {
  return (
    <section className="j-night py-24 md:py-32" aria-labelledby="cases-title">
      <div className="j-wrap">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="j-eyebrow mb-4">Case Studies</p>
            <h2 id="cases-title" className="j-h2">
              {caseStudiesIntro.titleA} <span className="text-ink-muted">{caseStudiesIntro.titleB}</span>
            </h2>
          </div>
          <p className="j-lead lg:col-span-5">{caseStudiesIntro.lead}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((c) => {
            const Visual = visuals[c.slug];
            return (
              <Link
                key={c.slug}
                href={`/case-study/${c.slug}`}
                className="j-panel j-light-edge group flex h-full flex-col overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                <div className="border-b border-line bg-void/40 px-6 pt-4 pb-2">{Visual && <Visual />}</div>
                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <span className="j-eyebrow">{c.industry}</span>
                  <h3 className="j-h3 mt-3 text-ink">{c.title}</h3>
                  <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-line pt-5">
                    {c.metrics.map(([k, v]) => (
                      <div key={k} className="min-w-0">
                        <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">{k}</dt>
                        <dd className="mt-1.5 font-display text-lg font-semibold leading-tight text-ink">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <span className="mt-auto pt-8 inline-flex items-center gap-2 text-[15px] font-medium text-signal">
                    Read Full Case Study
                    <span className="font-mono transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Footer from "./Footer";
import PageHero from "./ui-brand/PageHero";
import OutcomeShift from "./ui-brand/OutcomeShift";
import CallBanner from "./home/CallBanner";
import { entries, TYPE_LABELS } from "@/lib/case-study-data";
import { outcomes } from "@/lib/outcomes";

const formatDate = (iso) => new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short" });

// Work index: one large row per project, led by the measured result.
export default function CaseStudiesPage() {
  return (
    <div className="j-night">
      <PageHero
        eyebrow="Work"
        title="Work we’ve shipped."
        lead="Technical breakdowns of real production systems: the problems, constraints, architecture decisions, and what we learned."
        crumbs={[{ label: "Home", href: "/" }, { label: "Work" }]}
      />

      <section className="j-paper" aria-label="Case studies">
        <ul className="j-wrap j-divided">
          {entries.map((entry, i) => {
            const shifts = outcomes.filter((o) => o.slug === entry.slug);
            const lead = shifts[0];
            return (
              <li key={entry.slug}>
                <Link
                  href={`/case-study/${entry.slug}`}
                  className="group grid gap-10 py-14 transition-colors md:py-20 lg:grid-cols-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                >
                  <div className="lg:col-span-5">
                    <p className="j-chapter mb-6"><b>{String(i + 1).padStart(2, "0")}</b> Case study</p>
                    {lead ? <OutcomeShift o={lead} /> : <p className="font-display text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-ink md:text-[44px]">{entry.headline}</p>}
                    {shifts.slice(1).map((o, k) => (
                      <p key={k} className="mt-5 flex items-baseline gap-3 border-t border-line pt-4 font-mono text-sm text-ink-muted">
                        <span className="font-display text-2xl font-bold text-ink tabular-nums">{o.prefix || ""}{o.after}{o.unit}</span> {o.what}
                      </p>
                    ))}
                  </div>
                  <article className="min-w-0 lg:col-span-7">
                    <p className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.08em]">
                      <span className="text-signal">{TYPE_LABELS[entry.type] || entry.type}</span>
                      <span className="text-ink-muted">{entry.systemType}</span>
                    </p>
                    <h2 className="j-h2 mt-4 text-ink transition-colors group-hover:text-signal">{entry.title}</h2>
                    <p className="mt-3 font-mono text-[13px] text-ink-muted">
                      {entry.duration ? `${entry.duration} · ` : ""}<time dateTime={entry.date}>{formatDate(entry.date)}</time>{entry.source === "upwork" ? " · From our Upwork portfolio" : ""}
                    </p>
                    <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink-muted">{entry.summary}</p>
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
                      {entry.stack.map((t) => (
                        <li key={t} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-ink-muted">{t}</li>
                      ))}
                    </ul>
                    <span className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-signal">
                      Read the full analysis <span className="font-mono transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                    </span>
                  </article>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <CallBanner />
      <Footer />
    </div>
  );
}

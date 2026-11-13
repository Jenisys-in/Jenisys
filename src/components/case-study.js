import Link from "next/link";
import Footer from "./Footer";
import PageCta from "./ui-brand/PageCta";
import { entries, TYPE_LABELS } from "@/lib/case-study-data";
import { outcomes } from "@/lib/outcomes";

const formatDate = (iso) => new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short" });

export default function CaseStudiesPage() {
  return (
    <div className="j-night">
      <section className="relative isolate overflow-hidden border-b border-line">
        <div aria-hidden="true" className="absolute inset-0 -z-10 j-grid-bg" />
        <div className="j-wrap pt-16 pb-14 md:pt-24 md:pb-20">
          <p className="j-eyebrow mb-5">Case Studies</p>
          <h1 className="j-h1 max-w-3xl">Work we&apos;ve shipped.</h1>
          <p className="j-lead mt-6">
            Technical breakdowns of real production systems — the problems, constraints, architecture decisions, and what we learned.
          </p>
          <p className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[13px] text-ink-muted">
            <span className="flex items-center gap-2 text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-gain" aria-hidden="true" />
              {entries.length} published
            </span>
            {entries.map((e) => (
              <span key={e.slug}>· {e.industry}</span>
            ))}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="j-wrap flex flex-col gap-8">
          {entries.map((entry) => {
            const shifts = outcomes.filter((o) => o.slug === entry.slug);
            return (
              <Link
                key={entry.slug}
                href={`/case-study/${entry.slug}`}
                className="j-panel j-light-edge group grid gap-10 p-7 md:p-10 lg:grid-cols-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                <article className="lg:col-span-7 min-w-0">
                  <p className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.08em]">
                    <span className="text-signal">{TYPE_LABELS[entry.type] || entry.type}</span>
                    <span className="text-ink-muted">{entry.systemType}</span>
                  </p>
                  <h2 className="j-h3 mt-4 text-ink !text-[clamp(22px,2.2vw,30px)]">{entry.title}</h2>
                  <p className="mt-3 font-mono text-[13px] text-ink-muted">
                    {entry.industry} · {entry.duration} · <time dateTime={entry.date}>{formatDate(entry.date)}</time>
                  </p>
                  <p className="mt-5 text-[16px] leading-relaxed text-ink-muted">{entry.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
                    {entry.stack.map((t) => (
                      <li key={t} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-ink-muted">{t}</li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-signal">
                    Read full analysis
                    <span className="font-mono transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                  </span>
                </article>
                <ul className="lg:col-span-5 flex flex-col justify-center border-t border-line lg:border-t-0 lg:border-l lg:pl-10">
                  {shifts.map((o, i) => (
                    <li key={i} className={`py-6 ${i > 0 ? "border-t border-line" : ""} lg:first:pt-0 lg:last:pb-0`}>
                      <p className="text-sm text-ink-muted">{o.what}</p>
                      <p className="mt-2 flex flex-wrap items-baseline gap-x-3 tabular-nums">
                        {o.before && (
                          <>
                            <s className="font-mono text-lg text-ink-muted decoration-1">{o.before}</s>
                            <span className="font-mono text-signal" aria-hidden="true">→</span>
                          </>
                        )}
                        <span className="font-display text-5xl font-bold tracking-[-0.04em] text-ink">
                          {o.prefix || ""}
                          {o.after}
                          {o.unit}
                        </span>
                      </p>
                      <p className="mt-2 font-mono text-xs uppercase tracking-[0.06em] text-gain">▼ {o.gain}</p>
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
      </section>

      <PageCta
        eyebrow="Have a project in mind?"
        title="Let's talk about what you're building."
        text="We approach every engagement with the same rigour we document here — clear constraints, honest tradeoffs, and a focus on outcomes."
      />
      <Footer />
    </div>
  );
}

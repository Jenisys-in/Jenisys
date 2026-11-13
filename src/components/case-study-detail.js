import Link from "next/link";
import Footer from "./Footer";
import PageCta from "./ui-brand/PageCta";
import { entries, TYPE_LABELS } from "@/lib/case-study-data";
import { outcomes } from "@/lib/outcomes";

const formatDate = (iso) => new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
const toId = (label) => label.toLowerCase().replace(/\s+/g, "-");

export default function CaseStudyDetail({ slug }) {
  const entry = entries.find((e) => e.slug === slug);
  if (!entry) return null;

  const sections = [
    { label: "Problem", content: entry.problem },
    { label: "Context", content: entry.context },
    { label: "Constraints", content: entry.constraints },
    { label: "Approach", content: entry.approach },
    { label: "Architecture Decisions", content: entry.architectureDecisions },
    { label: "Tradeoffs", content: entry.tradeoffs },
    { label: "Implementation Notes", content: entry.implementationNotes },
    { label: "Result", content: entry.result },
    { label: "Lessons Learned", content: entry.lessonsLearned },
  ];
  const shifts = outcomes.filter((o) => o.slug === entry.slug);

  return (
    <div className="j-night">
      <header className="relative isolate overflow-hidden border-b border-line">
        <div aria-hidden="true" className="absolute inset-0 -z-10 j-grid-bg" />
        <div className="j-wrap pt-10 pb-14 md:pt-14 md:pb-20">
          <nav aria-label="Breadcrumb" className="font-mono text-[13px] text-ink-muted">
            <Link href="/case-study" className="hover:text-ink">Case Studies</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-ink">{entry.title}</span>
          </nav>
          <p className="mt-10 flex flex-wrap gap-2">
            {[TYPE_LABELS[entry.type] || entry.type, entry.systemType, entry.engineeringFocus, entry.buildCategory].map((t, i) => (
              <span key={t} className={`rounded-md border px-2.5 py-1 font-mono text-xs uppercase tracking-[0.06em] ${i === 0 ? "border-signal/50 text-signal" : "border-line text-ink-muted"}`}>
                {t}
              </span>
            ))}
          </p>
          <h1 className="j-h1 mt-6 max-w-4xl !text-[clamp(34px,4.6vw,60px)]">{entry.title}</h1>
          <p className="j-lead mt-6 max-w-3xl">{entry.summary}</p>
          <p className="mt-8 font-mono text-[13px] text-ink-muted">
            {entry.industry} · {entry.duration} · <time dateTime={entry.date}>{formatDate(entry.date)}</time>
          </p>
        </div>
      </header>

      {shifts.length > 0 && (
        <section aria-label="Results" className="border-b border-line">
          <ul className={`j-wrap grid ${shifts.length > 1 ? "md:grid-cols-2" : ""}`}>
            {shifts.map((o, i) => (
              <li key={i} className={`py-8 md:px-8 ${i > 0 ? "border-t md:border-t-0 md:border-l border-line" : ""} md:first:pl-0`}>
                <p className="text-sm text-ink-muted">{o.what}</p>
                <p className="mt-2 flex flex-wrap items-baseline gap-x-4 tabular-nums">
                  {o.before && (
                    <>
                      <s className="font-mono text-xl text-ink-muted decoration-1">{o.before}</s>
                      <span className="font-mono text-signal" aria-hidden="true">→</span>
                    </>
                  )}
                  <span className="font-display text-[56px] font-bold leading-none tracking-[-0.04em] text-ink">
                    {o.prefix || ""}
                    {o.after}
                    {o.unit}
                  </span>
                </p>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.06em] text-gain">▼ {o.gain}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <main className="j-wrap grid gap-12 py-16 md:py-24 lg:grid-cols-12">
        <aside className="hidden lg:block lg:col-span-3">
          <nav aria-label="Sections" className="sticky top-28 flex flex-col gap-1 border-l border-line">
            {sections.map((s) => (
              <a key={s.label} href={`#${toId(s.label)}`} className="-ml-px border-l border-transparent py-1.5 pl-4 text-sm text-ink-muted transition-colors duration-150 hover:border-signal hover:text-ink">
                {s.label}
              </a>
            ))}
          </nav>
          <div className="sticky top-[30rem] mt-10">
            <p className="j-eyebrow mb-3">Stack</p>
            <ul className="flex flex-wrap gap-2">
              {entry.stack.map((t) => (
                <li key={t} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-ink-muted">{t}</li>
              ))}
            </ul>
          </div>
        </aside>

        <article className="lg:col-span-8 lg:col-start-5 min-w-0">
          <ul className="mb-12 flex flex-wrap gap-2 lg:hidden" aria-label="Stack">
            {entry.stack.map((t) => (
              <li key={t} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-ink-muted">{t}</li>
            ))}
          </ul>
          {sections.map((s, i) => {
            const id = toId(s.label);
            const featured = s.label === "Result";
            return (
              <section key={s.label} id={id} className={`scroll-mt-28 ${featured ? "j-panel j-light-edge my-14 p-7 md:p-10" : `py-10 ${i === 0 ? "pt-0" : "border-t border-line"}`}`}>
                <h2 className="j-eyebrow mb-4">
                  <a href={`#${id}`} className="hover:text-ink">{s.label}</a>
                </h2>
                <p className={featured ? "text-[19px] leading-[1.65] text-ink" : "text-[17px] leading-[1.75] text-ink-muted max-w-[68ch]"}>{s.content}</p>
              </section>
            );
          })}
          <Link href="/case-study" className="j-link mt-6 inline-flex items-center gap-2 text-[15px]">
            <span className="font-mono" aria-hidden="true">←</span> All case studies
          </Link>
        </article>
      </main>

      <PageCta eyebrow="Have a similar challenge?" title="Let's talk about your project." />
      <Footer />
    </div>
  );
}

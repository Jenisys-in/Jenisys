import Link from "next/link";
import Footer from "./Footer";
import PageHero from "./ui-brand/PageHero";
import OutcomeShift from "./ui-brand/OutcomeShift";
import CallBanner from "./home/CallBanner";
import { AdjudicationVisual, BillingVisual } from "./visuals/CaseVisuals";
import { entries, TYPE_LABELS } from "@/lib/case-study-data";
import { outcomes } from "@/lib/outcomes";

const formatDate = (iso) => new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
const toId = (label) => label.toLowerCase().replace(/\s+/g, "-");
const visuals = { "nsw-sopa-adjudication-platform": AdjudicationVisual, "us-saas-subscription-billing-platform": BillingVisual };

// Case study: result first, then the system, then the decisions. Reading ground is Paper.
export default function CaseStudyDetail({ slug }) {
  const entry = entries.find((e) => e.slug === slug);
  if (!entry) return null;

  const sections = [
    { label: "Result", content: entry.result },
    { label: "Problem", content: entry.problem },
    { label: "Context", content: entry.context },
    { label: "Constraints", content: entry.constraints },
    { label: "Approach", content: entry.approach },
    { label: "Architecture Decisions", content: entry.architectureDecisions },
    { label: "Tradeoffs", content: entry.tradeoffs },
    { label: "Implementation Notes", content: entry.implementationNotes },
    { label: "Lessons Learned", content: entry.lessonsLearned },
  ];
  const shifts = outcomes.filter((o) => o.slug === entry.slug);
  const Visual = visuals[entry.slug];

  return (
    <div className="j-night">
      <PageHero
        crumbs={[{ label: "Work", href: "/case-study" }, { label: entry.title }]}
        title={entry.title}
        lead={entry.summary}
      >
        <p className="mt-8 flex flex-wrap gap-2">
          {[TYPE_LABELS[entry.type] || entry.type, entry.systemType, entry.engineeringFocus, entry.buildCategory].map((t, i) => (
            <span key={t} className={`rounded-md border px-2.5 py-1 font-mono text-xs uppercase tracking-[0.06em] ${i === 0 ? "border-signal/50 text-signal" : "border-line text-ink-muted"}`}>
              {t}
            </span>
          ))}
        </p>
        <p className="mt-5 font-mono text-[13px] text-ink-muted">
          {entry.industry} · {entry.duration} · <time dateTime={entry.date}>{formatDate(entry.date)}</time>
        </p>
      </PageHero>

      {shifts.length > 0 && (
        <section aria-label="Results" className="border-b border-line">
          <ul className={`j-wrap grid ${shifts.length > 1 ? "md:grid-cols-2" : ""}`}>
            {shifts.map((o, i) => (
              <li key={i} className={`py-10 md:px-8 ${i > 0 ? "border-t border-line md:border-l md:border-t-0" : ""} md:first:pl-0`}>
                <OutcomeShift o={o} size="lg" />
              </li>
            ))}
          </ul>
        </section>
      )}

      {Visual && (
        <section aria-label="System diagram" className="border-b border-line">
          <div className="j-wrap py-12 md:py-16">
            <p className="j-eyebrow mb-6">The system</p>
            <div className="mx-auto max-w-2xl"><Visual /></div>
          </div>
        </section>
      )}

      <div className="j-paper">
        <div className="j-wrap grid gap-12 py-16 md:py-24 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav aria-label="Sections" className="sticky top-28 flex flex-col gap-1 border-l border-line">
              {sections.map((s) => (
                <a key={s.label} href={`#${toId(s.label)}`} className="-ml-px border-l border-transparent py-1.5 pl-4 text-sm text-ink-muted transition-colors duration-150 hover:border-signal hover:text-ink">
                  {s.label}
                </a>
              ))}
            </nav>
            <div className="mt-10">
              <p className="j-eyebrow mb-3">Stack</p>
              <ul className="flex flex-wrap gap-2">
                {entry.stack.map((t) => (
                  <li key={t} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-ink-muted">{t}</li>
                ))}
              </ul>
            </div>
          </aside>

          <article className="min-w-0 lg:col-span-8 lg:col-start-5">
            <ul className="mb-12 flex flex-wrap gap-2 lg:hidden" aria-label="Stack">
              {entry.stack.map((t) => (
                <li key={t} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-ink-muted">{t}</li>
              ))}
            </ul>
            {sections.map((s, i) => {
              const id = toId(s.label);
              const featured = i === 0;
              return (
                <section key={s.label} id={id} className={`scroll-mt-28 ${featured ? "j-panel j-light-edge mb-14 p-7 md:p-10" : "border-t border-line py-10"}`}>
                  <h2 className="j-eyebrow mb-4">
                    <a href={`#${id}`} className="hover:text-ink">{s.label}</a>
                  </h2>
                  <p className={featured ? "text-[19px] leading-[1.65] text-ink" : "max-w-[68ch] text-[17px] leading-[1.75] text-ink-muted"}>{s.content}</p>
                </section>
              );
            })}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
              <Link href="/case-study" className="j-link inline-flex items-center gap-2 py-2 text-[15px]">
                <span className="font-mono" aria-hidden="true">←</span> All work
              </Link>
              <Link href="/services/discovery-sprint" className="j-link inline-flex items-center gap-2 py-2 text-[15px]">
                Start with a Discovery Sprint <span className="font-mono" aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </div>

      <CallBanner />
      <Footer />
    </div>
  );
}

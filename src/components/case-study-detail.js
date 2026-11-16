import Link from "next/link";
import Footer from "./Footer";
import PageHero from "./ui-brand/PageHero";
import OutcomeShift from "./ui-brand/OutcomeShift";
import CallBanner from "./home/CallBanner";
import { AdjudicationVisual, BillingVisual } from "./visuals/CaseVisuals";
import { entries, TYPE_LABELS } from "@/lib/case-study-data";
import { outcomes } from "@/lib/outcomes";
import { offerBySlug, money } from "@/lib/offers";
import { upwork } from "@/lib/upwork";

const formatDate = (iso) => new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
const shortDate = (iso) => new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short" });
const toId = (label) => label.toLowerCase().replace(/\s+/g, "-");
const visuals = { "nsw-sopa-adjudication-platform": AdjudicationVisual, "us-saas-subscription-billing-platform": BillingVisual };

// Case study: result first, then the system, then the decisions. Reading ground is Paper.
export default function CaseStudyDetail({ slug }) {
  const idx = entries.findIndex((e) => e.slug === slug);
  const entry = entries[idx];
  if (!entry) return null;
  const next = entries[(idx + 1) % entries.length];
  const nextShift = outcomes.find((o) => o.slug === next.slug);
  const service = offerBySlug[entry.serves?.[0]];

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
  ].filter((x) => x.content);
  const shifts = outcomes.filter((o) => o.slug === entry.slug);
  const Visual = visuals[entry.slug];

  // Scannable facts before any long text.
  const facts = [
    { k: "Industry", v: entry.industry },
    { k: entry.duration ? "Duration" : "Delivered", v: entry.duration || shortDate(entry.date) },
    { k: "Built with", v: entry.stack.slice(0, 3).join(", ") + (entry.stack.length > 3 ? ` +${entry.stack.length - 3}` : "") },
    { k: "Type", v: entry.buildCategory },
  ];

  return (
    <div className="j-night">
      <PageHero
        crumbs={[{ label: "Work", href: "/case-study" }, { label: entry.title }]}
        title={entry.title}
        lead={entry.summary}
      >
        <p className="mt-8 flex flex-wrap gap-2">
          {[TYPE_LABELS[entry.type] || entry.type, entry.systemType].map((t, i) => (
            <span key={t} className={`rounded-md border px-2.5 py-1 font-mono text-[12px] uppercase tracking-[0.06em] ${i === 0 ? "border-signal/50 text-signal" : "border-line text-ink-muted"}`}>
              {t}
            </span>
          ))}
        </p>
      </PageHero>

      <section aria-label="At a glance" className="border-b border-line">
        <dl className="j-wrap grid grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <div key={f.k} className={`border-line py-6 md:py-8 ${i % 2 ? "border-l pl-5 md:pl-8" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l lg:pl-8" : ""}`}>
              <dt className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-muted">{f.k}</dt>
              <dd className="mt-2 text-[15px] leading-snug text-ink md:text-[17px]">{f.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {shifts.length > 0 && (
        <section aria-label="Results" className="border-b border-line">
          <ul className={`j-wrap grid ${shifts.length > 1 ? "md:grid-cols-2" : ""}`}>
            {shifts.map((o, i) => (
              <li key={i} className={`py-10 md:px-8 ${i > 0 ? "border-t border-line md:border-l md:border-t-0" : ""} md:first:pl-0`}>
                <OutcomeShift o={o} size="lg" fill={false} />
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
        {/* Phone and tablet: a section strip that stays under the header. Desktop uses the side list below. */}
        <nav aria-label="Sections" className="sticky top-16 z-30 border-b border-line bg-void/95 backdrop-blur lg:hidden">
          <ul className="j-wrap flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
            {sections.map((s) => (
              <li key={s.label} className="shrink-0">
                <a href={`#${toId(s.label)}`} className="inline-flex min-h-[40px] items-center rounded-full border border-line px-4 text-[14px] text-ink-muted transition-colors hover:border-signal hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="j-wrap grid gap-12 py-14 md:py-20 lg:grid-cols-12">
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
            <ul className="mb-10 flex flex-wrap gap-2 lg:hidden" aria-label="Stack">
              {entry.stack.map((t) => (
                <li key={t} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-ink-muted">{t}</li>
              ))}
            </ul>
            {sections.map((s, i) => {
              const id = toId(s.label);
              const featured = i === 0;
              return (
                <section key={s.label} id={id} className={`scroll-mt-32 lg:scroll-mt-28 ${featured ? "j-panel j-light-edge mb-12 p-6 md:p-10" : "border-t border-line py-9 md:py-10"}`}>
                  <h2 className="j-chapter mb-4">
                    <b>{String(i + 1).padStart(2, "0")}</b>
                    <a href={`#${id}`} className="hover:text-ink">{s.label}</a>
                  </h2>
                  <p className={featured ? "text-[18px] leading-[1.65] text-ink md:text-[19px]" : "max-w-[68ch] text-[16px] leading-[1.75] text-ink-muted md:text-[17px]"}>{s.content}</p>
                </section>
              );
            })}

            {entry.review && (
              <figure className="j-panel j-light-edge my-12 p-6 md:p-10">
                <p className="j-eyebrow mb-4">Client review</p>
                <blockquote className="font-display text-[21px] font-medium leading-[1.35] tracking-[-0.01em] text-ink md:text-[26px]">“{entry.review.quote}”</blockquote>
                <figcaption className="mt-5 font-mono text-[12px] uppercase tracking-[0.06em] text-ink-muted">{entry.review.note}</figcaption>
              </figure>
            )}
            {entry.source === "upwork" && (
              <p className="mb-10 text-[15px] leading-relaxed text-ink-muted">
                This write-up follows the project entry in our Upwork portfolio, so it is shorter than the two detailed studies.{" "}
                <a href={upwork.profileUrl} target="_blank" rel="noopener noreferrer" className="j-link inline-block py-1">See the profile on Upwork</a>.
              </p>
            )}

            {service && (
              <Link href={`/services/${service.slug}`} className="group mt-4 flex items-center justify-between gap-6 rounded-2xl border border-line p-6 transition-colors hover:bg-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
                <span>
                  <span className="j-eyebrow">Want something like this?</span>
                  <span className="j-h3 mt-2 block text-ink">{service.name}</span>
                  <span className="mt-1 block font-mono text-[13px] text-ink-muted">from {money(service.from)}{service.per ? `/${service.per}` : ""} · {service.timeline}</span>
                </span>
                <span className="font-mono text-xl text-signal transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            )}

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
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

      {/* Next project */}
      <section className="j-night border-t border-line" aria-labelledby="next-project">
        <div className="j-wrap py-12 md:py-16">
          <p className="j-chapter mb-6"><b>Next</b> Project</p>
          <Link href={`/case-study/${next.slug}`} className="group grid items-baseline gap-4 md:grid-cols-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
            <span className="md:col-span-8">
              <span className="j-eyebrow">{next.industry}</span>
              <span id="next-project" className="j-h2 mt-3 block text-ink transition-colors group-hover:text-signal">{next.title}</span>
            </span>
            <span className="flex items-baseline gap-3 tabular-nums md:col-span-4 md:justify-end">
              {nextShift ? (
                <span className="font-display text-4xl font-bold tracking-[-0.03em] text-ink">{nextShift.prefix || ""}{nextShift.after}{nextShift.unit}</span>
              ) : (
                <span className="font-mono text-[13px] text-ink">{next.headline}</span>
              )}
              <span className="font-mono text-xl text-signal transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </span>
          </Link>
        </div>
      </section>

      <CallBanner />
      <Footer />
    </div>
  );
}

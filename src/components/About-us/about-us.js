import Link from "next/link";
import Footer from "../Footer";
import CallBanner from "../home/CallBanner";
import PageHero from "../ui-brand/PageHero";
import RelatedWork from "../ui-brand/RelatedWork";
import ClientReviews from "../ui-brand/ClientReviews";
import { ChapterHead } from "../ui-brand/Chapter";
import { promises } from "@/lib/offers";
import { upwork } from "@/lib/upwork";

// Every fact on this page comes from the owner's Upwork profile (src/lib/upwork.js) or from other pages of the site.
// The earlier statistics ("50+ projects", "99% satisfaction", "15+ industries", "24/7"), the 2020–2024 timeline
// and the placeholder-style quotes were removed: they could not be supported.
const facts = [
  { value: "Top Rated", label: "Badge on Upwork" },
  { value: `${upwork.fiveStarCount} of ${upwork.reviewCount}`, label: "Client reviews are five stars" },
  { value: String(upwork.foundedYear), label: "Year Jenisys was founded" },
  { value: "2", label: "Offices: Atlanta and Kolkata" },
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "AI/ML" },
  { name: "Supabase", category: "Database" },
  { name: "OpenAI API", category: "AI" },
  { name: "Stripe", category: "Payments" },
];

export default function AboutUs() {
  const p = upwork.person;
  return (
    <div className="j-night">
      <PageHero
        eyebrow="About"
        title="About Jenisys"
        lead="Jenisys is a software studio with offices in Atlanta and Kolkata. We build fixed-price AI automations for service businesses and first products for founders."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section aria-label="Facts" className="j-night border-b border-line">
        <dl className="j-wrap grid grid-cols-2 md:grid-cols-4">
          {facts.map((f, i) => (
            <div key={f.label} className={`border-line py-8 md:py-10 ${i % 2 ? "border-l pl-6" : ""} ${i > 1 ? "border-t md:border-t-0" : ""} ${i > 0 ? "md:border-l md:pl-8" : ""}`}>
              <dd className="font-display text-[34px] font-bold leading-none tracking-[-0.03em] text-ink md:text-5xl">{f.value}</dd>
              <dt className="mt-3 text-sm text-ink-muted">{f.label}</dt>
            </div>
          ))}
        </dl>
        <p className="j-wrap pb-6 text-[13px] text-ink-muted">
          From our <a href={upwork.profileUrl} target="_blank" rel="noopener noreferrer" className="j-link">Upwork profile</a>.
        </p>
      </section>

      <section className="j-paper j-section" aria-labelledby="engineer-title">
        <div className="j-wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="j-chapter mb-5"><b>01</b> The engineer</p>
            <h2 id="engineer-title" className="j-h2">{p.name}</h2>
            <p className="mt-3 font-mono text-[13px] uppercase tracking-[0.06em] text-ink-muted">{p.title}</p>
            <p className="mt-4 text-[15px] text-ink-muted">{p.education}</p>
            <a href={upwork.profileUrl} target="_blank" rel="noopener noreferrer" className="j-link mt-6 inline-flex items-center gap-2 py-2 text-[15px]">
              Upwork profile <span className="font-mono" aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <blockquote className="font-display text-[28px] font-medium leading-[1.2] tracking-[-0.02em] text-ink text-balance md:text-[36px]">“{p.lines[0]}”</blockquote>
            <p className="mt-6 max-w-[56ch] text-[18px] leading-relaxed text-ink-muted">“{p.lines[1]}”</p>
            <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.06em] text-ink-muted">From his Upwork overview</p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Core stack">
              {p.stack.map((t) => (
                <li key={t} className="rounded-md border border-line px-3 py-1.5 font-mono text-xs text-ink-muted">{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ClientReviews n="02" id="about-reviews" count={4} />

      <section className="j-paper j-section" aria-labelledby="how-we-work">
        <div className="j-wrap">
          <ChapterHead n="03" name="How we work" id="how-we-work" title="Agency quality, without agency surprises" />
          <ul className="mt-12 grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((x, i) => (
              <li key={x.title} className={`border-line px-1 py-8 sm:px-8 ${i > 0 ? "border-t sm:border-t-0 lg:border-l" : ""} ${i === 2 ? "sm:border-t" : ""} ${i === 3 ? "sm:border-t lg:border-t-0" : ""} lg:first:pl-0`}>
                <h3 className="j-h3">{x.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{x.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RelatedWork n="04" />

      <section className="j-paper j-section-tight" aria-labelledby="where-title">
        <div className="j-wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ChapterHead n="05" name="Where" id="where-title" title="Two offices, one team" className="!grid-cols-1" />
            <ul className="mt-8 border-y border-line">
              {upwork.offices.map((o) => (
                <li key={o} className="border-b border-line py-4 font-display text-xl text-ink last:border-b-0">{o}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="j-eyebrow mb-4">Tools we use most</p>
            <ul className="grid grid-cols-2 border-y border-line sm:grid-cols-3">
              {techStack.map((t) => (
                <li key={t.name} className="border-b border-line px-1 py-6 sm:px-5">
                  <p className="font-display text-lg font-semibold text-ink">{t.name}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.06em] text-ink-muted">{t.category}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] text-ink-muted">
              Full tool lists are on each <Link href="/services" className="j-link">service page</Link>.
            </p>
          </div>
        </div>
      </section>

      <CallBanner n="06" />
      <Footer />
    </div>
  );
}

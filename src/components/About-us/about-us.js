import Link from "next/link";
import Footer from "../Footer";
import CallBanner from "../home/CallBanner";
import PageHero from "../ui-brand/PageHero";
import RelatedWork from "../ui-brand/RelatedWork";
import { ChapterHead } from "../ui-brand/Chapter";
import { promises } from "@/lib/offers";

// About: only what can be shown or already stated elsewhere on the site.
// Removed pending owner confirmation (planning/06, section 3): project and satisfaction statistics,
// the 2020–2024 timeline, placeholder-style client quotes, and generic mission and vision text.
const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "AI/ML" },
  { name: "Flutter", category: "Mobile" },
  { name: "AWS", category: "Cloud" },
];

const offices = [
  { city: "Atlanta", country: "USA" },
  { city: "Kolkata", country: "India" },
];

export default function AboutUs() {
  return (
    <div className="j-night">
      <PageHero
        eyebrow="About"
        title="About Jenisys"
        lead="Jenisys is a software studio with offices in Atlanta and Kolkata. We build fixed-price AI automations for service businesses and first products for founders."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="j-paper j-section" aria-labelledby="how-we-work">
        <div className="j-wrap">
          <ChapterHead n="01" name="How we work" id="how-we-work" title="Agency quality, without agency surprises" />
          <ul className="mt-12 grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p, i) => (
              <li key={p.title} className={`border-line px-1 py-8 sm:px-8 ${i > 0 ? "border-t sm:border-t-0 lg:border-l" : ""} ${i === 2 ? "sm:border-t" : ""} ${i === 3 ? "sm:border-t lg:border-t-0" : ""} lg:first:pl-0`}>
                <h3 className="j-h3">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RelatedWork n="02" />

      <section className="j-paper j-section-tight" aria-labelledby="where-title">
        <div className="j-wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ChapterHead n="03" name="Where" id="where-title" title="Two offices, one team" className="!grid-cols-1" />
            <ul className="mt-8 border-y border-line">
              {offices.map((o) => (
                <li key={o.city} className="flex items-baseline justify-between border-b border-line py-4 last:border-b-0">
                  <span className="font-display text-xl text-ink">{o.city}</span>
                  <span className="font-mono text-[13px] text-ink-muted">{o.country}</span>
                </li>
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

      <CallBanner n="04" />
      <Footer />
    </div>
  );
}

import Footer from "../Footer";
import TalentPoolForm from "./TalentPoolForm";

const reasons = [
  { title: "Collaborative Teams", desc: "Small cross-functional teams focused on impact." },
  { title: "Flexible Locations", desc: "Remote-first with periodic in-person meetups." },
  { title: "Growth & Learning", desc: "Learning budget, mentorship, and conference support." },
  { title: "Transparent Communication", desc: "Open planning, regular feedback cycles." },
];

const perks = [
  "Competitive compensation",
  "Flexible hours & remote-friendly",
  "Health & wellness allowances",
  "Learning & conference budget",
  "Equity options for senior hires",
];

const quotes = [
  { text: "I joined Jenisys and immediately felt the difference — ownership and trust are real.", by: "S. Gupta, Senior Engineer" },
  { text: "Great mentorship and a learning-friendly environment.", by: "A. Roy, Product" },
];

const faqs = [
  { q: "How do I apply?", a: "If roles are posted, use the 'Apply' button on the job. When there are no roles, join the Talent Pool." },
  { q: "Do you hire remotely?", a: "Yes — we’re remote-first. Some roles may require overlap with IST timezones." },
  { q: "What’s the hiring process?", a: "Screen → Take-home/Pairing → Final interviews → Offer." },
  { q: "Do you sponsor visas?", a: "We evaluate case-by-case for senior hires." },
];

export default function CareerHome() {
  return (
    <div className="j-night">
      <header className="relative isolate overflow-hidden border-b border-line">
        <div aria-hidden="true" className="absolute inset-0 -z-10 j-grid-bg" />
        <div className="j-wrap grid gap-12 pt-16 pb-20 md:pt-24 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="j-eyebrow mb-5">Careers</p>
            <h1 className="j-h1 !text-[clamp(40px,5.4vw,68px)]">Careers at Jenisys</h1>
            <p className="j-lead mt-6">
              We build delightful software and meaningful products. Right now we don’t have active openings, but we’re always excited to meet talented people. Join our talent pool and be the first to hear about new roles.
            </p>
            <p className="mt-8 font-mono text-[13px] text-ink-muted">
              <span className="text-ink">Location:</span> Remote-friendly • Offices in India
            </p>
            <a href="#benefits" className="j-link mt-6 inline-flex items-center gap-2 text-[15px]">
              Why Jenisys <span className="font-mono" aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="lg:col-span-6">
            <div id="talent-pool" className="j-panel j-light-edge p-6 sm:p-8 scroll-mt-28">
              <h2 className="j-eyebrow mb-3">Open Roles</h2>
              <p className="font-display text-2xl font-semibold text-ink">No current openings</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                We’re not hiring at the moment — but we’re growing. If you&apos;d like to join Jenisys, share your details and resume and we’ll reach out when a suitable role appears.
              </p>
              <div className="mt-8 border-t border-line pt-8">
                <h3 className="j-h3 mb-1">Join Jenisys Talent Pool</h3>
                <p className="mb-6 text-[15px] text-ink-muted">Share your resume and we’ll reach out when we have fits.</p>
                <TalentPoolForm />
              </div>
              <p className="mt-8 font-mono text-xs text-ink-muted">Last updated: August 10, 2025</p>
            </div>
          </div>
        </div>
      </header>

      <section id="benefits" className="scroll-mt-24 py-20 md:py-28">
        <div className="j-wrap">
          <h2 className="j-h2">Why work at Jenisys?</h2>
          <p className="j-lead mt-5">
            We partner with startups and enterprises to build reliable products. Our team values ownership, learning, and a friendly environment where engineers and product minds collaborate closely.
          </p>
          <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <li key={r.title} className="bg-void p-7">
                <h3 className="font-display text-xl font-semibold tracking-[-0.015em] text-ink">{r.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{r.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-deep border-y border-line py-20 md:py-28">
        <div className="j-wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="j-eyebrow mb-6">Benefits &amp; Perks</h2>
            <ul className="border-t border-line">
              {perks.map((p) => (
                <li key={p} className="flex gap-4 border-b border-line py-4 text-[17px] text-ink">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="j-eyebrow mb-6">Our Culture</h2>
            <p className="font-display text-[26px] md:text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-ink text-balance">
              We celebrate curiosity and favour pragmatic engineering. Expect clear ownership, asynchronous communication, and a focus on shipping reliable, maintainable code.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {quotes.map((q) => (
                <figure key={q.by} className="border-l border-signal/60 pl-5">
                  <blockquote className="text-[16px] leading-relaxed text-ink">&ldquo;{q.text}&rdquo;</blockquote>
                  <figcaption className="mt-3 font-mono text-[13px] text-ink-muted">— {q.by}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="j-wrap max-w-3xl">
          <h2 className="j-h2">Frequently asked</h2>
          <div className="mt-10 border-t border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] text-ink">
                  {f.q}
                  <span className="font-mono text-xl text-signal transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="pb-6 text-[16px] leading-relaxed text-ink-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

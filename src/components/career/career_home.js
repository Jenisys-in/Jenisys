import Footer from "../Footer";
import TalentPoolForm from "./TalentPoolForm";
import PageHero from "../ui-brand/PageHero";

// Careers: honest about having no openings. Perks, culture claims and staff quotes were removed
// pending owner confirmation (planning/06, section 3).
const faqs = [
  { q: "How do I apply?", a: "If roles are posted, use the 'Apply' button on the job. When there are no roles, join the Talent Pool." },
  { q: "Do you hire remotely?", a: "Yes — we’re remote-first. Some roles may require overlap with IST timezones." },
  { q: "What’s the hiring process?", a: "Screen → Take-home/Pairing → Final interviews → Offer." },
  { q: "Do you sponsor visas?", a: "We evaluate case-by-case for senior hires." },
];

export default function CareerHome() {
  return (
    <div className="j-night">
      <PageHero
        eyebrow="Careers"
        title="Careers at Jenisys"
        lead="Right now we don’t have active openings, but we’re always excited to meet talented people. Join our talent pool and be the first to hear about new roles."
      />

      <section className="j-paper j-section" aria-labelledby="talent-title">
        <div className="j-wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="j-chapter mb-5"><b>01</b> Open roles</p>
            <h2 id="talent-title" className="j-h2">No current openings</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-muted">
              We’re not hiring at the moment, but we’re growing. Share your details and resume and we’ll reach out when a suitable role appears.
            </p>
          </div>
          <div id="talent-pool" className="j-panel j-light-edge scroll-mt-28 p-6 sm:p-8 lg:col-span-6 lg:col-start-7">
            <h3 className="j-h3 mb-1">Join the Jenisys Talent Pool</h3>
            <p className="mb-6 text-[15px] text-ink-muted">Share your resume and we’ll reach out when we have a fit.</p>
            <TalentPoolForm />
          </div>
        </div>
      </section>

      <section className="j-paper bg-deep j-section-tight border-y border-line" aria-labelledby="career-faq">
        <div className="j-wrap max-w-3xl">
          <h2 id="career-faq" className="j-h2">Frequently asked</h2>
          <div className="mt-10 border-t border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-line">
                <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-6 py-4 text-[17px] text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
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

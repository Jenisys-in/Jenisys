import { faqs as defaultFaqs } from "@/lib/offers";

// FAQ with FAQPage structured data. Pass service-specific items to avoid repeating the same questions on every page.
export default function Faq({ items = defaultFaqs, title = "Questions people ask before working with us", id = "faq", n = "05", ground = "paper", schema = true }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section id={id} className={`${ground === "paper" ? "j-paper bg-deep" : "j-night"} j-section scroll-mt-20`} aria-labelledby={`${id}-title`}>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />}
      <div className="j-wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="j-chapter mb-5"><b>{n}</b> Questions</p>
          <h2 id={`${id}-title`} className="j-h2">{title}</h2>
        </div>
        <div className="border-t border-line lg:col-span-8">
          {items.map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-xl text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
                {f.q}
                <span className="font-mono text-2xl text-signal transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-[68ch] pb-7 text-[17px] leading-relaxed text-ink-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

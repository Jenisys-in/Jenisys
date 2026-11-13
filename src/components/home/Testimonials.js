import { testimonials, testimonialsIntro } from "./data";

export default function Testimonials() {
  const [lead, ...others] = testimonials;
  const rest = [others[2], others[4]];
  return (
    <section className="j-night bg-deep border-y border-line py-24 md:py-32" aria-labelledby="testimonials-title">
      <div className="j-wrap">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <h2 id="testimonials-title" className="j-h2">{testimonialsIntro.title}</h2>
          </div>
          <p className="j-lead lg:col-span-6">{testimonialsIntro.lead}</p>
        </div>

        <figure className="j-panel j-light-edge mt-14 p-8 md:p-14">
          <blockquote className="font-display text-[26px] md:text-[36px] font-medium leading-[1.2] tracking-[-0.02em] text-ink text-balance">
            “{lead.quote}”
          </blockquote>
          <figcaption className="mt-8 font-mono text-sm text-ink-muted">
            <span className="text-ink">{lead.name}</span> · {lead.title}
          </figcaption>
        </figure>

        <ul className="mt-6 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-2">
          {rest.map((t, i) => (
            <li key={t.name} className={`flex flex-col bg-deep p-7 md:p-8 `}>
              <blockquote className="text-[16px] leading-relaxed text-ink">“{t.quote}”</blockquote>
              <p className="mt-auto pt-6 font-mono text-[13px] text-ink-muted">
                <span className="text-ink">{t.name}</span> · {t.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import Link from "next/link";
import { services, industries, servicesIntro } from "./data";

export default function Services() {
  return (
    <section className="j-night bg-deep border-y border-line py-24 md:py-32" aria-labelledby="services-title">
      <div className="j-wrap">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="j-eyebrow mb-4">{servicesIntro.eyebrow}</p>
            <h2 id="services-title" className="j-h2">Services Offered</h2>
          </div>
          <p className="j-lead lg:col-span-6">{servicesIntro.lead}</p>
        </div>

        {/* Index-style list: hover lights the row; the whole row is the link */}
        <ul className="mt-14 border-t border-line">
          {services.map((s, i) => (
            <li key={s.link} className="border-b border-line">
              <Link
                href={s.link}
                className="group grid grid-cols-[2.5rem_minmax(0,1fr)_1.5rem] gap-x-4 gap-y-2 py-7 md:grid-cols-[4rem_minmax(0,20rem)_minmax(0,1fr)_2rem] md:gap-x-8 md:py-8 focus:outline-none focus-visible:bg-raised"
              >
                <span className="col-start-1 row-start-1 pt-1.5 font-mono text-sm text-ink-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span className="col-start-2 row-start-1 font-display text-2xl md:text-[28px] font-semibold leading-tight tracking-[-0.02em] text-ink transition-colors duration-200 group-hover:text-signal">
                  {s.title}
                </span>
                <span className="col-start-2 row-start-2 md:col-start-3 md:row-start-1 max-w-[56ch] text-[15px] leading-relaxed text-ink-muted md:pt-1.5">{s.description}</span>
                <span className="col-start-3 row-start-1 md:col-start-4 pt-1 text-right font-mono text-xl text-ink-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-signal" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-24">
          <h3 className="j-eyebrow mb-8">Industries We Serve</h3>
          <ul className="grid gap-px overflow-hidden rounded-none border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <li key={ind.title} className="bg-deep p-7 transition-colors duration-200 hover:bg-raised">
                <p className="font-display text-xl font-semibold tracking-[-0.015em] text-ink">{ind.title}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{ind.description}</p>
              </li>
            ))}
          </ul>
          <Link href="/industries" className="j-link mt-8 inline-flex items-center gap-2 text-[15px]">
            Industries We Serve <span className="font-mono" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

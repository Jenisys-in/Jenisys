import Link from "next/link";
import { offers, money } from "@/lib/offers";

export default function PricingPreview() {
  return (
    <section className="j-night py-24 md:py-32" aria-labelledby="price-title">
      <div className="j-wrap">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="j-eyebrow mb-4">Pricing</p>
            <h2 id="price-title" className="j-h2">Clear prices, before we write a line of code</h2>
          </div>
          <p className="j-lead lg:col-span-5">Fixed quotes for every project. Something bigger or unusual? We’ll price it to fit.</p>
        </div>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((o) => (
            <li key={o.slug} className="bg-void">
              <Link href={`/services/${o.slug}`} className="group flex h-full flex-col p-7 transition-colors duration-200 hover:bg-deep">
                <p className="j-eyebrow">{o.audience}</p>
                <h3 className="j-h3 mt-3">{o.name}</h3>
                <p className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-sm text-ink-muted">from</span>
                  <span className="font-display text-4xl font-bold tracking-[-0.04em] text-ink tabular-nums">{money(o.from)}</span>
                  {o.per && <span className="text-sm text-ink-muted">/{o.per}</span>}
                </p>
                <p className="mt-1 font-mono text-[12px] text-ink-muted">{o.timeline}</p>
                <span className="mt-auto pt-8 inline-flex items-center gap-2 text-[15px] text-signal">
                  Details <span className="font-mono transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/pricing" className="j-btn j-btn-secondary mt-10">
          See full pricing <span className="j-arrow">→</span>
        </Link>
      </div>
    </section>
  );
}

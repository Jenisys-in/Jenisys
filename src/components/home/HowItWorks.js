import Link from "next/link";
import { LineStraight } from "../ui-brand/Line";
import { ChapterHead } from "../ui-brand/Chapter";
import { offers, money } from "@/lib/offers";

const steps = [
  { n: "01", title: "Free call", body: "30 minutes to understand your goal. No sales pitch.", meta: "Free" },
  { n: "02", title: "Discovery Sprint", body: "Scope, prototype and a fixed quote in 5 working days.", meta: "$499, credited" },
  { n: "03", title: "Build", body: "Working software every week, demoed to you live.", meta: "1–10 weeks" },
  { n: "04", title: "Launch and support", body: "We ship, fix anything that comes up, and stay on if you want us.", meta: "Free fix period" },
];

// Chapter 04 — the process on the Line, with the prices that go with it.
export default function HowItWorks({ withPrices = false, ground = "paper", n = "04" }) {
  return (
    <section className={`${ground === "paper" ? "j-paper" : "j-night"} j-section`} aria-labelledby="how-title">
      <div className="j-wrap">
        <ChapterHead
          n={n}
          name="How it works"
          id="how-title"
          title="From first call to launch, with no surprises"
          lead="You know the price, the scope and the date before we write a line of code."
          className="j-rise"
        />

        <div className="relative mt-14 md:mt-20">
          <LineStraight className="absolute -top-3 left-0 hidden h-6 md:block" />
          <ol className="grid gap-0 md:grid-cols-4 md:gap-8" aria-label="Steps">
            {steps.map((s) => (
              <li key={s.n} className="relative border-l border-line py-5 pl-6 md:border-l-0 md:pl-0 md:pt-10">
                <span aria-hidden="true" className="absolute -left-[5px] top-6 h-2.5 w-2.5 rounded-full bg-signal md:left-0 md:top-[-1px]" />
                <span className="font-mono text-[13px] text-signal">{s.n}</span>
                <h3 className="j-h3 mt-2">{s.title}</h3>
                <p className="mt-2 max-w-[28ch] text-[15px] leading-relaxed text-ink-muted">{s.body}</p>
                <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.06em] text-ink">{s.meta}</p>
              </li>
            ))}
          </ol>
        </div>

        {withPrices ? (
          <div className="mt-20 md:mt-28">
            <p className="j-eyebrow mb-6">What it costs</p>
            <ul className="j-divided border-y border-line">
              {offers.map((o) => (
                <li key={o.slug}>
                  <Link href={`/services/${o.slug}`} className="group grid items-baseline gap-x-8 gap-y-1 py-6 transition-colors hover:bg-deep md:grid-cols-12 md:px-4 md:py-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
                    <span className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink md:col-span-4">{o.name}</span>
                    <span className="text-[15px] text-ink-muted md:col-span-4">{o.audience} · {o.timeline}</span>
                    <span className="flex items-baseline gap-1.5 md:col-span-3 md:justify-end">
                      <span className="text-sm text-ink-muted">from</span>
                      <span className="font-display text-3xl font-bold tracking-[-0.03em] text-ink tabular-nums">{money(o.from)}</span>
                      {o.per && <span className="text-sm text-ink-muted">/{o.per}</span>}
                    </span>
                    <span className="hidden font-mono text-signal transition-transform group-hover:translate-x-1 md:col-span-1 md:block md:text-right" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] text-ink-muted">
              Something bigger or unusual? We’ll price it to fit. <Link href="/pricing" className="j-link">See full pricing</Link>
            </p>
          </div>
        ) : (
          <Link href="/services/discovery-sprint" className="j-link mt-12 inline-flex items-center gap-2 text-[15px]">
            What you get from a Discovery Sprint <span className="font-mono" aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </section>
  );
}

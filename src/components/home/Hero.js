import Link from "next/link";
import RibbonMount from "./RibbonMount";
import Cta from "../ui-brand/Cta";
import { RibbonStill } from "../ui-brand/Line";
import { hero } from "./data";

// Chapter 0: the offer, stated plainly, with one real result beneath it.
export default function Hero() {
  return (
    <section className="j-night relative isolate overflow-hidden" aria-labelledby="hero-title">
      {/* Static ribbon: the whole picture on phones, low-power devices and without WebGL */}
      <RibbonStill className="j-hero-still absolute inset-0 -z-20 h-full w-full opacity-60 md:opacity-90" />
      <div aria-hidden="true" className="absolute inset-0 -z-20 j-grid-bg opacity-60" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 hidden md:block">
        <RibbonMount />
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-void" />

      <div className="j-wrap pt-14 pb-20 md:pt-24 md:pb-32 lg:pt-28 lg:pb-36">
        <div className="max-w-[52rem]">
          <p className="j-eyebrow mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-gradient-to-r from-navy via-volt to-signal" aria-hidden="true" />
            AI automation · MVP development
          </p>
          <h1 id="hero-title" className="j-display text-ink">{hero.title}</h1>
          <p className="j-lead mt-7 max-w-[34rem]">{hero.lead}</p>
          <Cta className="mt-10" source="hero" />

          <Link
            href="/case-study/nsw-sopa-adjudication-platform"
            className="group mt-14 inline-flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-line pt-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
          >
            <span className="font-mono text-sm text-ink-muted">Claims processing, NSW government registry</span>
            <span className="flex items-baseline gap-3 tabular-nums">
              <s className="font-mono text-lg text-ink-muted">18 days</s>
              <span className="font-mono text-signal" aria-hidden="true">→</span>
              <span className="font-display text-3xl font-bold tracking-[-0.03em] text-ink">6 days</span>
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.06em] text-signal opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">Read the case →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

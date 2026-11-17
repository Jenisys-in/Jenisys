import Link from "next/link";
import { Clock3, CircleDollarSign, Route, Asterisk } from "lucide-react";
import RibbonMount from "./RibbonMount";
import CalendarButton from "./CalendarButton";
import MotionToggle from "./MotionToggle";
import { RibbonStill } from "../ui-brand/Line";
import { hero } from "./data";
import { upwork } from "@/lib/upwork";

// What the free call gives you, along the bottom of the glass card.
const gives = [
  { Icon: Clock3, label: "30-minute call" },
  { Icon: CircleDollarSign, label: "Price range discussion" },
  { Icon: Route, label: "Consultation for next steps" },
];

// Chapter 0: the offer, stated plainly. Headline first, then the one action in a fluted glass card
// that sits over a beam of the logo's light.
export default function Hero() {
  const { card } = hero;
  return (
    <section className="j-night relative isolate overflow-hidden" aria-labelledby="hero-title">
      {/* Static ribbon: shown until the live one is ready, and kept on low-power devices or without WebGL */}
      <RibbonStill className="j-hero-still absolute inset-0 -z-20 h-full w-full opacity-60 md:opacity-90" />
      <div aria-hidden="true" className="absolute inset-0 -z-20 j-grid-bg opacity-60" />
      <div aria-hidden="true" className="j-hero-ribbon absolute inset-0 -z-10">
        <RibbonMount />
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-void" />

      <div className="j-wrap pt-12 pb-10 md:pt-20 md:pb-14 lg:pt-20 lg:pb-14">
        <p className="j-eyebrow mb-6 flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-gradient-to-r from-navy via-volt to-signal" aria-hidden="true" />
          AI automation · MVP development
        </p>
        <div className="grid items-end gap-6 lg:grid-cols-12 lg:gap-10">
          <h1 id="hero-title" className="lg:col-span-8">
            <span className="j-hero-kicker">{hero.titleTop}</span>{" "}
            <span className="relative block">
              <span className="j-hero-shine">{hero.titleEffect}</span>
              {/* Moving glint: drawn from data-text by CSS, so the words exist once in the page */}
              <span className="j-glint" aria-hidden="true">
                <span className="j-glint-text j-hero-shine-type" data-text={hero.titleEffect} />
              </span>
            </span>
          </h1>
          <p className="j-lead max-w-[34rem] lg:col-span-4 lg:pb-2">{hero.lead}</p>
        </div>

        {/* Glass call card over a beam of light */}
        <div className="relative mt-10 md:mt-12">
          <div aria-hidden="true" className="j-beam" />
          <div className="j-prism">
            <div className="flex items-center justify-between gap-4">
              <span className="j-pill">
                <span className="h-1.5 w-1.5 rounded-full bg-gain" aria-hidden="true" />
                {card.tag}
              </span>
              <Asterisk size={22} strokeWidth={1.5} className="text-signal" aria-hidden="true" />
            </div>

            <div className="mt-5 grid items-end gap-6 md:mt-6 md:grid-cols-12 md:gap-8">
              <p className="j-prism-statement md:col-span-7">
                <span className="font-light text-ink/80">{card.statementLight}</span>{" "}
                <span className="font-bold text-ink">{card.statementBold}</span>
              </p>
              <div className="md:col-span-5">
                <CalendarButton className="j-btn j-btn-primary w-full !min-h-[58px] !rounded-2xl !text-[16px] !font-semibold sm:!text-[17px]" source="hero">
                  {hero.cta} <span className="j-arrow" aria-hidden="true">→</span>
                </CalendarButton>
                <p className="mt-3 text-center font-mono text-[12px] uppercase tracking-[0.1em] text-ink-muted">
                  <span className="text-signal" aria-hidden="true">→ </span>{card.note}
                </p>
              </div>
            </div>

            <ul className="mt-6 grid grid-cols-3 border-t border-white/15 pt-4 md:mt-7 md:pt-5">
              {gives.map(({ Icon, label }, i) => (
                <li
                  key={label}
                  className={`flex flex-col items-center gap-2 px-1 text-center sm:flex-row sm:justify-center sm:gap-3 sm:text-left ${i > 0 ? "border-l border-white/15" : ""}`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-signal/35 bg-signal/10 text-signal">
                    <Icon size={17} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span className="text-[12.5px] font-medium uppercase leading-snug tracking-[0.06em] text-ink sm:text-[13px]">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4 md:mt-10">
          <Link
            href="/case-study/nsw-sopa-adjudication-platform"
            className="group inline-flex flex-wrap items-baseline gap-x-4 gap-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
          >
            <span className="font-mono text-sm text-ink-muted">Claims processing, NSW government registry</span>
            <span className="flex items-baseline gap-3 tabular-nums">
              <s className="font-mono text-lg text-ink-muted">18 days</s>
              <span className="font-mono text-signal" aria-hidden="true">→</span>
              <span className="font-display text-3xl font-bold tracking-[-0.03em] text-ink">6 days</span>
            </span>
          </Link>
          <a href="#reviews" className="inline-flex items-center gap-2 py-1 font-mono text-sm text-ink-muted transition-colors hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
            <span className="h-1.5 w-1.5 rounded-full bg-gain" aria-hidden="true" />
            Top Rated on Upwork · {upwork.fiveStarCount} of {upwork.reviewCount} reviews five stars
          </a>
          <MotionToggle className="sm:ml-auto" />
        </div>
      </div>
    </section>
  );
}

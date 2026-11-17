import Link from "next/link";
import { Clock3, CircleDollarSign, Route } from "lucide-react";
import RibbonMount from "./RibbonMount";
import CalendarButton from "./CalendarButton";
import { RibbonStill } from "../ui-brand/Line";
import { hero } from "./data";
import { upwork } from "@/lib/upwork";

// What the free call gives you, shown inside the glass panel.
const gives = [
  { Icon: Clock3, label: "30 mins" },
  { Icon: CircleDollarSign, label: "Price range discussion" },
  { Icon: Route, label: "Consultation for next steps" },
];

// Chapter 0: the offer, stated plainly. Headline on the left; the one action, in a glass panel, on the right.
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

      <div className="j-wrap pt-14 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="j-eyebrow mb-6 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-gradient-to-r from-navy via-volt to-signal" aria-hidden="true" />
              AI automation · MVP development
            </p>
            <h1 id="hero-title">
              <span className="j-hero-kicker">{hero.titleTop}</span>{" "}
              <span className="j-hero-shine">{hero.titleEffect}</span>
            </h1>
            <p className="j-lead mt-7 max-w-[34rem]">{hero.lead}</p>
          </div>

          {/* Glass call panel */}
          <div className="relative lg:col-span-5">
            <div aria-hidden="true" className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] opacity-80 blur-2xl" style={{ background: "radial-gradient(closest-side, rgba(76,141,255,.35), rgba(20,226,249,.12) 60%, transparent)" }} />
            <div className="j-glass w-full max-w-[34rem] p-4 sm:p-5 lg:ml-auto lg:max-w-[28rem]">
              <CalendarButton className="j-btn j-btn-primary w-full !min-h-[58px] !rounded-2xl !text-[16px] !font-semibold sm:!text-[17px]" source="hero">
                {hero.cta} <span className="j-arrow" aria-hidden="true">→</span>
              </CalendarButton>
              <ul className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-center">
                {gives.map(({ Icon, label }, i) => (
                  <li key={label} className={`flex flex-col items-center gap-2.5 px-1 ${i > 0 ? "border-l border-white/10" : ""}`}>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-signal/30 bg-signal/10 text-signal shadow-[0_0_24px_-6px_rgba(20,226,249,0.55)] sm:h-11 sm:w-11">
                      <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="text-[13px] font-medium leading-snug text-ink sm:text-sm">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-baseline gap-x-10 gap-y-5 border-t border-line pt-6 md:mt-16">
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
        </div>
      </div>
    </section>
  );
}

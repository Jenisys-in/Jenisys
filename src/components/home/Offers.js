import Link from "next/link";
import { Check } from "lucide-react";
import AutomationFlow from "../visuals/AutomationFlow";
import MvpDevices from "../visuals/MvpDevices";
import { offerBySlug, money } from "@/lib/offers";
import { ChapterHead } from "../ui-brand/Chapter";

// Visuals are dark artefacts: they keep Night inside the Paper chapter.
function OfferRow({ offer, visual, flip }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <div className={flip ? "lg:order-2" : ""}>
        <p className="j-eyebrow mb-4">{offer.audience}</p>
        <h3 className="j-h2">{offer.name}</h3>
        <p className="j-lead mt-4">{offer.short}</p>
        <ul className="mt-8 flex flex-col gap-3">
          {offer.outcomes.map((o) => (
            <li key={o} className="flex gap-3 text-[17px] text-ink">
              <Check size={20} className="mt-0.5 shrink-0 text-signal" aria-hidden="true" />
              {o}
            </li>
          ))}
        </ul>
        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link href={`/services/${offer.slug}`} className="j-btn j-btn-secondary">
            Explore {offer.name} <span className="j-arrow" aria-hidden="true">→</span>
          </Link>
          <p className="font-mono text-sm text-ink-muted">
            from <span className="text-ink">{money(offer.from)}</span> · {offer.timeline}
          </p>
        </div>
      </div>
      <div className={flip ? "lg:order-1" : ""}>
        <div className="j-night overflow-hidden rounded-3xl border border-line px-4 py-8 md:px-8 md:py-12">{visual}</div>
      </div>
    </div>
  );
}

// Chapter 02 — two ways in. Each door leads to its own offer, proof and price.
export default function Offers() {
  return (
    <section className="j-paper j-section overflow-x-clip" aria-labelledby="offers-title">
      <div className="j-wrap">
        <ChapterHead n="02" name="Two ways in" id="offers-title" title="Two ways we help businesses grow" className="j-rise" />
        <div className="mt-16 flex flex-col gap-24 md:gap-32">
          <OfferRow offer={offerBySlug["ai-automation"]} visual={<AutomationFlow />} />
          <OfferRow offer={offerBySlug["mvp-development"]} visual={<MvpDevices />} flip />
        </div>
      </div>
    </section>
  );
}

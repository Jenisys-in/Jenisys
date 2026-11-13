import Link from "next/link";
import { Check } from "lucide-react";
import AutomationFlow from "../visuals/AutomationFlow";
import MvpDevices from "../visuals/MvpDevices";
import { offerBySlug, money } from "@/lib/offers";

function OfferRow({ offer, visual, flip }) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
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
            Explore {offer.name} <span className="j-arrow">→</span>
          </Link>
          <p className="font-mono text-sm text-ink-muted">
            from <span className="text-ink">{money(offer.from)}</span> · {offer.timeline}
          </p>
        </div>
      </div>
      <div className={flip ? "lg:order-1" : ""}>{visual}</div>
    </div>
  );
}

export default function Offers() {
  return (
    <section className="j-night py-24 md:py-32" aria-labelledby="offers-title">
      <div className="j-wrap">
        <p className="j-eyebrow mb-4">What we build</p>
        <h2 id="offers-title" className="j-h2 max-w-3xl">Two ways we help businesses grow</h2>
        <div className="mt-16 flex flex-col gap-28">
          <OfferRow offer={offerBySlug["ai-automation"]} visual={<AutomationFlow />} />
          <OfferRow offer={offerBySlug["mvp-development"]} visual={<MvpDevices />} flip />
        </div>
      </div>
    </section>
  );
}

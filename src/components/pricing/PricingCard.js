import Link from "next/link";
import { Check } from "lucide-react";
import { money } from "@/lib/offers";

export default function PricingCard({ tier, offerName = "", href = "/contact" }) {
  return (
    <div className={`relative flex h-full flex-col rounded-3xl p-7 ${tier.featured ? "j-panel j-light-edge j-glow-signal" : "border border-line bg-deep"}`}>
      {tier.featured && (
        <span className="absolute -top-3 left-7 rounded-full bg-signal px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-on-flare">Most popular</span>
      )}
      {offerName && <p className="j-eyebrow">{offerName}</p>}
      <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.02em] text-ink">{tier.name}</h3>
      <p className="mt-4 flex items-baseline gap-1.5">
        <span className="text-sm text-ink-muted">from</span>
        <span className="font-display text-5xl font-bold tracking-[-0.04em] text-ink tabular-nums">{money(tier.price)}</span>
        {tier.per && <span className="text-sm text-ink-muted">/{tier.per}</span>}
      </p>
      <p className="mt-2 font-mono text-[12px] text-ink-muted">{tier.note}</p>
      <ul className="mt-6 flex flex-col gap-2.5 border-t border-line pt-6">
        {tier.features.map((f) => (
          <li key={f} className="flex gap-2.5 text-[15px] text-ink">
            <Check size={16} className="mt-1 shrink-0 text-signal" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>
      <Link href={href} className={`j-btn mt-8 w-full ${tier.featured ? "j-btn-primary" : "j-btn-secondary"}`}>
        Get started <span className="j-arrow">→</span>
      </Link>
    </div>
  );
}

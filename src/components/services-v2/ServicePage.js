import Link from "next/link";
import { Check } from "lucide-react";
import Footer from "../Footer";
import CalendarButton from "../home/CalendarButton";
import HowItWorks from "../home/HowItWorks";
import Outcomes from "../home/Outcomes";
import Faq from "../home/Faq";
import CallBanner from "../home/CallBanner";
import PricingCard from "../pricing/PricingCard";
import AutomationFlow from "../visuals/AutomationFlow";
import MvpDevices from "../visuals/MvpDevices";
import DiscoveryVisual from "../visuals/DiscoveryVisual";
import SupportVisual from "../visuals/SupportVisual";
import { offerBySlug, pricing, faqs, money } from "@/lib/offers";

const visuals = {
  "ai-automation": AutomationFlow,
  "mvp-development": MvpDevices,
  "discovery-sprint": DiscoveryVisual,
  support: SupportVisual,
};

export default function ServicePage({ slug }) {
  const offer = offerBySlug[slug];
  const Visual = visuals[slug];
  const tiers = pricing.find((p) => p.offer === slug)?.tiers || [];

  return (
    <div className="j-night">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-line">
        <div aria-hidden="true" className="absolute inset-0 -z-10 j-grid-bg" />
        <div className="j-wrap grid items-center gap-12 pt-14 pb-20 md:pt-20 lg:grid-cols-2 lg:pb-24">
          <div>
            <nav aria-label="Breadcrumb" className="mb-8 font-mono text-[13px] text-ink-muted">
              <Link href="/services" className="hover:text-ink">Services</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-ink">{offer.name}</span>
            </nav>
            <p className="j-eyebrow mb-5">{offer.audience}</p>
            <h1 className="j-h1 !text-[clamp(40px,5.4vw,72px)]">{offer.name}</h1>
            <p className="j-lead mt-6">{offer.short}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CalendarButton className="j-btn j-btn-primary">
                Book a free call <span className="j-arrow">→</span>
              </CalendarButton>
              <a href="#pricing" className="j-btn j-btn-secondary">See pricing</a>
            </div>
            <p className="mt-6 font-mono text-[13px] text-ink-muted">
              from <span className="text-ink">{money(offer.from)}</span>
              {offer.per ? `/${offer.per}` : ""} · {offer.timeline}
            </p>
          </div>
          <div>{Visual && <Visual />}</div>
        </div>
      </section>

      {/* Problem → outcome */}
      <section className="py-20 md:py-28">
        <div className="j-wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="j-eyebrow mb-4">Who it’s for</p>
            <p className="font-display text-[26px] md:text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-ink text-balance">{offer.who}</p>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-muted">{offer.problem}</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="j-eyebrow mb-6">What you get</p>
            <ul className="j-scene flex flex-col gap-4">
              {offer.outcomes.map((o, i) => (
                <li key={o} className="j-card3d flex gap-4 p-5" style={{ transform: `rotateX(6deg) translateX(${i * 12}px)` }}>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-navy via-volt to-signal text-white">
                    <Check size={18} />
                  </span>
                  <span className="pt-1.5 text-[17px] text-ink">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="bg-deep border-y border-line py-20 md:py-28">
        <div className="j-wrap">
          <h2 className="j-h2 max-w-3xl">{slug === "discovery-sprint" ? "How the week works" : slug === "support" ? "What’s included every month" : "What we can build for you"}</h2>
          <ul className={`mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 ${offer.examples.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
            {offer.examples.map((e) => (
              <li key={e.title} className="bg-deep p-7">
                <h3 className="font-display text-xl font-semibold tracking-[-0.015em] text-ink">{e.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{e.body}</p>
              </li>
            ))}
          </ul>
          {offer.stack.length > 0 && (
            <ul className="mt-10 flex flex-wrap gap-2" aria-label="Tools we use">
              {offer.stack.map((t) => (
                <li key={t} className="rounded-md border border-line px-3 py-1.5 font-mono text-xs text-ink-muted">{t}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-24 py-20 md:py-28">
        <div className="j-wrap">
          <p className="j-eyebrow mb-4">Pricing</p>
          <h2 className="j-h2">Fixed price, agreed up front</h2>
          <div className={`mt-12 grid gap-6 ${tiers.length > 1 ? "md:grid-cols-2" : "max-w-md"}`}>
            {tiers.map((t) => (
              <PricingCard key={t.name} tier={t} />
            ))}
          </div>
          <p className="mt-8 text-[15px] text-ink-muted">
            Need something bigger or different? <Link href="/contact" className="j-link">Ask for a custom quote</Link>. See <Link href="/pricing" className="j-link">all pricing</Link>.
          </p>
        </div>
      </section>

      <Outcomes />
      {slug !== "discovery-sprint" && <HowItWorks />}
      <Faq items={faqs} title={`Questions about ${offer.name}`} />
      <CallBanner />
      <Footer />
    </div>
  );
}

import Link from "next/link";
import { Check } from "lucide-react";
import Footer from "../Footer";
import HowItWorks from "../home/HowItWorks";
import Faq from "../home/Faq";
import CallBanner from "../home/CallBanner";
import PricingCard from "../pricing/PricingCard";
import RelatedWork from "../ui-brand/RelatedWork";
import Cta from "../ui-brand/Cta";
import { ChapterHead } from "../ui-brand/Chapter";
import AutomationFlow from "../visuals/AutomationFlow";
import MvpDevices from "../visuals/MvpDevices";
import DiscoveryVisual from "../visuals/DiscoveryVisual";
import SupportVisual from "../visuals/SupportVisual";
import { offerBySlug, pricing, offerFaqs, offerHeadlines, money } from "@/lib/offers";

const visuals = {
  "ai-automation": AutomationFlow,
  "mvp-development": MvpDevices,
  "discovery-sprint": DiscoveryVisual,
  support: SupportVisual,
};

// Service template: promise → who it is for → what we build → fixed price → related work → process → questions → call.
export default function ServicePage({ slug }) {
  const offer = offerBySlug[slug];
  const Visual = visuals[slug];
  const tiers = pricing.find((p) => p.offer === slug)?.tiers || [];
  const hasProcess = slug !== "discovery-sprint";
  const examplesTitle = slug === "discovery-sprint" ? "How the week works" : slug === "support" ? "What’s included every month" : "What we can build for you";

  return (
    <div className="j-night">
      <header className="relative isolate overflow-hidden border-b border-line">
        <div aria-hidden="true" className="absolute inset-0 -z-10 j-grid-bg opacity-50" />
        <div className="j-wrap grid items-center gap-12 pt-12 pb-16 md:pt-16 lg:grid-cols-2 lg:pb-24">
          <div>
            <nav aria-label="Breadcrumb" className="mb-8 font-mono text-[13px] text-ink-muted">
              <Link href="/services" className="hover:text-ink">Services</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-ink">{offer.name}</span>
            </nav>
            <p className="j-eyebrow mb-5">{offer.name} · {offer.audience}</p>
            <h1 className="j-h1 !text-[clamp(36px,4.8vw,64px)]">{offerHeadlines[slug]}</h1>
            <p className="j-lead mt-6">{offer.who}</p>
            <Cta className="mt-9" note={false} source={`service-${slug}`} />
            <p className="mt-6 font-mono text-[13px] text-ink-muted">
              from <span className="text-ink">{money(offer.from)}</span>
              {offer.per ? `/${offer.per}` : ""} · {offer.timeline}
            </p>
          </div>
          <div>{Visual && <Visual />}</div>
        </div>
      </header>

      {/* Problem → outcome */}
      <section className="j-paper j-section" aria-labelledby="outcome-title">
        <div className="j-wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="j-chapter mb-5"><b>01</b> The problem</p>
            <h2 id="outcome-title" className="font-display text-[26px] font-medium leading-[1.2] tracking-[-0.02em] text-ink text-balance md:text-[32px]">{offer.problem}</h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="j-eyebrow mb-4">What you get</p>
            <ul className="j-divided border-y border-line">
              {offer.outcomes.map((o) => (
                <li key={o} className="flex gap-4 py-5 text-[18px] text-ink">
                  <Check size={20} className="mt-1 shrink-0 text-signal" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="j-paper bg-deep j-section-tight border-y border-line" aria-labelledby="examples-title">
        <div className="j-wrap">
          <ChapterHead n="02" name={slug === "discovery-sprint" ? "The week" : "Examples"} id="examples-title" title={examplesTitle} className="mb-12" />
          <ul className={`j-divided border-y border-line lg:divide-y-0 lg:grid ${offer.examples.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
            {offer.examples.map((e, i) => (
              <li key={e.title} className={`py-7 lg:px-7 lg:first:pl-0 lg:last:pr-0 ${i > 0 ? "lg:border-l lg:border-line" : ""}`}>
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
      <section id="pricing" className="j-paper j-section scroll-mt-20" aria-labelledby="price-title">
        <div className="j-wrap">
          <ChapterHead n="03" name="Pricing" id="price-title" title="Fixed price, agreed up front" />
          <div className={`mt-12 grid gap-6 ${tiers.length > 1 ? "md:grid-cols-2" : "max-w-md"}`}>
            {tiers.map((t) => (
              <PricingCard key={t.name} tier={t} offerSlug={slug} />
            ))}
          </div>
          <p className="mt-8 text-[15px] text-ink-muted">
            Need something bigger or different? <Link href="/contact" className="j-link">Ask for a custom quote</Link>. See <Link href="/pricing" className="j-link">all pricing</Link>.
          </p>
        </div>
      </section>

      <RelatedWork n="04" />
      {hasProcess && <HowItWorks n="05" />}
      <Faq items={offerFaqs[slug]} title={`Questions about ${offer.name}`} id={`faq-${slug}`} n={hasProcess ? "06" : "05"} ground="paper" />
      <CallBanner n={hasProcess ? "07" : "06"} />
      <Footer />
    </div>
  );
}

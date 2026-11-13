import Link from "next/link";
import Footer from "@/components/Footer";
import PricingCard from "@/components/pricing/PricingCard";
import Faq from "@/components/home/Faq";
import CallBanner from "@/components/home/CallBanner";
import Promises from "@/components/home/Promises";
import { offerBySlug, pricing, faqs } from "@/lib/offers";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Pricing: Fixed-Price AI Automation and MVP Development | Jenisys",
  description:
    "Transparent, fixed pricing. Discovery Sprint $499, AI automation from $1,500, MVP development from $7,500, support plans from $499 a month. Custom quotes for larger projects.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <div className="j-night">
      <section className="relative isolate overflow-hidden border-b border-line">
        <div aria-hidden="true" className="absolute inset-0 -z-10 j-grid-bg" />
        <div className="j-wrap pt-16 pb-16 md:pt-24">
          <p className="j-eyebrow mb-5">Pricing</p>
          <h1 className="j-h1 max-w-4xl">Clear prices. Fixed quotes. No surprises.</h1>
          <p className="j-lead mt-6">Every project gets a fixed quote before we start. These are our starting prices; bigger or unusual projects get a custom quote.</p>
        </div>
      </section>

      {pricing.map((group) => {
        const offer = offerBySlug[group.offer];
        return (
          <section key={group.offer} className="border-b border-line py-16 md:py-20">
            <div className="j-wrap grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="j-eyebrow mb-3">{offer.audience}</p>
                <h2 className="j-h2">{offer.name}</h2>
                <p className="mt-4 text-[17px] leading-relaxed text-ink-muted">{offer.short}</p>
                <Link href={`/services/${offer.slug}`} className="j-link mt-6 inline-flex items-center gap-2 text-[15px]">
                  How it works <span className="font-mono" aria-hidden="true">→</span>
                </Link>
              </div>
              <div className={`lg:col-span-8 grid gap-6 ${group.tiers.length > 1 ? "md:grid-cols-2" : "md:max-w-md"}`}>
                {group.tiers.map((t) => (
                  <PricingCard key={t.name} tier={t} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-16 md:py-20">
        <div className="j-wrap">
          <div className="j-panel j-light-edge grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <h2 className="j-h2">Custom projects</h2>
              <p className="j-lead mt-4">Platforms, integrations or something that doesn’t fit a package? Tell us what you need and we’ll send a fixed quote, usually within two business days.</p>
            </div>
            <Link href="/contact" className="j-btn j-btn-primary">
              Get a custom quote <span className="j-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Promises />
      <Faq items={faqs} title="Pricing questions" />
      <CallBanner />
      <Footer />
    </div>
  );
}

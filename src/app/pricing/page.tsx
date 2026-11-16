import Link from "next/link";
import Footer from "@/components/Footer";
import PricingCard from "@/components/pricing/PricingCard";
import Faq from "@/components/home/Faq";
import CallBanner from "@/components/home/CallBanner";
import Promises from "@/components/home/Promises";
import PageHero from "@/components/ui-brand/PageHero";
import PricingViewed from "@/components/pricing/PricingViewed";
import { offerBySlug, pricing, pricingFaqs } from "@/lib/offers";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Pricing: Fixed-Price AI Automation and MVP Development | Jenisys",
  description:
    "Fixed pricing: Discovery Sprint $499, AI automation from $1,500, MVP development from $7,500, support from $499 a month. Custom quotes for bigger projects.",
  path: "/pricing",
});

const ld = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Pricing", item: `${SITE}/pricing` },
  ],
};

export default function PricingPage() {
  return (
    <div className="j-night">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PricingViewed />
      <PageHero
        eyebrow="Pricing"
        title="Clear prices. Fixed quotes. No surprises."
        lead="Every project gets a fixed quote before we start. These are our starting prices; bigger or unusual projects get a custom quote."
      />
      <div className="j-paper">
        {pricing.map((group, gi) => {
          const offer = offerBySlug[group.offer];
          return (
            <section key={group.offer} className="border-b border-line py-14 md:py-20" aria-labelledby={`p-${group.offer}`}>
              <div className="j-wrap grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="j-chapter mb-4"><b>{String(gi + 1).padStart(2, "0")}</b> {offer.audience}</p>
                  <h2 id={`p-${group.offer}`} className="j-h2">{offer.name}</h2>
                  <p className="mt-4 text-[17px] leading-relaxed text-ink-muted">{offer.short}</p>
                  <Link href={`/services/${offer.slug}`} className="j-link mt-6 inline-flex items-center gap-2 py-2 text-[15px]">
                    How it works <span className="font-mono" aria-hidden="true">→</span>
                  </Link>
                </div>
                <div className={`grid gap-6 pt-3 lg:col-span-8 ${group.tiers.length > 1 ? "md:grid-cols-2" : "md:max-w-md"}`}>
                  {group.tiers.map((t) => (
                    <PricingCard key={t.name} tier={t} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
        <section className="j-section-tight">
          <div className="j-wrap">
            <div className="j-panel j-light-edge grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
              <div>
                <h2 className="j-h2">Custom projects</h2>
                <p className="j-lead mt-4">Platforms, integrations or something that doesn’t fit a package? Tell us what you need and we’ll send a fixed quote, usually within two business days.</p>
              </div>
              <Link href="/contact" className="j-btn j-btn-primary">
                Get a custom quote <span className="j-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Promises n="05" />
      <Faq items={pricingFaqs} title="Pricing questions" id="pricing-faq" n="06" />
      <CallBanner n="07" />
      <Footer />
    </div>
  );
}

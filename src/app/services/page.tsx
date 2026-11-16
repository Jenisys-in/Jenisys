import Link from "next/link";
import Footer from "@/components/Footer";
import CallBanner from "@/components/home/CallBanner";
import PageHero from "@/components/ui-brand/PageHero";
import AutomationFlow from "@/components/visuals/AutomationFlow";
import MvpDevices from "@/components/visuals/MvpDevices";
import DiscoveryVisual from "@/components/visuals/DiscoveryVisual";
import SupportVisual from "@/components/visuals/SupportVisual";
import { offerBySlug, money } from "@/lib/offers";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Services: AI Automation, MVP Development and Support | Jenisys",
  description:
    "Fixed-price AI automation for service businesses, MVP development for founders, a one-week Discovery Sprint and monthly support plans.",
  path: "/services",
});

const visuals: Record<string, React.ComponentType> = {
  "ai-automation": AutomationFlow,
  "mvp-development": MvpDevices,
  "discovery-sprint": DiscoveryVisual,
  support: SupportVisual,
};

function Row({ slug, wide = false }: { slug: string; wide?: boolean }) {
  const o = offerBySlug[slug];
  const Visual = visuals[slug];
  return (
    <Link
      href={`/services/${slug}`}
      className="j-panel j-light-edge group flex h-full flex-col overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
    >
      <div className={`grid h-full gap-8 p-7 md:p-9 ${wide ? "lg:grid-cols-2 lg:items-center" : ""}`}>
        <div className="flex flex-col">
          <p className="j-eyebrow">{o.audience}</p>
          <h3 className="j-h2 mt-3">{o.name}</h3>
          <p className="j-lead mt-4">{o.short}</p>
          <p className="mt-6 font-mono text-sm text-ink-muted">
            from <span className="text-ink">{money(o.from)}</span>
            {o.per ? `/${o.per}` : ""} · {o.timeline}
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-8 text-[15px] font-medium text-signal">
            Explore {o.name} <span className="font-mono transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
          </span>
        </div>
        <div className="j-night hidden overflow-hidden rounded-2xl border border-line px-3 py-6 md:block">
          {Visual && <Visual />}
        </div>
      </div>
    </Link>
  );
}

const ld = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
  ],
};

export default function ServicesIndex() {
  return (
    <div className="j-night">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PageHero
        eyebrow="Services"
        title="Four ways to work with us"
        lead="Start small with a Discovery Sprint, build an automation or an MVP at a fixed price, and keep it running with a monthly plan."
      />

      <div className="j-paper">
        <div className="j-wrap flex flex-col gap-16 py-16 md:gap-24 md:py-24">
          <section aria-labelledby="start-title">
            <p className="j-chapter mb-5"><b>01</b> Start</p>
            <h2 id="start-title" className="sr-only">Start with a Discovery Sprint</h2>
            <Row slug="discovery-sprint" wide />
          </section>
          <section aria-labelledby="build-title">
            <p className="j-chapter mb-5"><b>02</b> Build</p>
            <h2 id="build-title" className="sr-only">Build an automation or an MVP</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Row slug="ai-automation" />
              <Row slug="mvp-development" />
            </div>
          </section>
          <section aria-labelledby="keep-title">
            <p className="j-chapter mb-5"><b>03</b> Keep it running</p>
            <h2 id="keep-title" className="sr-only">Keep it running with support</h2>
            <Row slug="support" wide />
          </section>
        </div>
      </div>
      <CallBanner n="04" />
      <Footer />
    </div>
  );
}

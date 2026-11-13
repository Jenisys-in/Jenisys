import Link from "next/link";
import Footer from "@/components/Footer";
import Outcomes from "@/components/home/Outcomes";
import CallBanner from "@/components/home/CallBanner";
import AutomationFlow from "@/components/visuals/AutomationFlow";
import MvpDevices from "@/components/visuals/MvpDevices";
import DiscoveryVisual from "@/components/visuals/DiscoveryVisual";
import SupportVisual from "@/components/visuals/SupportVisual";
import { offers, money } from "@/lib/offers";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Services: AI Automation, MVP Development and Support | Jenisys",
  description:
    "Fixed-price AI automation for service businesses, MVP development for founders, a one-week Discovery Sprint and monthly support plans.",
  path: "/services",
});

const visuals = { "ai-automation": AutomationFlow, "mvp-development": MvpDevices, "discovery-sprint": DiscoveryVisual, support: SupportVisual };

export default function ServicesIndex() {
  return (
    <div className="j-night">
      <section className="relative isolate overflow-hidden border-b border-line">
        <div aria-hidden="true" className="absolute inset-0 -z-10 j-grid-bg" />
        <div className="j-wrap pt-16 pb-16 md:pt-24">
          <p className="j-eyebrow mb-5">Services</p>
          <h1 className="j-h1 max-w-4xl">Four ways to work with us</h1>
          <p className="j-lead mt-6">Start small with a Discovery Sprint, build an automation or an MVP at a fixed price, and keep it running with a monthly plan.</p>
        </div>
      </section>
      <div className="j-wrap flex flex-col gap-6 py-16 md:py-24">
        {offers.map((o) => {
          const Visual = visuals[o.slug];
          return (
            <Link key={o.slug} href={`/services/${o.slug}`} className="j-panel j-light-edge group grid items-center gap-8 overflow-hidden p-7 md:p-10 lg:grid-cols-2">
              <div>
                <p className="j-eyebrow">{o.audience}</p>
                <h2 className="j-h2 mt-3">{o.name}</h2>
                <p className="j-lead mt-4">{o.short}</p>
                <p className="mt-6 font-mono text-sm text-ink-muted">
                  from <span className="text-ink">{money(o.from)}</span>
                  {o.per ? `/${o.per}` : ""} · {o.timeline}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-signal">
                  Explore {o.name} <span className="font-mono transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                </span>
              </div>
              <div className="hidden md:block">{Visual && <Visual />}</div>
            </Link>
          );
        })}
      </div>
      <Outcomes />
      <CallBanner />
      <Footer />
    </div>
  );
}

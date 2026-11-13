import { notFound } from "next/navigation";
import ServicePage from "@/components/services-v2/ServicePage";
import { offers, offerBySlug, pricing } from "@/lib/offers";
import { pageMeta, serviceSeo, SITE } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return offers.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const seo = serviceSeo[slug];
  if (!seo) return {};
  return pageMeta({ ...seo, path: `/services/${slug}` });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const offer = offerBySlug[slug];
  if (!offer) notFound();
  const tiers = pricing.find((p) => p.offer === slug)?.tiers || [];
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: offer.name,
      description: serviceSeo[slug].description,
      url: `${SITE}/services/${slug}`,
      provider: { "@id": `${SITE}#organization` },
      areaServed: ["US", "AU", "GB", "CA", "IN"],
      offers: tiers.map((t) => ({
        "@type": "Offer",
        name: t.name,
        price: t.price,
        priceCurrency: "USD",
        description: t.note,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
        { "@type": "ListItem", position: 3, name: offer.name, item: `${SITE}/services/${slug}` },
      ],
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ServicePage slug={slug} />
    </>
  );
}

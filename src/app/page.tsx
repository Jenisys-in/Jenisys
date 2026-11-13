import Home from '../components/Homepage';
import { offers } from '@/lib/offers';
import { pageMeta } from '@/lib/seo';

export const metadata = {
  ...pageMeta({
    title: "Jenisys | AI Automation and MVP Development Agency",
    description:
      "Fixed-price AI automation for service businesses and MVP development for founders. Automations from $1,500, MVPs from $7,500. Offices in Atlanta and Kolkata.",
    path: "",
  }),
  alternates: { canonical: "https://www.jenisys.in" },
};

export default function Page() {
  return (
    <>
      <Home />

      {/* ProfessionalService Schema (Broader than LocalBusiness) */}
      <script id="jenisys-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://www.jenisys.in#local",
          name: "Jenisys",
          image: "https://www.jenisys.in/img/logo2.svg",
          url: "https://www.jenisys.in",
          telephone: "+91 8240384648",
          priceRange: "$$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Raja Ram mohon roy Sarani",
            addressLocality: "Serampore",
            addressRegion: "West Bengal",
            postalCode: "712203",
            addressCountry: "IN",
          },
          areaServed: {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 22.75,
              "longitude": 88.34
            },
            "geoRadius": "10000000" // Indicating global/wide reach
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
        }) }}
      />

      {/* Services Schema */}
      <script id="jenisys-services-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": offers.map((o) => ({
            "@type": "Service",
            name: o.name,
            url: `https://www.jenisys.in/services/${o.slug}`,
            description: o.short,
            provider: { "@id": "https://www.jenisys.in#organization" },
            offers: { "@type": "Offer", price: o.from, priceCurrency: "USD" },
          })),
        }) }}
      />
    </>
  );
}

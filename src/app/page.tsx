import Home from '../components/Homepage';

export const metadata = {
  title: "Jenisys | AI & Custom Software Development Company",
  description:
    "Jenisys is a premium software agency specializing in AI automation, custom web/mobile apps, and cloud engineering for startups and enterprises.",
  alternates: { canonical: "https://www.jenisys.in" },
  openGraph: {
    title: "Jenisys | AI & Custom Software Development Company",
    description:
      "Transform your business with Jenisys – Expert AI automation, cloud architecture, and custom software development for modern enterprises.",
    url: "https://www.jenisys.in",
    siteName: "Jenisys",
    images: [
      {
        url: "https://www.jenisys.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jenisys - Premium Software Agency",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenisys | AI & Custom Software Development Company",
    description:
      "Jenisys provides top-tier AI, mobile, and web development services to accelerate business growth globally.",
    images: ["https://www.jenisys.in/og-image.jpg"],
    site: "@JenisysTech",
  },
  metadataBase: new URL("https://www.jenisys.in"),
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
          "@graph": [
            {
              "@type": "Service",
              name: "Web Development",
              url: "https://www.jenisys.in/services/web-development",
              description:
                "We build scalable, responsive, and modern websites for startups and enterprises to enhance online presence and drive conversions.",
              provider: { "@id": "https://www.jenisys.in#organization" },
            },
            {
              "@type": "Service",
              name: "Mobile App Development",
              url: "https://www.jenisys.in/services/mobile-development",
              description:
                "We create native and cross-platform mobile apps that engage users, streamline operations, and boost revenue.",
              provider: { "@id": "https://www.jenisys.in#organization" },
            },
            {
              "@type": "Service",
              name: "Cloud Solutions",
              url: "https://www.jenisys.in/services/cloud-solutions",
              description:
                "We design secure, scalable cloud infrastructure to optimize business operations and reduce costs.",
              provider: { "@id": "https://www.jenisys.in#organization" },
            },
            {
              "@type": "Service",
              name: "AI and Machine Learning",
              url: "https://www.jenisys.in/services/ai-ml",
              description:
                "We leverage AI and ML to deliver intelligent automation, predictive analytics, and data-driven insights.",
              provider: { "@id": "https://www.jenisys.in#organization" },
            },
            {
              "@type": "Service",
              name: "Custom Software Development",
              url: "https://www.jenisys.in/services/Custom-Software-Development",
              description:
                "We provide tailored software solutions to meet unique business requirements, improve efficiency, and scale growth.",
              provider: { "@id": "https://www.jenisys.in#organization" },
            },
            {
              "@type": "Service",
              name: "IT Consulting",
              url: "https://www.jenisys.in/services/IT-consulting",
              description:
                "We offer expert IT consulting to guide digital transformation, optimize technology, and achieve strategic goals.",
              provider: { "@id": "https://www.jenisys.in#organization" },
            },
            {
              "@type": "Service",
              name: "Maintenance and Support",
              url: "https://www.jenisys.in/services/Maintenance",
              description:
                "We provide reliable maintenance and support services to ensure software and systems operate smoothly and securely.",
              provider: { "@id": "https://www.jenisys.in#organization" },
            },
          ],
        }) }}
      />
    </>
  );
}

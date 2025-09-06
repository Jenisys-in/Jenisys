import Home from '../components/Homepage';
import Script from 'next/script';

export const metadata = {
  title: "Jenisys | Custom Software, Web & Mobile App Development Company",
  description:
    "Jenisys is a top-rated IT consulting and software development company in the USA, specializing in web, mobile, AI/ML, cloud solutions, digital transformation, and startup-friendly tech partnerships.",
  keywords:
    "custom software development, web development company, mobile app development, AI and machine learning services, cloud solutions, IT consulting services, digital transformation, startup tech partner, enterprise software solutions, automation software, maintenance and support, Jenisys technology solutions",
  robots: "index, follow",
  alternates: { canonical: "https://www.jenisys.in" },
  openGraph: {
    title: "Jenisys | Custom Software, Web & Mobile App Development Company",
    description:
      "Transform your business with Jenisys – experts in web, mobile, AI/ML, cloud solutions, custom software, IT consulting, and maintenance. Scalable, modern digital systems for startups and enterprises.",
    url: "https://www.jenisys.in",
    siteName: "Jenisys",
    images: [
      {
        url: "https://www.jenisys.in/img/logo2.svg",
        width: 1200,
        height: 630,
        alt: "Jenisys - Leading Software Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenisys | Custom Software, Web & Mobile App Development Company",
    description:
      "Jenisys provides web, mobile, AI/ML, cloud, custom software, IT consulting, and maintenance services to accelerate business growth for startups and enterprises.",
    images: ["https://www.jenisys.in/img/logo2.svg"],
    site: "@JenisysTech",
  },
  metadataBase: new URL("https://www.jenisys.in"),
  verification: {
    google: "google-site-verification-code",
  },
};

export default function Page() {
  return (
    <>
      <Home />

      {/* Organization Schema */}
      <Script id="jenisys-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://www.jenisys.in#organization",
          name: "Jenisys",
          url: "https://www.jenisys.in",
          logo: "https://www.jenisys.in/img/logo2.svg",
          sameAs: [
            "https://www.linkedin.com/company/jenisys",
            "https://twitter.com/JenisysTech",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-XXX-XXX-XXXX",
            contactType: "customer service",
            areaServed: "US",
            availableLanguage: ["English"],
          },
          description:
            "Jenisys is a leading IT consulting and software development company offering web, mobile, AI/ML, cloud, custom software, IT consulting, and maintenance services for startups and enterprises.",
        })}
      </Script>

      {/* LocalBusiness Schema */}
      <Script id="jenisys-local-schema" type="application/ld+json">
        {JSON.stringify({
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
        })}
      </Script>

      {/* Services Schema */}
      <Script id="jenisys-services-schema" type="application/ld+json">
        {JSON.stringify({
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
              url: "https://www.jenisys.in/services/custom-software-development",
              description:
                "We provide tailored software solutions to meet unique business requirements, improve efficiency, and scale growth.",
              provider: { "@id": "https://www.jenisys.in#organization" },
            },
            {
              "@type": "Service",
              name: "IT Consulting",
              url: "https://www.jenisys.in/services/it-consulting",
              description:
                "We offer expert IT consulting to guide digital transformation, optimize technology, and achieve strategic goals.",
              provider: { "@id": "https://www.jenisys.in#organization" },
            },
            {
              "@type": "Service",
              name: "Maintenance and Support",
              url: "https://www.jenisys.in/services/maintenance",
              description:
                "We provide reliable maintenance and support services to ensure software and systems operate smoothly and securely.",
              provider: { "@id": "https://www.jenisys.in#organization" },
            },
          ],
        })}
      </Script>
    </>
  );
}

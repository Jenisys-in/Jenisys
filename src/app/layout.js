import "./global.css";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { CalendarProvider } from "@/contexts/CalendarContext";
import ClientLayout from "@/components/ClientLayout";

// Brand type system — see docs/brand/brand-system.md §5
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: ["400", "500"],
});

// ✅ Viewport metadata (for mobile browsers and Safari)
export const viewport = {
  themeColor: "#050a1c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ✅ SEO metadata (server component can export this)
export const metadata = {
  metadataBase: new URL("https://www.jenisys.in"),
  title: "Jenisys | AI Software Agency & Enterprise Custom Solutions",
  description:
    "Jenisys transforms businesses with AI automation, cloud infrastructure, and custom software development. Your partner for scalable enterprise tech.",
  applicationName: "Jenisys",
  authors: [{ name: "Jenisys Team", url: "https://www.jenisys.in" }],
  generator: "Next.js",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
  appleWebApp: {
    title: "Jenisys",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  openGraph: {
    title: "Jenisys | AI Software Agency & Enterprise Custom Solutions",
    description:
      "Jenisys transforms businesses with AI automation, cloud infrastructure, and custom software development. Your partner for scalable enterprise tech.",
    url: "https://www.jenisys.in",
    siteName: "Jenisys",
    images: [
      {
        url: "https://www.jenisys.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jenisys – AI & Software Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
    emails: ["contact@jenisys.in"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenisys | AI Software Agency & Enterprise Custom Solutions",
    description:
      "Jenisys transforms businesses with AI automation, cloud infrastructure, and custom software development. Your partner for scalable enterprise tech.",
    images: ["https://www.jenisys.in/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${geist.variable} ${geistMono.variable}`} data-scroll-behavior="smooth">
      <body>
        <CalendarProvider>
          <ClientLayout>{children}</ClientLayout>
        </CalendarProvider>

        {/* JSON-LD Organization Schema — rendered once, site-wide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.jenisys.in#organization",
              name: "Jenisys",
              url: "https://www.jenisys.in",
              logo: "https://www.jenisys.in/apple-touch-icon.png",
              email: "contact@jenisys.in",
              telephone: "+91 8240384648",
              description:
                "Jenisys is a leading IT consulting and software development company offering web, mobile, AI/ML, cloud, custom software, IT consulting, and maintenance services for startups and enterprises.",
              sameAs: [
                "https://www.linkedin.com/company/jenisys",
                "https://www.instagram.com/jenisys.in/",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Raja Ram mohon roy Sarani",
                addressLocality: "Serampore",
                addressRegion: "West Bengal",
                postalCode: "712203",
                addressCountry: "IN",
              },
              areaServed: ["US", "AU", "GB", "CA", "IN"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "contact@jenisys.in",
                areaServed: ["US", "AU", "GB", "CA", "IN"],
                availableLanguage: "English",
              },
            }),
          }}
        />

        {/* Google tag (gtag.js) */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-LKJG71PLQ4"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LKJG71PLQ4');
          `}
        </Script>

        {/* Tawk.to chat widget */}
        <Script id="tawk-to-script" strategy="lazyOnload">
          {`
            var Tawk_API = Tawk_API || {};
            var Tawk_LoadStart = new Date();
            (function() {
                var s1 = document.createElement("script"),
                    s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/689bd92ae0fd9f192a113749/1j2gcgjin';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>

        {/* Apollo Integration */}
        <Script id="apollo-tracker" strategy="lazyOnload">
          {`
            function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
            o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
            o.onload=function(){window.trackingFunctions.onLoad({appId:"69aebe8fb50a1b0021786848"})},
            document.head.appendChild(o)}initApollo();
          `}
        </Script>

      </body>
    </html>

  );
}




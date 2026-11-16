import "./global.css";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
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
  title: "Jenisys | AI Automation and MVP Development Agency",
  description:
    "Fixed-price AI automation for service businesses and MVP development for founders. Offices in Atlanta and Kolkata.",
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
    title: "Jenisys | AI Automation and MVP Development Agency",
    description:
      "Fixed-price AI automation for service businesses and MVP development for founders. Offices in Atlanta and Kolkata.",
    url: "https://www.jenisys.in",
    siteName: "Jenisys",
    images: [
      {
        url: "https://www.jenisys.in/og?path=",
        width: 1200,
        height: 630,
        alt: "Jenisys: AI automation and MVP development",
      },
    ],
    locale: "en_US",
    type: "website",
    emails: ["contact@jenisys.in"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenisys | AI Automation and MVP Development Agency",
    description:
      "Fixed-price AI automation for service businesses and MVP development for founders. Offices in Atlanta and Kolkata.",
    images: ["https://www.jenisys.in/og?path="],
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
              logo: "https://www.jenisys.in/brand/icon-512.png",
              slogan: "Technology, turned into advantage.",
              email: "contact@jenisys.in",
              telephone: "+91 8240384648",
              description:
                "Jenisys is a software studio that builds fixed-price AI automations for service businesses and MVPs for founders, with offices in Atlanta and Kolkata.",
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
              location: [
                { "@type": "Place", name: "Jenisys, Atlanta", address: { "@type": "PostalAddress", addressLocality: "Atlanta", addressRegion: "GA", addressCountry: "US" } },
                { "@type": "Place", name: "Jenisys, Kolkata", address: { "@type": "PostalAddress", addressLocality: "Serampore", addressRegion: "West Bengal", postalCode: "712203", addressCountry: "IN" } },
              ],
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

        {/* Google Analytics and Apollo load from ConsentScripts, only after cookie consent. */}


      </body>
    </html>

  );
}




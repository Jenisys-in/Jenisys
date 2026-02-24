import "./global.css";
import { Montserrat, Inter } from "next/font/google";
import Script from "next/script";
import { CalendarProvider } from "@/contexts/CalendarContext";
import ClientLayout from "@/components/ClientLayout";

// ✅ Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap", // Ensure swap is used
});

// ✅ Inter font (for better performance on body text)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// ✅ Viewport metadata (for mobile browsers and Safari)
export const viewport = {
  themeColor: "#ffffff",
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
      { url: "/logo2.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/logo2.svg",
        color: "#4F46E5",
      },
    ],
  },
  appleWebApp: {
    title: "Jenisys",
    statusBarStyle: "default",
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
    <html lang="en" className={`${montserrat.variable} ${inter.variable} font-sans`}>
      <body>
        <CalendarProvider>
          <ClientLayout>{children}</ClientLayout>
        </CalendarProvider>

        {/* JSON-LD Organization Schema */}
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Jenisys",
              url: "https://www.jenisys.in",
              logo: "https://www.jenisys.in/img/logo2.svg",
              description: "AI Software Agency providing enterprise custom solutions.",
              sameAs: ["https://www.linkedin.com/company/jenisys"],
              areaServed: [
                { "@type": "Country", name: "Australia" },
                { "@type": "Country", name: "United States" }
              ],
              contactPoint: {
                 "@type": "ContactPoint",
                 "marketingTitle": "Sales & Support",
                 "contactType": "sales", 
                 "areaServed": ["US", "AU", "GB", "CA", "IN"],
                 "availableLanguage": "English"
              }
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
        <Script id="tawk-to-script" strategy="afterInteractive">
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
      </body>
    </html>
  );
}

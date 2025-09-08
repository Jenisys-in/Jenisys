import "./global.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { CalendarProvider } from "@/contexts/CalendarContext";
import ClientLayout from "@/components/ClientLayout";

// ✅ Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// ✅ SEO metadata (server component can export this)
export const metadata = {
  metadataBase: new URL("https://www.jenisys.in"),
  title: "Jenisys – Transforming Technology Into Business Advantage",
  description:
    "Jenisys helps businesses grow through automation, cloud solutions, AI/ML, and custom software development.",
  alternates: {
    canonical: "https://www.jenisys.in",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/logo2.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
  },
  openGraph: {
    title: "Jenisys – Transforming Technology Into Business Advantage",
    description:
      "Jenisys helps businesses grow through automation, cloud solutions, AI/ML, and custom software development.",
    url: "https://www.jenisys.in",
    siteName: "Jenisys",
    images: [
      {
        url: "https://www.jenisys.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jenisys – Transforming Technology Into Business Advantage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenisys – Transforming Technology Into Business Advantage",
    description:
      "Jenisys helps businesses grow through automation, cloud solutions, AI/ML, and custom software development.",
    images: ["https://www.jenisys.in/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} font-sans`}>
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
              sameAs: ["https://www.linkedin.com/company/jenisys"],
            }),
          }}
        />

        {/* Tawk.to chat widget */}
        <Script id="tawk-to-script" strategy="lazyOnload">
          {`
            var Tawk_API = Tawk_API || {};
            Tawk_API.onBeforeLoad = function() {
                Tawk_API.hideWidget();
            };
            Tawk_API.onLoad = function() {
                Tawk_API.showWidget();
                Tawk_API.minimize();
            };
            var Tawk_LoadStart = new Date();
            (function() {
                var s1 = document.createElement("script"),
                    s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/689bd92ae0fd9f192a113749/1j2gcgjin';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}

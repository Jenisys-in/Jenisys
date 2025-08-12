import Quote from '@/components/Quote';

export const metadata = {
  title: "Get a Free Quote - Jenisys",
  description:
    "Get a free, no-obligation quote for your next software development project. Jenisys offers custom solutions in web, mobile, and AI to help your business grow.",
  openGraph: {
    title: "Get a Free Quote - Jenisys",
    description:
      "Tell us about your project and get a free quote from our team of experts. We specialize in custom software, web, and mobile app development.",
    url: "https://www.jenisys.in/quote",
    siteName: "Jenisys",
    images: [
      {
        url: "https://www.jenisys.in/img/Logo.png",
        width: 1200,
        height: 630,
        alt: "Jenisys - Get a Free Quote",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Quote - Jenisys",
    description:
      "Ready to start your project? Get a free quote from Jenisys for high-quality software development services.",
    images: ["https://www.jenisys.in/img/Logo.png"],
  },
  alternates: {
    canonical: "https://www.jenisys.in/quote",
  },
};

export default function QuotePage() {
  return <Quote />;
}

import Blog from '@/components/Blog';

export const metadata = {
  title: "Blog - Jenisys",
  description:
    "Stay updated with the latest insights, tech trends, and expert tips from Jenisys through our regularly updated blog.",
  keywords: ["tech blog", "software development blog", "Jenisys blog", "tech trends"],
  openGraph: {
    title: "Blog - Jenisys",
    description:
      "Stay updated with the latest insights, tech trends, and expert tips from Jenisys through our regularly updated blog.",
    url: "https://www.jenisys.in/blog",
    siteName: "Jenisys",
    images: [
      {
        url: "https://www.jenisys.in/img/logo2.svg",
        width: 1200,
        height: 630,
        alt: "Jenisys - Software Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Jenisys",
    description:
      "Stay updated with the latest insights, tech trends, and expert tips from Jenisys through our regularly updated blog.",
    images: ["https://www.jenisys.in/img/logo2.svg"],
  },
  alternates: {
    canonical: "https://www.jenisys.in/blog",
  },
};

export default function BlogRoute() {
  return <Blog />;
}

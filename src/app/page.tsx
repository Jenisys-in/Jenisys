import Home from '../components/Homepage';

export const metadata = {
  title: "Jenisys - Custom Software, Web & Mobile App Development Company",
  description:
    "Jenisys is a top-rated IT consulting and software development company offering web development, mobile app development, cloud solutions, AI/ML services, digital transformation, and startup-friendly tech partnerships.",
  keywords: [
    "custom software development",
    "web development company",
    "mobile app development",
    "AI and machine learning services",
    "cloud solutions",
    "IT consulting",
    "digital transformation services",
    "startup tech partner",
    "software company USA",
    "Jenisys tech solutions"
  ],
  openGraph: {
    title: "Jenisys - Custom Software, Web & Mobile App Development Company",
    description:
      "Jenisys provides innovative digital solutions including full-stack development, AI/ML, cloud infrastructure, and tailored software for startups and enterprises.",
    url: "https://www.jenisys.in",
    siteName: "Jenisys",
    images: [
      {
        url: "https://www.jenisys.in/og-image.jpg",
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
    title: "Jenisys - Custom Software, Web & Mobile App Development Company",
    description:
      "Jenisys is your trusted tech partner for web, mobile, cloud, and AI solutions. Transform your business with scalable, modern digital systems.",
    images: ["https://www.jenisys.in/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.jenisys.in",
  },
};

export default function Page() {
  return <Home />;
}

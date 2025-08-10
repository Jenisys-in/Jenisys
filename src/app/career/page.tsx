import CareerHome from '@/components/career/career_home';

export const metadata = {
  title: "Careers at Jenisys - Join Our Innovative Tech Team",
  description:
    "Explore exciting career opportunities at Jenisys. We are looking for talented professionals in software development, AI, cloud, and more to shape the future of technology.",
  keywords: [
    "Jenisys careers",
    "software development jobs",
    "AI jobs",
    "cloud computing careers",
    "IT jobs",
    "technology careers",
    "join Jenisys",
    "developer jobs",
    "tech startup jobs"
  ],
  openGraph: {
    title: "Careers at Jenisys - Join Our Innovative Tech Team",
    description:
      "Explore exciting career opportunities at Jenisys. We are looking for talented professionals in software development, AI, cloud, and more to shape the future of technology.",
    url: "https://www.jenisys.in/career",
    siteName: "Jenisys",
    images: [
      {
        url: "https://www.jenisys.in/img/Logo.png",
        width: 1200,
        height: 630,
        alt: "Jenisys Careers - Work With Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Jenisys - Join Our Innovative Tech Team",
    description:
      "Explore exciting career opportunities at Jenisys. We are looking for talented professionals in software development, AI, cloud, and more to shape the future of technology.",
    images: ["https://www.jenisys.in/img/Logo.png"],
  },
  alternates: {
    canonical: "https://www.jenisys.in/career",
  },
};

export default function CareerRoute() {
  return <CareerHome />;
}

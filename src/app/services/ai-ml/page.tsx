import JenisysAILanding from '@/components/services/ai-ml';

export const metadata = {
  title: "AI & Machine Learning Services - Jenisys",
  description:
    "Unlock business potential with Jenisys AI and Machine Learning services — from automation to intelligent analytics and custom AI solutions built to scale.",
  keywords: ["AI services", "machine learning solutions", "intelligent automation", "custom AI development"],
  openGraph: {
    title: "AI & Machine Learning Services - Jenisys",
    description:
      "Unlock business potential with Jenisys AI and Machine Learning services — from automation to intelligent analytics and custom AI solutions built to scale.",
    url: "https://www.jenisys.in/services/ai-ml",
    siteName: "Jenisys",
    images: [
      {
        url: "https://www.jenisys.in/img/Logo.png",
        width: 1200,
        height: 630,
        alt: "Jenisys - AI & Machine Learning Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Machine Learning Services - Jenisys",
    description:
      "Unlock business potential with Jenisys AI and Machine Learning services — from automation to intelligent analytics and custom AI solutions built to scale.",
    images: ["https://www.jenisys.in/img/Logo.png"],
  },
  alternates: {
    canonical: "https://www.jenisys.in/services/ai-ml",
  },
};

export default function AIMachineLearningRoute() {
  return <JenisysAILanding />;
}

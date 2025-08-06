// src/app/services/web-development/page.tsx

import WebDevelopmentPage from '@/components/services/web-development';

export const metadata = {
  title: "Web Development Services - Jenisys",
  description:
    "Discover how Jenisys crafts modern, scalable, and high-performing websites tailored to your business goals through expert web development services.",
  keywords: ["web development", "website development", "responsive design", "ecommerce development"],
};

export default function WebDevelopmentRoute() {
  return <WebDevelopmentPage />;
}

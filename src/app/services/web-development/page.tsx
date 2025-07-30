// src/app/services/web-development/page.tsx

import WebDevelopmentPage from '@/components/services/web-development';

export const metadata = {
  title: "Web Development Services - Jenisys",
  description:
    "Discover how Jenisys crafts modern, scalable, and high-performing websites tailored to your business goals through expert web development services.",
};

export default function WebDevelopmentRoute() {
  return <WebDevelopmentPage />;
}

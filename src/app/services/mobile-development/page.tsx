// src/app/services/mobile-development/page.tsx

import MobileAppLanding from '@/components/services/mobile-development';


export const metadata = {
  title: "App Development Services - Jenisys",
  description:
    "Discover how Jenisys builds modern, scalable, and high-performing mobile apps tailored to your business goals through expert app development services.",
  keywords: ["app development", "mobile app development", "ios development", "android development"],
};

export default function MobileDevelopmentRoute() {
  return <MobileAppLanding />;
}

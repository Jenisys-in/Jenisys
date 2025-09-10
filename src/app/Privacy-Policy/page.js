// src/app/Privacy-Policy/page.js

import PrivacyPolicy from '../../components/Privacy-Policy';


export const metadata = {
  title: "Privacy Policy - Jenisys",
  description: "Privacy Policy and Cookie Policy for Jenisys - Software Development and Technology Consulting Company",
  keywords: "privacy policy, data protection, cookies, GDPR, Jenisys, software development",
  robots: "index, follow",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
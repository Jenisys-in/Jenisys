// src/app/about/page.js

import AboutUs from '../../components/About-us/about-us';

export const metadata = {
  title: "About Us - Jenisys",
  description: "Learn more about Jenisys, a tech incubator providing top-tier software and digital solutions. Discover our mission, vision, and core values.",
  keywords: ["tech incubator", "software solutions", "digital transformation", "Jenisys mission"],
};

export default function About() {
  return <AboutUs />;
}

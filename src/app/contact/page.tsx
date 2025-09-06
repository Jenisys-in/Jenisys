

// src/app/contact/page.js

import Contact from '../../components/contact';
import Script from "next/script";


export const metadata = {
  title: "Contact Us - Jenisys",
  description: "Get in touch with Jenisys for tech strategy, collaboration, or service assistance. We're here to help turn your vision into reality.",
  keywords: ["contact Jenisys", "tech support", "business inquiry", "software services"],
};

export default function contact() {
  return <Contact />;
}

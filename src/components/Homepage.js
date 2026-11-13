import Footer from "./Footer";
import Hero from "./home/Hero";
import Outcomes from "./home/Outcomes";
import Offers from "./home/Offers";
import HowItWorks from "./home/HowItWorks";
import CaseStudies from "./home/CaseStudies";
import Promises from "./home/Promises";
import PricingPreview from "./home/PricingPreview";
import Testimonials from "./home/Testimonials";
import Faq from "./home/Faq";
import BlogTeaser from "./home/BlogTeaser";
import CallBanner from "./home/CallBanner";

// The home page is a pitch: promise → proof → offer → process → evidence → price → objections → ask.
export default function Home() {
  return (
    <div className="j-night">
      <Hero />
      <Outcomes />
      <Offers />
      <HowItWorks />
      <CaseStudies />
      <Promises />
      <PricingPreview />
      <Testimonials />
      <Faq />
      <BlogTeaser />
      <CallBanner />
      <Footer />
    </div>
  );
}

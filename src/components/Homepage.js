import Footer from "./Footer";
import Hero from "./home/Hero";
import Outcomes from "./home/Outcomes";
import Offers from "./home/Offers";
import FeaturedStory from "./home/FeaturedStory";
import ClientReviews from "./ui-brand/ClientReviews";
import HowItWorks from "./home/HowItWorks";
import Promises from "./home/Promises";
import Faq from "./home/Faq";
import CallBanner from "./home/CallBanner";
import { LineDivider } from "./ui-brand/Line";

// The home page is one argument (planning/03-design-direction.md, E6):
// offer → proof → two ways in → the work → client reviews → process and price → questions → the call.
export default function Home() {
  return (
    <div className="j-night">
      <Hero />
      <div className="j-night pb-6 md:pb-10"><div className="j-wrap"><LineDivider labels /></div></div>
      <Outcomes />
      <Offers />
      <FeaturedStory />
      <ClientReviews n="04" />
      <HowItWorks withPrices n="05" />
      <Promises compact ground="night" />
      <Faq n="06" />
      <CallBanner n="07" />
      <Footer />
    </div>
  );
}

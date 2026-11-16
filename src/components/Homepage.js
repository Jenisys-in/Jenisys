import Footer from "./Footer";
import Hero from "./home/Hero";
import Outcomes from "./home/Outcomes";
import Offers from "./home/Offers";
import FeaturedStory from "./home/FeaturedStory";
import HowItWorks from "./home/HowItWorks";
import Promises from "./home/Promises";
import Faq from "./home/Faq";
import CallBanner from "./home/CallBanner";
import { LineDivider } from "./ui-brand/Line";

// The home page is one argument in seven chapters (planning/03-design-direction.md, E6):
// offer → proof → two ways in → the work → process and price → promises and questions → the call.
export default function Home() {
  return (
    <div className="j-night">
      <Hero />
      <div className="j-night" aria-hidden="true"><div className="j-wrap"><LineDivider /></div></div>
      <Outcomes />
      <Offers />
      <FeaturedStory />
      <HowItWorks withPrices />
      <Promises compact />
      <Faq />
      <CallBanner n="06" />
      <Footer />
    </div>
  );
}

import Footer from "./Footer";
import Hero from "./home/Hero";
import Outcomes from "./home/Outcomes";
import CaseStudies from "./home/CaseStudies";
import Services from "./home/Services";
import Process from "./home/Process";
import Testimonials from "./home/Testimonials";
import About from "./home/About";
import TechStack from "./home/TechStack";
import CallBanner from "./home/CallBanner";
import BlogTeaser from "./home/BlogTeaser";

// Server-rendered home page. Order follows the conversion rules: proof before catalogue.
export default function Home() {
  return (
    <div className="j-night">
      <Hero />
      <Outcomes />
      <CaseStudies />
      <Services />
      <Process />
      <Testimonials />
      <About />
      <TechStack />
      <BlogTeaser />
      <CallBanner />
      <Footer />
    </div>
  );
}

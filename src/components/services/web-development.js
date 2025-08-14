"use client";

import Footer from "../Footer";
import { useCalendar } from "@/contexts/CalendarContext";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Code,
  Smartphone,
  Zap,
  Shield,
  Users,
  Check,
  Star,
  ArrowRight,
  Menu,
  X,
  Play,
} from "lucide-react";

import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  TrendingUp,
  Calendar,
  Bot,
} from "lucide-react";

export default function WebDevelopmentPage() {
  const { openCalendar } = useCalendar();
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Scroll progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const processSteps = [
    {
      title: "Discovery & Strategy",
      description: "Understanding your business goals and requirements",
    },
    {
      title: "Design & User Experience",
      description: "Creating user-centered designs and prototypes",
    },
    {
      title: "Development & Integration",
      description: "Building with modern technologies and best practices",
    },
    {
      title: "Testing & QA",
      description: "Ensuring quality, performance, and compatibility",
    },
    {
      title: "Launch",
      description: "Deploying your website with seamless go-live process",
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support and updates to keep you ahead",
    },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Blazing Fast Performance",
      description:
        "Our websites are built with a focus on speed and efficiency, delivering exceptional user experience and top SEO rankings.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First, Fully Responsive",
      description:
        "We ensure your site looks and performs flawlessly on every device, giving you a competitive edge in a mobile-first world.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Easy to Manage",
      description:
        "Our solutions are built on a solid foundation, ready to grow with your business while protecting your data.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure and Scalable",
      description:
        "We build user-friendly content management systems (CMS) that put you in control, making updates and changes simple and intuitive.",
    },
  ];

  const industries = [
    "Healthcare",
    "E-commerce",
    "Finance",
    "Education",
    "Real Estate",
    "Technology",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      text: "Jenisys transformed our online presence completely. Our conversion rate increased by 340% within 3 months of launch.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "GrowthLab",
      text: "The attention to detail and technical expertise exceeded our expectations. They delivered exactly what we envisioned.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "Typical projects take 4-8 weeks depending on complexity. We provide detailed timelines during consultation.",
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer:
        "Yes, we offer comprehensive maintenance packages including updates, security monitoring, and performance optimization.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern technologies like Next.js, React, Tailwind CSS, and headless CMS solutions for optimal performance.",
    },
    {
      question: "Can you redesign our existing website?",
      answer:
        "Absolutely! We specialize in both new builds and complete redesigns to modernize your online presence.",
    },
  ];

  const painPoints = [
    "Losing Customers to Frustration? A slow-loading, clunky website is the fastest way to lose a potential client.",
    "Struggling to Be Seen? A poorly built site can be invisible to search engines, wasting your marketing efforts.",
    "Wasting Your Time? Outdated backends make simple content updates a nightmare.",
    "Difficult to maintain and update content",
    "Stuck in a Box? A rigid platform with no room for growth or customization can stifle your future plans.",
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-ping"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Stop Wishing for a Better Website.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Start Building One.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Your website is more than just a digital brochure; it’s your
                hardest-working employee. We design and build high-performance,
                conversion-focused websites that capture leads, elevate your
                brand, and turn visitors into customers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={openCalendar}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Schedule a Free Strategy Call
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Animated Code Visual */}
            <div className="relative max-w-2xl mx-auto">
              <div className="bg-gray-900 rounded-lg p-6 shadow-2xl transform hover:rotate-1 transition-transform duration-500">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="text-left text-sm font-mono">
                  <div className="text-blue-400">const</div>
                  <div className="text-white ml-4">
                    website = createAmazingExperience({"{"}
                  </div>
                  <div className="text-green-400 ml-8">
                    performance: 'blazing-fast',
                  </div>
                  <div className="text-green-400 ml-8">design: 'stunning',</div>
                  <div className="text-green-400 ml-8">
                    conversions: 'optimized'
                  </div>
                  <div className="text-white ml-4">{"}"});</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="pain-points" data-animate className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Is Your Website an Asset or a Liability?
            </h2>
            <p className="text-xl text-gray-600">
              Many websites are silently costing their owners customers and
              revenue. Do any of these sound familiar?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className={`group p-6 rounded-xl border-2 border-red-100 bg-red-50 hover:border-red-200 transition-all duration-500 ${
                  isVisible["pain-points"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-xl text-gray-600">
          If you answered yes to any of these, it's time for a change.
        </p>
      </div>

      {/* Process Section */}
      <section
        id="process"
        data-animate
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Process: Websites That Deliver
            </h2>
            <p className="text-xl text-gray-600">
              We follow a structured, transparent process to ensure your project
              is delivered on time, on budget, and with a clear focus on
              results.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                    isVisible["process"]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" data-animate className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core Features of Our Websites
            </h2>
            <p className="text-xl text-gray-600">
              Every website we build comes with these essential features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-500 transform hover:scale-105 ${
                  isVisible["features"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" data-animate className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We've Built For
            </h2>
            <p className="text-xl text-gray-600">
              Delivering tailored solutions across diverse sectors
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-500 transform hover:scale-105 ${
                  isVisible["industries"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-gray-700 font-semibold">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" data-animate className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${
                  isVisible["testimonials"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why-choose"
        data-animate
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Jenisys?
            </h2>
            <p className="text-xl text-gray-600">
              When you choose us, you're not just hiring developers. You're
              partnering with a team dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="space-y-6">
              {[
                "Results-Focused: We optimize every build for performance, conversions, and SEO.",
                "Expert Partnership: We use modern, robust technology (Next.js, Headless CMS) and provide comprehensive post-launch support.",
                "Strategic Design: Our design approach is focused on your industry and your unique business goals.",
                "Transparent Process: We keep you informed and involved from the first call to the final launch and beyond.",
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 transition-all duration-500 ${
                    isVisible["why-choose"]
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl transform rotate-3 hover:rotate-6 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    250+
                  </div>
                  <p className="text-gray-600">Websites Built</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl absolute top-20 right-0 transform -rotate-3 hover:-rotate-6 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    95%
                  </div>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" data-animate className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our web development services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`mb-4 transition-all duration-500 ${
                  isVisible["faq"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  className="w-full p-6 bg-gray-50 hover:bg-gray-100 rounded-lg text-left flex justify-between items-center transition-all duration-300"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="p-6 bg-blue-50 rounded-b-lg transition-all duration-300">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build a Website that Works for You?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's discuss how a custom-built website can become your most
            powerful growth engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendar}
              className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Schedule a Free Strategy Call
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              See Our Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}

      <Footer />
    </div>
  );
}

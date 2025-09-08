"use client";
import Footer from "../Footer";
import { useCalendar } from "@/contexts/CalendarContext";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Cloud,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Server,
  Database,
  Layers,
  GitBranch,
  Lock,
  Users,
  TrendingUp,
  Award,
  ChevronDown,
  ChevronUp,
  Play,
  Pause,
  Star,
  Building,
  Heart,
  ShoppingCart,
  CreditCard,
  Truck,
  GraduationCap,
} from "lucide-react";

import { Mail, Phone, MapPin, ExternalLink, Calendar, Bot } from "lucide-react";

const Cloudsln = () => {
  const { openCalendar } = useCalendar();
  const [activeTab, setActiveTab] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    cost: 0,
    data: 0,
    speed: 0,
  });

  // Define data arrays first
  const services = [
    {
      icon: Cloud,
      title: "Auto-Scaling Architecture",
      desc: "Your infrastructure grows and shrinks with your needs, so you only pay for what you use",
    },
    {
      icon: GitBranch,
      title: "DevOps & Automation",
      desc: "Automate your development pipeline with CI/CD to achieve faster deployment and seamless updates",
    },
    {
      icon: Database,
      title: "Disaster Recovery",
      desc: "We build reliable systems that protect your data and ensure zero downtime",
    },
    {
      icon: Shield,
      title: "Cloud-Native Security",
      desc: "We integrate enterprise-grade security from day one to protect your data and ensure compliance",
    },
    {
      icon: Server,
      title: "Infrastructure as a Service",
      desc: "Scalable IaaS solutions",
    },
    {
      icon: Layers,
      title: "Platform as a Service",
      desc: "Complete PaaS management",
    },
  ];

  const industries = [
    {
      icon: Zap,
      title: "SaaS & Startups",
      desc: "Scale apps on demand",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      title: "Healthcare",
      desc: "Secure health data",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      desc: "Handle traffic spikes",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: CreditCard,
      title: "Fintech",
      desc: "Secure transactions",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Truck,
      title: "Logistics",
      desc: "Real-time tracking",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: GraduationCap,
      title: "Education",
      desc: "Remote learning",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  const workflow = [
    {
      title: "Assess",
      desc: " We start by analyzing your current infrastructure to understand your unique needs and goals.",
    },
    {
      title: "Plan",
      desc: "We design a custom migration strategy that minimizes risk and downtime.",
    },
    {
      title: "Migrate",
      desc: "Our experts execute a seamless transition to your new cloud environment.",
    },
    { title: "Deploy", desc: "Launch optimized systems" },
    {
      title: "Optimize",
      desc: "We fine-tune your systems for maximum performance and cost efficiency.",
    },
    {
      title: "Support",
      desc: "We provide ongoing maintenance and support to keep you running smoothly.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Jenisys migrated our entire database to AWS seamlessly — and we cut 30% off our infra spend.",
      author: "Sarah Chen",
      role: "CTO, TechFlow",
      avatar: "SC",
    },
    {
      quote: "Their DevOps setup improved our deployment speed 10x.",
      author: "Marcus Rodriguez",
      role: "Lead Engineer, StartupXYZ",
      avatar: "MR",
    },
    {
      quote:
        "Zero downtime migration with 40% cost reduction. Exceptional service.",
      author: "Lisa Thompson",
      role: "IT Director, Enterprise Corp",
      avatar: "LT",
    },
  ];

  const faqs = [
    {
      q: "Can you migrate our existing system without downtime?",
      a: "Yes, we use proven strategies like blue-green deployments and rolling updates to ensure zero-downtime migrations.",
    },
    {
      q: "Do you handle both setup and post-deployment maintenance?",
      a: "Absolutely. We provide end-to-end support from initial migration through ongoing optimization and maintenance.",
    },
    {
      q: "How do you ensure cloud security?",
      a: "We implement security-first architecture with encryption, access controls, compliance monitoring, and regular security audits.",
    },
    {
      q: "What cloud platforms do you specialize in?",
      a: "We're certified experts in AWS, Azure, and Google Cloud, with multi-cloud and hybrid strategies.",
    },
  ];

  // Animate numbers
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedNumbers({ cost: 40, data: 3, speed: 10 });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll testimonials
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const AnimatedNumber = ({ target, suffix = "" }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      const increment = target / 50;
      const timer = setInterval(() => {
        setCurrent((prev) => {
          if (prev < target) {
            return Math.min(prev + increment, target);
          }
          clearInterval(timer);
          return target;
        });
      }, 30);
      return () => clearInterval(timer);
    }, [target]);

    return (
      <span>
        {Math.round(current)}
        {suffix}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Cloud className="w-24 h-24 text-blue-400" />
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20"></div>
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Unlock a Faster, Smarter, and More Secure Business.
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Stop overpaying for outdated hardware and start leveraging the
              power of the cloud. We provide custom cloud solutions—from
              seamless migration to ongoing management—that accelerate
              innovation, boost security, and slash your infrastructure costs.
            </p>
            <button
              onClick={openCalendar}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center mx-auto group"
            >
              Get a Free Cloud Readiness Assessment
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Go Cloud Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Are Your On-Premises Systems Holding You Back?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Outdated infrastructure isn't just an expense; it's a liability.
              It can slow you down, expose you to risk, and limit your growth.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Go Cloud?
              </h2>
              <div className="space-y-6">
                {[
                  "Outdated on-prem systems",
                  "Downtime and data loss risks",
                  "High hardware costs",
                  "Lack of scalability",
                ].map((challenge, i) => (
                  <div
                    key={i}
                    className="flex items-center p-4 bg-red-50 rounded-lg border-l-4 border-red-400"
                  >
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-4"></div>
                    <span className="text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900">
                Our Solutions
              </h3>
              <div className="space-y-6">
                {[
                  { icon: Zap, text: "Auto-scaling architecture" },
                  { icon: Shield, text: "Reliable disaster recovery" },
                  { icon: GitBranch, text: "DevOps & CI/CD setup" },
                  { icon: Lock, text: "Cloud-native security" },
                ].map((solution, i) => (
                  <div
                    key={i}
                    className="flex items-center p-4 bg-green-50 rounded-lg border-l-4 border-green-400 transform hover:scale-102 transition-transform"
                  >
                    <solution.icon className="w-6 h-6 text-green-500 mr-4" />
                    <span className="text-gray-700 font-medium">
                      {solution.text}
                    </span>
                    <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Cloud Solutions: Built for the Future
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We design, build, and manage cloud solutions that give you a
              competitive edge.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Architecture Workflow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Cloud Migration Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven 6-step approach to seamless cloud transformation
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {workflow.map((step, i) => (
              <div key={i} className="relative group">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-2xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
                  <div className="text-2xl font-bold mb-2">{i + 1}</div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm opacity-90">{step.desc}</p>
                </div>
                {i < workflow.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-blue-400 w-8 h-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Specialized cloud solutions for every sector
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${industry.color} p-8 rounded-2xl text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
                onClick={() => setActiveTab(i)}
              >
                <industry.icon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                <p className="opacity-90">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Metrics */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Real Results for Real Businesses
            </h2>
            <p className="text-xl opacity-90">
              We don't just talk about the benefits of the cloud—we deliver
              them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold mb-4">
                <AnimatedNumber target={animatedNumbers.cost} suffix="%" />
              </div>
              <p className="text-xl opacity-90">
                Reduced infrastructure costs within 3 months of migration
              </p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold mb-4">
                <AnimatedNumber target={animatedNumbers.data} suffix="TB+" />
              </div>
              <p className="text-xl opacity-90">
                Sensitive financial data migrated with zero downtime
              </p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold mb-4">
                <AnimatedNumber target={animatedNumbers.speed} suffix="x" />
              </div>
              <p className="text-xl opacity-90">
                Faster deployment speeds with a custom DevOps and CI/CD setup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Jenisys */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Jenisys?
            </h2>
            <p className="text-xl text-gray-600">
              When you partner with us, you're choosing a team that is genuinely
              invested in your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Certified Cloud Engineers",
                desc: "AWS, Azure, GCP certified experts",
              },
              {
                icon: Users,
                title: "End-to-End Support",
                desc: "From migration to ongoing maintenance",
              },
              {
                icon: Cloud,
                title: "Multi-Cloud Expertise",
                desc: "Platform-agnostic solutions",
              },
              {
                icon: Zap,
                title: "Cloud-Native Development",
                desc: "Built for the cloud from ground up",
              },
              {
                icon: Shield,
                title: "Security-First Mindset",
                desc: "Enterprise-grade protection",
              },
              {
                icon: TrendingUp,
                title: "Proven Track Record",
                desc: "100+ successful migrations",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl hover:bg-blue-50 transition-colors group"
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Cloud Stack & Tools
            </h2>
            <p className="text-xl text-gray-600">
              Industry-leading technologies we work with
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {[
              "AWS",
              "Azure",
              "GCP",
              "Docker",
              "Kubernetes",
              "Terraform",
              "Jenkins",
              "GitHub",
            ].map((tech, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className="text-lg font-bold text-gray-700">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from our cloud transformations
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-2xl shadow-xl">
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors"
              >
                {isPaused ? (
                  <Play className="w-4 h-4" />
                ) : (
                  <Pause className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common cloud migration questions
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-blue-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.q}
                  </h3>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Elevate Your Infrastructure?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Your future is in the cloud. Let's build a strategy to get you
            there. Get expert insights and a tailored cloud roadmap for your
            business.
          </p>
          <button
            onClick={openCalendar}
            className="bg-white text-blue-600 px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center mx-auto group"
          >
            Book Your Free Cloud Consultation
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Floating CTA */}

      <Footer />
    </div>
  );
};

export default Cloudsln;

"use client";
import Footer from "../Footer";
import React, { useState, useEffect } from "react";
import { useCalendar } from "@/contexts/CalendarContext";
import Image from "next/image";
import {
  ChevronRight,
  Code,
  ShoppingCart,
  Heart,
  GraduationCap,
  Truck,
  Home,
  Plane,
  Scale,
  Film,
  Factory,
  DollarSign,
  Star,
  Users,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  Play,
} from "lucide-react";

const IndustriesPage = () => {
  const { openCalendar } = useCalendar();
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const industries = [
    {
      name: "Retail & E-Commerce",
      icon: ShoppingCart,
      problem:
        "Disjointed inventory, high cart abandonment (70% average), and slow digital growth costing millions in lost revenue.",
      solution:
        "We build responsive eCommerce platforms, automate stock tracking, and implement AI-powered product recommendations with abandoned cart recovery.",
      benefit:
        "35% increase in conversions, 50% reduction in inventory costs, 60% faster checkout process. Average ROI: 280% within 12 months.",
      metrics: "35% ↑ Conversions • 50% ↓ Inventory Costs • 280% ROI",
      costSaving:
        "Save $50K-200K annually on inventory management and lost sales recovery",
      color: "from-purple-600 to-blue-600",
    },
    {
      name: "Healthcare",
      icon: Heart,
      problem:
        "Complex patient data management, $31B annual compliance costs, and 40% administrative overhead reducing patient care time.",
      solution:
        "HIPAA-compliant patient portals, automated scheduling systems, and seamless EHR integration with AI-powered insights.",
      benefit:
        "40% improved patient satisfaction, 65% reduction in administrative tasks, 90% faster appointment scheduling. ROI: 320% in 18 months.",
      metrics: "40% ↑ Patient Satisfaction • 65% ↓ Admin Tasks • 320% ROI",
      costSaving:
        "Reduce operational costs by $100K-500K annually through automation",
      color: "from-red-500 to-pink-600",
    },
    {
      name: "Education",
      icon: GraduationCap,
      problem:
        "Outdated learning systems, 45% student disengagement, and $2K+ per student in administrative overhead annually.",
      solution:
        "Interactive learning platforms with gamification, automated grading systems, and virtual classroom solutions with real-time analytics.",
      benefit:
        "55% increase in student engagement, 70% reduction in grading time, 80% improvement in learning outcomes. ROI: 240% within 2 years.",
      metrics: "55% ↑ Engagement • 70% ↓ Grading Time • 240% ROI",
      costSaving:
        "Cut administrative costs by $75K-300K per year through automation",
      color: "from-green-500 to-teal-600",
    },
    {
      name: "Logistics & Supply Chain",
      icon: Truck,
      problem:
        "Poor shipment visibility, 25% inefficient routing, and manual tracking processes costing 15% of total logistics budget.",
      solution:
        "Real-time GPS tracking, AI-powered route optimization, automated inventory management with predictive analytics.",
      benefit:
        "30% reduction in delivery time, 45% lower fuel costs, 85% improved shipment visibility. Average ROI: 350% within 8 months.",
      metrics: "30% ↓ Delivery Time • 45% ↓ Fuel Costs • 350% ROI",
      costSaving:
        "Save $150K-800K annually on transportation and inventory costs",
      color: "from-orange-500 to-red-600",
    },
    {
      name: "Real Estate",
      icon: Home,
      problem:
        "Manual property management, 60% lead conversion loss, and $5K+ average cost per closed deal due to inefficiencies.",
      solution:
        "Automated property management platforms, intelligent CRM systems, and virtual tour technologies with lead scoring.",
      benefit:
        "75% faster deal closure, 60% improvement in lead conversion, 50% reduction in property management costs. ROI: 290% in 12 months.",
      metrics: "75% ↑ Deal Speed • 60% ↑ Lead Conversion • 290% ROI",
      costSaving:
        "Reduce operational costs by $80K-400K annually through automation",
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "Travel & Hospitality",
      icon: Plane,
      problem:
        "Complex booking processes, 25% revenue leakage, and poor customer experiences leading to 40% customer churn.",
      solution:
        "Streamlined booking platforms, dynamic pricing systems, and personalized customer experience tools with loyalty integration.",
      benefit:
        "50% increase in direct bookings, 35% revenue growth, 60% reduction in customer churn. Average ROI: 400% within 10 months.",
      metrics: "50% ↑ Direct Bookings • 35% ↑ Revenue • 400% ROI",
      costSaving:
        "Eliminate $100K-600K in third-party booking fees and retention costs",
      color: "from-cyan-500 to-blue-600",
    },
    {
      name: "Legal & Professional Services",
      icon: Scale,
      problem:
        "Document chaos costing 30% of billable time, billing errors averaging $50K annually, and poor client communication.",
      solution:
        "AI-powered document management, automated time tracking and billing, secure client portals with real-time case updates.",
      benefit:
        "80% faster document retrieval, 95% billing accuracy, 65% improvement in client satisfaction. ROI: 275% within 15 months.",
      metrics: "80% ↑ Document Speed • 95% ↑ Billing Accuracy • 275% ROI",
      costSaving:
        "Recover $75K-350K annually in lost billable hours and billing errors",
      color: "from-indigo-500 to-purple-600",
    },
    {
      name: "Media & Entertainment",
      icon: Film,
      problem:
        "Content distribution inefficiencies, 35% audience drop-off, and monetization gaps losing 40% of potential revenue.",
      solution:
        "Multi-platform content management, audience engagement analytics, and automated monetization tools with subscription management.",
      benefit:
        "70% increase in audience retention, 55% growth in subscription revenue, 45% more efficient content distribution. ROI: 320% in 14 months.",
      metrics: "70% ↑ Retention • 55% ↑ Revenue • 320% ROI",
      costSaving:
        "Maximize revenue by $200K-1M+ annually through better monetization",
      color: "from-pink-500 to-red-600",
    },
    {
      name: "Manufacturing",
      icon: Factory,
      problem:
        "Unplanned downtime costing $50K per hour, 20% quality defects, and supply chain disruptions adding 25% to production costs.",
      solution:
        "IoT-enabled predictive maintenance, real-time quality monitoring, and automated supply chain optimization with AI forecasting.",
      benefit:
        "85% reduction in unplanned downtime, 90% fewer quality defects, 40% lower production costs. ROI: 450% within 6 months.",
      metrics: "85% ↓ Downtime • 90% ↓ Defects • 450% ROI",
      costSaving:
        "Prevent $500K-2M+ in downtime losses and quality issues annually",
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "Finance & Insurance",
      icon: DollarSign,
      problem:
        "Regulatory compliance costing $10M+ annually for large firms, manual processes, and security breaches averaging $4.5M per incident.",
      solution:
        "Automated compliance monitoring, secure transaction processing, AI-powered risk assessment with real-time fraud detection.",
      benefit:
        "90% reduction in compliance costs, 99.9% transaction security, 75% faster risk assessment. ROI: 380% within 12 months.",
      metrics: "90% ↓ Compliance Costs • 99.9% Security • 380% ROI",
      costSaving:
        "Save $1M-10M+ annually on compliance and prevent costly security breaches",
      color: "from-emerald-500 to-green-600",
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "60% Cost Reduction",
      description:
        "Save $100K-500K annually compared to traditional agencies through our optimized processes, offshore talent, and efficient project management.",
      stat: "Average client saves $300K/year",
    },
    {
      icon: Users,
      title: "Expert-Led Teams",
      description:
        "Senior developers with 8+ years experience leading small, focused teams. No junior developers on critical path - guaranteed results.",
      stat: "98% project success rate",
    },
    {
      icon: Zap,
      title: "3x Faster ROI",
      description:
        "Our solutions pay for themselves within 6-12 months through automation, efficiency gains, and revenue optimization.",
      stat: "Average 340% ROI in year 1",
    },
    {
      icon: CheckCircle,
      title: "Risk-Free Guarantee",
      description:
        "If we don't deliver measurable results within 90 days, we'll work for free until we do. Your success is our reputation.",
      stat: "100% client satisfaction",
    },
  ];

  const testimonials = [
    {
      company: "TechStart Inc.",
      quote:
        "Jenisys saved us $180K in development costs and helped us launch 3 months ahead of schedule. Our conversion rate increased 45% in the first quarter.",
      author: "Sarah Johnson, CTO",
      industry: "E-Commerce",
      roi: "320% ROI in 8 months",
    },
    {
      company: "MedFlow Solutions",
      quote:
        "Their healthcare platform reduced our admin costs by $250K annually while improving patient satisfaction by 60%. Best investment we've made.",
      author: "Dr. Michael Chen, Founder",
      industry: "Healthcare",
      roi: "280% cost savings year 1",
    },
    {
      company: "EduNext Platform",
      quote:
        "The equity partnership allowed us to build our MVP for zero upfront cost. We've since raised $2M Series A - 40% higher valuation thanks to the tech.",
      author: "Lisa Rodriguez, CEO",
      industry: "Education",
      roi: "Saved $150K in dev costs",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-gray-100 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
              Trusted by 100+ Companies Worldwide
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Industries We{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Serve
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              From established enterprises to ambitious startups — we build
              tailored solutions that solve real-world industry challenges while
              driving cost efficiency and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Explore Our Solutions
              </button>
              <button className="flex items-center bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold border border-gray-200 hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                <Play className="w-5 h-5 mr-2" />
                Watch Success Stories
              </button>
            </div>
          </div>
        </div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
      </section>

      {/* Industries Tab Section */}
      <section className="py-20 bg-gray-50" id="industries" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Deep Industry Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand your industry's unique challenges and build
              solutions that address them directly.
            </p>
          </div>

          {/* Industry Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      activeTab === index
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {industry.name}
                  </button>
                );
              })}
            </div>

            {/* Active Industry Content */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      The Problem
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {industries[activeTab].problem}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Code className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Jenisys Solution
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {industries[activeTab].solution}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Measurable Results
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {industries[activeTab].benefit}
                  </p>
                </div>
              </div>

              {/* ROI Highlight Section */}
              <div className="border-t border-gray-200 pt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <DollarSign className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-green-800">
                        Key Metrics
                      </h4>
                    </div>
                    <p className="text-green-700 font-semibold text-lg">
                      {industries[activeTab].metrics}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-purple-800">
                        Cost Savings
                      </h4>
                    </div>
                    <p className="text-purple-700 font-semibold">
                      {industries[activeTab].costSaving}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Jenisys Section */}
      <section className="py-20 bg-white" id="why-jenisys" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Jenisys?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver enterprise-quality solutions at startup-friendly
              prices, with transparency and expertise you can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-2 rounded-full">
                    <span className="text-green-700 font-semibold text-sm">
                      {benefit.stat}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Testimonials */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
              What Our Clients Say
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="mb-3">
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.company} • {testimonial.industry}
                    </p>
                  </div>
                  <div className="bg-green-100 px-3 py-2 rounded-full inline-block">
                    <span className="text-green-700 font-semibold text-sm">
                      {testimonial.roi}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Startups Section */}
      <section
        className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white"
        id="startups"
        data-animate
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              🌱 We Grow When You Grow
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Empowering Startups Through Partnership
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">
              Are you a startup with a strong vision but limited funding?
              Jenisys partners with select early-stage companies by offering
              low-cost or even zero-cost services in exchange for equity or
              long-term collaboration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                What We Offer Startups:
              </h3>
              <div className="space-y-4 mb-8">
                {[
                  "MVP development at 70% reduced rates - save $100K-300K",
                  "Equity-based partnerships for qualifying startups (0% upfront cost)",
                  "Technical mentorship worth $50K+ in consulting value",
                  "Scalable architecture that prevents costly rewrites later",
                  "Access to our $2M+ investor network and partnership opportunities",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 mt-0.5 text-green-300" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold mb-2 text-green-300">
                  💰 Average Startup Savings
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    Development Costs:{" "}
                    <span className="font-bold">$250K saved</span>
                  </div>
                  <div>
                    Time to Market:{" "}
                    <span className="font-bold">4 months faster</span>
                  </div>
                  <div>
                    Technical Debt:{" "}
                    <span className="font-bold">$500K prevented</span>
                  </div>
                  <div>
                    Investor Readiness:{" "}
                    <span className="font-bold">40% higher valuation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-4">🚀 Success Story</h4>
              <p className="opacity-90 mb-4">
                "We started with just an idea and $5,000. Jenisys believed in
                our vision and built our platform through equity partnership -
                saving us $200K upfront. Today, we've raised $2M Series A with
                40% higher valuation thanks to our solid tech foundation."
              </p>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Alex Thompson</p>
                  <p className="text-sm opacity-75">Founder, CloudSync</p>
                </div>
              </div>
              <div className="bg-green-400/20 px-4 py-2 rounded-full inline-block">
                <span className="text-green-200 font-semibold">
                  $2M Series A Raised • 40% Higher Valuation
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Apply for Partnership
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's talk about how Jenisys can help your business cut costs,
            automate workflows, and scale faster than ever.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              onClick={openCalendar}
              className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
      {/* Social Media Footer */}
      <Footer />
    </div>
  );
};

export default IndustriesPage;

"use client";
import Footer from "../Footer";
import { useCalendar } from "@/contexts/CalendarContext";
import React, { useState, useEffect } from "react";
import {
  Shield,
  Clock,
  Zap,
  Lock,
  Eye,
  RefreshCw,
  Database,
  Puzzle,
  CheckCircle,
  Star,
  ArrowRight,
  ChevronDown,
  Phone,
  MessageCircle,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";

import { Mail, MapPin, ExternalLink, Calendar, Bot } from "lucide-react";

const MaintenanceSupport = () => {
  const { openCalendar } = useCalendar();
  const [selectedPlan, setSelectedPlan] = useState("standard");
  const [openFaq, setOpenFaq] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for scroll animations
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

  const services = [
    {
      icon: Clock,
      title: "24/7 Technical Support",
      desc: "Our experts are available around the clock to assist you whenever you need it.",
    },
    {
      icon: Zap,
      title: "Bug Fixes & Troubleshooting",
      desc: "Quick resolution of issues to minimize downtime and disruption.",
    },
    {
      icon: RefreshCw,
      title: "Performance Optimization",
      desc: "We continuously monitor and tune your systems for peak performance and speed.",
    },
    {
      icon: Lock,
      title: "Security Patching",
      desc: "We regularly apply security updates and run vulnerability assessments to protect your data.",
    },
    {
      icon: Eye,
      title: "System Monitoring",
      desc: "Our proactive monitoring with real-time alerts ensures we know about issues the moment they arise.",
    },
    {
      icon: RefreshCw,
      title: "Software Updates",
      desc: "We keep your platforms current with the latest features and security fixes.",
    },
    {
      icon: Database,
      title: "Backup & Recovery",
      desc: "We implement automated backups and disaster recovery plans to safeguard your business.",
    },
    {
      icon: Puzzle,
      title: "Integration Support",
      desc: "Seamless third-party software integration and maintenance.",
    },
  ];

  const plans = {
    enterprise: {
      name: "Enterprise",
      price: "Custom",
      responseTime: "1 hour",
      supportHours: "24/7",
      sla: "99.9% uptime",
      features: [
        "Dedicated manager",
        "Real-time monitoring",
        "Custom SLA",
        "Emergency hotline",
        "Quarterly business reviews",
      ],
    },
  };

  const testimonials = [
    {
      quote:
        "Jenisys saved us during a critical system failure at 2 AM. Their response was immediate and professional.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Inc",
      avatar: "SC",
    },
    {
      quote:
        "Three years of partnership with Jenisys. Zero major incidents. Their proactive approach is unmatched.",
      author: "Michael Rodriguez",
      role: "IT Director",
      company: "DataSync Solutions",
      avatar: "MR",
    },
  ];

  const faqs = [
    {
      question: "Do you offer support for third-party applications?",
      answer:
        "Yes, our team provides comprehensive support for most third-party integrations and can help troubleshoot compatibility issues.",
    },
    {
      question: "What is your average response time?",
      answer:
        "Response times vary by plan: Basic (24 hours), Standard (4 hours), Enterprise (1 hour). Emergency issues are prioritized across all plans.",
    },
    {
      question: "Is support included after development?",
      answer:
        "Yes! We provide 6 months to 1 year of complimentary maintenance based on your service type and project complexity. This includes bug fixes, security updates, performance monitoring, and technical support. After this period, we'll discuss a customized paid maintenance plan.",
    },
    {
      question: "Can you customize a support plan for our needs?",
      answer:
        "Absolutely! We work with you to create tailored support packages that match your specific requirements and budget.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-[#0F172A]/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#4F46E5]/20 rounded-full border border-purple-400/30">
              <Shield className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">
                99.9% Uptime Guarantee
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              We Don't Just Build.
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                We Ensure Your Business Never Stops.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              You've invested in great software. Now, protect that investment.
              Our round-the-clock support and proactive maintenance keep your
              systems running flawlessly, so you can focus on growing your
              business without worrying about downtime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={openCalendar}
                className="px-8 py-4 bg-gradient-to-r from-[#4F46E5] to-[#4F46E5] hover:from-purple-700 hover:to-blue-700 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Start a Support Plan
              </button>
              <button
                onClick={openCalendar}
                className="px-8 py-4 border-2 border-purple-400 hover:bg-purple-400/10 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Maintenance Matters */}
      <section id="why-matters" data-animate className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Proper Support Isn't Optional
            </h2>
            <p className="text-xl text-gray-600">
              Don't let technical issues and security risks derail your business
              growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problems */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-600 mb-6">
                The Risk of Waiting:
              </h3>
              <div className="space-y-4">
                {[
                  "Revenue Loss: Every minute of system downtime costs you money.",
                  "Security Threats: Outdated software and unpatched vulnerabilities are an open invitation for a data breach.",
                  "Productivity Dips: Manual troubleshooting and frequent bugs slow your team down.",
                ].map((problem, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-600 mb-6">
                The Jenisys Advantage:
              </h3>
              <div className="space-y-4">
                {[
                  "Proactive Monitoring: We catch issues before they impact your business.",
                  "Guaranteed Reliability: We ensure your systems are always up-to-date and secure.",
                  "Peace of Mind: You get a dedicated team of experts ready to help 24/7.",
                ].map((solution, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                    <p className="text-gray-700">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" data-animate className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Cover
            </h2>
            <p className="text-xl text-gray-600">
              We provide comprehensive support for all your technical needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-purple-500 ${
                  isVisible["services"] ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <service.icon className="h-12 w-12 text-[#7C3AED] mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Maintenance Period */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Free Maintenance Period
            </h2>
            <p className="text-xl text-gray-600">
              Every project we build includes complimentary maintenance and
              support for a period of 6 months to 1 year. This ensures a
              seamless transition and gives you time to fully experience the
              value we provide.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-purple-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full border border-green-300 mb-6">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                  <span className="text-sm font-semibold text-green-800">
                    Included with Every Project
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  6 Months to 1 Year Free
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Based on your service type and project complexity, we provide
                  comprehensive maintenance at no additional cost. After the
                  free period, we'll discuss a customized paid maintenance plan
                  that fits your ongoing needs.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Bug fixes and patches
                      </p>
                      <p className="text-gray-600 text-sm">
                        Immediate resolution of any issues that arise
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Security updates
                      </p>
                      <p className="text-gray-600 text-sm">
                        Regular security patches and vulnerability fixes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Performance monitoring
                      </p>
                      <p className="text-gray-600 text-sm">
                        Continuous monitoring to ensure optimal performance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Technical support
                      </p>
                      <p className="text-gray-600 text-sm">
                        Direct access to our development team
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-[#4F46E5] to-[#4F46E5] rounded-2xl p-8 text-white">
                  <h4 className="text-2xl font-bold mb-4">
                    What Happens After?
                  </h4>
                  <p className="text-purple-100 mb-6">
                    As your free maintenance period concludes, we'll work with
                    you to create a tailored support plan that matches your
                    business needs and budget.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">
                        Custom pricing based on your requirements
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">
                        Flexible support levels and response times
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">
                        No surprises - transparent pricing discussion
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" data-animate className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Long-term Support Plans
            </h2>
            <p className="text-xl text-gray-600">
              After your free maintenance period, choose enterprise-level
              support
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto">
            {Object.entries(plans).map(([key, plan]) => (
              <div
                key={key}
                className="relative bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-500 scale-105"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#4F46E5] to-[#4F46E5] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Premium Support
                  </span>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-[#7C3AED] mb-2">
                    {plan.price}
                  </div>
                  {plan.price !== "Custom" && (
                    <div className="text-gray-500">/month</div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Response time:</span>
                    <span className="font-semibold">{plan.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Support hours:</span>
                    <span className="font-semibold">{plan.supportHours}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">SLA:</span>
                    <span className="font-semibold">{plan.sla}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact">
                  <button className="w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-[#4F46E5] to-[#4F46E5] text-white hover:shadow-lg transform hover:scale-105">
                    Contact Us
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Process */}
      <section
        id="process"
        data-animate
        className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Support Process</h2>
            <p className="text-xl text-blue-100">
              We make support simple, efficient, and reliable.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Onboarding & Audit",
                desc: "We perform a comprehensive assessment to understand your systems and set up our monitoring",
              },
              {
                step: "02",
                title: "24/7 Monitoring",
                desc: "We continuously monitor your systems with real-time alerts",
              },
              {
                step: "03",
                title: "Ongoing Maintenance",
                desc: "We handle regular updates, patches, and optimizations",
              },
              {
                step: "04",
                title: "Emergency Response",
                desc: "When a critical issue arises, we take immediate action to resolve it",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
                {idx < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-[#7C3AED]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" data-animate className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Jenisys */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Jenisys
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Lightning Fast Response",
                desc: "Average response time under 15 minutes for critical issues",
              },
              {
                title: "Expert Team",
                desc: "Certified professionals, not chatbots or outsourced support",
              },
              {
                title: "Proactive Approach",
                desc: "We prevent problems before they impact your business",
              },
              {
                title: "Industry Expertise",
                desc: "Deep knowledge across various sectors and technologies",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#4F46E5] to-[#4F46E5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#4F46E5] to-[#4F46E5] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Don't wait for problems to occur
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Get proactive support that keeps your business running smoothly and
            securely.
          </p>
          <button
            onClick={openCalendar}
            className="px-8 py-4 bg-white text-[#7C3AED] font-semibold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Book a Free Maintenance Assessment
          </button>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md border border-gray-200"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <button className="w-full bg-gradient-to-r from-[#4F46E5] to-[#4F46E5] text-white py-3 rounded-lg font-semibold shadow-lg">
          Get Support Now
        </button>
      </div>
      <Footer />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MaintenanceSupport;

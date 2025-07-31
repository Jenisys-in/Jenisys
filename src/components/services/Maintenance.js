"use client";

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
      desc: "Round-the-clock assistance from our expert team whenever you need it.",
    },
    {
      icon: Zap,
      title: "Bug Fixes & Troubleshooting",
      desc: "Quick resolution of issues to minimize downtime and disruption.",
    },
    {
      icon: RefreshCw,
      title: "Performance Optimization",
      desc: "Continuous monitoring and tuning for peak system performance.",
    },
    {
      icon: Lock,
      title: "Security Patching",
      desc: "Regular security updates and vulnerability assessments.",
    },
    {
      icon: Eye,
      title: "System Monitoring",
      desc: "Proactive monitoring with real-time alerts and notifications.",
    },
    {
      icon: RefreshCw,
      title: "Software Updates",
      desc: "Keep your platforms current with the latest features and fixes.",
    },
    {
      icon: Database,
      title: "Backup & Recovery",
      desc: "Automated backups and disaster recovery planning.",
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
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/30">
              <Shield className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">
                99.9% Uptime Guarantee
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              We Don't Just Build.
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                We Maintain. We Support.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Round-the-clock technical support and proactive maintenance to
              keep your business running smoothly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Start a Support Plan
              </button>
              <button className="px-8 py-4 border-2 border-purple-400 hover:bg-purple-400/10 rounded-lg font-semibold text-lg transition-all duration-300">
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
              Why Maintenance & Support Matters
            </h2>
            <p className="text-xl text-gray-600">
              Don't let technical issues slow down your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problems */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-600 mb-6">
                Without Proper Support:
              </h3>
              <div className="space-y-4">
                {[
                  "System downtimes cost revenue",
                  "Outdated tech creates vulnerabilities",
                  "Security loopholes expose data",
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
                With Jenisys Support:
              </h3>
              <div className="space-y-4">
                {[
                  "24/7 proactive monitoring",
                  "Regular updates & patches",
                  "Dedicated support team",
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
              Comprehensive support across all your technical needs
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
                <service.icon className="h-12 w-12 text-purple-600 mb-4" />
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
              Free Maintenance Included
            </h2>
            <p className="text-xl text-gray-600">
              Every Jenisys project comes with complimentary maintenance
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
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
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
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Premium Support
                  </span>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
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
                  <button className="w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg transform hover:scale-105">
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
              Simple, efficient, and reliable
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Onboarding & Audit",
                desc: "Comprehensive system assessment and setup",
              },
              {
                step: "02",
                title: "24/7 Monitoring",
                desc: "Continuous monitoring with real-time alerts",
              },
              {
                step: "03",
                title: "Ongoing Maintenance",
                desc: "Regular updates, patches, and optimizations",
              },
              {
                step: "04",
                title: "Emergency Response",
                desc: "Immediate action when issues arise",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
                {idx < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-purple-400" />
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
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Ensure 24/7 Stability with Jenisys
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Don't wait for problems to occur. Get proactive support that keeps
            your business running smoothly.
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 font-semibold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
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
        <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold shadow-lg">
          Get Support Now
        </button>
      </div>
      <footer className=" bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/img/Jenisys Hero.png"
                  alt="Jenisys"
                  width={100}
                  height={40}
                  className="h-10 w-auto mb-4 brightness-0 invert"
                />
                <h3 className="text-xl font-bold text-white mb-3">
                  Advancing Excellence Beyond Cost
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Delivering innovative solutions that drive business growth and
                  operational excellence through cutting-edge technology and
                  strategic consulting.
                </p>
              </div>

              {/* CTA Button */}
              <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                Get Started Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Services", href: "#services" },
                  { name: "About Us", href: "#about" },
                  { name: "Blog", href: "#blog" },
                  { name: "Careers", href: "#careers" },
                  { name: "Case Studies", href: "#case-studies" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Raja Ram mohon roy
                      <br />
                      Sarani
                      <br />
                      Serampore, West Bengal 712203
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <a
                    href="tel:+911234567890"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +91 12345 67890
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <a
                    href="mailto:info@jenisys.in"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    info@jenisys.in
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media & Newsletter */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Stay Connected
              </h4>

              {/* Social Media Icons */}
              <div className="flex gap-4 mb-6">
                {[
                  {
                    name: "Instagram",
                    href: "https://www.instagram.com/jenisys.in/",
                    icon: "/img/mdi_instagram.png",
                  },
                  {
                    name: "LinkedIn",
                    href: "https://www.linkedin.com/company/jenisys",
                    icon: "/img/linkedIn.png",
                  },
                  {
                    name: "Facebook",
                    href: "https://www.facebook.com",
                    icon: "/img/facebook.png",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gray-700 hover:bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="w-6 h-6 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
                    />
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div>
                <p className="text-gray-300 text-sm mb-3">
                  Subscribe to our newsletter
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-purple-500 focus:outline-none text-sm"
                  />
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © 2025 Jenisys. All rights reserved.
              </div>

              {/* Legal Links */}
              <div className="flex gap-6 text-sm">
                {[{ name: "Privacy Policy", href: "/Privacy-Policy" }].map(
                  (link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>

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

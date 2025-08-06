"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  Shield,
  Cloud,
  Zap,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  TrendingUp,
  Award,
  Target,
  Search,
  ClipboardList,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

import Image from "next/image";

import { ExternalLink, Calendar, Bot } from "lucide-react";

const ITConsultingPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [selectedService, setSelectedService] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
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
      { threshold: 0.1, rootMargin: "50px" }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "IT Strategy & Planning",
      description: "Comprehensive roadmaps aligned with your business goals",
      features: [
        "Technology Assessment",
        "Digital Roadmapping",
        "Budget Planning",
      ],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Migration",
      description: "Seamless transition to cloud infrastructure",
      features: [
        "Cloud Architecture",
        "Migration Strategy",
        "Cost Optimization",
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security audits and implementation",
      features: ["Security Assessment", "Compliance", "Threat Monitoring"],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Modernize operations with cutting-edge technology",
      features: ["Process Automation", "Legacy Modernization", "Integration"],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Infrastructure Assessment",
      description: "Optimize your current IT infrastructure",
      features: [
        "Performance Analysis",
        "Scalability Planning",
        "Cost Reduction",
      ],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Legacy System Modernization",
      description: "Upgrade outdated systems for better performance",
      features: ["System Analysis", "Migration Planning", "Training & Support"],
    },
  ];

  const processSteps = [
    {
      title: "Discovery",
      description: "We analyze your current IT landscape and business needs",
      icon: <Search className="w-16 h-16" />,
    },
    {
      title: "Strategy Planning",
      description:
        "Develop a customized roadmap for your digital transformation",
      icon: <ClipboardList className="w-16 h-16" />,
    },
    {
      title: "Implementation",
      description:
        "Execute the plan with minimal disruption to your operations",
      icon: <Zap className="w-16 h-16" />,
    },
    {
      title: "Optimization",
      description: "Fine-tune systems for maximum performance and efficiency",
      icon: <Target className="w-16 h-16" />,
    },
    {
      title: "Ongoing Support",
      description: "Continuous monitoring and support to ensure success",
      icon: <Shield className="w-16 h-16" />,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CTO",
      company: "TechFlow Inc.",
      quote:
        "Jenisys transformed our IT infrastructure completely. Our efficiency increased by 300% in just 6 months.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      title: "CEO",
      company: "DataCore Solutions",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote:
        "The cybersecurity audit revealed vulnerabilities we never knew existed. Their solutions saved us from potential disasters.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      title: "Operations Director",
      company: "GrowthLab",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote:
        "Cloud migration seemed impossible until Jenisys made it seamless. Zero downtime and 40% cost reduction.",
      rating: 5,
    },
  ];

  const metrics = [
    { value: "300+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "40%", label: "Average Cost Reduction" },
    { value: "24/7", label: "Support Available" },
  ];

  const faqs = [
    {
      question: "How is this different from a software agency?",
      answer:
        "While software agencies focus on building applications, we provide strategic IT consulting that encompasses your entire technology ecosystem - from infrastructure to security to digital transformation strategy.",
    },
    {
      question: "Is this suitable for small businesses?",
      answer:
        "Absolutely! We work with businesses of all sizes, from startups to enterprises. Our solutions are scalable and tailored to your specific needs and budget.",
    },
    {
      question: "How soon can I see results?",
      answer:
        "Initial improvements can be seen within 2-4 weeks of implementation. Full transformation benefits typically materialize within 3-6 months, depending on project scope.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer comprehensive ongoing support packages including monitoring, maintenance, and strategic guidance to ensure your IT systems continue to perform optimally.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/25 to-blue-400/25 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        />
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-32 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div
              className={`transition-all duration-1500 ease-out ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              id="hero"
              data-animate
            >
              <div className="mb-8">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-purple-700 font-semibold mb-8 backdrop-blur-sm border border-purple-200/50 hover:scale-105 transition-all duration-300">
                  <Star className="w-5 h-5 mr-2" />
                  Transform Your Business Today
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
                Expert IT Consulting
                <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                  That Delivers Results
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Strategic, scalable, and personalized IT solutions that
                accelerate your business growth and optimize operations with
                cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Get Your Free Consultation
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </button>
                <button className="group border-2 border-purple-300 text-purple-700 px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  <span className="flex items-center justify-center">
                    View Our Process
                    <Zap className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ease-out ${
                  isVisible.metrics
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-20 scale-95"
                } group hover:scale-110 cursor-pointer`}
                style={{ transitionDelay: `${index * 200}ms` }}
                id="metrics"
                data-animate
              >
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-purple-100/50 hover:border-purple-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    {metric.value}
                  </div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points & Solutions */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Stop Struggling with
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  IT Challenges
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                We solve the problems that hold your business back from reaching
                its full potential
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div
                className={`transition-all duration-1500 ease-out ${
                  isVisible.problems
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
                id="problems"
                data-animate
              >
                <h3 className="text-3xl font-bold text-red-500 mb-8 flex items-center">
                  <AlertTriangle className="w-8 h-8 mr-4" />
                  Common Problems
                </h3>
                <div className="space-y-6">
                  <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-sm border-l-4 border-red-500 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 hover:-translate-y-2">
                    <h4 className="font-bold text-gray-900 mb-3 text-xl group-hover:text-red-600 transition-colors">
                      Outdated Infrastructure
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Legacy systems slow down operations and limit growth
                      potential, creating bottlenecks that frustrate teams
                    </p>
                  </div>
                  <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-sm border-l-4 border-red-500 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 hover:-translate-y-2">
                    <h4 className="font-bold text-gray-900 mb-3 text-xl group-hover:text-red-600 transition-colors">
                      Security Vulnerabilities
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Inadequate cybersecurity exposes your business to costly
                      breaches and compliance issues
                    </p>
                  </div>
                  <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-sm border-l-4 border-red-500 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 hover:-translate-y-2">
                    <h4 className="font-bold text-gray-900 mb-3 text-xl group-hover:text-red-600 transition-colors">
                      Inefficient Processes
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Manual workflows waste time and increase human error,
                      reducing overall productivity
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`transition-all duration-1500 ease-out ${
                  isVisible.solutions
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                }`}
                style={{ transitionDelay: "300ms" }}
                id="solutions"
                data-animate
              >
                <h3 className="text-3xl font-bold text-purple-600 mb-8 flex items-center">
                  <CheckCircle2 className="w-8 h-8 mr-4" />
                  Our Solutions
                </h3>
                <div className="space-y-6">
                  <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-sm border-l-4 border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2">
                    <h4 className="font-bold text-gray-900 mb-3 text-xl group-hover:text-purple-600 transition-colors">
                      Modern Infrastructure
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Scalable, cloud-ready systems that grow with your business
                      and adapt to changing needs
                    </p>
                  </div>
                  <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-sm border-l-4 border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2">
                    <h4 className="font-bold text-gray-900 mb-3 text-xl group-hover:text-purple-600 transition-colors">
                      Robust Security
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Comprehensive cybersecurity strategy and implementation to
                      protect your valuable assets
                    </p>
                  </div>
                  <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-sm border-l-4 border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2">
                    <h4 className="font-bold text-gray-900 mb-3 text-xl group-hover:text-purple-600 transition-colors">
                      Process Automation
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Streamlined workflows that boost productivity and reduce
                      errors through intelligent automation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive IT Consulting Services
              </h2>
              <p className="text-xl text-gray-600">
                End-to-end solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group bg-white/70 backdrop-blur-sm rounded-3xl border border-purple-100/50 p-10 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:scale-105 ${
                    selectedService === index
                      ? "ring-2 ring-purple-500 shadow-2xl shadow-purple-500/20 scale-105"
                      : ""
                  } ${
                    isVisible.services
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  id="services"
                  data-animate
                  onClick={() =>
                    setSelectedService(selectedService === index ? null : index)
                  }
                >
                  <div className="text-purple-600 mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div
                    className={`transition-all duration-300 ${
                      selectedService === index
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="border-t border-gray-200 pt-4">
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-600"
                          >
                            <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center text-purple-600 font-semibold mt-6 group-hover:translate-x-3 transition-all duration-300">
                    Learn More{" "}
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Our Proven
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to digital transformation that delivers
                measurable results
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-200 via-blue-200 to-purple-200 rounded-full"></div>

              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-20 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } transition-all duration-1000 ease-out ${
                    isVisible.process
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${index * 300}ms` }}
                  id="process"
                  data-animate
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12 md:text-left"
                    }`}
                  >
                    <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:-translate-y-3 border border-purple-100/50">
                      <div className="text-purple-600 mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                        {step.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full items-center justify-center text-white font-bold text-xl z-10 shadow-lg hover:scale-125 transition-all duration-300 cursor-pointer">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                What Our Clients
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Say About Us
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Real results from real businesses who trusted us with their
                digital transformation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`group bg-white/70 backdrop-blur-sm rounded-3xl border border-purple-100/50 p-10 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-700 transform hover:-translate-y-5 hover:scale-105 ${
                    isVisible.testimonials
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  id="testimonials"
                  data-animate
                >
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current group-hover:scale-125 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-8 italic text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    {testimonial.image && (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full mr-4 object-cover ring-2 ring-purple-200 group-hover:ring-purple-400 transition-all duration-300"
                      />
                    )}
                    <div>
                      <div className="font-bold text-gray-900 text-lg group-hover:text-purple-600 transition-colors">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600">
                        {testimonial.title}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Jenisys */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Jenisys?
              </h2>
              <p className="text-xl text-gray-600">
                What makes us different from typical IT consultants
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className={`transition-all duration-1000 ${
                  isVisible.why
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                id="why"
                data-animate
              >
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Deep Domain Expertise
                      </h3>
                      <p className="text-gray-600">
                        15+ years of experience across multiple industries and
                        technologies
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        End-to-End Service
                      </h3>
                      <p className="text-gray-600">
                        From strategy to implementation to ongoing support - we
                        handle it all
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Transparent Pricing
                      </h3>
                      <p className="text-gray-600">
                        No hidden costs or surprise fees - clear pricing from
                        day one
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Agile Methodology
                      </h3>
                      <p className="text-gray-600">
                        Flexible, iterative approach that adapts to your
                        changing needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-300 ${
                  isVisible.comparison
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
                id="comparison"
                data-animate
              >
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Jenisys vs Others
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-700">Strategic Focus</span>
                      <div className="flex space-x-4">
                        <span className="text-green-600 font-semibold">
                          ✓ Yes
                        </span>
                        <span className="text-red-500">✗ Rarely</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-700">Industry Expertise</span>
                      <div className="flex space-x-4">
                        <span className="text-green-600 font-semibold">
                          ✓ Deep
                        </span>
                        <span className="text-red-500">✗ Generic</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-700">Ongoing Support</span>
                      <div className="flex space-x-4">
                        <span className="text-green-600 font-semibold">
                          ✓ 24/7
                        </span>
                        <span className="text-red-500">✗ Limited</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Ready to Transform Your
              <span className="block text-transparent bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text">
                IT Infrastructure?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get a free consultation and discover how we can accelerate your
              business growth with strategic IT solutions that deliver real
              results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-white text-purple-600 px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                <span className="flex items-center justify-center">
                  Book a Strategy Call
                  <Phone className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
              <button className="group border-2 border-white text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center justify-center">
                  Get a Custom IT Plan
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Frequently Asked
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about our services and approach
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`group bg-white/70 backdrop-blur-sm rounded-3xl border border-purple-100/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 ${
                    isVisible.faq
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  id="faq"
                  data-animate
                >
                  <button
                    className="w-full p-8 text-left flex items-center justify-between hover:bg-purple-50/50 transition-all duration-300 rounded-3xl"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-bold text-gray-900 text-lg md:text-xl group-hover:text-purple-600 transition-colors">
                      {faq.question}
                    </span>
                    <ChevronRight
                      className={`w-6 h-6 text-purple-500 transition-all duration-300 ${
                        openFaq === index
                          ? "rotate-90 scale-125"
                          : "group-hover:scale-110"
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-500 ease-out overflow-hidden ${
                      openFaq === index ? "max-h-60 pb-8" : "max-h-0"
                    }`}
                  >
                    <div className="px-8">
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
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
    </div>
  );
};

export default ITConsultingPage;

"use client";
import Footer from "../Footer";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  ArrowRight,
  Code2,
  Zap,
  Shield,
  CheckCircle,
  Star,
  ChevronRight,
  Calendar,
  X,
  TrendingUp,
  Database,
  Globe,
  Lock,
  Layers,
  Users,
} from "lucide-react";

import Image from "next/image";

import { Mail, Phone, MapPin, ExternalLink, Bot } from "lucide-react";

const Jenisyssftdev = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Simplified Intersection Observer for scroll animations
  useEffect(() => {
    if (!isClient) return;

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
      { threshold: 0.1, rootMargin: "50px" }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isClient]);

  // Auto-advance process steps with cleanup
  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, [isClient]);

  // Memoized data to prevent unnecessary re-renders
  const processSteps = useMemo(
    () => [
      {
        title: "Discovery & Strategy",
        desc: "Deep dive into your business requirements and technical constraints",
        icon: <Database className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Architecture Design",
        desc: "Scalable system design and technology stack selection",
        icon: <Layers className="w-8 h-8" />,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Agile Development",
        desc: "Iterative development with continuous feedback loops",
        icon: <Code2 className="w-8 h-8" />,
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Quality Assurance",
        desc: "Comprehensive testing and performance optimization",
        icon: <Shield className="w-8 h-8" />,
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Deployment & Monitoring",
        desc: "Cloud deployment with real-time monitoring and support",
        icon: <Globe className="w-8 h-8" />,
        color: "from-indigo-500 to-blue-500",
      },
    ],
    []
  );

  const caseStudies = useMemo(
    () => [
      {
        company: "TechFlow Industries",
        industry: "Manufacturing",
        challenge:
          "Legacy inventory system causing 40% operational delays and $500K annual losses",
        solution:
          "AI-powered supply chain management platform with predictive analytics",
        outcome: "65% faster processing, $1.2M cost savings, 99.9% uptime",
        metrics: { efficiency: "+65%", savings: "$1.2M", uptime: "99.9%" },
        tech: ["React", "Node.js", "MongoDB", "AWS"],
        gradient: "from-blue-600 to-purple-600",
      },
      {
        company: "RetailHub Network",
        industry: "Retail",
        challenge:
          "Fragmented systems across 50+ locations with no unified visibility",
        solution:
          "Microservices architecture with real-time dashboard and mobile apps",
        outcome:
          "80% improved decision-making speed, 45% reduction in operational costs",
        metrics: { speed: "+80%", cost: "-45%", locations: "50+" },
        tech: ["Next.js", "PostgreSQL", "Redis", "Docker"],
        gradient: "from-green-600 to-blue-600",
      },
      {
        company: "FinanceCore Startup",
        industry: "FinTech",
        challenge:
          "Needed enterprise-grade MVP for Series A fundraising in 4 months",
        solution:
          "Rapid prototyping with scalable architecture and regulatory compliance",
        outcome: "Secured $5M Series A, acquired 10K+ users in first quarter",
        metrics: { funding: "$5M", users: "10K+", time: "4mo" },
        tech: ["TypeScript", "Prisma", "Stripe", "Auth0"],
        gradient: "from-purple-600 to-pink-600",
      },
    ],
    []
  );

  const features = useMemo(
    () => [
      {
        title: "Custom Business Logic",
        icon: <TrendingUp className="w-6 h-6" />,
        desc: "Tailored algorithms that match your unique business processes",
        category: "Development",
      },
      {
        title: "Enterprise Security",
        icon: <Lock className="w-6 h-6" />,
        desc: "GDPR, SOC2, HIPAA compliance with end-to-end encryption",
        category: "Security",
      },
      {
        title: "Seamless Integrations",
        icon: <Globe className="w-6 h-6" />,
        desc: "Connect with CRMs, ERPs, payment gateways, and third-party APIs",
        category: "Integration",
      },
      {
        title: "Role-Based Access",
        icon: <Users className="w-6 h-6" />,
        desc: "Granular permissions and multi-tenant architecture",
        category: "Security",
      },
      {
        title: "Real-Time Analytics",
        icon: <Database className="w-6 h-6" />,
        desc: "Custom dashboards with actionable business intelligence",
        category: "Analytics",
      },
      {
        title: "Cloud-Native Architecture",
        icon: <Layers className="w-6 h-6" />,
        desc: "Auto-scaling infrastructure that grows with your business",
        category: "Infrastructure",
      },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        quote:
          "Jenisys didn't just build software—they transformed our entire operation. The ROI was visible within the first month, and we've seen 300% growth since deployment.",
        author: "Sarah Chen",
        title: "Chief Technology Officer",
        company: "TechFlow Industries",
        rating: 5,
        avatar: "SC",
      },
      {
        quote:
          "Their business-first approach meant they understood our industry challenges before writing a single line of code. The result exceeded our expectations.",
        author: "Michael Rodriguez",
        title: "Head of Operations",
        company: "RetailHub Network",
        rating: 5,
        avatar: "MR",
      },
    ],
    []
  );

  // Optimized card component with reduced animations
  const OptimizedCard = React.memo(
    ({ children, className = "", delay = 0 }) => (
      <div
        className={`transition-all duration-300 ease-out hover:scale-[1.01] hover:-translate-y-1 ${className}`}
        style={{ animationDelay: `${delay}ms` }}
      >
        {children}
      </div>
    )
  );
  OptimizedCard.displayName = "OptimizedCard";

  // Handle form submission
  const handleFormSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("Form submitted");
    setShowModal(false);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        {/* Simplified Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-8">
              <Zap className="w-4 h-4 mr-2" />
              Trusted by 200+ companies worldwide
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Build Software That
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Transforms Business
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Custom enterprise solutions that scale with your vision. From MVP
              to market leader, we build the technology that powers your
              success.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={openModal}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Hero Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Custom Development",
                desc: "Tailored solutions built specifically for your business needs",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Rapid Deployment",
                desc: "Get to market faster with our proven development methodology",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Enterprise Security",
                desc: "Bank-grade security with compliance and data protection",
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((card, index) => (
              <OptimizedCard key={index} delay={index * 100}>
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow duration-200">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${card.gradient} text-white mb-6`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              </OptimizedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section id="services" className="py-24 bg-white relative" data-animate>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-blue-50/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-sm font-medium text-red-700 mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Common Business Challenges
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Is Legacy Software
              <span className="block text-red-600">Holding You Back?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform operational bottlenecks into competitive advantages with
              custom solutions designed for your unique business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Legacy System Modernization",
                desc: "Replace outdated infrastructure with modern, scalable solutions",
                impact: "Up to 70% efficiency gain",
                color: "from-red-500 to-orange-500",
              },
              {
                title: "Custom Workflow Automation",
                desc: "Eliminate manual processes with intelligent automation",
                impact: "Save 20+ hours per week",
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Data Integration & Analytics",
                desc: "Unify disparate systems for actionable insights",
                impact: "90% faster reporting",
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Scalable MVP Development",
                desc: "Launch market-ready products with growth-focused architecture",
                impact: "3x faster time-to-market",
                color: "from-green-500 to-emerald-500",
              },
            ].map((item, index) => (
              <OptimizedCard
                key={index}
                className={`${
                  isVisible.services
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } transition-all duration-500`}
                delay={index * 100}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full hover:shadow-xl transition-shadow duration-200">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <div className="w-6 h-6 bg-white rounded-md" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                  <div
                    className={`inline-flex px-3 py-1 bg-gradient-to-r ${item.color} bg-opacity-10 rounded-full`}
                  >
                    <span className="text-sm font-semibold text-gray-800">
                      {item.impact}
                    </span>
                  </div>
                </div>
              </OptimizedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section
        id="process"
        className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden"
        data-animate
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-sm font-medium text-blue-300 mb-6">
              <Layers className="w-4 h-4 mr-2" />
              Our Proven Methodology
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              From Concept to
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Launch
              </span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              A battle-tested process that delivers results on time and within
              budget, refined through 200+ successful projects.
            </p>
          </div>

          {/* Simplified Process Timeline */}
          <div className="relative">
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-white/20 rounded-full">
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${((activeStep + 1) / processSteps.length) * 100}%`,
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <OptimizedCard
                  key={index}
                  className={`${
                    isVisible.process
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  } transition-all duration-500`}
                  delay={index * 150}
                >
                  <div
                    className={`relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 h-full cursor-pointer transition-all duration-200 ${
                      activeStep === index
                        ? "bg-white/20 scale-[1.02]"
                        : "hover:bg-white/15"
                    }`}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>

                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${step.color} mb-6`}
                    >
                      {step.icon}
                    </div>

                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-blue-200 leading-relaxed">{step.desc}</p>

                    {activeStep === index && (
                      <div className="absolute bottom-4 left-8 w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                    )}
                  </div>
                </OptimizedCard>
              ))}
            </div>
          </div>

          {/* Process Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: "Projects Delivered" },
              { number: "99.5%", label: "Client Satisfaction" },
              { number: "6 weeks", label: "Average MVP Time" },
              { number: "24/7", label: "Support Coverage" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-200">
                  {stat.number}
                </div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section
        id="case-studies"
        className="py-24 bg-gradient-to-br from-gray-50 to-white"
        data-animate
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-sm font-medium text-green-700 mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              Proven Results
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Success Stories That
              <span className="block text-green-600">Speak Volumes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real businesses, real challenges, real results. See how we've
              transformed operations and accelerated growth across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <OptimizedCard
                key={index}
                className={`${
                  isVisible["case-studies"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } transition-all duration-500`}
                delay={index * 150}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full border border-gray-100 hover:shadow-xl transition-shadow duration-200">
                  <div className={`h-2 bg-gradient-to-r ${study.gradient}`} />

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {study.company}
                        </h3>
                        <span className="text-blue-600 font-medium">
                          {study.industry}
                        </span>
                      </div>
                      <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-red-600 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-2" />
                        Challenge
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                        Solution
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold text-green-600 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                        Impact
                      </h4>
                      <p className="text-gray-900 font-medium leading-relaxed">
                        {study.outcome}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-bold text-lg text-gray-900">
                            {value}
                          </div>
                          <div className="text-xs text-gray-600 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </OptimizedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-sm font-medium text-purple-700 mb-6">
              <Layers className="w-4 h-4 mr-2" />
              Enterprise-Grade Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Built for Scale,
              <span className="block text-purple-600">Designed for Growth</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <OptimizedCard
                key={index}
                className={`${
                  isVisible.process
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } transition-all duration-500`}
                delay={index * 80}
              >
                <div className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-purple-200 transition-colors duration-200 h-full">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors duration-200">
                      {feature.icon}
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {feature.desc}
                      </p>
                      <span className="inline-flex px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {feature.category}
                      </span>
                    </div>
                  </div>
                </div>
              </OptimizedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white relative overflow-hidden"
        data-animate
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-blue-300 mb-6">
              <Star className="w-4 h-4 mr-2" />
              Client Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Trusted by Industry
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Leaders
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <OptimizedCard
                key={index}
                className={`${
                  isVisible.process
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } transition-all duration-500`}
                delay={index * 200}
              >
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 h-full">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <blockquote className="text-lg mb-8 italic leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-blue-200">{testimonial.title}</div>
                      <div className="text-blue-300 text-sm">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </OptimizedCard>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-blue-200 mb-8">Trusted by companies worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {["Tech", "Retail", "Finance", "Healthcare", "Manufacturing"].map(
                (industry, i) => (
                  <div key={i} className="text-white/80 font-semibold">
                    {industry}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section
        className="py-24 bg-gradient-to-br from-gray-50 to-white"
        data-animate
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-sm font-medium text-orange-700 mb-6">
              <Users className="w-4 h-4 mr-2" />
              Flexible Engagement Models
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Choose What Works
              <span className="block text-orange-600">Best for You</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From rapid prototypes to enterprise-scale solutions, we adapt our
              approach to match your timeline, budget, and business
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fixed Scope Project",
                desc: "Perfect for well-defined requirements with clear deliverables",
                features: [
                  "Detailed project specification",
                  "Fixed timeline & budget",
                  "Milestone-based delivery",
                  "Full documentation included",
                ],
                best: "Best for: MVPs, Feature Development, System Migration",
                icon: <CheckCircle className="w-6 h-6" />,
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Agile Development",
                desc: "Flexible approach for evolving requirements and iterative development",
                features: [
                  "Sprint-based development",
                  "Regular feedback cycles",
                  "Adaptive scope management",
                  "Continuous deployment",
                ],
                best: "Best for: Product Development, Ongoing Enhancement",
                icon: <Zap className="w-6 h-6" />,
                color: "from-purple-500 to-pink-500",
                featured: true,
              },
              {
                title: "Dedicated Team",
                desc: "Extended development team integrated with your organization",
                features: [
                  "Full-time dedicated developers",
                  "Direct team integration",
                  "Long-term partnership",
                  "Scalable team size",
                ],
                best: "Best for: Enterprise Solutions, Platform Development",
                icon: <Users className="w-6 h-6" />,
                color: "from-green-500 to-emerald-500",
              },
            ].map((model, index) => (
              <OptimizedCard
                key={index}
                className={`${
                  isVisible.process
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } transition-all duration-500`}
                delay={index * 150}
              >
                <div
                  className={`bg-white rounded-2xl shadow-lg border-2 h-full relative overflow-hidden hover:shadow-xl transition-shadow duration-200 ${
                    model.featured
                      ? "border-purple-200 scale-[1.02]"
                      : "border-gray-100"
                  }`}
                >
                  {model.featured && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div className={`p-8 ${model.featured ? "pt-12" : ""}`}>
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${model.color} text-white mb-6`}
                    >
                      {model.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {model.title}
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {model.desc}
                    </p>

                    <ul className="space-y-4 mb-8">
                      {model.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`p-4 bg-gradient-to-r ${model.color} bg-opacity-10 rounded-xl`}
                    >
                      <p className="text-sm font-semibold text-gray-800">
                        {model.best}
                      </p>
                    </div>
                  </div>
                </div>
              </OptimizedCard>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Get Free Project Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Transform
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>

          <p className="text-xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 200+ companies who've already transformed their operations with
            custom software. Let's discuss how we can accelerate your success.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button
              onClick={openModal}
              className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center"
            >
              <Calendar className="mr-3 w-5 h-5" />
              Book Free Strategy Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button className="border-2 border-white/50 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 backdrop-blur-sm">
              View Portfolio
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-2">
                6 weeks
              </div>
              <div className="text-blue-200">Average MVP Delivery</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-2">200+</div>
              <div className="text-blue-200">Successful Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Optimized Contact Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full relative overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors duration-200"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold mb-2">
                Let's Build Something Amazing
              </h3>
              <p className="text-blue-100">
                Schedule your free consultation today
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your Company"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Select a project type</option>
                    <option value="custom-development">
                      Custom Software Development
                    </option>
                    <option value="mvp">MVP Development</option>
                    <option value="integration">System Integration</option>
                    <option value="modernization">
                      Legacy System Modernization
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Describe your project requirements, timeline, and goals..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:shadow-lg transform hover:scale-[1.01] transition-all duration-200 font-semibold text-lg"
                >
                  Schedule Free Consultation
                </button>
              </div>

              <p className="text-center text-gray-500 text-sm mt-6">
                We'll respond within 24 hours with next steps
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Optimized Custom Styles */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }

        /* Optimized animations with better performance */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* GPU acceleration for smooth transforms */
        .transform {
          transform: translateZ(0);
        }

        /* Optimize background attachments */
        .bg-gradient-to-br {
          will-change: auto;
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Jenisyssftdev;

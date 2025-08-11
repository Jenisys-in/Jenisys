"use client";
import Footer from "../Footer";
import { useCalendar } from "@/contexts/CalendarContext";
import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Brain,
  Zap,
  Eye,
  MessageSquare,
  Settings,
  ShoppingCart,
  Heart,
  Factory,
  CreditCard,
  Truck,
  CheckCircle,
  ArrowRight,
  Star,
  Calendar,
  Shield,
  Clock,
  TrendingUp,
  Target,
  Cpu,
  Database,
  Cloud,
} from "lucide-react";

const JenisysAILanding = () => {
  const { openCalendar } = useCalendar();
  const [activeTab, setActiveTab] = useState("ai");
  const [counters, setCounters] = useState({ time: 0, accuracy: 0, roi: 0 });
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Cost calculator states
  const [costCalculator, setCostCalculator] = useState({
    industry: "E-commerce & Retail",
    solutionType: "Predictive Analytics",
    complexity: "MVP/Proof of Concept",
    timeline: "3-6 weeks (Fast Track)",
  });
  const [calculatedCost, setCalculatedCost] = useState({ min: 25, max: 75 });

  // refs
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  // track if stats animated to avoid repeating
  const statsAnimatedRef = useRef(false);
  const rAFRef = useRef(null);

  // -- Scoped scroll animation observer --
  useEffect(() => {
    const rootEl = rootRef.current;
    if (!rootEl) return;

    // Respect user's reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const elements = Array.from(rootEl.querySelectorAll("[data-animate]"));

    // apply initial state
    elements.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-8");
      // allow custom animation delay via style attribute already set inline
      el.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
    });

    if (prefersReducedMotion) {
      // If reduced motion, remove animations and make elements visible
      elements.forEach((el) => {
        el.classList.remove("opacity-0", "translate-y-8");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            // add class to animate and unobserve target (one-time)
            target.classList.add("animate-fade-in-up");
            target.classList.remove("opacity-0", "translate-y-8");
            obs.unobserve(target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      // clear any leftover inline transitions
      elements.forEach((el) => {
        el.style.transition = "";
      });
    };
  }, []);

  // -- Stats animated counter -- runs once when statsRef intersects --
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!statsRef.current || prefersReducedMotion) return;

    const el = statsRef.current;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsAnimatedRef.current) {
            statsAnimatedRef.current = true;
            obs.unobserve(el);

            // animate counters tightly controlled via rAF
            const duration = 1800;
            const start = performance.now();

            const animate = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);

              // Using eased progress (easeOutCubic)
              const eased = 1 - Math.pow(1 - progress, 3);

              setCounters({
                time: Math.floor(40 * eased),
                accuracy: Math.floor(98 * eased),
                roi: Math.floor(50 * eased),
              });

              if (progress < 1) {
                rAFRef.current = requestAnimationFrame(animate);
              } else {
                // finalize
                setCounters({ time: 40, accuracy: 98, roi: 50 });
                rAFRef.current = null;
              }
            };

            rAFRef.current = requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
      rAFRef.current = null;
    };
  }, []);

  // Cost calculator logic (stays the same but cleaned)
  useEffect(() => {
    const calculateCost = () => {
      let baseMin = 15;
      let baseMax = 45;

      const industryMultipliers = {
        "E-commerce & Retail": 1.0,
        "Healthcare & Life Sciences": 1.4,
        "Financial Services": 1.6,
        "Manufacturing & IoT": 1.3,
        "Logistics & Supply Chain": 1.1,
        "SaaS & Technology": 1.2,
      };

      const solutionMultipliers = {
        "Predictive Analytics": 1.0,
        "Recommendation Engine": 1.2,
        "Computer Vision": 1.5,
        "Natural Language Processing": 1.3,
        "Process Automation": 0.9,
        "Chatbot & Virtual Assistant": 0.8,
      };

      const complexityMultipliers = {
        "MVP/Proof of Concept": 0.6,
        "Production-Ready Solution": 1.0,
        "Enterprise Integration": 1.8,
      };

      const timelineMultipliers = {
        "3-6 weeks (Fast Track)": 1.3,
        "2-3 months (Standard)": 1.0,
        "3-6 months (Complex)": 1.1,
        "6+ months (Enterprise)": 1.2,
      };

      const industryMult = industryMultipliers[costCalculator.industry] ?? 1.0;
      const solutionMult =
        solutionMultipliers[costCalculator.solutionType] ?? 1.0;
      const complexityMult =
        complexityMultipliers[costCalculator.complexity] ?? 1.0;
      const timelineMult = timelineMultipliers[costCalculator.timeline] ?? 1.0;

      const finalMin = Math.round(
        baseMin * industryMult * solutionMult * complexityMult * timelineMult
      );
      const finalMax = Math.round(
        baseMax * industryMult * solutionMult * complexityMult * timelineMult
      );

      setCalculatedCost({ min: finalMin, max: finalMax });
    };

    calculateCost();
  }, [costCalculator]);

  // improved scroll helper (smooth)
  const scrollToSection = (sectionId) => {
    const rootEl = rootRef.current || document;
    const element =
      rootEl.querySelector(`#${sectionId}`) ||
      document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: try global document
      const fallback = document.getElementById(sectionId);
      if (fallback)
        fallback.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const industries = [
    {
      icon: ShoppingCart,
      title: "Retail",
      description:
        "Personalized shopping experiences with AI recommendation engines.",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Early diagnosis using medical imaging & patient analytics.",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Predictive maintenance with IoT & AI sensors.",
    },
    {
      icon: CreditCard,
      title: "Finance",
      description: "Fraud detection & automated compliance reporting.",
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Route optimization & demand forecasting.",
    },
  ];

  const faqs = [
    {
      q: "How do I know AI is right for my business?",
      a: "We conduct a comprehensive AI readiness assessment, analyzing your data maturity, business processes, and ROI potential. Our free consultation will give you a clear roadmap.",
    },
    {
      q: "What kind of data do I need to start?",
      a: "The data requirements vary by use case. For predictive analytics, historical transaction data works well. For NLP, text documents suffice. We help you identify and prepare the right datasets.",
    },
    {
      q: "How long does an AI project take?",
      a: "MVP AI solutions typically take 3-6 weeks. Complex enterprise implementations can take 3-6 months. We use agile methodologies to deliver value incrementally.",
    },
    {
      q: "Is automation secure and GDPR compliant?",
      a: "Yes, we build with security-first principles. All solutions are SOC2 compliant and GDPR-ready with proper data governance, encryption, and audit trails.",
    },
    {
      q: "What's the difference between AI, ML, and automation?",
      a: "AI is the broad concept of machines performing tasks intelligently. ML is a subset that learns from data. Automation executes predefined processes. We combine all three for maximum impact.",
    },
  ];

  return (
    <div
      ref={rootRef}
      className="min-h-screen bg-gray-900 text-white overflow-hidden"
    >
      {/* Custom CSS for animations */}
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
          animation: fade-in-up 0.7s ease-out forwards;
        }

        /* Smooth scrolling enhancement */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #1f2937;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>

      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4"
        data-animate
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <div className="mb-8 flex justify-center space-x-4 flex-wrap gap-2">
            <div className="bg-blue-600/20 px-3 py-1 rounded-full text-sm border border-blue-500/30">
              AWS Partner
            </div>
            <div className="bg-purple-600/20 px-3 py-1 rounded-full text-sm border border-purple-500/30">
              Azure Certified
            </div>
            <div className="bg-cyan-600/20 px-3 py-1 rounded-full text-sm border border-cyan-500/30">
              OpenAI Partner
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            Unlock Smarter Business with AI, Machine Learning & Automation
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            From intelligent insights to workflow automation, we build scalable
            AI solutions that transform the way you work.
          </p>

          <button
            onClick={() => scrollToSection("cta")}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Book a Free AI Consultation
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Floating AI Animation */}
          <div
            className="absolute top-20 right-20 w-20 h-20 bg-blue-500/20 rounded-full animate-bounce hidden lg:block"
            aria-hidden
          >
            <Brain className="w-10 h-10 text-blue-400 m-5" />
          </div>
        </div>
      </section>

      {/* Key Outcomes Stats */}
      <section
        id="stats"
        ref={statsRef}
        className="py-20 px-4 relative"
        data-animate
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-5xl font-bold text-blue-400 mb-2">
                {counters.time}%
              </div>
              <div className="text-gray-300">Reduction in manual tasks</div>
              <Clock className="w-8 h-8 text-blue-400 mx-auto mt-4" />
            </div>
            <div className="text-center bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-5xl font-bold text-purple-400 mb-2">
                {counters.accuracy}%+
              </div>
              <div className="text-gray-300">
                Prediction accuracy for enterprise clients
              </div>
              <Target className="w-8 h-8 text-purple-400 mx-auto mt-4" />
            </div>
            <div className="text-center bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-5xl font-bold text-cyan-400 mb-2">
                {counters.roi}%
              </div>
              <div className="text-gray-300">Higher operational ROI</div>
              <TrendingUp className="w-8 h-8 text-cyan-400 mx-auto mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="services" className="py-20 px-4" data-animate>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            What We Offer
          </h2>

          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 p-1 rounded-lg flex flex-wrap gap-1">
              <button
                onClick={() => setActiveTab("ai")}
                className={`px-4 md:px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === "ai"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                <Brain className="inline-block w-5 h-5 mr-2" />
                AI/ML Capabilities
              </button>
              <button
                onClick={() => setActiveTab("automation")}
                className={`px-4 md:px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === "automation"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                <Settings className="inline-block w-5 h-5 mr-2" />
                Automation Solutions
              </button>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="min-h-[400px]">
              {activeTab === "ai" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: TrendingUp,
                      title: "Predictive Analytics",
                      desc: "Forecast trends and outcomes with advanced ML models",
                    },
                    {
                      icon: Target,
                      title: "Recommendation Engines",
                      desc: "Personalized suggestions that drive engagement",
                    },
                    {
                      icon: MessageSquare,
                      title: "Natural Language Processing",
                      desc: "Extract insights from text and documents",
                    },
                    {
                      icon: Eye,
                      title: "Computer Vision",
                      desc: "Analyze images and video with AI",
                    },
                    {
                      icon: Database,
                      title: "Data Labeling & Training",
                      desc: "Custom datasets and model training pipelines",
                    },
                    {
                      icon: Cpu,
                      title: "Generative AI Integration",
                      desc: "GPT, Claude, and custom LLM implementations",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group p-6 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <item.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "automation" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Zap,
                      title: "Robotic Process Automation",
                      desc: "Automate repetitive business processes",
                    },
                    {
                      icon: Settings,
                      title: "CRM & Workflow Automation",
                      desc: "Streamline customer management workflows",
                    },
                    {
                      icon: Database,
                      title: "Document Data Extraction",
                      desc: "AI-powered document processing and extraction",
                    },
                    {
                      icon: MessageSquare,
                      title: "Chatbots & Virtual Assistants",
                      desc: "GPT-4 powered conversational AI",
                    },
                    {
                      icon: Heart,
                      title: "AI-powered Customer Support",
                      desc: "Intelligent support ticket routing and responses",
                    },
                    {
                      icon: Cloud,
                      title: "Integration Automation",
                      desc: "Connect and automate your entire tech stack",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group p-6 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <item.icon className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section
        id="industries"
        className="py-20 px-4 bg-gray-800/30"
        data-animate
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Industries We Serve with AI
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <industry.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform mx-auto" />
                <h3 className="font-semibold mb-2 text-center">
                  {industry.title}
                </h3>
                <p className="text-gray-400 text-sm text-center">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Use Case Deep Dives */}
      <section id="case-studies" className="py-20 px-4" data-animate>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Proven AI Solutions That Drive Results
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Real transformations from our AI implementations across industries
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                industry: "E-commerce",
                title: "AI-Powered Product Recommendations",
                before: "Random product suggestions, 2.1% conversion rate",
                after: "Personalized ML recommendations, 3.2% conversion rate",
                improvement: "+52% revenue increase",
                description:
                  "Built deep learning recommendation engine using collaborative filtering and content-based algorithms, processing 10M+ customer interactions daily.",
                metrics: [
                  "52% revenue boost",
                  "31% higher AOV",
                  "18% repeat purchases",
                ],
                color: "blue",
              },
              {
                industry: "Healthcare",
                title: "Medical Imaging AI Diagnostics",
                before: "Manual radiology review, 4-6 hour turnaround",
                after: "AI-assisted diagnosis, 45-minute turnaround",
                improvement: "+87% faster diagnosis",
                description:
                  "Developed computer vision model for chest X-ray analysis, achieving 96% accuracy and dramatically reducing patient wait times.",
                metrics: [
                  "87% faster processing",
                  "96% diagnostic accuracy",
                  "40% cost reduction",
                ],
                color: "green",
              },
              {
                industry: "Manufacturing",
                title: "Predictive Maintenance AI",
                before: "Reactive maintenance, 23% unexpected downtime",
                after: "AI-predicted maintenance, 4% unexpected downtime",
                improvement: "+$2.3M saved annually",
                description:
                  "IoT sensor network with ML algorithms predicting equipment failures 72 hours in advance, optimizing maintenance schedules.",
                metrics: [
                  "83% downtime reduction",
                  "$2.3M annual savings",
                  "72hr failure prediction",
                ],
                color: "purple",
              },
              {
                industry: "Financial Services",
                title: "Real-time Fraud Detection",
                before: "Rule-based detection, 12% false positives",
                after: "ML fraud detection, 2.1% false positives",
                improvement: "+94% accuracy improvement",
                description:
                  "Advanced anomaly detection using ensemble methods and deep learning, processing 500K+ transactions per second.",
                metrics: [
                  "94% better accuracy",
                  "0.03s processing time",
                  "$15M fraud prevented",
                ],
                color: "red",
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
                    useCase.color === "blue"
                      ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                      : useCase.color === "green"
                      ? "bg-green-600/20 text-green-400 border border-green-500/30"
                      : useCase.color === "purple"
                      ? "bg-purple-600/20 text-purple-400 border border-purple-500/30"
                      : "bg-red-600/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {useCase.industry}
                </div>

                <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-red-400 font-medium">Before:</div>
                      <div className="text-gray-400">{useCase.before}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-green-400 font-medium">After:</div>
                      <div className="text-gray-300">{useCase.after}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-600/20 rounded-lg p-4 mb-6">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">
                    {useCase.improvement}
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    {useCase.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-cyan-400 font-semibold">
                          {metric.split(" ")[0]}
                        </div>
                        <div className="text-gray-400">
                          {metric.split(" ").slice(1).join(" ")}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4" data-animate>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-blue-500/30"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  aria-expanded={expandedFaq === index}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                >
                  <h3 className="font-semibold pr-4">{faq.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedFaq === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 border-t border-gray-700/50">
                    <p className="text-gray-300 pt-4">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Cost Estimator */}
      <section
        id="calculator"
        className="py-20 px-4 bg-gray-800/30"
        data-animate
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            AI Project Cost Estimator
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Get an instant estimate for your AI project based on your specific
            requirements
          </p>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-3 font-medium">
                    Select Your Industry
                  </label>
                  <select
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    value={costCalculator.industry}
                    onChange={(e) =>
                      setCostCalculator((prev) => ({
                        ...prev,
                        industry: e.target.value,
                      }))
                    }
                  >
                    <option>E-commerce & Retail</option>
                    <option>Healthcare & Life Sciences</option>
                    <option>Financial Services</option>
                    <option>Manufacturing & IoT</option>
                    <option>Logistics & Supply Chain</option>
                    <option>SaaS & Technology</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-3 font-medium">
                    AI Solution Type
                  </label>
                  <select
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    value={costCalculator.solutionType}
                    onChange={(e) =>
                      setCostCalculator((prev) => ({
                        ...prev,
                        solutionType: e.target.value,
                      }))
                    }
                  >
                    <option>Predictive Analytics</option>
                    <option>Recommendation Engine</option>
                    <option>Computer Vision</option>
                    <option>Natural Language Processing</option>
                    <option>Process Automation</option>
                    <option>Chatbot & Virtual Assistant</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-3 font-medium">
                    Project Complexity
                  </label>
                  <div className="space-y-2">
                    {[
                      "MVP/Proof of Concept",
                      "Production-Ready Solution",
                      "Enterprise Integration",
                    ].map((option, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700/30 p-2 rounded transition-colors"
                      >
                        <input
                          type="radio"
                          name="complexity"
                          value={option}
                          checked={costCalculator.complexity === option}
                          onChange={(e) =>
                            setCostCalculator((prev) => ({
                              ...prev,
                              complexity: e.target.value,
                            }))
                          }
                          className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-300">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-3 font-medium">
                    Timeline Requirements
                  </label>
                  <select
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    value={costCalculator.timeline}
                    onChange={(e) =>
                      setCostCalculator((prev) => ({
                        ...prev,
                        timeline: e.target.value,
                      }))
                    }
                  >
                    <option>3-6 weeks (Fast Track)</option>
                    <option>2-3 months (Standard)</option>
                    <option>3-6 months (Complex)</option>
                    <option>6+ months (Enterprise)</option>
                  </select>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Estimated Investment
                </h3>

                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-cyan-400 mb-2 transition-all duration-500">
                    ${calculatedCost.min}K - ${calculatedCost.max}K
                  </div>
                  <div className="text-gray-300">Initial Development</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Discovery & Planning</span>
                    <span className="text-white">
                      ${Math.round(calculatedCost.min * 0.2)}K - $
                      {Math.round(calculatedCost.max * 0.15)}K
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">AI Model Development</span>
                    <span className="text-white">
                      ${Math.round(calculatedCost.min * 0.6)}K - $
                      {Math.round(calculatedCost.max * 0.65)}K
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Integration & Deployment
                    </span>
                    <span className="text-white">
                      ${Math.round(calculatedCost.min * 0.2)}K - $
                      {Math.round(calculatedCost.max * 0.2)}K
                    </span>
                  </div>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
                  <div className="text-green-400 font-semibold mb-2">
                    Potential ROI:
                  </div>
                  <div className="text-gray-300 text-sm">
                    Based on similar projects, expect 3-5x ROI within 12 months
                    through automation savings and efficiency gains.
                  </div>
                </div>

                <button
                  onClick={() => scrollToSection("cta")}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  Get Detailed Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section
        id="cta"
        className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
        data-animate
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left side - Social Proof */}
              <div className="bg-gray-700/30 p-8 lg:p-12">
                <div className="mb-8">
                  <div className="text-3xl font-bold text-white mb-2">
                    Join 150+ Companies
                  </div>
                  <div className="text-gray-300">
                    Already transforming their business with AI
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">150+</div>
                    <div className="text-gray-400 text-sm">
                      AI Projects Delivered
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">
                      98%
                    </div>
                    <div className="text-gray-400 text-sm">
                      Client Satisfaction
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">
                      $50M+
                    </div>
                    <div className="text-gray-400 text-sm">ROI Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">
                      24/7
                    </div>
                    <div className="text-gray-400 text-sm">
                      Support Available
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 italic mb-3">
                    "Jenisys delivered our AI recommendation engine 2 weeks
                    ahead of schedule. ROI was positive within 3 months."
                  </blockquote>
                  <div className="text-sm text-gray-400">
                    Michael Rodriguez, CTO at RetailMax
                  </div>
                </div>

                <div className="mt-6 flex items-center space-x-4">
                  <Shield className="w-6 h-6 text-green-400" />
                  <div className="text-sm text-gray-300">
                    <div className="font-semibold">100% Confidential</div>
                    <div className="text-gray-400">
                      NDA-ready discussion, SOC2 certified
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - CTA Form */}
              <div className="p-8 lg:p-12">
                <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <Brain className="w-10 h-10 text-blue-400" />
                </div>

                <h2 className="text-3xl font-bold text-center mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-gray-300 text-center mb-8">
                  Book a free 30-minute AI strategy session. We'll analyze your
                  business and show you exactly how AI can increase your
                  revenue.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Free AI opportunity assessment
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom AI roadmap for your business
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    ROI projections and timeline
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    No commitment required
                  </div>
                </div>

                <button
                  onClick={openCalendar}
                  className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 mb-4"
                >
                  <Calendar className="inline-block w-5 h-5 mr-2" />
                  Book Your Free AI Strategy Session
                  <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="text-center text-gray-400 text-sm">
                  <div className="mb-1">⚡ Instant calendar booking</div>
                  <div className="mb-1">
                    🎯 Trusted by Fortune 500 companies
                  </div>
                  <div>🔒 100% delivery guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default JenisysAILanding;

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
  Play,
  Star,
  Calendar,
  Shield,
  Clock,
  TrendingUp,
  Target,
  Cpu,
  Database,
  Cloud,
  Lock,
} from "lucide-react";

import { Mail, Phone, MapPin, ExternalLink, Bot } from "lucide-react";

const JenisysAILanding = () => {
  const [activeTab, setActiveTab] = useState("ai");
  const [visibleSection, setVisibleSection] = useState("");
  const [counters, setCounters] = useState({ time: 0, accuracy: 0, roi: 0 });
  const [expandedCase, setExpandedCase] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Cost calculator states
  const [costCalculator, setCostCalculator] = useState({
    industry: "E-commerce & Retail",
    solutionType: "Predictive Analytics",
    complexity: "MVP/Proof of Concept",
    timeline: "3-6 weeks (Fast Track)",
  });
  const [calculatedCost, setCalculatedCost] = useState({ min: 25, max: 75 });

  const heroRef = useRef(null);
  const statsRef = useRef(null);

  // Scroll animation observer
  useEffect(() => {
    const animatedSections = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    animatedSections.forEach((section) => {
      section.classList.add(
        "opacity-0",
        "translate-y-8",
        "transition-all",
        "duration-700"
      );
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Animated counter effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === statsRef.current) {
            // Animate counters
            const duration = 2000;
            const startTime = Date.now();

            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);

              setCounters({
                time: Math.floor(40 * progress),
                accuracy: Math.floor(98 * progress),
                roi: Math.floor(50 * progress),
              });

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            animate();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Cost calculator logic
  useEffect(() => {
    const calculateCost = () => {
      let baseMin = 15;
      let baseMax = 45;

      // Industry multiplier
      const industryMultipliers = {
        "E-commerce & Retail": 1.0,
        "Healthcare & Life Sciences": 1.4,
        "Financial Services": 1.6,
        "Manufacturing & IoT": 1.3,
        "Logistics & Supply Chain": 1.1,
        "SaaS & Technology": 1.2,
      };

      // Solution type multiplier
      const solutionMultipliers = {
        "Predictive Analytics": 1.0,
        "Recommendation Engine": 1.2,
        "Computer Vision": 1.5,
        "Natural Language Processing": 1.3,
        "Process Automation": 0.9,
        "Chatbot & Virtual Assistant": 0.8,
      };

      // Complexity multiplier
      const complexityMultipliers = {
        "MVP/Proof of Concept": 0.6,
        "Production-Ready Solution": 1.0,
        "Enterprise Integration": 1.8,
      };

      // Timeline multiplier (rush jobs cost more)
      const timelineMultipliers = {
        "3-6 weeks (Fast Track)": 1.3,
        "2-3 months (Standard)": 1.0,
        "3-6 months (Complex)": 1.1,
        "6+ months (Enterprise)": 1.2,
      };

      const industryMult = industryMultipliers[costCalculator.industry] || 1.0;
      const solutionMult =
        solutionMultipliers[costCalculator.solutionType] || 1.0;
      const complexityMult =
        complexityMultipliers[costCalculator.complexity] || 1.0;
      const timelineMult = timelineMultipliers[costCalculator.timeline] || 1.0;

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

  const handleCostCalculatorChange = (field, value) => {
    setCostCalculator((prev) => ({
      ...prev,
      [field]: value,
    }));
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

  const caseStudies = [
    {
      id: 1,
      title: "Retail client improved AOV by 37%",
      description:
        "Implemented AI-powered recommendation engine that increased average order value through personalized product suggestions.",
      metrics: "37% AOV increase, 24% conversion rate improvement",
    },
    {
      id: 2,
      title: "Healthcare client reduced diagnostic time by 28%",
      description:
        "Deployed computer vision AI for medical imaging analysis, significantly reducing time to diagnosis.",
      metrics: "28% faster diagnosis, 95% accuracy rate",
    },
    {
      id: 3,
      title: "Built internal GPT-like chatbot for enterprise support",
      description:
        "Custom LLM integration reduced support ticket volume and improved customer satisfaction scores.",
      metrics: "60% reduction in tickets, 92% satisfaction score",
    },
  ];

  const techStack = [
    "TensorFlow",
    "PyTorch",
    "OpenAI",
    "HuggingFace",
    "LangChain",
    "Rasa",
    "Zapier",
    "Make.com",
    "UIPath",
    "Vertex AI",
    "Firebase",
    "AWS SageMaker",
    "Azure ML Studio",
    "Google Cloud AI",
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
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
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
      `}</style>

      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4"
        data-animate
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <div className="mb-8 flex justify-center space-x-4">
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

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            Unlock Smarter Business with AI, Machine Learning & Automation
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            From intelligent insights to workflow automation, we build scalable
            AI solutions that transform the way you work.
          </p>

          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
            Book a Free AI Consultation
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Floating AI Animation */}
          <div className="absolute top-20 right-20 w-20 h-20 bg-blue-500/20 rounded-full animate-bounce hidden lg:block">
            <Brain className="w-10 h-10 text-blue-400 m-5" />
          </div>
        </div>
      </section>

      {/* Key Outcomes Stats */}
      <section ref={statsRef} className="py-20 px-4 relative" data-animate>
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
      <section className="py-20 px-4" data-animate>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            What We Offer
          </h2>

          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 p-1 rounded-lg flex">
              <button
                onClick={() => setActiveTab("ai")}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
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
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
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
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <item.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "automation" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
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
                      style={{ animationDelay: `${index * 100}ms` }}
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
      <section className="py-20 px-4 bg-gray-800/30" data-animate>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Industries We Serve with AI
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <industry.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">{industry.title}</h3>
                <p className="text-gray-400 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Use Case Deep Dives */}
      <section className="py-20 px-4" data-animate>
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
                style={{ animationDelay: `${index * 200}ms` }}
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

      {/* How It Works Process */}
      <section className="py-20 px-4 bg-gray-800/30" data-animate>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            How We Build AI Solutions
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Our proven 5-step methodology ensures successful AI implementation
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 hidden lg:block"></div>

            <div className="space-y-12 lg:space-y-24">
              {[
                {
                  step: "01",
                  title: "Discovery & AI Strategy",
                  description:
                    "Deep dive into your business processes, data landscape, and AI readiness. We identify high-impact use cases and create a custom AI roadmap.",
                  duration: "1-2 weeks",
                  deliverables: [
                    "AI Opportunity Assessment",
                    "Technical Architecture Plan",
                    "ROI Projections",
                  ],
                  icon: Brain,
                },
                {
                  step: "02",
                  title: "Data Preparation & Model Selection",
                  description:
                    "Clean, structure, and enrich your data. Select optimal AI/ML models based on your specific use case and performance requirements.",
                  duration: "2-3 weeks",
                  deliverables: [
                    "Data Pipeline Setup",
                    "Model Architecture",
                    "Performance Benchmarks",
                  ],
                  icon: Database,
                },
                {
                  step: "03",
                  title: "Training & Optimization",
                  description:
                    "Train models using your data, fine-tune hyperparameters, and validate performance against real-world scenarios.",
                  duration: "2-4 weeks",
                  deliverables: [
                    "Trained AI Models",
                    "Performance Reports",
                    "Accuracy Validation",
                  ],
                  icon: Cpu,
                },
                {
                  step: "04",
                  title: "Integration & Deployment",
                  description:
                    "Seamlessly integrate AI models into your existing systems with robust APIs, monitoring, and scalable cloud infrastructure.",
                  duration: "1-2 weeks",
                  deliverables: [
                    "Production Deployment",
                    "API Integration",
                    "Monitoring Dashboard",
                  ],
                  icon: Cloud,
                },
                {
                  step: "05",
                  title: "Support & Continuous Learning",
                  description:
                    "Ongoing model monitoring, performance optimization, and iterative improvements based on real-world feedback.",
                  duration: "Ongoing",
                  deliverables: [
                    "24/7 Monitoring",
                    "Monthly Reports",
                    "Model Updates",
                  ],
                  icon: TrendingUp,
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Step circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold z-10 hidden lg:flex">
                    {phase.step}
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full lg:w-5/12 ${
                      index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                    }`}
                  >
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                      <div className="flex items-center mb-4 lg:hidden">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                          {phase.step}
                        </div>
                        <phase.icon className="w-8 h-8 text-blue-400" />
                      </div>

                      <div className="hidden lg:flex items-center justify-center mb-4">
                        <phase.icon className="w-12 h-12 text-blue-400" />
                      </div>

                      <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                      <p className="text-gray-300 mb-4">{phase.description}</p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="bg-blue-600/20 px-3 py-1 rounded-full text-blue-400 text-sm">
                          {phase.duration}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-gray-400 mb-2">
                          Key Deliverables:
                        </div>
                        <div className="space-y-1">
                          {phase.deliverables.map((deliverable, i) => (
                            <div
                              key={i}
                              className="flex items-center text-sm text-gray-300"
                            >
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Automation Showcase */}
      <section className="py-20 px-4 bg-gray-800/30" data-animate>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            See AI Automation in Action
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Watch how our AI solutions transform manual processes into
            intelligent workflows
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Intelligent Customer Support Bot",
                description:
                  "GPT-4 powered chatbot handles 80% of customer inquiries automatically",
                steps: [
                  "Customer submits inquiry",
                  "AI analyzes intent & context",
                  "Searches knowledge base",
                  "Provides personalized response",
                  "Escalates complex issues to humans",
                ],
                impact: "80% query resolution, 60% cost reduction",
                color: "blue",
              },
              {
                title: "Real-time Fraud Detection System",
                description:
                  "ML algorithms detect suspicious transactions in under 100ms",
                steps: [
                  "Transaction data received",
                  "Multi-layer anomaly detection",
                  "Risk score calculation",
                  "Instant decision making",
                  "Alert generation & blocking",
                ],
                impact: "99.7% accuracy, <100ms response time",
                color: "red",
              },
              {
                title: "Predictive Inventory Management",
                description:
                  "AI forecasts demand and automatically manages stock levels",
                steps: [
                  "Historical data analysis",
                  "Market trend incorporation",
                  "Demand forecasting",
                  "Automated reorder triggers",
                  "Supplier integration",
                ],
                impact: "35% inventory cost reduction",
                color: "green",
              },
              {
                title: "Document Processing Pipeline",
                description:
                  "OCR + NLP extracts data from unstructured documents automatically",
                steps: [
                  "Document upload/scan",
                  "Text extraction (OCR)",
                  "Entity recognition (NLP)",
                  "Data validation & formatting",
                  "System integration",
                ],
                impact: "90% processing time saved",
                color: "purple",
              },
            ].map((automation, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">{automation.title}</h3>
                  <Play className="w-8 h-8 text-cyan-400 hover:scale-110 transition-transform cursor-pointer" />
                </div>

                <p className="text-gray-300 mb-6">{automation.description}</p>

                <div className="space-y-3 mb-6">
                  {automation.steps.map((step, stepIndex) => (
                    <div
                      key={stepIndex}
                      className="flex items-center space-x-3"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                          automation.color === "blue"
                            ? "bg-blue-600/20 border border-blue-500/50 text-blue-400"
                            : automation.color === "red"
                            ? "bg-red-600/20 border border-red-500/50 text-red-400"
                            : automation.color === "green"
                            ? "bg-green-600/20 border border-green-500/50 text-green-400"
                            : "bg-purple-600/20 border border-purple-500/50 text-purple-400"
                        }`}
                      >
                        {stepIndex + 1}
                      </div>
                      <div className="text-gray-300 text-sm">{step}</div>
                    </div>
                  ))}
                </div>

                <div
                  className={`rounded-lg p-4 ${
                    automation.color === "blue"
                      ? "bg-blue-600/20"
                      : automation.color === "red"
                      ? "bg-red-600/20"
                      : automation.color === "green"
                      ? "bg-green-600/20"
                      : "bg-purple-600/20"
                  }`}
                >
                  <div
                    className={`font-semibold mb-1 ${
                      automation.color === "blue"
                        ? "text-blue-400"
                        : automation.color === "red"
                        ? "text-red-400"
                        : automation.color === "green"
                        ? "text-green-400"
                        : "text-purple-400"
                    }`}
                  >
                    Business Impact:
                  </div>
                  <div className="text-gray-300">{automation.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Jenisys - Enhanced */}
      <section className="py-20 px-4" data-animate>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Why Choose Jenisys for AI?
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            We combine deep AI expertise with business acumen to deliver
            solutions that actually work
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Brain,
                title: "Industry-Specific AI Expertise",
                desc: "7+ years building AI for healthcare, fintech, e-commerce, and manufacturing. We understand your domain challenges.",
                highlight: "Domain expertise matters",
              },
              {
                icon: MessageSquare,
                title: "Open Source + Proprietary Models",
                desc: "Best of both worlds: cost-effective open-source foundations enhanced with custom proprietary algorithms.",
                highlight: "Cost-effective innovation",
              },
              {
                icon: Zap,
                title: "3-6 Week MVP Delivery",
                desc: "Rapid prototyping and agile development. See results fast, iterate quickly, scale when ready.",
                highlight: "Speed to market",
              },
              {
                icon: Shield,
                title: "Enterprise Security & Compliance",
                desc: "SOC2 Type II certified, GDPR compliant, HIPAA ready. Your data stays secure and private.",
                highlight: "Zero compromise on security",
              },
              {
                icon: Cloud,
                title: "Multi-Cloud Deployment",
                desc: "AWS, Google Cloud, Azure certified. Deploy anywhere, avoid vendor lock-in, optimize costs.",
                highlight: "Maximum flexibility",
              },
              {
                icon: Target,
                title: "ROI-Focused Approach",
                desc: "Every AI project starts with clear business metrics. We optimize for measurable outcomes, not just accuracy.",
                highlight: "Business impact first",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <div className="bg-cyan-600/20 px-3 py-1 rounded-full text-cyan-400 text-xs mb-3 inline-block">
                  {item.highlight}
                </div>
                <h3 className="font-semibold mb-3 text-lg">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Leadership */}
      <section className="py-20 px-4 bg-gray-800/30" data-animate>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-700/50">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Brain className="w-16 h-16 text-white" />
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-2">Led by AI Pioneers</h3>
                <div className="text-cyan-400 mb-4">
                  Dr. Sarah Chen, Chief AI Officer
                </div>
                <blockquote className="text-lg italic text-gray-300 mb-4">
                  "After 12 years in AI research at Google and Stanford, I
                  founded Jenisys to bridge the gap between cutting-edge AI
                  research and real business value. We don't just build
                  models—we build competitive advantages."
                </blockquote>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">150+</div>
                    <div className="text-gray-400 text-sm">
                      AI Projects Delivered
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">12</div>
                    <div className="text-gray-400 text-sm">Years in AI/ML</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">25+</div>
                    <div className="text-gray-400 text-sm">
                      Published Papers
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">
                      $50M+
                    </div>
                    <div className="text-gray-400 text-sm">
                      Client ROI Generated
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4" data-animate>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Tech Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 bg-gray-800/30" data-animate>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <blockquote className="text-xl italic text-gray-300 mb-6">
              "Jenisys transformed our operations with their AI automation
              platform. We've seen a 40% reduction in processing time and our
              team can now focus on strategic initiatives instead of manual
              tasks."
            </blockquote>
            <div className="text-gray-400">
              <div className="font-semibold">Sarah Chen</div>
              <div>CTO, TechFlow Logistics</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Cost Estimator */}
      <section className="py-20 px-4" data-animate>
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
                      handleCostCalculatorChange("industry", e.target.value)
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
                      handleCostCalculatorChange("solutionType", e.target.value)
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
                            handleCostCalculatorChange(
                              "complexity",
                              e.target.value
                            )
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
                      handleCostCalculatorChange("timeline", e.target.value)
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

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                  Get Detailed Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4" data-animate>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-blue-500/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
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

      {/* Enhanced Final CTA */}
      <section
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

                <button className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 mb-4">
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

export default JenisysAILanding;

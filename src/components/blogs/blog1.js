"use client";

import Footer from "../Footer";
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Download,
  Bot,
  Brain,
  Cpu,
  Users,
  Shield,
  Code,
  BarChart3,
  Heart,
  Factory,
  ShoppingCart,
  Play,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const AIBlogPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const jumpToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-sky-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Dark Mode Toggle - Floating */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 z-40 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300"
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>

      <article className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {/* Hero Section */}
        <section className="relative isolate bg-gradient-to-br from-indigo-600 to-sky-500 text-white overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  The Future of AI in Business:
                  <span className="block text-sky-200 mt-2">
                    Transforming Industries in 2025
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-sky-100 mb-8 leading-relaxed">
                  How autonomous agents, custom silicon, and data-centric design
                  will reshape competitive advantage across every sector.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => jumpToSection("tldr")}
                    className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300 flex items-center justify-center"
                  >
                    Read Summary <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                  <button
                    onClick={() => jumpToSection("cta")}
                    className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Strategy Canvas <Download className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative">
                  <div className="w-96 h-96 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute inset-4 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full opacity-30"></div>
                    <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
                      <Bot className="w-32 h-32 text-indigo-600" />
                    </div>

                    {/* Floating Icons */}
                    <div className="absolute top-0 right-0 bg-white rounded-full p-3 shadow-lg animate-bounce">
                      <Brain className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div
                      className="absolute bottom-0 left-0 bg-white rounded-full p-3 shadow-lg animate-bounce"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <Cpu className="w-6 h-6 text-sky-600" />
                    </div>
                    <div
                      className="absolute top-1/2 left-0 bg-white rounded-full p-3 shadow-lg animate-bounce"
                      style={{ animationDelay: "1s" }}
                    >
                      <BarChart3 className="w-6 h-6 text-indigo-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TL;DR Section */}
        <section id="tldr" className="py-16 bg-slate-50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-sm font-medium mr-3">
                    TL;DR
                  </span>
                  Executive Summary
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-300">
                        <strong>Agentic AI Revolution:</strong> 2025 marks the
                        shift from prompt-based AI to autonomous business agents
                        handling complex workflows end-to-end.
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-300">
                        <strong>Custom Silicon Advantage:</strong> Companies
                        deploying specialized AI chips at the edge will gain 10x
                        performance improvements over cloud-only competitors.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-300">
                        <strong>AI-Augmented Workforce:</strong> The most
                        successful organizations will create "superagent" teams
                        where AI handles routine tasks while humans focus on
                        strategy and creativity.
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-300">
                        <strong>Data-Centric Transformation:</strong> Winners
                        will be those who treat data architecture as a
                        competitive moat, not just a technical requirement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  <button
                    onClick={() => jumpToSection("finance")}
                    className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-900 transition-colors"
                  >
                    Finance
                  </button>
                  <button
                    onClick={() => jumpToSection("healthcare")}
                    className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-900 transition-colors"
                  >
                    Healthcare
                  </button>
                  <button
                    onClick={() => jumpToSection("manufacturing")}
                    className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-900 transition-colors"
                  >
                    Manufacturing
                  </button>
                  <button
                    onClick={() => jumpToSection("retail")}
                    className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-900 transition-colors"
                  >
                    Retail
                  </button>
                  <button
                    onClick={() => jumpToSection("media")}
                    className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-900 transition-colors"
                  >
                    Media
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Deep-Dive */}
        <section id="industries" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Industry Transformation
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Discover how AI is reshaping competitive landscapes across key
                sectors, with real-world examples and actionable insights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Finance */}
              <div
                id="finance"
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-xl mr-4">
                    <BarChart3 className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Finance</h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Financial institutions are deploying AI-first risk models that
                  process real-time market data, social sentiment, and
                  alternative data sources. JPMorgan's 2025 agent pilot program
                  demonstrates how autonomous systems can handle complex
                  derivatives trading while maintaining strict compliance
                  protocols.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Fraud Detection 2.0:</strong> Multi-modal AI
                      analyzing transaction patterns, device fingerprints, and
                      behavioral biometrics
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Autonomous Credit Scoring:</strong> Dynamic models
                      that adjust risk assessments in real-time based on
                      economic conditions
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Regulatory Compliance:</strong> AI agents ensuring
                      adherence to evolving financial regulations across
                      jurisdictions
                    </p>
                  </div>
                </div>
              </div>

              {/* Healthcare */}
              <div
                id="healthcare"
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 dark:bg-red-900/50 p-3 rounded-xl mr-4">
                    <Heart className="w-8 h-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Healthcare</h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Multimodal diagnostic AI systems are achieving unprecedented
                  accuracy by combining medical imaging, genomic data, and
                  patient history. The FDA's fast-track approval process for
                  AI-driven drug discovery platforms is accelerating
                  pharmaceutical innovation cycles from decades to years.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Precision Medicine:</strong> AI-powered treatment
                      personalization based on genetic markers and lifestyle
                      data
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Generative Drug Discovery:</strong> AI designing
                      novel molecular compounds with specific therapeutic
                      properties
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Clinical Decision Support:</strong> Real-time AI
                      assistance for diagnosis and treatment recommendations
                    </p>
                  </div>
                </div>
              </div>

              {/* Manufacturing */}
              <div
                id="manufacturing"
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-xl mr-4">
                    <Factory className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Manufacturing</h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Predictive maintenance 2.0 leverages edge-deployed AI chips to
                  analyze sensor data in real-time, preventing failures before
                  they occur. Digital twins powered by neural networks are
                  optimizing production lines and enabling virtual testing of
                  new manufacturing processes.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Smart Quality Control:</strong> Computer vision
                      systems detecting defects at sub-millimeter precision
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Autonomous Supply Chains:</strong> AI agents
                      coordinating procurement, inventory, and logistics
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Energy Optimization:</strong> Machine learning
                      models reducing manufacturing energy consumption by 30%+
                    </p>
                  </div>
                </div>
              </div>

              {/* Retail */}
              <div
                id="retail"
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-xl mr-4">
                    <ShoppingCart className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Retail</h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Hyper-personalized shopping agents are creating unique
                  customer experiences by analyzing browsing patterns, social
                  media activity, and purchase history. Advanced demand sensing
                  algorithms are revolutionizing inventory management and
                  reducing waste across retail operations.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Dynamic Pricing:</strong> AI-powered pricing
                      strategies that optimize for demand, competition, and
                      customer lifetime value
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Virtual Shopping Assistants:</strong>{" "}
                      Conversational AI providing personalized product
                      recommendations
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Omnichannel Experience:</strong> Seamless customer
                      journeys across online, mobile, and physical touchpoints
                    </p>
                  </div>
                </div>
              </div>

              {/* Media */}
              <div
                id="media"
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700 md:col-span-2"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 dark:bg-orange-900/50 p-3 rounded-xl mr-4">
                    <Play className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Media & Entertainment</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      Large Language Models are enabling content versioning at
                      scale, automatically adapting articles, videos, and
                      marketing materials for different audiences and platforms.
                      Synthetic voice technology is revolutionizing audiobook
                      production and multilingual content creation.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        <strong>AI-Generated Content:</strong> Automated
                        creation of social media posts, headlines, and video
                        scripts
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        <strong>Personalized Streaming:</strong> AI curating
                        unique content experiences for individual users
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        <strong>Real-time Translation:</strong> Live dubbing and
                        subtitling for global content distribution
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-Industry Trends */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Cross-Industry Trends
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Five transformative themes reshaping business operations across
                all sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700">
                <div className="bg-indigo-100 dark:bg-indigo-900/50 p-4 rounded-xl w-fit mb-6">
                  <Bot className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Agentic AI & Autonomous Workflows
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Moving beyond simple automation to intelligent agents that can
                  reason, make decisions, and adapt to changing conditions
                  without human intervention.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700">
                <div className="bg-sky-100 dark:bg-sky-900/50 p-4 rounded-xl w-fit mb-6">
                  <Cpu className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Custom Silicon & Edge Inference
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Purpose-built AI chips deployed at the edge, enabling
                  real-time processing while reducing latency and cloud
                  dependencies.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700">
                <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-xl w-fit mb-6">
                  <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  AI-Augmented Workforce
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Creating "superagent" teams where AI handles routine tasks
                  while humans focus on creativity, strategy, and complex
                  problem-solving.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700">
                <div className="bg-purple-100 dark:bg-purple-900/50 p-4 rounded-xl w-fit mb-6">
                  <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Responsible AI & Governance
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Building ethical AI systems with robust governance frameworks,
                  bias detection, and transparent decision-making processes that
                  maintain human oversight.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700">
                <div className="bg-orange-100 dark:bg-orange-900/50 p-4 rounded-xl w-fit mb-6">
                  <Brain className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Data-Centric Architecture
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Treating data infrastructure as a strategic asset, with
                  real-time processing capabilities, federated learning, and
                  privacy-preserving analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Playbook */}
        <section id="playbook" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Implementation Playbook
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                A step-by-step guide to successfully deploying AI initiatives in
                your organization.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-8">
                  Data Readiness Checklist
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Data Quality Assessment
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Audit existing data sources for completeness, accuracy,
                        and consistency. Establish data governance policies and
                        quality metrics.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Infrastructure Modernization
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Implement cloud-native data pipelines with real-time
                        processing capabilities. Consider hybrid edge-cloud
                        architectures for latency-sensitive applications.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Privacy & Security Framework
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Implement privacy-preserving techniques like
                        differential privacy and federated learning. Establish
                        robust security protocols for AI model deployment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Team Readiness</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Upskill existing teams and hire AI specialists. Create
                        cross-functional collaboration between data scientists,
                        engineers, and business stakeholders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8">Build vs Buy Matrix</h3>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700">
                  <div className="grid grid-cols-3 gap-4 text-center text-sm font-medium mb-4">
                    <div></div>
                    <div className="text-green-600 dark:text-green-400">
                      BUILD
                    </div>
                    <div className="text-blue-600 dark:text-blue-400">BUY</div>
                  </div>

                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4 items-center text-sm">
                      <div className="font-medium">Core Business Logic</div>
                      <div className="text-center text-green-600 dark:text-green-400">
                        ✓
                      </div>
                      <div className="text-center text-slate-400">-</div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 items-center text-sm">
                      <div className="font-medium">Infrastructure & MLOps</div>
                      <div className="text-center text-slate-400">-</div>
                      <div className="text-center text-blue-600 dark:text-blue-400">
                        ✓
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 items-center text-sm">
                      <div className="font-medium">Domain-Specific Models</div>
                      <div className="text-center text-green-600 dark:text-green-400">
                        ✓
                      </div>
                      <div className="text-center text-slate-400">-</div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 items-center text-sm">
                      <div className="font-medium">General AI Capabilities</div>
                      <div className="text-center text-slate-400">-</div>
                      <div className="text-center text-blue-600 dark:text-blue-400">
                        ✓
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 items-center text-sm">
                      <div className="font-medium">Data Processing Tools</div>
                      <div className="text-center text-slate-400">-</div>
                      <div className="text-center text-blue-600 dark:text-blue-400">
                        ✓
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Key Decision Factors:</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li>
                      • <strong>Competitive Advantage:</strong> Build if it's
                      core to your differentiation
                    </li>
                    <li>
                      • <strong>Resource Availability:</strong> Consider team
                      expertise and timeline
                    </li>
                    <li>
                      • <strong>Total Cost of Ownership:</strong> Factor in
                      maintenance and updates
                    </li>
                    <li>
                      • <strong>Regulatory Requirements:</strong> Some
                      industries require custom solutions
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Responsible AI Panel */}
            <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-amber-200 dark:border-amber-700">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 dark:bg-amber-900/50 p-3 rounded-xl">
                  <Shield className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-amber-900 dark:text-amber-100">
                    Responsible AI Guardrails
                  </h3>
                  <p className="text-amber-800 dark:text-amber-200 mb-4">
                    Implementing ethical AI requires proactive measures to
                    ensure fairness, transparency, and accountability in
                    automated decision-making systems.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-amber-900 dark:text-amber-100">
                        Bias Detection:
                      </strong>
                      <span className="text-amber-700 dark:text-amber-300">
                        {" "}
                        Regular audits of model outputs across demographic
                        groups
                      </span>
                    </div>
                    <div>
                      <strong className="text-amber-900 dark:text-amber-100">
                        Explainability:
                      </strong>
                      <span className="text-amber-700 dark:text-amber-300">
                        {" "}
                        Clear documentation of how AI systems make decisions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design & UX Tips */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Design & UX Best Practices
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Building AI-powered interfaces that users actually want to use.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Code className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" />
                  Next.js + Tailwind Implementation
                </h3>

                <div className="bg-slate-900 rounded-xl text-sm font-mono text-slate-300 overflow-x-auto">
                  <pre className="p-6">
                    <code>
                      {`
// AI Chat Component
const AIChat = () => {
  return (
    <div className="
      bg-white dark:bg-slate-800
      rounded-2xl shadow-lg
      ring-1 ring-slate-200
      dark:ring-slate-700
      transition-all duration-300
    ">
      {/* Chat interface */}
    </div>
  );
};
                      `.trim()}
                    </code>
                  </pre>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Performance:</strong> Use Next.js dynamic imports
                      and React.lazy for code splitting
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Accessibility:</strong> Implement proper ARIA
                      labels and keyboard navigation
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Dark Mode:</strong> Use Tailwind's dark: variant
                      with system preference detection
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Performance Budget Guidelines
                </h3>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700">
                    <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">
                      JavaScript Bundle
                    </h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">≤ 160 KB</span>
                      <div className="w-32 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Use tree-shaking and dynamic imports
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700">
                    <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">
                      CSS Bundle
                    </h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">≤ 50 KB</span>
                      <div className="w-32 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Tailwind JIT purging and CSS optimization
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700">
                    <h4 className="font-semibold mb-3 text-purple-600 dark:text-purple-400">
                      LCP Target
                    </h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">&lt; 2.5s</span>
                      <div className="w-32 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Optimize hero images and critical resources
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700">
                <h3 className="text-lg font-semibold mb-3">
                  What's the difference between traditional AI and agentic AI?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Traditional AI responds to prompts and follows predefined
                  workflows. Agentic AI can reason, make decisions, and adapt
                  its approach based on changing conditions, operating more like
                  an autonomous digital employee.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700">
                <h3 className="text-lg font-semibold mb-3">
                  How do I calculate ROI for AI initiatives?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Focus on measurable outcomes like time saved, error reduction,
                  and process efficiency gains. Consider both direct cost
                  savings and revenue opportunities from new capabilities or
                  improved customer experiences.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700">
                <h3 className="text-lg font-semibold mb-3">
                  Should small businesses invest in custom AI or use existing
                  solutions?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Start with existing AI tools and platforms to prove value and
                  build expertise. Invest in custom solutions only when they
                  provide clear competitive advantages that justify the
                  additional cost and complexity.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700">
                <h3 className="text-lg font-semibold mb-3">
                  What are the biggest risks of AI implementation in 2025?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Key risks include data privacy breaches, algorithmic bias,
                  over-dependence on AI systems, and inadequate human oversight.
                  Implement robust governance frameworks and maintain
                  human-in-the-loop processes for critical decisions.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700">
                <h3 className="text-lg font-semibold mb-3">
                  How can I prepare my workforce for AI transformation?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Focus on upskilling employees in AI collaboration, data
                  literacy, and creative problem-solving. Emphasize that AI
                  augments human capabilities rather than replacing them, and
                  provide hands-on training with AI tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          className="py-20 bg-gradient-to-br from-indigo-600 to-sky-500 text-white"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-sky-100">
              Download our comprehensive AI Strategy Canvas 2025 and start your
              transformation journey today.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Free AI Strategy Canvas Includes:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-sky-200 flex-shrink-0" />
                  <span>Industry-specific AI use case library</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-sky-200 flex-shrink-0" />
                  <span>ROI calculation templates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-sky-200 flex-shrink-0" />
                  <span>Implementation timeline planner</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-sky-200 flex-shrink-0" />
                  <span>Risk assessment checklist</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300 flex items-center justify-center">
                <Download className="mr-2 w-5 h-5" />
                Download Free Canvas
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="mr-2 w-5 h-5" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
        {/* Footer Component */}
        <Footer />
      </article>
    </div>
  );
};

export default AIBlogPage;

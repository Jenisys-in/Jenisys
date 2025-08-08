"use client";

import Footer from "../Footer";
import { useCalendar } from "@/contexts/CalendarContext";
import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Users,
  DollarSign,
  Zap,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Globe,
  Smartphone,
  Cloud,
  Bot,
  Factory,
  PlayCircle,
  Download,
  ExternalLink,
} from "lucide-react";

const caseStudies = [
  {
    id: "microsoft",
    company: "Microsoft",
    industry: "Technology",
    transformation: "Cloud & AI Leadership",
    logo: "🏢",
    metrics: {
      revenue: "$25B+ Azure Revenue",
      users: "345M+ Office 365 Users",
      investment: "$13B+ AI Investment",
      growth: "73% Cloud Growth",
    },
    color: "from-blue-600 to-indigo-600",
    icon: <Cloud className="w-8 h-8" />,
  },
  {
    id: "walmart",
    company: "Walmart",
    industry: "Retail",
    transformation: "Digital-First Retail",
    logo: "🛒",
    metrics: {
      growth: "21% E-commerce Growth",
      coverage: "93% US Delivery Coverage",
      investment: "$13B+ Tech Investment",
      profit: "First E-commerce Profits",
    },
    color: "from-yellow-500 to-orange-500",
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    id: "jpmorgan",
    company: "JPMorgan Chase",
    industry: "Financial Services",
    transformation: "Digital Banking Revolution",
    logo: "🏦",
    metrics: {
      budget: "$15.3B Tech Budget",
      users: "47M+ Digital Users",
      value: "$1.5B+ AI Value",
      engagement: "15+ Monthly Logins",
    },
    color: "from-green-600 to-emerald-600",
    icon: <DollarSign className="w-8 h-8" />,
  },
  {
    id: "disney",
    company: "Disney",
    industry: "Media & Entertainment",
    transformation: "Streaming Disruption",
    logo: "🎬",
    metrics: {
      subscribers: "100M+ Disney+ Users",
      growth: "73% Revenue Growth",
      content: "105 Productions Planned",
      speed: "16 Months to 100M",
    },
    color: "from-purple-600 to-pink-600",
    icon: <PlayCircle className="w-8 h-8" />,
  },
  {
    id: "tesla",
    company: "Tesla",
    industry: "Automotive",
    transformation: "Manufacturing Innovation",
    logo: "⚡",
    metrics: {
      ranking: "#1 Digital Manufacturer",
      automation: "Industry 4.0 Pioneer",
      updates: "OTA Software Updates",
      efficiency: "Continuous Optimization",
    },
    color: "from-red-600 to-rose-600",
    icon: <Factory className="w-8 h-8" />,
  },
];

const DigitalTransformationBlog = () => {
  const { openCalendar } = useCalendar();
  const [expandedSections, setExpandedSections] = useState({});
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(progress, 100));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const filteredCaseStudies = React.useMemo(() => {
    if (activeFilter === "all") {
      return caseStudies;
    }
    return caseStudies.filter((study) =>
      study.industry.toLowerCase().includes(activeFilter)
    );
  }, [activeFilter]);

  const industries = [
    "all",
    ...new Set(
      caseStudies.map((study) => study.industry.toLowerCase().split(" ")[0])
    ),
  ];

  const CaseStudyCard = ({ study }) => (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className={`h-2 bg-gradient-to-r ${study.color}`}></div>
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">{study.logo}</div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {study.company}
              </h3>
              <p className="text-gray-600">{study.industry}</p>
            </div>
          </div>
          <div
            className={`p-3 rounded-full bg-gradient-to-r ${study.color} text-white`}
          >
            {study.icon}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            {study.transformation}
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(study.metrics).map(([key, value]) => (
              <div
                key={key}
                className="bg-gray-50 rounded-lg p-3 group-hover:bg-gray-100 transition-colors"
              >
                <div className="text-sm text-gray-600 capitalize">{key}</div>
                <div className="font-semibold text-gray-900 text-sm">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => toggleSection(study.id)}
          className={`w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r ${study.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
        >
          <span>
            {expandedSections[study.id] ? "Hide Details" : "View Details"}
          </span>
          {expandedSections[study.id] ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>

        {expandedSections[study.id] && (
          <div className="mt-6 p-6 bg-gray-50 rounded-xl duration-300">
            <div className="prose prose-sm max-w-none">
              <h5 className="font-semibold mb-3">Transformation Journey</h5>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">
                    Strategic leadership commitment and cultural transformation
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">
                    Customer-centric digital-first approach
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">
                    Massive technology infrastructure investment
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">
                    Data-driven decision making and AI integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Digital Transformation Success Stories from{" "}
              <span className="text-yellow-400">Fortune 500</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              How Microsoft, Walmart, Tesla and other giants achieved
              transformation at scale with proven strategies and measurable
              results.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Free Framework PDF</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Assessment Tool
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-1 left-0 right-0">
          <svg
            className="w-full h-auto text-gray-50"
            fill="currentColor"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
            ></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* TL;DR Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Zap className="w-8 h-8 text-yellow-500 mr-3" />
                Executive Summary
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-6 h-6 text-green-500 mt-1" />
                    <p className="text-gray-700">
                      <strong>Scale Advantage:</strong> Fortune 500 companies
                      achieve 40% higher transformation success rates through
                      resource commitment
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-blue-500 mt-1" />
                    <p className="text-gray-700">
                      <strong>Leadership Focus:</strong> CEO-driven initiatives
                      show 3x better outcomes than IT-led transformations
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <DollarSign className="w-6 h-6 text-green-500 mt-1" />
                    <p className="text-gray-700">
                      <strong>ROI Impact:</strong> Average 15-25% revenue growth
                      within 3 years of transformation completion
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="w-6 h-6 text-purple-500 mt-1" />
                    <p className="text-gray-700">
                      <strong>Technology Investment:</strong> $10B+ average
                      annual tech spending drives competitive advantage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fortune 500 Lead */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Why Fortune 500 Companies Lead Digital Transformation
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">
                  Scale & Resources
                </h3>
                <p className="text-gray-600">
                  Massive budgets, global reach, and ability to invest in
                  cutting-edge technologies before competitors
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Market Pressure</h3>
                <p className="text-gray-600">
                  High-stakes competition demands rapid innovation and
                  digital-first customer experiences
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Talent Access</h3>
                <p className="text-gray-600">
                  Ability to attract top-tier technology talent and partner with
                  leading consulting firms
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Filter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Digital Transformation Case Studies
            </h2>

            {/* Industry Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setActiveFilter(industry)}
                  className={`px-4 py-2 rounded-full capitalize font-medium transition-all duration-300 ${
                    activeFilter === industry
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {industry === "all" ? "All Industries" : industry}
                </button>
              ))}
            </div>

            {/* Case Study Cards */}
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Key Lessons from Fortune 500 Transformations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-2 rounded-full">
                    <Users className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Leadership Commitment
                    </h3>
                    <p className="text-gray-300">
                      CEO-level sponsorship and cultural transformation are
                      non-negotiable for success
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-400 p-2 rounded-full">
                    <TrendingUp className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Customer-Centric Focus
                    </h3>
                    <p className="text-gray-300">
                      All successful transformations prioritize customer
                      experience and digital touchpoints
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-400 p-2 rounded-full">
                    <Bot className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Data & AI Integration
                    </h3>
                    <p className="text-gray-300">
                      Advanced analytics and AI capabilities drive competitive
                      differentiation
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-400 p-2 rounded-full">
                    <Cloud className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Cloud-First Strategy
                    </h3>
                    <p className="text-gray-300">
                      Modern cloud infrastructure enables scalability and
                      innovation velocity
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-400 p-2 rounded-full">
                    <Zap className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Agile Implementation
                    </h3>
                    <p className="text-gray-300">
                      Iterative approach with quick wins builds momentum and
                      stakeholder confidence
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-400 p-2 rounded-full">
                    <DollarSign className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Investment Commitment
                    </h3>
                    <p className="text-gray-300">
                      Sustained multi-billion dollar investments over 3-5 year
                      horizons
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Business Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Quantified Business Impact
            </h2>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  15-25%
                </div>
                <div className="text-gray-700 font-medium">Revenue Growth</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  30-40%
                </div>
                <div className="text-gray-700 font-medium">Cost Reduction</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  50-70%
                </div>
                <div className="text-gray-700 font-medium">
                  Process Efficiency
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  3-5x
                </div>
                <div className="text-gray-700 font-medium">
                  Innovation Speed
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Transformation Timeline & ROI
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        Year 1: Foundation & Quick Wins
                      </span>
                      <span className="text-gray-600">
                        5-10% efficiency gains
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        Year 2-3: Core Transformation
                      </span>
                      <span className="text-gray-600">
                        15-25% revenue growth
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        Year 4-5: Innovation Leadership
                      </span>
                      <span className="text-gray-600">
                        Market differentiation & sustained growth
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Trends */}
      <section className="py-16 bg-gradient-to-br from-indigo-100 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Future of Enterprise Transformation
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Bot className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  AI-First Operations
                </h3>
                <p className="text-gray-600">
                  Autonomous decision-making and intelligent automation across
                  all business functions
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Edge Computing</h3>
                <p className="text-gray-600">
                  Distributed processing for real-time insights and reduced
                  latency at global scale
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Sustainability Focus
                </h3>
                <p className="text-gray-600">
                  ESG-driven transformations and carbon-neutral digital
                  operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Transformation Journey?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Get a comprehensive assessment of your digital transformation
              readiness and personalized roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Framework Guide</span>
              </button>
              <button
                onClick={openCalendar}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How long does a Fortune 500 digital transformation typically take?",
                  a: "Most comprehensive transformations span 3-5 years, with initial results visible within 12-18 months. The timeline depends on scope, industry complexity, and organizational readiness.",
                },
                {
                  q: "What's the average investment required for enterprise-scale transformation?",
                  a: "Fortune 500 companies typically invest $100M-$15B annually in digital transformation, representing 8-15% of total revenue. ROI is typically achieved within 24-36 months.",
                },
                {
                  q: "Which technologies drive the most transformation success?",
                  a: "Cloud infrastructure, AI/ML capabilities, data analytics platforms, and API-first architectures consistently show the highest impact across industries.",
                },
                {
                  q: "What are the biggest risks in digital transformation?",
                  a: "Common failure points include lack of executive commitment, inadequate change management, technology debt, and underestimating cultural resistance. 70% of transformations fail due to people and process issues, not technology.",
                },
                {
                  q: "How do Fortune 500 companies measure transformation success?",
                  a: "Key metrics include revenue growth, operational efficiency, customer satisfaction scores, time-to-market improvements, and digital engagement rates. Most use balanced scorecards with financial and non-financial KPIs.",
                },
              ].map((faq, index) => (
                <div
                  key={faq.q}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Author & About */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  TP
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Tuhin Pal
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    Digital Transformation Strategist | Jenisys
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    With over 15 years of experience guiding enterprise
                    transformations, Tuhin has helped Fortune 500 companies
                    navigate complex digital journeys. He specializes in
                    cloud-first strategies, AI implementation, and
                    organizational change management.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 flex items-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 flex items-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Twitter</span>
                    </a>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 flex items-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>More Articles</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default DigitalTransformationBlog;

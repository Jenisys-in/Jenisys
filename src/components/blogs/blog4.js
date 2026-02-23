"use client";

import React, { useState, useEffect } from "react";
import { useCalendar } from "@/contexts/CalendarContext";
import {
  Shield,
  Lock,
  Signal,
  Eye,
  Brain,
  Network,
  Cloud,
  Key,
  Settings,
  Users,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ExternalLink,
  AlertTriangle,
  TrendingUp,
  Globe,
  Server,
  Smartphone,
  Cpu,
  Database,
  FileText,
  Award,
  Target,
  Zap,
  Activity,
  Menu,
  X,
  Calendar,
  Download,
} from "lucide-react";
import Footer from "../Footer";

const CybersecurityBlog = () => {
  const { openCalendar } = useCalendar();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [expandedCase, setExpandedCase] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Update active section based on scroll position
      const sections = [
        "hero",
        "why-matters",
        "threat-landscape",
        "metrics",
        "budget-planning",
        "action-items",
        "faq",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jumpToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const navigationItems = [
    { id: "why-matters", label: "Why It Matters", icon: AlertTriangle },
    { id: "threat-landscape", label: "Threat Landscape", icon: Target },
    { id: "metrics", label: "Security Metrics", icon: Activity },
    { id: "budget-planning", label: "Budget Planning", icon: TrendingUp },
    { id: "action-items", label: "Action Items", icon: Settings },
    { id: "faq", label: "FAQ", icon: Users },
  ];

  const faqData = [
    {
      question: "What is the biggest cybersecurity threat for CTOs in 2025?",
      answer:
        "AI-driven threats represent the most significant challenge, particularly deepfake-enabled social engineering, automated ransomware campaigns that adapt in real-time, and AI-powered supply chain attacks. These threats are evolving faster than traditional security measures can adapt, requiring a fundamental shift in defense strategies.",
    },
    {
      question:
        "How can AI be used both for attacks and defense in cybersecurity?",
      answer:
        "Attackers use AI for sophisticated phishing campaigns, automated exploit generation, deepfake creation, and adaptive malware that learns from defense mechanisms. Defenders leverage AI for behavioral analysis, anomaly detection, automated incident response, threat hunting, and predictive security analytics. The key is staying ahead of the AI arms race.",
    },
    {
      question:
        "What's the impact of quantum computing on cybersecurity planning?",
      answer:
        "Quantum computers will eventually break RSA, ECC, and other current encryption methods through Shor's algorithm. CTOs must begin transitioning to quantum-resistant cryptography (NIST Post-Quantum standards) now to protect against 'harvest now, decrypt later' attacks. This includes implementing crypto-agility and hybrid classical-quantum systems.",
    },
    {
      question:
        "How do Zero Trust and cybersecurity mesh help in real-world scenarios?",
      answer:
        "Zero Trust eliminates implicit trust by continuously validating every user, device, and transaction. Cybersecurity mesh provides distributed security services that follow data wherever it goes. Together, they enable secure remote work, protect against lateral movement in breaches, and provide consistent security across hybrid environments.",
    },
    {
      question:
        "What practical steps should CTOs prioritize for cybersecurity resilience?",
      answer:
        "Focus on identity-first security with MFA and PAM, implement comprehensive API security, deploy AI-powered threat detection, establish quantum-ready cryptography roadmaps, create incident response automation, and invest in continuous security training. Most importantly, align security investments with business risk tolerance and regulatory requirements.",
    },
  ];

  const threatLandscape = [
    {
      category: "AI-Powered Attacks",
      threats: [
        "Deepfake social engineering",
        "Automated spear phishing",
        "AI-generated malware",
        "Machine learning evasion techniques",
      ],
      riskLevel: "Critical",
      color: "red",
    },
    {
      category: "Cloud Security",
      threats: [
        "Misconfigured cloud storage",
        "Container vulnerabilities",
        "API security gaps",
        "Multi-cloud complexity",
      ],
      riskLevel: "High",
      color: "orange",
    },
    {
      category: "Supply Chain",
      threats: [
        "Third-party software compromises",
        "Hardware tampering",
        "Open source vulnerabilities",
        "Vendor access abuse",
      ],
      riskLevel: "High",
      color: "orange",
    },
    {
      category: "IoT/OT Security",
      threats: [
        "Unpatched industrial systems",
        "IoT botnets",
        "Physical access attacks",
        "Legacy protocol exploitation",
      ],
      riskLevel: "Medium",
      color: "yellow",
    },
  ];

  const securityMetrics = [
    {
      metric: "Mean Time to Detection (MTTD)",
      target: "<24 hours",
      current: "Average: 277 days",
      progress: 25,
    },
    {
      metric: "Mean Time to Response (MTTR)",
      target: "<1 hour",
      current: "Average: 73 days",
      progress: 50,
    },
    {
      metric: "Security Awareness Training Completion",
      target: "100%",
      current: "Average: 65%",
      progress: 75,
    },
    {
      metric: "Patch Management SLA",
      target: "Critical: 72 hours",
      current: "Average: 30 days",
      progress: 30,
    },
  ];

  const budgetAllocation = [
    {
      category: "Identity & Access Management",
      percentage: 25,
      amount: "$250K",
    },
    {
      category: "Endpoint Detection & Response",
      percentage: 20,
      amount: "$200K",
    },
    { category: "Cloud Security", percentage: 18, amount: "$180K" },
    { category: "Security Operations Center", percentage: 15, amount: "$150K" },
    { category: "Compliance & Audit", percentage: 10, amount: "$100K" },
    { category: "Training & Awareness", percentage: 7, amount: "$70K" },
    { category: "Incident Response", percentage: 5, amount: "$50K" },
  ];

  const actionItems = [
    {
      category: "Immediate (0-30 days)",
      items: [
        "Conduct AI threat assessment and implement deepfake detection tools",
        "Audit current cryptographic implementations for quantum readiness",
        "Enable MFA on all administrative accounts",
        "Deploy endpoint detection and response (EDR) solutions",
        "Establish security incident response team and procedures",
      ],
      color: "red",
    },
    {
      category: "Short-term (1-3 months)",
      items: [
        "Deploy Zero Trust architecture with micro-segmentation",
        "Implement comprehensive API security monitoring",
        "Establish OT/IoT device inventory and security protocols",
        "Launch security awareness training program",
        "Conduct third-party vendor security assessments",
      ],
      color: "orange",
    },
    {
      category: "Medium-term (3-6 months)",
      items: [
        "Update incident response plans for AI-driven attacks",
        "Implement automated vulnerability management",
        "Deploy cloud security posture management (CSPM)",
        "Establish security metrics and KPI dashboard",
        "Complete SOC 2 Type II audit preparation",
      ],
      color: "yellow",
    },
    {
      category: "Long-term (6-12 months)",
      items: [
        "Transition to post-quantum cryptography standards",
        "Implement advanced threat hunting capabilities",
        "Establish comprehensive business continuity program",
        "Deploy security orchestration and automated response (SOAR)",
        "Achieve target security framework compliance (ISO 27001)",
      ],
      color: "green",
    },
  ];

  const getRiskColor = (level) => {
    switch (level) {
      case "Critical":
        return "text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/20";
      case "High":
        return "text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/20";
      case "Medium":
        return "text-yellow-600 bg-yellow-50 dark:text-yellow-400 dark:bg-yellow-900/20";
      default:
        return "text-gray-600 bg-gray-50 dark:text-gray-400 dark:bg-gray-900/20";
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900" : "bg-white"
      }`}
    >
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Fixed Navigation Bar - Hidden on mobile, shown on desktop */}
      <nav className="fixed top-4 left-4 right-4 z-40 hidden lg:block">
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-xl font-bold text-gray-900 dark:text-white">
                Jenisys Security Guide
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {navigationItems.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => jumpToSection(item.id)}
                  className={`px-3 py-2 text-sm rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                    activeSection === item.id
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden xl:inline">{item.label}</span>
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-[#4F46E5]" />
              <span className="font-bold text-gray-900 dark:text-white">
                Jenisys
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-16 left-0 right-0 z-30 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => jumpToSection(item.id)}
                  className="w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-800 text-white pt-16 lg:pt-0"
      >
        <div className="absolute inset-0 bg-[#0F172A]/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-6 lg:mb-8">
              <div className="relative">
                <Shield className="w-16 h-16 lg:w-20 lg:h-20 text-blue-400 animate-pulse" />
                <Lock className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-400 absolute -top-2 -right-2 lg:-top-3 lg:-right-3 animate-bounce" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-ping"></div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cybersecurity Trends
              </span>
              <br />
              <span className="text-white">Every CTO Must Know</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto mb-6 lg:mb-8 leading-relaxed px-4">
              Navigate AI threats, quantum risks, and Zero Trust architectures
              shaping 2025's security landscape
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 text-sm px-4">
              <div className="bg-blue-500/20 backdrop-blur-sm px-3 py-2 rounded-full">
                📊 $10.5T Global Cybercrime Damage
              </div>
              <div className="bg-[#4F46E5]/20 backdrop-blur-sm px-3 py-2 rounded-full">
                🤖 AI-Powered Attacks Rising 300%
              </div>
              <div className="bg-pink-500/20 backdrop-blur-sm px-3 py-2 rounded-full">
                🔐 Quantum Threat Timeline: 5-10 Years
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pt-8 lg:pt-16 space-y-16 lg:space-y-20">
        {/* Executive Summary - Now integrated into flow, not sticky */}
        <section className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 lg:p-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <Signal className="w-6 h-6 lg:w-8 lg:h-8 mr-3 text-[#4F46E5]" />
            Executive Summary
            <span className="ml-3 text-xs lg:text-sm bg-red-100 text-red-800 px-2 py-1 rounded-full">
              Critical Reading
            </span>
          </h2>
          <div className="grid gap-4 lg:gap-6 mb-6 lg:mb-8">
            <div className="space-y-3 lg:space-y-4">
              {[
                "AI-driven threats are evolving faster than traditional defenses, with deepfake attacks increasing 900% year-over-year",
                "Quantum computing poses immediate cryptographic risks with 'harvest now, decrypt later' attacks already underway",
                "Zero Trust and mesh architectures are becoming essential for distributed workforce security",
                "Cloud and API security gaps are the #1 cause of data breaches in 2025",
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm lg:text-base text-gray-700 dark:text-gray-300">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section id="why-matters" className="space-y-6 lg:space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Why Cybersecurity Matters More Than Ever in 2025
          </h2>

          {/* Statistics Grid */}
          <div className="grid gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-l-4 border-red-400 p-4 lg:p-6 rounded-r-xl">
              <div className="text-2xl lg:text-4xl font-bold text-red-600 dark:text-red-400 mb-2">
                $10.5T
              </div>
              <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 mb-2">
                Global cybercrime damage by 2025
              </div>
              <div className="text-xs text-red-500">
                ↗ 15% increase from 2024
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-l-4 border-orange-400 p-4 lg:p-6 rounded-r-xl">
              <div className="text-2xl lg:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                277 days
              </div>
              <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 mb-2">
                Average time to identify a breach
              </div>
              <div className="text-xs text-orange-500">
                ↗ 12% increase from 2023
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-l-4 border-yellow-400 p-4 lg:p-6 rounded-r-xl sm:col-span-2 lg:col-span-1">
              <div className="text-2xl lg:text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                $4.88M
              </div>
              <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 mb-2">
                Average cost per data breach
              </div>
              <div className="text-xs text-yellow-500">
                ↗ 10% increase from 2024
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              The cybersecurity landscape has fundamentally shifted. Traditional
              perimeter-based security models are obsolete in an era of remote
              work, cloud-first architectures, and AI-powered attacks. CTOs must
              navigate increasingly sophisticated threats while managing complex
              regulatory requirements and board-level scrutiny.
            </p>
            <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              The convergence of AI, quantum computing, and distributed
              computing architectures has created a perfect storm of security
              challenges. Organizations that fail to adapt their security
              strategies risk not just data breaches, but business extinction.
            </p>
          </div>
        </section>

        {/* Threat Landscape Overview */}
        <section id="threat-landscape" className="space-y-6 lg:space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white flex items-center">
            <Target className="w-8 h-8 lg:w-10 lg:h-10 mr-3 lg:mr-4 text-red-500" />
            2025 Threat Landscape Overview
          </h2>

          <div className="grid gap-4 lg:gap-6 md:grid-cols-2">
            {threatLandscape.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-2 sm:space-y-0">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold self-start ${getRiskColor(
                      category.riskLevel
                    )}`}
                  >
                    {category.riskLevel} Risk
                  </span>
                </div>
                <ul className="space-y-2">
                  {category.threats.map((threat, threatIndex) => (
                    <li
                      key={threatIndex}
                      className="flex items-start text-sm lg:text-base text-gray-700 dark:text-gray-300"
                    >
                      <ArrowRight
                        className={`w-4 h-4 mr-2 mt-0.5 text-${category.color}-500 flex-shrink-0`}
                      />
                      <span>{threat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Security Metrics & KPIs */}
        <section id="metrics" className="space-y-6 lg:space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white flex items-center">
            <Activity className="w-8 h-8 lg:w-10 lg:h-10 mr-3 lg:mr-4 text-[#4F46E5]" />
            Security Metrics & Performance Indicators
          </h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 lg:p-6 rounded-xl">
            <h3 className="text-lg lg:text-xl font-semibold mb-4 text-indigo-800 dark:text-indigo-200">
              Why Security Metrics Matter
            </h3>
            <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300">
              You can't improve what you don't measure. Effective cybersecurity
              requires continuous monitoring of key performance indicators to
              identify weaknesses, track improvements, and demonstrate ROI to
              stakeholders.
            </p>
          </div>

          <div className="grid gap-3 lg:gap-4">
            {securityMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-2 lg:space-y-0">
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm lg:text-base text-gray-900 dark:text-white">
                      {metric.metric}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 space-y-1 sm:space-y-0">
                      <span className="text-xs lg:text-sm text-green-600 dark:text-green-400">
                        Target: {metric.target}
                      </span>
                      <span className="text-xs lg:text-sm text-orange-600 dark:text-orange-400">
                        {metric.current}
                      </span>
                    </div>
                  </div>
                  <div className="w-full lg:w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        metric.progress <= 30
                          ? "bg-red-400"
                          : metric.progress <= 60
                          ? "bg-yellow-400"
                          : "bg-green-400"
                      }`}
                      style={{ width: `${metric.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Budget Planning */}
        <section id="budget-planning" className="space-y-6 lg:space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white flex items-center">
            <TrendingUp className="w-8 h-8 lg:w-10 lg:h-10 mr-3 lg:mr-4 text-green-500" />
            2025 Cybersecurity Budget Planning
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 p-4 lg:p-6 rounded-xl">
            <h3 className="text-lg lg:text-xl font-semibold mb-4 text-green-800 dark:text-green-200">
              Budget Allocation Guidelines
            </h3>
            <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300">
              Based on industry benchmarks, organizations should allocate 8-15%
              of their IT budget to cybersecurity. Here's how leading
              organizations are distributing their security investments in 2025.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
            <div className="bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-xl shadow-lg">
              <h3 className="text-lg lg:text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Recommended Budget Allocation
              </h3>
              <div className="space-y-3 lg:space-y-4">
                {budgetAllocation.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="font-medium text-sm lg:text-base text-gray-900 dark:text-white">
                        {item.category}
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-sm lg:text-base text-gray-900 dark:text-white">
                          {item.percentage}%
                        </div>
                        <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                          {item.amount}
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-xl shadow-lg">
              <h3 className="text-lg lg:text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                ROI Calculation Framework
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-sm lg:text-base text-blue-800 dark:text-blue-200">
                    Cost Avoidance
                  </h4>
                  <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                    Prevented breach costs, regulatory fines, business
                    disruption
                  </p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-sm lg:text-base text-green-800 dark:text-green-200">
                    Operational Efficiency
                  </h4>
                  <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                    Automated processes, reduced manual work, faster incident
                    response
                  </p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-sm lg:text-base text-purple-800 dark:text-purple-200">
                    Business Enablement
                  </h4>
                  <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                    Faster product launches, customer trust, competitive
                    advantage
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 lg:p-4 rounded-lg mt-4">
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-green-600 dark:text-green-400">
                      3.2x
                    </div>
                    <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                      Average ROI for mature security programs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Action Plan */}
        <section id="action-items" className="space-y-6 lg:space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white flex items-center">
            <Settings className="w-8 h-8 lg:w-10 lg:h-10 mr-3 lg:mr-4 text-orange-500" />
            Strategic Action Plan for CTOs
          </h2>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 lg:p-6 rounded-xl">
            <h3 className="text-lg lg:text-xl font-semibold mb-4 text-orange-800 dark:text-orange-200">
              Phased Implementation Approach
            </h3>
            <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300">
              Implementing comprehensive cybersecurity improvements requires a
              structured approach. This roadmap prioritizes actions based on
              risk impact and implementation complexity.
            </p>
          </div>

          <div className="space-y-4 lg:space-y-6">
            {actionItems.map((phase, phaseIndex) => (
              <div
                key={phaseIndex}
                className="bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-lg lg:text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                  <div
                    className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center mr-3 text-white font-bold text-sm lg:text-base ${
                      phase.color === "red"
                        ? "bg-red-500"
                        : phase.color === "orange"
                        ? "bg-orange-500"
                        : phase.color === "yellow"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  >
                    {phaseIndex + 1}
                  </div>
                  {phase.category}
                </h3>
                <div className="grid gap-2 lg:gap-3 md:grid-cols-2">
                  {phase.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start space-x-2 lg:space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs lg:text-sm text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="space-y-6 lg:space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 lg:space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 lg:px-6 py-3 lg:py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="font-semibold text-sm lg:text-base text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-4 lg:px-6 pb-3 lg:pb-4 border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50">
                    <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 pt-3 lg:pt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Future Trends */}
        <section id="future-trends" className="space-y-6 lg:space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white flex items-center">
            <Globe className="w-8 h-8 lg:w-10 lg:h-10 mr-3 lg:mr-4 text-[#4F46E5]" />
            Looking Ahead: 2026-2030 Security Predictions
          </h2>

          <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-4 lg:p-6 rounded-xl">
              <h3 className="text-lg lg:text-xl font-semibold mb-4 text-cyan-800 dark:text-cyan-200">
                Emerging Technologies
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2 lg:space-x-3">
                  <Cpu className="w-4 h-4 lg:w-5 lg:h-5 text-[#4F46E5] mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm lg:text-base text-cyan-700 dark:text-cyan-300">
                      Neuromorphic Computing Security
                    </div>
                    <div className="text-xs lg:text-sm text-[#4F46E5] dark:text-cyan-400">
                      Brain-inspired computing architectures will require new
                      security paradigms
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-2 lg:space-x-3">
                  <Network className="w-4 h-4 lg:w-5 lg:h-5 text-[#4F46E5] mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm lg:text-base text-blue-700 dark:text-blue-300">
                      6G Network Security
                    </div>
                    <div className="text-xs lg:text-sm text-[#4F46E5] dark:text-blue-400">
                      Ultra-low latency networks will enable new attack vectors
                      and defenses
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-2 lg:space-x-3">
                  <Eye className="w-4 h-4 lg:w-5 lg:h-5 text-[#4F46E5] mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm lg:text-base text-indigo-700 dark:text-indigo-300">
                      Extended Reality (XR) Security
                    </div>
                    <div className="text-xs lg:text-sm text-[#4F46E5] dark:text-[#4F46E5]">
                      AR/VR environments will create new privacy and security
                      challenges
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 lg:p-6 rounded-xl">
              <h3 className="text-lg lg:text-xl font-semibold mb-4 text-purple-800 dark:text-purple-200">
                Regulatory Evolution
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2 lg:space-x-3">
                  <FileText className="w-4 h-4 lg:w-5 lg:h-5 text-[#7C3AED] mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm lg:text-base text-purple-700 dark:text-purple-300">
                      AI Governance Frameworks
                    </div>
                    <div className="text-xs lg:text-sm text-[#7C3AED] dark:text-[#7C3AED]">
                      New regulations governing AI system security and bias
                      prevention
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-2 lg:space-x-3">
                  <Globe className="w-4 h-4 lg:w-5 lg:h-5 text-pink-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm lg:text-base text-pink-700 dark:text-pink-300">
                      Global Data Sovereignty
                    </div>
                    <div className="text-xs lg:text-sm text-pink-600 dark:text-pink-400">
                      Stricter requirements for data localization and
                      cross-border transfers
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-2 lg:space-x-3">
                  <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm lg:text-base text-red-700 dark:text-red-300">
                      Quantum Cryptography Standards
                    </div>
                    <div className="text-xs lg:text-sm text-red-600 dark:text-red-400">
                      Mandatory transition timelines for post-quantum
                      cryptography
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-xl shadow-lg">
            <h3 className="text-lg lg:text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Preparing for the Unknown
            </h3>
            <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 mb-4">
              While we can predict certain trends, the cybersecurity landscape
              will continue to evolve in unexpected ways. The most successful
              organizations will be those that build adaptive, resilient
              security architectures capable of responding to novel threats.
            </p>
            <div className="grid gap-3 lg:gap-4 md:grid-cols-3">
              <div className="text-center p-3 lg:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="font-semibold text-sm lg:text-base text-blue-800 dark:text-blue-200">
                  Adaptability
                </div>
                <div className="text-xs lg:text-sm text-[#4F46E5] dark:text-blue-400">
                  Build flexible security architectures
                </div>
              </div>
              <div className="text-center p-3 lg:p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="font-semibold text-sm lg:text-base text-green-800 dark:text-green-200">
                  Continuous Learning
                </div>
                <div className="text-xs lg:text-sm text-green-600 dark:text-green-400">
                  Invest in team education and development
                </div>
              </div>
              <div className="text-center p-3 lg:p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="font-semibold text-sm lg:text-base text-purple-800 dark:text-purple-200">
                  Innovation
                </div>
                <div className="text-xs lg:text-sm text-[#7C3AED] dark:text-[#7C3AED]">
                  Embrace emerging security technologies
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-pink-600 text-white p-8 lg:p-12 rounded-2xl lg:rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0F172A]/10"></div>
          <div className="relative">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6">
              Ready to Transform Your Security Posture?
            </h2>
            <p className="text-base lg:text-xl mb-6 lg:mb-8 text-blue-100 max-w-3xl mx-auto">
              The cybersecurity landscape of 2025 demands proactive leadership
              and strategic thinking. Don't wait for a breach to force your
              hand—start building your resilient security architecture today.
            </p>
            <div className="grid gap-3 lg:gap-6 sm:grid-cols-3 mb-6 lg:mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-3 lg:p-4 rounded-lg">
                <div className="text-xl lg:text-2xl font-bold">90%</div>
                <div className="text-xs lg:text-sm">
                  of organizations unprepared for quantum threats
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-3 lg:p-4 rounded-lg">
                <div className="text-xl lg:text-2xl font-bold">3000%</div>
                <div className="text-xs lg:text-sm">
                  increase in AI-powered attacks
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-3 lg:p-4 rounded-lg">
                <div className="text-xl lg:text-2xl font-bold">$10.5T</div>
                <div className="text-xs lg:text-sm">
                  annual cybercrime damage
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <button className="bg-white text-[#4F46E5] px-6 lg:px-8 py-3 lg:py-4 rounded-lg lg:rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg text-sm lg:text-base">
                <Download className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                Download Security Checklist
              </button>
              <button
                onClick={openCalendar}
                className="border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg lg:rounded-xl font-semibold hover:bg-white hover:text-[#4F46E5] transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center text-sm lg:text-base"
              >
                <Calendar className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Author Section */}
        <section className="border-t border-gray-200 dark:border-gray-700 pt-8 lg:pt-12 pb-8 lg:pb-16">
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg lg:text-2xl shadow-lg flex-shrink-0">
              TP
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-xl lg:text-2xl text-gray-900 dark:text-white mb-2">
                Tuhin Pal
              </div>
              <div className="text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-2">
                Chief Technology Officer, Jenisys
              </div>
              <div className="text-sm lg:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Tuhin brings over 15 years of cybersecurity expertise, having
                led security transformations at Fortune 500 companies and
                emerging startups. He specializes in AI-driven security
                architectures, zero-trust implementations, and quantum-resistant
                cryptography planning.
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { label: "Zero Trust Architecture", color: "blue" },
                  { label: "AI Security", color: "purple" },
                  { label: "Quantum Cryptography", color: "green" },
                  { label: "Cloud Security", color: "orange" },
                ].map((tag, index) => (
                  <span
                    key={index}
                    className={`bg-${tag.color}-100 text-${tag.color}-800 dark:bg-${tag.color}-900/30 dark:text-${tag.color}-400 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <div className="text-xs lg:text-sm text-gray-500 dark:text-gray-500">
                Published May 8, 2025 • 15 min read • Updated for latest threat
                intelligence
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CybersecurityBlog;

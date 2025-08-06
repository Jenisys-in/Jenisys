"use client";

import React, { useState, useEffect } from "react";
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
} from "lucide-react";

const CybersecurityBlog = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [expandedCase, setExpandedCase] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jumpToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const toggleCase = (index) => {
    setExpandedCase(expandedCase === index ? null : index);
  };

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
    {
      question:
        "How should organizations prepare for emerging threats like IoT and 5G security challenges?",
      answer:
        "Implement comprehensive asset discovery and management, deploy network segmentation for IoT devices, establish secure provisioning and lifecycle management, monitor for anomalous behavior, and create specific incident response procedures for IoT/OT environments. For 5G, focus on network slicing security and edge computing protection.",
    },
    {
      question:
        "What role does security culture play in organizational resilience?",
      answer:
        "Security culture is critical - human error causes 95% of successful cyber attacks. Organizations need continuous security awareness training, simulated phishing exercises, clear incident reporting procedures, and leadership commitment to security. Creating a blame-free environment for reporting security incidents is essential for organizational learning and improvement.",
    },
  ];

  const caseStudies = [
    {
      title: "SolarWinds Supply Chain Attack",
      impact: "18,000+ organizations compromised",
      lesson: "Supply chain security is critical",
      details:
        "Nation-state actors compromised SolarWinds' Orion platform, affecting major government agencies and Fortune 500 companies. The attack remained undetected for months, highlighting the need for comprehensive supply chain security, code signing verification, and behavioral monitoring.",
      keyTakeaways: [
        "Implement zero-trust architecture for vendor access",
        "Establish comprehensive supply chain security programs",
        "Deploy behavioral monitoring for trusted software",
        "Create incident response plans for supply chain compromises",
      ],
    },
    {
      title: "Colonial Pipeline Ransomware",
      impact: "$4.4M ransom paid, 6-day shutdown",
      lesson: "Critical infrastructure requires special protection",
      details:
        "DarkSide ransomware group shut down the largest fuel pipeline in the US. The attack exploited a legacy VPN with no multi-factor authentication, demonstrating the vulnerability of operational technology (OT) systems and critical infrastructure.",
      keyTakeaways: [
        "Segment OT/IT networks completely",
        "Implement MFA on all remote access points",
        "Maintain offline backups for critical systems",
        "Develop business continuity plans for extended outages",
      ],
    },
    {
      title: "Microsoft Exchange Server Attacks",
      impact: "250,000+ servers compromised globally",
      lesson: "Patch management is business-critical",
      details:
        "Multiple threat actors exploited zero-day vulnerabilities in Exchange Server, creating persistent backdoors in organizations worldwide. The scale and speed of exploitation emphasized the critical importance of rapid patch deployment and vulnerability management.",
      keyTakeaways: [
        "Establish emergency patch deployment procedures",
        "Implement automated vulnerability scanning",
        "Deploy endpoint detection and response (EDR) solutions",
        "Create rapid incident response capabilities",
      ],
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

  const complianceFrameworks = [
    {
      name: "SOC 2 Type II",
      description:
        "Security, availability, processing integrity, confidentiality, and privacy controls",
      timeline: "6-12 months",
      priority: "High",
    },
    {
      name: "ISO 27001",
      description:
        "Information security management system international standard",
      timeline: "12-18 months",
      priority: "High",
    },
    {
      name: "NIST Cybersecurity Framework",
      description: "Identify, Protect, Detect, Respond, Recover framework",
      timeline: "3-6 months",
      priority: "Medium",
    },
    {
      name: "PCI DSS",
      description: "Payment card industry data security standards",
      timeline: "6-9 months",
      priority: "High (if applicable)",
    },
    {
      name: "GDPR/CCPA",
      description: "Data privacy and protection regulations",
      timeline: "6-12 months",
      priority: "High (if applicable)",
    },
  ];

  const securityMetrics = [
    {
      metric: "Mean Time to Detection (MTTD)",
      target: "<24 hours",
      current: "Average: 277 days",
    },
    {
      metric: "Mean Time to Response (MTTR)",
      target: "<1 hour",
      current: "Average: 73 days",
    },
    {
      metric: "Security Awareness Training Completion",
      target: "100%",
      current: "Average: 65%",
    },
    {
      metric: "Patch Management SLA",
      target: "Critical: 72 hours",
      current: "Average: 30 days",
    },
    {
      metric: "Backup Recovery Test Success",
      target: "100%",
      current: "Average: 73%",
    },
    {
      metric: "Vendor Security Assessment Completion",
      target: "100%",
      current: "Average: 45%",
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

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-40 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Shield className="w-20 h-20 text-blue-400 animate-pulse" />
                <Lock className="w-10 h-10 text-yellow-400 absolute -top-3 -right-3 animate-bounce" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-ping"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cybersecurity Trends Every <span className="text-white">CTO</span>{" "}
              Must Know
            </h1>
            <p className="text-xl md:text-3xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Navigate AI threats, quantum risks, and Zero Trust architectures
              shaping 2025's security landscape
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full">
                📊 $10.5T Global Cybercrime Damage
              </div>
              <div className="bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full">
                🤖 AI-Powered Attacks Rising 300%
              </div>
              <div className="bg-pink-500/20 backdrop-blur-sm px-4 py-2 rounded-full">
                🔐 Quantum Threat Timeline: 5-10 Years
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary - Sticky */}
      <section className="sticky top-6 z-30 mx-4 my-8">
        <div className="bg-white dark:bg-gray-800 shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700 rounded-2xl backdrop-blur-sm">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <Signal className="w-8 h-8 mr-3 text-blue-500" />
              Executive Summary
              <span className="ml-3 text-sm bg-red-100 text-red-800 px-2 py-1 rounded-full">
                Critical Reading
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>AI-driven threats</strong> are evolving faster than
                    traditional defenses, with deepfake attacks increasing 900%
                    year-over-year
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Quantum computing</strong> poses immediate
                    cryptographic risks with "harvest now, decrypt later"
                    attacks already underway
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Zero Trust and mesh architectures</strong> are
                    becoming essential for distributed workforce security
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Cloud and API security</strong> gaps are the #1
                    cause of data breaches in 2025
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { id: "threat-landscape", label: "Threat Landscape" },
                { id: "ai-threats", label: "AI Threats" },
                { id: "quantum-risk", label: "Quantum Risk" },
                { id: "zero-trust", label: "Zero Trust" },
                { id: "case-studies", label: "Case Studies" },
                { id: "compliance", label: "Compliance" },
                { id: "budget-planning", label: "Budget Planning" },
                { id: "action-items", label: "Action Items" },
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => jumpToSection(section.id)}
                  className="px-4 py-2 text-sm bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800 dark:hover:to-purple-800 transition-all duration-200 hover:scale-105"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 space-y-20">
        {/* Why It Matters */}
        <section id="why-matters" className="space-y-8">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Why Cybersecurity Matters More Than Ever in 2025
          </h2>

          {/* Statistics Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-l-4 border-red-400 p-6 rounded-r-xl">
              <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">
                $10.5T
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Global cybercrime damage by 2025
              </div>
              <div className="text-xs text-red-500">
                ↗ 15% increase from 2024
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-l-4 border-orange-400 p-6 rounded-r-xl">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                277 days
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Average time to identify a breach
              </div>
              <div className="text-xs text-orange-500">
                ↗ 12% increase from 2023
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                $4.88M
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Average cost per data breach
              </div>
              <div className="text-xs text-yellow-500">
                ↗ 10% increase from 2024
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              The cybersecurity landscape has fundamentally shifted. Traditional
              perimeter-based security models are obsolete in an era of remote
              work, cloud-first architectures, and AI-powered attacks. CTOs must
              navigate increasingly sophisticated threats while managing complex
              regulatory requirements and board-level scrutiny.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              The convergence of AI, quantum computing, and distributed
              computing architectures has created a perfect storm of security
              challenges. Organizations that fail to adapt their security
              strategies risk not just data breaches, but business extinction.
              The question is no longer "if" you'll be attacked, but "when" and
              "how well prepared are you?"
            </p>
          </div>
        </section>

        {/* Threat Landscape Overview */}
        <section id="threat-landscape" className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center">
            <Target className="w-10 h-10 mr-4 text-red-500" />
            2025 Threat Landscape Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {threatLandscape.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getRiskColor(
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
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <ArrowRight
                        className={`w-4 h-4 mr-2 text-${category.color}-500`}
                      />
                      {threat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Compliance Automation Strategy
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                  Automated Compliance Tools
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Policy-as-Code implementation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Continuous compliance monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Automated evidence collection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Real-time compliance reporting
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                  Risk Management Integration
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                    Integrated GRC platforms
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                    Third-party risk assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                    Vendor security scorecards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                    Business impact analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security Metrics & KPIs */}
        <section id="metrics" className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center">
            <Activity className="w-10 h-10 mr-4 text-indigo-500" />
            Security Metrics & Performance Indicators
          </h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-indigo-800 dark:text-indigo-200">
              Why Security Metrics Matter
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You can't improve what you don't measure. Effective cybersecurity
              requires continuous monitoring of key performance indicators to
              identify weaknesses, track improvements, and demonstrate ROI to
              stakeholders.
            </p>
          </div>

          <div className="grid gap-4">
            {securityMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {metric.metric}
                    </h4>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm text-green-600 dark:text-green-400">
                        Target: {metric.target}
                      </span>
                      <span className="text-sm text-orange-600 dark:text-orange-400">
                        {metric.current}
                      </span>
                    </div>
                  </div>
                  <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        index % 3 === 0
                          ? "bg-red-400 w-1/4"
                          : index % 3 === 1
                          ? "bg-yellow-400 w-1/2"
                          : "bg-green-400 w-3/4"
                      } transition-all duration-300`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Budget Planning */}
        <section id="budget-planning" className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center">
            <TrendingUp className="w-10 h-10 mr-4 text-green-500" />
            2025 Cybersecurity Budget Planning
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-200">
              Budget Allocation Guidelines
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Based on industry benchmarks, organizations should allocate 8-15%
              of their IT budget to cybersecurity. Here's how leading
              organizations are distributing their security investments in 2025.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Recommended Budget Allocation
              </h3>
              <div className="space-y-3">
                {budgetAllocation.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {item.category}
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="ml-4 text-right">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {item.percentage}%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {item.amount}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                ROI Calculation Framework
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200">
                    Cost Avoidance
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Prevented breach costs, regulatory fines, business
                    disruption
                  </p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-green-800 dark:text-green-200">
                    Operational Efficiency
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Automated processes, reduced manual work, faster incident
                    response
                  </p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200">
                    Business Enablement
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Faster product launches, customer trust, competitive
                    advantage
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      3.2x
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Average ROI for mature security programs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Action Items */}
        <section id="action-items" className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center">
            <Settings className="w-10 h-10 mr-4 text-orange-500" />
            Strategic Action Plan for CTOs
          </h2>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-orange-800 dark:text-orange-200">
              Phased Implementation Approach
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Implementing comprehensive cybersecurity improvements requires a
              structured approach. This roadmap prioritizes actions based on
              risk impact and implementation complexity.
            </p>
          </div>

          <div className="space-y-6">
            {actionItems.map((phase, phaseIndex) => (
              <div
                key={phaseIndex}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white font-bold ${
                      phaseIndex === 0
                        ? "bg-red-500"
                        : phaseIndex === 1
                        ? "bg-orange-500"
                        : phaseIndex === 2
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  >
                    {phaseIndex + 1}
                  </div>
                  {phase.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {phase.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced FAQ */}
        <section id="faq" className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4 border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50">
                    <p className="text-gray-700 dark:text-gray-300 pt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Future Trends */}
        <section id="future-trends" className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center">
            <Globe className="w-10 h-10 mr-4 text-cyan-500" />
            Looking Ahead: 2026-2030 Security Predictions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-cyan-800 dark:text-cyan-200">
                Emerging Technologies
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Cpu className="w-5 h-5 text-cyan-600 mt-1" />
                  <div>
                    <div className="font-medium text-cyan-700 dark:text-cyan-300">
                      Neuromorphic Computing Security
                    </div>
                    <div className="text-sm text-cyan-600 dark:text-cyan-400">
                      Brain-inspired computing architectures will require new
                      security paradigms
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Network className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <div className="font-medium text-blue-700 dark:text-blue-300">
                      6G Network Security
                    </div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">
                      Ultra-low latency networks will enable new attack vectors
                      and defenses
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Eye className="w-5 h-5 text-indigo-600 mt-1" />
                  <div>
                    <div className="font-medium text-indigo-700 dark:text-indigo-300">
                      Extended Reality (XR) Security
                    </div>
                    <div className="text-sm text-indigo-600 dark:text-indigo-400">
                      AR/VR environments will create new privacy and security
                      challenges
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-200">
                Regulatory Evolution
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <FileText className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <div className="font-medium text-purple-700 dark:text-purple-300">
                      AI Governance Frameworks
                    </div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">
                      New regulations governing AI system security and bias
                      prevention
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-pink-600 mt-1" />
                  <div>
                    <div className="font-medium text-pink-700 dark:text-pink-300">
                      Global Data Sovereignty
                    </div>
                    <div className="text-sm text-pink-600 dark:text-pink-400">
                      Stricter requirements for data localization and
                      cross-border transfers
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <div className="font-medium text-red-700 dark:text-red-300">
                      Quantum Cryptography Standards
                    </div>
                    <div className="text-sm text-red-600 dark:text-red-400">
                      Mandatory transition timelines for post-quantum
                      cryptography
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Preparing for the Unknown
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While we can predict certain trends, the cybersecurity landscape
              will continue to evolve in unexpected ways. The most successful
              organizations will be those that build adaptive, resilient
              security architectures capable of responding to novel threats.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="font-semibold text-blue-800 dark:text-blue-200">
                  Adaptability
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400">
                  Build flexible security architectures
                </div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="font-semibold text-green-800 dark:text-green-200">
                  Continuous Learning
                </div>
                <div className="text-sm text-green-600 dark:text-green-400">
                  Invest in team education and development
                </div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="font-semibold text-purple-800 dark:text-purple-200">
                  Innovation
                </div>
                <div className="text-sm text-purple-600 dark:text-purple-400">
                  Embrace emerging security technologies
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Conclusion */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-12 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Security Posture?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              The cybersecurity landscape of 2025 demands proactive leadership
              and strategic thinking. Don't wait for a breach to force your
              hand—start building your resilient security architecture today.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold">90%</div>
                <div className="text-sm">
                  of organizations unprepared for quantum threats
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold">3000%</div>
                <div className="text-sm">increase in AI-powered attacks</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold">$10.5T</div>
                <div className="text-sm">annual cybercrime damage</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg"
              >
                Download Complete CTO Security Checklist
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Schedule Security Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Enhanced Author Section */}
        <section className="border-t border-gray-200 dark:border-gray-700 pt-12 pb-16">
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              TP
            </div>
            <div className="flex-1">
              <div className="font-bold text-2xl text-gray-900 dark:text-white mb-2">
                Tuhin Pal
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                Chief Technology Officer, Jenisys
              </div>
              <div className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Tuhin brings over 15 years of cybersecurity expertise, having
                led security transformations at Fortune 500 companies and
                emerging startups. He specializes in AI-driven security
                architectures, zero-trust implementations, and quantum-resistant
                cryptography planning.
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1 rounded-full text-sm">
                  Zero Trust Architecture
                </span>
                <span className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 px-3 py-1 rounded-full text-sm">
                  AI Security
                </span>
                <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-full text-sm">
                  Quantum Cryptography
                </span>
                <span className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 px-3 py-1 rounded-full text-sm">
                  Cloud Security
                </span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-500">
                Published May 8, 2025 • 15 min read • Updated for latest threat
                intelligence
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CybersecurityBlog;

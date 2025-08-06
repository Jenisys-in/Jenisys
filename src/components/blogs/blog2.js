"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Cloud,
  Server,
  DollarSign,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Download,
  Sun,
  Moon,
} from "lucide-react";

export default function CloudMigrationBlog() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const sevenRs = [
    {
      name: "Rehost",
      description: "Lift-and-shift to cloud infrastructure",
      complexity: "Low",
      timeframe: "2-4 weeks",
      cost: "$",
      example: "Move existing VM to AWS EC2",
    },
    {
      name: "Replatform",
      description: "Minor optimizations for cloud benefits",
      complexity: "Medium",
      timeframe: "1-3 months",
      cost: "$$",
      example: "Migrate to RDS instead of self-managed DB",
    },
    {
      name: "Refactor",
      description: "Re-architect for cloud-native benefits",
      complexity: "High",
      timeframe: "3-12 months",
      cost: "$$$",
      example: "Containerize monolith into microservices",
    },
    {
      name: "Repurchase",
      description: "Replace with cloud-native SaaS solution",
      complexity: "Medium",
      timeframe: "1-6 months",
      cost: "$$",
      example: "Switch from on-prem CRM to Salesforce",
    },
    {
      name: "Relocate",
      description: "Move to cloud with minimal changes",
      complexity: "Low",
      timeframe: "2-8 weeks",
      cost: "$",
      example: "VMware workloads to VMware Cloud",
    },
    {
      name: "Retain",
      description: "Keep on-premises for specific reasons",
      complexity: "N/A",
      timeframe: "N/A",
      cost: "N/A",
      example: "Legacy systems with compliance needs",
    },
    {
      name: "Retire",
      description: "Decommission unused applications",
      complexity: "Low",
      timeframe: "1-4 weeks",
      cost: "Savings",
      example: "Remove redundant monitoring tools",
    },
  ];

  const roadmapSteps = [
    {
      step: 1,
      title: "Assessment & Discovery",
      description:
        "Inventory applications, dependencies, and current infrastructure costs",
      duration: "2-4 weeks",
    },
    {
      step: 2,
      title: "Prioritization Matrix",
      description:
        "Rank applications by business value, complexity, and migration effort",
      duration: "1 week",
    },
    {
      step: 3,
      title: "Cloud Architecture Design",
      description:
        "Design target architecture with security, scalability, and cost in mind",
      duration: "2-3 weeks",
    },
    {
      step: 4,
      title: "Pilot Migration",
      description:
        "Start with low-risk, high-value applications to validate approach",
      duration: "4-8 weeks",
    },
    {
      step: 5,
      title: "Security & Compliance Setup",
      description:
        "Implement IAM, encryption, monitoring, and compliance frameworks",
      duration: "2-4 weeks",
    },
    {
      step: 6,
      title: "Automated Testing",
      description:
        "Set up CI/CD pipelines and automated testing for migrated applications",
      duration: "2-3 weeks",
    },
    {
      step: 7,
      title: "Full Migration Waves",
      description: "Execute migration in planned waves based on dependencies",
      duration: "3-12 months",
    },
    {
      step: 8,
      title: "Optimization & Cost Management",
      description: "Implement FinOps practices and continuous optimization",
      duration: "Ongoing",
    },
  ];

  const faqs = [
    {
      question: "What is replatforming in cloud migration?",
      answer:
        "Replatforming involves making minor optimizations to applications during migration to take advantage of cloud capabilities without changing the core architecture. For example, migrating to a managed database service instead of running your own database servers.",
    },
    {
      question: "How long does cloud migration take for startups?",
      answer:
        "Cloud migration timelines vary greatly depending on complexity. Simple lift-and-shift migrations can take 2-8 weeks, while comprehensive refactoring projects may take 6-18 months. Most startups complete their initial migration within 3-6 months.",
    },
    {
      question: "What are the biggest cost savings from cloud migration?",
      answer:
        "Startups typically see 20-50% cost reduction through elimination of hardware costs, reduced IT staff needs, pay-as-you-use pricing, and automatic scaling. Additional savings come from improved developer productivity and faster time-to-market.",
    },
    {
      question: "Should startups choose lift-and-shift or refactor first?",
      answer:
        "Most startups should start with lift-and-shift for quick wins and immediate cost savings, then refactor applications over time. This approach reduces risk while providing immediate benefits and learning opportunities.",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark" : ""
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-indigo-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-40 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-200"
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700" />
        )}
      </button>

      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-cyan-300 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  Cloud Migration Strategies for Modern Startups
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Master the 7 R's framework and build a bulletproof migration
                  roadmap that saves costs while accelerating growth.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Free Readiness Checklist
                  </button>
                  <button className="px-8 py-4 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900 rounded-lg font-semibold transition-all duration-200">
                    Read Guide
                  </button>
                </div>
              </div>

              {/* Cloud Animation */}
              <div className="relative">
                <div className="relative z-10">
                  <Cloud className="w-32 h-32 text-indigo-400 mx-auto animate-bounce" />
                  <div className="absolute top-8 left-8 w-16 h-16 bg-cyan-400 dark:bg-cyan-500 rounded-lg flex items-center justify-center animate-pulse">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-16 right-4 w-12 h-12 bg-purple-400 dark:bg-purple-500 rounded-lg flex items-center justify-center animate-pulse animation-delay-1000">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-green-400 dark:bg-green-500 rounded-lg flex items-center justify-center animate-pulse animation-delay-2000">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* TL;DR Section */}
              <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-gray-800 dark:to-indigo-900 rounded-xl p-8 mb-12 border border-indigo-100 dark:border-indigo-800">
                <h2 className="text-2xl font-bold mb-4 text-indigo-900 dark:text-indigo-100">
                  TL;DR - Key Takeaways
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>
                      Start with lift-and-shift for 30-50% immediate cost
                      savings, then optimize iteratively
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>
                      Use the 7 R's framework to categorize applications and
                      choose the right migration strategy
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>
                      Pilot with low-risk, high-value applications to validate
                      your approach
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>
                      Implement FinOps practices early: spot instances,
                      auto-scaling, and budget alerts
                    </span>
                  </li>
                </ul>
              </div>

              {/* Why Startups Migrate */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
                  Why Startups Are Racing to the Cloud
                </h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <DollarSign className="w-12 h-12 text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Cost Agility</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Reduce infrastructure costs by 30-50% while eliminating
                      upfront hardware investments
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <Zap className="w-12 h-12 text-yellow-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      Speed to Market
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Deploy new features 5x faster with managed services and
                      auto-scaling
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <Shield className="w-12 h-12 text-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      Enterprise Security
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Access enterprise-grade security and compliance without
                      the overhead
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Recent surveys show that 94% of startups report improved
                  operational efficiency after cloud migration, with the average
                  company reducing their IT operational costs by 35% while
                  increasing deployment frequency by 300%.
                </p>
              </section>

              {/* 7 R's of Cloud Migration */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
                  The 7 R's of Cloud Migration
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  The 7 R's framework, originally developed by AWS, provides a
                  systematic approach to categorize applications and choose the
                  optimal migration strategy based on business requirements,
                  technical constraints, and resource availability.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <thead className="bg-indigo-600 dark:bg-indigo-700 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">
                          Strategy
                        </th>
                        <th className="px-6 py-4 text-left font-semibold">
                          Description
                        </th>
                        <th className="px-6 py-4 text-left font-semibold">
                          Complexity
                        </th>
                        <th className="px-6 py-4 text-left font-semibold">
                          Timeframe
                        </th>
                        <th className="px-6 py-4 text-left font-semibold">
                          Cost
                        </th>
                        <th className="px-6 py-4 text-left font-semibold">
                          Example
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {sevenRs.map((item, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          <td className="px-6 py-4 font-semibold text-indigo-600 dark:text-indigo-400">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                            {item.description}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                item.complexity === "Low"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                  : item.complexity === "Medium"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                  : item.complexity === "High"
                                  ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                              }`}
                            >
                              {item.complexity}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                            {item.timeframe}
                          </td>
                          <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                            {item.cost}
                          </td>
                          <td className="px-6 py-4 text-gray-600 dark:text-gray-400 text-sm">
                            {item.example}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Strategy Patterns */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
                  Strategy Patterns by Startup Type
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                      Greenfield SaaS
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Cloud-native from day one with containerized
                      microservices, managed databases, and serverless
                      functions.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">
                          Kubernetes + managed services
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Infrastructure as Code</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Auto-scaling from start</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                      Fintech with Compliance
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Hybrid approach balancing compliance requirements with
                      cloud benefits, focusing on security and audit trails.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">
                          Private cloud integration
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Enhanced monitoring</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Compliance automation</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                      AI/ML Workloads
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      GPU-optimized instances, managed ML services, and data
                      pipeline automation for scalable AI applications.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">
                          Spot instances for training
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Managed ML pipelines</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Auto-scaling compute</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Step-by-Step Roadmap */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
                  8-Step Migration Roadmap
                </h2>
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-300 dark:bg-indigo-600"></div>
                  <div className="space-y-8">
                    {roadmapSteps.map((step, index) => (
                      <div key={index} className="relative flex items-start">
                        <div className="flex-shrink-0 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {step.step}
                        </div>
                        <div className="ml-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                              {step.title}
                            </h3>
                            <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Cost & FinOps Tips */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
                  Cost Optimization & FinOps Best Practices
                </h2>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-green-900 rounded-xl p-8 border border-green-100 dark:border-green-800">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-200">
                        Immediate Cost Savers
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Spot Instances:</strong> Save 70-90% on
                            compute for non-critical workloads
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Reserved Instances:</strong> 30-60% savings
                            for predictable workloads
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Auto-scaling:</strong> Match capacity to
                            demand automatically
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200">
                        Monitoring & Governance
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Budget Alerts:</strong> Set up proactive
                            cost monitoring
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Resource Tagging:</strong> Track costs by
                            team, project, environment
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Right-sizing:</strong> Regularly review and
                            optimize instance sizes
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-semibold mb-4">
                    Sample Cost Optimization Code
                  </h3>
                  <pre className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
                    <code className="text-gray-800 dark:text-gray-200">{`# Auto-scaling policy example
aws autoscaling put-scaling-policy \\
  --policy-name cpu-scale-up \\
  --auto-scaling-group-name my-asg \\
  --policy-type TargetTrackingScaling \\
  --target-tracking-configuration '{
    "TargetValue": 70.0,
    "PredefinedMetricSpecification": {
      "PredefinedMetricType": "ASGAverageCPUUtilization"
    }
  }'`}</code>
                  </pre>
                </div>
              </section>

              {/* SEO Migration Notes */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
                  Protecting SEO During Migration
                </h2>
                <div className="bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-yellow-800 dark:text-yellow-200">
                        Critical SEO Checklist
                      </h3>
                      <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-yellow-600" />
                          <span>Set up 301 redirects for all URL changes</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-yellow-600" />
                          <span>Update canonical tags and internal links</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-yellow-600" />
                          <span>
                            Monitor crawl errors and server response times
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-yellow-600" />
                          <span>
                            Verify SSL certificates and HTTPS implementation
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-yellow-600" />
                          <span>Test page load speeds and Core Web Vitals</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                    >
                      <details className="group">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            {faq.question}
                          </h3>
                          <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              </section>

              {/* Conclusion & CTA */}
              <section className="mb-16">
                <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl p-8 text-white text-center">
                  <h2 className="text-3xl font-bold mb-4">
                    Ready to Start Your Cloud Migration?
                  </h2>
                  <p className="text-xl mb-8 opacity-90">
                    Download our comprehensive Cloud Readiness Checklist and get
                    started with confidence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                      <Download className="w-5 h-5" />
                      Download Free Checklist
                    </button>
                    <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-indigo-600 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                      Schedule Consultation
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </section>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    <a
                      href="#why-migrate"
                      className="block text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      Why Startups Migrate
                    </a>
                    <a
                      href="#seven-rs"
                      className="block text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      7 R's Framework
                    </a>
                    <a
                      href="#strategy-patterns"
                      className="block text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      Strategy Patterns
                    </a>
                    <a
                      href="#roadmap"
                      className="block text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      Migration Roadmap
                    </a>
                    <a
                      href="#finops"
                      className="block text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      Cost Optimization
                    </a>
                    <a
                      href="#seo"
                      className="block text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      SEO Protection
                    </a>
                    <a
                      href="#faq"
                      className="block text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      FAQ
                    </a>
                  </nav>
                </div>

                {/* Author Bio */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                      TP
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        Tuhin Pal
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Cloud Solutions Architect
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Expert in cloud migration strategies with 8+ years helping
                    startups scale their infrastructure efficiently.
                  </p>
                </div>

                {/* Related Articles */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                    Related Articles
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900 dark:text-gray-100 mb-1">
                        AI in 2025: Trends & Predictions
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        Latest developments in artificial intelligence
                      </p>
                    </a>
                    <a
                      href="#"
                      className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900 dark:text-gray-100 mb-1">
                        Kubernetes Best Practices
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        Container orchestration for startups
                      </p>
                    </a>
                    <a
                      href="#"
                      className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-gray-900 dark:text-gray-100 mb-1">
                        DevOps Automation Tools
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        Essential tools for modern development
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
      </div>
    </div>
  );
}

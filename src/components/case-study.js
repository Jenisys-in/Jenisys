"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Users,
  Code,
  TrendingUp,
  Quote,
  ArrowUp,
  Star,
  X,
  Award,
  Clock,
  Target,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { Calendar, Bot } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Customer Support Platform",
    client: "TechCorp Solutions",
    industry: "SaaS",
    problemSummary:
      "Manual customer support handling 10,000+ tickets monthly with 48-hour response times",
    outcome:
      "Reduced response time by 89%, improved satisfaction to 4.8/5, handled 5x more tickets",
    thumbnail: "🤖",
    category: "AI",
    difficulty: "Complex",
    duration: "12 months",
    teamSize: "18 developers",
    rating: 4.9,
    metrics: [
      { label: "Response Time", value: "89% faster" },
      { label: "Satisfaction Score", value: "4.8/5" },
      { label: "Ticket Volume", value: "5x increase" },
    ],
    problem:
      "TechCorp was struggling with an overwhelming volume of customer support tickets, averaging 10,000+ monthly inquiries with response times exceeding 48 hours. Their support team was burned out, customer satisfaction was declining to 2.1/5, and operational costs were skyrocketing with a 23-person support team working around the clock.",
    solution:
      "We developed an intelligent customer support platform featuring advanced NLP for ticket classification, automated response generation, sentiment analysis for priority routing, intelligent escalation workflows, and a comprehensive knowledge base with machine learning-powered search. The system integrates seamlessly with existing CRM tools and provides real-time analytics.",
    result:
      "Achieved 89% reduction in average response time (from 48 hours to 5.2 hours), improved customer satisfaction from 2.1/5 to 4.8/5, increased ticket handling capacity by 500%, reduced support team workload by 67%, and generated $2.1M in annual cost savings while maintaining higher service quality.",
    techStack: [
      "Python",
      "OpenAI GPT-4",
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
    testimonial:
      "This AI platform transformed our customer support from a cost center into a competitive advantage. Our customers are happier, our team is more productive, and we're scaling effortlessly.",
    author: "Jennifer Park, VP of Customer Success at TechCorp Solutions",
  },
  {
    id: 2,
    title: "Telemedicine Platform for Rural Healthcare",
    client: "HealthConnect Network",
    industry: "Healthcare",
    problemSummary:
      "Rural patients traveling 200+ miles for specialist consultations, 40% missing appointments",
    outcome:
      "Eliminated travel for 85% of consultations, reduced missed appointments by 73%, served 12,000+ patients",
    thumbnail: "🏥",
    category: "Telehealth",
    difficulty: "High",
    duration: "10 months",
    teamSize: "15 developers",
    rating: 4.8,
    metrics: [
      { label: "Travel Elimination", value: "85%" },
      { label: "Missed Appointments", value: "73% reduction" },
      { label: "Patients Served", value: "12,000+" },
    ],
    problem:
      "HealthConnect Network served rural communities where patients had to travel 200+ miles to see specialists, resulting in 40% missed appointments, delayed diagnoses, and poor health outcomes. The existing infrastructure couldn't support reliable video consultations, and there was no integrated system for medical records, prescriptions, or follow-up care coordination.",
    solution:
      "We built a comprehensive telemedicine platform with high-quality video consultations optimized for low-bandwidth connections, integrated electronic health records, e-prescription capabilities, automated appointment scheduling, remote patient monitoring tools, and secure messaging between patients and providers. The platform includes mobile apps for both patients and healthcare providers.",
    result:
      "Eliminated the need for travel in 85% of specialist consultations, reduced missed appointments from 40% to 11%, served over 12,000 patients in the first year, improved diagnostic speed by 60%, and achieved 94% patient satisfaction. Healthcare providers reported 45% improvement in workflow efficiency.",
    techStack: [
      "React Native",
      "Node.js",
      "WebRTC",
      "MongoDB",
      "AWS",
      "Socket.io",
      "HIPAA Compliance",
      "Stripe",
    ],
    testimonial:
      "This platform brought specialist care directly to our patients' homes. We've seen remarkable improvements in health outcomes and patient engagement across our rural communities.",
    author:
      "Dr. Michael Rodriguez, Chief Medical Officer at HealthConnect Network",
  },
  {
    id: 3,
    title: "Adaptive Learning Management System",
    client: "EduTech Academy",
    industry: "Education",
    problemSummary:
      "One-size-fits-all curriculum causing 34% dropout rate and poor learning outcomes",
    outcome:
      "Reduced dropouts by 67%, improved test scores by 52%, personalized learning for 25,000+ students",
    thumbnail: "📚",
    category: "EdTech",
    difficulty: "Complex",
    duration: "14 months",
    teamSize: "20 developers",
    rating: 4.9,
    metrics: [
      { label: "Dropout Reduction", value: "67%" },
      { label: "Test Score Improvement", value: "52%" },
      { label: "Students Served", value: "25,000+" },
    ],
    problem:
      "EduTech Academy's traditional one-size-fits-all curriculum was failing diverse learners, with a 34% dropout rate and consistently low test scores. Students with different learning styles, paces, and backgrounds weren't getting the personalized attention they needed. Teachers were overwhelmed trying to adapt materials for individual students manually.",
    solution:
      "We developed an adaptive learning management system that uses AI to personalize curriculum delivery, tracks individual learning patterns, provides real-time performance analytics, offers multiple content formats (visual, audio, interactive), includes gamification elements, and gives teachers powerful tools for monitoring student progress and identifying at-risk learners.",
    result:
      "Achieved 67% reduction in dropout rates, improved average test scores by 52%, increased student engagement by 78%, provided personalized learning paths for over 25,000 students, and improved teacher efficiency by 43%. The platform now serves as a model for other educational institutions.",
    techStack: [
      "Vue.js",
      "Python",
      "TensorFlow",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "Docker",
      "GCP",
    ],
    testimonial:
      "The adaptive learning system revolutionized how we deliver education. Every student now gets a personalized experience that adapts to their unique learning style and pace.",
    author: "Dr. Sarah Chen, Dean of Academic Innovation at EduTech Academy",
  },
  {
    id: 4,
    title: "Digital Banking Platform",
    client: "CommunityFirst Credit Union",
    industry: "Finance",
    problemSummary:
      "Legacy banking system causing 45-minute transaction times and 28% customer churn",
    outcome:
      "Reduced transaction time to under 30 seconds, decreased churn by 71%, increased deposits by $45M",
    thumbnail: "💳",
    category: "Fintech",
    difficulty: "Complex",
    duration: "16 months",
    teamSize: "22 developers",
    rating: 4.8,
    metrics: [
      { label: "Transaction Speed", value: "30 seconds" },
      { label: "Churn Reduction", value: "71%" },
      { label: "Deposit Growth", value: "$45M" },
    ],
    problem:
      "CommunityFirst Credit Union's legacy banking system required customers to visit branches for most transactions, with processing times averaging 45 minutes. This resulted in 28% annual customer churn, declining deposits, and inability to compete with modern digital banks. The existing infrastructure couldn't support mobile banking or real-time transactions.",
    solution:
      "We created a modern digital banking platform featuring instant account opening, real-time transactions, mobile check deposits, budgeting tools, loan applications, investment portfolio management, advanced security with biometric authentication, and 24/7 customer support chatbot. The platform maintains full regulatory compliance while delivering a seamless user experience.",
    result:
      "Reduced average transaction time from 45 minutes to under 30 seconds, decreased customer churn from 28% to 8%, increased new account openings by 156%, grew total deposits by $45M in the first year, and achieved 4.7/5 customer satisfaction rating. Mobile app adoption reached 87% of customers.",
    techStack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Kubernetes",
      "AWS",
      "Plaid API",
      "Dwolla",
    ],
    testimonial:
      "This digital transformation saved our credit union. We went from losing customers to legacy systems to being the preferred choice for tech-savvy members who value convenience and innovation.",
    author: "Mark Thompson, CEO of CommunityFirst Credit Union",
  },
  {
    id: 5,
    title: "Smart Logistics Optimization Platform",
    client: "FastTrack Delivery",
    industry: "Logistics",
    problemSummary:
      "Inefficient routing causing 35% fuel waste and average 3-day delivery times",
    outcome:
      "Reduced fuel costs by 42%, achieved same-day delivery for 78% of orders, optimized 500+ routes daily",
    thumbnail: "🚚",
    category: "Logistics",
    difficulty: "High",
    duration: "9 months",
    teamSize: "16 developers",
    rating: 4.7,
    metrics: [
      { label: "Fuel Cost Reduction", value: "42%" },
      { label: "Same-day Delivery", value: "78%" },
      { label: "Routes Optimized", value: "500+ daily" },
    ],
    problem:
      "FastTrack Delivery was struggling with inefficient routing that wasted 35% of fuel costs, average delivery times of 3 days, poor customer visibility into shipment status, and manual dispatch processes that couldn't scale with growing order volume. Their competitive position was weakening against faster delivery services.",
    solution:
      "We built an intelligent logistics platform with AI-powered route optimization, real-time traffic integration, predictive analytics for demand forecasting, automated dispatch system, customer tracking portal, driver mobile app with turn-by-turn navigation, and dynamic re-routing capabilities. The system processes thousands of variables to optimize efficiency.",
    result:
      "Achieved 42% reduction in fuel costs, improved delivery speed with 78% of orders now delivered same-day, optimized over 500 routes daily, increased customer satisfaction to 4.6/5, reduced operational costs by $3.2M annually, and improved driver productivity by 38%. The platform handles 50,000+ packages daily.",
    techStack: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Redis",
      "Google Maps API",
      "Docker",
      "AWS",
    ],
    testimonial:
      "The smart logistics platform transformed our delivery operations from chaos to precision. We're now the fastest delivery service in our region, and our customers love the real-time tracking.",
    author: "Lisa Rodriguez, Operations Director at FastTrack Delivery",
  },
  {
    id: 6,
    title: "Omnichannel Customer Support Hub",
    client: "RetailMax Enterprise",
    industry: "Retail",
    problemSummary:
      "Fragmented support across 8 channels causing 67% of issues to require multiple contacts",
    outcome:
      "Unified support experience, reduced multi-contact issues by 84%, improved resolution time by 59%",
    thumbnail: "🛍️",
    category: "Support",
    difficulty: "High",
    duration: "11 months",
    teamSize: "19 developers",
    rating: 4.8,
    metrics: [
      { label: "Multi-contact Reduction", value: "84%" },
      { label: "Resolution Speed", value: "59% faster" },
      { label: "Channel Integration", value: "8 channels" },
    ],
    problem:
      "RetailMax Enterprise had fragmented customer support across 8 different channels (phone, email, chat, social media, in-store, mobile app, website, SMS) with no integration between them. This caused 67% of customer issues to require multiple contacts across different channels, leading to frustrated customers and inefficient operations.",
    solution:
      "We developed a comprehensive omnichannel support hub that unifies all customer touchpoints into a single platform, provides agents with complete customer context regardless of communication channel, enables seamless handoffs between channels, includes automated routing based on issue complexity, and offers customers consistent experience across all touchpoints.",
    result:
      "Reduced multi-contact issues from 67% to 11% (84% improvement), improved average resolution time by 59%, increased first-contact resolution rate to 87%, achieved 4.5/5 customer satisfaction score, and reduced support operational costs by 31%. Agent productivity improved by 48% with unified workflows.",
    techStack: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Redis",
      "Twilio",
      "AWS",
      "Salesforce API",
    ],
    testimonial:
      "The omnichannel hub gave us a complete view of every customer interaction. Our support team can now provide personalized, efficient service no matter how customers choose to reach us.",
    author:
      "Amanda Foster, Customer Experience Director at RetailMax Enterprise",
  },
  {
    id: 7,
    title: "Real-time Fraud Detection System",
    client: "SecureBank International",
    industry: "Finance",
    problemSummary:
      "Legacy fraud detection missing 34% of fraudulent transactions, costing $18M annually",
    outcome:
      "Achieved 99.2% fraud detection accuracy, prevented $45M in losses annually",
    thumbnail: "🛡️",
    category: "Security",
    difficulty: "Complex",
    duration: "11 months",
    teamSize: "16 developers",
    rating: 4.9,
    metrics: [
      { label: "Detection Accuracy", value: "99.2%" },
      { label: "Losses Prevented", value: "$45M" },
      { label: "False Positives", value: "0.8%" },
    ],
    problem:
      "SecureBank's rule-based fraud detection system was outdated and ineffective, missing 34% of fraudulent transactions while flagging 23% of legitimate transactions as suspicious. This resulted in $18M annual losses from fraud and significant customer frustration from blocked legitimate purchases. The system couldn't adapt to new fraud patterns and took 45+ seconds to process each transaction.",
    solution:
      "We developed a cutting-edge real-time fraud detection platform using ensemble machine learning models, behavioral analytics, graph neural networks for network analysis, real-time risk scoring with sub-second processing, and adaptive learning that continuously improves from new fraud patterns. The system integrates seamlessly with existing banking infrastructure while providing explainable AI decisions for compliance.",
    result:
      "Increased fraud detection accuracy to 99.2%, reduced false positives from 23% to 0.8%, decreased transaction processing time to under 200ms, prevented $45M in annual fraud losses, and improved customer satisfaction scores by 67%. The system now processes over 2 million transactions daily with consistent performance.",
    techStack: [
      "Python",
      "Apache Kafka",
      "TensorFlow",
      "Redis",
      "Cassandra",
      "Docker",
      "Kubernetes",
      "AWS",
    ],
    testimonial:
      "This fraud detection system didn't just improve our security—it revolutionized our entire risk management approach. We're now industry leaders in fraud prevention while keeping our customers happy.",
    author: "Michael Chen, Chief Risk Officer at SecureBank International",
  },
  {
    id: 8,
    title: "Predictive Inventory Management",
    client: "GlobalSupply Distribution",
    industry: "Logistics",
    problemSummary:
      "Unpredictable demand causing $12M in excess inventory and frequent stockouts",
    outcome:
      "Reduced excess inventory by 68%, eliminated stockouts by 91%, saved $8.7M annually",
    thumbnail: "📦",
    category: "Supply Chain",
    difficulty: "High",
    duration: "8 months",
    teamSize: "13 developers",
    rating: 4.7,
    metrics: [
      { label: "Excess Inventory Reduction", value: "68%" },
      { label: "Stockout Elimination", value: "91%" },
      { label: "Annual Savings", value: "$8.7M" },
    ],
    problem:
      "GlobalSupply Distribution managed inventory for 500+ product lines across 80 warehouses but relied on outdated forecasting methods that couldn't account for seasonal variations, market trends, or supply chain disruptions. This led to $12M tied up in excess inventory while simultaneously experiencing frequent stockouts that damaged customer relationships and resulted in lost sales opportunities.",
    solution:
      "We engineered a sophisticated predictive inventory management system featuring advanced machine learning algorithms for demand forecasting, automated reorder point optimization, supplier performance analytics, multi-warehouse coordination, real-time market trend analysis, and scenario planning capabilities. The platform integrates with existing ERP systems and provides actionable insights through intuitive dashboards.",
    result:
      "Achieved 68% reduction in excess inventory, eliminated 91% of stockouts, improved inventory turnover by 45%, reduced carrying costs by $8.7M annually, and increased forecast accuracy to 94%. Customer satisfaction improved dramatically with 99.1% order fulfillment rate.",
    techStack: [
      "Python",
      "scikit-learn",
      "Apache Spark",
      "PostgreSQL",
      "React",
      "FastAPI",
      "Docker",
      "GCP",
    ],
    testimonial:
      "The predictive capabilities of this system are incredible. We went from guessing what customers want to knowing exactly what to stock and when. Our cash flow and customer satisfaction have never been better.",
    author: "Sarah Johnson, VP of Supply Chain at GlobalSupply Distribution",
  },
  {
    id: 9,
    title: "Document Processing Pipeline",
    client: "LegalTech Innovations",
    industry: "Legal",
    problemSummary:
      "Manual document review taking 40+ hours per case, creating bottlenecks for 200+ attorneys",
    outcome:
      "Reduced review time by 87%, improved accuracy by 42%, processed 10x more documents",
    thumbnail: "📄",
    category: "Document AI",
    difficulty: "Complex",
    duration: "9 months",
    teamSize: "14 developers",
    rating: 4.8,
    metrics: [
      { label: "Time Reduction", value: "87%" },
      { label: "Accuracy Improvement", value: "42%" },
      { label: "Processing Capacity", value: "10x" },
    ],
    problem:
      "LegalTech Innovations' 200+ attorneys were spending 40+ hours per case manually reviewing thousands of legal documents, contracts, and case files. This manual process was not only time-consuming but also prone to human error, with critical information often overlooked. The firm was losing competitive bids due to slow turnaround times and high costs associated with document review.",
    solution:
      "We created an intelligent document processing pipeline featuring advanced OCR with 99.9% accuracy, natural language processing for contract analysis, automated clause extraction and categorization, risk assessment scoring, similarity detection for duplicate documents, and compliance checking against legal standards. The system includes a collaborative review interface for attorneys with AI-suggested annotations and automated report generation.",
    result:
      "Reduced document review time from 40+ hours to 5 hours per case (87% reduction), improved accuracy of information extraction by 42%, increased document processing capacity by 1000%, generated cost savings of $3.2M annually, and improved client satisfaction scores to 4.9/5. The firm now handles 3x more cases with the same staff.",
    techStack: [
      "Python",
      "Tesseract OCR",
      "spaCy",
      "Transformers",
      "Elasticsearch",
      "React",
      "FastAPI",
      "PostgreSQL",
    ],
    testimonial:
      "This document processing system transformed our practice from a paper-heavy operation to a high-tech legal powerhouse. We can now take on cases that would have been impossible before, and our attorneys focus on strategy instead of paperwork.",
    author: "Robert Williams, Managing Partner at LegalTech Innovations",
  },
];

export default function CaseStudiesPage() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCase]);

  const handleCardClick = (study) => {
    setSelectedCase(study);
  };

  const closeModal = () => {
    setSelectedCase(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "High":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Complex":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      AI: "bg-purple-100 text-purple-800 border-purple-200",
      Telehealth: "bg-green-100 text-green-800 border-green-200",
      EdTech: "bg-blue-100 text-blue-800 border-blue-200",
      Fintech: "bg-emerald-100 text-emerald-800 border-emerald-200",
      Logistics: "bg-orange-100 text-orange-800 border-orange-200",
      Support: "bg-cyan-100 text-cyan-800 border-cyan-200",
      Security: "bg-red-100 text-red-800 border-red-200",
      "Supply Chain": "bg-indigo-100 text-indigo-800 border-indigo-200",
      "Document AI": "bg-violet-100 text-violet-800 border-violet-200",
    };
    return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-8 backdrop-blur-sm text-white shadow-md ring-1 ring-white/30">
            <Award className="w-4 h-4 mr-2 text-yellow-300" />
            Award-Winning Development Team
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Discover how we transform businesses through innovative technology
            solutions. Real projects, measurable results, lasting impact.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-purple-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {caseStudies.length}
              </div>
              <div className="text-sm">Success Stories</div>
            </div>
            <div className="w-px h-12 bg-purple-300 opacity-50 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">$100M+</div>
              <div className="text-sm">Value Generated</div>
            </div>
            <div className="w-px h-12 bg-purple-300 opacity-50 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.8/5</div>
              <div className="text-sm">Avg Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="group bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:scale-[1.02]"
                onClick={() => handleCardClick(study)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                {/* Card Content */}
                <div className="p-8">
                  {/* Thumbnail and Rating */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      {study.thumbnail}
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm text-gray-600 font-medium">
                        {study.rating}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${getCategoryColor(
                        study.category
                      )}`}
                    >
                      {study.category}
                    </span>
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${getDifficultyColor(
                        study.difficulty
                      )}`}
                    >
                      {study.difficulty}
                    </span>
                  </div>

                  {/* Title and Client */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-purple-600 transition-colors duration-300">
                    {study.title}
                  </h3>
                  <div className="mb-4">
                    <p className="text-lg text-purple-600 font-bold">
                      {study.client}
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                      {study.industry}
                    </p>
                  </div>

                  {/* Problem Summary */}
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    {study.problemSummary}
                  </p>

                  {/* Outcome */}
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl mb-6">
                    <div className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-green-800 font-semibold text-sm leading-relaxed">
                        {study.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {study.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {study.teamSize}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center">
                    <div className="inline-flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors duration-300">
                      <span className="mr-2">View Full Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl transform animate-modalSlideIn">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 flex items-center justify-between z-10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-2xl">
                  {selectedCase.thumbnail}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{selectedCase.title}</h2>
                  <p className="text-purple-100">{selectedCase.client}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white border border-white/30 shadow-md rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
              {/* Hero Section */}
              <div className="bg-gradient-to-br from-gray-50 to-purple-50 p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Key Metrics */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span
                        className={`px-4 py-2 text-sm font-semibold rounded-full border ${getCategoryColor(
                          selectedCase.category
                        )}`}
                      >
                        {selectedCase.category}
                      </span>
                      <span
                        className={`px-4 py-2 text-sm font-semibold rounded-full border ${getDifficultyColor(
                          selectedCase.difficulty
                        )}`}
                      >
                        {selectedCase.difficulty}
                      </span>
                      <span className="px-4 py-2 text-sm font-semibold rounded-full bg-gray-100 text-gray-800 border border-gray-200">
                        {selectedCase.industry}
                      </span>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
                      <h3 className="text-lg font-bold text-green-800 mb-3 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        Key Results
                      </h3>
                      <p className="text-green-700 text-lg leading-relaxed">
                        {selectedCase.outcome}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center bg-white px-4 py-2 rounded-lg border">
                        <Clock className="w-4 h-4 mr-2 text-purple-500" />
                        <span className="font-medium">Duration:</span>
                        <span className="ml-1">{selectedCase.duration}</span>
                      </div>
                      <div className="flex items-center bg-white px-4 py-2 rounded-lg border">
                        <Users className="w-4 h-4 mr-2 text-blue-500" />
                        <span className="font-medium">Team:</span>
                        <span className="ml-1">{selectedCase.teamSize}</span>
                      </div>
                      <div className="flex items-center bg-white px-4 py-2 rounded-lg border">
                        <Star className="w-4 h-4 mr-2 text-yellow-500 fill-current" />
                        <span className="font-medium">Rating:</span>
                        <span className="ml-1">{selectedCase.rating}/5</span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Cards */}
                  <div className="space-y-4">
                    {selectedCase.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center"
                      >
                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  {/* Problem */}
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mr-3">
                        <Target className="w-5 h-5 text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        The Challenge
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedCase.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
                        <Code className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Our Solution
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {selectedCase.solution}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-3">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        The Impact
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedCase.result}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-purple-600" />
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedCase.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white text-gray-700 text-sm rounded-lg font-medium border border-gray-300 hover:border-purple-300 hover:text-purple-600 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-8">
                  <div className="flex items-start space-x-6">
                    <Quote className="w-10 h-10 text-purple-200 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl leading-relaxed mb-6 font-medium">
                        "{selectedCase.testimonial}"
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-white bg-opacity-25 rounded-full flex items-center justify-center mr-4">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">
                            {selectedCase.author}
                          </p>
                          <p className="text-purple-200">
                            {selectedCase.client}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Start Your Success Story?
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Let's discuss how we can create similar results for your
                    business with our innovative technology solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Start Similar Project
                      <ExternalLink className="w-4 h-4 inline ml-2" />
                    </button>
                    <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-purple-100 leading-relaxed">
            Join our portfolio of successful clients. Let's discuss how we can
            transform your business with innovative technology solutions
            tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Project
              <ExternalLink className="w-5 h-5 inline ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

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

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-modalSlideIn {
          animation: modalSlideIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

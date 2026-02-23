"use client";

import Footer from "../Footer";
import { useCalendar } from "@/contexts/CalendarContext";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  Users,
  ZapOff,
  Settings,
  Star,
  Layers,
  Globe,
  Server,
  TrendingUp,
  Heart,
  Truck,
  CreditCard,
  Zap,
  ShoppingBag,
  BookOpen,
  Check,
  ChevronDown,
  Code,
  Upload,
  RefreshCw,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
  Calendar,
  Bot,
} from "lucide-react";

export default function MobileAppLanding() {
  const { openCalendar } = useCalendar();
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const toggleCaseStudy = () => {
    setShowCaseStudy(!showCaseStudy);
  };

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      {/* Navigation */}

      {/* Hero Section */}
      <section
        id="hero"
        className="bg-gradient-to-br from-indigo-600 to-[#7C3AED] min-h-screen flex items-center relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 bg-opacity-20 rounded-full blur-3xl animate-bounce"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-white">
            <h1
              className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Your{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                App Idea
              </span>{" "}
              Built to Succeed
            </h1>
            <p
              className={`text-xl md:text-2xl mb-8 text-gray-200 transition-all duration-1000 delay-200 ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              A great app doesn’t just get downloaded—it gets used. We turn your
              vision into a powerful, future-ready mobile app that drives
              engagement, revenue, and lasting business growth.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-400 ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <button
                onClick={openCalendar}
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Request Free App Strategy Session
              </button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-600 ${
              isVisible.hero
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl p-8 mx-auto w-80 h-96 shadow-2xl transform hover:scale-105 hover:-rotate-2 transition-all duration-300">
              <div className="bg-gray-900 rounded-2xl h-full flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <div className="text-sm font-semibold">Your App Here</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="pain-points" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Don't Let Common App Problems Kill Your Idea
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launching an app is a major investment. Don't risk it with these
              common challenges:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Users Abandoning Your App?",
                description:
                  "A poor user experience (UX) and frustrating performance issues can lead to low user retention and negative reviews.",
                gradient: "from-red-50 to-red-100",
                iconBg: "bg-red-500",
              },
              {
                icon: ZapOff,
                title: "Worrying About Poor Performance?",
                description:
                  "An app that crashes or lags on different devices loses user trust and makes your brand look unprofessional.",
                gradient: "from-orange-50 to-orange-100",
                iconBg: "bg-orange-500",
              },
              {
                icon: Settings,
                title: "Trapped in Maintenance Nightmares?",
                description:
                  "Complex code and difficult updates can turn a simple fix into a costly, time-consuming headache.",
                gradient: "from-yellow-50 to-yellow-100",
                iconBg: "bg-yellow-500",
              },
              {
                icon: Star,
                title: "Struggling to Be Found?",
                description:
                  "Without a solid App Store Optimization (ASO) strategy, your app can get lost in a crowded market.",
                gradient: "from-purple-50 to-purple-100",
                iconBg: "bg-[#4F46E5]",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.gradient} p-8 rounded-3xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group`}
              >
                <div
                  className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center mb-5 mt-16">
          <p className="text-xl text-gray-600">
            We solve these problems before they even start.
          </p>
        </div>
      </section>

      {/* Development Process */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Process: From Idea to App Store
            </h2>
            <p className="text-xl text-gray-600">
              We guide you through a transparent and collaborative process
              designed to ensure your app is a success from day one.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: 1,
                title: "Discovery & Strategy",
                description:
                  "We don't just build what you ask for; we build what you need. We dive deep into your business goals and market to create a strategic roadmap for your app.",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                step: 2,
                title: "Design & User Experience",
                description:
                  "Our UI/UX experts design intuitive, beautiful interfaces that are proven to maximize user engagement and satisfaction.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                step: 3,
                title: "Agile Development",
                description:
                  "You’re in the loop every step of the way. Our agile approach means you get regular updates and can provide feedback, ensuring the final product is perfect.",
                gradient: "from-pink-500 to-red-500",
              },
              {
                step: 4,
                title: "Launch & Post-Launch Support",
                description:
                  "We handle everything from App Store submission to ongoing maintenance and support, so you can focus on your business.",
                gradient: "from-red-500 to-orange-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 group ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition`}
                >
                  {item.step}
                </div>
                <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section id="offerings" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mobile App Development Services
            </h2>
            <p className="text-xl text-gray-600">
              We offer a complete suite of services to fit your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Native App Development",
                description:
                  "For the fastest, most powerful experience, we build dedicated apps for both iOS and Android.",
                gradient: "from-indigo-50 to-indigo-100",
                hoverGradient:
                  "group-hover:from-indigo-500 group-hover:to-purple-500",
                iconBg: "bg-indigo-500 group-hover:bg-white",
                iconColor: "text-white group-hover:text-indigo-500",
              },
              {
                icon: Layers,
                title: "Cross-Platform Apps",
                description:
                  "Reach a wider audience quickly with a single codebase for both iOS and Android using technologies like React Native and Flutter.",
                gradient: "from-purple-50 to-purple-100",
                hoverGradient:
                  "group-hover:from-purple-500 group-hover:to-pink-500",
                iconBg: "bg-[#4F46E5] group-hover:bg-white",
                iconColor: "text-white group-hover:text-[#7C3AED]",
              },
              {
                icon: Globe,
                title: "Progressive Web Apps",
                description:
                  "Offer your users a native-like experience directly from their browser, a cost-effective way to get started.",
                gradient: "from-pink-50 to-pink-100",
                hoverGradient:
                  "group-hover:from-pink-500 group-hover:to-red-500",
                iconBg: "bg-pink-500 group-hover:bg-white",
                iconColor: "text-white group-hover:text-pink-500",
              },
              {
                icon: Server,
                title: "Backend Integration",
                description:
                  "We build powerful, scalable APIs and backend systems to ensure your app can handle any demand.",
                gradient: "from-blue-50 to-blue-100",
                hoverGradient:
                  "group-hover:from-blue-500 group-hover:to-indigo-500",
                iconBg: "bg-blue-500 group-hover:bg-white",
                iconColor: "text-white group-hover:text-[#4F46E5]",
              },
              {
                icon: TrendingUp,
                title: "App Store Optimization",
                description:
                  "We optimize your app store listing to improve its discoverability and increase your download rates.",
                gradient: "from-green-50 to-green-100",
                hoverGradient:
                  "group-hover:from-green-500 group-hover:to-teal-500",
                iconBg: "bg-green-500 group-hover:bg-white",
                iconColor: "text-white group-hover:text-green-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${item.gradient} ${item.hoverGradient} p-8 rounded-3xl hover:shadow-xl hover:-translate-y-2 group-hover:text-white transition-all duration-300`}
              >
                <div
                  className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center mb-6 transition-colors`}
                >
                  <item.icon
                    className={`w-8 h-8 ${item.iconColor} transition-colors`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Specialized mobile solutions across high-growth sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Healthcare",
                description:
                  "Patient portals, telemedicine apps, and health tracking solutions.",
                gradient: "from-red-500 to-pink-500",
              },
              {
                icon: Truck,
                title: "Logistics & Transportation",
                description:
                  "Fleet management, delivery tracking, and route optimization apps.",
                gradient: "from-blue-500 to-indigo-500",
              },
              {
                icon: CreditCard,
                title: "FinTech",
                description:
                  "Banking apps, payment solutions, and investment platforms.",
                gradient: "from-green-500 to-teal-500",
              },
              {
                icon: Zap,
                title: "On-Demand Services",
                description:
                  "Food delivery, ride-sharing, and service booking platforms.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: ShoppingBag,
                title: "Retail & E-commerce",
                description:
                  "Shopping apps, inventory management, and customer loyalty programs.",
                gradient: "from-orange-500 to-red-500",
              },
              {
                icon: BookOpen,
                title: "EdTech",
                description:
                  "Learning management systems, educational games, and student portals.",
                gradient: "from-indigo-500 to-purple-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-12 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            onClick={toggleCaseStudy}
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Success Story
              </h2>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                QuickDeliver App
              </h3>
              <p className="text-xl text-gray-700 mb-6">
                "See how we helped QuickDeliver increase user retention by 35%
                in 3 months."
              </p>
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
                Read Full Case Study
              </button>
            </div>

            {showCaseStudy && (
              <div className="mt-8 pt-8 border-t border-indigo-200 animate-fade-in">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      Challenge
                    </h4>
                    <p className="text-gray-700 mb-6">
                      QuickDeliver needed a mobile app to compete with major
                      delivery services, but their existing platform had poor
                      user retention and frequent crashes.
                    </p>

                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      Solution
                    </h4>
                    <p className="text-gray-700">
                      We rebuilt their app from scratch using React Native,
                      implemented real-time tracking, and optimized the user
                      onboarding flow.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      Results
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">User Retention</span>
                        <span className="text-2xl font-bold text-green-500">
                          +35%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">App Store Rating</span>
                        <span className="text-2xl font-bold text-green-500">
                          4.8/5
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">
                          Monthly Active Users
                        </span>
                        <span className="text-2xl font-bold text-green-500">
                          20K+
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Development Time</span>
                        <span className="text-2xl font-bold text-green-500">
                          6 weeks
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Jenisys */}
      <section id="why-choose" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Jenisys
            </h2>
            <p className="text-xl text-gray-600">
              The advantages that set us apart from other development agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Dedicated In-House Team",
              "Cross-Platform Excellence",
              "Transparent & Agile Process",
              "Post-Launch Support",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item}</h3>
                </div>
                <p className="text-gray-600">
                  {index === 0 &&
                    "You work directly with our expert UI/UX designers and developers who are personally invested in your project's success."}
                  {index === 1 &&
                    "We have deep expertise in both native and hybrid app technologies, so we can recommend the best solution for your business goals."}
                  {index === 2 &&
                    "We provide regular updates and clear communication, so you always know where your project stands."}
                  {index === 3 &&
                    "Our partnership doesn’t end at launch. We provide ongoing maintenance and support to keep your app running smoothly and securely."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from successful app launches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Davis",
                role: "CEO, TechStart",
                initials: "JD",
                gradient: "from-indigo-500 to-purple-500",
                bgGradient: "from-indigo-50 to-purple-50",
                quote:
                  "Jenisys delivered our mobile app ahead of schedule and nailed every detail. The user feedback has been incredible!",
              },
              {
                name: "Sarah Miller",
                role: "Founder, HealthApp",
                initials: "SM",
                gradient: "from-green-500 to-teal-500",
                bgGradient: "from-green-50 to-teal-50",
                quote:
                  "The team understood our healthcare requirements perfectly and built an app that our patients absolutely love.",
              },
              {
                name: "Mike Rodriguez",
                role: "CTO, LogiFlow",
                initials: "MR",
                gradient: "from-orange-500 to-red-500",
                bgGradient: "from-orange-50 to-red-50",
                quote:
                  "Outstanding technical expertise! Our logistics app handles thousands of deliveries daily without any issues.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${testimonial.bgGradient} p-8 rounded-3xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold mr-4`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our mobile app development
              process.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                id: 1,
                icon: Smartphone,
                question: "Do you develop both iOS and Android apps?",
                answer:
                  "Yes, we develop native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter. We'll recommend the best approach based on your specific requirements, budget, and timeline.",
                iconBg: "bg-indigo-100",
                iconColor: "text-indigo-600",
              },
              {
                id: 2,
                icon: RefreshCw,
                question: "Can you upgrade our existing app?",
                answer:
                  "Absolutely! We can audit your existing app, identify improvement opportunities, and either enhance the current codebase or rebuild it with modern technologies for better performance and user experience.",
                iconBg: "bg-purple-100",
                iconColor: "text-[#7C3AED]",
              },
              {
                id: 3,
                icon: Code,
                question: "What tech stacks do you use?",
                answer:
                  "We use Swift/SwiftUI for iOS, Kotlin/Java for Android, React Native and Flutter for cross-platform development. For backends, we work with Node.js, Python, and cloud services like AWS and Firebase.",
                iconBg: "bg-green-100",
                iconColor: "text-green-600",
              },
              {
                id: 4,
                icon: Upload,
                question: "Do you handle Play Store/App Store publishing?",
                answer:
                  "Yes, we handle the entire app store submission process, including account setup, app store optimization, compliance with guidelines, and managing the review process until your app is live.",
                iconBg: "bg-orange-100",
                iconColor: "text-orange-600",
              },
            ].map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 ${faq.iconBg} rounded-full flex items-center justify-center mr-4`}
                    >
                      <faq.icon className={`w-4 h-4 ${faq.iconColor}`} />
                    </div>
                    <span className="text-xl font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transform transition-transform ${
                      openFAQ === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === faq.id && (
                  <div className="px-16 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="final-cta"
        className="py-20 bg-gradient-to-br from-indigo-600 to-[#7C3AED] relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 bg-opacity-20 rounded-full blur-3xl animate-bounce"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Got an App Idea? <br />
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Let's Build It Together
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-12">
            It all starts with a conversation. Let's discuss your vision, and
            we’ll provide you with a clear roadmap and an estimate—no strings
            attached.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={openCalendar}
              className="bg-white text-indigo-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              Book a Free Strategy Call
            </button>
            <Link href="/quote" className="inline-block">
              <button className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-indigo-600 transition-all transform hover:scale-105">
                Get Free Quote
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky CTA Button */}

      <Footer />
    </div>
  );
}

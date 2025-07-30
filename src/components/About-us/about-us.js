"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  Users,
  Target,
  Lightbulb,
  Award,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Star,
  Code,
  Palette,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Heart,
  TrendingUp,
  CheckCircle,
  Quote,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

const AboutUsRedesign = () => {
  const [activeValue, setActiveValue] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  const fullText = "Where Innovation Meets Excellence";

  const coreValues = [
    {
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Customer Centric Approach",
      description:
        "We put your business needs first, always. Our team is dedicated to providing personalized solutions that are tailored to your unique goals and challenges.",
      color: "from-rose-400 to-pink-500",
    },
    {
      icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Unmatched Expertise",
      description:
        "Our team comprises industry experts with years of experience in software development and digital solutions across various industries.",
      color: "from-indigo-400 to-blue-500",
    },
    {
      icon: <Lightbulb className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Continuous Innovation",
      description:
        "We believe in pushing boundaries and challenging the status quo with cutting-edge technology that gives you a competitive edge.",
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Value Driven Services",
      description:
        "We prioritize delivering exceptional quality and impactful results, ensuring clients receive significant benefits that enhance their business outcomes.",
      color: "from-amber-400 to-orange-500",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Founded",
      description:
        "Jenisys was born with a vision to transform businesses through technology",
    },
    {
      year: "2021",
      title: "First Major Client",
      description:
        "Delivered our first enterprise-level solution, setting the foundation for excellence",
    },
    {
      year: "2022",
      title: "Team Expansion",
      description:
        "Grew our expert team to 25+ professionals across multiple domains",
    },
    {
      year: "2023",
      title: "Global Reach",
      description:
        "Extended our services internationally, serving clients across 3 continents",
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description:
        "Established our innovation lab focusing on AI and emerging technologies",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content:
        "Jenisys transformed our entire digital infrastructure. Their expertise and dedication are unmatched.",
      rating: 5,
      company: "TechCorp",
    },
    {
      name: "Michael Chen",
      role: "Founder, StartupX",
      content:
        "Working with Jenisys was a game-changer. They delivered beyond our expectations and within timeline.",
      rating: 5,
      company: "StartupX",
    },
    {
      name: "Emma Davis",
      role: "VP Digital, Enterprise Inc",
      content:
        "The level of innovation and technical excellence Jenisys brings is remarkable. Highly recommended!",
      rating: 5,
      company: "Enterprise Inc",
    },
  ];

  const techStack = [
    {
      name: "React",
      icon: <Code className="w-5 h-5 md:w-6 md:h-6" />,
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
      category: "Backend",
    },
    {
      name: "Python",
      icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
      category: "AI/ML",
    },
    {
      name: "Flutter",
      icon: <Smartphone className="w-5 h-5 md:w-6 md:h-6" />,
      category: "Mobile",
    },
    {
      name: "AWS",
      icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
      category: "Cloud",
    },
    {
      name: "Design",
      icon: <Palette className="w-5 h-5 md:w-6 md:h-6" />,
      category: "UI/UX",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "15+", label: "Industries Served" },
    { number: "24/7", label: "Support Available" },
  ];

  // Typewriter effect
  useEffect(() => {
    if (isTyping && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (typedText.length === fullText.length) {
      setIsTyping(false);
    }
  }, [typedText, isTyping]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-animate-id");
            if (id) {
              setIsVisible((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll("[data-animate-id]");
    elements.forEach((el) => observer.observe(el));

    // Fallback: Make everything visible after 2 seconds
    const fallbackTimer = setTimeout(() => {
      const allIds = Array.from(elements).map((el) =>
        el.getAttribute("data-animate-id")
      );
      const visibilityObj = {};
      allIds.forEach((id) => (visibilityObj[id] = true));
      setIsVisible(visibilityObj);
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <style jsx>{`
        .animate-blink {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        .fade-in-up {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s ease-out;
        }

        .fade-in-left {
          opacity: 1;
          transform: translateX(0);
          transition: all 0.8s ease-out;
        }

        .fade-in-right {
          opacity: 1;
          transform: translateX(0);
          transition: all 0.8s ease-out;
        }

        .scale-in {
          opacity: 1;
          transform: scale(1);
          transition: all 0.8s ease-out;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-start pt-[100px] pb-[40px] overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Purple Glow Blobs */}
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-20 sm:w-36 h-20 sm:h-36 bg-purple-400/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-32 sm:w-60 h-32 sm:h-60 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-40 sm:w-72 h-40 sm:h-72 bg-violet-500/10 rounded-full blur-[100px] animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-[80px]">
          <div
            data-animate-id="hero"
            className={`transition-all duration-1000 ${
              isVisible.hero ? "fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 font-['Montserrat']">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Jenisys
              </span>
            </h1>

            <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-slate-200 mb-6 sm:mb-8 min-h-12 sm:min-h-16 flex items-center justify-center">
              <span className="text-center">
                {typedText}
                <span className="animate-blink text-slate-300">|</span>
              </span>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              We are the architects of innovation, dedicated to delivering
              top-tier software and digital solutions that empower businesses to
              excel in the digital age.
            </p>

            <button
              onClick={() => {
                const el = document.getElementById("our-journey");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="group bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-700 hover:from-purple-600 hover:via-violet-700 hover:to-indigo-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-800/50 flex items-center gap-3 mx-auto"
            >
              Discover Our Journey
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                data-animate-id={`stat-${index}`}
                className={`transition-all duration-1000 text-center group hover:scale-105 transform transition-transform ${
                  isVisible[`stat-${index}`]
                    ? "fade-in-up"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-600 mb-2 group-hover:text-blue-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Identity Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div
              data-animate-id="identity-left"
              className={`transition-all duration-1000 ${
                isVisible["identity-left"]
                  ? "fade-in-left"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 font-['Montserrat']">
                Who We <span className="text-indigo-600">Are</span>
              </h2>

              <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
                <p className="text-base sm:text-lg">
                  At Jenisys, we are more than just a tech company—we are your
                  partners in digital transformation. Founded with a vision to
                  bridge the gap between innovative technology and business
                  success, we have grown into a trusted name in the industry.
                </p>

                <p className="text-base sm:text-lg">
                  Our journey began with a simple belief: that every business
                  deserves access to cutting-edge technology solutions that
                  drive growth, enhance efficiency, and create lasting value.
                  Today, we continue to uphold this belief through every project
                  we undertake.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-4 sm:pt-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    <span className="font-semibold text-sm sm:text-base">
                      Innovation First
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    <span className="font-semibold text-sm sm:text-base">
                      Client Success
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    <span className="font-semibold text-sm sm:text-base">
                      Quality Driven
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-animate-id="identity-right"
              className={`transition-all duration-1000 ${
                isVisible["identity-right"]
                  ? "fade-in-right"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 shadow-2xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white">
                    <div className="text-center transition duration-300 hover:scale-105">
                      <Target className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-purple-200" />
                      <h3 className="text-lg sm:text-xl font-bold mb-2">
                        Our Mission
                      </h3>
                      <p className="text-sm text-purple-100">
                        To empower businesses with innovative technology
                        solutions that drive sustainable growth and competitive
                        advantage.
                      </p>
                    </div>
                    <div className="text-center transition duration-300 hover:scale-105">
                      <Users className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-blue-200" />
                      <h3 className="text-lg sm:text-xl font-bold mb-2">
                        Our Vision
                      </h3>
                      <p className="text-sm text-blue-100">
                        To be the global leader in transformative digital
                        solutions that shape the future of business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        id="our-journey"
        className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white scroll-mt-[120px]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            data-animate-id="timeline-header"
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible["timeline-header"]
                ? "fade-in-up"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-['Montserrat']">
              Our <span className="text-purple-400">Journey</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, here's how we've
              grown and evolved.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>

            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  data-animate-id={`milestone-${index}`}
                  className={`transition-all duration-1000 flex items-start ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  } ${
                    isVisible[`milestone-${index}`]
                      ? "fade-in-up"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`flex-1 ml-8 sm:ml-0 ${
                      index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                    }`}
                  >
                    <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 group hover:scale-105">
                      <div className="text-purple-400 font-bold text-lg sm:text-xl mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-2.5 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-3 h-3 sm:w-6 sm:h-6 bg-indigo-400 rounded-full border-2 sm:border-4 border-gray-900 z-10 flex-shrink-0 mt-6"></div>

                  <div className="flex-1 hidden sm:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            data-animate-id="values-header"
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible["values-header"]
                ? "fade-in-up"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-['Montserrat']">
              Our Core <span className="text-indigo-600">Values</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every
              solution we deliver.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                data-animate-id={`value-${index}`}
                className={`transition-all duration-1000 group cursor-pointer ${
                  isVisible[`value-${index}`]
                    ? "fade-in-up"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveValue(index)}
              >
                <div
                  className={`relative bg-gradient-to-br ${value.color} p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 text-white h-full`}
                >
                  <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    {value.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                    {value.description}
                  </p>

                  <div className="absolute top-4 right-4 w-8 sm:w-12 h-8 sm:h-12 border-2 border-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-4 sm:w-6 h-4 sm:h-6 border-2 border-white/20 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            data-animate-id="tech-header"
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible["tech-header"]
                ? "fade-in-up"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-['Montserrat']">
              Our <span className="text-purple-600">Technology Stack</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable,
              and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                data-animate-id={`tech-${index}`}
                className={`transition-all duration-1000 group ${
                  isVisible[`tech-${index}`] ? "scale-in" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 text-center border border-gray-200 hover:border-purple-300">
                  <div className="text-purple-600 mb-4 group-hover:text-blue-600 transition-colors flex justify-center">
                    {tech.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                    {tech.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {tech.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            data-animate-id="testimonial-header"
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible["testimonial-header"]
                ? "fade-in-up"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-['Montserrat']">
              What Our <span className="text-purple-300">Clients Say</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/20">
              <div
                data-animate-id="testimonial-content"
                className={`text-center transition-all duration-1000 ${
                  isVisible["testimonial-content"]
                    ? "scale-in"
                    : "opacity-0 scale-95"
                }`}
              >
                <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-300 mx-auto mb-4 sm:mb-6" />

                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8 text-slate-100">
                  "{testimonials[currentTestimonial].content}"
                </p>

                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>

                <div className="text-base sm:text-lg font-semibold text-white mb-1">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-purple-300 text-sm sm:text-base">
                  {testimonials[currentTestimonial].role},{" "}
                  {testimonials[currentTestimonial].company}
                </div>
              </div>

              <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-purple-400"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div
          data-animate-id="cta"
          className={`max-w-4xl mx-auto text-center px-4 sm:px-6 transition-all duration-1000 ${
            isVisible.cta ? "fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-['Montserrat']">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-10 text-purple-100">
            Let's discuss how we can help you achieve your digital
            transformation goals and drive your business forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3 justify-center group">
              Start Your Project
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
              Schedule a Consultation
            </button>
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
                    +91 8240384648
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <a
                    href="mailto:contact@jenisys.in"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    contact@jenisys.in
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

export default AboutUsRedesign;

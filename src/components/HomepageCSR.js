"use client";

import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  memo,
} from "react";
import "../app/global.css";
import { useSwipeable } from "react-swipeable";

import { useCalendar } from "@/contexts/CalendarContext";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Calendar,
  Bot,
} from "lucide-react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import {
  useDragControls,
  useMotionValue,
  useAnimationControls,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Coffee, Beer } from "lucide-react";
import { X } from "lucide-react";
import {
  Zap,
  Rocket,
  Shield,
  Users,
  Code,
  Lightbulb,
  Wrench,
} from "lucide-react";
import {
  ChevronDown,
  Monitor,
  Smartphone,
  Cloud,
  UserCog,
  ChevronLeft,
} from "lucide-react";

import { Star, User } from "lucide-react";
import Footer from "./Footer";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./Homepage/Hero"));
const VisionMission = dynamic(() => import("./Homepage/VisionMission"));
const CoffeeBanner = dynamic(() => import("./Homepage/CoffeeBanner"));
const Values = dynamic(() => import("./Homepage/Values"));
const Process = memo(dynamic(() => import("./Process"), { ssr: false }));
const ServicesIndustries = dynamic(() =>
  import("./Homepage/ServicesIndustries")
);
const TechStack = dynamic(() => import("./TechStack"));
const Testimonials = dynamic(() => import("./Homepage/Testimonials"));
const BeerBanner = dynamic(() => import("./Homepage/BeerBanner"));
const CaseStudies = dynamic(() => import("./Homepage/CaseStudies"));
const BlogSection = dynamic(() => import("./Homepage/BlogSection"));

// Memoized constants to prevent recreation
const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Retail Automation",
    description:
      "Developed a smart inventory system that reduced stockouts by 40% for a national retail chain.",
    industry: "Retail & E-Commerce",
    fullDetails:
      "We built a scalable AI system that tracked stock levels across 500+ stores, using predictive analytics to automatically place orders and prevent shortages.",
    metrics: { improvement: "40%", stores: "500+", timeline: "6 months" },
    color: "from-blue-500 to-cyan-400",
    initial: "A",
  },
  {
    id: 2,
    title: "Telehealth Platform for Remote Areas",
    description:
      "Enabled 24/7 virtual consultations and appointment management for rural clinics.",
    industry: "Healthcare",
    fullDetails:
      "Our team delivered a HIPAA-compliant video consultation platform integrated with EHR and prescription modules, increasing access to care in underserved regions.",
    metrics: { improvement: "300%", stores: "24/7", timeline: "8 months" },
    color: "from-emerald-500 to-teal-400",
    initial: "T",
  },
  {
    id: 3,
    title: "EdTech Learning Suite",
    description:
      "Created a scalable LMS used by over 50k students with integrated video and assessments.",
    industry: "Education",
    fullDetails:
      "We designed a modern LMS that supported real-time quizzes, student tracking, and teacher dashboards for a seamless learning experience.",
    metrics: { improvement: "50k+", stores: "Real-time", timeline: "4 months" },
    color: "from-violet-500 to-pink-500",
    initial: "E",
  },
  {
    id: 4,
    title: "Fintech Payment Gateway",
    description:
      "Built a secure, high-speed payment processing system handling $10M+ daily transactions.",
    industry: "Financial Services",
    fullDetails:
      "We developed a robust payment gateway with advanced fraud detection, multi-currency support, and 99.99% uptime. The system processes millions of transactions daily while maintaining PCI DSS compliance and sub-second response times.",
    metrics: { improvement: "$10M+", stores: "99.99%", timeline: "10 months" },
    color: "from-orange-500 to-red-400",
    initial: "F",
  },
];

// Optimized motion variants with reduced calculations
const cardVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
  },
};

const modalVariants = {
  initial: { opacity: 0, scale: 0.9, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
};

const testimonials = [
  {
    quote:
      "Working with Jenisys has been a game-changer for our tech startup. Their innovative approach to web development and deep understanding of our needs resulted in a seamless, high-performance website that has significantly boosted our client engagement.",
    name: "Emily Carter",
    title: "CEO of InnovateTech",
  },
  {
    quote:
      "Jenisys transformed our vision into reality with their exceptional software development skills. Their expertise in creating user-friendly applications and their commitment to delivering top-notch solutions made our collaboration a pleasure.",
    name: "James Thompson",
    title: "CTO of BrightFuture Solutions",
  },
  {
    quote:
      "The team at Jenisys went above and beyond to help us redesign our website. Their attention to detail was evident throughout. Our new site not only looks fantastic but also performs flawlessly, thanks to Jenisys's outstanding work.",
    name: "Sophie Nguyen",
    title: "Marketing Director at Pulse Dynamics",
  },
  {
    quote:
      "We chose Jenisys for their reputation for delivering high-quality tech solutions, and they exceeded our expectations. Their support has been invaluable, and we highly recommend their services.",
    name: "Michael Johnson",
    title: "Founder of Quantum Innovations",
  },
  {
    name: "Lisa Wang",
    title: "VP Product, NextGen Solutions",
    quote:
      "They delivered beyond our wildest dreams. The combination of creativity and technical prowess resulted in a product that truly stands out in the market.",
  },
  {
    name: "James Miller",
    title: "Operations Manager, ScaleUp Corp",
    quote:
      "Remarkable problem-solving skills and innovative solutions. They transformed our operations and significantly improved our efficiency and productivity.",
  },
];

const TABS = {
  SERVICES: "Services",
  INDUSTRIES: "Industries We Serve",
};

const HomepageCSR = memo(() => {
  // State management - grouped related states
  const [slideStates, setSlideStates] = useState({
    currentSlide: 0,
    currentIndex: 0,
    cardsToShow: 1,
    slidesToShow: 1,
  });

  const [uiStates, setUIStates] = useState({
    isVisible: false,
    isLoaded: false,
    isDragging: false,
    hoveredItem: null,
    hoveredValue: null,
    hoveredService: null,
    hoveredCard: null,
    expandedService: null,
    activeStudy: null,
    activeTab: "services",
    showAlert: false,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
  });

  // Refs
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const resizeTimeoutRef = useRef(null);

  // Motion values
  const x = useMotionValue(0);
  const controls = useAnimationControls();
  const dragControls = useDragControls();

  const sectionOpacity = useMotionValue(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        sectionOpacity.set(entry.isIntersecting ? 1 : 0);
      },
      { threshold: [0, 0.1, 0.9, 1] }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [sectionOpacity]);
  const { openCalendar } = useCalendar();

  // Memoized background elements
  const backgroundElements = useMemo(
    () => (
      <>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-full blur-3xl opacity-40" />
      </>
    ),
    []
  );

  // Optimized resize handler with throttling
  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    let newCardsToShow, newSlidesToShow;

    if (width < 480) {
      newCardsToShow = 1;
      newSlidesToShow = 1;
    } else if (width < 768) {
      newCardsToShow = 1;
      newSlidesToShow = 1;
    } else if (width < 1024) {
      newCardsToShow = 2;
      newSlidesToShow = 2;
    } else if (width < 1280) {
      newCardsToShow = 2;
      newSlidesToShow = 2;
    } else if (width >= 1536) {
      newCardsToShow = 3;
      newSlidesToShow = 3;
    } else {
      newCardsToShow = 3;
      newSlidesToShow = 2;
    }

    setSlideStates((prev) => ({
      ...prev,
      cardsToShow: newCardsToShow,
      slidesToShow: newSlidesToShow,
      currentIndex: 0,
    }));
    x.set(0);
  }, [x]);

  // Throttled resize handler - fixed dependency issue
  const throttledResize = useCallback(() => {
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }
    resizeTimeoutRef.current = setTimeout(handleResize, 100);
  }, [handleResize]);

  // Handle responsive cards with proper breakpoints
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", throttledResize);
    return () => {
      window.removeEventListener("resize", throttledResize);
    };
  }, [handleResize, throttledResize]);

  const maxIndex = Math.max(0, caseStudies.length - slideStates.cardsToShow);
  const totalSlides = maxIndex + 1;

  // Memoized carousel functions
  const nextSlide = useCallback(() => {
    if (slideStates.currentIndex < maxIndex) {
      const newIndex = slideStates.currentIndex + 1;
      setSlideStates((prev) => ({ ...prev, currentIndex: newIndex }));
      controls.start({
        x: `-${(newIndex / slideStates.cardsToShow) * 100}%`,
        transition: {
          type: "tween",
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        },
      });
    }
  }, [slideStates.currentIndex, maxIndex, slideStates.cardsToShow, controls]);

  const prevSlide = useCallback(() => {
    if (slideStates.currentIndex > 0) {
      const newIndex = slideStates.currentIndex - 1;
      setSlideStates((prev) => ({ ...prev, currentIndex: newIndex }));
      controls.start({
        x: `-${(newIndex / slideStates.cardsToShow) * 100}%`,
        transition: {
          type: "tween",
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        },
      });
    }
  }, [slideStates.currentIndex, slideStates.cardsToShow, controls]);

  const goToCaseSlide = useCallback(
    (index) => {
      setSlideStates((prev) => ({ ...prev, currentIndex: index }));
      controls.start({
        x: `-${(index / slideStates.cardsToShow) * 100}%`,
        transition: {
          type: "tween",
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        },
      });
    },
    [slideStates.cardsToShow, controls]
  );

  // Handle drag end
  const handleDragEnd = useCallback(
    (event, info) => {
      setUIStates((prev) => ({ ...prev, isDragging: false }));
      const threshold = 50;
      const velocity = info.velocity.x;
      const offset = info.offset.x;

      let newIndex = slideStates.currentIndex;

      if (Math.abs(offset) > threshold || Math.abs(velocity) > 500) {
        if (offset > 0 && slideStates.currentIndex > 0) {
          newIndex = slideStates.currentIndex - 1;
        } else if (offset < 0 && slideStates.currentIndex < maxIndex) {
          newIndex = slideStates.currentIndex + 1;
        }
      }

      setSlideStates((prev) => ({ ...prev, currentIndex: newIndex }));
      controls.start({
        x: `-${(newIndex / slideStates.cardsToShow) * 100}%`,
        transition: { type: "spring", stiffness: 400, damping: 40 },
      });
    },
    [slideStates.currentIndex, slideStates.cardsToShow, maxIndex, controls]
  );

  // Optimized intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setUIStates((prev) => ({ ...prev, isVisible: true }));
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Testimonial auto-slide with cleanup
  useEffect(() => {
    if (!uiStates.isVisible) return;

    const interval = setInterval(() => {
      setSlideStates((prev) => {
        const nextSlide = prev.currentSlide + 1;
        return {
          ...prev,
          currentSlide: nextSlide >= testimonials.length ? 0 : nextSlide,
        };
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [uiStates.isVisible]);

  // Memoized visible testimonials
  const visibleTestimonials = useMemo(() => {
    const start = slideStates.currentSlide;
    const end = start + slideStates.slidesToShow;
    const sliced = testimonials.slice(start, end);
    if (sliced.length < slideStates.slidesToShow) {
      return [
        ...sliced,
        ...testimonials.slice(0, slideStates.slidesToShow - sliced.length),
      ];
    }
    return sliced;
  }, [slideStates.currentSlide, slideStates.slidesToShow]);

  const goToSlide = useCallback((index) => {
    setSlideStates((prev) => ({ ...prev, currentSlide: index }));
  }, []);

  const maxSlides = Math.max(0, testimonials.length - slideStates.slidesToShow);

  // Form handlers
  const handleShowAlert = useCallback(() => {
    setUIStates((prev) => ({ ...prev, showAlert: true }));
  }, []);

  const handleCloseAlert = useCallback(() => {
    setUIStates((prev) => ({ ...prev, showAlert: false }));
  }, []);

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  // Enhanced form validation
  const validateEmail = useCallback((email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const errors = {};
      if (!formData.name?.trim()) {
        errors.name = "Name is required";
      }
      if (!formData.email?.trim()) {
        errors.email = "Email is required";
      } else if (!validateEmail(formData.email)) {
        errors.email = "Please enter a valid email address";
      }

      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }

      setFormErrors({ name: "", email: "" });

      try {
        const response = await fetch("/api/newsletter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
          }),
        });

        if (response.ok) {
          handleShowAlert();
          setFormData({ name: "", email: "" });
        } else {
          const errorData = await response.json().catch(() => ({}));
          console.error(
            "Error sending email:",
            errorData.message || "Unknown error"
          );
        }
      } catch (error) {
        console.error("Network error:", error.message);
      }
    },
    [formData, handleShowAlert, validateEmail]
  );

  // Scroll observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const elements = document.querySelectorAll(".scroll-on-appear");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  // Memoized data arrays
  const missionItems = useMemo(
    () => [
      {
        image: "/img/bulb.png",
        text: "Build custom software for your business's unique growth.",
        alt: "bulb",
      },
      {
        image: "/img/nano.png",
        text: "Drive innovation with AI to solve your toughest challenges.",
        alt: "nano",
      },
      {
        image: "/img/arrow.png",
        text: "Deliver reliable, high-quality products on time and on budget.",
        alt: "arrow",
      },
      {
        image: "/img/success.png",
        text: "Be your trusted partner from concept to long-term success.",
        alt: "success",
      },
    ],
    []
  );

  const values = useMemo(
    () => [
      {
        id: 1,
        icon: <Code className="w-8 h-8 md:w-10 md:h-10" />,
        title: "Cutting-Edge Technology",
        description:
          "We leverage the latest technologies and frameworks to build scalable, future-proof solutions that drive real digital transformation.",
        color: "from-blue-500 to-cyan-500",
      },
      {
        id: 2,
        icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10" />,
        title: "Innovation First",
        description:
          "We constantly explore emerging technologies like AI and automation to create groundbreaking solutions for your most complex challenges.",
        color: "from-violet-500 to-pink-500",
      },
      {
        id: 3,
        icon: <Shield className="w-8 h-8 md:w-10 md:h-10" />,
        title: "Security & Reliability",
        description:
          "Every solution we build prioritizes robust security, data protection, and 99.9% uptime to ensure seamless business continuity.",
        color: "from-green-500 to-teal-500",
      },
      {
        id: 4,
        icon: <Users className="w-8 h-8 md:w-10 md:h-10" />,
        title: "Client-Centric Approach",
        description:
          "We partner closely with our clients, understanding your unique needs to deliver personalized tech solutions that consistently exceed your expectations.",
        color: "from-orange-500 to-red-500",
      },
    ],
    []
  );

  const services = useMemo(
    () => [
      {
        icon: Bot,
        title: "AI Automation",
        description:
          "Streamlining business operations through intelligent automation solutions using AI models, machine learning, and workflow orchestration to enhance efficiency and reduce manual effort.",
        link: "/services/ai-ml",
      },
      {
        icon: Monitor,
        title: "Web Development",
        description:
          "Building fast, responsive and scalable web applications with modern technologies like React, Next.js, and Node.js for optimal performance.",
        link: "/services/web-development",
      },
      {
        icon: Smartphone,
        title: "App Development",
        description:
          "Crafting native and cross-platform mobile applications for Android and iOS with React Native and Flutter frameworks.",
        link: "/services/mobile-development",
      },
      {
        icon: Cloud,
        title: "Cloud Solutions",
        description:
          "Deploying scalable cloud infrastructures, DevOps automation, and serverless architectures on AWS, Azure, and Google Cloud.",
        link: "/services/cloud-solutions",
      },
      {
        icon: Code,
        title: "Custom Software Development",
        description:
          "Tailored software solutions built to match your unique business needs — scalable, secure, and ready to fuel your growth.",
        link: "/services/Custom-Software-Development",
      },
      {
        icon: UserCog,
        title: "IT consulting",
        description:
          "Strategic IT guidance to help you innovate, optimize operations, and make technology work for your business goals.",
        link: "/services/IT-consulting",
      },
      {
        icon: Wrench,
        title: "Maintenance & Support ",
        description:
          "Reliable ongoing support and maintenance to keep your systems running smoothly, securely, and without interruptions.",
        link: "/services/Maintenance",
      },
    ],
    []
  );

  const industries = useMemo(
    () => [
      {
        title: "Healthcare",
        description:
          "HIPAA-compliant platforms, telemedicine solutions, and patient management systems with advanced security protocols.",
        icon: "🏥",
      },
      {
        title: "Retail & E-commerce",
        description:
          "Custom storefronts, inventory management systems, payment gateways, and analytics dashboards for business growth.",
        icon: "🛍️",
      },
      {
        title: "Education",
        description:
          "Interactive learning management systems, virtual classrooms, and comprehensive student progress tracking platforms.",
        icon: "🎓",
      },
      {
        title: "Finance & Fintech",
        description:
          "Custom accounting platforms, secure payment gateways, and real-time financial analytics dashboards tailored for financial institutions and startups.",
        icon: "💰",
      },
      {
        title: "Hospitality & Food Services",
        description:
          "Restaurant POS systems, online food ordering platforms, and reservation management apps designed to enhance customer experience.",
        icon: "🍽️",
      },
      {
        title: "Real Estate",
        description:
          "Dynamic property listing websites, virtual tours, and CRM systems built for agents and real estate companies to manage sales pipelines.",
        icon: "🏘️",
      },
      {
        title: "Legal & Professional Services",
        description:
          "Case management software, secure document portals, and automated billing systems tailored for law firms and consulting agencies.",
        icon: "⚖️",
      },
      {
        title: "Travel & Tourism",
        description:
          "Custom booking engines, itinerary planners, and mobile apps for travel agencies to enhance customer engagement and streamline operations.",
        icon: "✈️",
      },
      {
        title: "Media & Entertainment",
        description:
          "Interactive content platforms, OTT streaming apps, and event booking systems for creators, studios, and entertainment brands.",
        icon: "🎬",
      },
    ],
    []
  );

  // Memoized AnimatedIcon component
  const AnimatedIcon = ({ Icon, isHovered }) => (
    <div
      className={`w-16 h-16 mb-6 mx-auto rounded-xl bg-gray-100 border border-gray-200 p-3 shadow-sm transition-all duration-300 ${
        isHovered ? "scale-110 bg-gray-200 shadow-md" : ""
      }`}
    >
      <Icon
        size={40}
        className={`text-gray-700 transition-all duration-300 ${
          isHovered ? "text-gray-900" : ""
        }`}
      />
    </div>
  );

  AnimatedIcon.displayName = "AnimatedIcon";

  return (
    <div className="flex-col relative overflow-x-hidden w-full">
      <Hero />

      <div ref={sectionRef}>
        <VisionMission
          isVisible={uiStates.isVisible}
          hoveredItem={uiStates.hoveredItem}
          setUIStates={setUIStates}
          missionItems={missionItems}
        />
      </div>

      <CoffeeBanner />

      <div className="will-change-transform">
        <Values
          values={values}
          hoveredValue={uiStates.hoveredValue}
          setUIStates={setUIStates}
        />
      </div>

      <Process />

      <ServicesIndustries
        services={services}
        industries={industries}
        activeTab={uiStates.activeTab}
        setUIStates={setUIStates}
        hoveredService={uiStates.hoveredService}
        expandedService={uiStates.expandedService}
        AnimatedIcon={AnimatedIcon}
      />

      <div className="will-change-transform">
        <TechStack />
      </div>

      <div className="will-change-transform">
        <Testimonials
          testimonials={testimonials}
          slideStates={slideStates}
          goToSlide={goToSlide}
          isVisible={uiStates.isVisible}
          maxSlides={maxSlides}
          visibleTestimonials={visibleTestimonials}
        />
      </div>

      <BeerBanner />

      <div className="will-change-transform">
        <CaseStudies
          caseStudies={caseStudies}
          slideStates={slideStates}
          uiStates={uiStates}
          setUIStates={setUIStates}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          goToCaseSlide={goToCaseSlide}
          handleDragEnd={handleDragEnd}
          carouselRef={carouselRef}
          controls={controls}
          dragControls={dragControls}
          maxIndex={maxIndex}
          totalSlides={totalSlides}
          containerRef={containerRef}
          sectionOpacity={sectionOpacity}
          backgroundElements={backgroundElements}
        />
      </div>
      <BlogSection />
      <Footer />
    </div>
  );
});

HomepageCSR.displayName = "HomepageCSR";

export default HomepageCSR;

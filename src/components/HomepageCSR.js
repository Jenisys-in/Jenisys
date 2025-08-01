"use client";

import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import "../app/global.css";
import { useSwipeable } from "react-swipeable";

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
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  PanInfo,
} from "framer-motion";
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

// Memoized TestimonialCard component with performance optimizations
const TestimonialCard = React.memo(({ testimonial, index, isVisible }) => {
  const cardStyle = useMemo(
    () => ({
      transitionDelay: `${index * 150}ms`,
      backfaceVisibility: "hidden",
      perspective: "1000px",
    }),
    [index]
  );

  const starElements = useMemo(
    () =>
      [...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          fill="currentColor"
          className="drop-shadow-sm"
        />
      )),
    []
  );

  return (
    <div
      className={`
        bg-gradient-to-br from-gray-900 to-gray-800 
        border border-gray-700/50 
        rounded-2xl p-6 md:p-8 
        shadow-2xl 
        h-full flex flex-col justify-between
        transform transition-all duration-500 ease-out
        hover:shadow-3xl hover:border-gray-600/50
        will-change-transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={cardStyle}
    >
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full shadow-lg">
            <User className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-base md:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {testimonial.name}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 font-medium">
              {testimonial.title}
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-2 -top-2 text-4xl text-blue-500/20 font-serif">
            "
          </div>
          <p className="text-sm md:text-lg 3xl:text-xl leading-relaxed mb-4 text-gray-100 relative z-10 pl-4">
            {testimonial.quote}
          </p>
          <div className="absolute -right-2 -bottom-6 text-4xl text-blue-500/20 font-serif rotate-180">
            "
          </div>
        </div>
      </div>
      <div className="flex gap-1 text-yellow-400 mt-4">{starElements}</div>
    </div>
  );
});

TestimonialCard.displayName = "TestimonialCard";

const TABS = {
  SERVICES: "Services",
  INDUSTRIES: "Industries We Serve",
};

const HomepageCSR = () => {
  HomepageCSR.displayName = "HomepageCSR";

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
    contactNo: "",
  });

  // Refs
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const carouselRef = useRef(null);

  // Motion values
  const x = useMotionValue(0);
  const controls = useAnimationControls();
  const dragControls = useDragControls();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Memoized transforms to prevent recalculation
  const backgroundY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );

  // Memoized background elements
  const backgroundElements = useMemo(
    () => (
      <>
        <motion.div
          style={{ y: backgroundY }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-40"
        />
        <motion.div
          style={{ y: backgroundY2 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-full blur-3xl opacity-40"
        />
      </>
    ),
    [backgroundY, backgroundY2]
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

  // Throttled resize handler
  const throttledResize = useMemo(() => {
    let timeoutId;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };
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
  }, [uiStates.isVisible, testimonials.length]);

  // Memoized visible testimonials
  const visibleTestimonials = useMemo(() => {
    const start = slideStates.currentSlide;
    const end = start + slideStates.slidesToShow;
    return testimonials.slice(start, end);
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

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!formData.name || !formData.email) return;

      try {
        const response = await fetch("/api/newsletter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          handleShowAlert();
          setFormData({ name: "", email: "", contactNo: "" });
        } else {
          console.error("Error sending email");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
    [formData, handleShowAlert]
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

  // Mouse tracking with throttling
  useEffect(() => {
    setUIStates((prev) => ({ ...prev, isLoaded: true }));

    let animationFrameId;
    const handleMouseMove = (e) => {
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
        animationFrameId = null;
      });
    };

    const section = document.getElementById("hero-section");
    if (section) {
      section.addEventListener("mousemove", handleMouseMove, { passive: true });
      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }
  }, []);

  // Memoized data arrays
  const missionItems = useMemo(
    () => [
      {
        image: "/img/bulb.png",
        text: "To Empower Businesses with Uncompromised Quality and Innovation.",
        alt: "bulb",
      },
      {
        image: "/img/nano.png",
        text: "To Revolutionize Business Growth Through Superior Technology.",
        alt: "nano",
      },
      {
        image: "/img/arrow.png",
        text: "To Drive Success with Tailored, High-Quality Digital Solutions.",
        alt: "arrow",
      },
      {
        image: "/img/success.png",
        text: "To Create the Future of Business with Relentless Excellence.",
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
          "We leverage the latest technologies and frameworks to build scalable, future-proof solutions that drive digital transformation.",
        color: "from-blue-500 to-cyan-500",
      },
      {
        id: 2,
        icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10" />,
        title: "Innovation First",
        description:
          "Our team constantly explores emerging technologies like AI, blockchain, and IoT to create groundbreaking solutions for complex challenges.",
        color: "from-violet-500 to-pink-500",
      },
      {
        id: 3,
        icon: <Shield className="w-8 h-8 md:w-10 md:h-10" />,
        title: "Security & Reliability",
        description:
          "Every solution we build prioritizes robust security, data protection, and 99.9% uptime to ensure your business continuity.",
        color: "from-green-500 to-teal-500",
      },
      {
        id: 4,
        icon: <Users className="w-8 h-8 md:w-10 md:h-10" />,
        title: "Client-Centric Approach",
        description:
          "We partner closely with our clients, understanding their unique needs to deliver personalized tech solutions that exceed expectations.",
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
  const AnimatedIcon = React.memo(({ Icon, isHovered }) => (
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
  ));

  AnimatedIcon.displayName = "AnimatedIcon";

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goToSlide(slideStates.currentSlide + 1),
    onSwipedRight: () => goToSlide(slideStates.currentSlide - 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="flex-col relative overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="section white-section relative overflow-hidden bg-white">
        <div className="absolute w-[500px] h-[500px] bg-[#7526FE]/10 blur-[120px] rounded-full left-[60%] top-[20%] -z-10" />

        <div className="w-screen px-6 sm:px-8 md:px-[70px] lg:px-[100px] xl:px-[120px] 3xl:px-[150px] py-10 md:py-20 flex flex-col lg:flex-row justify-between items-center lg:h-screen gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          <div className="text-black w-full lg:flex-1 max-w-full lg:max-w-none">
            <h1 className="font-['Montserrat'] text-black text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[44px] 2xl:text-[52px] 3xl:text-[60px] font-semibold leading-tight sm:leading-[28px] md:leading-[40px] lg:leading-[44px] xl:leading-[48px] 2xl:leading-[56px] 3xl:leading-[64px] mt-6">
              Revolutionize your business with{" "}
              <span className="text-[#7042F8]">Jenisys</span>
            </h1>

            <p className="font-['Montserrat'] text-black text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl mt-4 leading-relaxed max-w-full sm:max-w-[500px] md:max-w-[620px] lg:max-w-[580px] xl:max-w-[620px]">
              Jenisys: Where Innovation Begins. We craft top-tier software and
              digital solutions, ensuring your business thrives with unmatched
              quality and excellence. From consultation to development, our
              expertise drives your success beyond limits.
            </p>

            <div className="mt-6">
              <a href="/about" className="inline-block">
                <button className="relative bg-[#361CA9] hover:bg-[#4b2ffb] transition duration-300 text-white w-[130px] h-[36px] sm:w-[160px] sm:h-[44px] md:w-[200px] md:h-[55px] lg:w-[220px] lg:h-[60px] xl:w-[240px] xl:h-[65px] 2xl:w-[260px] 2xl:h-[70px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-semibold rounded-md shadow-lg  overflow-hidden group holographic-button">
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#4b2ffb] via-[#7042F8] to-[#361CA9] opacity-0 group-hover:opacity-20 transition duration-300" />
                </button>
              </a>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
            <video
              className="rounded-2xl shadow-xl border border-black/10 hover:shadow-purple-400/30 transition-all duration-300 w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[580px] xl:max-w-[660px] 2xl:max-w-[750px] 3xl:max-w-[850px] h-[180px] sm:h-[220px] md:h-[320px] lg:h-[380px] xl:h-[430px] 2xl:h-[460px] 3xl:h-[480px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/Home Page Video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Vision/Mission Section */}
      <div className="section white-section">
        <div
          ref={sectionRef}
          className="scroll-on-appear w-screen min-h-[650px] sm:min-h-[700px] md:min-h-[800px] lg:h-screen bg-black px-5 sm:px-8 md:px-12 lg:pl-[60px] lg:px-0 flex flex-col-reverse lg:flex-row text-white"
        >
          <div className="flex flex-col-reverse lg:flex-row w-full">
            {/* Vision Section */}
            <div
              className={`flex flex-col lg:w-1/2 mb-8 lg:mb-0 transform transition-all duration-700 ${
                uiStates.isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="relative group">
                <Image
                  src="/img/image 3.png"
                  width={500}
                  height={500}
                  alt="Our Vision"
                  className="pt-[20px] sm:pt-[30px] md:pt-[40px] w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:w-auto mx-auto lg:mx-0 transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-[20px] sm:mt-[30px] md:mt-[40px]"></div>
              </div>

              <h1 className="font-['Montserrat'] font-extrabold text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] pt-[15px] sm:pt-[20px] md:pt-[25px] lg:pt-[30px] relative group text-center lg:text-left">
                Our Vision
                <div className="absolute bottom-0 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-0 h-[2px] bg-[#7526FE] transition-all duration-500 group-hover:w-full"></div>
              </h1>

              <p className="font-['Montserrat'] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] 3xl:text-[25px] pt-[10px] sm:pt-[15px] md:pt-[20px] lg:pt-0 3xl:mt-[20px] leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300 text-center lg:text-left max-w-[600px] mx-auto lg:mx-0">
                Our vision is to be the leading transformative technology
                solutions provider, empowering businesses with innovative
                digital solutions and driving transformative growth.
              </p>

              <div className="relative group flex justify-center lg:justify-start">
                <button className="w-[120px] h-[35px] sm:w-[150px] sm:h-[40px] md:w-[180px] md:h-[50px] lg:w-[225px] lg:h-[60px] bg-[#7526FE] font-['Montserrat'] text-[12px] sm:text-[14px] md:text-[18px] lg:text-[24px] font-semibold my-4 sm:my-6 md:my-8 lg:my-2 rounded-[8px] md:rounded-[10px] lg:mb-[20px] 3xl:mt-[60px] relative overflow-hidden transition-all duration-300 hover:bg-[#8a3bff] holographic-button">
                  <span className="relative z-10 flex items-center justify-center h-full">
                    Learn More
                    <ChevronRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
            </div>

            {/* Mission Section */}
            <div
              className={`flex flex-col lg:w-1/2 font-['Montserrat'] pt-[20px] sm:pt-[25px] md:pt-[30px] lg:pt-[30px] order-first lg:order-none transform transition-all duration-700 delay-200 ${
                uiStates.isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <h1 className="text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] font-extrabold mb-[15px] sm:mb-[20px] md:mb-[25px] lg:mb-0 relative group text-center lg:text-left">
                Our Mission
                <div className="absolute bottom-0 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-0 h-[2px] bg-[#7526FE] transition-all duration-500 group-hover:w-full"></div>
              </h1>

              <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-0">
                {missionItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-row items-center group cursor-pointer transition-all duration-300 hover:translate-x-2 ${
                      uiStates.hoveredItem === index ? "bg-white/5" : ""
                    } rounded-lg p-2 -m-2`}
                    onMouseEnter={() =>
                      setUIStates((prev) => ({ ...prev, hoveredItem: index }))
                    }
                    onMouseLeave={() =>
                      setUIStates((prev) => ({ ...prev, hoveredItem: null }))
                    }
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      transform: uiStates.isVisible
                        ? "translateX(0)"
                        : "translateX(-20px)",
                      opacity: uiStates.isVisible ? 1 : 0,
                    }}
                  >
                    <div
                      className={`bg-[#A3A3A3] rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[11px] w-[45px] h-[40px] sm:w-[55px] sm:h-[50px] md:w-[70px] md:h-[65px] lg:w-[89px] lg:h-[89px] mb-[8px] sm:mb-[10px] md:mb-[12px] lg:mb-0 mt-[15px] sm:mt-[20px] md:mt-[25px] lg:mt-[30px] flex justify-center items-center transition-all duration-300 group-hover:bg-[#b8b8b8] group-hover:scale-105 ${
                        uiStates.hoveredItem === index
                          ? "shadow-lg shadow-white/10"
                          : ""
                      } flex-shrink-0`}
                    >
                      <Image
                        src={item.image}
                        width={52}
                        height={52}
                        alt={item.alt}
                        className="w-[24px] h-[22px] sm:w-[28px] sm:h-[26px] md:w-[40px] md:h-[38px] lg:w-[52px] lg:h-[52px] transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <p className="text-[11px] sm:text-[13px] md:text-[16px] lg:text-[20px] 3xl:text-[25px] 3xl:pt-[15px] ml-3 sm:ml-4 md:ml-4 lg:ml-4 flex-1 transition-all duration-300 group-hover:text-white/90 leading-relaxed max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[524px]">
                      {item.text}
                    </p>

                    <div
                      className={`ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        uiStates.hoveredItem === index ? "opacity-100" : ""
                      } flex-shrink-0`}
                    >
                      <div className="w-1 h-6 sm:h-7 md:h-8 lg:h-8 bg-[#7526FE] rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coffee Banner */}
      <section className="w-full px-4 sm:px-8 py-12 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-amber-100 via-white to-amber-100 shadow-xl p-8 sm:p-10 lg:p-14 text-center max-w-5xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-2xl sm:text-3xl font-semibold text-gray-800 font-['Montserrat']">
              <Coffee className="w-7 h-7 text-amber-500" />
              <span>Schedule a free call over a cup of coffee</span>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6 py-3 text-sm sm:text-base shadow-md">
                Schedule a call
              </Button>
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <div className="bg-white w-full py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <Zap className="w-8 h-8 text-blue-600" />
              <Rocket className="w-8 h-8 text-purple-600" />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-['Montserrat']">
              Innovative Tech Solutions for
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Transformative Growth
              </span>
            </h1>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-800 font-['Montserrat']">
                Our Values
              </h2>
              <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.5 }}
                className={`group relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg transition-all duration-700 ease-out transform hover:-translate-y-3 hover:shadow-2xl cursor-pointer border border-gray-100 ${
                  uiStates.hoveredValue === value.id ? "scale-[1.02]" : ""
                }`}
                onMouseEnter={() =>
                  setUIStates((prev) => ({ ...prev, hoveredValue: value.id }))
                }
                onMouseLeave={() =>
                  setUIStates((prev) => ({ ...prev, hoveredValue: null }))
                }
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-all duration-700 ease-out`}
                ></div>

                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} text-white mb-6 transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-3`}
                >
                  <div className="transition-all duration-700 ease-out">
                    {value.icon}
                  </div>
                </div>

                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-4 font-['Montserrat'] transition-all duration-700 ease-out group-hover:text-gray-800">
                  {value.title}
                </h3>

                <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed font-['Montserrat'] transition-all duration-700 ease-out group-hover:text-gray-700">
                  {value.description}
                </p>

                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${
                    value.color
                  } rounded-b-2xl transition-all duration-700 ease-out ${
                    uiStates.hoveredValue === value.id ? "w-full" : "w-0"
                  }`}
                ></div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-12 md:mt-16 gap-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div
              className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Services/Industries Section */}
      <section className="relative w-full min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-80 sm:h-96">
          <Image
            src="/img/Services.png"
            alt="Services Background"
            layout="fill"
            objectFit="cover"
            style={{ filter: "brightness(1.2) contrast(0.8)" }}
          />
          <div className="absolute inset-0" />
        </div>

        <div
          className={`absolute top-80 sm:top-96 left-0 w-full bottom-0 transition-all duration-700 ${
            uiStates.activeTab === "industries"
              ? "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
              : "bg-gradient-to-br from-white via-gray-50 to-slate-50"
          }`}
        />

        <div className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Montserrat'] text-white mb-4">
              What We Do
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-['Montserrat']">
              Explore the services we offer and the industries we empower with
              cutting-edge technology solutions.
            </p>
          </div>

          <div className="flex justify-center mb-12 sm:mb-16">
            <div className="inline-flex rounded-xl bg-white border border-gray-200 p-1 shadow-lg">
              <button
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                  uiStates.activeTab === "services"
                    ? "bg-gray-900 text-white shadow-md transform scale-[1.02]"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() =>
                  setUIStates((prev) => ({ ...prev, activeTab: "services" }))
                }
              >
                Services Offered
              </button>
              <button
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                  uiStates.activeTab === "industries"
                    ? "bg-gray-900 text-white shadow-md transform scale-[1.02]"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() =>
                  setUIStates((prev) => ({ ...prev, activeTab: "industries" }))
                }
              >
                Industries We Serve
              </button>
            </div>
          </div>

          <div className="relative min-h-96">
            {/* Services Content */}
            <div
              className={`transition-all duration-700 ease-in-out ${
                uiStates.activeTab === "services"
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group relative p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 min-h-[200px] flex flex-col"
                    onMouseEnter={() =>
                      setUIStates((prev) => ({
                        ...prev,
                        hoveredService: index,
                      }))
                    }
                    onMouseLeave={() =>
                      setUIStates((prev) => ({ ...prev, hoveredService: null }))
                    }
                    onClick={() => {
                      setUIStates((prev) => ({
                        ...prev,
                        expandedService:
                          prev.expandedService === index ? null : index,
                      }));
                    }}
                  >
                    <div className="text-center flex-grow">
                      <AnimatedIcon
                        Icon={service.icon}
                        isHovered={uiStates.hoveredService === index}
                      />

                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-['Montserrat'] flex items-center justify-center gap-2">
                        {service.title}
                        <ChevronDown
                          size={20}
                          className={`transition-all duration-300 ${
                            uiStates.expandedService === index
                              ? "rotate-180 text-gray-900"
                              : "text-gray-400 group-hover:text-gray-600"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setUIStates((prev) => ({
                              ...prev,
                              expandedService:
                                prev.expandedService === index ? null : index,
                            }));
                          }}
                        />
                      </h3>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        uiStates.expandedService === index
                          ? "max-h-screen opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pt-2 text-left border-t border-gray-100 mt-4">
                        <p className="text-gray-600 text-sm sm:text-base font-['Montserrat'] mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="text-center">
                          <Link
                            href={service.link}
                            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-900 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 hover:shadow-lg text-sm sm:text-base"
                          >
                            Learn More
                            <ExternalLink size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries Content */}
            <div
              className={`transition-all duration-700 ease-in-out ${
                uiStates.activeTab === "industries"
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="group relative p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="text-4xl sm:text-5xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 font-['Montserrat'] text-center">
                      {industry.title}
                    </h3>

                    <p className="text-gray-600 text-sm sm:text-base font-['Montserrat'] text-center leading-relaxed mb-6">
                      {industry.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials-section"
        className="bg-black w-full px-4 md:px-16 py-20 text-white font-['Montserrat'] overflow-hidden"
      >
        <div className="text-center mb-16">
          <h1 className="text-[14px] md:text-[32px] font-bold uppercase tracking-widest mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h1>
          <p className="text-[16px] md:text-[24px] 3xl:text-[32px] font-semibold mt-4 max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Real stories from our clients showcasing our dedication to
            impactful, high-performance solutions.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div
            {...swipeHandlers}
            className="grid gap-6 md:gap-8 transition-all duration-700 ease-out cursor-grab"
            style={{
              gridTemplateColumns: `repeat(${slideStates.slidesToShow}, 1fr)`,
              transform: "translateZ(0)",
            }}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${slideStates.currentSlide}-${index}`}
                testimonial={testimonial}
                index={index}
                isVisible={uiStates.isVisible}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12 gap-3">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                w-3 h-3 rounded-full transition-all duration-300 ease-out
                ${
                  slideStates.currentSlide === index
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg"
                    : "bg-gray-600 hover:bg-gray-500"
                }
              `}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Beer Banner */}
      <section className="w-full px-4 sm:px-8 py-12 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-blue-100 via-white to-blue-100 shadow-xl p-8 sm:p-10 lg:p-14 text-center max-w-5xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-2xl sm:text-3xl font-semibold text-gray-800 font-['Montserrat']">
              <Beer className="w-7 h-7 text-blue-600" />
              <span>
                Don't like coffee? Let's schedule a free call over a beer
              </span>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 text-sm sm:text-base shadow-md">
                Schedule a call
              </Button>
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Case Studies Section */}
      <motion.section
        ref={containerRef}
        style={{ opacity: sectionOpacity }}
        className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 font-['Inter'] relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {backgroundElements}
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-100/80 rounded-full text-sm font-medium text-slate-600 mb-4 sm:mb-6"
          >
            <TrendingUp className="w-4 h-4" />
            Case Studies
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight px-4">
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Proven Impact
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Through Innovation
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4"
          >
            Discover how we've transformed businesses across industries with
            cutting-edge technology solutions.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="max-w-7xl mx-auto relative">
          {/* Navigation and Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-between items-center mb-6 sm:mb-8 px-2">
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevSlide}
                  disabled={slideStates.currentIndex === 0}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                    slideStates.currentIndex === 0
                      ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                      : "bg-white shadow-md text-slate-700 hover:shadow-lg hover:text-slate-900"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextSlide}
                  disabled={slideStates.currentIndex >= maxIndex}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                    slideStates.currentIndex >= maxIndex
                      ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                      : "bg-white shadow-md text-slate-700 hover:shadow-lg hover:text-slate-900"
                  }`}
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>

              {/* Indicators */}
              <div className="flex gap-1 sm:gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => goToCaseSlide(index)}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      index === slideStates.currentIndex
                        ? "bg-blue-600 w-6 sm:w-8"
                        : "bg-slate-300 hover:bg-slate-400 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Cards Container with Drag Support */}
          <div className="relative overflow-hidden pt-4 pb-12">
            <motion.div
              ref={carouselRef}
              animate={controls}
              initial={{
                x: `-${
                  (slideStates.currentIndex / slideStates.cardsToShow) * 100
                }%`,
              }}
              drag="x"
              dragControls={dragControls}
              dragConstraints={{
                left: `-${(maxIndex / slideStates.cardsToShow) * 100}%`,
                right: 0,
              }}
              dragElastic={0.1}
              onDragStart={() =>
                setUIStates((prev) => ({ ...prev, isDragging: true }))
              }
              onDragEnd={handleDragEnd}
              className="flex will-change-transform cursor-grab active:cursor-grabbing"
              style={{
                transform: `translateZ(0)`,
                backfaceVisibility: "hidden",
              }}
            >
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className="flex-shrink-0 px-2 sm:px-3 lg:px-4 py-2"
                  style={{ width: `${100 / slideStates.cardsToShow}%` }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={
                      !uiStates.isDragging
                        ? {
                            y: -12,
                            scale: 1.02,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.25,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    onHoverStart={() =>
                      !uiStates.isDragging &&
                      setUIStates((prev) => ({
                        ...prev,
                        hoveredCard: study.id,
                      }))
                    }
                    onHoverEnd={() =>
                      setUIStates((prev) => ({ ...prev, hoveredCard: null }))
                    }
                    className="group relative cursor-pointer h-full will-change-transform select-none"
                    onClick={(e) => {
                      if (!uiStates.isDragging) {
                        setUIStates((prev) => ({
                          ...prev,
                          activeStudy: study,
                        }));
                      }
                    }}
                    style={{
                      transform: `translateZ(0)`,
                      backfaceVisibility: "hidden",
                    }}
                  >
                    {/* Glow effect */}
                    <motion.div
                      className={`absolute -inset-1 sm:-inset-2 bg-gradient-to-r ${study.color} rounded-2xl sm:rounded-3xl blur-lg opacity-0 transition-opacity duration-500`}
                      animate={{
                        opacity:
                          uiStates.hoveredCard === study.id &&
                          !uiStates.isDragging
                            ? 0.15
                            : 0,
                        scale:
                          uiStates.hoveredCard === study.id &&
                          !uiStates.isDragging
                            ? 1.05
                            : 1,
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />

                    {/* Card */}
                    <div className="relative bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                      {/* Header */}
                      <div
                        className={`relative h-32 sm:h-40 lg:h-48 bg-gradient-to-br ${study.color} flex items-center justify-center overflow-hidden`}
                      >
                        <motion.div
                          animate={{
                            rotate:
                              uiStates.hoveredCard === study.id &&
                              !uiStates.isDragging
                                ? 360
                                : 0,
                            scale:
                              uiStates.hoveredCard === study.id &&
                              !uiStates.isDragging
                                ? 1.1
                                : 1,
                          }}
                          transition={{
                            duration: 0.6,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                          }}
                          className="text-white/90 text-3xl sm:text-4xl lg:text-6xl font-bold select-none"
                        >
                          {study.initial}
                        </motion.div>

                        {/* Industry Tag */}
                        <motion.div
                          className="absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4 px-2 py-1 sm:px-3 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700"
                          whileHover={
                            !uiStates.isDragging ? { scale: 1.05 } : {}
                          }
                          transition={{ duration: 0.2 }}
                        >
                          {study.industry}
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-5 lg:p-8">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 mb-2 sm:mb-3 transition-colors duration-200 group-hover:text-slate-900 line-clamp-2">
                          {study.title}
                        </h3>

                        <p className="text-slate-600 text-sm sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                          {study.description}
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-4 text-xs text-slate-500 mb-4 sm:mb-6">
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-1 mb-1">
                              <TrendingUp className="w-3 h-3 flex-shrink-0" />
                            </div>
                            <div className="font-semibold text-slate-700 text-xs sm:text-sm">
                              {study.metrics.improvement}
                            </div>
                            <div className="text-xs opacity-75">Growth</div>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-1 mb-1">
                              <Users className="w-3 h-3 flex-shrink-0" />
                            </div>
                            <div className="font-semibold text-slate-700 text-xs sm:text-sm">
                              {study.metrics.stores}
                            </div>
                            <div className="text-xs opacity-75">Scale</div>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-1 mb-1">
                              <Calendar className="w-3 h-3 flex-shrink-0" />
                            </div>
                            <div className="font-semibold text-slate-700 text-xs sm:text-sm">
                              {study.metrics.timeline}
                            </div>
                            <div className="text-xs opacity-75">Time</div>
                          </div>
                        </div>

                        {/* CTA */}
                        <motion.div
                          className="flex items-center justify-center gap-2 text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-300"
                          whileHover={
                            !uiStates.isDragging ? { scale: 1.05 } : {}
                          }
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-xs sm:text-sm">Learn More</span>
                          <motion.div
                            animate={{
                              x:
                                uiStates.hoveredCard === study.id &&
                                !uiStates.isDragging
                                  ? 4
                                  : 0,
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Touch indicators for mobile */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-6 sm:hidden">
              <div className="flex gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToCaseSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === slideStates.currentIndex
                        ? "bg-blue-600 w-6"
                        : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Drag hint for first-time users */}
          {totalSlides > 1 && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 3, duration: 1 }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-slate-400 pointer-events-none"
            >
              ← Drag to explore →
            </motion.div>
          )}
        </div>

        {/* Modal */}
        <AnimatePresence mode="wait">
          {uiStates.activeStudy && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() =>
                setUIStates((prev) => ({ ...prev, activeStudy: null }))
              }
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-white max-w-4xl w-full rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.05, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  onClick={() =>
                    setUIStates((prev) => ({ ...prev, activeStudy: null }))
                  }
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:text-slate-800 shadow-lg transition-colors duration-200"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>

                {/* Header */}
                <div
                  className={`relative h-48 sm:h-64 bg-gradient-to-br ${uiStates.activeStudy.color} flex items-center justify-center overflow-hidden`}
                >
                  <div className="text-white/10 text-6xl sm:text-9xl font-bold absolute select-none">
                    {uiStates.activeStudy.initial}
                  </div>
                  <div className="relative z-10 text-center text-white p-6 sm:p-8">
                    <motion.h2
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.25 }}
                      className="text-xl sm:text-3xl font-bold mb-2"
                    >
                      {uiStates.activeStudy.title}
                    </motion.h2>
                    <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.25 }}
                      className="text-white/80 text-sm sm:text-base"
                    >
                      {uiStates.activeStudy.industry}
                    </motion.p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8"
                  >
                    <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl">
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mx-auto mb-2" />
                      <div className="text-lg sm:text-2xl font-bold text-slate-800">
                        {uiStates.activeStudy.metrics.improvement}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600">
                        Improvement
                      </div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mx-auto mb-2" />
                      <div className="text-lg sm:text-2xl font-bold text-slate-800">
                        {uiStates.activeStudy.metrics.stores}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600">
                        Scale
                      </div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mx-auto mb-2" />
                      <div className="text-lg sm:text-2xl font-bold text-slate-800">
                        {uiStates.activeStudy.metrics.timeline}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600">
                        Timeline
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4">
                      Project Overview
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                      {uiStates.activeStudy.fullDetails}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${uiStates.activeStudy.color} text-white font-medium rounded-xl hover:shadow-lg transition-all duration-200 text-sm sm:text-base`}
                    >
                      View Full Case Study
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
              <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple hover:to-blue text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                Get Started Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
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
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Stay Connected
              </h4>
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
              <div>
                <p className="text-gray-300 text-sm mb-3">
                  Subscribe to our newsletter
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-purple-500 focus:outline-none text-sm"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2025 Jenisys. All rights reserved.
              </div>
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

export default HomepageCSR;

"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import "../app/global.css";
import { useSwipeable } from "react-swipeable";
import AOS from "aos";
import "aos/dist/aos.css";
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
} from "lucide-react";
import { ChevronRight } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  PanInfo,
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
      "The team at Jenisys went above and beyond to help us redesign our website. Their attention to detail was evident throughout. Our new site not only looks fantastic but also performs flawlessly, thanks to Jenisys’s outstanding work.",
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

const TestimonialCard = React.memo(({ testimonial, index, isVisible }) => {
  TestimonialCard.displayName = "TestimonialCard";
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
      style={{
        transitionDelay: `${index * 150}ms`,
        backfaceVisibility: "hidden",
        perspective: "1000px",
      }}
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
      <div className="flex gap-1 text-yellow-400 mt-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill="currentColor"
            className="drop-shadow-sm"
          />
        ))}
      </div>
    </div>
  );
});

const TABS = {
  SERVICES: "Services",
  INDUSTRIES: "Industries We Serve",
};

const HomepageCSR = () => {
  HomepageCSR.displayName = "HomepageCSR";
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [hoveredItem, setHoveredItem] = useState(null);
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [activeTab, setActiveTab] = useState(TABS.SERVICES);
  const [expandedService, setExpandedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [activeStudy, setActiveStudy] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );

  // Handle responsive cards with proper breakpoints
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setCardsToShow(1); // Mobile phones
      } else if (width < 768) {
        setCardsToShow(1); // Large mobile/small tablets
      } else if (width < 1024) {
        setCardsToShow(2); // Tablets
      } else if (width < 1280) {
        setCardsToShow(2); // Small laptops
      } else {
        setCardsToShow(3); // Desktop
      }
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, caseStudies.length - cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const totalSlides = maxIndex + 1;

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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    // Ensure services tab is selected by default
    setActiveTab("services");

    // Simulate AOS initialization - make all elements visible
    setTimeout(() => {
      const elements = document.querySelectorAll("[data-aos]");
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, index * 100);
      });
    }, 100);
  }, []);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width >= 1536) setSlidesToShow(3);
      else if (width >= 1024) setSlidesToShow(2);
      else setSlidesToShow(1);
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("testimonials-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev >= testimonials.length - slidesToShow ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, slidesToShow]);

  const visibleTestimonials = useMemo(() => {
    const start = currentSlide;
    const end = start + slidesToShow;
    return testimonials.slice(start, end);
  }, [currentSlide, slidesToShow]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const maxSlides = Math.max(0, testimonials.length - slidesToShow);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      return; // Prevent form submission if required fields are empty
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        handleShowAlert();
        setFormData({
          name: "",
          email: "",
          contactNo: "",
        });
      } else {
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
      { threshold: 0.1 } // Adjust threshold to suit the effect you want
    );

    const elements = document.querySelectorAll(".scroll-on-appear");
    elements.forEach((element) => observer.observe(element));

    return () => {
      if (elements && elements.length > 0) {
        elements.forEach((element) => observer.unobserve(element));
      }
    };
  }, []);

  useEffect(() => {
    // Smooth entrance animation
    setIsLoaded(true);

    // Mouse tracking for subtle parallax
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    const section = document.getElementById("hero-section");
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const missionItems = [
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
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
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
      // Replace Lightbulb from lucide-react with MdLightbulb from react-icons
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
  ];

  const services = [
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
      link: "/services/app-development",
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
        "At Jenisys, we specialize in developing custom software solutions tailored to meet the unique needs of your business. Our team of experienced developers utilizes the latest technologies to create software that aligns perfectly with your specific requirements. Whether you need a comprehensive enterprise solution, a bespoke web application, or a specialized mobile app, we have the expertise to deliver high-quality, scalable, and robust software.",
      link: "/services/cloud-solutions",
    },
    {
      icon: UserCog,
      title: "IT consulting",
      description:
        "We offer comprehensive IT consulting & digital transformation services to drive innovation & success in your business. Our experts work closely to craft a technology strategy aligned with your goals and provide tailored recommendations for growth & efficiency. We help you embrace digital transformation through process automation, digital tool implementation, and platform integration, ensuring your business remains competitive and efficient in the digital age.",
      link: "/services/cloud-solutions",
    },
    {
      icon: Wrench,
      title: "Maintenance & Support ",
      description:
        "Jenisys provides comprehensive maintenance, support, and cybersecurity services to ensure the smooth and secure operation of your software systems. Our maintenance and support services offer ongoing updates and technical support to keep your systems running efficiently. On the cybersecurity front, we conduct thorough security assessments, identify vulnerabilities, and implement robust security protocols to protect your systems and data.",
      link: "/services/cloud-solutions",
    },
  ];

  const industries = [
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
  ];

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

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goToSlide(currentSlide + 1),
    onSwipedRight: () => goToSlide(currentSlide - 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Enables dragging on desktop too
  });

  return (
    <div className="mt-[85px] flex-col relative overflow-x-hidden w-full">
      <section className="section white-section relative overflow-hidden bg-white">
        {/* Optional glow or blurred shape */}
        <div className="absolute w-[500px] h-[500px] bg-[#7526FE]/10 blur-[120px] rounded-full left-[60%] top-[20%] -z-10" />

        <div className="w-screen px-6 sm:px-8 md:px-[70px] lg:px-[100px] xl:px-[120px] 3xl:px-[150px] py-10 md:py-20 flex flex-col lg:flex-row justify-between items-center lg:h-screen gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Content */}
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
              preload="metadata" // Changed from "auto" to "metadata" for better performance
            >
              <source src="/Home Page Video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <div className="section white-section">
        <div
          ref={sectionRef}
          className="scroll-on-appear w-screen min-h-[650px] sm:min-h-[700px] md:min-h-[800px] lg:h-screen bg-black px-5 sm:px-8 md:px-12 lg:pl-[60px] lg:px-0 flex flex-col-reverse lg:flex-row text-white"
        >
          <div className="flex flex-col-reverse lg:flex-row w-full">
            {/* Vision Section */}
            <div
              className={`flex flex-col lg:w-1/2 mb-8 lg:mb-0 transform transition-all duration-700 ${
                isVisible
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
                {/* Subtle overlay on hover */}
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
                  {/* Subtle shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
            </div>

            {/* Mission Section */}
            <div
              className={`flex flex-col lg:w-1/2 font-['Montserrat'] pt-[20px] sm:pt-[25px] md:pt-[30px] lg:pt-[30px] order-first lg:order-none transform transition-all duration-700 delay-200 ${
                isVisible
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
                      hoveredItem === index ? "bg-white/5" : ""
                    } rounded-lg p-2 -m-2`}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      transform: isVisible
                        ? "translateX(0)"
                        : "translateX(-20px)",
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    <div
                      className={`bg-[#A3A3A3] rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[11px] w-[45px] h-[40px] sm:w-[55px] sm:h-[50px] md:w-[70px] md:h-[65px] lg:w-[89px] lg:h-[89px] mb-[8px] sm:mb-[10px] md:mb-[12px] lg:mb-0 mt-[15px] sm:mt-[20px] md:mt-[25px] lg:mt-[30px] flex justify-center items-center transition-all duration-300 group-hover:bg-[#b8b8b8] group-hover:scale-105 ${
                        hoveredItem === index ? "shadow-lg shadow-white/10" : ""
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

                    {/* Subtle indicator */}
                    <div
                      className={`ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        hoveredItem === index ? "opacity-100" : ""
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

        <style jsx>{`
          .group:hover .group-hover\\:w-full {
            width: 100%;
          }
        `}</style>
      </div>
      <section className="w-full px-4 sm:px-8 py-12 space-y-10">
        {/* Coffee Banner */}
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
      <div className="bg-white w-full py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
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

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value) => (
              <div
                key={value.id}
                className={`group relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg transition-all duration-700 ease-out transform hover:-translate-y-3 hover:shadow-2xl cursor-pointer border border-gray-100 ${
                  hoveredValue === value.id ? "scale-[1.02]" : ""
                }`}
                onMouseEnter={() => setHoveredValue(value.id)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                {/* Gradient Background Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-all duration-700 ease-out`}
                ></div>

                {/* Icon Container */}
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} text-white mb-6 transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-3`}
                >
                  <div className="transition-all duration-700 ease-out">
                    {value.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-4 font-['Montserrat'] transition-all duration-700 ease-out group-hover:text-gray-800">
                  {value.title}
                </h3>

                <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed font-['Montserrat'] transition-all duration-700 ease-out group-hover:text-gray-700">
                  {value.description}
                </p>

                {/* Hover Effect Line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${
                    value.color
                  } rounded-b-2xl transition-all duration-700 ease-out ${
                    hoveredValue === value.id ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            ))}
          </div>

          {/* Bottom Decorative Elements */}
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

      <section className="relative w-full min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
        {/* Background Image - Only until tabs */}
        <div className="absolute top-0 left-0 w-full h-80 sm:h-96">
          <Image
            src="/img/Services.png"
            alt="Services Background"
            layout="fill"
            objectFit="cover"
            style={{ filter: "brightness(1.2) contrast(0.8)" }}
          />
          <div className="absolute inset-0 " />
        </div>

        {/* Dynamic Background for Tab Content Area */}
        <div
          className={`absolute top-80 sm:top-96 left-0 w-full bottom-0 transition-all duration-700 ${
            activeTab === "industries"
              ? "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
              : "bg-gradient-to-br from-white via-gray-50 to-slate-50"
          }`}
        />

        <div className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Montserrat'] text-white mb-4">
              What We Do
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-['Montserrat']">
              Explore the services we offer and the industries we empower with
              cutting-edge technology solutions.
            </p>
          </div>

          {/* Professional Tabs */}
          <div
            className="flex justify-center mb-12 sm:mb-16"
            data-aos="fade-up"
          >
            <div className="inline-flex rounded-xl bg-white border border-gray-200 p-1 shadow-lg">
              <button
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeTab === "services"
                    ? "bg-gray-900 text-white shadow-md transform scale-[1.02]"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("services")}
              >
                Services Offered
              </button>
              <button
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeTab === "industries"
                    ? "bg-gray-900 text-white shadow-md transform scale-[1.02]"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("industries")}
              >
                Industries We Serve
              </button>
            </div>
          </div>

          {/* Tab Content with Smooth Transitions */}
          <div className="relative min-h-96">
            {/* Services Content */}
            <div
              className={`transition-all duration-700 ease-in-out ${
                activeTab === "services"
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group relative p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 min-h-[200px] flex flex-col"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                    onClick={() => {
                      console.log(
                        "Card clicked, current expanded:",
                        expandedService,
                        "clicked index:",
                        index
                      );
                      setExpandedService(
                        expandedService === index ? null : index
                      );
                    }}
                  >
                    <div className="text-center flex-grow">
                      <AnimatedIcon
                        Icon={service.icon}
                        isHovered={hoveredService === index}
                      />

                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-['Montserrat'] flex items-center justify-center gap-2">
                        {service.title}
                        <ChevronDown
                          size={20}
                          className={`transition-all duration-300 ${
                            expandedService === index
                              ? "rotate-180 text-gray-900"
                              : "text-gray-400 group-hover:text-gray-600"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log("Chevron clicked for index:", index);
                            setExpandedService(
                              expandedService === index ? null : index
                            );
                          }}
                        />
                      </h3>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        expandedService === index
                          ? "max-h-screen opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pt-2 text-left border-t border-gray-100 mt-4">
                        <p className="text-gray-600 text-sm sm:text-base font-['Montserrat'] mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="text-center">
                          <button
                            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-900 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 hover:shadow-lg text-sm sm:text-base"
                            onClick={(e) => {
                              e.stopPropagation();
                              console.log("Navigate to:", service.link);
                            }}
                          >
                            Learn More
                            <ExternalLink size={16} />
                          </button>
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
                activeTab === "industries"
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="group relative p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
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
              gridTemplateColumns: `repeat(${slidesToShow}, 1fr)`,
              transform: "translateZ(0)", // Force hardware acceleration
            }}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${currentSlide}-${index}`}
                testimonial={testimonial}
                index={index}
                isVisible={isVisible}
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
                  currentSlide === index
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
                Don’t like coffee? Let’s schedule a free call over a beer
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
          {/* Navigation and Indicators - Only show if there are multiple slides */}
          {totalSlides > 1 && (
            <div className="flex justify-between items-center mb-6 sm:mb-8 px-2">
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                    currentIndex === 0
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
                  disabled={currentIndex >= maxIndex}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                    currentIndex >= maxIndex
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
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? "bg-blue-600 w-6 sm:w-8"
                        : "bg-slate-300 hover:bg-slate-400 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Cards Container - Fixed the width calculation issue */}
          <div className="relative overflow-visible pb-8">
            <motion.div
              animate={{
                x: `-${(currentIndex / cardsToShow) * 100}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
                mass: 0.8,
              }}
              className="flex"
            >
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className="flex-shrink-0 px-2 sm:px-3 lg:px-4 py-2"
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                      y: -12,
                      scale: 1.03,
                      rotateX: 2,
                      rotateY: 1,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    onHoverStart={() => setHoveredCard(study.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="group relative cursor-pointer h-full transform-gpu"
                    onClick={() => setActiveStudy(study)}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Glow effect */}
                    <motion.div
                      className={`absolute -inset-1 sm:-inset-2 bg-gradient-to-r ${study.color} rounded-2xl sm:rounded-3xl blur-lg opacity-0 transition-opacity duration-500`}
                      animate={{
                        opacity: hoveredCard === study.id ? 0.15 : 0,
                        scale: hoveredCard === study.id ? 1.05 : 1,
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
                            rotate: hoveredCard === study.id ? 360 : 0,
                            scale: hoveredCard === study.id ? 1.1 : 1,
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
                          whileHover={{ scale: 1.05 }}
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
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-xs sm:text-sm">Learn More</span>
                          <motion.div
                            animate={{ x: hoveredCard === study.id ? 4 : 0 }}
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
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? "bg-blue-600 w-6"
                        : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal */}
        <AnimatePresence mode="wait">
          {activeStudy && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setActiveStudy(null)}
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
                  onClick={() => setActiveStudy(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:text-slate-800 shadow-lg transition-colors duration-200"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>

                {/* Header */}
                <div
                  className={`relative h-48 sm:h-64 bg-gradient-to-br ${activeStudy.color} flex items-center justify-center overflow-hidden`}
                >
                  <div className="text-white/10 text-6xl sm:text-9xl font-bold absolute select-none">
                    {activeStudy.initial}
                  </div>
                  <div className="relative z-10 text-center text-white p-6 sm:p-8">
                    <motion.h2
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.25 }}
                      className="text-xl sm:text-3xl font-bold mb-2"
                    >
                      {activeStudy.title}
                    </motion.h2>
                    <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.25 }}
                      className="text-white/80 text-sm sm:text-base"
                    >
                      {activeStudy.industry}
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
                        {activeStudy.metrics.improvement}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600">
                        Improvement
                      </div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mx-auto mb-2" />
                      <div className="text-lg sm:text-2xl font-bold text-slate-800">
                        {activeStudy.metrics.stores}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600">
                        Scale
                      </div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mx-auto mb-2" />
                      <div className="text-lg sm:text-2xl font-bold text-slate-800">
                        {activeStudy.metrics.timeline}
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
                      {activeStudy.fullDetails}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${activeStudy.color} text-white font-medium rounded-xl hover:shadow-lg transition-all duration-200 text-sm sm:text-base`}
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
              <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
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

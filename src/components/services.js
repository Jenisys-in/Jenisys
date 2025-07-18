"use client";
import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Head from "next/head";
import "../app/global.css";

// Lazy load Lottie component for better performance
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// SEO-optimized service data with structured markup
const servicesData = [
  {
    id: 1,
    title: "Custom Software Development",
    description: "At Jenisys, we specialize in developing custom software solutions tailored to meet the unique needs of your business. Our team of experienced developers utilizes the latest technologies to create software that aligns perfectly with your specific requirements. Whether you need a comprehensive enterprise solution, a bespoke web application, or a specialized mobile app, we have the expertise to deliver high-quality, scalable, and robust software.",
    icon: "/img/laptop.png",
    alt: "Custom Software Development Services - Enterprise Solutions",
    keywords: ["custom software development", "enterprise software", "bespoke applications", "software solutions"],
    slug: "custom-software-development"
  },
  {
    id: 2,
    title: "Web & Mobile App Development",
    description: "At Jenisys, we provide comprehensive web and mobile app development services designed to help your business establish a robust digital presence. Our team creates responsive, SEO-friendly websites and intuitive mobile applications, ensuring a seamless and engaging user experience across all devices. We focus on building solutions that are visually appealing, highly functional, and easy to navigate, enhancing user experience.",
    icon: "/img/laptop.png",
    alt: "Web & Mobile App Development - Responsive Design & SEO",
    keywords: ["web development", "mobile app development", "responsive design", "SEO-friendly websites"],
    slug: "web-mobile-app-development"
  },
  {
    id: 3,
    title: "IT Consulting & Digital Transformation",
    description: "We offer comprehensive IT consulting & digital transformation services to drive innovation & success in your business. Our experts work closely to craft a technology strategy aligned with your goals and provide tailored recommendations for growth & efficiency. We help you embrace digital transformation through process automation, digital tool implementation, and platform integration, ensuring your business remains competitive and efficient in the digital age.",
    icon: "/img/laptop.png",
    alt: "IT Consulting & Digital Transformation Services - Strategy & Innovation",
    keywords: ["IT consulting", "digital transformation", "technology strategy", "business automation"],
    slug: "it-consulting-digital-transformation"
  },
  {
    id: 4,
    title: "Maintenance, Support & Cybersecurity",
    description: "Jenisys provides comprehensive maintenance, support, and cybersecurity services to ensure the smooth and secure operation of your software systems. Our maintenance and support services offer ongoing updates and technical support to keep your systems running efficiently. On the cybersecurity front, we conduct thorough security assessments, identify vulnerabilities, and implement robust security protocols to protect your systems and data.",
    icon: "/img/laptop.png",
    alt: "IT Maintenance, Support & Cybersecurity Services - Security Solutions",
    keywords: ["IT maintenance", "cybersecurity", "technical support", "security assessments"],
    slug: "maintenance-support-cybersecurity"
  },
  {
    id: 5,
    title: "DevOps Services",
    description: "Streamline your development & operations with our DevOps services. We implement continuous integration and continuous deployment (CI/CD) pipelines to automate and accelerate your software development process. Our team uses infrastructure as code (IaC) to ensure consistency and scalability in your IT infrastructure. By integrating development and operations, we help you achieve faster delivery times & improved quality. Trust Jenisys to help you environment that supports your business goals.",
    icon: "/img/laptop.png",
    alt: "DevOps Services - CI/CD, Infrastructure as Code, Automation",
    keywords: ["DevOps", "CI/CD", "infrastructure as code", "automation"],
    slug: "devops-services"
  },
  {
    id: 6,
    title: "Data Analytics & Business Intelligence",
    description: "We help you gather, analyze, and interpret data to gain valuable insights and make informed decisions. Our team develops customized data solutions that provide you with real-time reporting and analytics, enabling you to stay ahead of the competition. Whether you need data visualization, predictive analytics, or business intelligence tools, we have the expertise to deliver solutions that drive growth and efficiency. Let us help you turn your data into a strategic asset.",
    icon: "/img/laptop.png",
    alt: "Data Analytics & Business Intelligence Services - Insights & Reporting",
    keywords: ["data analytics", "business intelligence", "data visualization", "predictive analytics"],
    slug: "data-analytics-business-intelligence"
  },
  {
    id: 7,
    title: "Branding & Digital Marketing",
    description: "Build a strong brand and reach your target audience with our branding and digital marketing services. We offer branding strategies that include logo design, color schemes, and messaging to create a consistent and memorable brand identity. Our digital marketing services include SEO, PPC, and social media marketing to increase your online visibility and drive traffic to your website. Our team is here to help you achieve your marketing goals.",
    icon: "/img/laptop.png",
    alt: "Branding & Digital Marketing Services - SEO, PPC, Social Media",
    keywords: ["branding", "digital marketing", "SEO services", "PPC advertising"],
    slug: "branding-digital-marketing"
  },
  {
    id: 8,
    title: "Emerging Technologies",
    description: "We stay ahead of technological trends and offer solutions that incorporate AI, machine learning, blockchain, IoT, and more. Our team of experts helps you explore and implement these advanced technologies to drive innovation and gain a competitive edge. Whether you need AI-powered analytics, blockchain solutions, or IoT integration, we have the expertise to deliver cutting edge solutions that transform your business.",
    icon: "/img/laptop.png",
    alt: "Emerging Technologies - AI, Machine Learning, Blockchain, IoT",
    keywords: ["AI", "machine learning", "blockchain", "IoT", "emerging technologies"],
    slug: "emerging-technologies"
  },
  {
    id: 9,
    title: "Customer-Centric Solutions",
    description: "At Jenisys, we prioritize customer satisfaction by developing solutions that focus on user experience and customer feedback. We work closely with you to understand your customers' needs and preferences, ensuring that our solutions meet their expectations and enhance their experience. By gathering and acting on customer feedback, we continuously improve our services and deliver solutions that drive customer loyalty and satisfaction.",
    icon: "/img/laptop.png",
    alt: "Customer-Centric Solutions - User Experience & Satisfaction",
    keywords: ["customer-centric", "user experience", "customer satisfaction", "UX design"],
    slug: "customer-centric-solutions"
  }
];

// Social media links data with SEO attributes
const socialLinks = [
  {
    href: "https://www.instagram.com/jenisys.in/",
    icon: "/img/mdi_instagram.png",
    alt: "Follow Jenisys on Instagram - Latest Updates & Tech Insights",
    platform: "Instagram"
  },
  {
    href: "https://www.linkedin.com/company/jenisys",
    icon: "/img/linkedIn.png",
    alt: "Connect with Jenisys on LinkedIn - Professional Network",
    platform: "LinkedIn"
  },
  {
    href: "https://www.facebook.com",
    icon: "/img/facebook.png",
    alt: "Like Jenisys on Facebook - Community & Updates",
    platform: "Facebook"
  }
];

// Generate structured data for services
const generateStructuredData = () => {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jenisys",
    "description": "Leading tech solutions provider crafting top-tier software and digital solutions for businesses of all sizes",
    "url": "https://jenisys.com",
    "logo": "https://jenisys.com/img/logo.png",
    "sameAs": [
      "https://www.instagram.com/jenisys.in/",
      "https://www.linkedin.com/company/jenisys",
      "https://www.facebook.com/jenisys"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    }
  };

  const services = servicesData.map(service => ({
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Jenisys"
    },
    "serviceType": service.title,
    "areaServed": "Worldwide"
  }));

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Jenisys Services - Custom Software Development & IT Solutions",
    "description": "Comprehensive technology services including custom software development, web & mobile apps, IT consulting, cybersecurity, DevOps, and digital transformation solutions.",
    "provider": organization,
    "mainEntity": services
  };
};

// SEO-optimized Service Card Component
const ServiceCard = ({ service, animationData, index }) => {
  const isLastCard = index === servicesData.length - 1;
  
  return (
    <article 
      className={`scroll-on-appear drop-shadow-2xl shadow-[3px_3px_16px_rgba(0,0,0,0.25)] relative rounded-[5px] mt-[40px] md:mt-[100px] w-[140px] md:w-[353px] md:h-[525px] h-[200px] justify-center bg-white border-[0.4px] ${isLastCard ? 'mx-[50%] md:mx-0' : ''}`}
      itemScope
      itemType="https://schema.org/Service"
      aria-labelledby={`service-${service.id}-title`}
    >
      {/* Lottie Animation */}
      {animationData && (
        <Lottie
          className="absolute w-[100px] md:w-[340px] bottom-[150px] right-[20px] md:bottom-[360px] md:right-[20px]"
          animationData={animationData}
          loop={false}
          autoplay={true}
          aria-hidden="true"
        />
      )}

      {/* Purple Circle Background */}
      <div className="bg-[#8847FA] absolute h-[34px] w-[34px] md:h-[114px] md:w-[114px] rounded-full bottom-[182px] md:bottom-[472px] right-[53px] md:right-[133px] z-10" aria-hidden="true" />

      {/* Service Icon */}
      <div className="absolute bottom-[190px] right-[60px] md:bottom-[495px] md:right-[159px] z-20">
        <Image
          src={service.icon}
          alt={service.alt}
          width={64}
          height={64}
          className="w-[19px] h-[18px] md:w-[64px] md:h-[64px]"
          priority={index < 3}
          loading={index < 3 ? "eager" : "lazy"}
        />
      </div>

      {/* Service Title */}
      <h3 
        id={`service-${service.id}-title`}
        className="pt-[25px] md:pt-[100px] text-[10px] text-center font-semibold font-['Montserrat'] leading-tight md:text-[24px]"
        itemProp="name"
      >
        {service.title}
      </h3>

      {/* Service Description */}
      <p 
        className="text-center font-['Montserrat'] text-[6px] px-[10px] md:px-[20px] md:mb-[10px] md:text-[15px]"
        itemProp="description"
      >
        {service.description}
      </p>

      {/* Hidden structured data */}
      <meta itemProp="provider" content="Jenisys" />
      <meta itemProp="serviceType" content={service.title} />
      <meta itemProp="areaServed" content="Worldwide" />

      {/* CTA Button */}
      <button 
        className={`rounded-[1px] w-[55px] md:w-[147px] md:h-[49px] md:rounded-[4px] text-[8px] h-[15px] mx-[40px] md:mx-[100px] bg-[#8847FA] text-white font-['Montserrat'] font-semibold md:text-[20px] hover:bg-[#7038E0] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#8847FA] focus:ring-opacity-50 ${service.title === 'Emerging Technologies' ? 'md:mt-[50px]' : ''}`}
        type="button"
        aria-label={`Get started with ${service.title} services from Jenisys`}
        onClick={() => {
          // Track conversion for SEO analytics
          if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
              event_category: 'Services',
              event_label: service.title,
              value: 1
            });
          }
        }}
      >
        Get Started
      </button>
    </article>
  );
};

const Services = () => {
  const observerRef = useRef(null);
  const animationDataRef = useRef(null);

  // Memoized intersection observer callback
  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, []);

  useEffect(() => {
    // Lazy load animation data
    const loadAnimationData = async () => {
      try {
        const animationData = await import("./AnimationLottie.json");
        animationDataRef.current = animationData.default || animationData;
      } catch (error) {
        console.error("Failed to load animation data:", error);
      }
    };

    loadAnimationData();

    // Initialize intersection observer
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    const elements = document.querySelectorAll(".scroll-on-appear");
    elements.forEach((element) => observerRef.current.observe(element));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection]);

  return (
    <>
      {/* SEO Head Tags */}
      <Head>
        <title>Jenisys Services - Custom Software Development & IT Solutions | Expert Technology Services</title>
        <meta 
          name="description" 
          content="Comprehensive technology services including custom software development, web & mobile apps, IT consulting, cybersecurity, DevOps, and digital transformation solutions. Transform your business with Jenisys." 
        />
        <meta 
          name="keywords" 
          content="custom software development, web development, mobile app development, IT consulting, cybersecurity, DevOps, digital transformation, data analytics, branding, emerging technologies" 
        />
        <meta name="author" content="Jenisys" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Jenisys Services - Custom Software Development & IT Solutions" />
        <meta property="og:description" content="Transform your business with our comprehensive technology services including custom software development, web & mobile apps, IT consulting, and cybersecurity solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jenisys.com/services" />
        <meta property="og:image" content="https://jenisys.com/img/services-og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Jenisys" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jenisys Services - Custom Software Development & IT Solutions" />
        <meta name="twitter:description" content="Transform your business with our comprehensive technology services including custom software development, web & mobile apps, IT consulting, and cybersecurity solutions." />
        <meta name="twitter:image" content="https://jenisys.com/img/services-twitter-image.jpg" />
        <meta name="twitter:site" content="@jenisys" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://jenisys.com/services" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData())
          }}
        />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/img/laptop.png" as="image" />
        <link rel="preload" href="/Our Services Video.mp4" as="video" type="video/mp4" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.instagram.com" />
        <link rel="dns-prefetch" href="//www.linkedin.com" />
        <link rel="dns-prefetch" href="//www.facebook.com" />
      </Head>

      <main className="mt-[85px] w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="scroll-on-appear w-full" aria-labelledby="services-heading">
          <header>
            <h1 
              id="services-heading"
              className="font-['Montserrat'] font-bold text-[21px] text-center md:text-[48px]"
            >
              Professional Technology Services
            </h1>
            <p className="mt-[20px] font-['Montserrat'] font-semibold text-[9px] md:text-[18px] md:px-[170px] md:tracking-wider text-center px-[50px]">
              Jenisys is a leading tech solutions provider that crafts top-tier
              software and digital solutions for businesses of all sizes. Our
              unparalleled expertise drives your success beyond limits. From
              consultation to development, we are your partner in transformative
              technology.
            </p>
          </header>
          
          {/* Hero Video */}
          <div className="w-full mt-[20px] overflow-hidden">
            <video
              className="w-full h-auto md:h-[403px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Jenisys technology services promotional video showcasing our expertise"
              poster="/img/video-poster.jpg"
            >
              <source src="/Our Services Video.mp4" type="video/mp4" />
              <track kind="captions" src="/captions/services-video.vtt" srcLang="en" label="English" />
              <p>Your browser does not support the video tag. <a href="/Our Services Video.mp4">Download the video</a> to learn about our services.</p>
            </video>
          </div>
        </section>

        {/* Services Grid */}
        <section 
          className="scroll-on-appear grid grid-cols-2 max-pm:mx-[40px] pm:mx-[60px] md:mx-0 md:ml-[80px] md:grid-cols-3 3xl:mx-[150px] mb-[50px]"
          aria-labelledby="services-grid-heading"
        >
          <h2 id="services-grid-heading" className="sr-only">Complete Range of Technology Services</h2>
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              animationData={animationDataRef.current}
              index={index}
            />
          ))}
        </section>
        
        {/* Social Media Footer */}
        <footer className="w-screen bg-black md:h-[190px] h-[80px] justify-center items-center">
          <h2 className="font-['Montserrat'] font-semibold md:text-[26px] text-center text-white md:pt-[30px] pt-[10px] 3xl:text-[32px]">
            Connect With Jenisys
          </h2>
          <nav aria-label="Social media links">
            <div className="flex flex-row justify-center items-center md:gap-8 md:mt-[20px] mt-[10px] gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#A3A3A3] md:h-[50px] md:w-[50px] w-[16px] h-[16px] rounded-full flex justify-center items-center hover:bg-[#8847FA] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  aria-label={social.alt}
                >
                  <Image
                    src={social.icon}
                    alt={`${social.platform} icon`}
                    width={34}
                    height={34}
                    className="md:h-[34px] md:w-[34px] w-[12px] h-[12px]"
                    loading="lazy"
                  />
                </Link>
              ))}
            </div>
          </nav>
        </footer>
      </main>
    </>
  );
};

export default Services;
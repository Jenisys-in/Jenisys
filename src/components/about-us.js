"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import "../app/global.css";


const AboutUs = () => {
  const observerRef = useRef(null);

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
    // Create intersection observer with optimized options
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px", // Trigger slightly before element is fully visible
    });

    const elements = document.querySelectorAll(".scroll-on-appear");
    elements.forEach((element) => observerRef.current.observe(element));

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection]);

  // Core values data for better maintainability
  const coreValues = [
    {
      title: "Customer Centric Approach",
      description: "We put your business needs first, always. Our team is dedicated to providing personalized solutions that are tailored to your unique goals and challenges. Your success is our top priority."
    },
    {
      title: "Unmatched Expertise",
      description: "Our team comprises of industry experts who have years of experience in software development and digital solutions. Our expertise spans across various industries, providing you with the best solutions for your business needs."
    },
    {
      title: "Continuous Innovation",
      description: "We believe in continuous innovation, pushing boundaries, and challenging the status quo. With cutting-edge technology, we deliver transformative solutions that give you a competitive edge."
    },
    {
      title: "Value Driven Services",
      description: "Value-driven services prioritize delivering exceptional quality and impactful results, ensuring clients receive significant benefits that enhance their business outcomes. It's about maximizing value rather than just minimizing costs."
    }
  ];

  // Social media links data
  const socialLinks = [
    {
      href: "https://www.instagram.com/jenisys.in/",
      icon: "/img/mdi_instagram.png",
      alt: "Instagram"
    },
    {
      href: "https://www.linkedin.com/company/jenisys",
      icon: "/img/linkedIn.png",
      alt: "LinkedIn"
    },
    {
      href: "https://www.facebook.com",
      icon: "/img/facebook.png",
      alt: "Facebook"
    }
  ];

  return (
    <div className="mt-[85px] relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="scroll-on-appear flex flex-col justify-center items-center text-center px-[51px] sm:px-[80px] md:px-[140px] lg:px-[220px]">
        <h1 className="text-black font-['Montserrat'] text-[21px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold">
          About Us
        </h1>
        <p className="text-black font-['Montserrat'] text-[9px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-semibold 3xl:text-[24px] mt-4">
          Welcome to Jenisys, the ultimate tech incubator. We offer unmatched
          expertise in crafting top-tier software and digital solutions that
          help businesses thrive. From consultation to development, we help you
          achieve your goals with excellence and precision.
        </p>
      </section>

      {/* Video Section */}
      <section className="scroll-on-appear mt-[30px] relative">
        <div className="w-full mt-[20px] overflow-hidden">
          <video
            className="w-full h-auto sm:h-[300px] md:h-[350px] lg:h-[403px] object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata" // Changed from "auto" to "metadata" for better performance
            aria-label="About Jenisys company video"
          >
            <source src="/About Us.mp4" type="video/mp4" />
            <p>Your browser does not support the video tag.</p>
          </video>
        </div>

        <div className="bg-black">
          <p className="font-['Montserrat'] text-[10px] sm:text-[16px] md:text-[20px] lg:text-[26px] font-medium text-white text-center pt-[20px] pb-[20px] sm:pt-[40px] sm:pb-[40px] md:pt-[50px] md:pb-[50px] lg:pt-[70px] lg:pb-[70px] px-[51px] sm:px-[60px] md:px-[70px]">
            At Jenisys, we are the architects of innovation, dedicated to
            delivering top-tier software and digital solutions that empower
            businesses to excel. Our commitment to quality and excellence drives
            every project, from consultation to development, ensuring that our
            clients achieve success beyond their expectations. With a focus on
            cutting-edge technology and a deep understanding of industry needs,
            Jenisys is where your business's potential meets our expertise, paving
            the way for a future of limitless possibilities.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="scroll-on-appear flex-col px-[52px] sm:px-[60px] md:px-[60px] mb-[50px] sm:mb-[70px] md:mb-[80px] lg:mb-[100px]">
        <div className="relative">
          <Image
            src="/img/aboutus2.png"
            alt="Jenisys team working on innovative solutions"
            width={800}
            height={867}
            className="hidden xl:block xl:w-[600px] xl:h-[750px] xl:float-right 3xl:mr-[100px] 3xl:h-[867px] 3xl:w-[800px] object-cover"
            priority={false} // Not above the fold
            sizes="(max-width: 1200px) 600px, 800px"
          />
        </div>

        <div className="w-full xl:max-w-[650px]">
          <h2 className="font-['Montserrat'] font-bold text-[12px] sm:text-[20px] md:text-[26px] lg:text-[32px] mt-[20px] 3xl:text-[40px]">
            Our Core Values
          </h2>
          <h3 className="font-['Montserrat'] font-semibold text-[16px] sm:text-[28px] md:text-[35px] lg:text-[43px] 3xl:text-[50px] mt-[10px]">
            Innovating Beyond Limits
          </h3>

          {/* Core Values List */}
          <div className="mt-[30px] space-y-[30px]">
            {coreValues.map((value, index) => (
              <div key={index}>
                <h4 className="font-['Montserrat'] text-white font-semibold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] bg-[#4323D0] w-[208px] sm:w-[320px] md:w-[450px] lg:w-[560px] 3xl:w-[650px] 3xl:text-[20px] text-center py-[10px]">
                  {value.title}
                </h4>
                <p className="font-['Montserrat'] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-medium mt-[5px] sm:mt-[10px] md:mt-[12px] lg:mt-[15px] w-full sm:w-[320px] md:w-[450px] lg:w-[560px] leading-tight 3xl:text-[18px] 3xl:w-[650px]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Footer */}
      <footer className="w-screen bg-black h-[80px] sm:h-[120px] md:h-[150px] lg:h-[190px] flex flex-col justify-center items-center">
        <h2 className="font-['Montserrat'] font-semibold text-[12px] sm:text-[18px] md:text-[22px] lg:text-[26px] text-center text-white pt-[10px] sm:pt-[15px] md:pt-[25px] lg:pt-[30px] 3xl:text-[32px]">
          Follow Us On
        </h2>
        <div className="flex flex-row justify-center items-center gap-4 sm:gap-6 md:gap-7 lg:gap-8 mt-[10px] sm:mt-[15px] md:mt-[18px] lg:mt-[20px]">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#A3A3A3] w-[16px] h-[16px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center hover:bg-[#8A8A8A] transition-colors duration-200"
              aria-label={`Follow us on ${link.alt}`}
            >
              <Image
                src={link.icon}
                alt={link.alt}
                width={34}
                height={34}
                className="w-[12px] h-[12px] sm:w-[20px] sm:h-[20px] md:w-[28px] md:h-[28px] lg:w-[34px] lg:h-[34px]"
              />
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
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
      <section className="scroll-on-appear flex flex-col justify-center items-center text-center px-[51px] md:px-[220px]">
        <h1 className="text-black font-['Montserrat'] text-[21px] md:text-[48px] font-bold">
          About Us
        </h1>
        <p className="text-black font-['Montserrat'] md:text-[18px] text-[9px] font-semibold 3xl:text-[24px] mt-4">
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
            className="w-full h-auto md:h-[403px] object-cover"
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
          <p className="font-['Montserrat'] md:text-[26px] font-medium text-[10px] text-white md:pb-[70px] text-center pt-[20px] pb-[20px] md:pt-[70px] md:mt-[0px] px-[51px] md:px-[70px]">
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
      <section className="scroll-on-appear flex-col px-[52px] md:px-[60px] mb-[50px] md:mb-[100px]">
        <div className="relative">
          <Image
            src="/img/aboutus2.png"
            alt="Jenisys team working on innovative solutions"
            width={800}
            height={867}
            className="mt-[20px] md:mt-0 h-[250px] w-full md:w-[600px] md:h-[750px] md:float-right 3xl:mr-[100px] 3xl:h-[867px] 3xl:w-[800px] object-cover"
            priority={false} // Not above the fold
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 600px, 800px"
          />
        </div>

        <div className="md:max-w-[650px]">
          <h2 className="font-['Montserrat'] font-bold text-[12px] md:text-[32px] mt-[20px] 3xl:text-[40px]">
            Our Core Values
          </h2>
          <h3 className="font-['Montserrat'] font-semibold text-[16px] mt-[10px] md:text-[43px] 3xl:text-[50px]">
            Innovating Beyond Limits
          </h3>

          {/* Core Values List */}
          <div className="mt-[30px] space-y-[30px]">
            {coreValues.map((value, index) => (
              <div key={index}>
                <h4 className="font-['Montserrat'] text-white font-semibold text-[12px] bg-[#4323D0] w-[208px] md:text-[18px] text-center py-[10px] md:w-[560px] 3xl:w-[650px] 3xl:text-[20px]">
                  {value.title}
                </h4>
                <p className="font-['Montserrat'] text-[10px] md:text-[16px] font-medium mt-[5px] md:mt-[15px] md:w-[560px] leading-tight 3xl:text-[18px] 3xl:w-[650px]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Footer */}
      <footer className="w-screen bg-black md:h-[190px] h-[80px] flex flex-col justify-center items-center">
        <h2 className="font-['Montserrat'] font-semibold md:text-[26px] text-center text-white md:pt-[30px] pt-[10px] 3xl:text-[32px]">
          Follow Us On
        </h2>
        <div className="flex flex-row justify-center items-center md:gap-8 md:mt-[20px] mt-[10px] gap-4">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#A3A3A3] md:h-[50px] md:w-[50px] w-[16px] h-[16px] rounded-full flex justify-center items-center hover:bg-[#8A8A8A] transition-colors duration-200"
              aria-label={`Follow us on ${link.alt}`}
            >
              <Image
                src={link.icon}
                alt={link.alt}
                width={34}
                height={34}
                className="md:h-[34px] md:w-[34px] w-[12px] h-[12px]"
              />
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
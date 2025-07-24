"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import "../app/global.css";
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react';


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

     <footer className=" bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/img/Jenisys Hero.png" 
                alt="Jenisys" 
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <h3 className="text-xl font-bold text-white mb-3">
                Advancing Excellence Beyond Cost
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Delivering innovative solutions that drive business growth and operational excellence through cutting-edge technology and strategic consulting.
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
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Services', href: '#services' },
                { name: 'About Us', href: '#about' },
                { name: 'Blog', href: '#blog' },
                { name: 'Careers', href: '#careers' },
                { name: 'Case Studies', href: '#case-studies' }
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
            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    123 Business District<br />
                    Tech Park, Suite 400<br />
                    Bangalore, Karnataka 560001<br />
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
            <h4 className="text-white font-semibold text-lg mb-6">Stay Connected</h4>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 mb-6">
              {[
                { 
                  name: 'Instagram', 
                  href: 'https://www.instagram.com/jenisys.in/',
                  icon: '/img/mdi_instagram.png'
                },
                { 
                  name: 'LinkedIn', 
                  href: 'https://www.linkedin.com/company/jenisys',
                  icon: '/img/linkedIn.png'
                },
                { 
                  name: 'Facebook', 
                  href: 'https://www.facebook.com',
                  icon: '/img/facebook.png'
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-700 hover:bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <img 
                    src={social.icon} 
                    alt={social.name}
                    className="w-6 h-6 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
                  />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div>
              <p className="text-gray-300 text-sm mb-3">Subscribe to our newsletter</p>
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
              {[
                { name: 'Privacy Policy', href: '/Privacy-Policy' },
                
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default AboutUs;
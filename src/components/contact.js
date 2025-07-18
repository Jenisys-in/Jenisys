"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import "../app/global.css";

// Constants moved outside component to prevent recreation
const FORM_INITIAL_STATE = {
  firstname: '',
  lastname: '',
  email: '',
  contactNo: '',
  msg: '',
  personalData: false,
  marketting: false,
};

const CONTACT_INFO = [
  {
    icon: "/img/cont_phone.png",
    title: "Talk to our Team",
    content: "+91 8240 384 648",
    alt: "Phone Icon"
  },
  {
    icon: "/img/cont_mail.png",
    title: "Email Us",
    content: "contact@jenisys.in",
    alt: "Mail Icon"
  },
  {
    icon: "/img/cont_clock.png",
    title: "Operating Hours",
    content: "8am to 5pm",
    alt: "Clock Icon"
  }
];

const LOCATIONS = [
  {
    name: "Atlanta, USA",
    position: { top: '40%', left: '25%' }
  },
  {
    name: "Kolkata, India",
    position: { top: '48%', left: '68%' }
  }
];

const SOCIAL_LINKS = [
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

// Memoized components for better performance
const ContactInfoCard = React.memo(({ icon, title, content, alt }) => (
  <div className="flex flex-col items-center px-4">
    <div className="bg-white p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
      <Image
        src={icon}
        alt={alt}
        width={40}
        height={40}
        className="w-8 h-8 sm:w-10 sm:h-10"
      />
    </div>
    <h2 className="text-lg sm:text-xl font-semibold text-center">{title}</h2>
    <p className="mt-2 text-sm sm:text-base text-gray-200 text-center">{content}</p>
  </div>
));

const LocationPin = React.memo(({ name, position }) => (
  <div
    className="absolute"
    style={{ 
      top: position.top, 
      left: position.left, 
      transform: 'translate(-50%, -50%)' 
    }}
  >
    <p className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-black mb-1 text-center whitespace-nowrap">
      {name}
    </p>
    <Image
      src="/img/loca.png"
      alt={name}
      width={20}
      height={20}
      className="w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mx-auto"
    />
  </div>
));

const SocialLink = React.memo(({ href, icon, alt }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <div className="bg-[#A3A3A3] w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-[50px] md:h-[50px] rounded-full flex justify-center items-center hover:bg-gray-300 transition-colors">
      <Image
        src={icon}
        alt={alt}
        width={34}
        height={34}
        className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-[34px] md:h-[34px]"
      />
    </div>
  </Link>
));

const AlertMessage = React.memo(({ onClose }) => (
  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white text-black p-4 sm:p-6 rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md">
    <div className="text-center">
      <p className="text-sm sm:text-base md:text-lg font-semibold mb-4">
        Thanks! You'll hear from us soon!
      </p>
      <button 
        onClick={onClose}
        className="bg-[#361CA9] text-white px-4 py-2 sm:px-6 sm:py-2 rounded text-sm sm:text-base hover:bg-[#2d1587] transition-colors"
      >
        Close
      </button>
    </div>
  </div>
));

function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState(FORM_INITIAL_STATE);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Memoized callbacks to prevent unnecessary re-renders
  const handleShowAlert = useCallback(() => {
    setShowAlert(true);
  }, []);

  const handleCloseAlert = useCallback(() => {
    setShowAlert(false);   
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleCheckboxChange = useCallback((e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
    if (name === "personalData" && checked) {
      setError("");
    }
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (!formData.firstname || !formData.email || !formData.personalData) {
      if (!formData.personalData) {
        setError("Tap on this checkbox to hear from us!");
      }
      return;
    }
    
    setIsSubmitting(true);
    setError("");
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        handleShowAlert();
        setFormData(FORM_INITIAL_STATE);
      } else {
        setError("Error sending message. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, handleShowAlert]);

  // Intersection Observer with cleanup
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
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-on-appear");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  // Memoized contact info and social links
  const contactInfoCards = useMemo(() => 
    CONTACT_INFO.map((info, index) => (
      <ContactInfoCard key={index} {...info} />
    )), []
  );

  const locationPins = useMemo(() => 
    LOCATIONS.map((location, index) => (
      <LocationPin key={index} {...location} />
    )), []
  );

  const socialLinks = useMemo(() => 
    SOCIAL_LINKS.map((link, index) => (
      <SocialLink key={index} {...link} />
    )), []
  );

  return (
    <>
      <Head>
        <title>Contact Us - Jenisys</title>
        <meta name="description" content="Get in touch with Jenisys for tech strategy, collaboration, or service assistance. We're here to help turn your vision into reality." />
        <meta name="keywords" content="contact, tech strategy, collaboration, Jenisys, software development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://jenisys.in/contact" />
      </Head>

      <div className="flex overflow-hidden flex-col justify-center bg-white mt-12 xs:mt-16 sm:mt-20 md:mt-24 lg:mt-0">
        <header className="text-center scroll-on-appear mt-8 sm:mt-12 md:mt-16 lg:mt-20 font-['Montserrat'] text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold tracking-tighter leading-tight text-black px-4">
          <h1>Contact Us</h1>
        </header>
        
        <div className="scroll-on-appear mt-6 sm:mt-8 md:mt-10 lg:mt-11 mb-6 sm:mb-8 md:mb-10 font-['Montserrat'] text-sm sm:text-base md:text-lg font-semibold tracking-tight leading-6 sm:leading-7 md:leading-8 text-black max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8">
          If you have any questions about our services, want to discuss a
          potential collaboration, or just need advice on your tech strategy, our
          team is here to help. Get in touch with us today.
        </div>
        
        {/* Contact Info Section */}
        <section
          className="w-full bg-cover bg-center py-8 sm:py-12 md:py-16 text-white"
          style={{ backgroundImage: "url('/img/cont.png')" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center">
            {contactInfoCards}
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-black py-8 sm:py-12 md:py-16 text-white text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 px-4">We're located at</h2>
          <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            <Image
              src="/img/maps.png"
              alt="World Map showing our locations"
              width={1200}
              height={600}
              className="w-full h-auto mx-auto"
              priority
            />
            {locationPins}
          </div>
        </section>

        {/* Form Section */}
        <section className="flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
          <Image
            src="/img/Logo.png"
            alt="Jenisys Logo"
            width={80}
            height={75}
            className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 flex-shrink-0"
          />
          <h2 className="font-['Montserrat'] text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-[35px] font-bold ml-3 sm:ml-4 leading-tight">
            Request Service Assistance
          </h2>
        </section>

        <p className="font-['Montserrat'] text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[30px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12 font-semibold leading-relaxed">
          We've powered growth and impactful change across all industries, and we're ready to turn your vision into reality. Tell us a bit about yourself, and we'll set things in motion.
        </p>
        
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 bg-gradient-to-r from-[#000000] from-30% via-[#1A163B] via-74% to-[#4A34F7] to-95%">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
              
              {/* Form Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
                
                {/* First Name */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <h3 className="font-['Montserrat'] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[30px] font-semibold text-white">
                    First Name*
                  </h3>
                  <input 
                    type="text"
                    name="firstname"
                    placeholder="John"
                    required
                    value={formData.firstname}
                    onChange={handleChange}
                    className="w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-transparent border-b-2 border-white text-white placeholder-gray-300 focus:outline-none focus:border-white focus:ring-0 pb-2"
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <h3 className="font-['Montserrat'] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[30px] font-semibold text-white">
                    Last Name*
                  </h3>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Doe"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-transparent border-b-2 border-white text-white placeholder-gray-300 focus:outline-none focus:border-white focus:ring-0 pb-2"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <h3 className="font-['Montserrat'] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[30px] font-semibold text-white">
                    E-Mail*
                  </h3>
                  <input 
                    type="email"
                    name="email"
                    placeholder="john.doe@gmail.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-transparent border-b-2 border-white text-white placeholder-gray-300 focus:outline-none focus:border-white focus:ring-0 pb-2"
                  />
                </div>

                {/* Contact Number */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <h3 className="font-['Montserrat'] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[30px] font-semibold text-white">
                    Contact Number*
                  </h3>
                  <input
                    type="tel"
                    name="contactNo"
                    placeholder="Contact Number"
                    value={formData.contactNo}
                    onChange={handleChange}
                    className="w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-transparent border-b-2 border-white text-white placeholder-gray-300 focus:outline-none focus:border-white focus:ring-0 pb-2"
                  />
                </div>

                {/* Message - Full Width */}
                <div className="lg:col-span-2 space-y-2 sm:space-y-3 md:space-y-4">
                  <h3 className="font-['Montserrat'] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[30px] font-semibold text-white">
                    How can we help you?*
                  </h3>
                  <textarea
                    name="msg"
                    placeholder="Write your message"
                    required
                    value={formData.msg}
                    onChange={handleChange}
                    rows={3}
                    className="w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-transparent border-b-2 border-white text-white placeholder-gray-300 focus:outline-none focus:border-white focus:ring-0 pb-2 resize-none"
                  />
                </div>
              </div>

              {/* Checkboxes */}
              <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 space-y-4 sm:space-y-6">
                {/* Personal Data Checkbox */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <input 
                    type="checkbox"
                    name="personalData"
                    checked={formData.personalData}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 border-2 border-white bg-transparent mt-1 flex-shrink-0 accent-white"
                  />
                  <label className="text-white font-['Montserrat'] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium leading-relaxed">
                    I authorize Jenisys to use my personal data to reach out to me.
                  </label>
                </div>

                {/* Error Message */}
                {error && (
                  <p className="text-red-400 text-xs sm:text-sm md:text-base font-medium">
                    {error}
                  </p>
                )}

                {/* Marketing Checkbox */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <input 
                    type="checkbox"
                    name="marketting"
                    checked={formData.marketting}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 border-2 border-white bg-transparent mt-1 flex-shrink-0 accent-white"
                  />
                  <label className="text-white font-['Montserrat'] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium leading-relaxed">
                    I would like to receive updates regarding products and services of Jenisys.
                  </label>
                </div>
              </div>

              {/* Privacy Policy */}
              <p className="font-['Montserrat'] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white mt-6 sm:mt-8 md:mt-10 lg:mt-12 leading-relaxed">
                For more information, please refer to the{' '}
                <span className="font-extrabold">Privacy Policy</span> of Jenisys.
              </p>

              {/* Submit Button */}
              <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-white text-black font-['Montserrat'] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[36px] font-semibold px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-3 sm:py-4 md:py-5 lg:py-6 xl:py-8 rounded-full sm:rounded-2xl md:rounded-3xl lg:rounded-[48px] hover:shadow-lg hover:shadow-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Footer Social Section */}
        <footer className="w-full bg-black py-8 sm:py-12 md:py-16 flex flex-col justify-center items-center">
          <h3 className="font-['Montserrat'] font-semibold text-lg sm:text-xl md:text-2xl lg:text-[26px] xl:text-[32px] text-center text-white mb-4 sm:mb-6 md:mb-8">
            Follow Us On
          </h3>
          <div className="flex flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
            {socialLinks}
          </div>
        </footer>

        {/* Alert Modal */}
        {showAlert && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <AlertMessage onClose={handleCloseAlert} />
          </div>
        )}
      </div>
    </>
  );
}

// Set display names for better debugging
ContactInfoCard.displayName = 'ContactInfoCard';
LocationPin.displayName = 'LocationPin';
SocialLink.displayName = 'SocialLink';
AlertMessage.displayName = 'AlertMessage';

export default React.memo(Contact);
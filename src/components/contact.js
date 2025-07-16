"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Head from "next/head";
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
  <div className="flex flex-col items-center">
    <div className="bg-white p-4 rounded-lg mb-6">
      <Image
        src={icon}
        alt={alt}
        width={40}
        height={40}
        className="w-10 h-10"
      />
    </div>
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="mt-2 text-base text-gray-200">{content}</p>
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
    <p className="text-[10px] sm:text-xs md:text-sm font-bold text-black mb-1 text-center">
      {name}
    </p>
    <Image
      src="/img/loca.png"
      alt={name}
      width={20}
      height={20}
      className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mx-auto"
    />
  </div>
));

const SocialLink = React.memo(({ href, icon, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <div className="bg-[#A3A3A3] md:h-[50px] md:w-[50px] w-[16px] h-[16px] rounded-full flex justify-center items-center hover:bg-gray-300 transition-colors">
      <Image
        src={icon}
        alt={alt}
        width={34}
        height={34}
        className="md:h-[34px] md:w-[34px] w-[12px] h-[12px]"
      />
    </div>
  </a>
));

const AlertMessage = React.memo(({ onClose }) => (
  <div className="justify-center text-center flex items-center bg-white text-black md:ml-[50px] max-md:text-[7px] md:text-[20px] md:font-semibold max-md:w-[150px] max-md:h-[22px] md:w-[350px] md:h-[75px] max-md:rounded-[2px] md:rounded-[10px] md:mb-[10px]">
    <div>
      <p>Thanks! You'll hear from us soon!</p>
      <button 
        onClick={onClose}
        className="mx-[20px] md:mx-[130px] bg-[#361CA9] max-md:text-[5px] text-white max-md:rounded-[2px] md:rounded-[5px] px-[10px] md:mt-[10px] max-md:mt-0 hover:bg-[#2d1587] transition-colors"
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

      <div className="flex overflow-hidden flex-col justify-center bg-white max-md:mt-[50px] md:mt-[85px] md:mt-0">
        <header className="text-center scroll-on-appear mt-20 font-['Montserrat'] md:text-[48px] font-bold tracking-tighter leading-tight text-black max-md:mt-10 max-md:text-[21px]">
          <h1>Contact Us</h1>
        </header>
        
        <div className="scroll-on-appear mt-11 mb-10 font-['Montserrat'] text-lg font-semibold tracking-tight leading-8 text-black w-[915px] max-md:mt-10 max-md:max-w-full mx-auto text-center">
          If you have any questions about our services, want to discuss a
          potential collaboration, or just need advice on your tech strategy, our
          team is here to help. Get in touch with us today.
        </div>
        
        {/* Contact Info Section */}
        <section
          className="w-full bg-cover bg-center py-16 text-white"
          style={{ backgroundImage: "url('/img/cont.png')" }}
        >
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {contactInfoCards}
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-black py-16 text-white text-center">
          <h2 className="text-2xl font-semibold mb-8">We're located at</h2>
          <div className="relative w-full max-w-6xl mx-auto px-4">
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
        <section className="flex md:px-[50px] md:pt-[40px] max-md:px-[10px] max-md:pt-[20px]">
          <Image
            src="/img/Logo.png"
            alt="Jenisys Logo"
            width={80}
            height={75}
            className="w-[25px] h-[25px] md:w-[80px] md:h-[75px]"
          />
          <h2 className="font-['Montserrat'] text-[15px] md:text-[35px] font-bold max-md:pt-[2px] md:pt-[15px]">
            Request Service Assistance
          </h2>
        </section>

        <p className="font-['Montserrat'] md:text-[30px] max-md:text-[12px] md:pl-[50px] md:pr-[110px] md:pt-[40px] max-md:pt-[10px] font-semibold max-md:px-[10px]">
          We've powered growth and impactful change across all industries, and we're ready to turn your vision into reality. Tell us a bit about yourself, and we'll set things in motion.
        </p>
        
        <form onSubmit={handleSubmit} noValidate>
          <div className="max-md:mt-[20px] md:mt-[50px] bg-gradient-to-r from-[#000000] from-30% via-[#000000] via-[#1A163B] to-[#4A34F7] max-md:px-[10px]">
            <div className="md:pl-[50px] w-screen grid grid-cols-2 md:pt-[50px] max-md:pt-[30px] md:gap-y-12">
              <div>
                <label className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px]">
                  First Name*
                </label>
                <input 
                  type="text"
                  name="firstname"
                  placeholder="John"
                  required
                  value={formData.firstname}
                  onChange={handleChange}
                  className="max-md:w-[170px] md:text-[25px] md:w-[460px] md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0 placeholder-gray-300"
                  aria-required="true"
                />
              </div>
              <div>
                <label className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px]">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Doe"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="max-md:w-[170px] md:text-[25px] md:w-[460px] md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0 placeholder-gray-300"
                />
              </div>
              <div>
                <label className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px] max-md:pt-[30px]">
                  E-Mail*
                </label>
                <input 
                  type="email"
                  name="email"
                  placeholder="john.doe@gmail.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="max-md:w-[170px] md:text-[25px] md:w-[460px] md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0 placeholder-gray-300"
                  aria-required="true"
                />
              </div>
              <div>
                <label className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px] max-md:pt-[30px]">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contactNo"
                  placeholder="Contact Number"
                  value={formData.contactNo}
                  onChange={handleChange}
                  className="max-md:w-[170px] md:text-[25px] md:w-[460px] md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0 placeholder-gray-300"
                />
              </div>
              <div className="col-span-2">
                <label className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px] max-md:pt-[30px]">
                  How can we help you?
                </label>
                <textarea
                  name="msg"
                  placeholder="Write your message"
                  value={formData.msg}
                  onChange={handleChange}
                  rows="1"
                  className="max-md:w-[220px] md:text-[25px] md:w-[460px] md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0 placeholder-gray-300 resize-none"
                />
              </div>
            </div>
            
            <div className="flex md:pl-[50px] md:mt-[50px] max-md:mt-[20px]">
              <input 
                type="checkbox"
                name="personalData"
                checked={formData.personalData}
                onChange={handleCheckboxChange}
                className="md:w-[30px] md:h-[30px] border-2 border-white max-md:mt-[30px]"
                aria-required="true"
              />
              <label className="text-white font-['Montserrat'] md:text-[24px] text-[10px] font-medium pl-[10px] max-md:pt-[30px]">
                I authorize Jenisys to use my personal data to reach out to me.
              </label>
            </div>
            
            {error && (
              <p className="text-red-500 text-[10px] md:text-[14px] font-medium md:pl-[50px] mt-2" role="alert">
                {error}
              </p>
            )}
            
            <div className="flex md:pl-[50px] md:mt-[30px]">
              <input 
                type="checkbox"
                name="marketting"
                checked={formData.marketting}
                onChange={handleCheckboxChange}
                className="md:w-[30px] md:h-[30px] border-2 border-white max-md:mt-[30px]"
              />
              <label className="text-white font-['Montserrat'] md:text-[24px] text-[10px] font-medium pl-[10px] max-md:mt-[30px]">
                I would like to receive updates regarding products and services of Jenisys.
              </label>
            </div>
            
            <p className="font-['Montserrat'] md:text-[24px] text-white text-[10px] md:pl-[50px] md:mt-[50px] max-md:mt-[30px]">
              For more information, please refer to the <span className="font-extrabold">Privacy Policy</span> of Jenisys.
            </p>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-white text-black md:ml-[50px] md:mt-[50px] max-md:mt-[30px] max-md:text-[10px] md:text-[36px] font-semibold max-md:w-[69px] max-md:h-[22px] md:w-[240px] md:h-[75px] max-md:rounded-[20px] md:rounded-[48px] max-md:mb-[0px] md:mb-[30px] hover:shadow-lg hover:shadow-white transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
            
            {showAlert && <AlertMessage onClose={handleCloseAlert} />}
          </div>
        </form>

        {/* Footer Social Section */}
        <footer className="w-screen bg-black md:h-[190px] max-md:h-[190px] justify-center items-center">
          <h3 className="font-['Montserrat'] font-semibold md:text-[26px] text-center text-white md:pt-[30px] max-md:pt-[50px] 3xl:text-[32px]">
            Follow Us On
          </h3>
          <div className="flex flex-row justify-center items-center md:gap-8 md:mt-[20px] mt-[10px] gap-4">
            {socialLinks}
          </div>
        </footer>
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
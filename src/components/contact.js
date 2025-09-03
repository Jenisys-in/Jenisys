"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";

// Constants moved outside component to prevent recreation
const FORM_INITIAL_STATE = {
  firstname: "",
  lastname: "",
  email: "",
  contactNo: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  msg: "",
  personalData: false,
  marketing: false,
};

const PROJECT_TYPES = [
  { value: "", label: "Select Project Type" },
  { value: "web_development", label: "Web Development" },
  { value: "mobile_app", label: "Mobile App Development" },
  { value: "ai_ml", label: "AI/ML Solutions" },
  { value: "cloud_services", label: "Cloud Services" },
  { value: "consulting", label: "Technology Consulting" },
  { value: "other", label: "Other" },
];

const BUDGET_RANGES = [
  { value: "", label: "Select Budget Range" },
  { value: "under_10k", label: "Under $10,000" },
  { value: "10k_25k", label: "$10,000 - $25,000" },
  { value: "25k_50k", label: "$25,000 - $50,000" },
  { value: "50k_100k", label: "$50,000 - $100,000" },
  { value: "100k_plus", label: "$100,000+" },
  { value: "not_sure", label: "Not Sure Yet" },
];

const TIMELINE_OPTIONS = [
  { value: "", label: "Select Timeline" },
  { value: "asap", label: "ASAP (Rush Job)" },
  { value: "1_month", label: "Within 1 Month" },
  { value: "3_months", label: "Within 3 Months" },
  { value: "6_months", label: "Within 6 Months" },
  { value: "flexible", label: "Timeline is Flexible" },
];

const CONTACT_INFO = [
  {
    icon: "/img/cont_phone.png",
    title: "Talk to our Team",
    content: "+91 8240 384 648",
    alt: "Phone Icon",
  },
  {
    icon: "/img/cont_mail.png",
    title: "Email Us",
    content: "contact@jenisys.in",
    alt: "Mail Icon",
  },
  {
    icon: "/img/cont_clock.png",
    title: "Operating Hours",
    content: "8am to 5pm",
    alt: "Clock Icon",
  },
];

const LOCATIONS = [
  {
    name: "Atlanta, USA",
    position: { top: "40%", left: "25%" },
  },
  {
    name: "Kolkata, India",
    position: { top: "48%", left: "68%" },
  },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/jenisys.in/",
    icon: "/img/mdi_instagram.png",
    alt: "Instagram",
    name: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/jenisys",
    icon: "/img/linkedIn.png",
    alt: "LinkedIn",
    name: "LinkedIn",
  },
  {
    href: "https://www.facebook.com",
    icon: "/img/facebook.png",
    alt: "Facebook",
    name: "Facebook",
  },
];

const validateField = (name, value, formData) => {
  switch (name) {
    case "email":
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value) ? "" : "Please enter a valid email address";
    case "contactNo":
      if (!value) return "";
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      return phoneRegex.test(value.replace(/\s/g, ""))
        ? ""
        : "Please enter a valid phone number";
    case "firstname":
      return value.trim().length >= 2
        ? ""
        : "First name must be at least 2 characters";
    case "msg":
      return value.trim().length >= 10
        ? ""
        : "Please provide at least 10 characters describing your project";
    default:
      return "";
  }
};

// Enhanced Checkbox Component
const CustomCheckbox = React.memo(
  ({ id, name, checked, onChange, label, required = false }) => (
    <div className="flex items-start space-x-3 sm:space-x-4 group">
      <div className="relative flex-shrink-0 mt-1">
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          required={required}
          className="sr-only"
        />
        <label
          htmlFor={id}
          className="cursor-pointer block w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 border-2 border-white rounded-sm bg-transparent transition-all duration-200 hover:border-gray-300 relative"
        >
          {checked && (
            <svg
              className="w-full h-full text-white absolute inset-0 transform scale-75"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </label>
      </div>
      <label
        htmlFor={id}
        className="text-white font-['Montserrat'] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium leading-relaxed cursor-pointer group-hover:text-gray-100 transition-colors duration-200"
      >
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
    </div>
  )
);

// Enhanced Input Component
const FormInput = React.memo(
  ({
    label,
    type = "text",
    name,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    required = false,
    rows = null,
  }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);

    const inputClasses = `w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-transparent border-b-2 text-white placeholder-gray-300 focus:outline-none focus:ring-0 pb-2 transition-all duration-300 ${
      error
        ? "border-red-400 focus:border-red-400"
        : isFocused
        ? "border-blue-400 focus:border-blue-400"
        : "border-white focus:border-white hover:border-gray-300"
    }`;

    return (
      <div className="space-y-2 sm:space-y-3 md:space-y-4">
        <h3 className="font-['Montserrat'] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[30px] font-semibold text-white">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </h3>
        {rows ? (
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={onBlur}
            required={required}
            rows={rows}
            className={`${inputClasses} resize-none`}
          />
        ) : (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={onBlur}
            required={required}
            className={inputClasses}
          />
        )}
        {error && (
          <p className="text-red-400 text-xs sm:text-sm font-medium animate-pulse">
            {error}
          </p>
        )}
      </div>
    );
  }
);

// Enhanced Select Component
const FormSelect = React.memo(
  ({ label, name, value, onChange, onBlur, error, required, options }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);

    const selectClasses = `w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-transparent border-b-2 text-white placeholder-gray-300 focus:outline-none focus:ring-0 pb-2 transition-all duration-300 ${
      error
        ? "border-red-400 focus:border-red-400"
        : isFocused
        ? "border-blue-400 focus:border-blue-400"
        : "border-white focus:border-white hover:border-gray-300"
    }`;

    return (
      <div className="space-y-2 sm:space-y-3 md:space-y-4">
        <h3 className="font-['Montserrat'] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[30px] font-semibold text-white">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </h3>
        <select
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={onBlur}
          required={required}
          className={selectClasses}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-gray-800 text-white"
            >
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-red-400 text-xs sm:text-sm font-medium animate-pulse">
            {error}
          </p>
        )}
      </div>
    );
  }
);

// Memoized components for better performance
const ContactInfoCard = React.memo(({ icon, title, content, alt }) => (
  <div className="flex flex-col items-center px-4 transform hover:scale-105 transition-all duration-300 hover:bg-black/20 rounded-lg py-4">
    <div className="bg-white p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        src={icon}
        alt={alt}
        width={40}
        height={40}
        className="w-8 h-8 sm:w-10 sm:h-10"
      />
    </div>
    <h2 className="text-lg sm:text-xl font-semibold text-center">{title}</h2>
    <p className="mt-2 text-sm sm:text-base text-gray-200 text-center hover:text-white transition-colors duration-200">
      {content}
    </p>
  </div>
));

const LocationPin = React.memo(({ name, position }) => (
  <div
    className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-300"
    style={{
      top: position.top,
      left: position.left,
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

const SocialLink = React.memo(({ href, icon, alt, name }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="group">
    <div className="bg-gray-600 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-[50px] md:h-[50px] rounded-full flex justify-center items-center hover:bg-gray-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <Image
        src={icon}
        alt={alt}
        width={34}
        height={34}
        className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-[34px] md:h-[34px] relative z-10 group-hover:scale-110 transition-transform duration-200"
      />
    </div>
    <p className="text-xs text-center mt-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {name}
    </p>
  </a>
));

const AlertMessage = React.memo(({ onClose }) => (
  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white text-black p-4 sm:p-6 rounded-xl shadow-2xl max-w-xs sm:max-w-sm md:max-w-md animate-bounce">
    <div className="text-center">
      <div className="text-4xl mb-4">🎉</div>
      <p className="text-sm sm:text-base md:text-lg font-semibold mb-4">
        Thanks! You'll hear from us soon!
      </p>
      <button
        onClick={onClose}
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg text-sm sm:text-base hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Close
      </button>
    </div>
  </div>
));

function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState(FORM_INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Memoized callbacks to prevent unnecessary re-renders
  const handleShowAlert = useCallback(() => {
    setShowAlert(true);
  }, []);

  const handleCloseAlert = useCallback(() => {
    setShowAlert(false);
  }, []);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value || "" }));
      if (errors[name]) {
        const error = validateField(name, value, formData);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    },
    [errors, formData]
  );

  const handleBlur = useCallback(
    (e) => {
      const { name, value } = e.target;
      const error = validateField(name, value, formData);
      setErrors((prev) => ({ ...prev, [name]: error }));
    },
    [formData]
  );

  const handleCheckboxChange = useCallback((e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
    if (name === "personalData" && checked) {
      setErrors((prev) => ({ ...prev, personalData: "" }));
    }
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      if (e && e.preventDefault) {
        e.preventDefault();
      }

      const validationErrors = Object.keys(formData).reduce((acc, key) => {
        const error = validateField(key, formData[key], formData);
        if (error) {
          acc[key] = error;
        }
        return acc;
      }, {});

      if (!formData.personalData) {
        validationErrors.personalData = "You must agree to the privacy policy.";
      }

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setIsSubmitting(true);
      setErrors({});

      try {
        const { firstname, lastname, contactNo, ...rest } = formData;
        const submitData = {
          name: `${firstname} ${lastname}`.trim(),
          firstname,
          lastname,
          number: contactNo,
          ...rest,
        };

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitData),
        });

        if (!response.ok) {
          throw new Error("Server responded with an error.");
        }

        // Handle success
        handleShowAlert();
        setFormData(FORM_INITIAL_STATE);
      } catch (error) {
        console.error("Submission error:", error);
        setErrors({
          submit:
            "There was an error submitting your message. Please try again.",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, handleShowAlert]
  );

  // Intersection Observer with cleanup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
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
  const contactInfoCards = useMemo(
    () =>
      CONTACT_INFO.map((info, index) => (
        <ContactInfoCard key={index} {...info} />
      )),
    []
  );

  const locationPins = useMemo(
    () =>
      LOCATIONS.map((location, index) => (
        <LocationPin key={index} {...location} />
      )),
    []
  );

  const socialLinks = useMemo(
    () =>
      SOCIAL_LINKS.map((link, index) => <SocialLink key={index} {...link} />),
    []
  );

  return (
    <>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>

      <div className="flex overflow-hidden flex-col justify-center bg-white mt-12 xs:mt-16 sm:mt-20 md:mt-24 lg:mt-0">
        <header className="text-center scroll-on-appear mt-8 sm:mt-12 md:mt-16 lg:mt-20 font-['Montserrat'] text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold tracking-tighter leading-tight text-black px-4">
          <h1>Let's Build Something Amazing Together</h1>
        </header>

        <div className="scroll-on-appear mt-6 sm:mt-8 md:mt-10 lg:mt-11 mb-6 sm:mb-8 md:mb-10 font-['Montserrat'] text-sm sm:text-base md:text-lg font-semibold tracking-tight leading-6 sm:leading-7 md:leading-8 text-black max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ready to transform your ideas into reality? Our team is here to help
            you succeed.
          </p>
        </div>

        {/* Contact Info Section */}
        <section className="w-full bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 gradient-animate py-8 sm:py-12 md:py-16 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center">
            {contactInfoCards}
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-black py-8 sm:py-12 md:py-16 text-white text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 px-4">
            We're located at
          </h2>
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
            src="/img/logo2.svg"
            alt="Jenisys Logo"
            width={80}
            height={75}
            className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 flex-shrink-0"
          />
          <h2 className="font-['Montserrat'] text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-[35px] font-bold ml-3 sm:ml-4 leading-tight">
            Tell Us About Your Project
          </h2>
        </section>

        <p className="font-['Montserrat'] text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[30px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12 font-semibold leading-relaxed">
          The more details you provide, the better we can help you
        </p>

        <div className="w-full">
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 bg-gradient-to-r from-black from-30% via-purple-900 via-74% to-blue-600 to-95% gradient-animate">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
              {/* Form Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
                <FormInput
                  label="First Name"
                  name="firstname"
                  placeholder="John"
                  value={formData.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.firstname}
                  required
                />

                <FormInput
                  label="Last Name"
                  name="lastname"
                  placeholder="Doe"
                  value={formData.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.lastname}
                />

                <FormInput
                  label="E-Mail"
                  type="email"
                  name="email"
                  placeholder="john.doe@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email}
                  required
                />

                <FormInput
                  label="Contact Number"
                  type="tel"
                  name="contactNo"
                  placeholder="+1 (555) 123-4567"
                  value={formData.contactNo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.contactNo}
                />

                <FormInput
                  label="Company"
                  name="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.company}
                />

                <FormSelect
                  label="Project Type"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.projectType}
                  options={PROJECT_TYPES}
                />

                <FormSelect
                  label="Budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.budget}
                  options={BUDGET_RANGES}
                />

                <FormSelect
                  label="Timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.timeline}
                  options={TIMELINE_OPTIONS}
                />

                {/* Message - Full Width */}
                <div className="lg:col-span-2">
                  <FormInput
                    label="Tell us about your project"
                    name="msg"
                    placeholder="Describe your project, goals, and any specific requirements..."
                    value={formData.msg}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.msg}
                    required
                    rows={3}
                  />
                </div>
              </div>

              {/* Checkboxes */}
              <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 space-y-4 sm:space-y-6">
                <CustomCheckbox
                  id="personalData"
                  name="personalData"
                  checked={formData.personalData}
                  onChange={handleCheckboxChange}
                  label="I authorize Jenisys to use my personal data to reach out to me."
                  required
                />

                {/* Error Message */}
                {errors.submit && (
                  <p className="text-red-400 text-xs sm:text-sm md:text-base font-medium animate-pulse bg-red-100/10 p-3 rounded-lg border border-red-400/30">
                    ⚠️ {errors.submit}
                  </p>
                )}
                {errors.personalData && (
                  <p className="text-red-400 text-xs sm:text-sm md:text-base font-medium animate-pulse">
                    {errors.personalData}
                  </p>
                )}

                <CustomCheckbox
                  id="marketting"
                  name="marketting"
                  checked={formData.marketting}
                  onChange={handleCheckboxChange}
                  label="I would like to receive updates regarding products and services of Jenisys."
                />
              </div>

              {/* Privacy Policy */}
              <p className="font-['Montserrat'] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white mt-6 sm:mt-8 md:mt-10 lg:mt-12 leading-relaxed">
                For more information, please refer to the{" "}
                <a
                  href="https://jenisys.in/Privacy-Policy"
                  className="font-extrabold underline hover:text-blue-300 transition-colors duration-200 hover:bg-white/10 px-1 py-0.5 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>{" "}
                of Jenisys.
              </p>

              {/* Submit Button */}
              <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-white text-black font-['Montserrat'] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[36px] font-semibold px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-3 sm:py-4 md:py-5 lg:py-6 xl:py-8 rounded-full sm:rounded-2xl md:rounded-3xl lg:rounded-[48px] hover:shadow-lg hover:shadow-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:bg-gradient-to-r hover:from-white hover:to-gray-100 relative overflow-hidden"
                >
                  {isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 animate-pulse"></div>
                  )}
                  <span className="relative z-10">
                    {isSubmitting ? "Sending... " : "Get in Touch"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

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
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <AlertMessage onClose={handleCloseAlert} />
          </div>
        )}
      </div>
    </>
  );
}

// Set display names for better debugging
ContactInfoCard.displayName = "ContactInfoCard";
LocationPin.displayName = "LocationPin";
SocialLink.displayName = "SocialLink";
AlertMessage.displayName = "AlertMessage";
CustomCheckbox.displayName = "CustomCheckbox";
FormInput.displayName = "FormInput";
FormSelect.displayName = "FormSelect";

export default React.memo(Contact);

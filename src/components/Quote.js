"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Send,
  Briefcase,
  DollarSign,
  Type,
  CheckCircle,
} from "lucide-react";

const steps = [
  { id: "service", title: "What service are you looking for?" },
  { id: "details", title: "Tell us about your project" },
  { id: "contact", title: "How can we reach you?" },
  { id: "submission", title: "Thank you!" },
];

const services = [
  "Web Development",
  "App Development",
  "AI/ML Solutions",
  "Cloud & DevOps",
  "IT Consulting",
  "Custom Software",
];

const Quote = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    service: "",
    details: "",
    budget: "",
    name: "",
    email: "",
    company: "",
  });
  const [errors, setErrors] = useState({});

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const validateStep = () => {
    const newErrors = {};
    if (currentStep === 0 && !formData.service) {
      newErrors.service = "Please select a service.";
    }
    if (currentStep === 1 && !formData.details) {
      newErrors.details = "Please provide some project details.";
    }
    if (currentStep === 2) {
      if (!formData.name) newErrors.name = "Name is required.";
      if (!formData.email) {
        newErrors.email = "Email is required.";
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Email is invalid.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep()) {
      try {
        const res = await fetch("/api/quote", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          setCurrentStep(steps.length - 1);
        } else {
          const { message } = await res.json();
          setErrors({ submit: message });
        }
      } catch (error) {
        setErrors({ submit: "An error occurred. Please try again." });
      }
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            key="service"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => {
                    setFormData({ ...formData, service });
                    setCurrentStep(1);
                    setErrors({});
                  }}
                  className={`p-4 rounded-lg border-2 text-center transition-all duration-200 ${
                    formData.service === service
                      ? "bg-[#4F46E5] text-white border-[#4F46E5]"
                      : "bg-white hover:bg-gray-50 border-gray-200"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
            {errors.service && (
              <p className="text-red-500 mt-2">{errors.service}</p>
            )}
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="details"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Project Details
              </label>
              <textarea
                id="details"
                value={formData.details}
                onChange={(e) =>
                  setFormData({ ...formData, details: e.target.value })
                }
                placeholder="Describe your project, goals, and any specific requirements."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F46E5]"
                rows="4"
              />
              {errors.details && (
                <p className="text-red-500 mt-1">{errors.details}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Estimated Budget (Optional)
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F46E5]"
              >
                <option value="">Select a budget range</option>
                <option value="under-5k">{"<"} $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="over-50k">{">"} $50,000+</option>
              </select>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F46E5]"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F46E5]"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <input
              type="text"
              placeholder="Company Name (Optional)"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F46E5]"
            />
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="submission"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
            <h3 className="text-2xl font-semibold mt-4">Thank You!</h3>
            <p className="text-gray-600 mt-2">
              Your quote request has been submitted. We will get back to you
              within 24 hours.
            </p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-2">
            {steps[currentStep].title}
          </h2>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div
              className="bg-[#4F46E5] h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>

          {currentStep < 3 && (
            <div className="mt-8 flex justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-2 px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
              >
                <ArrowLeft size={18} />
                Back
              </button>
              {currentStep < 2 ? (
                <button
                  onClick={nextStep}
                  className="flex items-center gap-2 px-6 py-3 bg-[#4F46E5] text-white rounded-lg hover:bg-[#3730A3]"
                >
                  Next
                  <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Submit
                  <Send size={18} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quote;

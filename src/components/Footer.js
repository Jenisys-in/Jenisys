"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [formErrors, setFormErrors] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name?.trim()) errors.name = "Name is required";
    if (!formData.email?.trim()) errors.email = "Email is required";
    else if (!validateEmail(formData.email)) errors.email = "Please enter a valid email address";

    if (Object.keys(errors).length > 0) { setFormErrors(errors); return; }

    setFormErrors({ name: "", email: "" });
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setShowAlert(true);
        setFormData({ name: "", email: "" });
        setTimeout(() => setShowAlert(false), 3000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        setFormErrors({ api: errorData.message || "Submission failed. Please try again." });
      }
    } catch {
      setFormErrors({ api: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#0F172A]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white font-montserrat mb-4">
                JENISYS
              </h2>
              <p className="text-lg font-semibold text-white mb-3">
                Advancing Excellence Beyond Cost
              </p>
              <p className="text-[#E5E7EB] text-sm leading-relaxed">
                Delivering innovative solutions that drive business growth and
                operational excellence through cutting-edge technology and
                strategic consulting.
              </p>
            </div>

            <Link href="/contact">
              <div className="ds-btn-primary w-fit group">
                Get Started Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Case Study", href: "/case-study" },
                { name: "Career", href: "/career" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#E5E7EB] hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="ds-icon-container-dark w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/10">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[#E5E7EB] text-sm leading-relaxed">
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
                <div className="ds-icon-container-dark w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/10">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a
                  href="tel:+918240384648"
                  className="text-[#E5E7EB] hover:text-white transition-colors"
                >
                  +91 8240384648
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="ds-icon-container-dark w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/10">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a
                  href="mailto:contact@jenisys.in"
                  className="text-[#E5E7EB] hover:text-white transition-colors"
                >
                  contact@jenisys.in
                </a>
              </div>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Stay Connected
            </h3>

            <div className="flex gap-4 mb-6">
              {[
                { name: "Instagram", href: "https://www.instagram.com/jenisys.in/", icon: "/img/mdi_instagram.png" },
                { name: "LinkedIn", href: "https://www.linkedin.com/company/jenisys", icon: "/img/linkedIn.png" },
                { name: "Facebook", href: "https://www.facebook.com", icon: "/img/facebook.png" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 hover:bg-[#4F46E5] w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="w-5 h-5 brightness-0 invert transition-all"
                  />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div>
              <p className="text-[#E5E7EB] text-sm mb-3">
                Subscribe to our newsletter
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Your name"
                  className="flex-1 px-3 py-2 bg-[#111827] text-white rounded-lg border border-[#374151] focus:border-[#4F46E5] focus:outline-none focus:ring-1 focus:ring-[#4F46E5] text-sm transition-colors"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {formErrors.name && (
                  <p className="text-red-400 text-xs">{formErrors.name}</p>
                )}
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-[#111827] text-white rounded-lg border border-[#374151] focus:border-[#4F46E5] focus:outline-none focus:ring-1 focus:ring-[#4F46E5] text-sm transition-colors"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <p className="text-red-400 text-xs">{formErrors.email}</p>
                )}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="ds-btn-primary py-2 px-4 text-sm disabled:opacity-50"
                  aria-label="Subscribe to newsletter"
                >
                  {isSubmitting ? "..." : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
              {formErrors.api && (
                <p className="text-red-400 text-xs mt-2">{formErrors.api}</p>
              )}
              {showAlert && (
                <p className="text-emerald-400 text-xs mt-2">
                  Thank you for subscribing!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#374151]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[#6B7280] text-sm">
              © 2025 Jenisys. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              {[{ name: "Privacy Policy", href: "/Privacy-Policy" }].map(
                (link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[#6B7280] hover:text-white transition-colors duration-200"
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
  );
};

export default Footer;

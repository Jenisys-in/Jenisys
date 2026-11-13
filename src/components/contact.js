"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "./Footer";
import { useCalendar } from "@/contexts/CalendarContext";

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
  { title: "Talk to our Team", content: "+91 8240 384 648", href: "tel:+918240384648" },
  { title: "Email Us", content: "contact@jenisys.in", href: "mailto:contact@jenisys.in" },
  { title: "Operating Hours", content: "8am to 5pm" },
];

const LOCATIONS = ["Atlanta, USA", "Kolkata, India"];

const validateField = (name, value) => {
  switch (name) {
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Please enter a valid email address";
    case "contactNo": {
      if (!value) return "";
      // Accept the common ways people type numbers: spaces, brackets, dots and dashes.
      const digits = value.replace(/[\s().-]/g, "");
      return /^\+?[1-9]\d{5,15}$/.test(digits) ? "" : "Please enter a valid phone number";
    }
    case "firstname":
      return value.trim().length >= 2 ? "" : "First name must be at least 2 characters";
    case "msg":
      return value.trim().length >= 10 ? "" : "Please provide at least 10 characters describing your project";
    default:
      return "";
  }
};

const fieldCls =
  "w-full rounded-lg border bg-deep px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/60 transition-colors duration-150 focus:outline-none focus:border-signal";

function Field({ label, name, error, required, children }) {
  return (
    <div className="flex flex-col gap-2 min-w-0">
      <label htmlFor={`f-${name}`} className="text-sm text-ink">
        {label} {required && <span className="text-signal" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p id={`f-${name}-err`} className="text-sm text-alert">
          {error}
        </p>
      )}
    </div>
  );
}

function Contact() {
  const { openCalendar } = useCalendar();
  const [formData, setFormData] = useState(FORM_INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const v = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: v }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: type === "checkbox" ? "" : validateField(name, value) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    for (const key of Object.keys(formData)) {
      if (typeof formData[key] !== "string") continue;
      const err = validateField(key, formData[key]);
      if (err) validationErrors[key] = err;
    }
    if (!formData.personalData) validationErrors.personalData = "You must agree to the privacy policy.";
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const first = document.getElementById(`f-${Object.keys(validationErrors)[0]}`);
      if (first) first.focus();
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    try {
      const { firstname, lastname, contactNo, ...rest } = formData;
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: `${firstname} ${lastname}`.trim(), firstname, lastname, number: contactNo, ...rest }),
      });
      if (!response.ok) throw new Error("Server responded with an error.");
      setSent(true);
      setFormData(FORM_INITIAL_STATE);
    } catch (error) {
      console.error("Submission error:", error);
      setErrors({ submit: "There was an error submitting your message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const input = (name, extra = {}) => ({
    id: `f-${name}`,
    name,
    value: formData[name],
    onChange: handleChange,
    onBlur: handleBlur,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `f-${name}-err` : undefined,
    className: `${fieldCls} ${errors[name] ? "border-alert" : "border-line"}`,
    ...extra,
  });

  const select = (name, options) => (
    <select {...input(name)}>
      {options.map((o) => (
        <option key={o.value} value={o.value} disabled={o.value === ""}>
          {o.label}
        </option>
      ))}
    </select>
  );

  return (
    <div className="j-night">
      <section className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10 j-grid-bg" />
        <div className="j-wrap grid gap-14 pt-14 pb-20 md:pt-20 lg:grid-cols-12 lg:gap-16 lg:pb-28">
          {/* Left: promise + direct lines */}
          <div className="lg:col-span-5">
            <p className="j-eyebrow mb-5">Contact Us</p>
            <h1 className="j-h1 !text-[clamp(38px,5vw,64px)]">Let&apos;s Build Something Amazing Together</h1>
            <p className="j-lead mt-6">Ready to transform your ideas into reality? Our team is here to help you succeed.</p>

            <dl className="mt-12 border-t border-line">
              {CONTACT_INFO.map((c) => (
                <div key={c.title} className="flex items-baseline justify-between gap-6 border-b border-line py-5">
                  <dt className="text-sm text-ink-muted">{c.title}</dt>
                  <dd className="font-mono text-[15px] text-ink text-right">
                    {c.href ? (
                      <a href={c.href} className="hover:text-signal transition-colors duration-150">
                        {c.content}
                      </a>
                    ) : (
                      c.content
                    )}
                  </dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-6 border-b border-line py-5">
                <dt className="text-sm text-ink-muted">We&apos;re located at</dt>
                <dd className="font-mono text-[15px] text-ink text-right">{LOCATIONS.join(" · ")}</dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-col gap-3">
              <p className="font-display text-xl text-ink">Schedule a free call over a cup of coffee</p>
              <button type="button" onClick={openCalendar} className="j-btn j-btn-secondary self-start">
                Schedule a call <span className="j-arrow">→</span>
              </button>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <div className="j-panel j-light-edge p-6 sm:p-8 md:p-10">
              {sent ? (
                <div role="status" className="py-16 text-center">
                  <p className="font-display text-3xl font-semibold text-ink">Thanks! You&apos;ll hear from us soon!</p>
                  <button type="button" onClick={() => setSent(false)} className="j-btn j-btn-secondary mt-8">
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h2 className="j-h3">Tell Us About Your Project</h2>
                  <p className="mt-2 text-[15px] text-ink-muted">The more details you provide, the better we can help you</p>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <Field label="First Name" name="firstname" error={errors.firstname} required>
                      <input {...input("firstname", { type: "text", placeholder: "John", autoComplete: "given-name", required: true })} />
                    </Field>
                    <Field label="Last Name" name="lastname" error={errors.lastname}>
                      <input {...input("lastname", { type: "text", placeholder: "Doe", autoComplete: "family-name" })} />
                    </Field>
                    <Field label="E-Mail" name="email" error={errors.email} required>
                      <input {...input("email", { type: "email", placeholder: "john.doe@company.com", autoComplete: "email", required: true })} />
                    </Field>
                    <Field label="Contact Number" name="contactNo" error={errors.contactNo}>
                      <input {...input("contactNo", { type: "tel", placeholder: "+1 (555) 123-4567", autoComplete: "tel" })} />
                    </Field>
                    <Field label="Company" name="company" error={errors.company}>
                      <input {...input("company", { type: "text", placeholder: "Your Company", autoComplete: "organization" })} />
                    </Field>
                    <Field label="Project Type" name="projectType" error={errors.projectType}>
                      {select("projectType", PROJECT_TYPES)}
                    </Field>
                    <Field label="Budget" name="budget" error={errors.budget}>
                      {select("budget", BUDGET_RANGES)}
                    </Field>
                    <Field label="Timeline" name="timeline" error={errors.timeline}>
                      {select("timeline", TIMELINE_OPTIONS)}
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="Tell us about your project" name="msg" error={errors.msg} required>
                        <textarea
                          {...input("msg", {
                            rows: 5,
                            placeholder: "Describe your project, goals, and any specific requirements...",
                            required: true,
                          })}
                        />
                      </Field>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col gap-3">
                    <label className="flex items-start gap-3 text-sm text-ink-muted">
                      <input
                        type="checkbox"
                        id="f-personalData"
                        name="personalData"
                        checked={formData.personalData}
                        onChange={handleChange}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-[#14e2f9]"
                        aria-invalid={errors.personalData ? true : undefined}
                      />
                      <span>
                        I authorize Jenisys to use my personal data to reach out to me. <span className="text-signal" aria-hidden="true">*</span>
                      </span>
                    </label>
                    {errors.personalData && <p className="text-sm text-alert">{errors.personalData}</p>}
                    <label className="flex items-start gap-3 text-sm text-ink-muted">
                      <input
                        type="checkbox"
                        name="marketing"
                        checked={formData.marketing}
                        onChange={handleChange}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-[#14e2f9]"
                      />
                      <span>I would like to receive updates regarding products and services of Jenisys.</span>
                    </label>
                    <p className="text-xs text-ink-muted">
                      For more information, please refer to the{" "}
                      <Link href="/Privacy-Policy" className="j-link">
                        Privacy Policy
                      </Link>{" "}
                      of Jenisys.
                    </p>
                  </div>

                  {errors.submit && (
                    <p role="alert" className="mt-6 text-sm text-alert">
                      {errors.submit}
                    </p>
                  )}

                  <button type="submit" disabled={isSubmitting} className="j-btn j-btn-primary mt-8 w-full sm:w-auto disabled:opacity-60">
                    {isSubmitting ? "Sending... " : "Get in Touch"} {!isSubmitting && <span className="j-arrow">→</span>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;

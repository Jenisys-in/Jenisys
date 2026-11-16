"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "./Footer";
import { useCalendar } from "@/contexts/CalendarContext";
import { track } from "@/lib/track";

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
  { value: "", label: "Select project type" },
  { value: "ai_automation", label: "AI Automation" },
  { value: "mvp", label: "MVP / App Development" },
  { value: "discovery_sprint", label: "Discovery Sprint" },
  { value: "support", label: "Support & Maintenance" },
  { value: "custom", label: "Custom project" },
  { value: "other", label: "Other" },
];

const BUDGET_RANGES = [
  { value: "", label: "Select budget range" },
  { value: "under_2500", label: "Under $2,500" },
  { value: "2500_7500", label: "$2,500 - $7,500" },
  { value: "7500_15k", label: "$7,500 - $15,000" },
  { value: "15k_50k", label: "$15,000 - $50,000" },
  { value: "50k_plus", label: "$50,000+" },
  { value: "not_sure", label: "Not sure yet" },
];

const TIMELINE_OPTIONS = [
  { value: "", label: "Select timeline" },
  { value: "asap", label: "As soon as possible" },
  { value: "1_month", label: "Within 1 month" },
  { value: "3_months", label: "Within 3 months" },
  { value: "6_months", label: "Within 6 months" },
  { value: "flexible", label: "Flexible" },
];

const CONTACT_INFO = [
  { title: "Email", content: "contact@jenisys.in", href: "mailto:contact@jenisys.in" },
  { title: "Phone", content: "+91 8240 384 648", href: "tel:+918240384648" },
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
      return value.trim().length >= 2 ? "" : "Please enter your name";
    case "msg":
      return value.trim().length >= 10 ? "" : "Please describe what you need in at least 10 characters";
    default:
      return "";
  }
};

const fieldCls =
  "w-full rounded-lg border bg-void px-4 py-3 text-[16px] text-ink placeholder:text-ink-muted/60 transition-colors duration-150 focus:outline-none focus:border-signal focus-visible:ring-2 focus-visible:ring-signal/40";

function Field({ label, name, error, required, children }) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
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

// Two steps: the brief (name, email, what you need), then optional details and consent.
// The submit contract with /api/contact is unchanged.
function Contact() {
  const { openCalendar } = useCalendar();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(FORM_INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [started, setStarted] = useState(false);
  const [plan, setPlan] = useState("");
  const headingRef = useRef(null);
  const doneRef = useRef(null);

  // Keep keyboard and screen-reader users oriented when the form changes under them.
  useEffect(() => {
    if (step === 2) headingRef.current?.focus();
  }, [step]);
  useEffect(() => {
    if (sent) doneRef.current?.focus();
  }, [sent]);

  // Arriving from a pricing button: pre-select the service and name the plan, so nothing has to be re-typed.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const map = { "ai-automation": "ai_automation", "mvp-development": "mvp", "discovery-sprint": "discovery_sprint", support: "support" };
    const type = map[q.get("service")];
    const chosen = q.get("plan");
    if (type) setFormData((prev) => ({ ...prev, projectType: type }));
    if (chosen) setPlan(chosen);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const v = type === "checkbox" ? checked : value;
    if (!started) {
      setStarted(true);
      track("brief_started");
    }
    setFormData((prev) => ({ ...prev, [name]: v }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: type === "checkbox" ? "" : validateField(name, value) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const focusFirst = (errs) => {
    const first = document.getElementById(`f-${Object.keys(errs)[0]}`);
    if (first) first.focus();
  };

  const goStep2 = (e) => {
    e.preventDefault();
    const errs = {};
    for (const key of ["firstname", "email", "msg"]) {
      const err = validateField(key, formData[key]);
      if (err) errs[key] = err;
    }
    if (Object.keys(errs).length) {
      setErrors(errs);
      focusFirst(errs);
      return;
    }
    setErrors({});
    setStep(2);
    track("brief_step_2");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = {};
    const phoneErr = validateField("contactNo", formData.contactNo);
    if (phoneErr) errs.contactNo = phoneErr;
    if (!formData.personalData) errs.personalData = "You must agree to the privacy policy.";
    if (Object.keys(errs).length) {
      setErrors(errs);
      focusFirst(errs);
      return;
    }
    setIsSubmitting(true);
    setErrors({});
    try {
      const { firstname, lastname, contactNo, ...rest } = formData;
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: `${firstname} ${lastname}`.trim(), firstname, lastname, number: contactNo, ...rest, msg: plan ? `[Plan: ${plan}] ${rest.msg}` : rest.msg }),
      });
      if (!response.ok) throw new Error("Server responded with an error.");
      track("brief_sent");
      setSent(true);
      setFormData(FORM_INITIAL_STATE);
    } catch (error) {
      console.error("Submission error:", error);
      setErrors({ submit: "There was an error sending your brief. Please try again, or email contact@jenisys.in." });
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
      <header className="border-b border-line">
        <div className="j-wrap pt-14 pb-12 md:pt-20 md:pb-16">
          <p className="j-eyebrow mb-5">Contact</p>
          <h1 className="j-h1 max-w-4xl !text-[clamp(38px,5vw,64px)]">Tell us what you want to build or automate.</h1>
          <p className="j-lead mt-6">Book a call, or send a brief and we’ll reply with a fixed-price quote.</p>
        </div>
      </header>

      <div className="j-paper">
        <div className="j-wrap grid gap-14 py-14 md:py-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="j-chapter mb-5"><b>01</b> Fastest</p>
            <h2 className="j-h2">Book a free 30-minute call</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-muted">You leave with a clear next step and a price range, even if we’re not the right fit.</p>
            <button
              type="button"
              onClick={() => {
                track("call_opened", { source: "contact" });
                openCalendar();
              }}
              className="j-btn j-btn-primary mt-7"
            >
              Book a free call <span className="j-arrow" aria-hidden="true">→</span>
            </button>

            <dl className="mt-12 border-t border-line">
              {CONTACT_INFO.map((c) => (
                <div key={c.title} className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                  <dt className="text-sm text-ink-muted">{c.title}</dt>
                  <dd className="text-right font-mono text-[15px] text-ink">
                    <a href={c.href} className="inline-block py-1.5 transition-colors duration-150 hover:text-signal">{c.content}</a>
                  </dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-6 border-b border-line py-5">
                <dt className="text-sm text-ink-muted">Offices</dt>
                <dd className="text-right font-mono text-[15px] text-ink">{LOCATIONS.join(" · ")}</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <p className="j-chapter mb-5"><b>02</b> Or send a brief</p>
            <div className="j-panel j-light-edge p-6 md:p-10">
              {sent ? (
                <div role="status" aria-live="polite" ref={doneRef} tabIndex={-1} className="outline-none">
                  <p className="font-display text-3xl font-semibold text-ink">Thanks. We have your brief.</p>
                  <p className="mt-4 text-[17px] leading-relaxed text-ink-muted">We’ll reply by email with next steps. Want to talk sooner? Book a call and we’ll go through it together.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setStep(1);
                      openCalendar();
                    }}
                    className="j-btn j-btn-primary mt-8"
                  >
                    Book a free call <span className="j-arrow" aria-hidden="true">→</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={step === 1 ? goStep2 : handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 ref={headingRef} tabIndex={-1} className="font-display text-2xl font-semibold text-ink outline-none">{step === 1 ? "Your brief" : "A few optional details"}</h3>
                    <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">Step {step} of 2</p>
                  </div>
                  {plan && step === 1 && (
                    <p className="-mt-2 rounded-lg border border-line px-4 py-3 text-[15px] text-ink">
                      You are asking about <strong>{plan}</strong>. Tell us a little about what you need.
                    </p>
                  )}

                  {step === 1 && (
                    <>
                      <Field label="Your name" name="firstname" error={errors.firstname} required>
                        <input {...input("firstname", { type: "text", autoComplete: "name", placeholder: "Your name" })} />
                      </Field>
                      <Field label="Email" name="email" error={errors.email} required>
                        <input {...input("email", { type: "email", autoComplete: "email", placeholder: "you@company.com" })} />
                      </Field>
                      <Field label="What do you need?" name="msg" error={errors.msg} required>
                        <textarea {...input("msg", { rows: 5, placeholder: "What you want to build or automate, in a few sentences." })} />
                      </Field>
                      <button type="submit" className="j-btn j-btn-primary mt-2 w-full sm:w-auto">
                        Continue <span className="j-arrow" aria-hidden="true">→</span>
                      </button>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <p className="-mt-2 text-[15px] text-ink-muted">These help us price faster. Skip any you like.</p>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Company" name="company" error={errors.company}>
                          <input {...input("company", { type: "text", autoComplete: "organization", placeholder: "Your company" })} />
                        </Field>
                        <Field label="Phone" name="contactNo" error={errors.contactNo}>
                          <input {...input("contactNo", { type: "tel", autoComplete: "tel", placeholder: "+1 555 123 4567" })} />
                        </Field>
                        <Field label="Project type" name="projectType" error={errors.projectType}>{select("projectType", PROJECT_TYPES)}</Field>
                        <Field label="Budget" name="budget" error={errors.budget}>{select("budget", BUDGET_RANGES)}</Field>
                        <div className="sm:col-span-2">
                          <Field label="Timeline" name="timeline" error={errors.timeline}>{select("timeline", TIMELINE_OPTIONS)}</Field>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1 border-t border-line pt-5">
                        <label className="flex min-h-[44px] items-start gap-3 text-[15px] text-ink">
                          <input
                            id="f-personalData"
                            type="checkbox"
                            name="personalData"
                            checked={formData.personalData}
                            onChange={handleChange}
                            aria-invalid={errors.personalData ? true : undefined}
                            aria-describedby={errors.personalData ? "f-personalData-err" : undefined}
                            className="mt-0.5 h-5 w-5 shrink-0 accent-[#1652d9]"
                          />
                          <span>I agree that Jenisys may use my details to reply to this brief. <span className="text-signal" aria-hidden="true">*</span></span>
                        </label>
                        {errors.personalData && <p id="f-personalData-err" className="text-sm text-alert">{errors.personalData}</p>}
                        <label className="flex min-h-[44px] items-start gap-3 text-[15px] text-ink-muted">
                          <input id="f-marketing" type="checkbox" name="marketing" checked={formData.marketing} onChange={handleChange} className="mt-0.5 h-5 w-5 shrink-0 accent-[#1652d9]" />
                          <span>Send me occasional updates by email.</span>
                        </label>
                        <p className="mt-1 text-sm text-ink-muted">See our <Link href="/privacy-policy" className="j-link">Privacy Policy</Link>.</p>
                      </div>

                      {errors.submit && <p role="alert" className="text-sm text-alert">{errors.submit}</p>}

                      <div className="flex flex-wrap items-center gap-3">
                        <button type="submit" disabled={isSubmitting} className="j-btn j-btn-primary disabled:opacity-60">
                          {isSubmitting ? "Sending…" : "Send brief"} <span className="j-arrow" aria-hidden="true">→</span>
                        </button>
                        <button type="button" onClick={() => setStep(1)} className="j-btn j-btn-secondary">Back</button>
                      </div>
                    </>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

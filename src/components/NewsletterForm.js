"use client";
import React, { useState } from "react";

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function NewsletterForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name?.trim()) errors.name = "Name is required";
    if (!formData.email?.trim()) errors.email = "Email is required";
    else if (!validateEmail(formData.email)) errors.email = "Please enter a valid email address";
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
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

  const field =
    "w-full rounded-md border border-line bg-deep px-3.5 py-2.5 text-[15px] text-ink placeholder:text-ink-muted/70 focus:outline-none focus:border-signal transition-colors duration-150";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2.5">
      <label htmlFor="nl-name" className="sr-only">Your name</label>
      <input id="nl-name" type="text" placeholder="Your name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} className={field} aria-invalid={!!formErrors.name} />
      {formErrors.name && <p className="text-sm text-alert">{formErrors.name}</p>}
      <div className="flex gap-2">
        <label htmlFor="nl-email" className="sr-only">Your email</label>
        <input id="nl-email" type="email" placeholder="Your email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} className={field} aria-invalid={!!formErrors.email} />
        <button
          type="submit"
          disabled={isSubmitting}
          aria-label="Subscribe to newsletter"
          className="shrink-0 rounded-md border border-ink-muted px-3.5 text-ink transition-colors duration-150 hover:border-signal hover:text-signal disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
        >
          <span className="font-mono" aria-hidden="true">→</span>
        </button>
      </div>
      {formErrors.email && <p className="text-sm text-alert">{formErrors.email}</p>}
      {formErrors.api && <p className="text-sm text-alert">{formErrors.api}</p>}
      {showAlert && <p className="text-sm text-gain" role="status">Thank you for subscribing!</p>}
    </form>
  );
}

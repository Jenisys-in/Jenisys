"use client";

import React, { useState } from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { FileText, Users, Target, Rocket, Briefcase, Mail } from "lucide-react";

export default function StartupPartnership() {
  const [formData, setFormData] = useState({
    founderName: "",
    startupName: "",
    email: "",
    phone: "",
    linkedin: "",
    website: "",
    description: "",
    stage: "",
    funding: "",
    problem: "",
    vision: "",
    whyPartner: "",
    equity: "",
    pitchDeck: null,
    agree: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const res = await fetch("/api/startup-partnership", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          founderName: "",
          startupName: "",
          email: "",
          phone: "",
          linkedin: "",
          website: "",
          description: "",
          stage: "",
          funding: "",
          problem: "",
          vision: "",
          whyPartner: "",
          equity: "",
          pitchDeck: null,
          agree: false,
        });
      } else {
        console.error("Failed to submit application");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    } finally {
      setSubmitting(false);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-slate-900">
      {/* Hero */}
      <section className="bg-sky-700 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold"
        >
          Empowering Startups Through Partnership
        </motion.h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          Are you a startup with a strong vision but limited funding? Jenisys
          partners with select early-stage companies by offering low-cost or
          even zero-cost services in exchange for equity or long-term
          collaboration.
        </p>
        <a
          href="#apply"
          className="mt-6 inline-block bg-white text-sky-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-slate-100"
        >
          Apply for Partnership
        </a>
      </section>

      {/* Why We Partner */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Why We Partner with Startups
          </h2>
          <p className="text-slate-600 mb-4">
            We believe in empowering visionary founders who are building
            solutions that can transform industries. By removing financial
            barriers, we allow you to focus on growth while we handle the
            technical execution.
          </p>
          <p className="text-slate-600">
            Our partnerships are built on trust, shared vision, and long-term
            success. We invest our expertise, resources, and network to help
            your startup reach its full potential.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">What We Offer Startups</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <OfferCard
              icon={<Rocket size={24} />}
              title="MVP at 70% Off"
              desc="Save $100K–$300K on your MVP build with reduced rates."
            />
            <OfferCard
              icon={<Briefcase size={24} />}
              title="Equity Partnerships"
              desc="0% upfront cost for qualifying startups in exchange for equity."
            />
            <OfferCard
              icon={<Users size={24} />}
              title="Technical Mentorship"
              desc="$50K+ in consulting value to guide your technical journey."
            />
            <OfferCard
              icon={<Target size={24} />}
              title="Scalable Architecture"
              desc="Prevent costly rewrites with future-proof architecture."
            />
            <OfferCard
              icon={<FileText size={24} />}
              title="Investor Access"
              desc="Leverage our $2M+ investor network and partnerships."
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">What We Look For</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>Strong founder vision and commitment</li>
            <li>Clear problem with real market demand</li>
            <li>Collaborative and transparent mindset</li>
            <li>Scalable business model with growth potential</li>
          </ul>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="bg-white border-t border-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Apply for Startup Partnership
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                name="founderName"
                label="Founder Name"
                value={formData.founderName}
                onChange={handleChange}
                required
              />
              <Input
                name="startupName"
                label="Startup Name"
                value={formData.startupName}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                name="phone"
                label="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <Input
                name="linkedin"
                label="LinkedIn Profile"
                value={formData.linkedin}
                onChange={handleChange}
              />
              <Input
                name="website"
                label="Startup Website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <TextArea
              name="description"
              label="Describe Your Startup"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <Input
              name="stage"
              label="Stage (Idea / MVP / Revenue)"
              value={formData.stage}
              onChange={handleChange}
              required
            />
            <Input
              name="funding"
              label="Funding Raised So Far"
              value={formData.funding}
              onChange={handleChange}
            />
            <TextArea
              name="problem"
              label="What Problem Are You Solving?"
              value={formData.problem}
              onChange={handleChange}
              required
            />
            <TextArea
              name="vision"
              label="Your Vision in 5 Years"
              value={formData.vision}
              onChange={handleChange}
              required
            />
            <TextArea
              name="whyPartner"
              label="Why Do You Want to Partner with Jenisys?"
              value={formData.whyPartner}
              onChange={handleChange}
              required
            />
            <Input
              name="equity"
              label="Equity You're Willing to Offer"
              value={formData.equity}
              onChange={handleChange}
            />

            <div>
              <label className="block text-sm font-medium mb-2">
                Pitch Deck / Documents
              </label>
              <input
                type="file"
                name="pitchDeck"
                onChange={handleChange}
                accept=".pdf,.ppt,.pptx"
                className="w-full border rounded p-2"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
              />
              <span className="text-sm text-slate-600">
                I agree to Jenisys reviewing my submitted information for
                partnership consideration.
              </span>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="bg-sky-700 text-white px-6 py-3 rounded-lg hover:bg-sky-800"
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>

            {success && (
              <div className="text-green-600 text-sm mt-2">
                Application submitted successfully!
              </div>
            )}
          </form>
        </div>
      </section>
      {/* Footer Component */}
      <Footer />
    </main>
  );
}

function OfferCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 border border-slate-100">
      <div className="text-sky-700 mb-3">{icon}</div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-slate-600 text-sm">{desc}</p>
    </div>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border rounded p-2"
      />
    </div>
  );
}

function TextArea({ label, name, value, onChange, required = false }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={4}
        className="w-full border rounded p-2"
      ></textarea>
    </div>
  );
}

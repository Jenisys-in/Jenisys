"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Briefcase, Users, MapPin } from "lucide-react";
import Footer from "../Footer";

/**
 * Jenisys - Careers Page
 * - Next.js + Tailwind single-file React component
 * - Designed to be dropped into `app/careers/page.js` or used as a standalone component
 * - Shows a clean hero, benefits, culture section, FAQ, and a "No current openings" state
 * - Includes a "Join Talent Pool" modal (resume upload) to collect candidate interest when there
 *   are no active roles.
 *
 * Notes for integration:
 * - Add this component into your Next.js `app` route or as a page component.
 * - Ensure Tailwind is configured and lucide-react + framer-motion are installed (optional but recommended).
 */

export default function CareersPage() {
  // openings would normally be fetched from an API. For now we show empty state.
  const [openings] = useState([]); // empty indicates "no openings"
  const [isModalOpen, setModalOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    resume: null,
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e) => {
    setForm((f) => ({ ...f, resume: e.target.files?.[0] ?? null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSending(true);

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    if (form.resume) {
      formData.append("resume", form.resume);
    }

    try {
      const response = await fetch("/api/talent-pool", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", resume: null, message: "" });
        setTimeout(() => {
          setSuccess(false);
          setModalOpen(false);
        }, 1800);
      } else {
        // Handle server errors or invalid responses
        console.error("Failed to submit to talent pool.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-slate-900">
      <header className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Careers at Jenisys
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              We build delightful software and meaningful products. Right now we
              don’t have active openings, but we’re always excited to meet
              talented people. Join our talent pool and be the first to hear
              about new roles.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md shadow-md"
              >
                <Mail size={16} /> Join Talent Pool
              </button>

              <a
                href="#benefits"
                className="inline-flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-md text-slate-700 hover:bg-white"
              >
                <Users size={16} /> Why Jenisys
              </a>
            </div>

            <div className="mt-6 text-sm text-slate-500">
              <span className="font-medium">Location:</span> Remote-friendly •
              Offices in India
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-md border border-slate-100"
          >
            <h3 className="text-sm font-medium text-slate-600">Open Roles</h3>

            {/* Empty list UI */}
            {openings.length === 0 ? (
              <div className="mt-6 text-center py-10">
                <Briefcase size={48} className="mx-auto text-slate-300" />
                <h4 className="mt-4 text-xl font-semibold">
                  No current openings
                </h4>
                <p className="mt-2 text-sm text-slate-500 max-w-[36ch] mx-auto">
                  We’re not hiring at the moment — but we’re growing. If you'd
                  like to join Jenisys, share your details and resume and we’ll
                  reach out when a suitable role appears.
                </p>

                <div className="mt-6">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md"
                  >
                    <Mail size={16} /> Join Talent Pool
                  </button>
                </div>
              </div>
            ) : (
              // If there were openings we would render them here
              <ul className="divide-y divide-slate-100 mt-4">
                {openings.map((job) => (
                  <li
                    key={job.id}
                    className="py-4 flex items-start justify-between"
                  >
                    <div>
                      <h4 className="font-medium">{job.title}</h4>
                      <p className="text-sm text-slate-500">
                        {job.location} • {job.type}
                      </p>
                    </div>
                    <a
                      className="text-sky-600 hover:underline"
                      href={`#/jobs/${job.id}`}
                    >
                      View
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 text-xs text-slate-400">
              Last updated: August 10, 2025
            </div>
          </motion.div>
        </div>
      </header>

      <section id="benefits" className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold">Why work at Jenisys?</h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            We partner with startups and enterprises to build reliable products.
            Our team values ownership, learning, and a friendly environment
            where engineers and product minds collaborate closely.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              icon={<Users size={20} />}
              title="Collaborative Teams"
              desc="Small cross-functional teams focused on impact."
            />
            <Card
              icon={<MapPin size={20} />}
              title="Flexible Locations"
              desc="Remote-first with periodic in-person meetups."
            />
            <Card
              icon={<Briefcase size={20} />}
              title="Growth & Learning"
              desc="Learning budget, mentorship, and conference support."
            />
            <Card
              icon={<Mail size={20} />}
              title="Transparent Communication"
              desc="Open planning, regular feedback cycles."
            />
          </div>
        </motion.div>
      </section>

      <section className="bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold">Benefits & Perks</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>Competitive compensation</li>
              <li>Flexible hours & remote-friendly</li>
              <li>Health & wellness allowances</li>
              <li>Learning & conference budget</li>
              <li>Equity options for senior hires</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Our Culture</h3>
            <p className="mt-3 text-slate-600">
              We celebrate curiosity and favour pragmatic engineering. Expect
              clear ownership, asynchronous communication, and a focus on
              shipping reliable, maintainable code.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <blockquote className="p-4 border rounded-lg text-sm text-slate-700">
                "I joined Jenisys and immediately felt the difference —
                ownership and trust are real."
                <div className="mt-2 text-xs text-slate-500">
                  — S. Gupta, Senior Engineer
                </div>
              </blockquote>

              <blockquote className="p-4 border rounded-lg text-sm text-slate-700">
                "Great mentorship and a learning-friendly environment."
                <div className="mt-2 text-xs text-slate-500">
                  — A. Roy, Product
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-xl font-semibold">Frequently asked</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FaqItem
            q="How do I apply?"
            a="If roles are posted, use the 'Apply' button on the job. When there are no roles, join the Talent Pool."
          />
          <FaqItem
            q="Do you hire remotely?"
            a="Yes — we’re remote-first. Some roles may require overlap with IST timezones."
          />
          <FaqItem
            q="What’s the hiring process?"
            a="Screen → Take-home/Pairing → Final interviews → Offer."
          />
          <FaqItem
            q="Do you sponsor visas?"
            a="We evaluate case-by-case for senior hires."
          />
        </div>
      </section>

      <Footer />

      {/* Talent Pool Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/40">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-semibold">
                  Join Jenisys Talent Pool
                </h4>
                <p className="text-sm text-slate-500">
                  Share your resume and we’ll reach out when we have fits.
                </p>
              </div>

              <button
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  placeholder="Full name"
                  className="w-full border p-3 rounded-md"
                  required
                />
                <input
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  placeholder="Email address"
                  type="email"
                  className="w-full border p-3 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-slate-600 mb-2">
                  Resume (optional)
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full"
                />
                {form.resume && (
                  <div className="text-xs mt-2 text-slate-500">
                    Selected: {form.resume.name}
                  </div>
                )}
              </div>

              <textarea
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                placeholder="A short note (optional)"
                className="w-full border p-3 rounded-md"
                rows={4}
              />

              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-500">
                  We’ll keep your data private and contact you if there’s a
                  match.
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md"
                  >
                    {sending ? "Sending..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>

            {success && (
              <div className="mt-3 text-sm text-green-600">
                Thanks — we got your details!
              </div>
            )}
          </motion.div>
        </div>
      )}
    </main>
  );
}

/* -------------------- Helper components -------------------- */
function Card({ icon, title, desc }) {
  return (
    <div className="bg-white border rounded-2xl p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-sm text-slate-500">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border rounded-lg p-4">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left flex items-center justify-between"
      >
        <div>
          <div className="font-medium">{q}</div>
          <div className="text-sm text-slate-500 mt-1">
            {open ? "Hide" : "Show"}
          </div>
        </div>
        <div className="text-slate-400">{open ? "−" : "+"}</div>
      </button>
      {open && <div className="mt-3 text-sm text-slate-600">{a}</div>}
    </div>
  );
}

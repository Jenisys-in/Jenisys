"use client";
import { useState } from "react";

const field =
  "w-full rounded-lg border border-line bg-deep px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/60 transition-colors duration-150 focus:outline-none focus:border-signal";

export default function TalentPoolForm() {
  const [form, setForm] = useState({ name: "", email: "", resume: null, message: "" });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSending(true);
    setError("");
    const data = new FormData();
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("message", form.message);
    if (form.resume) data.append("resume", form.resume);
    try {
      const res = await fetch("/api/talent-pool", { method: "POST", body: data });
      if (!res.ok) throw new Error("Request failed");
      setSuccess(true);
      setForm({ name: "", email: "", resume: null, message: "" });
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("There was an error submitting your details. Please try again.");
    } finally {
      setSending(false);
    }
  };

  if (success) {
    return (
      <div role="status" className="py-10">
        <p className="font-display text-2xl font-semibold text-ink">Thanks — we got your details!</p>
        <button type="button" onClick={() => setSuccess(false)} className="j-btn j-btn-secondary mt-6">
          Close
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="sr-only" htmlFor="tp-name">Full name</label>
        <input id="tp-name" className={field} value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="Full name" autoComplete="name" required />
        <label className="sr-only" htmlFor="tp-email">Email address</label>
        <input id="tp-email" className={field} value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="Email address" type="email" autoComplete="email" required />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="tp-resume" className="text-sm text-ink">Resume (optional)</label>
        <input
          id="tp-resume"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setForm((f) => ({ ...f, resume: e.target.files?.[0] ?? null }))}
          className="text-sm text-ink-muted file:mr-4 file:rounded-md file:border file:border-line file:bg-raised file:px-4 file:py-2 file:text-ink hover:file:border-signal"
        />
        {form.resume && <p className="font-mono text-xs text-ink-muted">Selected: {form.resume.name}</p>}
      </div>
      <label className="sr-only" htmlFor="tp-msg">A short note (optional)</label>
      <textarea id="tp-msg" className={field} value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} placeholder="A short note (optional)" rows={4} />
      <p className="text-xs text-ink-muted">We’ll keep your data private and contact you if there’s a match.</p>
      {error && <p role="alert" className="text-sm text-alert">{error}</p>}
      <button type="submit" disabled={sending} className="j-btn j-btn-primary self-start disabled:opacity-60">
        {sending ? "Sending..." : "Submit"} {!sending && <span className="j-arrow">→</span>}
      </button>
    </form>
  );
}

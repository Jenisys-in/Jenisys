import Link from "next/link";
import CalendarButton from "./CalendarButton";

// Closing call to action. Copy is verbatim from the previous coffee and beer banners.
export default function CallBanner() {
  return (
    <section id="contact" className="j-night relative isolate overflow-hidden border-t border-line py-24 md:py-32" aria-labelledby="call-title">
      <div
        aria-hidden="true"
        className="absolute -z-10 left-1/2 top-full h-[640px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-70"
        style={{ background: "radial-gradient(closest-side, rgba(20,226,249,.22), rgba(27,42,160,.35) 50%, transparent)" }}
      />
      <div className="j-wrap text-left md:text-center">
        <p className="j-eyebrow mb-4">Your next step</p>
        <h2 id="call-title" className="j-h2 mx-auto max-w-3xl">Book a free 30-minute call</h2>
        <p className="j-lead mx-auto mt-5">Tell us what you want to build or automate. You’ll leave with a clear next step and a price range, even if we’re not the right fit.</p>
        <div className="mt-10 flex flex-wrap gap-3 md:justify-center">
          <CalendarButton className="j-btn j-btn-primary">
            Book a free call <span className="j-arrow">→</span>
          </CalendarButton>
          <Link href="/contact" className="j-btn j-btn-secondary">Start a Project</Link>
        </div>
        <p className="mt-10 font-mono text-[13px] text-ink-muted">Schedule a free call over a cup of coffee · Offices in Atlanta and Kolkata</p>
      </div>
    </section>
  );
}

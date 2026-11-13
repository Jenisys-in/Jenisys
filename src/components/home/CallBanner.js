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
        <h2 id="call-title" className="j-h2 mx-auto max-w-3xl">Schedule a free call over a cup of coffee</h2>
        <p className="mx-auto mt-5 max-w-xl text-[17px] text-ink-muted">Don&apos;t like coffee? Let&apos;s schedule a free call over a beer</p>
        <div className="mt-10 flex flex-wrap gap-3 md:justify-center">
          <Link href="/contact" className="j-btn j-btn-primary">
            Start a Project <span className="j-arrow">→</span>
          </Link>
          <CalendarButton className="j-btn j-btn-secondary">Schedule a call</CalendarButton>
        </div>
        <p className="mt-10 font-mono text-[13px] text-ink-muted">Government &amp; enterprise clients · Australia &amp; US — open worldwide</p>
      </div>
    </section>
  );
}

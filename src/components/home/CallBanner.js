import Link from "next/link";
import { LineStraight } from "../ui-brand/Line";
import Cta from "../ui-brand/Cta";

// Closing chapter: the Line runs straight to the action. Copy carried over from the previous banner.
export default function CallBanner({ n = "" }) {
  return (
    <section id="contact" className="j-night relative isolate overflow-hidden border-t border-line j-section" aria-labelledby="call-title">
      <div
        aria-hidden="true"
        className="absolute -z-10 left-1/2 top-full h-[640px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-60"
        style={{ background: "radial-gradient(closest-side, rgba(20,226,249,.2), rgba(27,42,160,.35) 50%, transparent)" }}
      />
      <div className="j-wrap">
        {n ? <p className="j-chapter mb-5"><b>{n}</b> Next step</p> : <p className="j-eyebrow mb-5">Next step</p>}
        <h2 id="call-title" className="j-h2 max-w-3xl">Book a free 30-minute call</h2>
        <p className="j-lead mt-5">Tell us what you want to build or automate. You’ll leave with a clear next step and a price range, even if we’re not the right fit.</p>
        <LineStraight className="mt-10 max-w-3xl" />
        <Cta className="mt-8" note={false} source="closing" />
        <p className="mt-6 flex flex-wrap items-center gap-x-3 font-mono text-[13px] text-ink-muted">
          <span>Prefer to write? <Link href="/contact" className="j-link inline-block py-3">Send a brief</Link></span> <span aria-hidden="true">·</span> <span>Offices in Atlanta and Kolkata</span>
        </p>
      </div>
    </section>
  );
}

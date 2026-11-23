"use client";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { attribution, signal, visitorId } from "@/lib/visitor";
import { track } from "@/lib/track";

// Booking dialog: native <dialog> gives focus trapping, Escape to close and an inert background.
// Scheduler URL is unchanged from the previous modal (set NEXT_PUBLIC_BOOKING_URL to switch accounts).
const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendly.com/tuhindas2724/30min";

// Calendly only reports a finished booking to the page when it knows it is embedded.
function embedUrl() {
  try {
    const u = new URL(BOOKING_URL);
    u.searchParams.set("embed_domain", window.location.host);
    u.searchParams.set("embed_type", "Inline");
    return u.toString();
  } catch {
    return BOOKING_URL;
  }
}

export default function CalendarModal({ isOpen, onClose }) {
  const ref = useRef(null);

  // A booked call becomes a lead (verified on the server) and a buying signal.
  useEffect(() => {
    const onMessage = (e) => {
      if (e.origin !== "https://calendly.com" || e.data?.event !== "calendly.event_scheduled") return;
      const p = e.data.payload || {};
      track("call_booked");
      signal("booking_completed");
      fetch("/api/booking", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ inviteeUri: p.invitee?.uri, eventUri: p.event?.uri, visitorId: visitorId(), attribution: attribution() }),
        keepalive: true,
      }).catch(() => {});
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (isOpen && !d.open) d.showModal();
    if (!isOpen && d.open) d.close();
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="booking-title"
      className="j-dialog j-paper m-auto w-[min(92vw,760px)] overflow-hidden rounded-2xl border border-line p-0 shadow-2xl"
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <h2 id="booking-title" className="font-display text-lg font-semibold text-ink">Book a free 30-minute call</h2>
        <button type="button" onClick={onClose} aria-label="Close" className="rounded-md p-2 text-ink-muted hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
          <X size={20} />
        </button>
      </div>
      {isOpen && (
        <iframe title="Choose a time" src={embedUrl()} className="block h-[min(70vh,640px)] w-full bg-white" loading="lazy" />
      )}
    </dialog>
  );
}

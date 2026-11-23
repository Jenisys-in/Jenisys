"use client";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { attribution, signal, visitorId } from "@/lib/visitor";
import { track } from "@/lib/track";

// Booking dialog: native <dialog> gives focus trapping, Escape to close and an inert background.
// The calendar is Cal.com's official inline embed. Its script loads only when someone opens this dialog.
// Bookings reach the CRM through Cal.com's signed webhook (/api/booking/cal), not through the browser.
// NEXT_PUBLIC_CAL_LINK switches the booking page without a code change.

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || "jenisys-info-slhbij/30min";
const CAL_PAGE = `https://cal.com/${CAL_LINK}`;
const NS = "jenisys";
const ELEMENT_ID = "jenisys-cal-inline";

// Cal.com's standard embed loader (from their embed generator): queues calls until embed.js has loaded.
function loadCal() {
  if (window.Cal) return window.Cal;
  (function (C, A, L) {
    const p = function (a, ar) { a.q.push(ar); };
    const d = C.document;
    C.Cal = C.Cal || function () {
      const cal = C.Cal;
      const ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");
  window.Cal("init", NS, { origin: "https://app.cal.com" });
  return window.Cal;
}

export default function CalendarModal({ isOpen, onClose }) {
  const ref = useRef(null);
  const [fallback, setFallback] = useState(false);

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

  useEffect(() => {
    if (!isOpen) return;
    setFallback(false);
    const Cal = loadCal();
    const api = Cal.ns?.[NS];
    if (!api) return;

    // Hidden fields that come back in the webhook (payload.metadata), so the booking joins the visitor's history.
    // Present only when the visitor accepted cookies.
    const config = { layout: "month_view" };
    const vid = visitorId();
    const a = attribution();
    if (vid) config["metadata[vid]"] = vid;
    if (a?.source) config["metadata[source]"] = String(a.source).slice(0, 100);
    if (a?.landing) config["metadata[landing]"] = String(a.landing).slice(0, 200);
    if (a?.ref) config["metadata[ref]"] = a.ref;
    if (a?.utm?.utm_campaign) config["metadata[campaign]"] = String(a.utm.utm_campaign).slice(0, 100);

    api("inline", { elementOrSelector: `#${ELEMENT_ID}`, calLink: CAL_LINK, config });
    api("ui", { hideEventTypeDetails: false, layout: "month_view" });

    let booked = false;
    const onBooked = () => {
      if (booked) return;
      booked = true;
      track("call_booked");
      signal("booking_completed");
    };
    api("on", { action: "bookingSuccessfulV2", callback: onBooked });
    api("on", { action: "bookingSuccessful", callback: onBooked });

    // If the calendar has not appeared after 8 seconds (blocked script, slow network), offer the direct link.
    const t = setTimeout(() => {
      if (!document.querySelector(`#${ELEMENT_ID} iframe`)) setFallback(true);
    }, 8000);
    return () => {
      clearTimeout(t);
      try { api("off", { action: "bookingSuccessfulV2", callback: onBooked }); api("off", { action: "bookingSuccessful", callback: onBooked }); } catch {}
    };
  }, [isOpen]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="booking-title"
      className="j-dialog j-paper m-auto w-[min(92vw,960px)] overflow-hidden rounded-2xl border border-line p-0 shadow-2xl"
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <h2 id="booking-title" className="font-display text-lg font-semibold text-ink">Book a free 30-minute call</h2>
        <button type="button" onClick={onClose} aria-label="Close" className="rounded-md p-2 text-ink-muted hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
          <X size={20} />
        </button>
      </div>
      {isOpen && (
        <div className="relative h-[min(75vh,680px)] overflow-y-auto bg-white">
          <div id={ELEMENT_ID} className="min-h-full w-full" />
          {fallback && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white p-6 text-center">
              <p className="text-ink-muted">The calendar is taking a while to load.</p>
              <a href={CAL_PAGE} target="_blank" rel="noopener noreferrer" className="j-btn j-btn-primary" onClick={() => track("call_opened")}>
                Open the booking page <span aria-hidden="true">→</span>
              </a>
            </div>
          )}
        </div>
      )}
      <p className="border-t border-line px-5 py-2 text-center text-[12px] text-ink-muted">
        Calendar not showing?{" "}
        <a href={CAL_PAGE} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ink">Open it in a new tab</a>
      </p>
    </dialog>
  );
}

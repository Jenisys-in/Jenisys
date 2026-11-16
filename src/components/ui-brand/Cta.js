import Link from "next/link";
import CalendarButton from "../home/CalendarButton";

// One primary action everywhere: Book a free call. Secondary: Send a brief.
export default function Cta({ className = "", note = true, align = "start", primaryLabel = "Book a free call", source }) {
  return (
    <div className={className}>
      <div className={`flex flex-wrap gap-3 ${align === "center" ? "md:justify-center" : ""}`}>
        <CalendarButton className="j-btn j-btn-primary" source={source}>
          {primaryLabel} <span className="j-arrow" aria-hidden="true">→</span>
        </CalendarButton>
        <Link href="/contact" className="j-btn j-btn-secondary">Send a brief</Link>
      </div>
      {note && <p className={`mt-4 text-[14px] text-ink-muted ${align === "center" ? "md:text-center" : ""}`}>30 minutes. You leave with a price range, even if we’re not the right fit.</p>}
    </div>
  );
}

"use client";
import { useCalendar } from "@/contexts/CalendarContext";
import { track } from "@/lib/track";

export default function CalendarButton({ children, className = "", source }) {
  const { openCalendar } = useCalendar();
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        track("call_opened", source ? { source } : undefined);
        openCalendar();
      }}
    >
      {children}
    </button>
  );
}

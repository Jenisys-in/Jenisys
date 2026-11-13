"use client";
import { useCalendar } from "@/contexts/CalendarContext";

export default function CalendarButton({ children, className = "" }) {
  const { openCalendar } = useCalendar();
  return (
    <button type="button" onClick={openCalendar} className={className}>
      {children}
    </button>
  );
}

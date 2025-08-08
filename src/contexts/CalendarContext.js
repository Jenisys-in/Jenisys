"use client";

import { createContext, useContext, useState } from "react";

const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const openCalendar = () => setIsCalendarOpen(true);
  const closeCalendar = () => setIsCalendarOpen(false);

  return (
    <CalendarContext.Provider
      value={{ isCalendarOpen, openCalendar, closeCalendar }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (context === undefined) {
    throw new Error("useCalendar must be used within a CalendarProvider");
  }
  return context;
};

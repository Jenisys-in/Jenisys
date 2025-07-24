"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const { pathname } = usePathname();

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      // Fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
"use client";
import { useEffect } from "react";
import { track } from "@/lib/track";

// Fires one conversion-funnel event when the pricing page is viewed.
export default function PricingViewed() {
  useEffect(() => {
    track("pricing_viewed");
  }, []);
  return null;
}

"use client";

import React, { useState, useEffect } from "react";

const CalendarModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0F172A] bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl w-[90%] max-w-3xl shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold"
        >
          &times;
        </button>
        <div className="w-full h-[600px]">
          <iframe
            src="https://calendly.com/jenisysinfo/discovery-call" // Replace with your actual Calendly or booking link
            width="100%"
            height="100%"
            frameBorder="0"
            className="rounded-xl"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;

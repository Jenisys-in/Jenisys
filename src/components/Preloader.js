import React, { useState, useEffect, useRef } from "react";

const Preloader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        setVideoError(true);
      });
    }
  }, []);

  useEffect(() => {
    const handlePageLoad = () => {
      // Start fade out
      const preloaderElement = document.getElementById("preloader");
      if (preloaderElement) {
        preloaderElement.style.opacity = "0";
      }
      // After fade out, hide and call onComplete
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 500); // Match this with transition duration
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      id="preloader"
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center transition-opacity duration-500"
    >
      <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden">
        {videoError ? (
          <img
            src="/logo1.png"
            alt="Jenisys Logo"
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
          >
            <source src="/preloader.webm" type="video/webm" />
            <source src="/preloader.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <h1 className="text-3xl sm:text-4xl font-thin text-white tracking-[0.3em] mt-8">
        JENISYS
      </h1>
    </div>
  );
};

export default Preloader;

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

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
          <div className="preloader-logo-wrapper">
            <Image
              src="/logo1.png"
              alt="Jenisys Logo"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
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

      <div className="flex items-center space-x-3 mb-16">
        <div className="flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-white/60 rounded-full animate-pulseDot"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
        <span className="text-xs text-white/40 font-mono tracking-[0.2em] ml-6">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Preloader;

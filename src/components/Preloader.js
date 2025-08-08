import React, { useState, useEffect, useRef } from "react";

const Preloader = ({ onComplete, minDuration = 2000 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented. The preloader will simply timeout.
        });
      }
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 400);
    }, minDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [onComplete, minDuration]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black z-50 transition-opacity duration-400 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Subtle animated grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full animate-pulse"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Video container - more minimal */}
        <div className="relative mb-16">
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/5 bg-gray-950">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/Colorful Modern Infinity Technology Free Logo-4.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onError={(e) => console.error("Video failed to load:", e)}
            />
          </div>
          {/* Subtle glow */}
          <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent rounded-2xl -z-10 blur-sm"></div>
        </div>

        {/* Brand name */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-thin text-white tracking-[0.3em] mb-2">
            JENISYS
          </h1>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto"></div>
        </div>

        {/* Minimal loading dots */}
        <div className="flex items-center space-x-3 mb-16">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-white/60 rounded-full"
                style={{
                  animation: `pulse 1.4s ease-in-out infinite ${i * 0.2}s`,
                }}
              />
            ))}
          </div>
          <span className="text-xs text-white/40 font-mono tracking-[0.2em] ml-6">
            INITIALIZING
          </span>
        </div>

        {/* Skip button - more subtle */}
        <button
          onClick={() => {
            setFadeOut(true);
            setTimeout(() => {
              setIsVisible(false);
              onComplete?.();
            }, 400);
          }}
          className="absolute bottom-8 right-8 text-xs text-white/30 hover:text-white/60 transition-colors duration-300 font-mono tracking-wide uppercase"
        >
          Skip →
        </button>

        {/* Version */}
        <div className="absolute bottom-6 left-8 text-xs text-white/20 font-mono">
          v2.1.0
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
        @keyframes pulse {
          0%,
          80%,
          100% {
            opacity: 0.2;
          }
          40% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;

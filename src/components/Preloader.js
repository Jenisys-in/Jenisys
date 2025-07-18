import React, { useState, useEffect } from "react";

const Preloader = ({ onComplete, minDuration = 2000 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Realistic loading progress simulation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // More realistic progress increments
        return prev + Math.random() * 8 + 2;
      });
    }, 150);

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 600);
    }, minDuration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onComplete, minDuration]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 flex flex-col justify-center items-center bg-gray-950 z-50 transition-opacity duration-600 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center space-y-12">
        {/* Video container with professional styling */}
        <div className="relative">
          {/* Subtle glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-lg blur-sm"></div>
          
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-hidden rounded-lg border border-gray-800 shadow-2xl bg-gray-900">
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              muted 
              loop 
              playsInline
              preload="auto"
              onError={(e) => console.error('Video failed to load:', e)}
            >
              <source
                src="/Colorful Modern Infinity Technology Free Logo-4.mp4"
                type="video/mp4"
              />
              <div className="flex items-center justify-center h-full text-gray-400">
                Loading assets...
              </div>
            </video>
          </div>
        </div>

        {/* Loading information */}
        <div className="text-center space-y-6 max-w-md">
          <div className="space-y-2">
            <h2 className="text-xl font-light text-gray-200 tracking-wide">
              Initializing Application
            </h2>
            <p className="text-sm text-gray-500 font-mono">
              Loading core modules and dependencies
            </p>
          </div>
          
          {/* Professional progress bar */}
          <div className="space-y-2">
            <div className="w-80 h-0.5 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            
            <div className="flex justify-between items-center text-xs text-gray-500 font-mono">
              <span>Status: Active</span>
              <span>{Math.round(Math.min(progress, 100))}%</span>
            </div>
          </div>

          {/* Loading states */}
          <div className="text-xs text-gray-600 font-mono space-y-1">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
              <span>
                {progress < 30 ? 'Loading assets...' :
                 progress < 60 ? 'Initializing components...' :
                 progress < 90 ? 'Establishing connections...' :
                 'Ready'}
              </span>
            </div>
          </div>
        </div>

        {/* Minimalist loading indicator */}
        <div className="flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1.4s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Professional skip option */}
      <button
        onClick={() => {
          setFadeOut(true);
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 600);
        }}
        className="absolute bottom-8 right-8 px-3 py-1.5 text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200 font-mono tracking-wide border border-gray-800 rounded hover:border-gray-700 bg-gray-900/50 backdrop-blur-sm"
      >
        Skip Loading
      </button>

      {/* Version/Build info (optional) */}
      <div className="absolute bottom-4 left-4 text-xs text-gray-700 font-mono">
        v2.1.0
      </div>
    </div>
  );
};

export default Preloader;
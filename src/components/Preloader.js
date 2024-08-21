// Preloader.jsx
import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
      <div className="w-1/2 h-auto ">
        <video className="w-full h-full object-cover" autoPlay muted loop preload="auto">
          <source
            src="/Colorful Modern Infinity Technology Free Logo-4.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Preloader;

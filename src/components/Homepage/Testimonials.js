"use client";

import React, { useMemo } from "react";
import { useSwipeable } from "react-swipeable";
import { Star, User } from "lucide-react";

const TestimonialCard = ({ testimonial, index, isVisible }) => {
  const cardStyle = useMemo(
    () => ({
      transitionDelay: `${index * 150}ms`,
      backfaceVisibility: "hidden",
      perspective: "1000px",
    }),
    [index]
  );

  const starElements = useMemo(
    () =>
      [...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          fill="currentColor"
          className="drop-shadow-sm"
        />
      )),
    []
  );

  return (
    <div
      className={`
        bg-gradient-to-br from-gray-900 to-gray-800 
        border border-gray-700/50 
        rounded-2xl p-6 md:p-8 
        shadow-2xl 
        h-full flex flex-col justify-between
        transform transition-all duration-500 ease-out
        hover:shadow-3xl hover:border-gray-600/50
        will-change-transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={cardStyle}
    >
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full shadow-lg">
            <User className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-base md:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {testimonial.name}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 font-medium">
              {testimonial.title}
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-2 -top-2 text-4xl text-blue-500/20 font-serif">
            "
          </div>
          <p className="text-sm md:text-lg 3xl:text-xl leading-relaxed mb-4 text-gray-100 relative z-10 pl-4">
            {testimonial.quote}
          </p>
          <div className="absolute -right-2 -bottom-6 text-4xl text-blue-500/20 font-serif rotate-180">
            "
          </div>
        </div>
      </div>
      <div className="flex gap-1 text-yellow-400 mt-4">{starElements}</div>
    </div>
  );
};

TestimonialCard.displayName = "TestimonialCard";

const Testimonials = ({
  testimonials,
  slideStates,
  goToSlide,
  isVisible,
  maxSlides,
  visibleTestimonials,
}) => {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goToSlide(slideStates.currentSlide + 1),
    onSwipedRight: () => goToSlide(slideStates.currentSlide - 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section
      id="testimonials-section"
      className="bg-black w-full px-4 md:px-16 py-20 text-white font-['Montserrat'] overflow-hidden"
    >
      <div className="text-center mb-16">
        <h2 className="text-[14px] md:text-[32px] font-bold uppercase tracking-widest mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Testimonials
          </span>
        </h2>
        <p className="text-[16px] md:text-[24px] 3xl:text-[32px] font-semibold mt-4 max-w-4xl mx-auto text-gray-300 leading-relaxed">
          Real stories from our clients showcasing our dedication to impactful,
          high-performance solutions.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div
          {...swipeHandlers}
          className="grid gap-6 md:gap-8 transition-all duration-700 ease-out cursor-grab"
          style={{
            gridTemplateColumns: `repeat(${slideStates.slidesToShow}, 1fr)`,
            transform: "translateZ(0)",
          }}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${slideStates.currentSlide}-${index}`}
              testimonial={testimonial}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-3">
          {Array.from({ length: maxSlides + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
              w-3 h-3 rounded-full transition-all duration-300 ease-out
              ${
                slideStates.currentSlide === index
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg"
                  : "bg-gray-600 hover:bg-gray-500"
              }
            `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

Testimonials.displayName = "Testimonials";

export default Testimonials;

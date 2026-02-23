"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Users,
  Calendar,
  ArrowRight,
  X,
  ExternalLink,
} from "lucide-react";

const CaseStudies = ({
  caseStudies,
  slideStates,
  uiStates,
  setUIStates,
  prevSlide,
  nextSlide,
  goToCaseSlide,
  handleDragEnd,
  carouselRef,
  controls,
  dragControls,
  maxIndex,
  totalSlides,
  containerRef,
  sectionOpacity,
  backgroundElements,
}) => {
  return (
    <motion.section
      ref={containerRef}
      style={{ opacity: sectionOpacity }}
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-[#F9FAFB] font-['Inter'] relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundElements}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#4F46E5]/8 rounded-full text-sm font-medium text-[#4F46E5] mb-4 sm:mb-6"
        >
          <TrendingUp className="w-4 h-4" />
          Case Studies
        </motion.div>

        <h2 className="text-[30px] sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 tracking-tight px-4">
          <span className="text-[#111827]">
            Proven Impact
          </span>
          <br />
          <span className="text-[#4F46E5]">
            Through Innovation
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="text-[#374151] max-w-2xl mx-auto text-base sm:text-lg leading-[1.65] px-4"
        >
          Discover how we've transformed businesses across industries with
          cutting-edge technology solutions.
        </motion.p>
      </motion.div>

      {/* Cards Grid — centered */}
      <div className="max-w-5xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-4 pb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{
                duration: 0.25,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
              onHoverStart={() =>
                setUIStates((prev) => ({
                  ...prev,
                  hoveredCard: study.id,
                }))
              }
              onHoverEnd={() =>
                setUIStates((prev) => ({ ...prev, hoveredCard: null }))
              }
              className="group relative cursor-pointer will-change-transform"
              onClick={() =>
                setUIStates((prev) => ({
                  ...prev,
                  activeStudy: study,
                }))
              }
            >
              {/* Glow effect */}
              <motion.div
                className={`absolute -inset-2 bg-gradient-to-r ${study.color} rounded-3xl blur-lg opacity-0 transition-opacity duration-500`}
                animate={{
                  opacity: uiStates.hoveredCard === study.id ? 0.15 : 0,
                  scale: uiStates.hoveredCard === study.id ? 1.05 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />

              {/* Card */}
              <div className="relative bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,.08)] transition-all duration-500 h-full">
                {/* Header */}
                <div
                  className={`relative h-40 lg:h-48 bg-gradient-to-br ${study.color} flex items-center justify-center overflow-hidden`}
                >
                  <motion.div
                    animate={{
                      rotate: uiStates.hoveredCard === study.id ? 360 : 0,
                      scale: uiStates.hoveredCard === study.id ? 1.1 : 1,
                    }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    className="text-white/90 text-4xl lg:text-6xl font-bold select-none"
                  >
                    {study.initial}
                  </motion.div>

                  <div className="absolute top-3 left-3 lg:top-4 lg:left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700">
                    {study.industry}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 lg:p-8">
                  <h3 className="text-lg lg:text-xl font-semibold text-[#111827] mb-3 transition-colors duration-200 line-clamp-2">
                    {study.title}
                  </h3>

                  <p className="text-[#374151] text-sm leading-[1.65] mb-6 line-clamp-3">
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 text-xs text-slate-500 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <TrendingUp className="w-3 h-3 flex-shrink-0" />
                      </div>
                      <div className="font-semibold text-slate-700 text-sm">
                        {study.metrics.improvement}
                      </div>
                      <div className="text-xs opacity-75">Impact</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Users className="w-3 h-3 flex-shrink-0" />
                      </div>
                      <div className="font-semibold text-slate-700 text-sm">
                        {study.metrics.scale}
                      </div>
                      <div className="text-xs opacity-75">Scale</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Calendar className="w-3 h-3 flex-shrink-0" />
                      </div>
                      <div className="font-semibold text-slate-700 text-sm">
                        {study.metrics.timeline}
                      </div>
                      <div className="text-xs opacity-75">Timeline</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-center gap-2 text-sm font-medium text-[#4F46E5] group-hover:text-[#3730A3] transition-colors duration-300">
                    <span>Read Full Case Study</span>
                    <motion.div
                      animate={{
                        x: uiStates.hoveredCard === study.id ? 4 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence mode="wait">
        {uiStates.activeStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() =>
              setUIStates((prev) => ({ ...prev, activeStudy: null }))
            }
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white max-w-4xl w-full rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.05, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                onClick={() =>
                  setUIStates((prev) => ({ ...prev, activeStudy: null }))
                }
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:text-slate-800 shadow-lg transition-colors duration-200"
                aria-label="Close case study details"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>

              {/* Header */}
              <div
                className={`relative h-48 sm:h-64 bg-gradient-to-br ${uiStates.activeStudy.color} flex items-center justify-center overflow-hidden`}
              >
                <div className="text-white/10 text-6xl sm:text-9xl font-bold absolute select-none">
                  {uiStates.activeStudy.initial}
                </div>
                <div className="relative z-10 text-center text-white p-6 sm:p-8">
                  <motion.h2
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.25 }}
                    className="text-xl sm:text-3xl font-bold mb-2"
                  >
                    {uiStates.activeStudy.title}
                  </motion.h2>
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.25 }}
                    className="text-white/80 text-sm sm:text-base"
                  >
                    {uiStates.activeStudy.industry}
                  </motion.p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8"
                >
                  <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#4F46E5] mx-auto mb-2" />
                    <div className="text-lg sm:text-2xl font-bold text-slate-800">
                      {uiStates.activeStudy.metrics.improvement}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600">
                      Improvement
                    </div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#4F46E5] mx-auto mb-2" />
                    <div className="text-lg sm:text-2xl font-bold text-slate-800">
                      {uiStates.activeStudy.metrics.scale}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600">
                      Scale
                    </div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#4F46E5] mx-auto mb-2" />
                    <div className="text-lg sm:text-2xl font-bold text-slate-800">
                      {uiStates.activeStudy.metrics.timeline}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600">
                      Timeline
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4">
                    Project Overview
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                    {uiStates.activeStudy.fullDetails}
                  </p>

                  <a href={`/case-study/${uiStates.activeStudy.slug || ''}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="ds-btn-primary text-sm sm:text-base"
                    >
                      View Full Case Study
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

CaseStudies.displayName = "CaseStudies";

export default CaseStudies;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

const PartnerModal = ({ isOpen, onClose, partner }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !partner) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center px-4 md:px-10">
        {/* Backdrop - Matching ContactModal exactly */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        ></motion.div>

        {/* Cinematic Modal Container - Matching ContactModal Styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl h-[85svh] glass-card rounded-[32px] overflow-hidden flex flex-col z-10 cursor-default !transform-none !transition-none"
        >
          {/* Top Gradient Glow Line - Removed as per request */}

          <style>{`
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>

          {/* Top Close Button - Fixed Position */}
          <div className="absolute top-6 right-6 z-[60]">
            <button
              onClick={onClose}
              className="text-[#A0A0A0] hover:text-white bg-white/5 hover:bg-white/10 p-2.5 rounded-full transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Single Scrollable Container */}
          <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth">

            {/* 70% Hero Image Area with Reduced Cinematic Fade */}
            <div className="relative w-full h-[60svh] overflow-hidden bg-[#0A0A0F]">
              {partner.heroImage ? (
                <img
                  src={partner.heroImage.startsWith('http') ? partner.heroImage : `${import.meta.env.BASE_URL}${partner.heroImage.slice(1)}`}
                  alt={partner.name}
                  className="w-full h-full object-cover opacity-90"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/10 flex items-center justify-center">
                  <div className="opacity-20 scale-150 grayscale filter blur-[1px]">
                    {partner.logo}
                  </div>
                </div>
              )}

              {/* Increased smooth gradient fade (Bottom 30%) for cinematic blend */}
              <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#0A0A0E] via-[#0A0A0E]/80 to-transparent z-10"></div>
            </div>

            {/* Immersive Content Section */}
            <div className="relative z-20 px-8 md:px-16 pb-20">

              {/* Thin Violet Glow Separator */}
              <div className="h-px w-full bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.1)] mb-10" />

              {/* Branding Block - Optimized Hierarchy */}
              <div className="mb-6">
                <div className="flex flex-col gap-2">
                  <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-none">
                    {partner.name}
                  </h2>
                  <span className="text-purple-400 text-xs font-black uppercase tracking-[0.4em] mt-2 opacity-80">
                    {partner.tagline}
                  </span>
                </div>
              </div>

              {/* Description Body */}
              <div className="max-w-4xl">
                <p className="text-[#A0A0A0] text-lg lg:text-xl leading-relaxed font-light mb-6">
                  {partner.fullContent || partner.description}
                </p>

                {/* Highlights */}
                {partner.highlights && partner.highlights.length > 0 && (
                  <div className="flex flex-col gap-3 mb-10">
                    {partner.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: partner.accentColor || '#a78bfa' }}
                        />
                        <p className="text-[#C0C0C0] text-base leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PartnerModal;
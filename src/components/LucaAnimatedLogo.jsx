import React from 'react';
import { motion } from 'framer-motion';

const LucaAnimatedLogo = () => {
  // Precision Path Drawing Variants
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom) => ({
      pathLength: 1,
      opacity: custom.opacity || 1,
      transition: {
        pathLength: { 
          delay: custom.delay, 
          duration: 2.8, 
          ease: [0.43, 0.13, 0.23, 0.96] 
        },
        opacity: { delay: custom.delay, duration: 0.2 }
      }
    })
  };

  return (
    <div className="relative w-full max-w-lg aspect-square flex items-center justify-center pointer-events-none scale-110">
      {/* Premium Ambient Glow - Fades in after drawing stabilizes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 4.2 }}
        className="absolute inset-0 bg-white/[0.04] blur-[120px] rounded-full"
      />
      
      <svg viewBox="0 0 500 500" className="w-full h-full relative z-10 overflow-visible">
        {/* Everything is aligned to the LUCA-standard tilted axis (-18 degrees) */}
        <g transform="translate(250, 250) rotate(-18)">
          
          {/* Main Sphere Silhouette (Black) */}
          <motion.ellipse
            cx="0"
            cy="0"
            rx="215"
            ry="195"
            fill="black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ duration: 1.2, delay: 0.1 }}
          />

          {/* 1. Main Outer Ring (Precision Elliptical Path) */}
          <motion.path
            d="M 0, -195 A 215, 195 0 1, 1 0, 195 A 215, 195 0 1, 1 0, -195"
            fill="none"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            variants={pathVariants}
            custom={{ delay: 0 }}
            initial="hidden"
            animate="visible"
            className="filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          />

          {/* 2. Inner Rim / Offset Ring (Asymmetrical 3D Effect) */}
          <motion.path
            d="M 12, -185 A 205, 185 0 1, 1 12, 185 A 205, 185 0 1, 1 12, -185"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
            variants={pathVariants}
            custom={{ delay: 0.4, opacity: 0.35 }}
            initial="hidden"
            animate="visible"
          />

          {/* The Eyes - Precise placement and drawing */}
          <g transform="translate(0, -10)">
            {/* Left Eye Path & Fill */}
            <motion.path
              d="M -48, -18 A 18, 18 0 1, 1 -48.1, -18"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              variants={pathVariants}
              custom={{ delay: 2.8 }}
              initial="hidden"
              animate="visible"
            />
            <motion.circle 
              cx="-48" 
              cy="0" 
              r="20" 
              fill="white" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 3.6 }} 
              className="filter drop-shadow-[0_0_15px_rgba(255,255,255,1)]"
            />

            {/* Right Eye Path & Fill */}
            <motion.path
              d="M 48, -18 A 18, 18 0 1, 1 48.1, -18"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              variants={pathVariants}
              custom={{ delay: 3.2 }}
              initial="hidden"
              animate="visible"
            />
            <motion.circle 
              cx="48" 
              cy="0" 
              r="20" 
              fill="white" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 4.0 }} 
              className="filter drop-shadow-[0_0_15px_rgba(255,255,255,1)]"
            />
          </g>

          {/* Subtle Technical Highlight (Lower Arc) */}
          <motion.path
            d="M -120, 140 Q 0, 170 120, 140"
            fill="none"
            stroke="white"
            strokeWidth="0.8"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 1.5, delay: 3.8 }}
          />
        </g>
      </svg>
    </div>
  );
};

export default LucaAnimatedLogo;

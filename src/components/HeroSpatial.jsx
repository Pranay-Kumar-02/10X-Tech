import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import Logo10X from './Logo10X';
import SpatialCanvas from './SpatialCanvas';
import Logos from './Logos';

const HeroSpatial = () => {
  const navigate = useNavigate();

  const handleLaunchTry = (e) => {
    if (e) e.preventDefault();
    navigate('/try', { 
      state: { 
        url: 'https://shesettipavankumarswamy-luca.hf.space/', 
        title: 'LUCA AI'
      } 
    });
  };

  return (
    <section className="relative pt-28 sm:pt-32 md:pt-36 pb-6 max-w-[1400px] mx-auto overflow-hidden z-10 min-h-[92svh] flex flex-col justify-between items-center text-center">
      
      {/* 3D Spatial Particle Canvas Background */}
      <SpatialCanvas />

      {/* ── VERTICALLY CENTERED HERO CORE ── */}
      <div className="flex-1 flex flex-col items-center justify-center w-full relative z-10 max-w-4xl mx-auto px-4 sm:px-6 my-auto">
        
        {/* Sleek Subdued Architecture Badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-medium bg-white/[0.04] border border-white/15 text-white/80 backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.04)]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
            <span>PROPRIETARY LFM™ ARCHITECTURE</span>
          </span>
        </motion.div>

        {/* ── BIG 10X TECHNOLOGIES MASTER LOGO ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 w-full max-w-4xl mx-auto flex justify-center items-center px-2"
        >
          <Logo10X
            className="h-14 sm:h-20 md:h-28 lg:h-32 w-auto object-contain max-w-full drop-shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
            animateTechnologies={true}
            delay={400}
          />
        </motion.div>

        {/* ── HALF-SIZED, SLEEK & REFINED POSITIONING HEADLINE ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="my-2 flex flex-col items-center justify-center"
        >
          <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-black tracking-[0.16em] uppercase leading-relaxed max-w-xl">
            {/* Line 1: Pure Crisp White */}
            <span className="block text-white/90 drop-shadow-[0_2px_15px_rgba(255,255,255,0.2)]">
              SMALL LANGUAGE MODELS.
            </span>

            {/* Line 2: Multi-Stop Violet-Silver Gradient Slogan */}
            <span className="block mt-0.5 bg-gradient-to-r from-white via-[#E2D8FF] to-[#A78BFA] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(167,139,250,0.35)]">
              INTELLIGENCE YOU ACTUALLY OWN.
            </span>
          </h1>
        </motion.div>

        {/* Crisp Executive Subline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-xs sm:text-[13px] md:text-sm text-white/60 font-normal mt-2 mb-8 max-w-md mx-auto leading-relaxed"
        >
          Task-specific AI engineered to run entirely on your own infrastructure — zero cloud egress, zero per-token tolls, instant edge inference.
        </motion.p>

        {/* Dual Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto mb-6"
        >
          <button
            type="button"
            onClick={handleLaunchTry}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-white text-black hover:bg-purple-100 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.25)] active:scale-95 cursor-pointer"
          >
            <span>Launch Live Model Space</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => navigate('/models')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-white text-xs font-mono font-semibold uppercase hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
          >
            <span>Explore Model Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

      </div>

      {/* Perfectly Adjusted Logo Marquee Ticker at bottom of fold */}
      <div className="w-full mt-auto pt-4">
        <Logos />
      </div>

    </section>
  );
};

export default HeroSpatial;

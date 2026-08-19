import React from 'react';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import ShineBorder from './ShineBorder';

const HardwareSection = () => {
  return (
    <section className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 py-10 lg:py-14">
      
      {/* Section Header */}
      <div className="mb-6 text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono border border-purple-500/30 bg-purple-500/10 text-purple-300">
              <Compass className="w-3.5 h-3.5 text-purple-400" />
              <span>PRODUCT ROADMAP VISION</span>
            </span>
          </div>
          <h2 className="text-tier-1 text-white font-bold tracking-tight">
            What LFM is building toward
          </h2>
        </div>

        <div className="text-xs font-mono text-white/50 border-l-2 border-purple-500/40 pl-3 py-1">
          Hardware target for on-device LFM intelligence
        </div>
      </div>

      {/* Main Hardware Card */}
      <div className="group relative rounded-[32px] overflow-hidden bg-white/[0.01] backdrop-blur-md border border-white/[0.08] hover:border-purple-500/30 transition-all duration-500">
        
        <ShineBorder 
          borderWidth={1}
          duration={8}
          shineColor={['#3b82f6', '#8b5cf6']}
          className="opacity-[0.15] group-hover:opacity-[0.75] transition-opacity duration-500 z-30"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch relative z-10">
          
          {/* Video / Visual Asset */}
          <div className="relative w-full h-full min-h-[300px] md:min-h-[420px] bg-[#04040c] flex items-center justify-center overflow-hidden">
            
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(81,45,139,0.2)_0%,transparent_70%)] opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

            {/* Product Video */}
            <video
              src={`${import.meta.env.BASE_URL}new video in ai container.mp4`}
              poster={`${import.meta.env.BASE_URL}worldfirst.png`}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02] z-10"
            />

            {/* Gloss and cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#04040c] via-transparent to-transparent opacity-60 z-20 pointer-events-none" />

            {/* Understated Roadmap Marker Badge */}
            <div className="absolute top-4 left-4 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-dashed border-purple-400/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-[11px] font-mono text-purple-200 tracking-wide font-medium">
                HARDWARE ROADMAP TARGET
              </span>
            </div>
          </div>

          {/* Text Content */}
          <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center items-start text-left bg-[#050510]/80 backdrop-blur-sm border-t md:border-t-0 md:border-l border-white/[0.06]">
            
            <span className="text-tagline-02 text-purple-400 uppercase tracking-widest text-xs font-mono mb-3">
              THE HARDWARE VEHICLE FOR LFM
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
              LUCA ●●™ | Smart Speaker
            </h3>

            <p className="text-[0.95rem] text-[#A0A0A0] leading-[1.7] mb-6">
              World’s 1st AI-powered Smart Speaker built from the ground up to run native SLM models locally. Designed for Indic languages, zero-latency natural conversations, and privacy-first edge intelligence — moving from our LFM software models to physical everyday hardware.
            </p>

            <div className="flex flex-wrap gap-2 mb-8 font-mono text-[11px]">
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70">
                • Edge Audio Processing
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70">
                • Zero Cloud Latency
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70">
                • Indic Native Voice
              </span>
            </div>

            <Link 
              to="/product"
              className="text-btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 group/btn"
            >
              <span>Explore Hardware Roadmap</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HardwareSection;

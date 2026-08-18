import React from 'react';
import { ArrowRight, Compass, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const HardwareVehicle = () => {
  return (
    <section className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 py-12 lg:py-16">
      
      {/* Section Header */}
      <div className="mb-8 text-left">
        <span className="text-tagline-02 text-purple-400 uppercase tracking-widest font-mono text-xs mb-2 block">
          THE HARDWARE ORIGIN & VEHICLE
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
          What LFM Is Building Toward
        </h2>
      </div>

      {/* Main Hardware Reframing Card */}
      <div className="group relative rounded-[28px] overflow-hidden bg-white/[0.01] backdrop-blur-md border border-white/[0.08] hover:border-purple-500/30 transition-all duration-500">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch relative z-10">
          
          {/* Video / Visual Asset */}
          <div className="relative w-full h-full min-h-[280px] md:min-h-[380px] bg-[#04040c] flex items-center justify-center overflow-hidden">
            <video
              src={`${import.meta.env.BASE_URL}new video in ai container.mp4`}
              poster={`${import.meta.env.BASE_URL}worldfirst.png`}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04040c] via-transparent to-transparent opacity-60 z-20 pointer-events-none" />

            {/* Subtle Origin Badge */}
            <div className="absolute top-4 left-4 z-30 flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-md">
              <Compass className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[11px] font-mono text-white/80">
                ORIGIN STORY & HARDWARE VEHICLE
              </span>
            </div>
          </div>

          {/* Editorial Text Content */}
          <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center items-start text-left bg-[#05050f]/90 border-t md:border-t-0 md:border-l border-white/[0.06]">
            
            <span className="text-tagline-02 text-purple-400 uppercase tracking-widest text-xs font-mono mb-3">
              FROM HARDWARE BOTTLENECK TO SMALL MODELS
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              LUCA ●●™ | Smart Speaker
            </h3>

            <p className="text-sm text-[#A0A0A0] leading-relaxed mb-4">
              10X Technologies started as a smart speaker hardware initiative. When serving AI responses to scale over third-party APIs proved financially unsustainable per-request, we pivoted to building proprietary small language models (LFM™) optimized for local deployment.
            </p>

            <p className="text-sm text-[#A0A0A0] leading-relaxed mb-6">
              The LUCA smart speaker remains our long-term physical hardware vehicle — built to demonstrate native SLM intelligence on embedded edge SOCs.
            </p>

            <Link 
              to="/product"
              className="text-btn-secondary inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 group/btn text-xs font-mono uppercase"
            >
              <span>Explore Smart Speaker Specifications</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HardwareVehicle;

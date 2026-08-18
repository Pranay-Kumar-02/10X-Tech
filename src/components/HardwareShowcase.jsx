import React from 'react';
import { ArrowRight, Compass, Cpu, Mic, ShieldCheck, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HardwareShowcase = () => {
  const navigate = useNavigate();

  return (
    <section className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 py-14 lg:py-20">
      
      {/* Section Header */}
      <div className="mb-10 text-left">
        <span className="text-tagline-02 text-purple-400 uppercase tracking-widest font-mono text-xs mb-3 block">
          THE HARDWARE ORIGIN & VEHICLE
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          What LFM Is Building Toward
        </h2>
      </div>

      {/* Main Hardware Container */}
      <div className="rounded-[32px] bg-[#05050f]/90 border border-purple-500/20 backdrop-blur-xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Video Container with Backlight Glow */}
          <div className="lg:col-span-6 relative bg-[#04040c] min-h-[350px] lg:min-h-[440px] flex items-center justify-center overflow-hidden">
            
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-indigo-900/10 to-transparent pointer-events-none z-0" />

            <video
              src={`${import.meta.env.BASE_URL}new video in ai container.mp4`}
              poster={`${import.meta.env.BASE_URL}worldfirst.png`}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover relative z-10 opacity-85 hover:opacity-100 transition-opacity duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#05050f] via-transparent to-transparent opacity-70 z-20 pointer-events-none" />

            {/* Badge */}
            <div className="absolute top-4 left-4 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 border border-purple-500/30 backdrop-blur-md">
              <Compass className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[11px] font-mono font-semibold text-white/90">
                ORIGIN STORY & PHYSICAL VEHICLE
              </span>
            </div>
          </div>

          {/* Text Content & Origin Story Narrative */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-center text-left bg-[#070714]/80 border-t lg:border-t-0 lg:border-l border-white/10">
            
            <span className="text-xs font-mono text-purple-400 font-bold uppercase mb-2">
              FROM HARDWARE BOTTLENECK TO SMALL MODELS
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
              LUCA ●●™ | Smart Speaker
            </h3>

            <p className="text-sm text-[#A0A0A0] leading-relaxed mb-4">
              10X Technologies started as a smart speaker hardware initiative. When serving AI responses to scale over third-party APIs proved financially unsustainable per-request, we pivoted to building proprietary small language models (LFM™) optimized for local deployment.
            </p>

            <p className="text-sm text-[#A0A0A0] leading-relaxed mb-8">
              The LUCA smart speaker remains our long-term physical hardware vehicle — built to demonstrate native SLM intelligence on embedded edge SOCs.
            </p>

            {/* Hardware Feature Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <Mic className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-xs font-mono text-white/80">Indic Voice Native</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <Cpu className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-xs font-mono text-white/80">Embedded NPU Engine</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate('/product')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all cursor-pointer text-xs font-mono uppercase tracking-wider w-fit"
            >
              <span>Explore Speaker Hardware Specs</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>
      </div>

    </section>
  );
};

export default HardwareShowcase;

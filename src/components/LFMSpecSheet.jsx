import React from 'react';
import { ArrowUpRight, Cpu, Zap, HardDrive, Globe, Terminal, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import ShineBorder from './ShineBorder';

const LFMSpecSheet = () => {
  const specs = [
    {
      icon: Cpu,
      label: "PARAMETER COUNT",
      value: "1.8B — 7B SLM",
      detail: "Dense architecture optimized for local GPU/NPU memory constraints"
    },
    {
      icon: Zap,
      label: "LATENCY TARGET",
      value: "< 15ms TTFT",
      detail: "Sub-second first-token generation for real-time edge voice interaction"
    },
    {
      icon: HardDrive,
      label: "DEPLOYMENT TARGETS",
      value: "Edge & Local Servers",
      detail: "Runs on customer hardware, embedded SOCs, or private cloud clusters"
    },
    {
      icon: Globe,
      label: "LANGUAGES SUPPORTED",
      value: "Indic + Multilingual",
      detail: "Native Telugu tokenizer & Indic language fluency built from the ground up"
    }
  ];

  return (
    <section className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 py-10 lg:py-14">
      
      {/* Container */}
      <div className="relative rounded-[32px] bg-[#05050f]/90 border border-purple-500/20 backdrop-blur-md overflow-hidden p-6 sm:p-10 lg:p-12 group">
        
        <ShineBorder 
          borderWidth={1}
          duration={8}
          shineColor={['#a78bfa', '#c084fc']}
          className="opacity-[0.25] group-hover:opacity-[0.85] transition-opacity duration-500 z-30"
        />

        {/* Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Model Image & Tag */}
          <div className="lg:col-span-5 flex flex-col items-start">
            
            <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-[#0a0a18] border border-white/10 mb-6 shadow-2xl group/img">
              <img
                src={`${import.meta.env.BASE_URL}resolution changed lfm image.png`}
                alt="LFM Model Architecture"
                className="w-full h-full object-cover opacity-85 group-hover/img:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05050f] via-transparent to-transparent opacity-80" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-[11px] font-mono font-semibold bg-purple-950/80 border border-purple-500/40 text-purple-300 px-3 py-1 rounded-full backdrop-blur-md">
                  PROPRIETARY MODEL ARCHITECTURE
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                  IN-HOUSE
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-2">
              <Terminal className="w-4 h-4 text-purple-400" />
              <span>LFM™ (Language Fluency Model)</span>
            </div>

            <Link
              to="/models"
              className="text-btn-secondary inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-white font-mono text-xs uppercase hover:bg-purple-600 hover:text-white transition-all duration-300 group/btn"
            >
              <span>Explore Model Spec Sheet</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </Link>
          </div>

          {/* Right Column: Model Specs Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="mb-6">
              <span className="text-tagline-02 text-purple-400 uppercase tracking-widest font-mono text-xs mb-2 block">
                MODEL PROOF POINT
              </span>
              <h2 className="text-tier-1 text-white font-bold tracking-tight mb-3">
                LFM™ — the model, not the wrapper.
              </h2>
              <p className="text-body-01 text-[#B0B0B0] text-sm sm:text-base leading-relaxed">
                Our proprietary Language Fluency Model, built in-house — not a fine-tuned wrapper around someone else's API. Designed specifically for low-latency edge inference and zero per-request cost.
              </p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-4 h-4 text-purple-400" />
                        <span className="text-[11px] font-mono text-white/50 tracking-wider">
                          {item.label}
                        </span>
                      </div>
                      <div className="text-base sm:text-lg font-mono font-bold text-white mb-1">
                        {item.value}
                      </div>
                    </div>
                    <p className="text-[12px] text-[#888] leading-snug mt-2">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LFMSpecSheet;

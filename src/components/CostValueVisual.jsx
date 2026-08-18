import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Cpu, ShieldCheck } from 'lucide-react';

const CostValueVisual = () => {
  const [cloudCost, setCloudCost] = useState(420);

  // Fast counter animation for Cloud API cost
  useEffect(() => {
    const interval = setInterval(() => {
      setCloudCost((prev) => (prev > 14500 ? 420 : prev + Math.floor(Math.random() * 85) + 35));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 py-10 lg:py-14">
      <div className="flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-8 max-w-2xl">
          <span className="text-tagline-02 text-purple-400 uppercase tracking-widest font-mono text-xs mb-2 block">
            THE ECONOMICS OF SLMs
          </span>
          <h2 className="text-tier-1 text-white font-bold tracking-tight">
            Stop Renting API Tokens
          </h2>
        </div>

        {/* Two-column Split Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
          
          {/* Left Panel: Cloud API */}
          <div className="relative rounded-[28px] p-6 sm:p-8 bg-[#090611] border border-red-500/20 overflow-hidden flex flex-col justify-between min-h-[220px] group shadow-[0_10px_30px_rgba(239,68,68,0.08)]">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cloud className="w-32 h-32 text-red-400" />
            </div>

            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/20">
                  <Cloud className="w-5 h-5 text-red-400 animate-pulse" />
                </div>
                <span className="text-sm font-mono uppercase text-red-300 font-semibold tracking-wider">
                  Cloud API (30k Req/Day)
                </span>
              </div>
              <span className="text-[11px] font-mono text-red-400/80 bg-red-500/10 px-2.5 py-1 rounded-full border border-red-500/20">
                Priced Per Request
              </span>
            </div>

            <div className="my-6 z-10">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-red-400 tracking-tight flex items-baseline gap-1">
                <span>${(cloudCost / 100).toFixed(2)}</span>
                <span className="text-xs text-red-400/60 font-sans font-normal">/ day & rising</span>
              </div>
              <p className="text-xs text-red-300/70 font-mono mt-1">
                Cumulative Third-Party API Billing
              </p>
            </div>

            <div className="text-xs font-mono text-red-400/70 z-10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              <span>Uncapped recurring API expense</span>
            </div>
          </div>

          {/* Right Panel: 10X On-Device */}
          <div className="relative rounded-[28px] p-6 sm:p-8 bg-[#070b14] border border-purple-500/30 overflow-hidden flex flex-col justify-between min-h-[220px] group shadow-[0_10px_30px_rgba(168,85,247,0.12)]">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu className="w-32 h-32 text-purple-400" />
            </div>

            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/30">
                  <Cpu className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-sm font-mono uppercase text-purple-300 font-semibold tracking-wider">
                  10X On-Device SLM
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                <span>Zero API Bill</span>
              </span>
            </div>

            <div className="my-6 z-10">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-white tracking-tight flex items-baseline gap-1">
                <span className="text-emerald-400">$0.00</span>
                <span className="text-xs text-white/50 font-sans font-normal">/ request forever</span>
              </div>
              <p className="text-xs text-purple-200/70 font-mono mt-1">
                Runs natively on your local hardware
              </p>
            </div>

            <div className="text-xs font-mono text-purple-300/80 z-10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Full privacy, zero latency delay, predictable costs</span>
            </div>
          </div>

        </div>

        {/* Caption beneath both */}
        <div className="mt-8 text-center max-w-2xl px-4">
          <p className="text-body-01 text-white/80 font-mono text-sm sm:text-base leading-relaxed bg-white/[0.02] border border-white/10 rounded-2xl py-3.5 px-6 backdrop-blur-sm">
            "30,000 requests a day on someone else's API is a bill. <span className="text-purple-300 font-semibold">On our own models, it's free.</span>"
          </p>
        </div>

      </div>
    </section>
  );
};

export default CostValueVisual;

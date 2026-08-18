import React from 'react';
import { Cloud, Cpu, ArrowRight, ShieldCheck, Server, Zap } from 'lucide-react';

const DeploymentStory = () => {
  return (
    <section className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 py-12 lg:py-16">
      <div className="flex flex-col items-center text-center">
        
        {/* Editorial Section Label & Headline */}
        <div className="max-w-3xl mb-10">
          <span className="text-tagline-02 text-purple-400 uppercase tracking-widest font-mono text-xs mb-2 block">
            THE DEPLOYMENT ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
            Intelligence Should Not Be Rented Per Request.
          </h2>
          <p className="text-body-01 text-[#A0A0A0] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Serving high-frequency enterprise workflows over third-party APIs introduces compounding operational costs, network latency, and critical data privacy risks. 10X builds task-specific small language models designed to run natively on customer-owned infrastructure.
          </p>
        </div>

        {/* Cinematic Visual Flow: Centralized Cloud API vs 10X On-Device SLM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto text-left">
          
          {/* Centralized Cloud API Model */}
          <div className="relative rounded-[28px] p-6 sm:p-8 bg-[#090611] border border-red-500/20 overflow-hidden flex flex-col justify-between min-h-[240px]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                  <Cloud className="w-5 h-5" />
                </div>
                <span className="text-sm font-mono uppercase text-red-300 font-semibold tracking-wider">
                  Third-Party Cloud API
                </span>
              </div>
              <span className="text-[11px] font-mono text-red-400/80 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                External Dependency
              </span>
            </div>

            <div className="my-4 space-y-2 text-xs font-mono text-red-300/80">
              <div className="flex items-center justify-between border-b border-red-500/10 pb-2">
                <span>Request Flow</span>
                <span className="text-red-400">Client → Public Web → API Provider</span>
              </div>
              <div className="flex items-center justify-between border-b border-red-500/10 pb-2">
                <span>Data Location</span>
                <span className="text-red-400">External Vendor Servers</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Pricing Structure</span>
                <span className="text-red-400">Recurring Per-Token Billing</span>
              </div>
            </div>

            <p className="text-xs text-red-300/60 leading-relaxed mt-2 pt-2 border-t border-red-500/10 font-sans">
              Dependent on third-party cloud uptime, network hops, and vendor pricing changes.
            </p>
          </div>

          {/* 10X Localized SLM Architecture */}
          <div className="relative rounded-[28px] p-6 sm:p-8 bg-[#070b14] border border-purple-500/30 overflow-hidden flex flex-col justify-between min-h-[240px]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-sm font-mono uppercase text-purple-300 font-semibold tracking-wider">
                  10X On-Device SLM
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Customer Owned</span>
              </span>
            </div>

            <div className="my-4 space-y-2 text-xs font-mono text-purple-200/90">
              <div className="flex items-center justify-between border-b border-purple-500/10 pb-2">
                <span>Request Flow</span>
                <span className="text-emerald-400">Client → Local Server / Edge SOC</span>
              </div>
              <div className="flex items-center justify-between border-b border-purple-500/10 pb-2">
                <span>Data Location</span>
                <span className="text-emerald-400">Within Private Customer Perimeter</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Execution Model</span>
                <span className="text-emerald-400">Local Model Hardware Execution</span>
              </div>
            </div>

            <p className="text-xs text-purple-200/60 leading-relaxed mt-2 pt-2 border-t border-purple-500/10 font-sans">
              Direct, low-latency inferencing under full customer control and zero external data egress.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DeploymentStory;

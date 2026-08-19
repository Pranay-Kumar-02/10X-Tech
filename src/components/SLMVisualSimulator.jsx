import React, { useState } from 'react';
import { Cloud, Cpu, Server, ShieldCheck, ArrowRight, CheckCircle2, Zap, Lock, RefreshCw, HardDrive } from 'lucide-react';

const SLMVisualSimulator = () => {
  const [activeTab, setActiveTab] = useState('slm'); // 'slm' | 'cloud'

  return (
    <section className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-16 lg:py-24">
      
      {/* Editorial Header */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
        <span className="text-tagline-02 text-purple-400 uppercase tracking-widest font-mono text-xs mb-3 block">
          THE DEPLOYMENT PARADIGM
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 uppercase leading-tight">
          Intelligence Should Not Be<br />
          <span className="bg-gradient-to-r from-purple-200 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
            Rented Per Request.
          </span>
        </h2>
        <p className="text-body-01 text-[#B0B0B0] text-base sm:text-lg leading-relaxed max-w-2xl">
          Serving enterprise AI over third-party cloud APIs forces continuous per-token billing, latency bottlenecks, and vendor lock-in. 10X builds small language models designed for customer-owned hardware.
        </p>
      </div>

      {/* Interactive Bento Grid Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Bento Card 1: Third-Party API vs 10X SLM Interactive Simulator (Col 7) */}
        <div className="lg:col-span-7 rounded-[32px] bg-[#070716]/90 border border-purple-500/25 p-8 backdrop-blur-2xl flex flex-col justify-between shadow-2xl relative overflow-hidden group">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 relative z-10">
            <div>
              <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block mb-1">
                ARCHITECTURE SIMULATOR
              </span>
              <h3 className="text-xl font-bold text-white">Execution Path Comparison</h3>
            </div>

            {/* Toggle Buttons */}
            <div className="flex items-center gap-2 p-1 rounded-full bg-black/60 border border-white/10">
              <button
                type="button"
                onClick={() => setActiveTab('slm')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  activeTab === 'slm'
                    ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                10X On-Device SLM
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('cloud')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  activeTab === 'cloud'
                    ? 'bg-red-600/80 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Cloud API
              </button>
            </div>
          </div>

          {/* Interactive Simulation Visual */}
          <div className="p-6 rounded-2xl bg-[#03030a] border border-white/10 relative z-10 mb-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center text-center">
              
              {/* Step A: Request */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <Zap className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                <span className="text-xs font-mono font-bold text-white block">Enterprise Query</span>
                <span className="text-[10px] font-mono text-[#888]">Voice / Search / Chat</span>
              </div>

              {/* Step B: Transfer Beam */}
              <div className="flex flex-col items-center justify-center">
                <div className={`w-full h-1 rounded-full ${
                  activeTab === 'slm'
                    ? 'bg-gradient-to-r from-purple-500 via-emerald-400 to-purple-500 animate-pulse'
                    : 'bg-gradient-to-r from-amber-500 via-red-500 to-amber-500 animate-pulse'
                }`} />
                <span className="text-[10px] font-mono text-white/50 mt-2">
                  {activeTab === 'slm' ? 'Internal Local Memory Bus' : 'Public Web Egress Hops'}
                </span>
              </div>

              {/* Step C: Target Execution */}
              <div className={`p-4 rounded-xl border ${
                activeTab === 'slm'
                  ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300'
                  : 'bg-red-950/20 border-red-500/40 text-red-300'
              }`}>
                {activeTab === 'slm' ? <Server className="w-5 h-5 mx-auto mb-2 text-emerald-400" /> : <Cloud className="w-5 h-5 mx-auto mb-2 text-red-400" />}
                <span className="text-xs font-mono font-bold text-white block">
                  {activeTab === 'slm' ? 'Local NPU / Server' : 'External Vendor API'}
                </span>
                <span className="text-[10px] font-mono opacity-75">
                  {activeTab === 'slm' ? 'Customer Controlled' : 'Third-Party Host'}
                </span>
              </div>

            </div>

          </div>

          <p className="text-xs text-[#A0A0A0] leading-relaxed relative z-10">
            {activeTab === 'slm'
              ? 'Local inferencing executes within private server perimeters, eliminating data leakage and recurring API bills.'
              : 'Third-party cloud APIs require sending private corporate data over public internet hops with unpredictable recurring billing.'}
          </p>

        </div>

        {/* Bento Card 2: Key Operational Benefits (Col 5) */}
        <div className="lg:col-span-5 rounded-[32px] bg-[#070716]/90 border border-purple-500/25 p-8 backdrop-blur-2xl flex flex-col justify-between shadow-2xl">
          <div>
            <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block mb-1">
              ENTERPRISE ADVANTAGE
            </span>
            <h3 className="text-xl font-bold text-white mb-6">Why Local SLMs Win</h3>

            <div className="space-y-4">
              
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <Lock className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold text-white">Zero External Data Egress</h4>
                  <p className="text-[11px] text-[#999] leading-normal">
                    Customer data never leaves private enterprise firewalls or edge SOC memory.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <HardDrive className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold text-white">Fixed Capital Capability</h4>
                  <p className="text-[11px] text-[#999] leading-normal">
                    Run millions of daily operations without compounding token API costs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <RefreshCw className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold text-white">Continuous Operation</h4>
                  <p className="text-[11px] text-[#999] leading-normal">
                    Model inference runs offline or in air-gapped mission-critical environments.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default SLMVisualSimulator;

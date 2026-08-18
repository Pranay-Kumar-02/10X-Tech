import React from 'react';

const CredibilityRail = () => {
  return (
    <section className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 py-10">
      
      <div className="text-center mb-6">
        <span className="text-tagline-02 text-white/50 uppercase tracking-widest font-mono text-xs block">
          INSTITUTIONAL BACKING & COLLABORATION
        </span>
      </div>

      {/* Grid of Verified Partners */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
        
        {/* AWS */}
        <div className="p-5 rounded-2xl bg-[#060612] border border-white/10 flex items-center justify-center gap-4 group hover:border-purple-500/30 transition-all">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
            alt="AWS"
            className="h-7 w-auto object-contain brightness-0 invert opacity-75 group-hover:opacity-100 transition-opacity"
          />
          <div className="text-left border-l border-white/10 pl-3">
            <span className="text-xs font-mono font-bold text-white block">AWS Cloud</span>
            <span className="text-[10px] font-mono text-[#888]">Infrastructure Credits</span>
          </div>
        </div>

        {/* MeitY Govt of India */}
        <div className="p-5 rounded-2xl bg-[#060612] border border-white/10 flex items-center justify-center gap-4 group hover:border-purple-500/30 transition-all">
          <img
            src={`${import.meta.env.BASE_URL}govt of india-remove.bg.png`}
            alt="MeitY Startup Hub"
            className="h-8 w-auto object-contain brightness-0 invert opacity-75 group-hover:opacity-100 transition-opacity"
          />
          <div className="text-left border-l border-white/10 pl-3">
            <span className="text-xs font-mono font-bold text-white block">MeitY Startup Hub</span>
            <span className="text-[10px] font-mono text-[#888]">GoI GENESIS (EiR-2)</span>
          </div>
        </div>

        {/* NVIDIA Inception */}
        <div className="p-5 rounded-2xl bg-[#060612] border border-white/10 flex items-center justify-center gap-4 group hover:border-purple-500/30 transition-all">
          <img
            src={`${import.meta.env.BASE_URL}nvidia-remove.bg.png`}
            alt="NVIDIA Inception"
            className="h-8 w-auto object-contain brightness-0 invert opacity-75 group-hover:opacity-100 transition-opacity"
          />
          <div className="text-left border-l border-white/10 pl-3">
            <span className="text-xs font-mono font-bold text-white block">NVIDIA Inception</span>
            <span className="text-[10px] font-mono text-[#888]">Global AI Ecosystem</span>
          </div>
        </div>

      </div>

    </section>
  );
};

export default CredibilityRail;

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const FeatureCards = () => {
  return (
    <section className="py-10 px-6 max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* LUCA AI Card */}
      <div className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 overflow-hidden flex flex-col justify-between min-h-[400px] hover:border-white/10 transition-colors cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(30,80,255,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-start h-full">
          <h2 className="text-[32px] font-semibold mb-4 leading-tight text-white">
            Interacts naturally, feels more like a companion than an AI device. Natively embedded to reduce latency.
          </h2>
          
          <div className="mt-auto pt-8 w-full flex justify-between items-center">
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full font-medium transition-colors text-sm">
              Discover LUCA AI
            </button>
            <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>

      {/* Akshara Card */}
      <div className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 overflow-hidden flex flex-col justify-between min-h-[400px] hover:border-white/10 transition-colors cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,30,80,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-start h-full">
          <h2 className="text-[32px] font-semibold mb-4 leading-tight text-white">
            A multilingual, portable smart speaker from India with a dynamic AI persona and on-device processing.
          </h2>
          
          <div className="mt-auto pt-8 w-full flex justify-between items-center">
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full font-medium transition-colors text-sm">
              View Akshara
            </button>
            <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;

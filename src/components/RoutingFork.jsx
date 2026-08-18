import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users } from 'lucide-react';
import Starfield from './Starfield';

const RoutingFork = () => {
  return (
    <section className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 py-10 lg:py-14">
      
      {/* Section Title */}
      <div className="text-center mb-8">
        <span className="text-tagline-02 text-purple-400 uppercase tracking-widest font-mono text-xs mb-2 block">
          CHOOSE YOUR PATH
        </span>
        <h2 className="text-tier-1 text-white font-bold tracking-tight">
          Where would you like to go next?
        </h2>
      </div>

      {/* Two-column Fork */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
        
        {/* Left Panel: Build with us */}
        <Link
          to="/models"
          className="group relative rounded-[32px] p-8 sm:p-10 bg-[#080814] border border-purple-500/20 hover:border-purple-500/50 overflow-hidden flex flex-col justify-between min-h-[260px] transition-all duration-500 hover:shadow-[0_16px_40px_rgba(81,45,168,0.2)]"
        >
          {/* Subtle Grid / Code Pattern Texture */}
          <div 
            className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(167, 139, 250, 0.4) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          />

          <div className="relative z-10 flex items-center justify-between">
            <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Code className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-purple-300/70 uppercase tracking-wider bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              DEVELOPER & PRODUCT
            </span>
          </div>

          <div className="relative z-10 my-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 group-hover:text-purple-300 transition-colors flex items-center gap-2">
              <span>Build with us</span>
              <ArrowRight className="w-6 h-6 text-purple-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
            </h3>
            <p className="text-body-01 text-[#B0B0B0] text-sm sm:text-base">
              Models, docs, LFM, tokenizers.
            </p>
          </div>

          <div className="relative z-10 font-mono text-xs text-purple-400 flex items-center gap-2 font-semibold">
            <span>Explore technical foundation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        {/* Right Panel: Know the company */}
        <Link
          to="/blog"
          className="group relative rounded-[32px] p-8 sm:p-10 bg-black border border-white/10 hover:border-white/30 overflow-hidden flex flex-col justify-between min-h-[260px] transition-all duration-500 hover:shadow-[0_16px_40px_rgba(255,255,255,0.1)]"
        >
          {/* Space / Stars Background Texture strictly confined to this card */}
          <div className="absolute inset-0 pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity overflow-hidden">
            <Starfield />
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-white">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-white/70 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/20">
              COMPANY & MISSION
            </span>
          </div>

          <div className="relative z-10 my-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 group-hover:text-purple-200 transition-colors flex items-center gap-2">
              <span>Know the company</span>
              <ArrowRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
            </h3>
            <p className="text-body-01 text-[#B0B0B0] text-sm sm:text-base">
              Our story, team, and where we're headed.
            </p>
          </div>

          <div className="relative z-10 font-mono text-xs text-white/90 flex items-center gap-2 font-semibold">
            <span>Read company announcements & team updates</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

      </div>
    </section>
  );
};

export default RoutingFork;

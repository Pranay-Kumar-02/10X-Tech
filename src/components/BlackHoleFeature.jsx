import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BlackHoleFeature = () => {
  const navigate = useNavigate();

  return (
    <section className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 py-12 lg:py-16">
      
      {/* Section Header */}
      <div className="mb-6 text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Research & Blog
        </h2>
      </div>

      {/* Featured Black Hole Card */}
      <div className="relative rounded-[32px] overflow-hidden bg-[#06060c] border border-white/10 backdrop-blur-2xl shadow-2xl group transition-all duration-500 hover:border-white/25">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Exact Black Hole Accretion Disk Image Asset */}
          <div className="lg:col-span-6 relative aspect-[16/9] lg:aspect-auto lg:h-[380px] overflow-hidden bg-[#04040a]">
            <img
              src={`${import.meta.env.BASE_URL}resolution changed reserach container.png`}
              alt="Inside 10X Technologies & LUCA"
              className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#06060c] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06060c] via-transparent to-transparent lg:hidden" />
          </div>

          {/* Editorial Card Content */}
          <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-center text-left relative z-10">
            <span className="text-[11px] font-mono text-purple-400 font-bold uppercase tracking-[0.2em] mb-2 block">
              BLOG & RESEARCH UPDATES
            </span>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
              Inside 10X Technologies & LUCA
            </h3>
            
            <p className="text-sm sm:text-[14px] text-zinc-400 leading-relaxed mb-8 font-light">
              Read our latest announcements, SOTA - Research updates, product breakthroughs, behind the scenes stories and get to know about our journey in Redefining Technology! Discover how we are pushing the boundaries of edge AI and building efficient, multilingual systems from the ground up. Join us as we explore the future of intelligent hardware and scalable on-device communication.
            </p>

            <button
              type="button"
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black text-white text-xs font-mono font-semibold uppercase transition-all duration-300 active:scale-95 cursor-pointer w-fit"
            >
              <span>BLOG</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default BlackHoleFeature;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Cpu, Code, HardDrive, BookOpen } from 'lucide-react';

const SpatialRoutingHub = () => {
  const navigate = useNavigate();

  const routes = [
    {
      title: "Explore Models & SLMs",
      subtitle: "Catalog of proprietary language models & live Hugging Face spaces",
      path: "/models",
      icon: Cpu,
      tag: "LIVE MODELS"
    },
    {
      title: "Try Akshara Tokenizer",
      subtitle: "Native Telugu & Dravidian subword tokenization engine",
      path: "/tokenizer-prototype",
      icon: Code,
      tag: "TOKENIZER DEMO"
    },
    {
      title: "Explore Smart Speaker",
      subtitle: "Physical hardware specifications & embedded OS runtime",
      path: "/product",
      icon: HardDrive,
      tag: "HARDWARE VEHICLE"
    },
    {
      title: "Read Research & Updates",
      subtitle: "Technical announcements, SOTA updates & insights",
      path: "/blog",
      icon: BookOpen,
      tag: "RESEARCH BLOG"
    }
  ];

  return (
    <section className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 py-16 lg:py-24">
      
      {/* Section Title */}
      <div className="text-center mb-12">
        <span className="text-tagline-02 text-purple-400 uppercase tracking-widest font-mono text-xs mb-3 block">
          WHERE DO YOU WANT TO GO?
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          Explore the 10X Ecosystem
        </h2>
      </div>

      {/* 4 Directional Pathways */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
        {routes.map((route, idx) => {
          const IconComponent = route.icon;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => navigate(route.path)}
              className="group relative rounded-[28px] p-8 bg-[#05050f]/90 border border-purple-500/20 hover:border-purple-400/60 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:bg-[#0a0a1f] shadow-xl text-left cursor-pointer"
            >
              {/* Background Glow Sibling */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-300 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-purple-300/80 uppercase tracking-wider bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                  {route.tag}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors flex items-center justify-between">
                  <span>{route.title}</span>
                  <ArrowUpRight className="w-6 h-6 text-purple-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                  {route.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>

    </section>
  );
};

export default SpatialRoutingHub;

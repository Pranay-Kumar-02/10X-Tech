import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Cpu, Code, HardDrive, BookOpen } from 'lucide-react';

const VisitorRouting = () => {
  const routes = [
    {
      title: "Explore Models & SLMs",
      subtitle: "Language models catalog & live Hugging Face spaces",
      path: "/models",
      icon: Cpu,
      tag: "LIVE MODELS"
    },
    {
      title: "Try Akshara Tokenizer",
      subtitle: "Native Telugu & Indic language tokenization engine",
      path: "/tokenizer-prototype",
      icon: Code,
      tag: "TOKENIZER DEMO"
    },
    {
      title: "Explore Smart Speaker",
      subtitle: "Physical hardware specifications & embedded OS",
      path: "/product",
      icon: HardDrive,
      tag: "HARDWARE VEHICLE"
    },
    {
      title: "Read Research & Updates",
      subtitle: "Technical announcements, SOTA updates & insights",
      path: "/blog",
      icon: BookOpen,
      tag: "INSIDE 10X"
    }
  ];

  return (
    <section className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 py-12 lg:py-16">
      
      {/* Section Title */}
      <div className="text-center mb-10">
        <span className="text-tagline-02 text-purple-400 uppercase tracking-widest font-mono text-xs mb-2 block">
          WHERE DO YOU WANT TO GO?
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
          Explore Deeper 10X Experience
        </h2>
      </div>

      {/* 4 Directional Pathways */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full max-w-5xl mx-auto">
        {routes.map((route, idx) => {
          const IconComponent = route.icon;
          return (
            <Link
              key={idx}
              to={route.path}
              className="group relative rounded-[24px] p-6 sm:p-8 bg-[#070710] border border-white/10 hover:border-purple-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:bg-[#0a0a18]"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                  {route.tag}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors flex items-center justify-between">
                  <span>{route.title}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  {route.subtitle}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

    </section>
  );
};

export default VisitorRouting;

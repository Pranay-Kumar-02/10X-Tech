import React from 'react';
import { Layers, Cpu, Code, Server, AppWindow } from 'lucide-react';

const IntelligenceStack = () => {
  const stackLayers = [
    {
      step: "01",
      layer: "APPLICATION",
      sublayer: null,
      title: "Task-Specific Workflows",
      desc: "Voice interaction, localized internal search, and specialized enterprise execution.",
      icon: AppWindow
    },
    {
      step: "02",
      layer: "MODELS",
      sublayer: null,
      title: "Proprietary Small Language Models (LFM™)",
      desc: "Compact, efficient model architectures trained in-house for low-latency inferencing.",
      icon: Cpu
    },
    {
      step: "03",
      layer: "ADAPTATION",
      sublayer: null,
      title: "Domain Fine-Tuning & LoRA",
      desc: "Targeted model adaptation on private company knowledge bases without full retraining.",
      icon: Layers
    },
    {
      step: "04",
      layer: "LANGUAGE",
      sublayer: "TOKENIZATION",
      title: "Akshara Indic Tokenizer",
      desc: "Native Telugu and Indic language tokenization optimizing vocabulary allocation.",
      icon: Code
    },
    {
      step: "05",
      layer: "DEPLOYMENT",
      sublayer: null,
      title: "Customer-Owned Infrastructure",
      desc: "Execution on local enterprise servers, embedded hardware, or private cloud clusters.",
      icon: Server
    }
  ];

  return (
    <section className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 py-12 lg:py-16">
      
      {/* Editorial Header */}
      <div className="mb-10 text-left">
        <span className="text-tagline-02 text-purple-400 uppercase tracking-widest font-mono text-xs mb-2 block">
          THE TECHNICAL SYSTEM
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
          The 10X Intelligence Stack
        </h2>
        <p className="text-sm text-[#A0A0A0] max-w-xl">
          A connected end-to-end architecture built from custom language tokenizers to local model deployment.
        </p>
      </div>

      {/* 5-Layer Connected Stack with Uniform Alignment */}
      <div className="flex flex-col gap-3.5 max-w-4xl mx-auto">
        {stackLayers.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={idx}
              className="relative p-5 sm:p-6 rounded-[22px] bg-[#070710] border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 group"
            >
              {/* Left: Step & Layer Tag (Fixed Width for Crisp Straight Alignment) */}
              <div className="flex items-center gap-3.5 w-full md:w-56 shrink-0">
                <span className="text-xs font-mono text-purple-400 font-bold w-6">
                  {item.step}
                </span>
                
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 shrink-0">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                
                <div className="flex flex-col text-left">
                  <span className="text-xs font-mono text-white/70 uppercase tracking-wider font-semibold">
                    {item.layer}
                  </span>
                  {item.sublayer && (
                    <span className="text-[10px] font-mono text-purple-400/90 uppercase tracking-wider">
                      {item.sublayer}
                    </span>
                  )}
                </div>
              </div>

              {/* Vertical subtle divider on md+ */}
              <div className="hidden md:block w-px h-10 bg-white/10 shrink-0" />

              {/* Right: Title & Description (Properly Arranged & Straight) */}
              <div className="flex-1 text-left min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-purple-300 transition-colors truncate sm:whitespace-normal">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default IntelligenceStack;

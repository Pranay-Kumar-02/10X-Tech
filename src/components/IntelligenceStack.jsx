import React from 'react';
import { Layers, Cpu, Code, Server, AppWindow } from 'lucide-react';

const IntelligenceStack = () => {
  const stackLayers = [
    {
      step: "01",
      layer: "APPLICATION",
      title: "Task-Specific Workflows",
      desc: "Voice interaction, localized internal search, and specialized enterprise execution.",
      icon: AppWindow
    },
    {
      step: "02",
      layer: "MODELS",
      title: "Proprietary Small Language Models (LFM™)",
      desc: "Compact, efficient model architectures trained in-house for low-latency inferencing.",
      icon: Cpu
    },
    {
      step: "03",
      layer: "ADAPTATION",
      title: "Domain Fine-Tuning & LoRA",
      desc: "Targeted model adaptation on private company knowledge bases without full retraining.",
      icon: Layers
    },
    {
      step: "04",
      layer: "LANGUAGE / TOKENIZATION",
      title: "Akshara Indic Tokenizer",
      desc: "Native Telugu and Indic language tokenization optimizing vocabulary allocation.",
      icon: Code
    },
    {
      step: "05",
      layer: "DEPLOYMENT",
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

      {/* 5-Layer Connected Stack */}
      <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        {stackLayers.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={idx}
              className="relative p-6 rounded-[24px] bg-[#070710] border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
            >
              {/* Step & Layer Tag */}
              <div className="flex items-center gap-4 min-w-[200px]">
                <span className="text-xs font-mono text-purple-400 font-bold">
                  {item.step}
                </span>
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
                  {item.layer}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
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

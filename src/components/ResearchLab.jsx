import React from 'react';
import { ArrowUpRight, Cpu, Layers, Code, Globe, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResearchLab = () => {
  return (
    <section className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 py-12 lg:py-16">
      
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-tagline-02 text-purple-400 uppercase tracking-widest font-mono text-xs mb-2 block">
            INSIDE THE WORK
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Engineering Native Intelligence
          </h2>
        </div>
        <p className="text-xs font-mono text-white/50 max-w-md">
          Proprietary tokenizers, small language model architectures, and local inference execution built in-house.
        </p>
      </div>

      {/* Lab Workbench Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Featured Artifact 1: Akshara Tokenizer */}
        <div className="lg:col-span-7 rounded-[28px] bg-white/[0.01] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-purple-500/30 transition-all duration-500 p-6 sm:p-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                INDIC TOKENIZATION ENGINE
              </span>
              <span className="text-xs font-mono text-white/40">Akshara Tokenizer</span>
            </div>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#070710] border border-white/10 mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}akshara_tokenizer_ui.png`}
                alt="Akshara Tokenizer Interface"
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080f] via-transparent to-transparent opacity-60" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Native Telugu & Indic Tokenization
            </h3>
            <p className="text-sm text-[#A0A0A0] leading-relaxed mb-6">
              Generic global LLM tokenizers fragment non-Latin scripts into redundant subword tokens, inflating latency and compute requirements. Our Akshara tokenizer optimizes token allocation specifically for Telugu and Indic Dravidian/Indo-Aryan scripts.
            </p>
          </div>

          <Link
            to="/tokenizer-prototype"
            className="text-btn-secondary inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-white text-xs font-mono uppercase hover:bg-white hover:text-black transition-all duration-300 w-fit group/btn"
          >
            <span>Try Akshara Tokenizer Demo</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>

        {/* Featured Artifact 2: LFM Models & Architecture */}
        <div className="lg:col-span-5 rounded-[28px] bg-white/[0.01] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-purple-500/30 transition-all duration-500 p-6 sm:p-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                PROPRIETARY MODEL FAMILY
              </span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                Live HuggingFace Spaces
              </span>
            </div>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#070710] border border-white/10 mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}resolution changed lfm image.png`}
                alt="LFM Model Architecture"
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080f] via-transparent to-transparent opacity-60" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              LFM™ (Language Fluency Models)
            </h3>
            <p className="text-sm text-[#A0A0A0] leading-relaxed mb-6">
              Native small language models trained in-house for low-latency conversational AI and localized tasks. Accessible via open access Hugging Face spaces for evaluation and testing.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-mono text-white/60 bg-white/[0.02] border border-white/5 p-3 rounded-xl">
              <span>English SLM (`en-luca-chat`)</span>
              <span className="text-emerald-400">Live</span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-white/60 bg-white/[0.02] border border-white/5 p-3 rounded-xl">
              <span>Telugu SLM (`luca-telugu`)</span>
              <span className="text-emerald-400">Live</span>
            </div>

            <Link
              to="/models"
              className="text-btn-secondary inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-white text-xs font-mono uppercase hover:bg-purple-600 hover:text-white transition-all duration-300 mt-2 group/btn"
            >
              <span>Explore All Language Models</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResearchLab;

import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Code, Layers, Globe, CheckCircle2, Play, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MODELS_DATA = [
  {
    id: 'english',
    name: 'LFM-English',
    badge: 'LIVE ON HUGGINGFACE',
    route: '/models',
    hfUrl: 'https://huggingface.co/spaces/shesettipavankumarswamy/en-luca-chat',
    desc: 'Compact small language model fine-tuned for English conversational tasks, Q&A, and low-latency instruction execution.',
    image: '/resolution changed lfm image.png',
    features: ['Low-latency inference', 'Document Q&A', 'Instruction following', 'Private deployment']
  },
  {
    id: 'telugu',
    name: 'LFM-Telugu',
    badge: 'LIVE ON HUGGINGFACE',
    route: '/models',
    hfUrl: 'https://huggingface.co/spaces/shesettipavankumarswamy/luca-telugu',
    desc: "First-of-its-kind native SLM for Telugu, one of India's most widely spoken Dravidian languages.",
    image: '/luca-telugu.png',
    features: ['Native Telugu script generation', 'Dravidian language fluency', 'Conversational AI', 'Colloquial coverage']
  },
  {
    id: 'tokenizer',
    name: 'Akshara Tokenizer',
    badge: 'PROTOTYPE DEMO',
    route: '/tokenizer-prototype',
    desc: 'Native Dravidian and Indic language tokenization engine crafted to eliminate token fragmentation in Telugu and Indian scripts.',
    image: '/akshara_tokenizer_ui.png',
    features: ['Native Telugu vocabulary', 'Reduced token count', 'Compressed compute footprint', 'Indic optimization']
  }
];

const InteractiveModelWorkbench = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const currentModel = MODELS_DATA[activeTab];

  return (
    <section className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 py-14 lg:py-20">
      
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-tagline-02 text-purple-400 uppercase tracking-widest font-mono text-xs mb-3 block">
            PROPRIETARY MODELS & TOKENIZERS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            10X Model Catalog
          </h2>
        </div>
        <p className="text-sm text-[#A0A0A0] max-w-md">
          Explore native small language models and Indic tokenization engines built in-house for real-world deployment.
        </p>
      </div>

      {/* Model Tabs Navigation */}
      <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-8 overflow-x-auto scrollbar-none">
        {MODELS_DATA.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveTab(idx)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold uppercase transition-all cursor-pointer shrink-0 ${
              activeTab === idx
                ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] border border-purple-400/40'
                : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <span>{item.name}</span>
            <span className="text-[10px] opacity-75">({item.badge})</span>
          </button>
        ))}
      </div>

      {/* Main Interactive Workbench Display */}
      <div className="rounded-[32px] bg-[#05050f]/90 border border-purple-500/20 backdrop-blur-xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
        
        {/* Left Column: Asset Media */}
        <div className="lg:col-span-6 relative aspect-[16/10] rounded-[24px] overflow-hidden bg-[#070714] border border-white/10 group">
          <img
            src={`${import.meta.env.BASE_URL}${currentModel.image.startsWith('/') ? currentModel.image.slice(1) : currentModel.image}`}
            alt={currentModel.name}
            className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05050f] via-transparent to-transparent opacity-80" />
          
          <div className="absolute top-4 left-4">
            <span className="text-[11px] font-mono font-semibold bg-black/80 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full backdrop-blur-md">
              {currentModel.badge}
            </span>
          </div>
        </div>

        {/* Right Column: Model Specs & Actions */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-purple-400 font-bold uppercase mb-2 block">
              10X PROPRIETARY TECHNOLOGY
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {currentModel.name}
            </h3>
            <p className="text-sm text-[#A0A0A0] leading-relaxed mb-6">
              {currentModel.desc}
            </p>

            {/* Feature Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {currentModel.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-mono text-white/80 bg-white/[0.02] border border-white/5 p-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            {currentModel.hfUrl && (
              <button
                type="button"
                onClick={() => navigate('/try', { state: { url: currentModel.hfUrl, title: currentModel.name } })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#512da8] via-[#6d28d9] to-[#7c3aed] text-white text-xs font-bold uppercase tracking-wider hover:from-[#7c3aed] hover:to-[#512da8] transition-all shadow-[0_0_25px_rgba(167,139,250,0.4)] active:scale-95 cursor-pointer"
              >
                <span>Launch Live Model Space</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            )}

            <button
              type="button"
              onClick={() => navigate(currentModel.route)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white text-xs font-mono uppercase hover:bg-white hover:text-black transition-all cursor-pointer"
            >
              <span>View Full Details</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};

export default InteractiveModelWorkbench;

import React, { useState } from 'react';
import { ArrowUpRight, Code, Layers, Sparkles, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LAB_ARTIFACTS = [
  {
    title: 'Akshara Indic Tokenization',
    subtitle: 'Native Indic Dravidian & Indo-Aryan subword optimization',
    tag: 'TOKENIZER RESEARCH',
    route: '/tokenizer-prototype',
    image: '/akshara_tokenizer_ui.png',
    desc: 'Generic global LLM tokenizers fragment Dravidian languages like Telugu into redundant byte sequences. Akshara allocates vocabulary space specifically for Indic script morphology, dramatically reducing token length.'
  },
  {
    title: 'LFM Model Constellation',
    subtitle: 'Task-specific small language model architecture',
    tag: 'MODEL RESEARCH',
    route: '/models',
    image: '/resolution changed lfm image.png',
    desc: 'Proprietary Language Fluency Models (LFM™) built for domain-specific execution, low latency, and zero external cloud dependency.'
  },
  {
    title: 'Spatial Intelligence Funnel',
    subtitle: 'Core computational architecture',
    tag: 'COMPUTATIONAL ARCHITECTURE',
    route: '/ai',
    image: '/quantum_funnel_10x.png',
    desc: 'Structured high-dimensional spatial field mapping input token vectors into task execution pathways on constrained local hardware.'
  }
];

const LabWorkbench = () => {
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(0);
  const activeArtifact = LAB_ARTIFACTS[activeIdx];

  return (
    <section className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 py-14 lg:py-20">
      
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-tagline-02 text-purple-400 uppercase tracking-widest font-mono text-xs mb-3 block">
            INSIDE THE WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Research & Workbench Artifacts
          </h2>
        </div>
        <p className="text-sm text-[#A0A0A0] max-w-md">
          Inspect original research artifacts, tokenization interfaces, and model architectures developed by 10X Technologies.
        </p>
      </div>

      {/* Artifact Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {LAB_ARTIFACTS.map((item, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveIdx(idx)}
            className={`p-5 rounded-[24px] text-left border transition-all cursor-pointer ${
              activeIdx === idx
                ? 'bg-purple-950/40 border-purple-400/50 shadow-[0_0_25px_rgba(167,139,250,0.25)]'
                : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20'
            }`}
          >
            <span className="text-[10px] font-mono text-purple-400 font-bold uppercase tracking-wider block mb-1">
              {item.tag}
            </span>
            <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
            <p className="text-xs text-[#888] line-clamp-1">{item.subtitle}</p>
          </button>
        ))}
      </div>

      {/* Main Editorial Display Panel */}
      <div className="rounded-[32px] bg-[#05050f]/90 border border-purple-500/20 backdrop-blur-xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
        
        {/* Left Column: Artifact Image */}
        <div className="lg:col-span-7 relative aspect-[16/9] rounded-[24px] overflow-hidden bg-[#070714] border border-white/10 group">
          <img
            src={`${import.meta.env.BASE_URL}${activeArtifact.image.startsWith('/') ? activeArtifact.image.slice(1) : activeArtifact.image}`}
            alt={activeArtifact.title}
            className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05050f] via-transparent to-transparent opacity-60" />
        </div>

        {/* Right Column: Editorial Text & Navigation */}
        <div className="lg:col-span-5 flex flex-col justify-between text-left">
          <div>
            <span className="text-xs font-mono text-purple-400 font-bold uppercase mb-2 block">
              {activeArtifact.tag}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {activeArtifact.title}
            </h3>
            <p className="text-sm text-[#A0A0A0] leading-relaxed mb-6">
              {activeArtifact.desc}
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate(activeArtifact.route)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white text-xs font-mono uppercase font-bold hover:bg-purple-500 transition-all cursor-pointer w-fit shadow-[0_0_20px_rgba(124,58,237,0.4)]"
          >
            <span>Explore Technical Prototype</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
};

export default LabWorkbench;

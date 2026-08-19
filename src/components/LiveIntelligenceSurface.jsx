import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Mic, ExternalLink, Sparkles } from 'lucide-react';
import SpatialFieldCanvas from './SpatialFieldCanvas';
import LucaEyes from './LucaEyes';

const SAMPLE_PROMPTS = [
  {
    title: 'Telugu Translation',
    input: 'Translate operational brief into native Telugu Dravidian script',
    output: 'తెలుగు అనువాదం సిద్ధంగా ఉంది: 10X LFM మోడల్స్ ప్రత్యక్షంగా మీ స్వంత హార్డ్‌వేర్‌పై అమలువుతాయి.'
  },
  {
    title: 'Edge Deployment Code',
    input: 'Generate Python code for local LFM model inferencing',
    output: 'import lfm\nengine = lfm.Engine(model="10x-lfm-1.8b", device="npu:0")\nresponse = engine.generate("Summarize local operational logs")\nprint(response)'
  },
  {
    title: 'Document Q&A',
    input: 'Extract key compliance metrics from private enterprise document',
    output: 'Key Finding: Internal knowledge retrieval executes 100% locally with zero cloud data egress.'
  }
];

const LiveIntelligenceSurface = () => {
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(0);
  const [userQuery, setUserQuery] = useState('');
  const [animState, setAnimState] = useState('idle'); // 'idle' | 'submit' | 'processing' | 'response'
  const [streamedResponse, setStreamedResponse] = useState(SAMPLE_PROMPTS[0].output);
  const [isTyping, setIsTyping] = useState(false);
  const timerRef = useRef(null);

  const activeSample = SAMPLE_PROMPTS[activeIdx];

  const handleSelectSample = (index) => {
    if (activeIdx === index && isTyping) return;
    setActiveIdx(index);
    setUserQuery(SAMPLE_PROMPTS[index].input);
    triggerTransformation(SAMPLE_PROMPTS[index].input, SAMPLE_PROMPTS[index].output);
  };

  const triggerTransformation = (inputText, targetOutput) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsTyping(true);
    setAnimState('submit');
    setStreamedResponse('');

    setTimeout(() => {
      setAnimState('processing');

      setTimeout(() => {
        setAnimState('response');
        let charIndex = 0;
        timerRef.current = setInterval(() => {
          charIndex += 3;
          if (charIndex >= targetOutput.length) {
            setStreamedResponse(targetOutput);
            setIsTyping(false);
            setAnimState('idle');
            clearInterval(timerRef.current);
          } else {
            setStreamedResponse(targetOutput.slice(0, charIndex));
          }
        }, 16); // 60fps butter-smooth interval
      }, 300);

    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleLaunchSpace = (e) => {
    if (e) e.preventDefault();
    navigate('/try', {
      state: {
        url: 'https://shesettipavankumarswamy-luca.hf.space/',
        title: 'LUCA AI',
        initialQuery: userQuery || activeSample.input
      }
    });
  };

  return (
    <section className="relative z-20 w-full min-h-[65svh] py-16 lg:py-24 flex flex-col justify-center items-center text-center overflow-hidden">
      
      {/* 3D Spatial Field Canvas Background */}
      <SpatialFieldCanvas state={animState} />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Cursor-Watching Luca Eyes & Smile */}
        <div className="mb-8 flex flex-col items-center justify-center">
          <span className="text-tagline-02 text-white/50 uppercase tracking-widest font-mono text-xs mb-2 block font-semibold">
            LIVE INTELLIGENCE
          </span>
          
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-none">
              LUCA
            </h2>
            <LucaEyes size="large" />
          </div>

          <p className="text-body-01 text-white/70 text-base sm:text-lg font-normal">
            A Model Built by 10X.
          </p>
        </div>

        {/* Minimalist Floating Input Surface with Sleek Obsidian & Silver Borders */}
        <div className="w-full max-w-2xl mx-auto mb-6">
          <div className="relative flex items-center p-2.5 sm:p-3 rounded-[32px] bg-[#07070c]/90 border border-white/15 backdrop-blur-2xl shadow-[0_16px_50px_rgba(0,0,0,0.6)] focus-within:border-white/30 transition-all duration-300">
            <input
              type="text"
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && triggerTransformation(userQuery || activeSample.input, activeSample.output)}
              placeholder={activeSample.input}
              className="flex-grow min-w-0 bg-transparent border-none outline-none text-white placeholder-white/30 text-xs sm:text-sm px-4 py-1.5 focus:ring-0 font-sans"
            />
            <div className="flex items-center gap-2 shrink-0 ml-2">
              <button
                type="button"
                aria-label="Voice input"
                onClick={handleLaunchSpace}
                className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Mic className="w-4 h-4 text-purple-300" />
              </button>
              <button
                type="button"
                onClick={() => triggerTransformation(userQuery || activeSample.input, activeSample.output)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-purple-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 cursor-pointer"
              >
                <span>Process Language</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Preset Sample Prompt Selector Pills with Butter-Smooth Transitions */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
          <span className="text-xs font-mono text-white/40 mr-1">Sample Language Prompts:</span>
          {SAMPLE_PROMPTS.map((sample, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelectSample(idx)}
              className={`text-xs font-mono px-3.5 py-1.5 rounded-full border transition-all duration-300 cursor-pointer ${
                activeIdx === idx
                  ? 'bg-white/15 border-white/40 text-white shadow-[0_0_15px_rgba(255,255,255,0.08)]'
                  : 'bg-white/[0.03] border-white/10 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {sample.title}
            </button>
          ))}
        </div>

        {/* Language Transformation Output Box with Fluid Transition */}
        <motion.div
          layout
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl mx-auto p-6 sm:p-8 rounded-[28px] bg-[#05050a]/90 border border-white/10 text-left backdrop-blur-xl relative overflow-hidden shadow-2xl"
        >
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest pb-3 mb-4 border-b border-white/10">
            <span className="text-white/50">MODEL INFERENCE OUTPUT</span>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>10X LFM Prototype</span>
            </span>
          </div>

          <div className="min-h-[70px] flex items-center">
            <pre className="whitespace-pre-wrap font-mono text-sm sm:text-base text-white/90 leading-relaxed w-full">
              {streamedResponse}
              {isTyping && <span className="w-2 h-4 bg-purple-400 inline-block animate-pulse ml-1 align-middle" />}
            </pre>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 mt-4 border-t border-white/10 text-xs font-mono">
            <button
              type="button"
              onClick={handleLaunchSpace}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 font-bold uppercase transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            >
              <span>Launch Full Screen Space</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => navigate('/tokenizer-prototype')}
              className="text-white/60 hover:text-white transition-colors underline underline-offset-4 cursor-pointer"
            >
              See How Language Moves (Akshara Indic Tokenizer) →
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default LiveIntelligenceSurface;

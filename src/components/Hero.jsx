import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mic, ArrowRight, Sparkles } from 'lucide-react';
import Logo10X from './Logo10X';

const Hero = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    navigate('/try', { 
      state: { 
        url: 'https://shesettipavankumarswamy-luca.hf.space/', 
        title: 'LUCA AI',
        initialQuery: query
      } 
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <section className="relative px-4 sm:px-6 pt-24 sm:pt-32 md:pt-36 pb-8 sm:pb-12 max-w-[1360px] mx-auto overflow-visible z-10 min-h-[60svh] flex items-center">
      
      <div className="flex flex-col items-center justify-center w-full relative z-10">
        
        {/* Centered Column: Text & CTA */}
        <div className="w-full flex flex-col items-center text-center z-20">
          
          <div className="mb-4 w-full max-w-6xl mx-auto flex justify-center items-center px-2">
            <Logo10X 
              className="h-9 sm:h-12 md:h-18 lg:h-24 w-auto object-contain max-w-full"
              animateTechnologies={true}
              delay={600}
            />
          </div>

          {/* Clear Business Positioning Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 max-w-4xl mx-auto px-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[1.1]">
              SMALL LANGUAGE MODELS.<br />
              <span className="bg-gradient-to-r from-purple-200 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
                BUILT FOR YOUR HARDWARE.
              </span>
            </h1>
          </motion.div>

          {/* Concise Supporting Statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-body-01 md:text-heading-06 text-white/70 font-normal mb-8 max-w-2xl mx-auto px-4 leading-relaxed"
          >
            Task-specific AI designed to run where your data and workloads already live.
          </motion.p>

          {/* Authentic Ask Luca Product Search Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-2xl mx-auto px-2 sm:px-4"
          >
            <div className="relative flex items-center py-2.5 sm:py-3 px-3 sm:px-4 w-full rounded-[32px] overflow-visible group">
              {/* Dynamic Backdrop Sibling */}
              <div className="absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none border rounded-[32px] bg-[#050505]/40 backdrop-blur-xl border-white/[0.15] shadow-[0_16px_36px_rgba(0,0,0,0.5)] group-hover:border-purple-500/40"></div>

              {/* Flex row container for inputs and button */}
              <div className="relative z-10 flex items-center w-full min-w-0">
                {/* Text Input */}
                <input
                  type="text"
                  placeholder="Ask Luca something..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-grow min-w-0 bg-transparent border-none outline-none text-white placeholder-white/40 text-sm sm:text-[15px] px-3 sm:px-4 py-1.5 focus:ring-0 focus:outline-none"
                />

                {/* Right Controls: Mic and Try LUCA button */}
                <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 ml-2">
                  <button 
                    type="button"
                    aria-label="Voice input"
                    onClick={handleSubmit}
                    className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full text-white/70 hover:text-white hover:bg-white/10 active:scale-95 transition-all duration-200 shrink-0 cursor-pointer"
                  >
                    <Mic className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" />
                  </button>

                  <button 
                    type="button"
                    onClick={handleSubmit}
                    className="relative overflow-hidden text-white text-[11px] sm:text-xs font-bold py-2.5 px-4 sm:px-6 rounded-full border border-purple-500/35 shadow-[0_0_20px_rgba(81,45,168,0.4)] active:scale-95 transition-all duration-300 shrink-0 cursor-pointer uppercase tracking-wider group whitespace-nowrap"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#512da8] to-[#4c1d95] opacity-100 pointer-events-none group-hover:from-[#6d28d9] group-hover:to-[#512da8] transition-all" />
                    <span className="relative z-10 flex items-center gap-1.5">
                      <span>TRY LUCA</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-3 text-xs font-mono text-white/40 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Interactive Model Prototype • Powered by 10X LFM</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

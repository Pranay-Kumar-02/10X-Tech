import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mic } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Track the window scroll position to dynamically change background/border opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <section className="relative px-6 pt-40 pb-12 max-w-[1360px] mx-auto overflow-visible z-10 min-h-[70svh] flex items-center">
      
      <div className="flex flex-col items-center justify-center w-full relative z-10">
        
        {/* Centered Column: Text & CTA */}
        <div className="w-full flex flex-col items-center text-center z-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-2 w-full max-w-6xl mx-auto"
          >
            <div className="flex justify-center items-center w-full">
              <img
                src="https://i.ibb.co/Y781ky06/Screenshot-2026-05-26-000916-removebg-preview.png"
                alt="10X Technologies"
                className="h-14 md:h-20 lg:h-28 w-auto object-contain"
                fetchpriority="high"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-body-01 md:text-heading-06 text-white mb-6 max-w-2xl mx-auto opacity-90"
          >
            Building AI that feels less artificial and more human.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-2xl mx-auto px-4 mt-2 animate-fadeIn"
          >
            <div className="relative flex items-center py-3 px-4 w-full rounded-[32px] overflow-visible">
              {/* Dynamic Backdrop Sibling matching the navbar exactly */}
              <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none border rounded-[32px] bg-[#050505]/20 backdrop-blur-md border-white/[0.15] shadow-[0_16px_36px_rgba(0,0,0,0.4)]"></div>

              {/* Flex row container for inputs and button */}
              <div className="relative z-10 flex items-center w-full">
                {/* Text Input on the left */}
                <input
                  type="text"
                  placeholder="Ask Luca"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-grow bg-transparent border-none outline-none text-white placeholder-white/35 text-[15px] px-3 py-1.5 focus:ring-0 focus:outline-none"
                />

                {/* Right Side Controls: Mic and Try button */}
                <div className="flex items-center gap-3 shrink-0">
                  {/* Mic Button on Right */}
                  <button 
                    type="button"
                    className="flex items-center justify-center w-9 h-9 rounded-full text-white/70 hover:text-white hover:bg-white/10 active:scale-95 transition-all duration-200 shrink-0 cursor-pointer"
                  >
                    <Mic className="w-5 h-5" />
                  </button>

                  {/* TRY LUCA Button on Right */}
                  <button 
                    type="button"
                    onClick={handleSubmit}
                    className="relative overflow-hidden text-white text-xs font-bold py-2 px-5 rounded-full border border-purple-500/35 shadow-[0_0_20px_rgba(81,45,168,0.4)] active:scale-95 transition-all duration-300 shrink-0 cursor-pointer uppercase tracking-wider group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#512da8] to-[#4c1d95] opacity-100 pointer-events-none" />
                    <span className="relative z-10">TRY LUCA</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

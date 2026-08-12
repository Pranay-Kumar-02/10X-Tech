import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Pause, Play, Cpu, Layers, Sparkles, AudioWaveform, Globe, Shield, Brain } from 'lucide-react';

const DURATION = 9000;

const tabs = [
  {
    id: 'hardware',
    title: 'Hardware',
    heading: 'Engineered Hardware',
    description: 'Custom-built intelligent hardware designed for natural interaction, spatial awareness, and always-on responsiveness.',
    features: [
      'Spatial audio system',
      'Intelligent sensors',
      'Edge AI processing',
      'Ambient interaction',
      'Premium industrial design',
      'Privacy-first architecture'
    ],
    visual: () => (
      <div className="relative w-full flex items-center justify-center rounded-2xl overflow-hidden bg-black border border-white/5 shadow-[inset_0_0_80px_rgba(81,45,168,0.2)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/30 blur-[100px] rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-600/20 blur-[80px] rounded-full" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 w-full flex items-center justify-center group"
        >
          <img 
            src="/hardware productpage.png" 
            alt="Hardware Showcase" 
            className="w-full h-auto object-contain block drop-shadow-2xl"
          />
        </motion.div>
      </div>
    )
  },
  {
    id: 'os',
    title: 'OS',
    heading: 'LUCA OS',
    description: 'A deeply integrated operating system built specifically for AI-native experiences.',
    features: [
      'Voice-first interaction',
      'Real-time intelligence',
      'Adaptive interface system',
      'Context-aware computing',
      'Cross-device ecosystem',
      'Secure data handling'
    ],
    visual: () => (
      <div className="relative w-full flex items-center justify-center rounded-2xl overflow-hidden bg-black border border-white/5 shadow-[inset_0_0_80px_rgba(59,130,246,0.15)]">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-indigo-600/20 blur-[100px] rounded-full" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 w-full flex items-center justify-center group"
        >
          <img 
            src="/os product page.png" 
            alt="OS Showcase" 
            className="w-full h-auto object-contain block drop-shadow-2xl"
          />
        </motion.div>
      </div>
    )
  },
  {
    id: 'ai',
    title: 'AI',
    heading: 'Conversational AI',
    description: 'Human-centered intelligence capable of understanding, assisting, and evolving naturally.',
    features: [
      'Natural conversation',
      'Personalized memory',
      'Multimodal understanding',
      'Real-time reasoning',
      'Emotion-aware interaction',
      'Continuous learning'
    ],
    visual: () => (
      <div className="relative w-full flex items-center justify-center rounded-2xl overflow-hidden bg-black border border-white/5 shadow-[inset_0_0_100px_rgba(217,70,239,0.15)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.15)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fuchsia-600/30 blur-[100px] rounded-full" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 w-full flex items-center justify-center group"
        >
          <img 
            src="/ai product page.png" 
            alt="AI Showcase" 
            className="w-full h-auto object-contain block drop-shadow-[0_0_40px_rgba(217,70,239,0.2)]"
          />
        </motion.div>
      </div>
    )
  }
];

const ProductTabs = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused,  setIsPaused]  = useState(false);

  const containerRef  = useRef(null);
  const isInView      = useInView(containerRef, { once: true, amount: 0.25 });

  const rafRef        = useRef(null);
  const startTimeRef  = useRef(null);
  const pausedAtRef   = useRef(0);
  const isPausedRef   = useRef(false);
  const activeIdxRef  = useRef(0);
  const barRefs       = useRef([null, null, null]); // one ref per tab

  const cancelAnim = () => cancelAnimationFrame(rafRef.current);

  const setBarWidth = (pct) => {
    const bar = barRefs.current[activeIdxRef.current];
    if (bar) bar.style.width = `${pct}%`;
  };

  const startAnim = useCallback((fromPct = 0) => {
    cancelAnim();
    startTimeRef.current = performance.now() - (fromPct / 100) * DURATION;

    const tick = (now) => {
      if (isPausedRef.current) return;
      const pct = Math.min(((now - startTimeRef.current) / DURATION) * 100, 100);
      pausedAtRef.current = pct;
      setBarWidth(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setActiveIdx(prev => (prev + 1) % tabs.length);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  // Reset ALL bars to 0, then start only the active one
  useEffect(() => {
    if (!isInView) return; // Wait until section is visible
    
    pausedAtRef.current = 0;
    activeIdxRef.current = activeIdx;
    barRefs.current.forEach(bar => { if (bar) bar.style.width = '0%'; });
    if (!isPausedRef.current) startAnim(0);
    return cancelAnim;
  }, [activeIdx, startAnim, isInView]);

  const handlePauseToggle = () => {
    const next = !isPaused;
    isPausedRef.current = next;
    setIsPaused(next);
    if (next) {
      cancelAnim();
    } else {
      startAnim(pausedAtRef.current);
    }
  };

  const handleTabClick = (idx) => {
    if (idx === activeIdx) return;
    setActiveIdx(idx);
  };

  const activeTab = tabs[activeIdx];

  return (
    <section ref={containerRef} className="py-4 lg:py-6 bg-black relative z-10 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Built From the Ground Up
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400"
          >
            LUCA combines hardware, operating system, and conversational AI into one unified ecosystem.
          </motion.p>
        </div>

        {/* Full-width tab bar */}
        <div className="w-full mb-6">
          <div className="flex items-stretch gap-2 w-full">
            {/* Tabs — progress lines live INSIDE so overflow:hidden clips at corners */}
            <div className="flex flex-1 border border-white/[0.07] rounded-full overflow-hidden relative">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(idx)}
                  className={`relative flex-1 flex items-center gap-2 px-5 py-3 text-left transition-all duration-300 cursor-pointer border-r border-white/[0.07] last:border-r-0 ${
                    activeIdx === idx ? 'bg-white/[0.06]' : 'bg-transparent hover:bg-white/[0.03]'
                  }`}
                >
                  <span className={`text-[9px] font-bold tracking-widest shrink-0 transition-colors duration-300 ${
                    activeIdx === idx ? 'text-purple-400' : 'text-zinc-600'
                  }`}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                    activeIdx === idx ? 'text-white' : 'text-zinc-500'
                  }`}>
                    {tab.title}
                  </span>

                  {/* Progress line — inside each tab, clipped by parent overflow-hidden */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
                    <div
                      ref={el => barRefs.current[idx] = el}
                      className="h-full bg-purple-400"
                      style={{ width: '0%' }}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Pause / Play — independent pill, same height */}
            <button
              onClick={handlePauseToggle}
              className="py-3 px-3 flex items-center justify-center border border-white/[0.07] rounded-full bg-transparent hover:bg-white/[0.05] text-zinc-500 hover:text-white transition-all duration-200 shrink-0 cursor-pointer aspect-square"
              aria-label={isPaused ? 'Play' : 'Pause'}
            >
              {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              {/* Text */}
              <div className="flex flex-col gap-6 order-2 lg:order-1">
                <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
                  {activeTab.heading}
                </h3>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  {activeTab.description}
                </p>
                <ul className="flex flex-col gap-4 mt-4">
                  {activeTab.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.08 }}
                      className="flex items-center gap-3 text-zinc-300"
                    >
                      <Sparkles className="w-5 h-5 text-purple-400 shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className="order-1 lg:order-2 w-full flex items-center justify-center">
                {activeTab.visual()}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};

export default ProductTabs;

import React, { useState, useEffect } from 'react';
import Logo10X from './Logo10X';
import LucaEyes from './LucaEyes';
import CloudChatBubble from './CloudChatBubble';
import CloudCtaButton from './CloudCtaButton';

const CONVERSATION = [
  {
    id: 1,
    isUser: true,
    text: "What does 10X Technologies build?"
  },
  {
    id: 2,
    isUser: false,
    text: "We build small language models for specific domains."
  },
  {
    id: 3,
    isUser: true,
    text: "Why small language models?"
  },
  {
    id: 4,
    isUser: false,
    text: "Enterprise tasks require specialized reasoning and sub-millisecond latency without sending private data to third-party servers."
  },
  {
    id: 5,
    isUser: true,
    text: "Why are you building LUCA?"
  },
  {
    id: 6,
    isUser: false,
    text: "LUCA is our on-device conversational intelligence engine, optimized for low-power edge silicon and private execution."
  }
];

const SectionOneStory = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [isCtaVisible, setIsCtaVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Trigger message reveals based on scroll position
      CONVERSATION.forEach((item) => {
        const el = document.getElementById(`chat-msg-${item.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < windowHeight * 0.82) {
            setVisibleItems((prev) => {
              if (prev.has(item.id)) return prev;
              const next = new Set(prev);
              next.add(item.id);
              return next;
            });
          }
        }
      });

      // Trigger CTA reveal
      const ctaEl = document.getElementById('chat-cta-wrapper');
      if (ctaEl) {
        const rect = ctaEl.getBoundingClientRect();
        if (rect.top < windowHeight * 0.88) {
          setIsCtaVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative z-10 w-full text-white selection:bg-purple-500/30 font-sans">
      
      {/* ── 1. THE INITIAL VIEW (BEFORE SCROLL - CLEAN POSTER WITH HERO EYES) ── */}
      <div className="relative min-h-[92svh] flex flex-col justify-center items-center px-6 sm:px-10 lg:px-16 max-w-[1360px] mx-auto w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
          
          {/* Left Side: 10X Technologies Brand + Headline + Supporting Statement */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left">
            
            {/* 10X Technologies Wordmark with Signature Cloud/Mist Reveal */}
            <div className="mb-4 sm:mb-6 -ml-1">
              <Logo10X
                className="h-14 sm:h-20 md:h-24 lg:h-28 w-auto object-contain max-w-full drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
                animateTechnologies={true}
                delay={350}
              />
            </div>

            {/* Dominant Headline */}
            <div className="max-w-xl">
              <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold tracking-[0.14em] uppercase leading-relaxed mb-3">
                <span className="block text-white/90 drop-shadow-[0_2px_15px_rgba(255,255,255,0.2)]">
                  SMALL LANGUAGE MODELS.
                </span>
                <span className="block mt-1 bg-gradient-to-r from-white via-[#E2D8FF] to-[#A78BFA] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(167,139,250,0.35)]">
                  BUILT FOR YOUR HARDWARE.
                </span>
              </h1>

              {/* Supporting Statement */}
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-md">
                Task-specific AI designed to run where your data and workloads live.
              </p>
            </div>

          </div>

          {/* Right Side: Standalone LUCA Eyes directly in Spatial Black */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center lg:items-end justify-center pt-6 lg:pt-0">
            <LucaEyes size="hero" />
          </div>

        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-6 inset-x-0 flex flex-col items-center justify-center pointer-events-none opacity-40 animate-pulse">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/60 mb-1.5">
            Scroll to Explore
          </span>
          <div className="w-px h-6 bg-gradient-to-b from-purple-400 to-transparent" />
        </div>
      </div>

      {/* ── 2. SCROLL STORY: MODERN DM-STYLE CONVERSATION WITH 10X CLOUD MIST REVEAL ── */}
      <div className="relative w-full max-w-[880px] mx-auto px-4 sm:px-8 pt-16 pb-28">
        
        {/* Open Alternating DM Chat Stream */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {CONVERSATION.map((item) => (
            <div 
              key={item.id} 
              id={`chat-msg-${item.id}`}
              className={`w-full flex ${item.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <CloudChatBubble
                text={item.text}
                isUser={item.isUser}
                isVisible={visibleItems.has(item.id)}
              />
            </div>
          ))}
        </div>

        {/* ── 3. RIGHT SIDE: CLOUD-REVEALED TRY LUCA CTA ── */}
        <div 
          id="chat-cta-wrapper"
          className="mt-14 flex justify-end"
        >
          <CloudCtaButton isVisible={isCtaVisible} />
        </div>

      </div>

    </section>
  );
};

export default SectionOneStory;

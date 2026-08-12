import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Radio, Globe, Zap, Sparkles, Volume2, Lock, Eye } from 'lucide-react';

const ProductBento = () => {
  return (
    <section className="relative flex flex-col py-4 lg:py-6 bg-black z-10 overflow-hidden px-[22px]">
      <style>{`
        .bento-grid-container {
          display: grid;
          gap: 14px;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: auto 215px 61px 68px 68px;
          grid-template-areas:
            "top-row top-row top-row top-row"
            "left1   hero    hero    right-col"
            "left2   hero    hero    right-col"
            "left2   hero    hero    right-col"
            "left2   bottom  bottom  right-col";
        }
        .bento-top-row-grid {
          display: grid;
          gap: 14px;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .bento-grid-container {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            grid-template-areas:
              "hero hero" "top-row top-row"
              "left1 right-col" "left2 right-col" "bottom bottom";
          }
          .bento-top-row-grid { grid-template-columns: repeat(2, 1fr); }
          .bento-card-height  { height: auto !important; min-height: 160px; }
          .bento-hero-height  { height: auto !important; min-height: 300px; }
        }
        @media (max-width: 767px) {
          .bento-grid-container, .bento-top-row-grid {
            display: flex; flex-direction: column; gap: 14px;
          }
          .bento-card-height { height: auto !important; min-height: 140px; }
          .bento-hero-height { height: auto !important; min-height: 300px; }
        }
      `}</style>

      {/* Starfield */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[15%] w-0.5 h-0.5 bg-white rounded-full opacity-20" />
        <div className="absolute top-[50%] right-[20%] w-0.5 h-0.5 bg-white rounded-full opacity-15" />
        <div className="absolute bottom-[30%] left-[40%] w-1 h-1 bg-white rounded-full opacity-20" />
        <div className="absolute bottom-[10%] right-[8%] w-0.5 h-0.5 bg-white rounded-full opacity-25" />
      </div>

      <div className="max-w-[1360px] mx-auto relative z-10 w-full">

        {/* Heading */}
        <div className="text-center mb-6 select-none">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-[30px] md:text-[40px] lg:text-[52px] font-bold tracking-tight text-white uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.05)] font-sans"
          >
            WORLD'S FIRST AI SMART SPEAKER
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid-container w-full">

          {/* ── ROW 1: 4 top cards ── */}
          <div style={{ gridArea: 'top-row' }} className="bento-top-row-grid w-full">
            {[
              { label: 'SPATIAL AUDIO', title: 'Room Resonance',  desc: 'Concentric acoustic arrays for immersive room-scale projection.',   Icon: Volume2, image: '/resolution%20changed%20spatial%20audio3%20img.png' },
              { label: 'EDGE AI',       title: 'Local Inference', desc: 'On-device neural network execution with zero latency.',              Icon: Cpu, image: '/resolution%20changed%20edge%20ai%204.png' },
              { label: 'LUCA OS',       title: 'Real-Time Core',  desc: 'Low-level OS scheduled dynamically for sub-millisecond threads.',   Icon: Layers, image: '/resolution%20changed%20old1%20img.png' },
              { label: 'VOICE NATIVE',  title: 'Instant Voice',   desc: 'Continuous hardware speech-to-speech loop running locally.',        Icon: Radio, image: '/resolution%20changed%20on%20device%20new.png', imageStyle: { transform: 'translateY(12px)' } },
            ].map(({ label, title, desc, Icon, image, imageStyle }) => (
              <motion.div
                key={label}
                whileHover={{ borderColor: 'rgba(120,80,255,0.3)' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`bento-card-height h-[165px] rounded-[28px] group cursor-default transition-all overflow-hidden relative border border-white/[0.12] ${
                  !image 
                    ? 'bg-white/[0.01] backdrop-blur-md p-5 flex flex-col justify-between' 
                    : 'bg-transparent'
                }`}
              >
                {image ? (
                  <img 
                    src={image} 
                    alt={label} 
                    className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 object-cover" 
                    style={imageStyle}
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" style={{ background: 'radial-gradient(circle at center,rgba(120,80,255,0.05)0%,transparent 70%)' }} />
                    <div className="relative z-20 flex justify-between items-start">
                      <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">{label}</span>
                      <Icon className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
                    </div>
                    <div className="relative z-20">
                      <h3 className="text-white text-sm font-bold tracking-tight mb-1">{title}</h3>
                      <p className="text-[#888] text-[10px] leading-relaxed">{desc}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* ── left1 ── */}
          <motion.div
            whileHover={{ borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'left1' }}
            className="bento-card-height h-[215px] rounded-[28px] border border-white/[0.12] bg-transparent group cursor-default transition-all overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            <img
              src="/resolution%20changed%20NEURAL%20CORPS%20img.png"
              alt="Neural Corps"
              className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 object-cover"
              draggable={false}
            />
          </motion.div>

          {/* ── HERO card: center image ── */}
          <motion.div
            whileHover={{ borderColor: 'rgba(120,80,255,0.2)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'hero' }}
            className="bento-hero-height rounded-[28px] border border-white/[0.12] bg-white/[0.01] relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center,rgba(120,80,255,0.07)0%,transparent 70%)' }} />
            <img
              src="/worldfirst.png"
              alt="LUCA AI"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
              draggable={false}
            />
          </motion.div>

          {/* ── right-col wrapper ── */}
          <div style={{ gridArea: 'right-col' }} className="flex flex-col gap-[14px]">
            {/* ── right1 ── */}
            <motion.a
              href="https://libremobileos.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ borderColor: 'rgba(120,80,255,0.3)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bento-card-height h-[135px] rounded-[28px] border border-white/[0.12] bg-transparent group cursor-pointer transition-all overflow-hidden relative block"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              <img
                src="/resolution%20changed%20libre%20os1%20img.png"
                alt="REAL-TIME AI"
                className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 object-cover"
                draggable={false}
              />
            </motion.a>

            {/* ── right2 ── */}
            <motion.div
              whileHover={{ borderColor: 'rgba(120,80,255,0.3)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex-1 rounded-[28px] bg-transparent border border-white/[0.12] group cursor-default transition-all overflow-hidden relative"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              <img
                src="/resolution%20changed%20privacy%20new1%20img.png"
                alt="Privacy"
                className="absolute inset-0 w-full h-full pointer-events-none select-none object-cover"
                style={{ transform: 'scale(1.05)' }}
                draggable={false}
              />
            </motion.div>
          </div>

          {/* ── left2 ── */}
          <motion.div
            whileHover={{ borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'left2' }}
            className="bento-card-height h-[225px] rounded-[28px] border border-white/[0.12] bg-transparent group cursor-default transition-all overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            <img
              src="/reslution%20changed%20ambient1%20img.png"
              alt="Ambient"
              className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 object-cover"
              draggable={false}
            />
          </motion.div>

          {/* ── bottom ── */}
          <motion.div
            whileHover={{ borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'bottom' }}
            className="bento-card-height h-[68px] rounded-[28px] border border-white/[0.12] bg-transparent group cursor-default transition-all overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            <img
              src="/resolutin%20changed%20Ecosystem%20Sync%20img.png"
              alt="Ecosystem Sync"
              className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 object-cover"
              draggable={false}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProductBento;

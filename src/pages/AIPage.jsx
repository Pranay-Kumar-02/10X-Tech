import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Navbar from '../components/Navbar';
import Starfield from '../components/Starfield';
import FeatureLinks from '../components/FeatureLinks';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import { Sparkles, Layers, Settings2, ArrowUpRight, MessageCircle, Zap, Target, Shield } from 'lucide-react';
import WorkflowShowcase from '../components/WorkflowShowcase';
import TechnicalFiller from '../components/TechnicalFiller';
import BackingCards from '../components/BackingCards';

const AIPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  const handleEyeBlink = () => {
    setIsBlinking(true);
    setTimeout(() => setIsBlinking(false), 200);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const eyeTransform = `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)`;

  const features = [
    {
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      title: 'Point it at a task.',
      desc: 'Pick an open model, describe the task in plain English, ship the endpoint. We handle the eval set, the routing, the autoscaling.',
    },
    {
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      title: 'Watch every request.',
      desc: 'Live traffic streams into a private, in-region eval store. We auto-cluster confusing inputs and surface where the model is hesitating.',
    },
    {
      icon: <Settings2 className="w-5 h-5 text-purple-400" />,
      title: 'Quietly retrain.',
      desc: 'Once a cluster of confusion is big enough, we kick off a LoRA run on a separate fleet, validate against your evals, and hot-swap the adapter.',
    },
  ];

  return (
    <div className="min-h-[100svh] bg-black text-white selection:bg-purple-500/30 font-sans relative w-full flex flex-col">
      <style>{`

        @keyframes scanMove {
          0%   { top: 14%; }
          100% { top: 82%; }
        }
        .scan-line {
          animation: scanMove 2.4s ease-in-out infinite alternate;
        }
        .scan-glow {
          animation: scanMove 2.4s ease-in-out infinite alternate;
        }

        @keyframes cornerPulse {
          0%, 100% { opacity: 0.7; }
          50%      { opacity: 1;   }
        }
        .corner-bracket { animation: cornerPulse 2s ease-in-out infinite; }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: scroll-left 30s linear infinite;
          will-change: transform;
        }
        .animate-marquee-right {
          animation: scroll-right 30s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="bg-noise fixed pointer-events-none z-50"></div>

      {/* Starfield */}
      <div className="absolute top-0 left-0 right-0 h-[1000px] w-full pointer-events-none z-0 overflow-hidden">
        <Starfield />
      </div>

      <div className="relative z-10 flex flex-col w-full">
        <Navbar openContactModal={() => setIsContactModalOpen(true)} />

        <main className="flex-grow flex flex-col w-full">
          {/* Section 1: Hero */}
          <section className="relative w-full flex flex-col z-10 pt-32 md:pt-48 lg:pt-56 pb-2">
            {/* Main content — vertically centered, responsive grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-stretch max-w-[1360px] mx-auto w-full px-6 pb-2 lg:pb-4">
              
              {/* Left Column: Text Content */}
              <div className="max-w-2xl flex flex-col gap-4 order-1">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#512da8]/20 border border-[#512da8]/30 rounded-full px-3 py-1.5 w-fit mb-4">
                  <svg className="w-3.5 h-3.5 text-[#a78bfa]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                  </svg>
                  <span className="text-[#a78bfa] text-xs font-bold uppercase tracking-widest">Introducing</span>
                </div>

                {/* Heading */}
                <div>
                  <h1 className="text-tier-1 opacity-[0.85] transform-gpu will-change-transform" style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', transform: 'translateZ(0)' }}>
                    L . F . M
                  </h1>
                  <p className="text-tier-2 mt-4 text-lg">
                    Conversational AI for internal knowledge.
                  </p>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-6 text-tier-3 max-w-xl mb-4">
                  <p className="leading-relaxed text-[15px]">
                    Engineered exclusively for rigid enterprise architecture, the Language Fluency Model bypasses the latency, cost, and critical security vulnerabilities of cloud-based APIs. It securely ingests your proprietary knowledge bases and operational manuals to deliver immediate, perfectly localized answers directly within your secure perimeter.
                  </p>

                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4 flex-wrap mt-1">
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="px-7 py-3 rounded-full bg-white text-black text-sm font-bold tracking-wide hover:bg-zinc-200 transition-all duration-300"
                  >
                    Get a Demo
                  </button>
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="px-7 py-3 rounded-full border border-white/[0.15] text-white text-sm font-bold tracking-wide hover:border-white/40 transition-all duration-300"
                  >
                    Our Approach
                  </button>
                </div>

              </div>

              {/* Right Column: Duplicated AI Active visual */}
              <div className="flex justify-center lg:justify-end order-2 w-full h-full">
                <div
                  className="relative w-full h-full rounded-[24px] bg-[#04040c] overflow-hidden flex flex-col cursor-pointer"
                  style={{ boxShadow: '0 0 60px rgba(81,45,168,0.15), 0 0 120px rgba(81,45,168,0.1)' }}
                  onMouseDown={handleEyeBlink}
                >
                  {/* Subtle grid */}
                  <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

                  {/* ── Corner brackets ── */}
                  <div className="corner-bracket absolute top-4 left-4 w-6 h-6 border-t-[2px] border-l-[2px] border-[#512DA8] rounded-tl-[8px] pointer-events-none z-30"></div>
                  <div className="corner-bracket absolute top-4 right-4 w-6 h-6 border-t-[2px] border-r-[2px] border-[#512DA8] rounded-tr-[8px] pointer-events-none z-30"></div>
                  <div className="corner-bracket absolute bottom-4 left-4 w-6 h-6 border-b-[2px] border-l-[2px] border-[#512DA8] rounded-bl-[8px] pointer-events-none z-30"></div>
                  <div className="corner-bracket absolute bottom-4 right-4 w-6 h-6 border-b-[2px] border-r-[2px] border-[#512DA8] rounded-br-[8px] pointer-events-none z-30"></div>

                  {/* ── Scan line ── */}
                  <div
                    className="scan-line absolute left-0 right-0 h-[1.5px] z-20 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, transparent 0%, rgba(81,45,168,0.9) 25%, rgba(167,139,250,1) 50%, rgba(81,45,168,0.9) 75%, transparent 100%)' }}
                  ></div>
                  {/* Scan glow beneath line */}
                  <div
                    className="scan-glow absolute left-0 right-0 h-10 z-20 pointer-events-none -mt-5"
                    style={{ background: 'linear-gradient(to bottom, transparent, rgba(81,45,168,0.15), transparent)' }}
                  ></div>

                  {/* Status badge */}
                  <div className="relative z-10 flex justify-center pt-5">
                    <div className="flex items-center gap-2 bg-black/60 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,1)]"></span>
                      <span className="text-white text-xs font-medium tracking-wide">AI Active</span>
                    </div>
                  </div>

                  {/* Eyes */}
                  <div className="relative z-10 flex-1 flex items-center justify-center gap-10">
                    <div 
                      className="w-[74px] h-[74px] rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.25),0_0_60px_rgba(255,255,255,0.1)] transition-transform duration-100 ease-out"
                      style={{ transform: isBlinking ? `${eyeTransform} scaleY(0.06)` : eyeTransform }}
                    ></div>
                    <div 
                      className="w-[74px] h-[74px] rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.25),0_0_60px_rgba(255,255,255,0.1)] transition-transform duration-100 ease-out"
                      style={{ transform: isBlinking ? `${eyeTransform} scaleY(0.06)` : eyeTransform }}
                    ></div>
                  </div>

                  {/* Bottom text */}
                  <div className="relative z-10 px-5 pb-5 pt-3 bg-gradient-to-t from-black/80 to-transparent text-center">
                    <p className="text-white/80 text-xs tracking-wide">Understanding. Reasoning. Expressing.</p>
                    <p className="text-purple-400 font-semibold text-sm mt-1">Fluently.</p>
                  </div>

                  {/* Inset shadow */}
                  <div className="absolute inset-0 pointer-events-none rounded-[24px]"
                    style={{ boxShadow: 'inset 0 0 60px rgba(0,0,0,0.7)' }}
                  ></div>
                </div>
              </div>

            </div>

            {/* Marquee ticker at the bottom */}
            <div className="mt-0 lg:mt-2 w-full border-y border-white/[0.06] pt-5 pb-5 overflow-hidden">
              <style>{`
                @keyframes marquee-left {
                  0%   { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .marquee-track { animation: marquee-left 24s linear infinite; display: flex; width: max-content; }
              `}</style>
              <div className="marquee-track gap-0">
                {[
                  'INDIC-FIRST', 'FULLY OFFLINE', 'LICENSE-BASED', 'ZERO LATENCY',
                  'ON-DEVICE', 'DEPLOYMENT-READY', 'MULTILINGUAL', 'PRIVACY BY DESIGN',
                  'INDIC-FIRST', 'FULLY OFFLINE', 'LICENSE-BASED', 'ZERO LATENCY',
                  'ON-DEVICE', 'DEPLOYMENT-READY', 'MULTILINGUAL', 'PRIVACY BY DESIGN',
                ].map((tag, i) => (
                  <span key={i} className="flex items-center gap-6 px-6 text-[11px] font-bold tracking-[0.25em] text-zinc-600 uppercase whitespace-nowrap">
                    {tag}
                    <span className="w-1 h-1 rounded-full bg-zinc-700 shrink-0" />
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2: Staggered Content Rows */}
          <section className="relative w-full z-10 flex flex-col items-center justify-start pt-2 md:pt-4 pb-12 md:pb-20 overflow-hidden">
            <div className="w-full max-w-[1360px] mx-auto text-center px-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white/90">
                You do not need frontier AI for every workflow.<br />
                You should not depend on APIs for internal questions.
              </h2>
            </div>

            {/* Content Rows Container */}
            <div className="w-full mt-6 md:mt-8 relative flex flex-col gap-6 lg:gap-8 overflow-hidden py-4 md:py-6">
              {/* Top divider */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full"></div>

              {/* Row 1 (Continuous Marquee - Left to Right) */}
              <div className="flex w-full overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
                <div className="flex w-max cursor-pointer animate-marquee-right">
                  {[1, 2, 3, 4].map((setIndex) => (
                    <div key={setIndex} className="flex justify-center gap-3 md:gap-4 lg:gap-5 pr-3 md:pr-4 lg:pr-5 shrink-0">
                      {[
                        '/1.png',
                        '/2.png',
                        '/3.png',
                        '/4.png',
                        '/5.png',
                        '/6.png',
                        '/7.png',
                        '/8.png',
                        '/9.png',
                        '/10.png',
                        '/11.png'
                      ].map((src, i) => {
                        return (
                          <div 
                            key={`row1-${setIndex}-${i}`}
                            className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px] rounded-[16px] md:rounded-[20px] flex-shrink-0 bg-gradient-to-b from-[#141414] to-[#050505] border border-white/[0.08] hover:border-purple-500/40 transition-all duration-500 flex items-center justify-center relative overflow-hidden group shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_15px_rgba(0,0,0,0.5)]"
                          >
                            <img 
                              src={src} 
                              alt="Logo" 
                              className="w-full h-full object-contain relative z-10 opacity-60 group-hover:opacity-100 transition-all duration-500" 
                            />
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 (Continuous Marquee - Right to Left) */}
              <div className="flex w-full overflow-hidden relative mt-3 md:mt-4 lg:mt-5" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
                <div className="flex w-max cursor-pointer animate-marquee-left">
                  {[1, 2, 3, 4].map((setIndex) => (
                    <div key={setIndex} className="flex justify-center gap-3 md:gap-4 lg:gap-5 pr-3 md:pr-4 lg:pr-5 shrink-0">
                      {[
                        '/12.png',
                        '/13.png',
                        '/14.png',
                        '/15.png',
                        '/16.png',
                        '/17.png',
                        '/18.png',
                        '/19.png',
                        '/20.png',
                        '/21.png',
                        '/22.png',
                        '/23.png'
                      ].map((src, i) => {
                        return (
                          <div 
                            key={`row2-${setIndex}-${i}`}
                            className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px] rounded-[16px] md:rounded-[20px] flex-shrink-0 bg-gradient-to-b from-[#141414] to-[#050505] border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-500 flex items-center justify-center relative overflow-hidden group shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_15px_rgba(0,0,0,0.5)]"
                          >
                            <img 
                              src={src} 
                              alt="Logo" 
                              className="w-full h-full object-contain relative z-10 opacity-60 group-hover:opacity-100 transition-all duration-500" 
                            />
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom divider */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full"></div>
            </div>
          </section>


          {/* Announcement Cards */}
          <BackingCards />

          {/* Section 3: LFM Core Use Case */}
          <section className="relative w-full z-10 py-16 md:py-24 px-6 flex flex-col items-center min-h-[70svh] justify-center">
            <div className="w-full max-w-[1360px] mx-auto flex flex-col">

              {/* TOP CENTER HEADING */}
              <div className="w-full max-w-[1360px] mx-auto text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white/90">
                  You do not need frontier AI for every workflow.<br />
                  You should not depend on APIs for internal questions.
                </h2>
              </div>

              {/* MAIN CONTENT GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 w-full">

                {/* LEFT SIDE: Large vertical image card */}
                <div className="relative w-full rounded-[24px] overflow-hidden border border-white/5 bg-[#0a0a0f] min-h-[400px] lg:min-h-full group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/40 z-10 pointer-events-none"></div>
                  <img 
                    src="/enterprise_server.png" 
                    alt="Enterprise Server Setup" 
                    className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-70"
                  />
                </div>

                {/* RIGHT SIDE: Stacked cards */}
                <div className="flex flex-col gap-4 lg:gap-5 w-full h-full">
                  
                  {/* CARD 1: Large Main Card */}
                  <div className="relative flex flex-col justify-center p-6 lg:p-10 rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md flex-grow overflow-hidden group hover:border-purple-500/30 transition-all duration-500">
                    <div className="relative z-10 flex flex-col">
                      <span className="text-tagline-02 text-purple-400 uppercase mb-3 block">LFM Core</span>

                      <h3 className="text-[1.05rem] lg:text-[1.15rem] xl:text-[1.35rem] font-semibold text-white tracking-tight mb-4">
                        Most enterprise tasks are not open-ended reasoning problems.
                      </h3>

                      <p className="text-[0.95rem] text-[#A0A0A0] leading-[1.7] mb-6">
                        They are retrieval problems, lookup problems, translation problems, summarization problems, and structured response problems.
                      </p>

                      <p className="text-[0.95rem] text-[#A0A0A0] leading-[1.7]">
                        LFM is built for that class of workload.
                      </p>
                    </div>
                  </div>

                  {/* BOTTOM TWO SMALL CARDS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                    
                    {/* Card 2 */}
                    <div className="relative flex flex-col p-6 lg:p-8 rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md hover:border-purple-500/30 transition-all duration-500 group overflow-hidden">
                      <div className="relative z-10 flex flex-col h-full">
                        <h4 className="text-[1.05rem] lg:text-[1.15rem] xl:text-[1.35rem] font-semibold text-white tracking-tight mb-3">Private<br />by design</h4>
                        <p className="text-[0.95rem] text-[#A0A0A0] leading-[1.7] mt-auto pt-2">
                          Run language workflows without exposing internal company knowledge to external AI APIs.
                        </p>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative flex flex-col p-6 lg:p-8 rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md hover:border-purple-500/30 transition-all duration-500 group overflow-hidden">
                      <div className="relative z-10 flex flex-col h-full">
                        <h4 className="text-[1.05rem] lg:text-[1.15rem] xl:text-[1.35rem] font-semibold text-white tracking-tight mb-3">Fast local<br />inference</h4>
                        <p className="text-[0.95rem] text-[#A0A0A0] leading-[1.7] mt-auto pt-2">
                          Optimized for structured enterprise intelligence tasks with lower latency and predictable outputs.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Capabilities Section */}
          <section className="relative z-10 px-6 pb-12">
            <div className="w-full max-w-[1360px] mx-auto rounded-2xl bg-[#0d0d18] border border-white/[0.07] p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] gap-6 items-start">

                {/* Left label */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-white text-xl font-bold leading-snug">
                    Built for fluent<br />intelligence
                  </h2>
                  <p className="text-[#666] text-xs leading-relaxed">
                    10X AI powers the next generation of applications with human-like understanding and expression.
                  </p>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors text-xs font-medium flex items-center gap-1.5 w-fit">
                    See all capabilities <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Right: 4 capability cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                  {[
                    {
                      icon: <MessageCircle className="w-5 h-5 text-purple-400" />,
                      title: 'Deep Understanding',
                      desc: 'Grasps nuance, context and intent across languages and domains.',
                    },
                    {
                      icon: <Zap className="w-5 h-5 text-purple-400" />,
                      title: 'Natural Expression',
                      desc: 'Generates responses that feel natural, fluent and human-like.',
                    },
                    {
                      icon: <Target className="w-5 h-5 text-purple-400" />,
                      title: 'Real-world Ready',
                      desc: 'Trained for messy, real-world conversations, not just clean benchmarks.',
                    },
                    {
                      icon: <Shield className="w-5 h-5 text-purple-400" />,
                      title: 'Private & Secure',
                      desc: 'Enterprise-grade privacy with on-prem, VPC and regional control.',
                    },
                  ].map((cap, i) => (
                    <div key={i} className="flex flex-col gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500/15 border border-purple-500/20 flex items-center justify-center">
                        {cap.icon}
                      </div>
                      <h3 className="text-white text-sm font-semibold leading-snug">{cap.title}</h3>
                      <p className="text-[#666] text-xs leading-relaxed">{cap.desc}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </section>

          {/* Interactive Workflow Showcase */}
          <TechnicalFiller />
          <WorkflowShowcase />

          <TechnicalFiller />


          {/* Feature Links */}
          <div className="relative z-10">
            <FeatureLinks mode="ai" />
          </div>

        </main>
        <Footer openContactModal={() => setIsContactModalOpen(true)} />
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
};

export default AIPage;

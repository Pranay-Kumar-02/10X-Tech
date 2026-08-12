import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, animate } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, Layers, Cpu, Radio, Shield, Globe, Zap, Sparkles } from 'lucide-react';

const ProductAnnouncement = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  
  // Interactive spec telemetry tab state
  const [activePillar, setActivePillar] = useState('hardware');

  // Screen and viewport size tracking for responsive fluid pixel calculations
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = dimensions.width < 768;

  // 1. Calculate physical starting inline dimensions inside standard Figma flex slot
  const inlineWidth = isMobile 
    ? Math.max(dimensions.width - 32, 280) 
    : Math.min(840, dimensions.width * 0.6);
  
  const inlineHeight = isMobile 
    ? inlineWidth * (9 / 16) 
    : inlineWidth * (9 / 21);

  // 2. Calculate target expanded dimensions (92vw width and 88vh height on desktop, clamped aspect ratio)
  const expandedWidth = isMobile
    ? dimensions.width * 0.95 // Maximize viewport naturally on mobile
    : dimensions.width * 0.92; // 92vw on desktop

  const expandedHeight = isMobile
    ? expandedWidth * (9 / 16)
    : Math.min(dimensions.height * 0.88, expandedWidth * (9 / 21)); // 88vh on desktop

  const maxW = isMobile ? '95vw' : '92vw';
  const maxH = isMobile ? '85vh' : '88vh';

  // Enforce premium slow-motion playback speed (0.75x) dynamically
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.75;
      
      const enforceSpeed = () => {
        video.playbackRate = 0.75;
      };

      video.addEventListener('play', enforceSpeed);
      video.addEventListener('playing', enforceSpeed);
      video.addEventListener('loadedmetadata', enforceSpeed);

      return () => {
        video.removeEventListener('play', enforceSpeed);
        video.removeEventListener('playing', enforceSpeed);
        video.removeEventListener('loadedmetadata', enforceSpeed);
      };
    }
  }, [isPlaying]);

  // Hover & Scroll lock expansion states
  const [isHovered, setIsHovered] = useState(false);
  const [targetProgress, setTargetProgress] = useState(0);
  const hoverProgress = useMotionValue(0);
  const touchStartY = useRef(0);

  // Smoothly animate expansion progress driven by scroll lock
  useEffect(() => {
    const controls = animate(hoverProgress, targetProgress, {
      type: 'spring',
      stiffness: 45,
      damping: 20,
      restDelta: 0.001
    });
    return () => controls.stop();
  }, [targetProgress, hoverProgress]);

  // Reset targetProgress to 0 on unhover
  useEffect(() => {
    if (!isHovered) {
      setTargetProgress(0);
    }
  }, [isHovered]);

  // Scroll lock interceptor logic
  useEffect(() => {
    const handleWheel = (e) => {
      if (!isHovered) return;

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const delta = e.deltaY;

      if (delta > 0) {
        // Scrolling down: Expand the video if it's not fully expanded yet
        if (targetProgress < 1) {
          e.preventDefault();
          const step = Math.min(Math.max(Math.abs(delta) * 0.0012, 0.015), 0.08);
          setTargetProgress(prev => Math.min(prev + step, 1));
        }
      } else if (delta < 0) {
        // Scrolling up: Shrink the video if it's expanded and we are at the top of the section
        if (targetProgress > 0 && rect.top >= -50) {
          e.preventDefault();
          const step = Math.min(Math.max(Math.abs(delta) * 0.0012, 0.015), 0.08);
          setTargetProgress(prev => Math.max(prev - step, 0));
        }
      }
    };

    const handleTouchStart = (e) => {
      if (!isHovered) return;
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!isHovered) return;

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchY; // Positive when scrolling down

      if (deltaY > 0) {
        // Scrolling down
        if (targetProgress < 1) {
          if (e.cancelable) e.preventDefault();
          const step = Math.min(Math.max(Math.abs(deltaY) * 0.0012, 0.015), 0.08);
          setTargetProgress(prev => Math.min(prev + step, 1));
        }
      } else if (deltaY < 0) {
        // Scrolling up
        if (targetProgress > 0 && rect.top >= -50) {
          if (e.cancelable) e.preventDefault();
          const step = Math.min(Math.max(Math.abs(deltaY) * 0.0012, 0.015), 0.08);
          setTargetProgress(prev => Math.max(prev - step, 0));
        }
      }

      touchStartY.current = touchY;
    };

    // Register active listeners to allow preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isHovered, targetProgress]);

  // 1. Viewport-centered pixel growth values
  const videoWidth = useTransform(hoverProgress, [0, 1], [inlineWidth, expandedWidth]);
  const videoHeight = useTransform(hoverProgress, [0, 1], [inlineHeight, expandedHeight]);
  const videoRadius = useTransform(hoverProgress, [0, 1], [24, 0]);

  // 2. Centered header text slide-out
  const headerY = useTransform(hoverProgress, [0, 1], [0, -35]);
  const headerOpacity = useTransform(hoverProgress, [0, 1], [1, 0.15]); // Traces softly visible

  // 3. Workstation split-open mechanical slide-out transforms
  const leftPanelX = useTransform(hoverProgress, [0, 1], [0, -120]);
  const leftPanelOpacity = useTransform(hoverProgress, [0, 1], [1, 0.15]);

  const rightPanelX = useTransform(hoverProgress, [0, 1], [0, 120]);
  const rightPanelOpacity = useTransform(hoverProgress, [0, 1], [1, 0.15]);

  const topChromeY = useTransform(hoverProgress, [0, 1], [0, -45]);
  const topChromeOpacity = useTransform(hoverProgress, [0, 1], [1, 0.20]);

  const bottomStripY = useTransform(hoverProgress, [0, 1], [0, 60]);
  const bottomStripOpacity = useTransform(hoverProgress, [0, 1], [1, 0.15]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => console.log('Video play error:', err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleProgressBarClick = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = clickX / rect.width;
      videoRef.current.currentTime = percentage * videoRef.current.duration;
      setProgress(percentage * 100);
    }
  };

  const features = [
    {
      title: 'Hardware Optimized',
      description: 'Acoustics and custom silicon tuned for premium, local processing.'
    },
    {
      title: 'AI Native',
      description: 'Machine intelligence woven deeply into the core operating system.'
    },
    {
      title: 'Built Around Humans',
      description: 'Ambient computing designed to recede naturally into your space.'
    },
    {
      title: 'Voice First',
      description: 'Zero-latency voice interfaces for fluid ambient conversations.'
    },
    {
      title: "India's Ecosystem",
      description: 'Engineered and crafted in India to pioneer cognitive computing.'
    }
  ];

  // Tab specifications content for dynamic right-side telemetry
  const activeSpecMetrics = {
    hardware: {
      accentColor: 'from-fuchsia-500/25 to-purple-500/25',
      glowColor: 'rgba(240,79,252,0.12)',
      label: 'Acoustics & Drivers',
      stats: [
        { label: 'Dynamic Range', value: '104 dB' },
        { label: 'THD Noise level', value: '<0.02%' },
        { label: 'Power Draw', value: '4.5W [idle]' }
      ]
    },
    os: {
      accentColor: 'from-indigo-500/25 to-blue-500/25',
      glowColor: 'rgba(99,102,241,0.12)',
      label: 'Ambient Scheduling',
      stats: [
        { label: 'Thread Sync', value: '99.98%' },
        { label: 'Core Interrupts', value: '0.45 ms' },
        { label: 'Memory Footprint', value: '1.2 GB' }
      ]
    },
    ai: {
      accentColor: 'from-emerald-500/25 to-teal-500/25',
      glowColor: 'rgba(16,185,129,0.12)',
      label: 'Generative Cognition',
      stats: [
        { label: 'Context Windows', value: '256K tokens' },
        { label: 'Token Speed', value: '85 tok/s' },
        { label: 'On-device Cache', value: '100% hits' }
      ]
    }
  };

  const currentMetrics = activeSpecMetrics[activePillar];

  return (
    <section 
      ref={containerRef}
      className="relative pt-24 pb-12 bg-black z-10 border-t border-white/5 px-4 md:px-6 overflow-visible"
    >

      <div className="max-w-[1360px] mx-auto w-full relative z-10 flex flex-col items-center">

        {/* Centered Spaced Header (Slides upward and fades softly during expansion) */}
        <motion.div 
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-6 select-none pointer-events-none"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-widest text-center text-white mb-2.5 uppercase bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-200 to-zinc-400 drop-shadow-[0_0_20px_rgba(255,255,255,0.08)] font-sans">
            WATCH OUR ANNOUNCEMENT
          </h2>
          <p className="text-[10px] md:text-xs text-zinc-500 font-light tracking-wide max-w-lg mx-auto">
            Hardware, AI, and OS unified into one intelligent ecosystem.
          </p>
        </motion.div>

        {/* 
          100% STABLE WORKSTATION WINDOW (NO STATIC TRANSFORMS / NO SCALING)
          Keeps the layout perfectly stable on load, while letting the video 
          break out of the frame seamlessly due to overflow-visible properties!
        */}
        <div className="w-full rounded-[30px] bg-gradient-to-b from-[#070312]/80 via-[#020005]/80 to-[#020104]/80 border border-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.85)] overflow-visible relative flex flex-col">
          
          {/* Top Workspace Chrome Frame (Slides upward and fades softly) */}
          <motion.div 
            style={{ y: topChromeY, opacity: topChromeOpacity }}
            className="h-9 md:h-10 border-b border-white/[0.03] bg-white/[0.01] backdrop-blur-md flex items-center px-4 justify-between relative z-20"
          >
            {/* Dimmed indicator window pins */}
            <div className="flex gap-1.5 items-center opacity-30">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
            </div>
            
            <div className="text-[8px] md:text-[9px] text-zinc-600 font-mono tracking-widest uppercase opacity-70">
              luca-keynote-reveal // presentation
            </div>
            
            <div className="flex items-center gap-1.5 opacity-20">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></div>
              <span className="text-[8px] font-mono text-white">LIVE</span>
            </div>
          </motion.div>

          {/* Asymmetrical Viewport Layout Row (Static and Overflow-Visible) */}
          <div className="flex flex-row relative z-10 p-4 md:p-6 gap-6 items-center overflow-visible justify-center min-h-[360px] md:min-h-[420px]">
            
            {/* Left Atmospheric Ecosystem Sidebar (Slides left and fades softly) */}
            <motion.div 
              style={{ x: leftPanelX, opacity: leftPanelOpacity }}
              className="w-48 shrink-0 flex flex-col gap-5 py-4 hidden lg:flex border-r border-white/[0.02] pl-1 pr-4 select-none pointer-events-none"
            >
              <div className="text-[9px] font-bold tracking-widest text-zinc-600 uppercase mb-1">Ecosystem Pillars</div>
              
              <div className="flex items-center gap-3 opacity-20 hover:opacity-60 transition-all duration-300">
                <Cpu className="w-3.5 h-3.5 text-zinc-400" />
                <span className="text-[10px] text-zinc-400 font-light">LUCA Hardware</span>
              </div>
              <div className="flex items-center gap-3 opacity-20 hover:opacity-60 transition-all duration-300">
                <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                <span className="text-[10px] text-zinc-400 font-light">LUCA AI Models</span>
              </div>
              <div className="flex items-center gap-3 opacity-20 hover:opacity-60 transition-all duration-300">
                <Layers className="w-3.5 h-3.5 text-zinc-400" />
                <span className="text-[10px] text-zinc-400 font-light">LUCA OS Layers</span>
              </div>
              <div className="flex items-center gap-3 opacity-20 hover:opacity-60 transition-all duration-300">
                <Radio className="w-3.5 h-3.5 text-zinc-400" />
                <span className="text-[10px] text-zinc-400 font-light">Ambient Scheduling</span>
              </div>
              <div className="flex items-center gap-3 opacity-20 hover:opacity-60 transition-all duration-300">
                <Shield className="w-3.5 h-3.5 text-zinc-400" />
                <span className="text-[10px] text-zinc-400 font-light">Edge Privacy Guard</span>
              </div>
            </motion.div>

            {/* 
              THE BREAKOUT HERO VIDEO LAYER (UPGRADED HYBRID MATH)
              The wrapper reserves the inline space so sibling layouts stay static.
              The inner container is absolutely positioned and centered inside,
              growing from inlineWidth/Height to expandedWidth/Height on scroll.
            */}
            <div 
              style={{ width: `${inlineWidth}px`, height: `${inlineHeight}px` }}
              className="flex-1 w-full relative overflow-visible shrink-0"
            >
              <motion.div 
                style={{ 
                  width: videoWidth,
                  height: videoHeight,
                  maxWidth: maxW,
                  maxHeight: maxH,
                  borderRadius: videoRadius,
                  x: "-50%",
                  y: "-50%",
                  willChange: "width, height"
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={togglePlay}
                className="absolute left-1/2 top-1/2 overflow-hidden border border-white/[0.04] bg-black shadow-[inset_0_0_40px_rgba(0,0,0,0.95),0_25px_60px_rgba(0,0,0,0.85)] cursor-pointer group z-20"
              >
                {/* Local Loop Video tag with CSS Inversion and smooth blending filters */}
                <video
                  ref={videoRef}
                  src="/LUCA blink logo WhiteBG.mp4"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={(e) => { e.currentTarget.playbackRate = 0.75; }}
                  onPlay={(e) => { e.currentTarget.playbackRate = 0.75; }}
                  onPlaying={(e) => { e.currentTarget.playbackRate = 0.75; }}
                  className="w-full h-full object-cover select-none pointer-events-none transition-all duration-700 filter invert-[1] brightness-[0.82] contrast-[1.03] grayscale-[0.05]"
                  loop
                  muted={isMuted}
                  playsInline
                />

              {/* Cinematic Vignette Blending Mask Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.92)_100%)] pointer-events-none z-10"></div>

              {/* Subtle glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none z-10"></div>

              {/* Pulsing Play Overlay Button */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px] z-20"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/[0.03] border border-white/[0.07] flex items-center justify-center backdrop-blur-md shadow-2xl hover:scale-105 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
                      <Play className="w-5 h-5 text-white ml-0.5 filter drop-shadow-md fill-white" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Playback Controls Bar */}
              <div 
                className={`absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-30 flex flex-col gap-3.5 transition-all duration-300 pointer-events-auto ${
                  showControls || !isPlaying ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Custom Progress Timeline Bar */}
                <div 
                  className="w-full h-1 bg-white/10 rounded-full cursor-pointer relative group/timeline"
                  onClick={handleProgressBarClick}
                >
                  <div 
                    className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full opacity-0 group-hover/timeline:opacity-100 transition-opacity shadow-[0_0_6px_rgba(168,85,247,0.8)]"></div>
                  </div>
                </div>

                {/* Control Actions Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={togglePlay} 
                      className="text-white hover:text-purple-400 transition-colors p-1 rounded-lg hover:bg-white/5"
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                    </button>
                    
                    <button 
                      onClick={toggleMute} 
                      className="text-white hover:text-purple-400 transition-colors p-1 rounded-lg hover:bg-white/5"
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

            {/* Right Atmospheric Interactive Telemetry (Slides right and fades softly) */}
            <motion.div 
              style={{ x: rightPanelX, opacity: rightPanelOpacity }}
              className="w-48 shrink-0 flex flex-col gap-4 py-4 hidden lg:flex border-l border-white/[0.02] pl-4 pr-1 relative h-full justify-center select-none"
            >
              <div className="text-[9px] font-bold tracking-widest text-zinc-600 uppercase mb-1 relative z-10">Specs Telemetry</div>

              {/* Compact, Luxurious Interactive button tabs */}
              <div className="grid grid-cols-3 gap-1 p-0.5 rounded-lg bg-white/[0.02] border border-white/5 relative z-10 pointer-events-auto">
                {['hardware', 'os', 'ai'].map(pillar => (
                  <button
                    key={pillar}
                    onClick={() => setActivePillar(pillar)}
                    className={`text-[9px] font-bold uppercase tracking-wider py-1.5 rounded-md transition-all duration-300 cursor-pointer ${
                      activePillar === pillar 
                        ? 'bg-white/10 text-white shadow-md' 
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    {pillar}
                  </button>
                ))}
              </div>

              {/* Animated spec parameters */}
              <div className="flex flex-col gap-3.5 mt-2 relative z-10">
                <div className="text-[9px] font-bold text-zinc-400 tracking-wide uppercase border-b border-white/5 pb-1 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/80"></div>
                  <span>{currentMetrics.label}</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="flex flex-col gap-2.5"
                  >
                    {currentMetrics.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        <div className="flex justify-between items-center text-[9px] text-zinc-500 font-mono">
                          <span>{stat.label}</span>
                          <span className="text-zinc-300 font-bold">{stat.value}</span>
                        </div>
                        {/* Mini dynamic loader bars */}
                        <div className="h-1 bg-white/[0.02] rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: "0%" }}
                            animate={{ width: "75%" }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.1 }}
                            className={`h-full bg-gradient-to-r ${currentMetrics.accentColor}`}
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

          </div>

          {/* Bottom Accent Feature Strip Row (Slides downward and fades softly) */}
          <motion.div 
            style={{ y: bottomStripY, opacity: bottomStripOpacity }}
            className="border-t border-white/[0.03] pt-6 pb-6 px-4 md:px-6 lg:px-8 bg-white/[0.005] z-10 select-none pointer-events-none"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {features.map((feat, index) => (
                <div
                  key={index}
                  className="border-l border-purple-500/20 pl-4 flex flex-col justify-start relative group/feat"
                >
                  <h3 className="font-bold text-xs text-zinc-200 tracking-wider uppercase mb-1 group-hover/feat:text-purple-300 transition-colors duration-300">
                    {feat.title}
                  </h3>
                  <p className="text-zinc-500 text-[10px] leading-relaxed font-light font-sans group-hover/feat:text-zinc-400 transition-colors duration-300">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ProductAnnouncement;

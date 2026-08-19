import React, { useEffect, useRef, useState } from 'react';

const DirectionalParticleText = ({ 
  text = '', 
  speaker = '', // 'user' | 'luca'
  isUser = false,
  isVisible = false,
  className = ''
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [revealProgress, setRevealProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setRevealProgress(0);
      return;
    }

    // Animate reveal progress from 0 to 1 with smooth left-to-right sweep
    let startTime = null;
    const duration = 1200; // 1.2s smooth assembly

    const animateSweep = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth cubic easing
      const eased = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      setRevealProgress(eased);

      if (progress < 1) {
        requestAnimationFrame(animateSweep);
      }
    };

    const frameId = requestAnimationFrame(animateSweep);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible]);

  // Canvas particle stream effect (Left -> Right)
  useEffect(() => {
    if (!isVisible || revealProgress >= 1) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    const width = (canvas.width = container.offsetWidth + 40);
    const height = (canvas.height = container.offsetHeight + 20);

    const PARTICLE_COUNT = 30;
    const particles = [];

    // Current sweep X position
    const sweepX = revealProgress * width;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: sweepX - Math.random() * 40,
        y: Math.random() * height,
        vx: Math.random() * 2 + 1.5, // moving Left -> Right
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 1.5 + 0.6,
        alpha: Math.random() * 0.6 + 0.4,
        life: 1
      });
    }

    const renderParticles = () => {
      ctx.clearRect(0, 0, width, height);

      const currentSweepX = revealProgress * width;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.02;

        if (p.alpha <= 0) {
          p.x = currentSweepX - Math.random() * 30;
          p.y = Math.random() * height;
          p.alpha = Math.random() * 0.6 + 0.4;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = isUser 
          ? `rgba(226, 232, 240, ${p.alpha})`
          : `rgba(216, 180, 254, ${p.alpha})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = isUser ? 'rgba(255,255,255,0.4)' : 'rgba(168,85,247,0.5)';
        ctx.fill();
      }

      if (revealProgress < 1) {
        animId = requestAnimationFrame(renderParticles);
      }
    };

    renderParticles();
    return () => cancelAnimationFrame(animId);
  }, [isVisible, revealProgress, isUser]);

  return (
    <div 
      ref={containerRef}
      className={`relative inline-block max-w-2xl ${className}`}
    >
      {/* Active Left->Right Canvas Particles */}
      {isVisible && revealProgress < 1 && (
        <canvas
          ref={canvasRef}
          className="absolute -top-2.5 -left-5 pointer-events-none z-20"
          style={{ width: 'calc(100% + 40px)', height: 'calc(100% + 20px)' }}
        />
      )}

      {/* Speaker Tag */}
      {speaker && (
        <div 
          className={`text-[11px] font-mono tracking-widest uppercase mb-1.5 font-semibold transition-opacity duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } ${isUser ? 'text-zinc-400 text-right' : 'text-purple-400 text-left'}`}
        >
          {speaker}
        </div>
      )}

      {/* Content with Left->Right Reveal Mask */}
      <div 
        style={{
          clipPath: `inset(0 ${Math.max(0, (1 - revealProgress) * 100)}% 0 0)`,
          transition: 'opacity 0.2s ease-out',
          opacity: isVisible ? 1 : 0
        }}
        className={`relative z-10 transition-all duration-300 ${
          isUser 
            ? 'text-right text-white font-medium text-base sm:text-lg md:text-xl leading-relaxed pl-6 sm:pl-16' 
            : 'text-left text-zinc-200 font-normal text-sm sm:text-base md:text-lg leading-relaxed pr-6 sm:pr-16'
        }`}
      >
        <p className={`${isUser ? 'text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]' : 'text-zinc-300'}`}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default DirectionalParticleText;

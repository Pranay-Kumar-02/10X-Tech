import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DirectionalParticleCta = ({ 
  isVisible = false,
  className = ''
}) => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [isAssembled, setIsAssembled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setIsAssembled(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    const width = (canvas.width = 220);
    const height = (canvas.height = 70);

    // Offscreen canvas for sampling
    const offCanvas = document.createElement('canvas');
    const offCtx = offCanvas.getContext('2d', { willReadFrequently: true });
    offCanvas.width = width;
    offCanvas.height = height;

    const btnX = 15;
    const btnY = 10;
    const btnW = 190;
    const btnH = 48;
    const radius = 24;

    offCtx.fillStyle = '#ffffff';
    offCtx.beginPath();
    offCtx.roundRect(btnX, btnY, btnW, btnH, radius);
    offCtx.fill();

    offCtx.font = '700 13px Inter, -apple-system, monospace, sans-serif';
    offCtx.fillStyle = '#ffffff';
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';
    offCtx.fillText('TRY LUCA  →', btnX + btnW / 2, btnY + btnH / 2);

    const imgData = offCtx.getImageData(0, 0, width, height);
    const data = imgData.data;
    const targets = [];
    const step = 2; // Ultra-fine sampling yields ~1,500 particles for CTA

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const idx = (y * width + x) * 4;
        if (data[idx + 3] > 100) {
          targets.push({ x, y });
        }
      }
    }

    const particles = targets.map((t, idx) => {
      const spreadX = 80 + Math.random() * 180;
      const spreadY = (Math.random() - 0.5) * 100;

      return {
        x: t.x - spreadX,
        y: t.y + spreadY,
        startX: t.x - spreadX,
        startY: t.y + spreadY,
        targetX: t.x,
        targetY: t.y,
        size: Math.random() * 0.7 + 0.45, // 0.45 - 1.15px
        alpha: Math.random() * 0.7 + 0.3,
        sparkleSpeed: 0.05 + Math.random() * 0.08,
        swirlAmp: (Math.random() - 0.5) * 14,
        hue: Math.random() > 0.5 ? 275 : 240,
        delay: (t.x / width) * 0.3 + Math.random() * 0.15
      };
    });

    let startTime = null;
    const DURATION = 1500;

    const render = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / DURATION, 1);

      ctx.clearRect(0, 0, width, height);

      const ease = progress < 0.5 
        ? 16 * Math.pow(progress, 5) 
        : 1 - Math.pow(-2 * progress + 2, 5) / 2;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const pProgress = Math.min(Math.max((ease - p.delay) / (1 - p.delay), 0), 1);

        const currentX = p.startX + (p.targetX - p.startX) * pProgress;
        const currentY = p.startY + (p.targetY - p.startY) * pProgress + Math.sin(pProgress * Math.PI) * p.swirlAmp * (1 - pProgress);

        const sparkle = 0.8 + 0.4 * Math.sin(elapsed * p.sparkleSpeed);
        const currentAlpha = pProgress < 0.88 
          ? p.alpha * sparkle 
          : p.alpha * sparkle * (1 - (pProgress - 0.88) / 0.12);

        ctx.beginPath();
        ctx.arc(currentX, currentY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 85%, 85%, ${currentAlpha})`;
        ctx.fill();
      }

      if (progress > 0.75) {
        setIsAssembled(true);
      }

      if (progress < 1) {
        animId = requestAnimationFrame(render);
      }
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [isVisible]);

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => {
      navigate('/try', { 
        state: { 
          url: 'https://shesettipavankumarswamy-luca.hf.space/', 
          title: 'LUCA AI'
        } 
      });
    }, 250);
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Ultra-Fine Particle Formation Canvas */}
      {!isAssembled && isVisible && (
        <canvas
          ref={canvasRef}
          className="block pointer-events-none"
        />
      )}

      {/* Solid Interactive Button Revealed Upon Assembly */}
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          opacity: isAssembled ? 1 : 0,
          pointerEvents: isAssembled ? 'auto' : 'none'
        }}
        className={`group relative z-10 inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all duration-500 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:bg-purple-50 hover:shadow-[0_0_35px_rgba(192,132,252,0.5)] active:scale-95 cursor-pointer ${
          isClicked ? 'scale-90 opacity-70' : ''
        }`}
      >
        <span>TRY LUCA</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default DirectionalParticleCta;

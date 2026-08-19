import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ParticleCtaButton = ({ 
  progress = 1, // 0 to 1
  onHover = () => {},
  className = ''
}) => {
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let width = (canvas.width = btn.offsetWidth + 60);
    let height = (canvas.height = btn.offsetHeight + 40);

    const PARTICLE_COUNT = 36;
    const particles = [];

    // Target pill perimeter
    const pillRadius = (btn.offsetHeight) / 2;
    const pillWidth = btn.offsetWidth;
    const pillHeight = btn.offsetHeight;
    const originX = 30;
    const originY = 20;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = (i / PARTICLE_COUNT) * Math.PI * 2;
      const initialDist = 60 + Math.random() * 80;
      
      // Calculate target point on pill boundary
      let tx, ty;
      if (Math.cos(angle) > 0) {
        tx = originX + pillWidth - pillRadius + Math.cos(angle) * pillRadius;
      } else {
        tx = originX + pillRadius + Math.cos(angle) * pillRadius;
      }
      ty = originY + pillRadius + Math.sin(angle) * pillRadius;

      particles.push({
        x: tx + Math.cos(angle) * initialDist,
        y: ty + Math.sin(angle) * initialDist,
        targetX: tx,
        targetY: ty,
        size: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.6 + 0.4,
        speed: 0.06 + Math.random() * 0.04
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const factor = Math.min(Math.max(progress, 0), 1);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        let targetX = p.targetX;
        let targetY = p.targetY;

        if (isHovered) {
          targetX += (Math.random() - 0.5) * 6;
          targetY += (Math.random() - 0.5) * 6;
        }

        if (isClicked) {
          const dx = p.x - (originX + pillWidth / 2);
          const dy = p.y - (originY + pillHeight / 2);
          const dist = Math.hypot(dx, dy) || 1;
          p.x += (dx / dist) * 12;
          p.y += (dy / dist) * 12;
          p.alpha = Math.max(0, p.alpha - 0.05);
        } else {
          p.x += (targetX - p.x) * (0.05 + 0.12 * factor);
          p.y += (targetY - p.y) * (0.05 + 0.12 * factor);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, isHovered ? p.size * 1.3 : p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(216, 180, 254, ${p.alpha * factor})`;
        ctx.shadowBlur = isHovered ? 8 : 4;
        ctx.shadowColor = 'rgba(168, 85, 247, 0.6)';
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationId);
  }, [progress, isHovered, isClicked]);

  return (
    <div className={`relative inline-block ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute -top-5 -left-8 pointer-events-none z-0"
        style={{ width: 'calc(100% + 60px)', height: 'calc(100% + 40px)' }}
      />
      
      <button
        ref={buttonRef}
        type="button"
        onClick={handleClick}
        onMouseEnter={() => {
          setIsHovered(true);
          onHover(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          onHover(false);
        }}
        style={{ opacity: Math.max(0, (progress - 0.2) / 0.8) }}
        className="relative z-10 inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:bg-zinc-100 hover:shadow-[0_0_35px_rgba(192,132,252,0.5)] active:scale-95 cursor-pointer"
      >
        <span>TRY LUCA</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default ParticleCtaButton;

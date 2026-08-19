import React, { useEffect, useRef, useState } from 'react';

const ParticleMessageCanvas = ({ 
  isActive = false, 
  progress = 1, // 0 to 1
  children,
  className = ''
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let width = (canvas.width = container.offsetWidth);
    let height = (canvas.height = container.offsetHeight);

    const PARTICLE_COUNT = 45;
    const particles = [];

    // Initialize particles around the perimeter
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Target perimeter coordinates
      const perimeterPos = i / PARTICLE_COUNT;
      let tx, ty;
      if (perimeterPos < 0.25) {
        tx = (perimeterPos / 0.25) * width;
        ty = 0;
      } else if (perimeterPos < 0.5) {
        tx = width;
        ty = ((perimeterPos - 0.25) / 0.25) * height;
      } else if (perimeterPos < 0.75) {
        tx = (1 - (perimeterPos - 0.5) / 0.25) * width;
        ty = height;
      } else {
        tx = 0;
        ty = (1 - (perimeterPos - 0.75) / 0.25) * height;
      }

      // Initial scattered position
      const angle = Math.random() * Math.PI * 2;
      const spread = 80 + Math.random() * 120;
      particles.push({
        x: tx + Math.cos(angle) * spread,
        y: ty + Math.sin(angle) * spread,
        targetX: tx,
        targetY: ty,
        size: Math.random() * 1.4 + 0.6,
        alpha: Math.random() * 0.5 + 0.3,
        speed: 0.08 + Math.random() * 0.05
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Lerp particles toward perimeter targets based on progress
      const factor = Math.min(Math.max(progress, 0), 1);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Target interpolation
        const currentTargetX = p.targetX;
        const currentTargetY = p.targetY;
        
        p.x += (currentTargetX - p.x) * (0.05 + 0.1 * factor);
        p.y += (currentTargetY - p.y) * (0.05 + 0.1 * factor);

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192, 132, 252, ${p.alpha * factor})`;
        ctx.fill();
      }

      // Draw faint particle constellation lines along the forming contour
      if (factor > 0.4) {
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i++) {
          const nextP = particles[(i + 1) % particles.length];
          const dist = Math.hypot(nextP.x - particles[i].x, nextP.y - particles[i].y);
          if (dist < 45) {
            ctx.strokeStyle = `rgba(168, 85, 247, ${(1 - dist / 45) * 0.35 * factor})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(nextP.x, nextP.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [progress]);

  return (
    <div ref={containerRef} className={`relative overflow-visible ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute -inset-4 pointer-events-none z-0"
        style={{ width: 'calc(100% + 32px)', height: 'calc(100% + 32px)' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParticleMessageCanvas;

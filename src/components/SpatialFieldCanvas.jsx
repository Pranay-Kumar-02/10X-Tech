import React, { useEffect, useRef } from 'react';

const SpatialFieldCanvas = ({ state = 'idle' }) => {
  const canvasRef = useRef(null);
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || 500);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || 500;
    };
    window.addEventListener('resize', handleResize);

    const count = 65;
    const particles = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        originX: Math.random() * width,
        originY: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.3 + 0.5,
        alpha: Math.random() * 0.4 + 0.15,
        isAccent: Math.random() > 0.7,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const currentState = stateRef.current;
      const centerX = width / 2;
      const centerY = height / 2;

      // Smooth particle update & rendering (100% transparent canvas)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (currentState === 'submit' || currentState === 'processing') {
          // Smooth convergence toward center with gentle damping
          const targetX = centerX + (p.originX - centerX) * 0.25;
          const targetY = centerY + (p.originY - centerY) * 0.25;
          p.x += (targetX - p.x) * 0.035;
          p.y += (targetY - p.y) * 0.035;
        } else {
          // Smooth ambient drift
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isAccent
          ? `rgba(196, 181, 253, ${p.alpha * 0.8})`
          : `rgba(255, 255, 255, ${p.alpha * 0.6})`;
        ctx.fill();

        // Connect nearby particles with delicate, thin lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const lineAlpha = (1 - dist / 90) * (currentState === 'processing' ? 0.18 : 0.06);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default SpatialFieldCanvas;

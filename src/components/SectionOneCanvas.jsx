import React, { useEffect, useRef } from 'react';

const SectionOneCanvas = ({ 
  scrollProgress = 0, // 0 to 1
  ctaTarget = null,   // { x, y, width, height }
  isCtaHovered = false,
  isCtaClicked = false
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const PARTICLE_COUNT = isMobile ? 55 : 120;

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isActive: false
    };

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + Math.random() * 50;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = -(Math.random() * 0.4 + 0.15);
        this.size = Math.random() * 1.5 + 0.6;
        this.alpha = Math.random() * 0.5 + 0.2;
        this.baseAlpha = this.alpha;
        this.hue = Math.random() > 0.75 ? 265 : 220; // Subtle violet / cool star dust
        this.mode = 'ambient'; // 'ambient' | 'cluster-left' | 'cluster-cta'
      }

      update() {
        // Natural ambient drift
        this.x += this.vx;
        this.y += this.vy;

        // Mouse repulsion
        if (mouse.isActive) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            this.x -= (dx / dist) * force * 2.5;
            this.y -= (dy / dist) * force * 2.5;
          }
        }

        // Scroll-driven particle gathering
        if (scrollProgress > 0.15 && ctaTarget) {
          // Right-side particles gravitate towards CTA button
          if (this.x > width * 0.45 && Math.random() > 0.3) {
            const targetX = ctaTarget.x + Math.random() * ctaTarget.width;
            const targetY = ctaTarget.y + Math.random() * ctaTarget.height;
            const pullForce = (scrollProgress - 0.15) * 0.04;
            
            this.x += (targetX - this.x) * pullForce;
            this.y += (targetY - this.y) * pullForce;
            
            if (isCtaHovered) {
              this.alpha = Math.min(1, this.alpha + 0.03);
              this.size = Math.min(2.5, this.size + 0.05);
            }
          }
        }

        // CTA Click Flare Effect
        if (isCtaClicked && ctaTarget) {
          const dx = this.x - (ctaTarget.x + ctaTarget.width / 2);
          const dy = this.y - (ctaTarget.y + ctaTarget.height / 2);
          const dist = Math.hypot(dx, dy);
          if (dist < 200) {
            this.x += (dx / (dist || 1)) * 12;
            this.y += (dy / (dist || 1)) * 12;
            this.alpha = Math.max(0, this.alpha - 0.04);
          }
        }

        // Screen wrap
        if (this.y < -20) this.reset();
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 80%, 90%, ${this.alpha})`;
        ctx.shadowBlur = this.size > 1.2 ? 6 : 0;
        ctx.shadowColor = `hsla(${this.hue}, 80%, 70%, ${this.alpha * 0.5})`;
        ctx.fill();
        ctx.restore();
      }
    }

    const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render fine particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      // Subtle particle connections when clustered
      if (scrollProgress > 0.25) {
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.hypot(dx, dy);
            if (dist < 55) {
              const alpha = (1 - dist / 55) * 0.15 * scrollProgress;
              ctx.strokeStyle = `rgba(192, 132, 252, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [scrollProgress, ctaTarget, isCtaHovered, isCtaClicked]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
};

export default SectionOneCanvas;

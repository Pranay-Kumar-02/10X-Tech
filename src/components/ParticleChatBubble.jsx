import React, { useEffect, useRef, useState } from 'react';

const ParticleChatBubble = ({ 
  text = '',
  isUser = false, // true = right (user), false = left (luca)
  isVisible = false,
  className = ''
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isAssembled, setIsAssembled] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setIsAssembled(false);
      return;
    }

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    const maxContainerWidth = Math.min(window.innerWidth * 0.85, isUser ? 380 : 520);
    let width = (canvas.width = maxContainerWidth);
    
    // Offscreen canvas for sampling
    const offCanvas = document.createElement('canvas');
    const offCtx = offCanvas.getContext('2d', { willReadFrequently: true });
    
    const fontSize = window.innerWidth < 640 ? 14 : 16;
    const lineHeight = fontSize * 1.45;
    const paddingX = 22;
    const paddingY = 16;
    
    offCtx.font = `400 ${fontSize}px Inter, -apple-system, sans-serif`;
    
    // Word wrap calculation
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    const maxTextWidth = width - paddingX * 2 - 20;

    for (let i = 0; i < words.length; i++) {
      const testLine = currentLine ? `${currentLine} ${words[i]}` : words[i];
      const testWidth = offCtx.measureText(testLine).width;
      if (testWidth > maxTextWidth && currentLine) {
        lines.push(currentLine);
        currentLine = words[i];
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) lines.push(currentLine);

    let measuredTextWidth = 0;
    lines.forEach(l => {
      const w = offCtx.measureText(l).width;
      if (w > measuredTextWidth) measuredTextWidth = w;
    });

    const bubbleWidth = measuredTextWidth + paddingX * 2;
    const bubbleHeight = lines.length * lineHeight + paddingY * 2;

    offCanvas.width = width;
    offCanvas.height = bubbleHeight + 30;
    canvas.height = bubbleHeight + 30;

    const bubbleX = isUser ? width - bubbleWidth - 10 : 10;
    const bubbleY = 10;

    // Draw the bubble background and text onto the offscreen canvas
    offCtx.clearRect(0, 0, width, offCanvas.height);
    
    // Bubble shape
    offCtx.fillStyle = '#ffffff';
    offCtx.beginPath();
    const radius = 22;
    offCtx.roundRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight, [
      radius, 
      isUser ? 4 : radius, 
      radius, 
      isUser ? radius : 4
    ]);
    offCtx.fill();

    // Bubble Text
    offCtx.font = `500 ${fontSize}px Inter, -apple-system, sans-serif`;
    offCtx.fillStyle = '#ffffff';
    offCtx.textBaseline = 'top';
    lines.forEach((line, idx) => {
      offCtx.fillText(line, bubbleX + paddingX, bubbleY + paddingY + idx * lineHeight);
    });

    // Sample thousands of pixel targets (ultra-fine step = 2px)
    const imgData = offCtx.getImageData(0, 0, width, offCanvas.height);
    const data = imgData.data;
    const targets = [];
    const step = 2; // Sample 2px step yields 2,000 - 4,000 ultra-fine stardust particles

    for (let y = 0; y < offCanvas.height; y += step) {
      for (let x = 0; x < width; x += step) {
        const index = (y * width + x) * 4;
        const alpha = data[index + 3];
        if (alpha > 100) {
          targets.push({ x, y });
        }
      }
    }

    // Create thousands of ultra-fine micro-particles with organic fluid noise
    const particles = targets.map((t, idx) => {
      const angle = Math.random() * Math.PI * 2;
      const spreadX = 80 + Math.random() * 220;
      const spreadY = (Math.random() - 0.5) * 140;
      const startX = isUser ? t.x - spreadX : t.x - (spreadX * 0.8);
      const startY = t.y + spreadY;

      return {
        x: startX,
        y: startY,
        startX: startX,
        startY: startY,
        targetX: t.x,
        targetY: t.y,
        size: Math.random() * 0.7 + 0.45, // Ultrafine micro-grain (0.45px - 1.15px)
        alpha: Math.random() * 0.65 + 0.35,
        sparkleSpeed: 0.05 + Math.random() * 0.08,
        swirlAmp: (Math.random() - 0.5) * 16,
        hue: isUser ? (Math.random() > 0.5 ? 280 : 265) : (Math.random() > 0.5 ? 260 : 225),
        delay: (t.x / width) * 0.35 + Math.random() * 0.15 // Left->Right wave delay
      };
    });

    let startTime = null;
    const DURATION = 1600; // 1.6s silky smooth physical convergence

    const render = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / DURATION, 1);

      ctx.clearRect(0, 0, width, canvas.height);

      // Silky smooth quintic easing
      const ease = progress < 0.5 
        ? 16 * Math.pow(progress, 5) 
        : 1 - Math.pow(-2 * progress + 2, 5) / 2;

      // Render thousands of micro-particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const pProgress = Math.min(Math.max((ease - p.delay) / (1 - p.delay), 0), 1);

        // Fluid organic convergence path
        const currentX = p.startX + (p.targetX - p.startX) * pProgress;
        const currentY = p.startY + (p.targetY - p.startY) * pProgress + Math.sin(pProgress * Math.PI) * p.swirlAmp * (1 - pProgress);

        // Sparkle shimmer
        const sparkle = 0.8 + 0.4 * Math.sin(elapsed * p.sparkleSpeed);
        const currentAlpha = pProgress < 0.88 
          ? p.alpha * sparkle 
          : p.alpha * sparkle * (1 - (pProgress - 0.88) / 0.12);

        ctx.beginPath();
        ctx.arc(currentX, currentY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 85%, 85%, ${currentAlpha})`;
        ctx.fill();
      }

      // Seamless fade-in of solid crisp DM bubble as particles coalesce
      if (progress > 0.72) {
        const solidAlpha = (progress - 0.72) / 0.28;
        ctx.save();
        ctx.globalAlpha = solidAlpha;
        
        // Render crisp DM bubble
        ctx.fillStyle = isUser ? '#3b2361' : '#15151e';
        ctx.strokeStyle = isUser ? 'rgba(192, 132, 252, 0.3)' : 'rgba(255, 255, 255, 0.12)';
        ctx.lineWidth = 1;
        ctx.shadowColor = isUser ? 'rgba(59, 35, 97, 0.5)' : 'rgba(0, 0, 0, 0.7)';
        ctx.shadowBlur = 15;
        
        ctx.beginPath();
        ctx.roundRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight, [
          radius, 
          isUser ? 4 : radius, 
          radius, 
          isUser ? radius : 4
        ]);
        ctx.fill();
        ctx.stroke();

        // Render crisp text
        ctx.shadowBlur = 0;
        ctx.font = `400 ${fontSize}px Inter, -apple-system, sans-serif`;
        ctx.fillStyle = isUser ? '#ffffff' : '#e4e4e7';
        ctx.textBaseline = 'top';
        lines.forEach((line, idx) => {
          ctx.fillText(line, bubbleX + paddingX, bubbleY + paddingY + idx * lineHeight);
        });
        
        ctx.restore();
      }

      if (progress < 1) {
        animId = requestAnimationFrame(render);
      } else {
        setIsAssembled(true);
      }
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [isVisible, text, isUser]);

  return (
    <div 
      ref={containerRef}
      className={`relative inline-block w-full max-w-xl ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="block max-w-full"
      />
    </div>
  );
};

export default ParticleChatBubble;

import React, { useState, useEffect, useRef } from 'react';

const LucaEyes = ({ 
  size = 'hero', // 'hero' | 'large' | 'medium'
  targetFocus = null, // Optional {x, y} coordinate or null for cursor tracking
  className = '' 
}) => {
  const containerRef = useRef(null);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetOffsetRef = useRef({ x: 0, y: 0 });
  const currentOffsetRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef(null);

  // Smooth lerp physics for cursor / focus tracking
  useEffect(() => {
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animateGaze = () => {
      currentOffsetRef.current.x = lerp(currentOffsetRef.current.x, targetOffsetRef.current.x, 0.15);
      currentOffsetRef.current.y = lerp(currentOffsetRef.current.y, targetOffsetRef.current.y, 0.15);
      setEyeOffset({ ...currentOffsetRef.current });
      animFrameRef.current = requestAnimationFrame(animateGaze);
    };

    animFrameRef.current = requestAnimationFrame(animateGaze);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  // Mouse tracking calculation with increased travel sensitivity
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (targetFocus) return;

      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);
      const angle = Math.atan2(deltaY, deltaX);

      // Max eye travel distance in px for responsive gaze
      const maxTravel = size === 'hero' ? 20 : size === 'large' ? 10 : 6;
      
      // Proximity focus calculation across full viewport
      const proximity = Math.max(0, 1 - distance / 1000);
      const intensity = Math.min(distance / 200, 1) * (0.4 + 0.6 * proximity);

      setIsFocused(distance < 500);

      targetOffsetRef.current = {
        x: Math.cos(angle) * (maxTravel * intensity),
        y: Math.sin(angle) * (maxTravel * intensity * 0.8) // subtle vertical damping
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [size, targetFocus]);

  // Override target focus if provided
  useEffect(() => {
    if (targetFocus && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = targetFocus.x - centerX;
      const deltaY = targetFocus.y - centerY;
      const angle = Math.atan2(deltaY, deltaX);
      const maxTravel = size === 'hero' ? 20 : size === 'large' ? 10 : 6;

      targetOffsetRef.current = {
        x: Math.cos(angle) * maxTravel,
        y: Math.sin(angle) * (maxTravel * 0.8)
      };
    }
  }, [targetFocus, size]);

  // Periodic natural autonomous blinking
  useEffect(() => {
    let blinkTimeout;
    const triggerBlink = () => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
        const nextInterval = 3800 + Math.random() * 2500;
        blinkTimeout = setTimeout(triggerBlink, nextInterval);
      }, 160);
    };

    blinkTimeout = setTimeout(triggerBlink, 3000);
    return () => clearTimeout(blinkTimeout);
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsBlinking(true);
    setTimeout(() => setIsBlinking(false), 200);
  };

  // Refined capsule width and height
  const eyeWidth = size === 'hero' 
    ? 'w-9 sm:w-12 md:w-15 lg:w-18' 
    : size === 'large' 
    ? 'w-5 sm:w-6' 
    : 'w-2.5 sm:w-3';

  const eyeHeight = size === 'hero' 
    ? 'h-22 sm:h-28 md:h-34 lg:h-38' 
    : size === 'large' 
    ? 'h-9 sm:h-11' 
    : 'h-4 sm:h-5';

  const gapSize = size === 'hero' 
    ? 'gap-4 sm:gap-6 md:gap-7 lg:gap-8' 
    : size === 'large' 
    ? 'gap-2.5 sm:gap-3' 
    : 'gap-2';

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      title="Click to blink"
      className={`inline-flex items-center justify-center ${gapSize} cursor-pointer select-none align-middle ${className}`}
    >
      {/* Left Eye - Subtle Matte Finish with Restrained Glow */}
      <div
        className={`${eyeWidth} ${eyeHeight} rounded-full bg-white transition-transform duration-75 ease-out shadow-[0_0_14px_rgba(255,255,255,0.22)]`}
        style={{
          transform: isBlinking 
            ? `scaleY(0.08)` 
            : `translate(${eyeOffset.x}px, ${eyeOffset.y}px) ${isFocused ? 'scale(1.02)' : 'scale(1)'}`
        }}
      />

      {/* Right Eye - Subtle Matte Finish with Restrained Glow */}
      <div
        className={`${eyeWidth} ${eyeHeight} rounded-full bg-white transition-transform duration-75 ease-out shadow-[0_0_14px_rgba(255,255,255,0.22)]`}
        style={{
          transform: isBlinking 
            ? `scaleY(0.08)` 
            : `translate(${eyeOffset.x}px, ${eyeOffset.y}px) ${isFocused ? 'scale(1.02)' : 'scale(1)'}`
        }}
      />
    </div>
  );
};

export default LucaEyes;

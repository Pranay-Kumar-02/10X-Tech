import React, { useState, useEffect, useRef } from 'react';

const LucaEyes = ({ size = 'large' }) => {
  const containerRef = useRef(null);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  // Mouse tracking calculation
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(Math.hypot(deltaX, deltaY), 300);

      // Max eye travel distance in px
      const maxTravel = size === 'large' ? 6 : 4;
      const intensity = distance / 300;

      const moveX = Math.cos(angle) * (maxTravel * intensity);
      const moveY = Math.sin(angle) * (maxTravel * intensity);

      setEyeOffset({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [size]);

  // Periodic natural autonomous blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 160);
    }, 4200 + Math.random() * 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  const handleClick = () => {
    setIsBlinking(true);
    setTimeout(() => setIsBlinking(false), 200);
  };

  const eyeSize = size === 'large'
    ? 'w-4 h-7'
    : 'w-3 h-5';

  const gapSize = size === 'large' ? 'gap-2.5' : 'gap-2';

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      title="LUCA"
      className={`inline-flex items-center justify-center ${gapSize} cursor-pointer select-none align-middle ml-2.5`}
    >
      {/* Left Eye */}
      <div
        className={`${eyeSize} rounded-full bg-white transition-transform duration-100 ease-out`}
        style={{
          transform: isBlinking 
            ? `scaleY(0.08)` 
            : `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`
        }}
      />

      {/* Right Eye */}
      <div
        className={`${eyeSize} rounded-full bg-white transition-transform duration-100 ease-out`}
        style={{
          transform: isBlinking 
            ? `scaleY(0.08)` 
            : `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`
        }}
      />
    </div>
  );
};

export default LucaEyes;

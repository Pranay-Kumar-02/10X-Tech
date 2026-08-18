import React, { useState } from 'react';

const generateStars = () => {
  const newStars = [];
  for (let i = 0; i < 220; i++) {
    newStars.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.3 + 0.6,
      opacity: Math.random() * 0.4 + 0.3,
      hasGlow: Math.random() > 0.65,
      delay: Math.random() * 5,
      duration: Math.random() * 2 + 2.5
    });
  }
  return newStars;
};

const Starfield = ({ masked = true }) => {
  const [stars] = useState(() => generateStars());

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0" 
      style={masked ? { 
        maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)', 
        WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)' 
      } : {}}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full bg-white ${star.hasGlow ? 'animate-static-glow' : 'opacity-40'}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            '--base-opacity': star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export default Starfield;

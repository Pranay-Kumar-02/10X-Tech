import React, { useState, useEffect } from 'react';

const logos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', alt: 'AWS', scale: 1.3, gap: '5rem' },
  { src: `${import.meta.env.BASE_URL}govt of india-remove.bg.png`, alt: 'MeitY Govt of India', scale: 1.4, gap: '5rem' },
  { src: `${import.meta.env.BASE_URL}nvidia-remove.bg.png`, alt: 'NVIDIA Inception', scale: 1.5, gap: '5rem' },
  { src: `${import.meta.env.BASE_URL}sliderlogo1.png`, alt: 'Logo 1', scale: 1.2, gap: '5rem' },
  { src: `${import.meta.env.BASE_URL}sliderlogo2.png`, alt: 'Logo 2', scale: 1.8, gap: '5rem' },
  { src: `${import.meta.env.BASE_URL}sliderlogo3.png`, alt: 'Logo 3', scale: 1.7, gap: '4.5rem' },
  { src: `${import.meta.env.BASE_URL}sliderlogo4.png`, alt: 'Logo 4', scale: 1.0, gap: '3rem' },
  { src: `${import.meta.env.BASE_URL}sliderlogo5.png`, alt: 'Logo 5', scale: 1.4, gap: '2.5rem' },
  { src: `${import.meta.env.BASE_URL}sliderlogo6.png`, alt: 'Logo 6', scale: 1.8, gap: '2rem' },
  { src: `${import.meta.env.BASE_URL}sliderlogo7.png`, alt: 'Logo 7', scale: 1.4, gap: '2.5rem' },
  { src: `${import.meta.env.BASE_URL}sliderlogo8.png`, alt: 'Logo 8', scale: 1.0, gap: '3rem' },
  { src: `${import.meta.env.BASE_URL}sliderlogo9.png`, alt: 'Logo 9', scale: 1.0, gap: '3rem' },
  { src: `${import.meta.env.BASE_URL}sliderlogo10.png`, alt: 'Logo 10', scale: 1.6, gap: '2rem' },
];

const LogoGroup = () => (
  <div className="flex items-center shrink-0 px-4">
    {logos.map((logo, i) => (
      <div 
        key={i} 
        className="flex items-center justify-center h-[44px] sm:h-[52px] md:h-[64px] shrink-0"
        style={{ marginRight: logo.gap || '4rem' }}
      >
        <img
          src={logo.src}
          alt={logo.alt}
          decoding="async"
          loading="lazy"
          className="max-h-full w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-500 brightness-0 invert drop-shadow-[0_0_12px_rgba(255,255,255,0.15)] hover:brightness-100 hover:invert-0"
          style={{ 
            transform: `scale(${logo.scale || 1})`
          }}
        />
      </div>
    ))}
  </div>
);

const Logos = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-28 w-full" />;

  return (
    <section className="relative z-20 my-6 sm:my-10 w-full overflow-hidden flex flex-col items-center">
      <p className="text-tagline-02 text-purple-400 uppercase mb-4 text-center tracking-widest font-mono text-xs font-bold">
        COLLABORATED & BACKED BY
      </p>

      <div className="w-full border-y border-white/10 pt-4 pb-3 bg-[#04040b]/80 backdrop-blur-md">
        <div 
          className="relative w-full max-w-[1920px] mx-auto flex items-center overflow-hidden"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          {/* Marquee Container with pause on hover */}
          <div 
            className="animate-marquee shrink-0 flex items-center hover:[animation-play-state:paused] cursor-pointer"
            style={{ animationDuration: '42s' }}
          >
            <LogoGroup />
            <LogoGroup />
            <LogoGroup />
            <LogoGroup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;

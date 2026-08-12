import React, { useState, useEffect } from 'react';

const logos = [
  { src: `${import.meta.env.BASE_URL}sliderlogo1.png`, alt: 'Logo 1', scale: 1.2, gap: '8rem' },
  { src: `${import.meta.env.BASE_URL}sliderlogo2.png`, alt: 'Logo 2', scale: 1.9, gap: '9rem' },
  { src: `${import.meta.env.BASE_URL}sliderlogo3.png`, alt: 'Logo 3', scale: 1.8, gap: '6rem' },
  { src: `${import.meta.env.BASE_URL}sliderlogo4.png`, alt: 'Logo 4', scale: 1.0, gap: '3rem' },
  { src: `${import.meta.env.BASE_URL}sliderlogo5.png`, alt: 'Logo 5', scale: 1.4, gap: '2.5rem' },
  { src: `${import.meta.env.BASE_URL}sliderlogo6.png`, alt: 'Logo 6', scale: 1.8, gap: '2rem' },
  { src: `${import.meta.env.BASE_URL}sliderlogo7.png`, alt: 'Logo 7', scale: 1.4, gap: '2.5rem' },
  { src: `${import.meta.env.BASE_URL}sliderlogo8.png`, alt: 'Logo 8', scale: 1.0, gap: '3rem' },
  { src: `${import.meta.env.BASE_URL}sliderlogo9.png`, alt: 'Logo 9', scale: 1.0, gap: '3rem' },
  { src: `${import.meta.env.BASE_URL}sliderlogo10.png`, alt: 'Logo 10', scale: 1.6, gap: '2rem' },
];

const LogoGroup = () => (
  <div className="flex items-center flex-shrink-0 px-2">
    {logos.map((logo, i) => (
      <div 
        key={i} 
        className="flex items-center justify-center h-[40px] sm:h-[48px] md:h-[60px]"
        style={{ marginRight: logo.gap || '4rem' }}
      >
        <img
          src={logo.src}
          alt={logo.alt}
          decoding="async"
          loading="lazy"
          className="w-full h-full object-contain opacity-[0.65] hover:opacity-100 transition-all duration-500 brightness-0 invert drop-shadow-[0_0_12px_rgba(255,255,255,0.1)] hover:brightness-100 hover:invert-0 hover:drop-shadow-none"
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

  if (!mounted) return <div className="h-32 w-full" />;

  return (
    <section className="relative z-20 mt-8 md:mt-12 lg:mt-16 translate-y-4 w-full overflow-hidden flex flex-col items-center">
      <p className="text-tagline-02 text-[#A0A0A0] uppercase mb-6 text-center tracking-widest font-medium">
        COLLABORATED & BACKED BY
      </p>

      <div className="w-full border-y border-white/[0.08] pt-3 pb-2 bg-black/20">
        <div 
          className="relative w-full max-w-[1920px] mx-auto flex items-center"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          {/* Marquee Container with pause on hover */}
          <div 
            className="animate-marquee min-w-max flex items-center hover:[animation-play-state:paused] cursor-pointer"
            style={{ animationDuration: '48s' }}
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

import React from 'react';
import { motion } from 'framer-motion';

const ProductHero = () => {
  return (
    <section className="relative min-h-[90svh] flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Blue gradient glow from the edges like the reference */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(186,204,255,0.2)_0%,transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* The Marquee Text behind the speaker */}
        <div className="absolute top-1/2 left-0 w-full overflow-hidden -translate-y-1/2 pointer-events-none opacity-10">
          <div className="flex animate-marquee whitespace-nowrap">
            <span className="text-[200px] font-black text-black tracking-tighter px-10">COMING SOON • COMING SOON • COMING SOON • </span>
            <span className="text-[200px] font-black text-black tracking-tighter px-10">COMING SOON • COMING SOON • COMING SOON • </span>
          </div>
        </div>

        {/* The Speaker Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20 w-full max-w-2xl"
        >
          <img 
            src={`${import.meta.env.BASE_URL}hero-device.png`}
            alt="10X Smart Speaker" 
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
          />
        </motion.div>

        {/* Floating elements like the reference if any */}
      </div>

      {/* "You found us a little early!" text */}
      <div className="mt-12 text-center relative z-20">
        <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
          You found us a little early!
        </h2>
      </div>
    </section>
  );
};

export default ProductHero;

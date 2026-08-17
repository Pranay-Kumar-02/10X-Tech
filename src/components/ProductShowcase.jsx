import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion';

const ProductShowcase = ({ openContactModal }) => {
  const containerRef = useRef(null);
  
  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply a gentle spring physics wrapper for Apple-like smooth scroll interpolation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 1. Expand width and height smoothly
  const expandProgress = useTransform(smoothProgress, [0, 0.85], [0, 1]);
  const width = useMotionTemplate`calc(100px + (min(100vw - 32px, 1312px) - 100px) * ${expandProgress})`;
  const height = useMotionTemplate`calc(52px + (100vh - 32px - 52px) * ${expandProgress})`;
  
  // 2. Adjust border radius to stay rounded
  const borderRadius = useTransform(smoothProgress, [0, 0.85], ["26px", "32px"]);

  // 3. Move the text cleanly outward
  const leftX = useTransform(smoothProgress, [0, 0.4], ["0px", "-28vw"]);
  const rightX = useTransform(smoothProgress, [0, 0.4], ["0px", "28vw"]);
  
  // 4. Fade out the text earlier in the scroll sequence (0 -> 0.35) so it vanishes cleanly before touching edges
  const textOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);

  // 5. Image Zoom effect (zooms in as the pill expands)
  const imageScale = useTransform(smoothProgress, [0, 1], [1.25, 1]);

  // 6. Fade in inner vignette and content
  const innerOpacity = useTransform(smoothProgress, [0.85, 0.95], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[350vh] bg-black z-20 overflow-hidden">
      
      {/* Sticky container that locks to the viewport */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
      >
        
        {/* KEEP SCROLLING Indicator */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute top-6 sm:top-8 left-0 w-full flex justify-center z-30 pointer-events-none px-4"
        >
          <span className="text-gray-400/80 text-[10px] sm:text-xs tracking-[0.3em] font-semibold uppercase text-center">
            Keep Scrolling
          </span>
        </motion.div>

        {/* Left Text ("Coming") */}
        <div className="absolute right-[calc(50%+55px)] sm:right-[calc(50%+75px)] md:right-[calc(50%+90px)] top-1/2 -translate-y-1/2 pr-2 sm:pr-4 flex justify-end items-center z-30 pointer-events-none">
          <motion.h1 
            style={{ x: leftX, opacity: textOpacity }}
            className="text-white text-3xl sm:text-6xl md:text-8xl lg:text-[110px] font-medium tracking-tight whitespace-nowrap drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
          >
            Coming
          </motion.h1>
        </div>

        {/* The Expanding Pill Image Container */}
        <motion.div 
          style={{ width, height, borderRadius }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 overflow-hidden flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.8)] bg-black border border-white/10"
        >
          {/* The Image inside */}
          <motion.div 
            style={{ scale: imageScale }}
            className="absolute w-[100vw] h-[100vh] flex items-center justify-center pointer-events-none"
          >
            <img 
              src="/resolution%20changed%20hardware%20image.png"
              alt="LUCA Hardware Showcase"
              className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05]"
            />
          </motion.div>
          
          {/* Inner Reveal Content */}
          <motion.div 
            style={{ opacity: innerOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.95)_100%)] z-10"></div>
          </motion.div>
        </motion.div>

        {/* Right Text ("Soon") */}
        <div className="absolute left-[calc(50%+55px)] sm:left-[calc(50%+75px)] md:left-[calc(50%+90px)] top-1/2 -translate-y-1/2 pl-2 sm:pl-4 flex justify-start items-center z-30 pointer-events-none">
          <motion.h1 
            style={{ x: rightX, opacity: textOpacity }}
            className="text-white text-3xl sm:text-6xl md:text-8xl lg:text-[110px] font-medium tracking-tight whitespace-nowrap drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
          >
            Soon
          </motion.h1>
        </div>
        
      </motion.div>
    </section>
  );
};

export default ProductShowcase;


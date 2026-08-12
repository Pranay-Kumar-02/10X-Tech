import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion';

const ProductShowcase = ({ openContactModal }) => {
  const containerRef = useRef(null);
  
  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply a gentle spring physics wrapper for that ultra-premium, buttery smooth Apple-like easing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 1. Expand width and height. 
  // We MUST use useMotionTemplate to smoothly interpolate between px and vw/vh! 
  // Otherwise Framer Motion fails and instantly sets it to 100vw.
  const expandProgress = useTransform(smoothProgress, [0, 0.85], [0, 1]);
  const width = useMotionTemplate`calc(140px + (min(100vw - 48px, 1312px) - 140px) * ${expandProgress})`;
  const height = useMotionTemplate`calc(70px + (100vh - 48px - 70px) * ${expandProgress})`;
  
  // 2. Adjust border radius to stay rounded
  const borderRadius = useTransform(smoothProgress, [0, 0.85], ["35px", "32px"]);

  // 3. Move the text off-screen left and right
  const leftX = useTransform(smoothProgress, [0, 0.85], ["0vw", "-50vw"]);
  const rightX = useTransform(smoothProgress, [0, 0.85], ["0vw", "50vw"]);
  
  // 4. Fade out the text as it moves
  const textOpacity = useTransform(smoothProgress, [0.2, 0.85], [1, 0]);

  // 5. Image Zoom effect (zooms in as the pill expands)
  const imageScale = useTransform(smoothProgress, [0, 1], [1.3, 1]);

  // 6. Fade in the inner vignette and sign-up button at the very end
  const innerOpacity = useTransform(smoothProgress, [0.85, 0.95], [0, 1]);

  return (
    // A 400vh container to give us plenty of scroll distance for the scrub animation
    <section ref={containerRef} className="relative w-full h-[400vh] bg-black z-20">
      
      {/* Sticky container that locks to the viewport during the 300vh scroll */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        
        {/* KEEP SCROLLING Indicator */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute top-6 left-0 w-full flex justify-center z-10 pointer-events-none"
        >
          <span className="text-gray-400/80 text-[11px] md:text-xs tracking-[0.3em] font-semibold uppercase">
            Keep Scrolling
          </span>
        </motion.div>

        {/* Left Text */}
        <div className="absolute right-[calc(50%+70px)] top-1/2 -translate-y-1/2 pr-4 md:pr-8 flex justify-end items-center z-10 pointer-events-none">
          <motion.h1 
            style={{ x: leftX, opacity: textOpacity }}
            className="text-white text-6xl md:text-8xl lg:text-[110px] font-medium tracking-tight whitespace-nowrap"
          >
            Coming
          </motion.h1>
        </div>

        {/* The Expanding Pill Image Container */}
        <motion.div 
          style={{ width, height, borderRadius }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 overflow-hidden flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.15)] bg-black"
        >
          {/* The Image inside - acts as a window to a full-screen image */}
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
          
          {/* Inner Reveal Content (Vignette & Button) */}
          <motion.div 
            style={{ opacity: innerOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.95)_100%)] z-10"></div>
            

          </motion.div>
        </motion.div>

        {/* Right Text */}
        <div className="absolute left-[calc(50%+70px)] top-1/2 -translate-y-1/2 pl-4 md:pl-8 flex justify-start items-center z-10 pointer-events-none">
          <motion.h1 
            style={{ x: rightX, opacity: textOpacity }}
            className="text-white text-6xl md:text-8xl lg:text-[110px] font-medium tracking-tight whitespace-nowrap"
          >
            Soon
          </motion.h1>
        </div>
        
      </motion.div>
    </section>
  );
};

export default ProductShowcase;

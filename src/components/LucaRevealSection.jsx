import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const LucaRevealSection = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });
  const timerRef = useRef(null);

  // loop: wait 10s after each playthrough then replay
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onEnded = () => {
      timerRef.current = setTimeout(() => {
        v.currentTime = 0;
        v.play().catch(() => {});
      }, 10000);
    };
    v.addEventListener('ended', onEnded);
    return () => {
      v.removeEventListener('ended', onEnded);
      clearTimeout(timerRef.current);
    };
  }, []);

  // play when section enters viewport
  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [inView]);

  return (
    <section ref={sectionRef} className="relative w-full bg-black overflow-hidden py-4 lg:py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center w-full"
      >
        <video
          ref={videoRef}
          src="/luca_reveal.webm"
          muted
          playsInline
          preload="auto"
          className="w-full max-w-2xl h-auto"
          style={{ background: 'transparent' }}
        />
      </motion.div>
    </section>
  );
};

export default LucaRevealSection;

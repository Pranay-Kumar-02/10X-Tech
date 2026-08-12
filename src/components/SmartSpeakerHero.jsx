import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Logo10X from './Logo10X';

const SmartSpeakerHero = () => {
  const videoRef = useRef(null);
  const timerRef = useRef(null);

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

  return (
    <section className="relative pt-24 pb-6 overflow-hidden min-h-[90svh] flex items-center">
      <div className="max-w-[1360px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
          {/* Left Side: Matter (Text) - Spanning 6 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-6 flex flex-col items-start"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 rounded-full">
                LUCA HARDWARE
              </span>
            </div>

            <div className="mb-2 h-16 md:h-24 flex items-center">
              <img
                src="https://i.ibb.co/Y781ky06/Screenshot-2026-05-26-000916-removebg-preview.png"
                alt="10X Technologies"
                className="h-full w-auto object-contain"
              />
            </div>

            <h2 className="text-xl md:text-3xl font-bold text-white mb-6 leading-tight">
              We are building LUCA
            </h2>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg">
              A smart speaker powered by our own operating system and conversational AI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="col-span-12 md:col-span-6 flex justify-end relative"
          >
            <div className="relative w-full max-w-lg flex items-center justify-center pointer-events-none" style={{ marginLeft: '65px', marginRight: '-90px' }}>
              <video
                ref={videoRef}
                src="/luca_reveal.webm"
                autoPlay
                muted
                playsInline
                preload="auto"
                className="w-full h-auto opacity-[0.85] brightness-90"
                style={{ background: 'transparent' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decorative Elements removed as per request */}
    </section>
  );
};

export default SmartSpeakerHero;

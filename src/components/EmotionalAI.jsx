import React from 'react';
import { motion } from 'framer-motion';

const EmotionalAI = () => {
  return (
    <section className="py-10 relative bg-black overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                More than an assistant. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  A companion.
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                LUCA doesn't just listen; it understands. By analyzing tone, mood, and context, LUCA interacts with you on an emotional level, making technology feel truly human.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-1 h-auto bg-purple-500 rounded-full"></div>
                  <div>
                    <h4 className="text-white font-bold">Contextual Awareness</h4>
                    <p className="text-gray-500 text-sm">Understands the nuances of your environment and conversation history.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 h-auto bg-blue-500 rounded-full"></div>
                  <div>
                    <h4 className="text-white font-bold">Tone Analysis</h4>
                    <p className="text-gray-500 text-sm">Responds differently based on your emotional state—excited, calm, or stressed.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, type: "spring" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-purple-500/20 blur-[80px] rounded-full animate-pulse"></div>
              <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
                {/* The Mascot Eyes Animation */}
                <div className="flex gap-10">
                  <motion.div 
                    animate={{ 
                      scaleY: [1, 1.2, 1, 0.1, 1],
                      y: [0, -5, 0, 0, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      times: [0, 0.1, 0.2, 0.3, 1] 
                    }}
                    className="w-8 h-12 md:w-10 md:h-16 bg-purple-400 rounded-full blur-[1px]"
                  ></motion.div>
                  <motion.div 
                    animate={{ 
                      scaleY: [1, 1.2, 1, 0.1, 1],
                      y: [0, -5, 0, 0, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      delay: 0.1,
                      times: [0, 0.1, 0.2, 0.3, 1] 
                    }}
                    className="w-8 h-12 md:w-10 md:h-16 bg-purple-400 rounded-full blur-[1px]"
                  ></motion.div>
                </div>
                
                {/* Subtle scanning line effect */}
                <motion.div 
                  animate={{ y: [-160, 160] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-[1px] bg-purple-500/30 blur-sm"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalAI;

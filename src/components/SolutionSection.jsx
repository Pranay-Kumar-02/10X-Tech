import React from 'react';
import { motion } from 'framer-motion';

const SolutionSection = () => {
  return (
    <section className="py-10 bg-white text-black overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center tracking-tight">
          WHAT WE ARE DOING?
        </h2>

        <div className="relative w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img 
              src={`${import.meta.env.BASE_URL}architecture_data.png`}
              alt="Unification Diagram" 
              className="w-full h-auto"
            />
          </motion.div>
          
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              We are unifying high-fidelity audio, complete portability, and emotional AI intelligence into a single, seamless ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

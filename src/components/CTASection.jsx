import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#000000]">
      {/* Subtle Purple Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary mb-6"
        >
          Ready to experience the future?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-text-secondary mb-10 max-w-2xl mx-auto font-medium"
        >
          Join our waitlist today and be among the first to explore the integrated power of LUCA AI and LIBRE OS.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="w-full sm:w-auto bg-accent text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-[0_0_30px_rgba(81,45,168,0.5)] hover:shadow-[0_0_50px_rgba(81,45,168,0.8)] hover:-translate-y-0.5 duration-300">
            Join Waitlist
          </button>
          <button className="w-full sm:w-auto border border-gray-700 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/5 hover:border-gray-500 transition-all duration-300">
            Get Early Access
          </button>
        </motion.div>
      </div>
    </section>
  );
}

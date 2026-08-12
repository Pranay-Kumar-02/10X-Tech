import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

// Extracted Noise component so we don't repeat the SVG string
const NoiseOverlay = () => (
  <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-screen" 
       style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}>
  </div>
);

const BentoGrid = () => {
  return (
    <section id="os" className="py-10 max-w-[1260px] mx-auto px-6 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-medium mb-1 text-white tracking-tight">Real Hardware.</h2>
        <h2 className="text-2xl font-medium text-[#A0A0A0] mb-10 tracking-tight">Real Emotion. Real AI.</h2>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
      >
        <motion.div variants={itemVariants} className="hover:-translate-y-1 transition-transform duration-300 bg-[#0C121A] border border-white/5 p-6 rounded-2xl flex flex-col justify-between min-h-[160px] relative overflow-hidden group cursor-pointer shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <NoiseOverlay />
          <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(50,150,200,0.15)_0%,transparent_70%)] group-hover:opacity-100 group-hover:scale-110 opacity-60 transition-all duration-500"></div>
          <div className="relative z-10">
            <h3 className="text-tier-2">100%</h3>
            <p className="text-tier-3 mt-1">On-device processing</p>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="hover:-translate-y-1 transition-transform duration-300 bg-[#120B15] border border-white/5 p-6 rounded-2xl flex flex-col justify-between min-h-[160px] relative overflow-hidden group cursor-pointer shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <NoiseOverlay />
          <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_top_right,rgba(150,50,200,0.15)_0%,transparent_70%)] group-hover:opacity-100 group-hover:scale-110 opacity-60 transition-all duration-500"></div>
          <div className="relative z-10">
            <h3 className="text-tier-2">Zero</h3>
            <p className="text-tier-3 mt-1">Latency overhead vs cloud</p>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="hover:-translate-y-1 transition-all duration-300 bg-[#0A0A0A] border border-white/5 hover:border-white/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] p-6 rounded-2xl flex flex-col justify-between min-h-[160px] cursor-pointer relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <NoiseOverlay />
          <p className="text-sm text-white/90 leading-relaxed mb-4 font-medium relative z-10">
            "Akshara speaker will revolutionize how we interact contextually and emotionally."
          </p>
          <div className="flex items-center gap-3 relative z-10">
             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-[11px] font-bold border border-white/10">D</div>
             <div>
               <p className="text-[13px] font-medium text-white">DorsaVali</p>
               <p className="text-[10px] text-[#A0A0A0] uppercase tracking-wide mt-0.5">Founder</p>
             </div>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="hover:-translate-y-1 transition-all duration-300 bg-[#0A0A0A] border border-white/5 hover:border-white/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] p-6 rounded-2xl flex flex-col justify-between min-h-[160px] cursor-pointer relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <NoiseOverlay />
          <p className="text-sm text-white/90 leading-relaxed mb-4 font-medium relative z-10">
            "No internet? No problem. Our models run entirely on-device for maximum privacy."
          </p>
          <div className="flex items-center gap-3 relative z-10">
             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#76B900]/30 to-[#76B900]/5 flex items-center justify-center text-[11px] font-bold border border-[#76B900]/20 text-[#76B900]">10</div>
             <div>
               <p className="text-[13px] font-medium text-white">10X Technologies</p>
               <p className="text-[10px] text-[#A0A0A0] uppercase tracking-wide mt-0.5">Engineering</p>
             </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="hover:-translate-y-1 transition-transform duration-300 bg-[#0A1215] border border-white/5 p-6 rounded-2xl flex flex-col justify-between min-h-[160px] relative overflow-hidden group cursor-pointer shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <NoiseOverlay />
          <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_top_left,rgba(50,200,150,0.15)_0%,transparent_70%)] group-hover:opacity-100 group-hover:scale-110 opacity-60 transition-all duration-500"></div>
          <div className="relative z-10">
            <h3 className="text-tier-2">LIBRE</h3>
            <p className="text-tier-3 mt-1">Custom built Android-based OS</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="hover:-translate-y-1 transition-transform duration-300 bg-[#15100A] border border-white/5 p-6 rounded-2xl flex flex-col justify-between min-h-[160px] relative overflow-hidden group cursor-pointer shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <NoiseOverlay />
          <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,150,50,0.15)_0%,transparent_70%)] group-hover:opacity-100 group-hover:scale-110 opacity-60 transition-all duration-500"></div>
          <div className="relative z-10">
            <h3 className="text-tier-2">30%</h3>
            <p className="text-tier-3 mt-1">Closer to the final experience</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BentoGrid;

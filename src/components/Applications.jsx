import React from 'react';
import { Speaker, Music, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, borderColor: "rgba(255,255,255,0.05)" },
  show: { 
    opacity: 1, 
    y: 0, 
    borderColor: ["rgba(255,255,255,0.05)", "rgba(139,92,246,0.6)", "rgba(255,255,255,0.05)"],
    transition: { duration: 1.5, ease: "easeOut" } 
  }
};

const Applications = () => {
  return (
    <section id="ai" className="py-10 max-w-[1260px] mx-auto px-6 flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-lg font-medium mb-10 text-white"
      >
        Applications
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full"
      >
        <motion.div variants={itemVariants} className="group glass-card p-6 rounded-2xl flex flex-col shadow-2xl hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] cursor-pointer relative overflow-hidden">
          {/* Internal Glow on load */}
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: [0, 1, 0] }}
             transition={{ duration: 1.5, delay: 0.2 }}
             viewport={{ once: true }}
             className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15)_0%,transparent_70%)] pointer-events-none"
          ></motion.div>

          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="p-2 bg-white/5 border border-white/10 rounded-lg group-hover:bg-purple-500/20 group-hover:border-purple-500/30 group-hover:scale-110 transition-all duration-500">
              <Speaker className="w-5 h-5 text-[#A0A0A0] group-hover:text-purple-300 stroke-[1.5] transition-colors" />
            </div>
            <h3 className="font-medium text-white text-sm">Wired Speakers</h3>
          </div>
          
          {/* Top Right Floating Image */}
          <div className="absolute top-4 right-4 w-16 h-16 opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 pointer-events-none drop-shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all"></div>
            <img src={`${import.meta.env.BASE_URL}wired-icon.png`} alt="Wired Speaker" className="w-full h-full object-cover rounded-full mix-blend-lighten relative z-10" />
          </div>

          <p className="text-[13px] text-[#A0A0A0] group-hover:text-white/80 transition-colors leading-relaxed mb-6 flex-1 relative z-10 w-[85%]">
            Built only for sound quality. You can't carry them out when you're on the go.
          </p>
          <span className="text-[11px] text-purple-400/50 group-hover:text-purple-400 transition-colors mt-auto flex items-center gap-1 relative z-10 font-medium">
            Learn More <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </span>
        </motion.div>
        
        <motion.div variants={itemVariants} className="group glass-card p-6 rounded-2xl flex flex-col shadow-2xl hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] cursor-pointer relative overflow-hidden">
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: [0, 1, 0] }}
             transition={{ duration: 1.5, delay: 0.4 }}
             viewport={{ once: true }}
             className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15)_0%,transparent_70%)] pointer-events-none"
          ></motion.div>
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="p-2 bg-white/5 border border-white/10 rounded-lg group-hover:bg-blue-500/20 group-hover:border-blue-500/30 group-hover:scale-110 transition-all duration-500">
              <Music className="w-5 h-5 text-[#A0A0A0] group-hover:text-blue-300 stroke-[1.5] transition-colors" />
            </div>
            <h3 className="font-medium text-white text-sm">Wireless Speakers</h3>
          </div>
          
          {/* Top Right Floating Image */}
          <div className="absolute top-4 right-4 w-16 h-16 opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 pointer-events-none drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all"></div>
            <img src={`${import.meta.env.BASE_URL}wireless-icon.png`} alt="Wireless Speaker" className="w-full h-full object-cover rounded-full mix-blend-lighten relative z-10" />
          </div>

          <p className="text-[13px] text-[#A0A0A0] group-hover:text-white/80 transition-colors leading-relaxed mb-6 flex-1 relative z-10 w-[85%]">
            Only designed to be carried around. You need another device to control what they play.
          </p>
          <span className="text-[11px] text-blue-400/50 group-hover:text-blue-400 transition-colors mt-auto flex items-center gap-1 relative z-10 font-medium">
            Learn More <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </span>
        </motion.div>
        
        <motion.div variants={itemVariants} className="group glass-card p-6 rounded-2xl flex flex-col shadow-2xl hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] cursor-pointer relative overflow-hidden">
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: [0, 1, 0] }}
             transition={{ duration: 1.5, delay: 0.6 }}
             viewport={{ once: true }}
             className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15)_0%,transparent_70%)] pointer-events-none"
          ></motion.div>
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="p-2 bg-white/5 border border-white/10 rounded-lg group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 group-hover:scale-110 transition-all duration-500">
              <Mic className="w-5 h-5 text-[#A0A0A0] group-hover:text-emerald-300 stroke-[1.5] transition-colors" />
            </div>
            <h3 className="font-medium text-white text-sm">Smart Speakers</h3>
          </div>
          
          {/* Top Right Floating Image */}
          <div className="absolute top-4 right-4 w-16 h-16 opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 pointer-events-none drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all"></div>
            <img src={`${import.meta.env.BASE_URL}smart-icon.png`} alt="Smart Speaker" className="w-full h-full object-cover rounded-full mix-blend-lighten relative z-10" />
          </div>

          <p className="text-[13px] text-[#A0A0A0] group-hover:text-white/80 transition-colors leading-relaxed mb-6 flex-1 relative z-10 w-[85%]">
            Only to control the smart home. It can't understand you contextually or emotionally.
          </p>
          <span className="text-[11px] text-emerald-400/50 group-hover:text-emerald-400 transition-colors mt-auto flex items-center gap-1 relative z-10 font-medium">
            Learn More <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Applications;

import { motion } from 'framer-motion';
import { Cpu, TerminalSquare, Speaker } from 'lucide-react';

const products = [
  {
    title: "LUCA AI",
    description: "Our advanced emotional-aware AI assistant designed to understand and interact naturally.",
    icon: <Cpu className="w-8 h-8 text-accent" />,
  },
  {
    title: "LIBRE OS",
    description: "A fast, secure, and minimal operating system built for seamless AI integration.",
    icon: <TerminalSquare className="w-8 h-8 text-accent" />,
  },
  {
    title: "Smart Speaker",
    description: "High-fidelity hardware powered by LUCA AI for an intelligent home experience.",
    icon: <Speaker className="w-8 h-8 text-accent" />,
  }
];

export default function Products() {
  return (
    <section id="products" className="py-28 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-accent uppercase mb-4"
          >
            Our Platform
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
          >
            A Unified Ecosystem
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-xl font-medium"
          >
            Experience the synergy of intelligent software, a robust operating system, and premium hardware.
          </motion.p>
        </div>

        {/* Cards Grid (Bento Box Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
          {/* Main Large Card (LUCA AI) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="md:col-span-8 glass-card p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full group-hover:bg-purple-600/20 transition-all duration-700 pointer-events-none"></div>
            <div className="flex-1 relative z-10">
              <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-500 w-fit">
                {products[0].icon}
              </div>
              <h4 className="text-2xl font-bold text-text-primary mb-4 relative z-10 tracking-tight">
                {products[0].title}
              </h4>
              <p className="text-[#A0A0A0] leading-relaxed text-lg relative z-10 max-w-sm">
                {products[0].description}
              </p>
            </div>
          </motion.div>

          {/* Vertical Card (LIBRE OS) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="md:col-span-4 glass-card p-6 rounded-2xl flex flex-col relative overflow-hidden group"
          >
            <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-blue-600/10 blur-[80px] rounded-full group-hover:bg-blue-600/20 transition-all duration-700 pointer-events-none"></div>
            <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10 w-fit">
              {products[1].icon}
            </div>
            <h4 className="text-2xl font-bold text-text-primary mb-4 relative z-10 tracking-tight">
              {products[1].title}
            </h4>
            <p className="text-[#A0A0A0] leading-relaxed text-lg relative z-10 mt-auto">
              {products[1].description}
            </p>
          </motion.div>

          {/* Wide Horizontal Card (Smart Speaker) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="md:col-span-12 glass-card p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="flex items-start md:items-center gap-6 relative z-10 max-w-2xl flex-col md:flex-row">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                {products[2].icon}
              </div>
              <div>
                <h4 className="text-2xl font-bold text-text-primary mb-4 relative z-10 tracking-tight">
                  {products[2].title}
                </h4>
                <p className="text-[#A0A0A0] leading-relaxed text-lg relative z-10">
                  {products[2].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

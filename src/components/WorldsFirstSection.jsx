import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "World's 1st Emotional AI Hardware",
    description: "Technology that understands you beyond commands.",
    icon: "/smart-icon.png"
  },
  {
    title: "Specialized Silicon for AI",
    description: "Built for zero-latency, high-performance ambient computing.",
    icon: "/icons.svg"
  },
  {
    title: "100% On-Device Processing",
    description: "Your data never leaves the device. Absolute privacy by design.",
    icon: "/favicon.svg"
  },
  {
    title: "Native Telugu Support",
    description: "The first hardware with a built-in Native Telugu Tokenizer.",
    icon: "/luca-telugu.png"
  }
];

const WorldsFirstSection = () => {
  return (
    <section className="py-4 lg:py-6 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-tier-1 mb-6">World's 1st</h2>

        {/* 3-column grid: card | image | card / card | image | card */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: '1fr auto 1fr',
            gridTemplateRows: 'auto auto',
            gridTemplateAreas: `
              "tl center tr"
              "bl center br"
            `,
            alignItems: 'stretch',
          }}
        >
          {/* Top-left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.0 }}
            viewport={{ once: true }}
            style={{ gridArea: 'tl' }}
            className="bg-[#0A0A0A] border border-white/5 p-6 rounded-3xl flex items-start gap-6 group hover:border-purple-500/30 transition-all"
          >
            <div className="w-16 h-16 shrink-0">
              <img src={`${import.meta.env.BASE_URL}${features[0].icon.slice(1)}`} alt={features[0].title} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div>
              <h3 className="text-tier-2">{features[0].title}</h3>
              <p className="text-tier-3">{features[0].description}</p>
            </div>
          </motion.div>

          {/* Center image — spans both rows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{ gridArea: 'center' }}
            className="flex items-center justify-center"
          >
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                width: '320px',
                height: '100%',
                minHeight: '300px',
                background: '#0A0A0A',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <img
                src="/worldfirst.png"
                alt="World's First AI Smart Speaker"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </motion.div>

          {/* Top-right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            style={{ gridArea: 'tr' }}
            className="bg-[#0A0A0A] border border-white/5 p-6 rounded-3xl flex items-start gap-6 group hover:border-purple-500/30 transition-all"
          >
            <div className="w-16 h-16 shrink-0">
              <img src={`${import.meta.env.BASE_URL}${features[1].icon.slice(1)}`} alt={features[1].title} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div>
              <h3 className="text-tier-2">{features[1].title}</h3>
              <p className="text-tier-3">{features[1].description}</p>
            </div>
          </motion.div>

          {/* Bottom-left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            style={{ gridArea: 'bl' }}
            className="bg-[#0A0A0A] border border-white/5 p-6 rounded-3xl flex items-start gap-6 group hover:border-purple-500/30 transition-all"
          >
            <div className="w-16 h-16 shrink-0">
              <img src={`${import.meta.env.BASE_URL}${features[2].icon.slice(1)}`} alt={features[2].title} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div>
              <h3 className="text-tier-2">{features[2].title}</h3>
              <p className="text-tier-3">{features[2].description}</p>
            </div>
          </motion.div>

          {/* Bottom-right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            style={{ gridArea: 'br' }}
            className="bg-[#0A0A0A] border border-white/5 p-6 rounded-3xl flex items-start gap-6 group hover:border-purple-500/30 transition-all"
          >
            <div className="w-16 h-16 shrink-0">
              <img src={`${import.meta.env.BASE_URL}${features[3].icon.slice(1)}`} alt={features[3].title} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div>
              <h3 className="text-tier-2">{features[3].title}</h3>
              <p className="text-tier-3">{features[3].description}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WorldsFirstSection;

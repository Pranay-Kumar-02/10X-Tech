import React from 'react';
import { Download, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Metrics = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-10 px-6 max-w-4xl mx-auto flex justify-center gap-20 text-center"
    >
      {[
        { Icon: Star, title: "LUCA", subtitle: "Emotionally Aware AI" },
        { Icon: Users, title: "LIBRE", subtitle: "In-house OS" },
        { Icon: Download, title: "MeitY", subtitle: "Govt. Backed" }
      ].map((item, i) => (
        <motion.div 
          key={i}
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center gap-3 cursor-default transition-transform"
        >
          <item.Icon className="w-6 h-6 text-[#A0A0A0] stroke-1" />
          <span className="text-2xl font-medium text-white">{item.title}</span>
          <span className="text-xs text-[#A0A0A0]">{item.subtitle}</span>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Metrics;

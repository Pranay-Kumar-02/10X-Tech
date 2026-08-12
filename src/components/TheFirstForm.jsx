import React from 'react';
import { motion } from 'framer-motion';

const specs = [
  { label: "Display", value: '1.3" Round AMOLED, 450x450 Resolution' },
  { label: "Memory", value: "4GB LPDDR4X RAM, 64GB eMMC Storage" },
  { label: "Battery", value: "5000mAh Lithium-ion (Up to 12 hours playback)" },
  { label: "Connectivity", value: "Wi-Fi 6, Bluetooth 5.2, USB-C" },
  { label: "OS", value: "LUCA-OS V-1.0 (LIBRE Based)" },
  { label: "Compute", value: "Specialized AI Silicon (NVIDIA Optimized)" },
  { label: "Audio", value: "High-Fidelity Mono / Expandable" },
  { label: "Privacy", value: "100% On-Device Processing" }
];

const TheFirstForm = () => {
  return (
    <section className="py-10 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center tracking-tight">THE FIRST FORM</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1260px] mx-auto">
          {/* Spec List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Technical Specifications</h3>
            {specs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-between items-center py-4 border-b border-white/5"
              >
                <span className="text-gray-500 uppercase text-xs tracking-widest">{spec.label}</span>
                <span className="text-white font-medium text-right ml-4">{spec.value}</span>
              </motion.div>
            ))}
          </div>

          {/* Hardware Philosophy */}
          <div className="bg-[#0A0A0A] p-6 rounded-3xl border border-white/5 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Hardware & Software Philosophy</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Based on <span className="text-white font-bold">LibreMobileOS</span> and <span className="text-white font-bold">Android</span>, LUCA ensures an open but private ecosystem. We believe that hardware should empower the user, not control them.
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-bold">OPEN SOURCE</div>
              <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold">PRIVACY FIRST</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheFirstForm;

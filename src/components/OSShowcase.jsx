import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Shield, Zap, Languages } from 'lucide-react';

const features = [
  {
    title: "Circular Interface",
    description: "A revolutionary UI designed for round displays, optimized for human interaction.",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    title: "100% On-Device",
    description: "Privacy is built-in. All AI processing happens locally on specialized silicon.",
    icon: <Shield className="w-6 h-6" />,
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Zero-Latency SLM",
    description: "Powered by Small Language Models for instant, natural responses.",
    icon: <Zap className="w-6 h-6" />,
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Native Telugu Support",
    description: "The first hardware with a built-in Native Telugu Tokenizer for seamless interaction.",
    icon: <Languages className="w-6 h-6" />,
    color: "from-pink-500/20 to-rose-500/20"
  }
];

const OSShowcase = () => {
  return (
    <section className="py-10 relative overflow-hidden bg-[#050505]">
      <div className="max-w-[1360px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">LUCA-OS V-1.0</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A custom Android-based foundation built for the future of ambient computing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl bg-gradient-to-br ${feature.color} border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all group`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OSShowcase;

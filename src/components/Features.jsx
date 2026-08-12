import { motion } from 'framer-motion';
import { BrainCircuit, Layers, Zap, Smartphone } from 'lucide-react';

const features = [
  {
    title: "Emotion-aware AI",
    description: "LUCA adapts to your tone and context, providing responses that feel human and empathetic.",
    icon: <BrainCircuit className="w-8 h-8 text-accent" />
  },
  {
    title: "Full-stack Ecosystem",
    description: "Hardware, OS, and AI built from the ground up to work perfectly together without friction.",
    icon: <Layers className="w-8 h-8 text-accent" />
  },
  {
    title: "Smart Automation",
    description: "Streamline daily tasks with intelligent routines that learn from your habits over time.",
    icon: <Zap className="w-8 h-8 text-accent" />
  },
  {
    title: "Multi-device Integration",
    description: "Seamlessly hand off tasks between your Smart Speaker, mobile device, and LIBRE OS.",
    icon: <Smartphone className="w-8 h-8 text-accent" />
  }
];

export default function Features() {
  return (
    <section className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-text-primary"
          >
            Core Capabilities
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-[#111111] border border-gray-800 rounded-2xl p-6 flex flex-col h-full hover:border-accent/40 hover:shadow-[0_10px_30px_rgba(81,45,168,0.15)] transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-black/50 border border-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-text-primary mb-4">
                {feature.title}
              </h4>
              <p className="text-text-secondary leading-relaxed flex-grow text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

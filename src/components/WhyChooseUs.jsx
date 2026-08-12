import { motion } from 'framer-motion';
import { MapPin, Network, MonitorSmartphone, Rocket } from 'lucide-react';

const reasons = [
  {
    title: "Built in India",
    description: "Designed and developed locally for the world, ensuring high quality and rapid innovation.",
    icon: <MapPin className="w-8 h-8 text-accent" />
  },
  {
    title: "Own AI Ecosystem",
    description: "We don't rely on third-party wrappers. LUCA is our proprietary intelligence engine.",
    icon: <Network className="w-8 h-8 text-accent" />
  },
  {
    title: "Hardware + Software Integration",
    description: "Perfect synergy between LIBRE OS and our devices for unmatched performance.",
    icon: <MonitorSmartphone className="w-8 h-8 text-accent" />
  },
  {
    title: "Future-ready Platform",
    description: "Built on an architecture designed to scale and adapt to tomorrow's technological shifts.",
    icon: <Rocket className="w-8 h-8 text-accent" />
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
          >
            Why 10X Technologies?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-xl leading-relaxed max-w-2xl mx-auto font-medium"
          >
            We are not just another software company. We are building the foundational infrastructure for the next generation of computing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-[#111111] border border-gray-800 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-start hover:border-accent/40 hover:shadow-[0_10px_30px_rgba(81,45,168,0.15)] transition-all duration-300 group"
            >
              <div className="shrink-0 w-16 h-16 bg-black/50 border border-gray-800 rounded-xl flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                {reason.icon}
              </div>
              <div>
                <h4 className="text-2xl font-bold text-text-primary mb-3">
                  {reason.title}
                </h4>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

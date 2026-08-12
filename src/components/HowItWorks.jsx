import { motion } from 'framer-motion';
import { User, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { id: 1, title: "You", icon: <User className="w-8 h-8 text-text-secondary group-hover:text-white transition-colors" /> },
    { id: 2, title: "LUCA AI", icon: <Sparkles className="w-8 h-8 text-accent" /> },
    { id: 3, title: "Action / Output", icon: <CheckCircle2 className="w-8 h-8 text-white" /> },
  ];

  return (
    <section className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            How It Works
          </h2>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto font-medium">
            A frictionless pipeline from intention to execution.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 relative max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col md:flex-row items-center gap-6 md:gap-4 w-full md:w-auto">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center flex-1 md:w-56 bg-[#111111] border border-gray-800 p-6 rounded-2xl relative z-10 hover:border-accent/40 hover:shadow-[0_10px_30px_rgba(81,45,168,0.15)] transition-all duration-300 group"
              >
                <div className="mb-6 bg-black/50 border border-gray-800 p-5 rounded-full group-hover:bg-accent/10 transition-colors">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-text-primary">
                  {step.title}
                </h4>
              </motion.div>

              {/* Connector Arrow (hidden on mobile, visible on md+) */}
              {index < steps.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.1 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="hidden md:flex text-accent mx-4"
                >
                  <ArrowRight strokeWidth={2.5} className="w-10 h-10" />
                </motion.div>
              )}
              {/* Connector Arrow (visible on mobile) */}
              {index < steps.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.1 }}
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex md:hidden text-accent my-2 rotate-90"
                >
                  <ArrowRight strokeWidth={2.5} className="w-8 h-8" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

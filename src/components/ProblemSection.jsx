import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection = () => {
  const problems = [
    {
      title: "WIRED SPEAKERS",
      description: "Only for sound quality\nCAN'T CARRY THEM OUT",
      image: "/wired-icon.png",
      color: "text-purple-400"
    },
    {
      title: "WIRELESS SPEAKERS",
      description: "Only designed to be carried around\nYOU NEED ANOTHER DEVICE TO OPERATE",
      image: "/wireless-icon.png",
      color: "text-purple-400"
    },
    {
      title: "SMART SPEAKERS",
      description: "Only to control the smart home\nIT CAN'T UNDERSTAND YOU CONTEXTUALLY",
      image: "/smart-icon.png",
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-10 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-bold mb-4">THE PROBLEM</h2>
        <p className="text-xl md:text-2xl font-bold mb-16 italic">
          <span className="text-purple-500">"SPEAKERS NEED A REVOLUTION</span> - NOT JUST AN EVOLUTION!"
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center group hover:bg-[#111] transition-all"
            >
              <div className="w-24 h-24 mb-6">
                <img src={`${import.meta.env.BASE_URL}${item.image.slice(1)}`} alt={item.title} className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className={`text-xl font-black mb-4 tracking-wider ${item.color}`}>{item.title}</h3>
              <p className="text-gray-400 whitespace-pre-line leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

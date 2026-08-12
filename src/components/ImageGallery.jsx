import React from 'react';
import { motion } from 'framer-motion';

const ImageGallery = () => {
  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2 relative aspect-[16/9] bg-white rounded-3xl overflow-hidden flex items-center justify-center p-6"
          >
            <img 
              src={`${import.meta.env.BASE_URL}hero-device.png`} 
              alt="LUCA Main View" 
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Right Stacked Images */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-white rounded-3xl overflow-hidden flex items-center justify-center p-6"
            >
              <img 
                src={`${import.meta.env.BASE_URL}smart-icon.png`} 
                alt="LUCA Detail 1" 
                className="w-full h-full object-contain scale-110"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-white rounded-3xl overflow-hidden flex items-center justify-center p-6"
            >
              <img 
                src={`${import.meta.env.BASE_URL}hero-device.png`} 
                alt="LUCA Detail 2" 
                className="w-full h-full object-contain rotate-45 scale-90"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;

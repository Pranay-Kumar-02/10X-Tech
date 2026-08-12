import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Loader2 } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Web3Forms Submission Logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    // User's specific Web3Forms access key
    formData.append("access_key", "afe1a8c7-7cc0-4bea-9107-57cb3a899c70");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center px-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        ></motion.div>

        {/* Modal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-md bg-[#0A0A0E] border border-white/10 rounded-3xl shadow-2xl overflow-hidden glass-card p-6"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-[#A0A0A0] hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-heading-05 text-white mb-2">Contact Support</h2>
          <p className="text-body-03 text-[#A0A0A0] mb-6">We'd love to hear from you. Send us a message.</p>

          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-10 text-center gap-4"
            >
              <CheckCircle2 className="w-16 h-16 text-emerald-400" />
              <div>
                <h3 className="text-heading-06 text-white mb-1">Message Sent!</h3>
                <p className="text-body-03 text-[#A0A0A0]">We will get back to you shortly.</p>
              </div>
            </motion.div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-tagline-02 text-[#A0A0A0] uppercase ml-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all placeholder:text-[#555]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-tagline-02 text-[#A0A0A0] uppercase ml-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all placeholder:text-[#555]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-tagline-02 text-[#A0A0A0] uppercase ml-1">Message</label>
                <textarea 
                  name="message"
                  placeholder="How can we help you?"
                  rows="4"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all placeholder:text-[#555] resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="text-btn-secondary mt-4 w-full bg-white text-black rounded-xl py-3.5 flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                ) : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactModal;

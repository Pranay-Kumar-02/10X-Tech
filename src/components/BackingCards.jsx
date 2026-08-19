import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PartnerModal from './PartnerModal';

const BackingCards = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (partner) => {
    setSelectedPartner(partner);
    setIsModalOpen(true);
  };

  const backers = [
    {
      name: 'AWS | 10X Technologies',
      tagline: 'CLOUD INFRASTRUCTURE',
      heroImage: 'https://i.ibb.co/7xm7tHpW/10-X-AWS-Announcement.png',
      description: 'Leveraging AWS cloud infrastructure to scale multilingual AI research, optimize edge inference, and accelerate LUCA’s real-world deployment.',
      fullContent: (
        <>
          <span className="block mb-4">10X Technologies secured Amazon Web Services (AWS) Credits!</span>
          <span className="block mb-4">Compute has always been a constraint for us when building from the ground up and now that constraint just shifted.</span>
          <span className="block mb-4">We’re using our AWS credits to accelerate the development of LUCA ●● our on-device, multilingual AI system engineered for real hardware, not just the cloud. From training pipelines to inference optimization, this unlocks faster iteration across the entire stack. It also enables us to pursue deeper, world-class research across language, efficiency, and edge AI systems. All of which is being built and scaled on AWS infrastructure.</span>
          <span className="block mb-4">The focus remains unchanged: building efficient, edge-native intelligence that actually works in the real world.</span>
          <span className="block mb-4">Grateful to Amazon Web Services (AWS) for enabling this, and special thanks to MoreYeahs for facilitating it.</span>
          <span className="block font-semibold text-purple-300">More coming.</span>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link 
              to="/blog/1"
              className="px-6 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-white hover:bg-purple-600 transition-all text-center text-xs font-mono font-bold uppercase"
            >
              Read in Blog
            </Link>
          </div>
        </>
      ),
      highlights: [],
      accentColor: '#ff9900',
      borderHover: 'hover:border-orange-400/40',
      gradientRgba: '255,153,0',
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
          alt="AWS Logo"
          className="h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(255,153,0,0.8)]"
        />
      )
    },
    {
      name: 'MeitY | 10X Technologies',
      tagline: 'GOVERNMENT OF INDIA',
      heroImage: '/MeitY.jpg',
      description: 'We are backed by MeitY Startup Hub under the GENESIS program, marking the first institutional investment for 10X Technologies.',
      fullContent: (
        <>
          <span className="block mb-4 font-bold text-white">Government of India (GoI) is now backing 10X Technologies 🇮🇳</span>
          <span className="block mb-4">10X Technologies has been selected under EiR-2 of the MeitY GENESIS program and we are now officially backed by the Government of India (MeitY Startup Hub - Ministry of Electronics and Information Technology).</span>
          <span className="block mb-4">For the first time, our vision has moved from belief to institutional backing by MeitY Startup Hub. This support will directly fuel our vision of building on-device, multilingual small language models designed from the ground up for real hardware.</span>
          <span className="block font-semibold text-purple-300">Grateful to MeitY Startup Hub and Atal Incubation Centre for backing our journey at its foundation.</span>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link 
              to="/blog/2"
              className="px-6 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-white hover:bg-purple-600 transition-all text-center text-xs font-mono font-bold uppercase"
            >
              Read in Blog
            </Link>
          </div>
        </>
      ),
      highlights: [],
      accentColor: '#1e90ff',
      borderHover: 'hover:border-blue-500/40',
      gradientRgba: '30,144,255',
      logo: (
        <img
          src={`${import.meta.env.BASE_URL}govt of india-remove.bg.png`}
          alt="Govt of India"
          className="h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(30,144,255,0.8)]"
        />
      )
    },
    {
      name: 'NVIDIA | 10X Technologies',
      tagline: 'INCEPTION PROGRAM',
      heroImage: '/nvidia.png',
      description: 'Accepted into NVIDIA Inception to accelerate LUCA through advanced AI infrastructure, edge computing support, and hardware-level optimization.',
      fullContent: (
        <>
          <span className="block mb-4 font-bold text-white">10X Technologies is now part of NVIDIA Inception</span>
          <span className="block mb-4">10X Technologies has been accepted into the NVIDIA Inception program, NVIDIA’s global initiative supporting startups pushing the boundaries of AI, edge computing, and accelerated systems.</span>
          <span className="block mb-4">We are building on-device, multilingual AI systems designed to run efficiently on real hardware. As a member of NVIDIA Inception, we have direct access to tools and technical support to move faster toward making LFM local execution a reality at scale.</span>
          <span className="block font-semibold text-purple-300">More coming!</span>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link 
              to="/blog/3"
              className="px-6 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-white hover:bg-purple-600 transition-all text-center text-xs font-mono font-bold uppercase"
            >
              Read in Blog
            </Link>
          </div>
        </>
      ),
      highlights: [],
      accentColor: '#76b900',
      borderHover: 'hover:border-[#76b900]/40',
      gradientRgba: '118,185,0',
      logo: (
        <img
          src={`${import.meta.env.BASE_URL}nvidia-remove.bg.png`}
          alt="NVIDIA Logo"
          className="h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(118,185,0,0.8)] scale-[1.3]"
        />
      )
    }
  ];

  return (
    <>
      <section className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-12 lg:py-16">
        
        {/* Section Label */}
        <div className="mb-8 text-left">
          <span className="text-tagline-02 text-purple-400 uppercase tracking-widest font-mono text-xs mb-2 block">
            INSTITUTIONAL ANNOUNCEMENTS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Backed & Supported By Industry Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {backers.map((backer, i) => (
            <div 
              key={i} 
              className={`relative h-full flex flex-col rounded-[28px] p-6 overflow-hidden border border-white/10 bg-[#070716]/90 backdrop-blur-xl ${backer.borderHover} transition-all duration-500 group shadow-xl`}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, rgba(${backer.gradientRgba},0.08) 0%, transparent 70%)` }}
              />
              <div className="relative z-10 h-20 flex items-center justify-center mb-6">
                {backer.logo}
              </div>
              <div className="relative z-10 flex flex-col items-center text-center flex-1">
                <span className="text-[11px] font-mono font-bold text-purple-400 uppercase tracking-wider mb-2">{backer.tagline}</span>
                <h3 className="text-lg font-bold text-white tracking-tight mb-3">{backer.name}</h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed mb-6 flex-1">{backer.description}</p>
                <button
                  type="button"
                  onClick={() => openModal(backer)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white hover:text-black transition-all cursor-pointer text-xs font-mono uppercase tracking-wider"
                >
                  <span>Read Full Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PartnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} partner={selectedPartner} />
    </>
  );
};

export default BackingCards;

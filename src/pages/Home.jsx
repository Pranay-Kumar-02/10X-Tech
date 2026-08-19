import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Starfield from '../components/Starfield';
import HeroSpatial from '../components/HeroSpatial';
import LiveIntelligenceSurface from '../components/LiveIntelligenceSurface';
import BackingCards from '../components/BackingCards';
import SLMVisualSimulator from '../components/SLMVisualSimulator';
import InteractiveModelWorkbench from '../components/InteractiveModelWorkbench';
import IntelligenceStack from '../components/IntelligenceStack';
import LabWorkbench from '../components/LabWorkbench';
import BlackHoleFeature from '../components/BlackHoleFeature';
import HardwareShowcase from '../components/HardwareShowcase';
import SpatialRoutingHub from '../components/SpatialRoutingHub';
import Team from '../components/Team';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

const Home = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-[100svh] bg-black text-white selection:bg-purple-500/30 font-sans relative w-full flex flex-col overflow-x-hidden">

      {/* Global Noise Overlay */}
      <div className="bg-noise fixed pointer-events-none z-50"></div>

      {/* Upper Area Starfield (Fade into solid pure black below) */}
      <div className="absolute top-0 left-0 right-0 h-[950px] w-full pointer-events-none z-0 overflow-hidden">
        <Starfield masked={true} />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10">
        <Navbar openContactModal={() => setIsContactModalOpen(true)} />
        
        {/* 1. Master Executive Positioning Hero & Logos Marquee */}
        <HeroSpatial />

        {/* 2. Signature Live Intelligence Spatial Experience (Language Input -> 3D Field -> Response) */}
        <LiveIntelligenceSurface />

        {/* 3. Institutional Partner Backing Cards (AWS, MeitY, NVIDIA + Popup Modal) */}
        <BackingCards />

        {/* 4. Deployment Architecture Simulator (Cloud API vs On-Device SLM) */}
        <SLMVisualSimulator />

        {/* 5. 10X Model Catalog & Live Hugging Face Spaces */}
        <InteractiveModelWorkbench />

        {/* 6. Connected 5-Layer 10X Intelligence Stack */}
        <IntelligenceStack />

        {/* 7. Research & Workbench Artifacts */}
        <LabWorkbench />

        {/* 8. Iconic Black Hole Research & Blog Card ("Inside 10X Technologies & LUCA") */}
        <BlackHoleFeature />

        {/* 9. Smart Speaker Origin Story & Hardware Vehicle */}
        <HardwareShowcase />

        {/* 10. Spatial Visitor Routing Hub */}
        <SpatialRoutingHub />

        {/* 11. Team Section */}
        <Team />

        {/* 12. Footer */}
        <Footer openContactModal={() => setIsContactModalOpen(true)} />
      </div>

      {/* Global Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
};

export default Home;

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ openContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBentoExpanded, setIsBentoExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasDocked, setHasDocked] = useState(false);
  const lastScrollYRef = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, path) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleExpandEvent = (e) => {
      setIsBentoExpanded(!!e.detail.expanded);
    };

    window.addEventListener('luca-bento-expand', handleExpandEvent);
    return () => window.removeEventListener('luca-bento-expand', handleExpandEvent);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'LUCA', path: '/product' },
    { label: 'Models', path: '/models' },
    { label: 'Tokenizer', path: '/tokenizer-prototype' },
    { label: 'Research', path: '/blog' },
  ];

  return (
    <>
      {/* Backdrop when Mobile Menu is open */}
      {isMobileMenuOpen && (
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-40 lg:hidden bg-black/80 backdrop-blur-xl transition-opacity duration-300 pointer-events-auto"
        />
      )}

      {/* ── DRAMATIC SPATIAL LAUNCH & DOCK TOOLBAR ── */}
      <motion.header 
        initial={{ 
          y: 260, 
          scale: 0.35, 
          opacity: 0,
          filter: 'blur(8px)'
        }}
        animate={{ 
          y: isBentoExpanded ? -200 : 0, 
          scale: 1, 
          opacity: isBentoExpanded ? 0 : 1,
          filter: 'blur(0px)'
        }}
        transition={{ 
          duration: 1.3, 
          ease: [0.19, 1, 0.22, 1], // Futuristic aerodynamic momentum curve
          delay: 0.2 
        }}
        onAnimationComplete={() => setHasDocked(true)}
        className="fixed top-4 sm:top-6 inset-x-0 z-50 flex flex-col items-center px-4 sm:px-6 pointer-events-none"
      >
        <div className="relative w-full max-w-5xl flex flex-col items-center">
          
          {/* Main Floating Pill Bar with Docking Glow */}
          <nav className={`relative w-full px-5 sm:px-7 py-3 flex items-center justify-between pointer-events-auto rounded-full transition-all duration-500 ${
            isScrolled 
              ? 'bg-black/85 border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.9)] backdrop-blur-2xl' 
              : 'bg-black/60 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl'
          }`}>
            
            {/* Docking Light Sweep Highlight */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <motion.div 
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: '200%', opacity: [0, 0.8, 0] }}
                transition={{ duration: 1.4, delay: 0.8, ease: 'easeInOut' }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-purple-400/20 to-transparent skew-x-12"
              />
            </div>

            {/* Left: Brand Logo */}
            <Link 
              to="/" 
              onClick={(e) => handleNavClick(e, '/')} 
              className="flex items-center gap-2 cursor-pointer group shrink-0 relative z-10"
            >
              <img 
                src="https://i.ibb.co/Y781ky06/Screenshot-2026-05-26-000916-removebg-preview.png"
                alt="10X Technologies"
                className="h-7 sm:h-8 w-auto object-contain transition-opacity duration-200 group-hover:opacity-100 opacity-90"
              />
            </Link>

            {/* Center: Clean, Highly Readable Minimal Links */}
            <div className="hidden md:flex items-center gap-7 lg:gap-9 relative z-10">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path || (item.path === '/blog' && location.pathname.startsWith('/blog/'));
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={`text-sm tracking-normal transition-colors duration-200 font-medium ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            
            {/* Right: Minimal Contact Button */}
            <div className="hidden sm:flex items-center gap-3 shrink-0 relative z-10">
              <button 
                type="button"
                onClick={openContactModal}
                className="px-5 py-2 rounded-full text-xs font-semibold tracking-wide bg-white text-black hover:bg-zinc-200 transition-all duration-200 active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.15)]"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Toggle Button */}
            <button 
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden w-8 h-8 rounded-full text-zinc-300 hover:text-white bg-white/5 border border-white/10 active:scale-95 transition-all cursor-pointer flex items-center justify-center relative z-10"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </nav>

          {/* Clean Mobile Menu */}
          <div className={`w-full max-w-sm mt-2 pointer-events-auto md:hidden transition-all duration-300 transform origin-top ${
            isMobileMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none hidden'
          }`}>
            <div className="bg-black/90 border border-white/15 rounded-2xl p-4 shadow-2xl backdrop-blur-2xl flex flex-col gap-2">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path || (item.path === '/blog' && location.pathname.startsWith('/blog/'));
                return (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                      isActive ? 'text-white bg-white/10 font-semibold' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="my-1 border-t border-white/10" />

              <button 
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (openContactModal) openContactModal();
                }}
                className="w-full py-2.5 rounded-lg text-center font-semibold text-black text-sm bg-white hover:bg-zinc-200 transition-all cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>

        </div>
      </motion.header>
    </>
  );
};

export default Navbar;

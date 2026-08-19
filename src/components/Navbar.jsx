import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ openContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBentoExpanded, setIsBentoExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasDocked, setHasDocked] = useState(false);
  const lastScrollYRef = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

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
      setIsScrolled(currentScrollY > 15);
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
          ease: [0.19, 1, 0.22, 1],
          delay: 0.2 
        }}
        onAnimationComplete={() => setHasDocked(true)}
        className="fixed top-4 sm:top-6 inset-x-0 z-50 flex flex-col items-center px-4 sm:px-6 pointer-events-none"
      >
        <div className="relative w-full max-w-5xl flex flex-col items-center">
          
          {/* Main Floating iOS-Style Glossy Liquid Glass Pill Bar */}
          <nav 
            style={isScrolled ? {
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 100%), rgba(10, 10, 18, 0.45)',
              backdropFilter: 'blur(28px) saturate(190%)',
              WebkitBackdropFilter: 'blur(28px) saturate(190%)',
              boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.3), 0 14px 40px -6px rgba(0, 0, 0, 0.65), 0 0 24px rgba(168, 85, 247, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.16)'
            } : {
              background: 'transparent',
              borderColor: 'transparent',
              boxShadow: 'none',
              backdropFilter: 'none',
              WebkitBackdropFilter: 'none'
            }}
            className="relative w-full px-5 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between pointer-events-auto rounded-full transition-all duration-300"
          >
            
            {/* Top Gloss Refraction Sheen */}
            {isScrolled && (
              <div className="absolute top-0 inset-x-6 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
            )}

            {/* Left: 'Home' on homepage, full '10X Technologies' Logo on other pages */}
            <div className="shrink-0 relative z-10 flex items-center">
              {isHomePage ? (
                <Link
                  to="/"
                  onClick={(e) => handleNavClick(e, '/')}
                  className="text-sm font-medium tracking-normal text-white hover:text-purple-300 transition-colors duration-200 cursor-pointer flex items-center gap-1.5 px-2 py-1 rounded-full hover:bg-white/5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  <span>Home</span>
                </Link>
              ) : (
                <Link 
                  to="/" 
                  onClick={(e) => handleNavClick(e, '/')} 
                  className="flex items-center gap-2 cursor-pointer group shrink-0"
                >
                  <img 
                    src="https://i.ibb.co/Y781ky06/Screenshot-2026-05-26-000916-removebg-preview.png"
                    alt="10X Technologies"
                    className="h-7 sm:h-8 w-auto object-contain transition-opacity duration-200 group-hover:opacity-100 opacity-90"
                  />
                </Link>
              )}
            </div>

            {/* Center: Clean Minimal Nav Links */}
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
            <div 
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%), rgba(10, 10, 18, 0.9)',
                backdropFilter: 'blur(28px) saturate(190%)',
                WebkitBackdropFilter: 'blur(28px) saturate(190%)',
                boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 20px 50px rgba(0, 0, 0, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
              className="rounded-2xl p-4 flex flex-col gap-2"
            >
              <Link 
                to="/" 
                onClick={(e) => handleNavClick(e, '/')}
                className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                  isHomePage ? 'text-white bg-white/10 font-semibold' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
              </Link>
              
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

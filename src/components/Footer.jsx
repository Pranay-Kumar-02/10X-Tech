import React, { useState } from 'react';
import { 
  MessageSquare, 
  LifeBuoy, 
  Search, 
  Command, 
  Sparkles,
  Cpu,
  Bot,
  Activity,
  CheckCircle
} from 'lucide-react';

const Twitter = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
);

const Linkedin = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

const Github = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);

const Youtube = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

const Footer = ({ openContactModal, minimal = false, hideCommunitySupport = false, hideWaitlist = false, hideSearchAndStatus = false }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    if (email.trim() !== '') {
      setIsLoading(true);
      try {
        const response = await fetch('https://formspree.io/f/mnjwgenv', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ email: email, form: 'Footer Waitlist' })
        });
        
        if (response.ok) {
          setIsSubscribed(true);
          setEmail('');
        }
      } catch (error) {
        console.error("Subscription error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <footer className={`px-6 max-w-[1360px] mx-auto w-full ${minimal ? 'pt-8 pb-4 lg:pb-6' : 'py-8 lg:py-12'}`}>
      {!minimal && (
        <>
          {!hideCommunitySupport && (
            <>
              <div className="mb-4">
                <h3 className="text-tier-1">Community & Support</h3>
              </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Community Card (LinkedIn) */}
            <a 
              href="https://www.linkedin.com/company/10xglobaltechnologies/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 glass-card glass-card-stable rounded-3xl p-6 md:p-8 flex items-center justify-between group hover:border-purple-500/30 transition-colors cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="flex items-center gap-6 relative z-10">
                 <div className="w-12 h-12 bg-white/5 border border-white/10 shadow-inner rounded-full flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                   <Linkedin className="w-5 h-5 text-[#A0A0A0] group-hover:text-purple-300 transition-colors" />
                 </div>
                 <div>
                   <h4 className="text-body-01 text-white mb-1">Join the community</h4>
                   <p className="text-body-03 text-[#A0A0A0]">Follow our latest updates on LinkedIn.</p>
                 </div>
              </div>
              <span className="text-btn-secondary text-[#A0A0A0] group-hover:text-purple-300 transition-colors flex items-center gap-1 whitespace-nowrap ml-4 relative z-10">
                Follow Us <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </span>
            </a>
            
            {/* Support Card */}
            <div 
              onClick={openContactModal}
              className="flex-1 glass-card glass-card-stable rounded-3xl p-6 md:p-8 flex items-center justify-between group hover:border-blue-500/30 transition-colors cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="flex items-center gap-6 relative z-10">
                 <div className="w-12 h-12 bg-white/5 border border-white/10 shadow-inner rounded-full flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                   <LifeBuoy className="w-5 h-5 text-[#A0A0A0] group-hover:text-blue-300 transition-colors" />
                 </div>
                 <div>
                   <h4 className="text-body-01 text-white mb-1">Need help?</h4>
                    <p className="text-body-03 text-[#A0A0A0]">Get in touch with 10X Technologies.</p>
                 </div>
              </div>
              <span className="text-btn-secondary text-[#A0A0A0] group-hover:text-blue-300 transition-colors flex items-center gap-1 whitespace-nowrap ml-4 relative z-10">
                Contact Us <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </span>
            </div>
          </div>
            </>
          )}

          {/* Premium Newsletter / Waitlist Section */}
          {!hideWaitlist && (
          <div className="relative w-full rounded-3xl p-[1px] overflow-hidden mb-6 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative bg-[#050508]/90 backdrop-blur-xl rounded-[23px] py-6 px-8 md:py-8 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 h-full border border-white/5 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]">
               <div className="flex-1">
                 <div className="flex items-center gap-2 mb-3">
                   <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
                   <h3 className="text-tier-2">Be the First to know about us</h3>
                 </div>
                 <p className="text-tier-3 max-w-md mb-3">
                   Join our waitlist. Be the first to know when LUCA ships and get exclusive BETA access to our foundation models and SOTA Research Updates.
                 </p>
                 <span className="text-tagline-02 text-purple-400 uppercase block">WE DON’T SPAM YOU!</span>
               </div>
               
               <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
                 {isSubscribed ? (
                   <div className="w-full sm:w-auto bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2 animate-in fade-in zoom-in duration-300">
                     <CheckCircle className="w-4 h-4" />
                     Thanks for joining! We'll be in touch.
                   </div>
                 ) : (
                   <>
                     <div className="relative w-full sm:w-72">
                       <input 
                         type="email" 
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         disabled={isLoading}
                         placeholder="Enter your email address" 
                         className="w-full bg-black/50 border border-white/10 rounded-full py-3.5 px-6 text-sm text-white focus:outline-none focus:border-purple-500/50 focus:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all placeholder:text-[#555] disabled:opacity-50"
                       />
                     </div>
                     <button 
                       onClick={handleSubscribe}
                       disabled={isLoading || email.trim() === ''}
                       className="text-btn-secondary w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-full hover:bg-purple-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all whitespace-nowrap disabled:opacity-70 disabled:hover:scale-100 cursor-pointer disabled:cursor-not-allowed"
                     >
                       {isLoading ? 'Subscribing...' : 'Subscribe'}
                     </button>
                   </>
                 )}
               </div>
            </div>
          </div>
          )}

          {/* Mid Section: AI / Search / Status */}
          {!hideSearchAndStatus && (
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-6">
            <div className="hidden lg:block w-full lg:w-auto"></div>

            <div className="flex flex-col lg:flex-row items-center gap-6 w-full lg:w-auto">
              <div className="relative flex items-center w-full lg:w-[450px]">
                <Search className="absolute left-4 w-4 h-4 text-[#A0A0A0]" />
                <input 
                  type="text" 
                  placeholder="Search (e.g. Akshara, LUCA AI)" 
                  className="w-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] rounded-full py-3.5 pl-12 pr-16 text-sm text-white focus:outline-none focus:border-purple-500/50 focus:shadow-[0_0_20px_rgba(168,85,247,0.2),inset_0_2px_4px_rgba(0,0,0,0.3)] transition-all placeholder:text-[#555] focus:bg-white/10"
                />
                <div className="absolute right-3 flex items-center gap-1.5 pointer-events-none">
                  <div className="px-2 py-1 bg-[#1A1A1A] shadow-[inset_0_-1px_0_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] rounded-md text-[10px] text-[#A0A0A0] flex items-center border border-black font-sans">
                    <Command className="w-3 h-3" />
                  </div>
                  <div className="px-2 py-1 bg-[#1A1A1A] shadow-[inset_0_-1px_0_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] rounded-md text-[10px] text-[#A0A0A0] border border-black font-sans font-medium">K</div>
                </div>
              </div>
            </div>
          </div>
          )}
        </>
      )}

      {/* Bottom bar: copyright | summarize | socials */}
      {(() => {
        const prompt = encodeURIComponent('Summarize this page about 10X Technologies and LUCA AI: https://10xtechnologies.tech/');
        const ais = [
          {
            label: 'ChatGPT',
            url: `https://chatgpt.com/?q=${prompt}`,
            icon: (
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.677l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
              </svg>
            ),
            hover: 'hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]'
          },
          {
            label: 'Claude',
            url: `https://claude.ai/new?q=${prompt}`,
            icon: (
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-1.485-.097L.82 12.559l-.18-.403.142-.436.61-.17 1.055.024 1.826.097 2.881.097h.717l-1.507-2.491-1.417-2.209-.636-1.056-.408-.862-.12-.605.312-.489.568-.22.561.2.58.558.49.69 1.301 2.236 1.425 2.418.367.636h.104l-.166-3.124-.057-2.587.04-1.152.168-.983.698-.562.496.2.406.682-.04 1.077-.064 1.843-.12 3.256h.272l.717-1.444 1.102-1.995.748-1.2.69-.998.586-.65.618-.2.567.278.25.617-.15.7-.618 1.006-.851 1.444-.832 1.58-.625 1.2h.2l2.386-1.15 1.644-.692 1.12-.352.67.203.261.626-.27.613-1.014.54-1.882.794-2.086 1.037.072.19 2.18.282 1.774.282.972.19.606.253.31.463-.12.577-.706.25-1.278-.048-2.405-.378-1.15-.19-.067.15 1.015 1.067.845 1.077.606 1.073.12.712-.38.498-.5.124-.666-.312-1.265-1.593-1.06-1.449h-.17l-.496 3.742-.378 1.607-.427.69-.55.2-.524-.265-.262-.625.17-1.124.69-3.007.17-.87-.152-.04-1.667 2.538-1.18 1.527-.718.782-.69.25-.547-.35-.1-.59.2-.544.706-.918 1.849-2.345.746-1.104-.087-.064-1.27.395-2.006.411-.845.1-.677-.315-.34-.521.054-.604.422-.37.916-.2 1.826-.411 1.313-.31.21-.217z"/>
              </svg>
            ),
            hover: 'hover:text-orange-400 hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]'
          },
          {
            label: 'Perplexity',
            url: `https://www.perplexity.ai/?q=${prompt}`,
            icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3MCr3CpgCmXX2Po2Qw_GIBBJ9Sg7ZRClbtQ&s" alt="Perplexity" className="w-4 h-4 object-contain rounded-sm grayscale opacity-70 group-hover:opacity-100 transition-opacity" />,
            hover: 'hover:drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]'
          },
          {
            label: 'Gemini',
            url: `https://gemini.google.com/app?q=${prompt}`,
            icon: <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png" alt="Gemini" className="w-4 h-4 object-contain grayscale opacity-70 group-hover:opacity-100 transition-opacity" />,
            hover: 'hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]'
          },
        ];
        return (
          <div className="relative pt-6 mt-2">
            {/* Divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent blur-[1px]" />

            <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 text-center md:text-left">
              {/* Left: summarize with AI */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <span className="text-[#444] text-[11px] font-medium tracking-wide whitespace-nowrap">Summarize with AI</span>
                <div className="flex items-center gap-3">
                  {ais.map((ai) => (
                    <a
                      key={ai.label}
                      href={ai.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={ai.label}
                      className={`text-[#555] transition-all duration-300 group ${ai.hover}`}
                    >
                      <span className="group-hover:-translate-y-0.5 transition-transform block">{ai.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Center: copyright */}
              <span className="text-body-03 text-[#555] text-xs sm:text-sm">© 2026 10X Technologies. • All rights reserved</span>

              {/* Right: social icons */}
              <div className="flex items-center justify-center gap-4">
                <a href="#" aria-label="Twitter" className="text-[#555] hover:text-sky-400 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all duration-300 group">
                  <Twitter className="w-[16px] h-[16px] group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/company/10xglobaltechnologies/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#555] hover:text-blue-500 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300 group">
                  <Linkedin className="w-[16px] h-[16px] group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a href="#" aria-label="GitHub" className="text-[#555] hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 group">
                  <Github className="w-[16px] h-[16px] group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a href="#" aria-label="YouTube" className="text-[#555] hover:text-red-500 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-all duration-300 group">
                  <Youtube className="w-[17px] h-[17px] group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        );
      })()}
    </footer>
  );
};

export default Footer;

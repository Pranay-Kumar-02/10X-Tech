import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import Starfield from '../components/Starfield';
import { blogPosts } from './BlogPage';

const BlogDetails = () => {
  const { id } = useParams();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const post = blogPosts.find(p => 
    p.id === id || 
    (p.id === 'guide' && (id === 'guide-placeholder' || id === 'slm-architecture-guide' || id === 'slm-guide')) ||
    (p.id === 'announcements' && id === 'announcement-placeholder') ||
    (p.id === 'research' && id === 'research-placeholder')
  );

  if (!post) {
    return <Navigate to="/blog" />;
  }

  const otherPosts = blogPosts.filter(p => p.id !== post.id && p.id !== id);

  return (
    <div className="min-h-[100svh] bg-black text-white selection:bg-[#512da8]/30 font-sans relative w-full flex flex-col overflow-x-hidden">
      
      {/* Global Noise Overlay */}
      <div className="bg-noise fixed pointer-events-none z-50"></div>

      {/* Starfield */}
      <div className="absolute top-0 left-0 right-0 h-[1000px] w-full pointer-events-none z-0 overflow-hidden opacity-50">
        <Starfield />
      </div>

      <div className="relative z-10 flex flex-col min-h-[90svh]">
        <Navbar openContactModal={() => setIsContactModalOpen(true)} />
        
        {/* Main Content */}
        <main className="flex-grow pt-28 pb-20">

          {/* Article Header (Title & Meta) */}
          <section className="relative w-full max-w-[900px] mx-auto px-4 sm:px-6 mb-8 sm:mb-10 text-center flex flex-col items-center">
            {post.category && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#512da8]/40 bg-[#512da8]/10 text-[#a882ff] mb-4 sm:mb-6 shadow-[0_0_15px_rgba(81,45,168,0.15)]">
                <Tag className="w-3.5 h-3.5" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-wide uppercase">{post.category}</span>
              </div>
            )}

            <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.15] mb-4 sm:mb-6 mx-auto px-2">
              {post.displayTitle || post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-[#111]">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#888]" />
                <span className="text-[#aaa] text-xs sm:text-sm font-medium">{post.date}</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-[#111]">
                <img src={post.authorAvatar} alt={post.authorName} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover" />
                <span className="text-[#aaa] text-xs sm:text-sm font-medium">{post.authorName}</span>
              </div>
            </div>
          </section>

          {/* Hero Image */}
          <section className="relative w-full max-w-[1000px] mx-auto px-4 sm:px-6 mb-10 sm:mb-16">
            <div className={`w-full aspect-[16/9] rounded-[18px] sm:rounded-[24px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${post.imageBg || 'bg-black'}`}>
              {post.heroBanner || post.image ? (
                <img 
                  src={post.heroBanner || post.image} 
                  alt={post.title} 
                  className={`w-full h-full ${post.imageFit || 'object-contain object-top'} ${post.imagePadding || ''}`}
                />
              ) : post.coverText ? (
                <div className="w-full h-full flex flex-col justify-center items-center p-6 sm:p-8 bg-black relative overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none select-none">
                    <svg className="w-full h-full opacity-80" xmlns="http://www.w3.org/2000/svg">
                      <rect x="15%" y="22%" width="3" height="3" fill="#ffffff" opacity="0.9" />
                      <rect x="35%" y="12%" width="2.5" height="2.5" fill="#ffffff" opacity="0.7" />
                      <rect x="42%" y="8%" width="3.5" height="3.5" fill="#ffffff" opacity="1" />
                      <rect x="48%" y="24%" width="2.5" height="2.5" fill="#ffffff" opacity="0.6" />
                      <rect x="28%" y="18%" width="2.5" height="2.5" fill="#ffffff" opacity="0.8" />
                      <rect x="80%" y="28%" width="2.5" height="2.5" fill="#ffffff" opacity="0.8" />
                      <rect x="86%" y="34%" width="3" height="3" fill="#ffffff" opacity="0.9" />
                      <rect x="30%" y="45%" width="3.5" height="3.5" fill="#ffffff" opacity="0.85" />
                      <rect x="29%" y="58%" width="3" height="3" fill="#ffffff" opacity="0.7" />
                      <rect x="22%" y="71%" width="2.5" height="2.5" fill="#ffffff" opacity="0.6" />
                      <rect x="50%" y="82%" width="2.5" height="2.5" fill="#ffffff" opacity="0.5" />
                      <rect x="60%" y="78%" width="3" height="3" fill="#ffffff" opacity="0.8" />
                      <rect x="70%" y="65%" width="2.5" height="2.5" fill="#ffffff" opacity="0.7" />
                      <rect x="97%" y="52%" width="2.5" height="2.5" fill="#ffffff" opacity="0.9" />
                      <rect x="95%" y="88%" width="3" height="3" fill="#ffffff" opacity="1" />
                      <rect x="91%" y="92%" width="2.5" height="2.5" fill="#ffffff" opacity="0.6" />
                      <rect x="12%" y="88%" width="2.5" height="2.5" fill="#ffffff" opacity="0.5" />
                      <rect x="68%" y="15%" width="2.5" height="2.5" fill="#ffffff" opacity="0.6" />
                      <rect x="74%" y="40%" width="2.5" height="2.5" fill="#ffffff" opacity="0.4" />
                      <rect x="18%" y="50%" width="2.5" height="2.5" fill="#ffffff" opacity="0.5" />
                      <rect x="62%" y="32%" width="3" height="3" fill="#ffffff" opacity="0.75" />
                    </svg>
                  </div>
                  <span className="relative z-10 text-white text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-widest uppercase text-center font-sans select-none">
                    {post.coverText}
                  </span>
                </div>
              ) : null}
            </div>
          </section>

          {/* Article Content */}
          <section className="relative w-full max-w-[720px] mx-auto px-4 sm:px-6">
            <div className="text-[#aaa] text-base sm:text-lg font-light leading-relaxed">
              {post.content}
            </div>
          </section>

          {/* Explore More Blogs Section */}
          <section className="relative w-full max-w-[1360px] mx-auto px-4 sm:px-6 mt-16 sm:mt-24 pt-10 sm:pt-16 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-10 gap-6">
              <div>
                <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4">Explore more blogs</h2>
                <p className="text-[#888] text-base sm:text-lg max-w-xl">
                  Discover more insights, research, and technical deep-dives from our engineering team.
                </p>
              </div>
              <Link 
                to="/blog"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
              >
                See All Blogs
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((relatedPost) => (
                <Link 
                  to={`/blog/${relatedPost.id}`}
                  key={relatedPost.id} 
                  className="group flex flex-col no-cursor-track"
                >
                  <div className={`relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-6 border border-white/10 group-hover:border-[#512da8]/40 transition-all duration-500 ${relatedPost.imageBg || 'bg-[#0a0a0f]'}`}>
                    {relatedPost.coverText ? (
                      <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-black relative overflow-hidden group-hover:bg-[#050508] transition-colors duration-500">
                        <div className="absolute inset-0 pointer-events-none select-none">
                          <svg className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500" xmlns="http://www.w3.org/2000/svg">
                            <rect x="15%" y="22%" width="2.5" height="2.5" fill="#ffffff" opacity="0.9" />
                            <rect x="35%" y="12%" width="2" height="2" fill="#ffffff" opacity="0.7" />
                            <rect x="42%" y="8%" width="3" height="3" fill="#ffffff" opacity="1" />
                            <rect x="48%" y="24%" width="2" height="2" fill="#ffffff" opacity="0.6" />
                            <rect x="28%" y="18%" width="2" height="2" fill="#ffffff" opacity="0.8" />
                            <rect x="80%" y="28%" width="2" height="2" fill="#ffffff" opacity="0.8" />
                            <rect x="86%" y="34%" width="2.5" height="2.5" fill="#ffffff" opacity="0.9" />
                            <rect x="30%" y="45%" width="3" height="3" fill="#ffffff" opacity="0.85" />
                            <rect x="29%" y="58%" width="2.5" height="2.5" fill="#ffffff" opacity="0.7" />
                            <rect x="22%" y="71%" width="2" height="2" fill="#ffffff" opacity="0.6" />
                            <rect x="50%" y="82%" width="2" height="2" fill="#ffffff" opacity="0.5" />
                            <rect x="60%" y="78%" width="2.5" height="2.5" fill="#ffffff" opacity="0.8" />
                            <rect x="70%" y="65%" width="2" height="2" fill="#ffffff" opacity="0.7" />
                            <rect x="97%" y="52%" width="2" height="2" fill="#ffffff" opacity="0.9" />
                            <rect x="95%" y="88%" width="2.5" height="2.5" fill="#ffffff" opacity="1" />
                            <rect x="91%" y="92%" width="2" height="2" fill="#ffffff" opacity="0.6" />
                            <rect x="12%" y="88%" width="2" height="2" fill="#ffffff" opacity="0.5" />
                            <rect x="68%" y="15%" width="2" height="2" fill="#ffffff" opacity="0.6" />
                            <rect x="74%" y="40%" width="2" height="2" fill="#ffffff" opacity="0.4" />
                            <rect x="18%" y="50%" width="2" height="2" fill="#ffffff" opacity="0.5" />
                            <rect x="62%" y="32%" width="2.5" height="2.5" fill="#ffffff" opacity="0.75" />
                          </svg>
                        </div>
                        <span className="relative z-10 text-white text-xl md:text-2xl font-extrabold tracking-widest uppercase text-center font-sans select-none">
                          {relatedPost.coverText}
                        </span>
                      </div>
                    ) : (
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className={`w-full h-full ${relatedPost.imageFit || 'object-cover'} ${relatedPost.imagePadding || ''}`}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {relatedPost.category && (
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#512da8]/40 bg-[#512da8]/10 text-[#a882ff]">
                        <Tag className="w-3 h-3" />
                        <span className="text-[11px] font-semibold tracking-wide uppercase">{relatedPost.category}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-[#111]">
                      <Calendar className="w-3 h-3 text-[#888]" />
                      <span className="text-[#aaa] text-xs font-medium">{relatedPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-[#111]">
                      <img src={relatedPost.authorAvatar} alt={relatedPost.authorName} className="w-3.5 h-3.5 rounded-full" />
                      <span className="text-[#aaa] text-xs font-medium">{relatedPost.authorName}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-white text-xl font-bold tracking-tight leading-[1.3] group-hover:text-[#512da8] transition-colors duration-300">
                    {relatedPost.displayTitle || relatedPost.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        </main>
        
        <Footer openContactModal={() => setIsContactModalOpen(true)} minimal={true} />
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
};

export default BlogDetails;

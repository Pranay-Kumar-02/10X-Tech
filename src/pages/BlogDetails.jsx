import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
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

  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  const otherPosts = blogPosts.filter(p => p.id !== id);

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
          <section className="relative w-full max-w-[900px] mx-auto px-6 mb-10 text-center">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.15] mb-6 mx-auto">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#111]">
                <Calendar className="w-4 h-4 text-[#888]" />
                <span className="text-[#aaa] text-sm font-medium">{post.date}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#111]">
                <img src={post.authorAvatar} alt={post.authorName} className="w-5 h-5 rounded-full" />
                <span className="text-[#aaa] text-sm font-medium">{post.authorName}</span>
              </div>
            </div>
          </section>

          {/* Hero Image */}
          <section className="relative w-full max-w-[1000px] mx-auto px-6 mb-16">
            <div className={`w-full aspect-[16/9] md:aspect-[21/9] rounded-[24px] overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${post.imageBg || 'bg-[#0a0a0f]'}`}>
              <img 
                src={post.image} 
                alt={post.title} 
                className={`w-full h-full ${post.imageFit || 'object-cover'} ${post.imagePadding || ''}`}
              />
            </div>
          </section>

          {/* Article Content */}
          <section className="relative w-full max-w-[720px] mx-auto px-6">
            <div className="text-[#aaa] text-lg font-light leading-relaxed">
              
              {post.content ? (
                post.content
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-white mb-6 tracking-tight mt-12 first:mt-0">Introduction</h2>
                  <p className="mb-6">
                    Creating a truly data-driven culture isn't just about having data—it's about building the right processes, systems, and habits that make data central to decision-making, empowering teams, improving collaboration, driving innovation, and ensuring organizations stay agile, competitive, and future-ready in a rapidly evolving business landscape.
                  </p>

                  <h2 className="text-3xl font-bold text-white mb-6 tracking-tight mt-12">Secure Leadership Buy-In</h2>
                  <p className="mb-6">
                    Leadership must champion data as the foundation for decisions, setting a clear example, inspiring accountability, encouraging adoption across teams, and ensuring that data-driven practices become ingrained in the organizational culture.
                  </p>

                  <h2 className="text-3xl font-bold text-white mb-6 tracking-tight mt-12">Define Clear Data Processes</h2>
                  <p className="mb-6">
                    Set clear expectations that strategies, campaigns, and operations are backed by data, ensuring measurable goals, accountability, transparency, and alignment with organizational objectives for consistent growth, innovation, and informed decision-making across all departments.
                  </p>
                  
                  <ul className="list-disc pl-6 mb-6 space-y-3">
                    <li>Standardize how data is collected, stored, and maintained.</li>
                    <li>Establish protocols for data governance, accuracy, and consistency.</li>
                  </ul>
                  
                  <div className="my-14 p-6 rounded-[24px] bg-[#512da8]/10 border border-[#512da8]/30 shadow-[0_0_30px_rgba(81,45,168,0.1)]">
                    <p className="text-xl md:text-2xl font-medium text-white italic leading-relaxed m-0 text-center">
                      "The future belongs to models with architectures crafted, optimized, and deployed for focused, low-latency tasks."
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-6 tracking-tight mt-12">Empower Your Team</h2>
                  <p className="mb-6">
                    Equip employees with the tools, training, and resources they need to confidently use data in their daily roles, fostering a sense of ownership, improving efficiency, and encouraging a proactive mindset when approaching complex challenges.
                  </p>
                </>
              )}
            </div>
          </section>

          {/* Explore More Blogs Section */}
          <section className="relative w-full max-w-[1360px] mx-auto px-6 mt-24 pt-16 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
              <div>
                <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-4">Explore more blogs</h2>
                <p className="text-[#888] text-lg max-w-xl">
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPosts.slice(0, 3).map((relatedPost) => (
                <Link 
                  to={`/blog/${relatedPost.id}`}
                  key={relatedPost.id} 
                  className="group flex flex-col no-cursor-track"
                >
                  <div className={`relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-6 border border-white/5 group-hover:border-[#512da8]/30 transition-colors duration-500 ${relatedPost.imageBg || 'bg-[#0a0a0f]'}`}>
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      className={`w-full h-full ${relatedPost.imageFit || 'object-cover'} ${relatedPost.imagePadding || ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#111]">
                      <Calendar className="w-3.5 h-3.5 text-[#888]" />
                      <span className="text-[#aaa] text-xs font-medium">{relatedPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#111]">
                      <img src={relatedPost.authorAvatar} alt={relatedPost.authorName} className="w-4 h-4 rounded-full" />
                      <span className="text-[#aaa] text-xs font-medium">{relatedPost.authorName}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-white text-xl font-bold tracking-tight leading-[1.3] group-hover:text-[#512da8] transition-colors duration-300">
                    {relatedPost.title}
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

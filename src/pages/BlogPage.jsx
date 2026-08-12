import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import TechnicalFiller from '../components/TechnicalFiller';
import CenterExpandingGrid from '../components/CenterExpandingGrid';

export const blogPosts = [
  {
    id: '1',
    title: 'AWS',
    image: 'https://i.ibb.co/7xm7tHpW/10-X-AWS-Announcement.png',
    imageBg: 'bg-[#050505]',
    imageFit: 'object-cover',
    imagePadding: 'p-0',
    date: 'Sep 6, 2025',
    authorName: 'John Smith',
    authorAvatar: 'https://i.pravatar.cc/150?u=1',
    content: (
      <>
        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight mt-12 first:mt-0">Cloud Infrastructure</h2>
        <p className="mb-6">
          Leveraging AWS global cloud infrastructure for high-performance model training and secure, scalable deployment. Our infrastructure provides the backbone for secure data pipelines, model versioning, and the mission-critical APIs that developers rely on to access advanced AI models at scale.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight mt-12">AI Deployment Scalability</h2>
        <p className="mb-6">
          With scalable inference endpoints via Amazon SageMaker, we ensure that our foundation models remain accessible worldwide with consistently low latency and high availability, even during unprecedented traffic spikes.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight mt-12">High-Performance Training Systems</h2>
        <p className="mb-6">
          Our distributed model training on AWS EC2 P-series instances allows us to accelerate research and development significantly, pushing the boundaries of what's possible with our custom-built models.
        </p>
        
        <div className="my-14 p-6 rounded-[24px] bg-[#512da8]/10 border border-[#512da8]/30 shadow-[0_0_30px_rgba(81,45,168,0.1)]">
          <p className="text-xl md:text-2xl font-medium text-white italic leading-relaxed m-0 text-center">
            "The future of AI deployment relies on robust, scalable, and highly available cloud infrastructure."
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight mt-12">Infrastructure Reliability</h2>
        <p className="mb-6">
          Secure data storage and versioning with S3 and DynamoDB ensures that our infrastructure remains highly reliable under immense workloads, establishing trust with enterprise partners globally.
        </p>
      </>
    )
  },
  {
    id: '2',
    title: 'Govt of India',
    image: '/MeitY.jpg',
    imageBg: 'bg-white',
    imageFit: 'object-contain',
    imagePadding: 'p-6',
    date: 'Sep 6, 2025',
    authorName: 'Evelyn Parker',
    authorAvatar: 'https://i.pravatar.cc/150?u=2',
    content: (
      <>
        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight mt-12 first:mt-0">Innovation Ecosystem</h2>
        <p className="mb-6">
          Supported and backed by the Ministry of Electronics and Information Technology through the MeitY Startup Hub. This robust ecosystem fosters deep-tech innovation and accelerates indigenous AI development across India.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight mt-12">Startup Support</h2>
        <p className="mb-6">
          Being selected under the MeitY GENESIS EiR-2 cohort provides us with crucial grant funding for AI hardware R&D, accelerating our mission to build language models strictly tailored for linguistic diversity and localized nuances.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight mt-12">AI Initiatives & MeitY Collaboration</h2>
        <p className="mb-6">
          Our collaboration with MeitY offers unparalleled access to government pilot programs and testbeds, allowing us to rapidly deploy and iterate our models in real-world administrative and public-sector scenarios.
        </p>
        
        <div className="my-14 p-6 rounded-[24px] bg-[#512da8]/10 border border-[#512da8]/30 shadow-[0_0_30px_rgba(81,45,168,0.1)]">
          <p className="text-xl md:text-2xl font-medium text-white italic leading-relaxed m-0 text-center">
            "Empowering national AI development requires strong public-private partnerships to scale impactful technologies."
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight mt-12">National AI Development</h2>
        <p className="mb-6">
          Recognized as a deep-tech startup of national interest, we are heavily committed to shaping the future of AI in India by building secure, sovereign, and indigenous compute infrastructure.
        </p>
      </>
    )
  },
  {
    id: '3',
    title: 'NVIDIA',
    image: '/nvidia.png',
    imageBg: 'bg-white',
    imageFit: 'object-contain',
    imagePadding: 'p-6',
    date: 'Sep 6, 2025',
    authorName: 'Lucas Morgan',
    authorAvatar: 'https://i.pravatar.cc/150?u=3',
    content: (
      <>
        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight mt-12 first:mt-0">AI Acceleration</h2>
        <p className="mb-6">
          Collaborating through the NVIDIA Inception Program dramatically accelerates our AI compute capabilities. We leverage cutting-edge GPU infrastructure to train robust foundation models efficiently and at massive scale.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight mt-12">GPU Optimization</h2>
        <p className="mb-6">
          With access to NVIDIA DGX Cloud compute, we can optimize our large language models at the hardware level, ensuring maximum operational efficiency, minimal latency, and optimal resource utilization across distributed nodes.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight mt-12">Hardware-Level Inference</h2>
        <p className="mb-6">
          Hardware-level optimization for Telugu LLM inference allows us to deliver unprecedented, industry-leading performance both on-device and within large-scale, high-concurrency cloud environments.
        </p>
        
        <div className="my-14 p-6 rounded-[24px] bg-[#512da8]/10 border border-[#512da8]/30 shadow-[0_0_30px_rgba(81,45,168,0.1)]">
          <p className="text-xl md:text-2xl font-medium text-white italic leading-relaxed m-0 text-center">
            "Hardware and software codesign is the absolute key to unlocking the true potential of advanced AI compute infrastructure."
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight mt-12">Model Performance & Compute Infrastructure</h2>
        <p className="mb-6">
          Continuous technical mentorship from NVIDIA AI engineers and priority access to state-of-the-art GPU architectures significantly enhance our overall model performance, paving the way for the next generation of AI.
        </p>
      </>
    )
  },
  {
    id: '4',
    title: 'The Architecture Behind LUCA: A Deep Dive into OS-level AI.',
    image: '/resolution changed luca ai  image.png',
    date: 'Oct 15, 2025',
    authorName: 'Sarah Jenkins',
    authorAvatar: 'https://i.pravatar.cc/150?u=4'
  },
  {
    id: '5',
    title: 'Closed-Loop Fine-Tuning: Expanding SLM Capabilities.',
    image: '/new_preview.webp',
    date: 'Nov 02, 2025',
    authorName: 'David Chen',
    authorAvatar: 'https://i.pravatar.cc/150?u=5'
  },
  {
    id: '6',
    title: 'Native Language Integration: Building the Telugu Tokenizer.',
    image: '/preview_for_founder.webp',
    date: 'Nov 20, 2025',
    authorName: 'Priya Sharma',
    authorAvatar: 'https://i.pravatar.cc/150?u=6'
  }
];

const BlogPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[100svh] bg-black text-white selection:bg-[#512da8]/30 font-sans relative w-full flex flex-col overflow-x-hidden">
      
      {/* Global Noise Overlay */}
      <div className="bg-noise fixed pointer-events-none z-50"></div>

      {/* Fullscreen Digital Matrix Background */}
      <div className="absolute top-0 left-0 right-0 w-full h-[100svh] pointer-events-none z-0 overflow-hidden">
        <CenterExpandingGrid />
      </div>

      <div className="relative z-10 flex flex-col min-h-[90svh]">
        <Navbar openContactModal={() => setIsContactModalOpen(true)} />
        
        {/* Main Content */}
        <main className="flex-grow pt-28 pb-20">
          
          {/* Blog Hero Section */}
          <section className="relative w-full mx-auto px-6 pt-28 pb-20 min-h-[75svh] flex flex-col justify-center items-center overflow-hidden border-b border-white/5">
            {/* Background moved to fullscreen layer above */}
            
            <div className="relative z-10 flex flex-col items-center max-w-[1360px] mx-auto w-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#0a0a0f] mb-6 shadow-[0_0_15px_rgba(81,45,168,0.15)]">
                <div className="w-2 h-2 rounded-full bg-[#512da8] animate-pulse"></div>
                <span className="text-[#ccc] text-sm font-medium">Recent blog updates</span>
              </div>

              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 max-w-4xl text-center">
                COMING SOON
              </h1>
              
              <p className="text-[#888] text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-light text-center">
                Fintech is its potential to promote financial inclusion. In many parts of the world, millions of people lack access to traditional banking services.
              </p>
            </div>
          </section>

          {/* Blog Grid Section */}
          <section className="relative z-20 w-full max-w-[1360px] mx-auto px-6 pb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {blogPosts.map((post) => (
                <Link 
                  to={`/blog/${post.id}`}
                  key={post.id} 
                  className="group flex flex-col no-cursor-track"
                >
                  {/* Thumbnail */}
                  <div className={`relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-6 border border-white/5 group-hover:border-[#512da8]/30 transition-colors duration-500 ${post.imageBg || 'bg-[#0a0a0f]'}`}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className={`w-full h-full ${post.imageFit || 'object-cover'} ${post.imagePadding || ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#111]">
                      <Calendar className="w-3.5 h-3.5 text-[#888]" />
                      <span className="text-[#aaa] text-xs font-medium">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#111]">
                      <img src={post.authorAvatar} alt={post.authorName} className="w-4 h-4 rounded-full" />
                      <span className="text-[#aaa] text-xs font-medium">{post.authorName}</span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight leading-[1.3] group-hover:text-[#512da8] transition-colors duration-300">
                    {post.title}
                  </h2>
                </Link>
              ))}
            </div>
          </section>

          <TechnicalFiller />

          {/* Research Updates Section */}
          <section className="relative z-20 w-full max-w-[1360px] mx-auto px-6 pb-0 pt-0">
            <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-10">
              Research Updates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {blogPosts.slice(0, 3).map((post) => (
                <Link 
                  to={`/blog/${post.id}`}
                  key={`research-${post.id}`} 
                  className="group flex flex-col no-cursor-track"
                >
                  {/* Thumbnail */}
                  <div className={`relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-6 border border-white/5 group-hover:border-[#512da8]/30 transition-colors duration-500 ${post.imageBg || 'bg-[#0a0a0f]'}`}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className={`w-full h-full ${post.imageFit || 'object-cover'} ${post.imagePadding || ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#111]">
                      <Calendar className="w-3.5 h-3.5 text-[#888]" />
                      <span className="text-[#aaa] text-xs font-medium">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#111]">
                      <img src={post.authorAvatar} alt={post.authorName} className="w-4 h-4 rounded-full" />
                      <span className="text-[#aaa] text-xs font-medium">{post.authorName}</span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight leading-[1.3] group-hover:text-[#512da8] transition-colors duration-300">
                    {post.title}
                  </h2>
                </Link>
              ))}
            </div>
          </section>
          
        </main>
        
        <Footer openContactModal={() => setIsContactModalOpen(true)} hideCommunitySupport={true} hideWaitlist={true} hideSearchAndStatus={true} />
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
};

export default BlogPage;

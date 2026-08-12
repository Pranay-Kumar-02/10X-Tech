import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const LANGUAGES = [
  {
    glyph: 'E', name: 'English', family: 'Indo-European',
    desc: 'A compact small language model fine-tuned for English. Optimised for low-latency tasks including summarisation, Q&A, and instruction following.',
    live: true,
    hfUrl: 'https://huggingface.co/spaces/shesettipavankumarswamy/en-luca-chat',
  },
  {
    glyph: 'తె', name: 'Telugu', family: 'Dravidian',
    desc: "First-of-its-kind SLM for Telugu, one of India's most spoken Dravidian languages. Built for conversational AI and native script generation.",
    live: true,
    hfUrl: 'https://huggingface.co/spaces/shesettipavankumarswamy/luca-telugu',
  },
  { glyph: 'हि', name: 'Hindi',     family: 'Indo-Aryan',            desc: 'Lightweight SLM for Hindi — Devanagari-native, designed for India\'s most widely spoken language across all major NLP tasks.' },
  { glyph: 'த',  name: 'Tamil',     family: 'Dravidian',             desc: 'SLM for Tamil, one of the world\'s oldest classical languages. Trained on rich literary and conversational corpora.' },
  { glyph: 'বা', name: 'Bengali',   family: 'Indo-Aryan',            desc: 'Compact SLM for Bengali, the 7th most spoken language globally. Optimised for both Bangladesh and West Bengal dialects.' },
  { glyph: 'म',  name: 'Marathi',   family: 'Indo-Aryan',            desc: "Small language model for Marathi, Maharashtra's official language. Supports Devanagari script with strong colloquial coverage." },
  { glyph: 'ગુ', name: 'Gujarati',  family: 'Indo-Aryan',            desc: 'Efficient SLM for Gujarati, purpose-built for business and conversational applications across the Gujarati-speaking world.' },
  { glyph: 'ಕ',  name: 'Kannada',   family: 'Dravidian',             desc: 'Native-script SLM for Kannada, Karnataka\'s classical Dravidian language. Focused on instruction following and text generation.' },
  { glyph: 'മ',  name: 'Malayalam', family: 'Dravidian',             desc: 'Compact SLM for Malayalam — one of the most morphologically rich Dravidian languages. Tuned for Kerala\'s linguistic nuances.' },
  { glyph: 'ਪੰ', name: 'Punjabi',   family: 'Indo-Aryan',            desc: 'SLM for Punjabi in Gurmukhi script. Covers both formal and colloquial registers, designed for voice and chat applications.' },
  { glyph: 'ଓ',  name: 'Odia',     family: 'Indo-Aryan',            desc: 'Lightweight SLM for Odia (Oriya), an underrepresented classical language of Eastern India with a distinct abugida script.' },
  { glyph: 'اُ', name: 'Urdu',     family: 'Indo-Aryan',            desc: 'SLM for Urdu in Nastaliq script. Built for right-to-left text generation, covering literary and conversational Urdu registers.' },
  { glyph: 'सं', name: 'Sanskrit', family: 'Indo-Aryan · Classical', desc: 'Classical SLM for Sanskrit — trained on ancient Vedic and modern scholarly texts. High morphological fidelity with Devanagari support.' },
];

const FILTERS = ['All', 'Live', 'Coming Soon', 'SLM'];

export default function ModelsPage() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Star canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let rafId;
    let stars = [];
    const COUNT = 160;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createStars() {
      stars = [];
      for (let i = 0; i < COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.4 + 0.3,
          baseAlpha: Math.random() * 0.5 + 0.1,
          alpha: 0,
          speed: Math.random() * 0.015 + 0.005,
          phase: Math.random() * Math.PI * 2,
          purple: Math.random() < 0.12,
        });
      }
    }

    function draw(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        s.alpha = s.baseAlpha * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.purple
          ? `rgba(81,45,168,${s.alpha * 1.4})`
          : `rgba(255,255,255,${s.alpha})`;
        ctx.fill();
        if (s.r > 1.1 && Math.sin(t * s.speed + s.phase) > 0.85) {
          ctx.strokeStyle = s.purple
            ? `rgba(81,45,168,${s.alpha * 0.5})`
            : `rgba(255,255,255,${s.alpha * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(s.x - s.r * 3, s.y); ctx.lineTo(s.x + s.r * 3, s.y);
          ctx.moveTo(s.x, s.y - s.r * 3); ctx.lineTo(s.x, s.y + s.r * 3);
          ctx.stroke();
        }
      });
      rafId = requestAnimationFrame(draw);
    }

    resize();
    createStars();
    window.addEventListener('resize', () => { resize(); createStars(); });
    rafId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', () => { resize(); createStars(); });
    };
  }, []);

  const filtered = LANGUAGES.filter(lang => {
    if (activeFilter === 'Live') return lang.live;
    if (activeFilter === 'Coming Soon') return !lang.live;
    return true; // All + SLM = all
  });

  const filterCount = f => {
    if (f === 'All' || f === 'SLM') return LANGUAGES.length;
    if (f === 'Live') return LANGUAGES.filter(l => l.live).length;
    return LANGUAGES.filter(l => !l.live).length;
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#080808', color: '#f5f5f5', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap" rel="stylesheet" />

      {/* Stars canvas */}
      <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }} />

      {/* Back bar */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', padding: '16px 2rem', borderBottom: '1px solid #141414', background: '#0d0d0d' }}>
        <button
          onClick={() => navigate(-1)}
          style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.45)', cursor: 'pointer', fontSize: 13, fontWeight: 500, fontFamily: 'inherit' }}
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      {/* Page header */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '56px 2rem 44px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#111', border: '1px solid #222', borderRadius: 20, padding: '5px 14px 5px 10px', fontSize: 11, fontWeight: 600, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#512da8', boxShadow: '0 0 6px #512da8', display: 'inline-block' }} />
          Small Language Models
        </div>
        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(30px,4.5vw,52px)', fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', lineHeight: 1.05, marginBottom: 12 }}>
          LUCA{' '}
          <span style={{ background: 'linear-gradient(90deg,#fff 0%,#512da8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AI</span>
        </div>
        <div style={{ fontSize: 14, color: '#666', letterSpacing: '0.03em', maxWidth: 420, margin: '0 auto', lineHeight: 1.6 }}>
          Compact, efficient language models built for Indic languages — fast inference, low footprint.
        </div>
      </div>

      {/* Filter bar */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 980, margin: '0 auto 28px', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: activeFilter === f ? '#512da810' : 'transparent',
              border: `1px solid ${activeFilter === f ? '#512da8' : '#222'}`,
              borderRadius: 20, padding: '6px 14px',
              fontSize: 11, fontWeight: 600,
              color: activeFilter === f ? '#c9b8f4' : '#666',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              cursor: 'pointer', fontFamily: 'inherit',
              transition: 'border-color 0.2s, color 0.2s, background 0.2s',
            }}
          >
            {f}
            {(f === 'All' || f === 'Live' || f === 'Coming Soon') && (
              <span style={{ background: '#1a1a1a', borderRadius: 20, padding: '1px 7px', fontSize: 10, color: '#555' }}>
                {filterCount(f)}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Card grid */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 980, margin: '0 auto', padding: '0 2rem 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
          {filtered.map((lang, i) => (
            <LanguageCard key={lang.name} lang={lang} onTry={() =>
              navigate('/try', { state: { url: lang.hfUrl, title: `LUCA AI — ${lang.name}` } })
            } />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ position: 'relative', zIndex: 1, borderTop: '1px solid #141414', padding: '24px 2rem', maxWidth: 980, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 12, color: '#333' }}>
          © 2025 <span style={{ color: '#512da8' }}>LUCA AI</span>. All rights reserved.
        </div>
        <div style={{ fontSize: 12, color: '#2a2a2a', fontFamily: "'Syne', sans-serif" }}>Indic Language SLMs</div>
      </footer>
    </div>
  );
}

function LanguageCard({ lang, onTry }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 14, overflow: 'hidden',
        border: `1px solid ${hovered ? '#512da8' : '#1e1e1e'}`,
        background: hovered ? '#131313' : '#0e0e0e',
        transition: 'border-color 0.25s, transform 0.22s, box-shadow 0.25s, background 0.25s',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? '0 12px 48px #512da840, 0 2px 12px #512da820' : 'none',
        position: 'relative', display: 'flex', flexDirection: 'column', cursor: 'pointer',
      }}
    >
      {/* Hover overlay */}
      {hovered && (
        <div style={{ position: 'absolute', inset: 0, borderRadius: 14, background: 'linear-gradient(135deg,#512da808 0%,transparent 60%)', pointerEvents: 'none' }} />
      )}

      {/* Header */}
      <div style={{ padding: '14px 16px 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
        <span style={{ fontSize: 10, fontWeight: 600, color: '#555', letterSpacing: '0.06em', textTransform: 'uppercase' }}>luca-ai/</span>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 4, borderRadius: 6, padding: '3px 8px',
          fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', flexShrink: 0,
          background: lang.live ? '#512da815' : '#1a1a2a',
          color: lang.live ? '#9b7de8' : '#666',
          border: `1px solid ${lang.live ? '#512da830' : '#2a2a3a'}`,
        }}>SLM</span>
      </div>

      {/* Glyph + name */}
      <div style={{ padding: '10px 16px 10px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 52, height: 52, borderRadius: 12, background: '#ffffff',
          border: `1px solid ${hovered ? '#ccc' : '#e0e0e0'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          boxShadow: hovered ? '0 0 12px #ffffff20' : 'none',
          transition: 'border-color 0.25s, box-shadow 0.25s',
        }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 24, fontWeight: 800, color: '#111', lineHeight: 1 }}>{lang.glyph}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 800, color: '#fff', letterSpacing: '-0.2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{lang.name}</div>
          <div style={{ fontSize: 11, color: '#555', letterSpacing: '0.03em' }}>{lang.family}</div>
        </div>
      </div>

      {/* Description */}
      <div style={{ padding: '0 16px', fontSize: 12, color: '#666', lineHeight: 1.55, flex: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        {lang.desc}
      </div>

      {/* Footer */}
      <div style={{ padding: '12px 16px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, borderTop: '1px solid #161616', marginTop: 12 }}>
        {lang.live ? (
          <>
            <button
              onClick={onTry}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: '#512da8', color: '#fff', border: 'none', borderRadius: 8,
                padding: '8px 18px', fontFamily: "'Syne', sans-serif", fontSize: 12, fontWeight: 700,
                cursor: 'pointer', letterSpacing: '0.04em',
                transition: 'background 0.2s, box-shadow 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#6b3fcb'; e.currentTarget.style.boxShadow = '0 0 0 2px #512da8, 0 4px 20px #512da855'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#512da8'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Try Now
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, color: '#4ade80', fontWeight: 600, letterSpacing: '0.04em' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 4px #4ade8060', display: 'inline-block' }} />
              LIVE
            </div>
          </>
        ) : (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'transparent', border: '1px solid #2a2a2a', borderRadius: 20, padding: '4px 10px', fontSize: 10, fontWeight: 600, color: '#444', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#444', display: 'inline-block' }} />
            Soon
          </div>
        )}
      </div>
    </div>
  );
}

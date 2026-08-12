import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import vid from '../assets/vid.mp4';

const THUMBNAIL_TIME = 7.67;

const fmt = (s) => {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
};

const LucaFeatureSection = ({ openContactModal }) => {
  const [hasStarted, setHasStarted]   = useState(false);
  const [isPlaying,  setIsPlaying]    = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration,   setDuration]     = useState(0);
  const [isMuted,    setIsMuted]      = useState(false);
  const [ctrlVisible, setCtrlVisible] = useState(true);

  const videoRef    = useRef(null);
  const progressRef = useRef(null);
  const hideTimer   = useRef(null);

  // ── video event bindings ──────────────────────────────────────────────
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onMeta  = () => { setDuration(v.duration); v.currentTime = THUMBNAIL_TIME; };
    const onTime  = () => setCurrentTime(v.currentTime);
    const onPlay  = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnd   = () => { setIsPlaying(false); v.currentTime = THUMBNAIL_TIME; setHasStarted(false); };

    v.addEventListener('loadedmetadata', onMeta);
    v.addEventListener('timeupdate',     onTime);
    v.addEventListener('play',           onPlay);
    v.addEventListener('pause',          onPause);
    v.addEventListener('ended',          onEnd);
    return () => {
      v.removeEventListener('loadedmetadata', onMeta);
      v.removeEventListener('timeupdate',     onTime);
      v.removeEventListener('play',           onPlay);
      v.removeEventListener('pause',          onPause);
      v.removeEventListener('ended',          onEnd);
    };
  }, []);

  // ── auto-hide controls after 3 s when playing ─────────────────────────
  const revealControls = useCallback(() => {
    setCtrlVisible(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) setCtrlVisible(false);
    }, 3000);
  }, []);

  // ── play / pause ──────────────────────────────────────────────────────
  const handlePlayPause = () => {
    const v = videoRef.current;
    if (!v) return;
    if (!hasStarted) { setHasStarted(true); v.currentTime = 0; }
    isPlaying ? v.pause() : v.play();
    revealControls();
  };

  // ── seek by clicking progress bar ─────────────────────────────────────
  const handleSeek = (e) => {
    const bar = progressRef.current;
    if (!bar || !duration) return;
    const ratio = (e.clientX - bar.getBoundingClientRect().left) / bar.offsetWidth;
    videoRef.current.currentTime = Math.max(0, Math.min(1, ratio)) * duration;
    revealControls();
  };

  // ── mute toggle ───────────────────────────────────────────────────────
  const handleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
    revealControls();
  };

  // ── fullscreen ────────────────────────────────────────────────────────
  const handleFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    (v.requestFullscreen || v.webkitRequestFullscreen)?.call(v);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <section className="relative w-full bg-black overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-[0.055]"
          style={{ background: 'radial-gradient(circle,rgba(147,90,255,1)0%,transparent 70%)' }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle,rgba(120,80,255,1)0%,transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 py-4 lg:py-6 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

        {/* ── LEFT ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[40%] flex flex-col gap-5 shrink-0"
        >
          <h2 className="text-tier-2">
            Watch our{' '}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg,#c084fc 0%,#818cf8 100%)' }}>
              Announcement
            </span>
          </h2>
          <p className="text-tier-3 max-w-[340px] mt-4">
            An ambient intelligence platform built for Indian homes and dialects — powered by on-device AI with no lag and no compromise on privacy.
          </p>
          <div className="mt-2">
            <Link to="/ai"
              className="group inline-flex items-center gap-3 px-7 py-3 rounded-full border border-purple-500/40 bg-transparent text-white text-[11px] uppercase tracking-[0.22em] font-bold transition-all duration-300 hover:border-purple-400/70 hover:shadow-[0_0_35px_rgba(147,90,255,0.3)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              Know More
              <ArrowRight className="w-3.5 h-3.5 text-purple-400 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* ── RIGHT: custom video player ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="w-full lg:w-[55%]"
        >
          <div
            className="relative w-full rounded-3xl overflow-hidden select-none"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.7),0 0 0 1px rgba(147,90,255,0.06)',
            }}
            onMouseMove={revealControls}
            onMouseLeave={() => isPlaying && setCtrlVisible(false)}
          >
            {/* Top-edge glow */}
            <div className="absolute top-0 left-0 right-0 h-px pointer-events-none z-10"
              style={{ background: 'linear-gradient(90deg,transparent,rgba(147,90,255,0.4),transparent)' }} />

            {/* Video — no native controls ever */}
            <video
              ref={videoRef}
              src={vid}
              playsInline
              preload="metadata"
              onClick={handlePlayPause}
              className="w-full h-auto block bg-black cursor-pointer"
            />

            {/* ── Big play button — shown only before first play ── */}
            {!hasStarted && (
              <div
                className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer"
                onClick={handlePlayPause}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </div>
              </div>
            )}

            {/* ── Custom controls bar ── */}
            <div
              className="absolute bottom-0 left-0 right-0 z-30 transition-opacity duration-300"
              style={{ opacity: hasStarted && (ctrlVisible || !isPlaying) ? 1 : 0 }}
            >
              {/* Gradient backing so text/icons are readable */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top,rgba(0,0,0,0.7)0%,transparent 100%)' }} />

              <div className="relative flex items-center gap-3 px-4 pb-3 pt-6">

                {/* Play / Pause */}
                <button onClick={handlePlayPause}
                  className="text-white/80 hover:text-white transition-colors duration-150 shrink-0 cursor-pointer"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying
                    ? <Pause   className="w-4 h-4 fill-white" />
                    : <Play    className="w-4 h-4 fill-white ml-px" />}
                </button>

                {/* Current time */}
                <span className="text-white/60 text-[11px] font-mono shrink-0 tabular-nums">
                  {fmt(currentTime)}
                </span>

                {/* Progress bar */}
                <div
                  ref={progressRef}
                  onClick={handleSeek}
                  className="flex-1 h-[3px] rounded-full cursor-pointer relative"
                  style={{ background: 'rgba(255,255,255,0.15)' }}
                >
                  <div
                    className="absolute left-0 top-0 h-full rounded-full"
                    style={{
                      width: `${progress}%`,
                      background: 'linear-gradient(90deg,#a855f7,#818cf8)',
                      transition: 'width 0.1s linear',
                    }}
                  />
                  {/* Scrubber dot */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow"
                    style={{ left: `calc(${progress}% - 5px)` }}
                  />
                </div>

                {/* Duration */}
                <span className="text-white/60 text-[11px] font-mono shrink-0 tabular-nums">
                  {fmt(duration)}
                </span>

                {/* Mute */}
                <button onClick={handleMute}
                  className="text-white/70 hover:text-white transition-colors duration-150 shrink-0 cursor-pointer"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted
                    ? <VolumeX className="w-4 h-4" />
                    : <Volume2 className="w-4 h-4" />}
                </button>



              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default LucaFeatureSection;

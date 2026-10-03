import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { useMediaUrl } from "../utils/mediaStore";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768;
    }
    return false;
  });

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasUserInteractedAudio, setHasUserInteractedAudio] = useState(false);

  const videoUrl = useMediaUrl('hero_video');

  // Listen to screen resize to render ONLY ONE video element (prevents mobile buffering lockup)
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const desktopOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  // Ensure autoplay with muted=true on mount for strict iOS Safari and Android Chrome compliance
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay was blocked, keep muted and retry
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        });
    }
  }, [isDesktop, videoUrl]);

  // Toggle Play / Pause
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  // Toggle Mute / Unmute (Ensures audio starts smoothly on user tap)
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    setHasUserInteractedAudio(true);
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    // If unmuting while paused, resume playback
    if (!nextMuted && video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative pt-24 pb-16 md:pt-0 md:pb-0 md:min-h-screen md:flex md:items-center md:justify-center overflow-hidden bg-zinc-950"
    >
      {/* 
        DESKTOP BACKGROUND VIDEO:
        Mounted ONLY on desktop (>= 768px) to prevent mobile devices from downloading 
        two heavy video streams simultaneously.
      */}
      {isDesktop && (
        <motion.div 
          style={{ y: backgroundY, opacity: desktopOpacity }}
          className="absolute inset-0 z-0 w-full h-full will-change-transform overflow-hidden pointer-events-none select-none"
        >
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          <video 
            ref={videoRef}
            key={`desktop-${videoUrl}`}
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            poster="/images/videohome-poster.jpg"
            onLoadedData={() => setIsVideoLoaded(true)}
            className={`w-full h-full object-cover object-center pointer-events-none transition-opacity duration-700 ${
              isVideoLoaded ? "opacity-100" : "opacity-90"
            }`}
          >
            <source src={videoUrl || "/videos/videohome.mp4"} type="video/mp4" />
            <source src="/videos/videohome.mp4" type="video/mp4" />
            <source src="/videohome.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      )}

      {/* Floating Controls for Desktop (Bottom Left) */}
      {isDesktop && (
        <div className="hidden md:flex absolute bottom-6 left-6 z-30 items-center gap-3 print:hidden">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
            className="p-3.5 rounded-full bg-black/80 hover:bg-red-700 text-white border border-zinc-700/60 backdrop-blur-md transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
            title={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
          >
            {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white fill-white ml-0.5" />}
          </button>

          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Ativar áudio" : "Desativar áudio"}
            className={`px-4 py-2.5 rounded-full border backdrop-blur-md transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
              isMuted 
                ? "bg-black/80 hover:bg-red-700 text-zinc-200 border-zinc-700/60" 
                : "bg-red-600 hover:bg-red-700 text-white border-red-500 shadow-red-600/30"
            }`}
            title={isMuted ? "Ativar áudio do vídeo" : "Desativar áudio"}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-zinc-300" />
                <span>Ativar Som</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-white animate-pulse" />
                <span>Som Ativado</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* DESKTOP CONTENT VIEW (Typography and CTAs over background) */}
      {/* ========================================================= */}
      {isDesktop && (
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 md:mb-8"
          >
            <img 
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2026/05/logo-sem-fundo.png" 
              alt="Carlson Gracie Logo" 
              className="w-36 h-36 lg:w-44 lg:h-44 rounded-full mx-auto shadow-2xl shadow-red-600/25 bg-zinc-900/90 border-4 border-zinc-800 object-contain p-2" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <p className="text-red-500 text-sm font-bold uppercase tracking-widest mb-4 drop-shadow-md">
              Official Carlson Gracie Academy • Tucson, AZ
            </p>

            <h1 
              style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.95), 0 0 24px rgba(0,0,0,0.85)' }}
              className="text-5xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white mb-6 font-heading leading-tight"
            >
              Building Champions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                On & Off The Mats
              </span>
            </h1>

            <p 
              style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.95)' }}
              className="text-xl lg:text-2xl text-zinc-100 max-w-2xl mx-auto mb-10 font-normal leading-relaxed"
            >
              Experience world-class Brazilian Jiu-Jitsu, Muay Thai, and Self-Defense in an empowering, family-friendly environment.
            </p>

            <div className="flex items-center justify-center gap-4 w-full max-w-md mx-auto">
              <Link
                to="/free-trial"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-heading font-black text-lg uppercase tracking-wider rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                Start Free Trial
              </Link>
              <Link
                to="/programs"
                className="px-8 py-4 bg-zinc-900/85 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-500 font-heading font-black text-lg uppercase tracking-wider rounded-xl transition-all backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer"
              >
                View Programs
              </Link>
            </div>
          </motion.div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MOBILE CONTENT VIEW (Original 16:9 aspect ratio, uncropped) */}
      {/* Mounted ONLY on mobile (< 768px) for maximum performance */}
      {/* ========================================================= */}
      {!isDesktop && (
        <div className="relative z-10 w-full max-w-xl mx-auto px-4 flex flex-col items-center text-center">
          {/* Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4"
          >
            <img 
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2026/05/logo-sem-fundo.png" 
              alt="Carlson Gracie Logo" 
              className="w-24 h-24 rounded-full mx-auto shadow-2xl shadow-red-600/20 bg-zinc-900 border-2 border-zinc-800 object-contain p-2" 
            />
          </motion.div>

          {/* Official Lineage */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-red-500 text-xs font-bold uppercase tracking-widest mb-2.5 drop-shadow-md"
          >
            Official Carlson Gracie Academy • Tucson, AZ
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-3 font-heading leading-tight"
          >
            Building Champions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              On & Off The Mats
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-zinc-300 max-w-md mx-auto mb-5 font-normal leading-relaxed"
          >
            Experience world-class Brazilian Jiu-Jitsu, Muay Thai, and Self-Defense in an empowering, family-friendly environment.
          </motion.p>

          {/* 
            Mobile Video Showcase:
            Uses lightweight /videos/videohome-mobile.mp4 (5.5MB) with H.264 Baseline/Main profile
            so it buffers immediately with zero lag on mobile connections.
          */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="w-full mx-auto mb-6"
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-red-950/20 border border-zinc-800 bg-black">
              <video 
                ref={videoRef}
                key={`mobile-${videoUrl}`}
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="auto"
                poster="/images/videohome-poster.jpg"
                onLoadedData={() => setIsVideoLoaded(true)}
                className="w-full h-full object-contain bg-black cursor-pointer"
                onClick={togglePlay}
              >
                <source src="/videos/videohome-mobile.mp4" type="video/mp4" />
                <source src={videoUrl || "/videos/videohome.mp4"} type="video/mp4" />
                <source src="/videos/videohome.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Mobile Play / Pause Control */}
              <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                  className="p-2.5 rounded-full bg-black/80 hover:bg-red-700 text-white border border-zinc-700/60 backdrop-blur-md transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
                  title={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 text-white" /> : <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />}
                </button>
              </div>

              {/* Prominent Sound Toggle Pill on Mobile Video */}
              <div className="absolute bottom-3 right-3 z-20">
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "Ativar som" : "Desativar som"}
                  className={`px-3 py-1.5 rounded-full border backdrop-blur-md transition-all duration-200 shadow-xl active:scale-95 cursor-pointer flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${
                    isMuted 
                      ? "bg-black/85 text-zinc-200 border-zinc-700/70" 
                      : "bg-red-600 text-white border-red-500 shadow-red-600/40"
                  }`}
                  title={isMuted ? "Ativar som do vídeo" : "Silenciar som"}
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-red-400" />
                      <span>Ativar Som</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-white animate-pulse" />
                      <span>Som Ligado</span>
                    </>
                  )}
                </button>
              </div>

              {/* Helpful Audio Prompt Badge for first-time mobile visitors */}
              {isMuted && !hasUserInteractedAudio && (
                <div 
                  onClick={toggleMute}
                  className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-md bg-black/80 border border-zinc-700/80 backdrop-blur-sm text-[11px] font-semibold text-zinc-200 flex items-center gap-1.5 cursor-pointer animate-pulse shadow-md"
                >
                  <Volume2 className="w-3 h-3 text-red-400" />
                  <span>Toque para ouvir o áudio</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-sm mx-auto mb-6"
          >
            <Link
              to="/free-trial"
              className="w-full px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-heading font-black text-base uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              Start Free Trial
            </Link>
            <Link
              to="/programs"
              className="w-full px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-heading font-black text-base uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              View Programs
            </Link>
          </motion.div>

          {/* Quick Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Free 7-Day Trial
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Kids & Adults
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              All Levels Welcome
            </span>
          </motion.div>
        </div>
      )}
    </section>
  );
}

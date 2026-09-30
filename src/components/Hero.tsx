import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { useMediaUrl, extractYouTubeId } from "../utils/mediaStore";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoUrl = useMediaUrl('hero_video');
  const youtubeId = extractYouTubeId(videoUrl);

  useEffect(() => {
    if (!youtubeId && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [videoUrl, youtubeId]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-zinc-950">
      {/* Background Video Player (Supports YouTube and MP4) */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 z-0 w-full h-full will-change-transform overflow-hidden pointer-events-none"
      >
        <div 
          className="absolute inset-0 z-10 pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)' }} 
        />
        
        {youtubeId ? (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1&origin=${window.location.origin}`}
              title="Carlson Gracie Tucson Presentation"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.78vh] object-cover pointer-events-none brightness-100 contrast-105"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        ) : (
          <video 
            ref={videoRef}
            key={videoUrl}
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            className="w-full h-full object-cover object-center brightness-95 contrast-105"
          >
            <source src={videoUrl} type="video/mp4" />
            <source src="/lv_0_20260922212021 (1) (1).mp4" type="video/mp4" />
            <source src="/lv_0_20260922212021 (1).mp4" type="video/mp4" />
            <source src="/videos/academy-presentation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </motion.div>

      {/* Video controls (only show for direct video files) */}
      {!youtubeId && (
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause background video" : "Play background video"}
            className="p-2.5 rounded-full bg-black/60 hover:bg-red-700 text-white border border-zinc-700/60 backdrop-blur-sm transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
            className="p-2.5 rounded-full bg-black/60 hover:bg-red-700 text-white border border-zinc-700/60 backdrop-blur-sm transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img 
            src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2026/05/logo-sem-fundo.png" 
            alt="Carlson Gracie Logo" 
            className="w-36 h-36 md:w-44 md:h-44 rounded-full mx-auto shadow-2xl shadow-red-600/25 bg-zinc-900/90 border-4 border-zinc-800 object-contain p-2" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-6"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
          >
            Carlson Gracie Tucson <br />
            <span 
              className="text-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.4)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-4 tracking-wide font-bold"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
            >
              Brazilian Jiu-Jitsu & Martial Arts Academy
            </span>
          </h1>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white uppercase tracking-wider bg-red-700 hover:bg-red-600 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] active:scale-95"
            >
              <span className="relative flex items-center gap-2">
                Try Class!
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

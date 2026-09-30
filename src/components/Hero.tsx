import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect, useCallback } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { useMediaUrl, extractYouTubeId } from "../utils/mediaStore";

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ytPlayerRef = useRef<any>(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isYtReady, setIsYtReady] = useState(false);
  const [isLoadedAndPlaying, setIsLoadedAndPlaying] = useState(false);

  const videoUrl = useMediaUrl('hero_video');
  const youtubeId = extractYouTubeId(videoUrl);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  // Initialize YouTube IFrame API with zero native UI visible
  const initYouTubePlayer = useCallback((videoId: string) => {
    if (!window.YT || !window.YT.Player) return;

    if (ytPlayerRef.current) {
      try {
        ytPlayerRef.current.destroy();
      } catch (e) {
        // ignore
      }
      ytPlayerRef.current = null;
    }

    const container = document.getElementById('youtube-bg-player');
    if (!container) return;

    try {
      ytPlayerRef.current = new window.YT.Player('youtube-bg-player', {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          loop: 1,
          playlist: videoId,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
          disablekb: 1,
          iv_load_policy: 3,
          fs: 0,
          autohide: 1,
          cc_load_policy: 0,
        },
        events: {
          onReady: (event: any) => {
            setIsYtReady(true);
            try {
              event.target.mute();
              event.target.playVideo();
              event.target.setPlaybackQuality('hd1080');
            } catch (err) {
              console.warn('YT onReady:', err);
            }
            setIsPlaying(true);
            setIsMuted(true);
          },
          onStateChange: (event: any) => {
            // Once the video actually starts emitting frames, fade it in smoothly
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsLoadedAndPlaying(true);
              setIsPlaying(true);
              try {
                event.target.setPlaybackQuality('hd1080');
              } catch (e) {}
            } else if (event.data === window.YT.PlayerState.ENDED) {
              // Loop seamlessly with zero latency
              try {
                event.target.seekTo(0);
                event.target.playVideo();
              } catch (e) {}
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            }
          },
          onError: (event: any) => {
            console.warn('YouTube IFrame API event error:', event.data);
          }
        },
      });
    } catch (err) {
      console.error('Error creating YT.Player:', err);
    }
  }, []);

  // Load YouTube script once and initialize
  useEffect(() => {
    if (!youtubeId) {
      setIsYtReady(false);
      setIsLoadedAndPlaying(false);
      return;
    }

    if (window.YT && window.YT.Player) {
      initYouTubePlayer(youtubeId);
    } else {
      const existingScript = document.getElementById('youtube-iframe-api-script');
      if (!existingScript) {
        const tag = document.createElement('script');
        tag.id = 'youtube-iframe-api-script';
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.async = true;
        document.head.appendChild(tag);
      }

      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        initYouTubePlayer(youtubeId);
      };

      const interval = setInterval(() => {
        if (window.YT && window.YT.Player && !ytPlayerRef.current) {
          clearInterval(interval);
          initYouTubePlayer(youtubeId);
        }
      }, 150);

      return () => {
        clearInterval(interval);
      };
    }

    return () => {
      if (ytPlayerRef.current) {
        try {
          ytPlayerRef.current.destroy();
        } catch (e) {}
        ytPlayerRef.current = null;
      }
    };
  }, [youtubeId, initYouTubePlayer]);

  // Fallback for HTML5 video if not a YouTube URL
  useEffect(() => {
    if (!youtubeId && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [videoUrl, youtubeId]);

  // Play / Pause toggle handler
  const togglePlay = () => {
    if (youtubeId && ytPlayerRef.current && isYtReady) {
      try {
        if (isPlaying) {
          ytPlayerRef.current.pauseVideo();
          setIsPlaying(false);
        } else {
          ytPlayerRef.current.playVideo();
          setIsPlaying(true);
        }
      } catch (e) {
        console.warn('YT togglePlay error:', e);
      }
    } else if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // Mute / Unmute toggle handler
  const toggleMute = () => {
    if (youtubeId && ytPlayerRef.current && isYtReady) {
      try {
        if (isMuted) {
          ytPlayerRef.current.unMute();
          setIsMuted(false);
        } else {
          ytPlayerRef.current.mute();
          setIsMuted(true);
        }
      } catch (e) {
        console.warn('YT toggleMute error:', e);
      }
    } else if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-24 sm:pb-20 overflow-hidden bg-black">
      {/* Background Video Player (Supports YouTube IFrame API and MP4) */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 z-0 w-full h-full will-change-transform overflow-hidden pointer-events-none select-none"
      >
        {/* Transparent overlay preserving native video contrast and sharpness */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/25 via-transparent to-black/40" 
        />
        
        {youtubeId ? (
          <div 
            className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${
              isLoadedAndPlaying ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* 
              Scale 1.35x ensures all YouTube watermarks, edge branding, 
              and any pause overlays are cropped completely outside the visible viewport.
              No CSS filters are applied to preserve pure native 1080p hardware rendering.
            */}
            <div
              id="youtube-bg-player"
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{
                width: '100vw',
                height: '56.25vw',
                minHeight: '100vh',
                minWidth: '177.78vh',
                transform: 'translate(-50%, -50%) scale(1.35)',
              }}
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
            className="w-full h-full object-cover object-center"
          >
            <source src={videoUrl} type="video/mp4" />
            <source src="/lv_0_20260922212021 (1) (1).mp4" type="video/mp4" />
            <source src="/lv_0_20260922212021 (1).mp4" type="video/mp4" />
            <source src="/videos/academy-presentation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </motion.div>

      {/* 
        Two subtle, responsive floating controls on bottom-left corner.
        Positioned on bottom-left so they NEVER overlap the centered CTA buttons on mobile or desktop.
      */}
      <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-30 flex items-center gap-2.5 print:hidden">
        {/* Button 1: Play / Pause */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
          className="p-3 sm:p-3.5 rounded-full bg-black/75 hover:bg-red-700 text-white border border-zinc-700/60 backdrop-blur-md transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
          title={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
        >
          {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white fill-white ml-0.5" />}
        </button>

        {/* Button 2: Mute / Unmute */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Ativar som" : "Desativar som"}
          className="p-3 sm:p-3.5 rounded-full bg-black/75 hover:bg-red-700 text-white border border-zinc-700/60 backdrop-blur-md transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
          title={isMuted ? "Ativar som" : "Desativar som"}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-zinc-300" /> : <Volume2 className="w-4 h-4 text-red-400" />}
        </button>
      </div>

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Pure typography with no cylinder container */}
          <p className="text-red-500 text-xs sm:text-sm font-bold uppercase tracking-widest mb-6 drop-shadow-md">
            Official Carlson Gracie Academy • Tucson, AZ
          </p>

          <h1 
            style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.8)' }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white mb-6 font-heading leading-none"
          >
            Building Champions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              On & Off The Mats
            </span>
          </h1>

          <p 
            style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.9)' }}
            className="text-lg sm:text-xl md:text-2xl text-zinc-100 max-w-2xl mx-auto mb-10 font-normal leading-relaxed"
          >
            Experience world-class Brazilian Jiu-Jitsu, Muay Thai, and Self-Defense in an empowering, family-friendly environment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
            <Link
              to="/free-trial"
              className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-heading font-black text-lg uppercase tracking-wider rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              Start Free Trial
            </Link>
            <Link
              to="/programs"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-500 font-heading font-black text-lg uppercase tracking-wider rounded-xl transition-all backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer"
            >
              View Programs
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

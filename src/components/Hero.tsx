import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useRef, useState, useEffect, type ChangeEvent } from "react";
import { Volume2, VolumeX, Play, Pause, Upload } from "lucide-react";
import { useMediaUrl, saveStoredMedia } from "../utils/mediaStore";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isUploading, setIsUploading] = useState(false);

  const videoUrl = useMediaUrl('hero_video');

  // Ensure native autoplay muted on mount for iOS and Android
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, [videoUrl]);

  // Toggle Play / Pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  // Toggle Mute / Unmute
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Direct file selection for lv_0_20260930183346.mp4
  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const result = reader.result as string;
        await saveStoredMedia('hero_video', result);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error('Error saving video:', err);
      setIsUploading(false);
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-24 pb-16 md:pt-28 md:pb-20 bg-zinc-950 text-white overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Academy Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 md:mb-6"
        >
          <img 
            src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2026/05/logo-sem-fundo.png" 
            alt="Carlson Gracie Logo" 
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mx-auto shadow-2xl shadow-red-600/20 bg-zinc-900 border-2 border-zinc-800 object-contain p-2" 
          />
        </motion.div>

        {/* Official Lineage Label (Without cylindrical badge) */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-red-500 text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 md:mb-4 drop-shadow-md"
        >
          Official Carlson Gracie Academy • Tucson, AZ
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white mb-4 font-heading leading-tight md:leading-none max-w-4xl"
        >
          Building Champions <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
            On & Off The Mats
          </span>
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-6 md:mb-8 font-normal leading-relaxed px-2"
        >
          Experience world-class Brazilian Jiu-Jitsu, Muay Thai, and Self-Defense in an empowering, family-friendly environment.
        </motion.p>

        {/* 
          Video Player Showcase:
          Respects the ORIGINAL 16:9 aspect ratio and does NOT stretch across the entire phone screen.
          Uncropped, full-frame native presentation.
        */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="w-full max-w-4xl mx-auto mb-8 sm:mb-10"
        >
          <div className="relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-red-950/20 border border-zinc-800 bg-black group">
            <video 
              ref={videoRef}
              key={videoUrl}
              autoPlay 
              loop 
              muted 
              playsInline 
              preload="auto"
              className="w-full h-full object-contain md:object-cover bg-black"
            >
              <source src={videoUrl || "/videos/lv_0_20260930183346.mp4"} type="video/mp4" />
              <source src="/videos/lv_0_20260930183346.mp4" type="video/mp4" />
              <source src="/lv_0_20260930183346.mp4" type="video/mp4" />
              <source src="/videos/academy-presentation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Subtle Controls directly inside the video corner (Never overlapping CTA buttons) */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 flex items-center gap-2">
              {/* Play / Pause Toggle */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                className="p-2.5 sm:p-3 rounded-full bg-black/80 hover:bg-red-700 text-white border border-zinc-700/60 backdrop-blur-md transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
                title={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
              >
                {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white fill-white ml-0.5" />}
              </button>

              {/* Mute / Unmute Toggle */}
              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Ativar som" : "Desativar som"}
                className="p-2.5 sm:p-3 rounded-full bg-black/80 hover:bg-red-700 text-white border border-zinc-700/60 backdrop-blur-md transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
                title={isMuted ? "Ativar som" : "Desativar som"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-zinc-300" /> : <Volume2 className="w-4 h-4 text-red-400" />}
              </button>
            </div>

            {/* Discreet Video Selector Button (Tap to pick lv_0_20260930183346.mp4 from device) */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
              <input
                ref={fileInputRef}
                type="file"
                accept="video/mp4,video/*"
                className="hidden"
                onChange={handleFileSelect}
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                aria-label="Carregar lv_0_20260930183346.mp4"
                className="px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-black/75 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/60 backdrop-blur-md transition-all text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 shadow-lg cursor-pointer"
                title="Selecionar lv_0_20260930183346.mp4 do seu aparelho"
              >
                <Upload className="w-3 h-3 text-red-400" />
                {isUploading ? 'Carregando...' : 'Carregar Vídeo'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons Below the Video */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto mb-8"
        >
          <Link
            to="/free-trial"
            className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-heading font-black text-base sm:text-lg uppercase tracking-wider rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            Start Free Trial
          </Link>
          <Link
            to="/programs"
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-500 font-heading font-black text-base sm:text-lg uppercase tracking-wider rounded-xl transition-all backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer"
          >
            View Programs
          </Link>
        </motion.div>

        {/* Quick Trust Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-zinc-400"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            Free 7-Day Trial Pass
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            Kids & Adults Programs
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            Beginners Welcome
          </span>
        </motion.div>

      </div>
    </section>
  );
}

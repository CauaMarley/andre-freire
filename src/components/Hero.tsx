import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-zinc-950">
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 z-0 w-full h-full will-change-transform"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://carlsongracietucson.com/wp-content/uploads/2025/06/snapins-ai_3583484406528291350.jpg" 
          alt="Carlson Gracie Team" 
          fetchPriority="high"
          className="w-full h-full object-cover object-[center_top] md:object-center brightness-110 contrast-125 saturate-105"
        />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
           <img src="https://cgnorthtucson.com/wp-content/uploads/2026/05/logo-sem-fundo.png" alt="Carlson Gracie Logo" className="w-40 h-40 rounded-full mx-auto shadow-2xl shadow-red-600/20 bg-zinc-900 border-4 border-zinc-800 object-contain p-2" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white uppercase tracking-tighter leading-none mb-6">
            Book Your Free <br />
            <span className="text-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">Class Today!</span>
          </h1>
          
          <motion.div 
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
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

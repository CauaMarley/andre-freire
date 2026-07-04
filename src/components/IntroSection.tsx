import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function IntroSection() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            Carlson Gracie Tucson
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight mb-8">
            Your Journey <span className="text-red-600">Starts Today</span>
          </h2>
          
          <div className="space-y-6 text-zinc-300 text-lg md:text-xl leading-relaxed italic font-light relative">
            <span className="text-6xl text-red-600/20 absolute -top-8 -left-8 font-heading">"</span>
            <p>
              If you’re ready to transform your fitness, confidence, and mindset, you’ve come to the right place. At Carlson Gracie Tucson, we believe everyone has the potential to succeed. Our Brazilian Jiu-Jitsu program strengthen your body, sharpen your mind, and teach real, effective self-defense.
            </p>
            <p>
              Whether your goal is fitness, discipline, competition, or personal growth, our academy will guide you every step of the way. Start your journey today and experience the difference.
            </p>
            <span className="text-6xl text-red-600/20 absolute -bottom-12 -right-8 font-heading rotate-180">"</span>
          </div>

          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
             <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white uppercase tracking-wider bg-red-700 hover:bg-red-600 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(220,38,38,0.3)]"
              >
                Start Your Journey
              </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}

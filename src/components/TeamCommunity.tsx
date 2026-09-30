import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Users, Award, Shield, HeartHandshake } from "lucide-react";
import { useMediaUrl } from "../utils/mediaStore";

export function TeamCommunity() {
  const bannerTurmaUrl = useMediaUrl('banner_turma');
  return (
    <section className="py-20 bg-zinc-950 relative border-t border-b border-zinc-900 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/20 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2 block">
              Carlson Gracie Tucson Family
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight">
              United On And Off <span className="text-red-600">The Mats</span>
            </h2>
            <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
              Our community is our greatest strength. From beginners taking their first steps to seasoned competitors, every member is supported by world-class instruction and authentic martial arts brotherhood.
            </p>
          </motion.div>
        </div>

        {/* Featured Class Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden border-2 border-zinc-800 shadow-2xl shadow-red-950/20 group"
        >
          <img
            src={bannerTurmaUrl}
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== "/images/banner-turma.jpeg") {
                target.src = "/images/banner-turma.jpeg";
              }
            }}
            alt="Carlson Gracie Tucson Jiu-Jitsu Team Class"
            className="w-full h-[320px] sm:h-[450px] md:h-[550px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

          {/* Bottom badge / caption on image */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-heading font-bold text-xl sm:text-2xl uppercase tracking-wide drop-shadow-md">
                Carlson Gracie Tucson Class & Team
              </p>
              <p className="text-zinc-300 text-sm sm:text-base font-medium drop-shadow-sm">
                Dedicated students and coaches training together under Professor André Freire.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white uppercase tracking-wider bg-red-700 hover:bg-red-600 rounded-lg shadow-lg shadow-red-900/50 transition-all hover:scale-105 active:scale-95 shrink-0"
            >
              Join Our Team
            </Link>
          </div>
        </motion.div>

        {/* Community Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-xl p-6 flex flex-col items-center text-center">
            <Users className="w-8 h-8 text-red-500 mb-3" />
            <h3 className="text-white font-bold text-lg mb-1">Welcoming Community</h3>
            <p className="text-zinc-400 text-sm">A supportive and positive environment for men, women, and kids of all backgrounds.</p>
          </div>
          <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-xl p-6 flex flex-col items-center text-center">
            <Award className="w-8 h-8 text-red-500 mb-3" />
            <h3 className="text-white font-bold text-lg mb-1">Authentic Lineage</h3>
            <p className="text-zinc-400 text-sm">Direct lineage to Master Carlson Gracie, preserving proven and authentic Brazilian Jiu-Jitsu.</p>
          </div>
          <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-xl p-6 flex flex-col items-center text-center">
            <Shield className="w-8 h-8 text-red-500 mb-3" />
            <h3 className="text-white font-bold text-lg mb-1">Real Self-Defense</h3>
            <p className="text-zinc-400 text-sm">Practical, street-tested techniques designed to protect yourself and your loved ones.</p>
          </div>
          <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-xl p-6 flex flex-col items-center text-center">
            <HeartHandshake className="w-8 h-8 text-red-500 mb-3" />
            <h3 className="text-white font-bold text-lg mb-1">Lifelong Camaraderie</h3>
            <p className="text-zinc-400 text-sm">Build lasting friendships with partners dedicated to health, growth, and self-improvement.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

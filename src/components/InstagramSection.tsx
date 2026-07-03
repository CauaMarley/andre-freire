import { motion } from "motion/react";
import { Instagram } from "lucide-react";

export function InstagramSection() {
  return (
    <section className="bg-white py-24 border-t border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-12">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full relative max-w-xl mx-auto"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-square">
              <img 
                src="https://carlsongracietucson.com/wp-content/uploads/2025/05/marcio-cruz-logo-17-scaled-1-1536x1536.jpg" 
                alt="Marcio Cruz Logo" 
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative blurs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-600/10 blur-3xl -z-10 rounded-full"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <a 
              href="https://www.instagram.com/carlsongracietucson/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-zinc-900 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 group shadow-xl shadow-red-600/10"
            >
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
              @carlsongracietucson
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

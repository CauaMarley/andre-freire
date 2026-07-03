import { motion } from "motion/react";

export function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-white relative border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-black text-black uppercase tracking-tight mb-2">
            Schedule Your Free Class
          </h2>
          <h3 className="text-2xl font-bold text-red-600 uppercase tracking-widest">
            At Carlson Gracie Tucson
          </h3>
        </motion.div>

        {/* Schedule Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex justify-center"
        >
          <img 
            src="https://carlsongracietucson.com/wp-content/uploads/2026/01/SCHEDULE-carlson-gracie-tucson.webp"
            alt="Carlson Gracie Tucson Schedule"
            loading="lazy"
            className="w-full max-w-5xl rounded-2xl shadow-2xl object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

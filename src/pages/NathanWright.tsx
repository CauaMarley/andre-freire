import { motion } from "motion/react";

export function NathanWright() {
  return (
    <main className="pt-24 bg-white text-zinc-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Header Title */}
        <div className="mb-12 border-b-2 border-red-600 inline-block pb-2">
          <h1 className="text-red-700 text-3xl md:text-4xl font-heading font-medium tracking-wide">
            Nathan Wright
          </h1>
          <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tight mt-1 text-zinc-900">
            Kids and Adult / Brown Belt
          </h2>
        </div>

        {/* Biography Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              Nathan Wright is a brown belt under Professor Andre Freire and has been practicing Brazilian Jiu-Jitsu for over five years. For more than four of those years, he has specialized in coaching children, blending his passion for the art with a strong commitment to youth development. His teaching style emphasizes discipline, fun, and confidence-building—creating an environment where kids thrive both on and off the mats.
            </p>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              Nathan’s journey to Jiu-Jitsu began while pursuing his degree at the University of Arizona, where he earned a Bachelor of Science in Physiology. A first-generation college student, he started at Gila Community College in Payson, AZ, where he graduated at the top of his class and was one of only two students awarded the prestigious All-AZ Academic Scholarship. His academic success and passion for science led him to become Director of Operations at TheraCea Pharma, a biotech startup developing innovative radiolabeling and imaging technologies for cancer, heart disease, and neurological disorders.
            </p>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              Throughout his academic and professional journey, Nathan has always had a heart for teaching—whether through leading university physiology labs or coaching on the mats. His combined experience in science, mentorship, and competitive Jiu-Jitsu uniquely equips him to inspire and guide the next generation of grapplers at Carlson Gracie Tucson.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl w-full"
          >
            <img 
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-24-at-16.42.03.webp" 
              alt="Nathan Wright" 
              className="w-full h-auto object-contain object-center"
            />
          </motion.div>
        </div>

        {/* Additional Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-21-at-17.33.38_81e3ff1d.webp" 
              alt="Nathan Wright Coaching" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-21-at-17.33.40_97e0703c.webp" 
              alt="Nathan Wright Jiu Jitsu" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

      </div>
    </main>
  );
}

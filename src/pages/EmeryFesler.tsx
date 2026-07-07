import { motion } from "motion/react";

export function EmeryFesler() {
  return (
    <main className="pt-24 bg-white text-zinc-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Header Title */}
        <div className="mb-12 border-b-2 border-red-600 inline-block pb-2">
          <h1 className="text-red-700 text-3xl md:text-4xl font-heading font-medium tracking-wide">
            Emery Fesler
          </h1>
          <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tight mt-1 text-zinc-900">
            Purple Belt / Women's Instructor
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
              Emery Fesler is a purple belt that has been training and studying under Professor André since the very start of her Jiu Jitsu journey. She is currently leading the women’s only classes at Carlson Gracie Tucson - East side. She takes all that Professor André has taught her, and applies it in her own classes. She has a strong desire to help other women understand Jiu Jitsu and feel comfortable in their learning environment and feel empowered in understanding the self-defense aspects of Jiu Jitsu. She will share her passion and love of Jiu Jitsu with anyone that walks in the gym!
            </p>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              Emery not only trains Brazilian Jiu Jitsu, but is also a recent graduate with her Masters Degree of Acupuncture and specialization in Herbal Medicine. She is a firm advocate for empowering others to live healthy and active lives. Emery hopes to combine her love of Jiu Jitsu and health and wellness, in supporting the students at Carlson Gracie Tucson to be able to feel and perform at their best!
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
              src="https://i.imgur.com/FsdATKv.png" 
              alt="Emery Fesler" 
              className="w-full h-auto object-contain object-center"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}

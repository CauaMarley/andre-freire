import { motion } from "motion/react";
import { Quote } from "lucide-react";

export function Andre() {
  return (
    <main className="pt-24 bg-white text-zinc-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Header Title */}
        <div className="mb-12 border-b-2 border-red-600 inline-block pb-2">
          <h1 className="text-red-700 text-3xl md:text-4xl font-heading font-medium tracking-wide">
            Carlson Gracie Tucson
          </h1>
          <h2 className="text-5xl md:text-6xl font-heading font-light tracking-tight mt-1 text-zinc-900">
            Professor André Freire
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
            <h3 className="text-3xl font-heading font-medium mb-4">Biography</h3>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              André Freire is a <span className="font-bold">bonafide Brazilian</span> with a 3rd-degree black belt in Brazilian Jiu-Jitsu, who has extensive teaching experience and who enjoys sharing his skills as he teaches both children and adult classes in Brazilian Jiu-Jitsu.
            </p>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              André believes that respect is an important value in life and that you must give respect to get respect. To André fighting and competing teaches respect. He also believes that being a martial artist isn’t just about winning or losing, but rather, it’s about controlling your feelings and centering yourself, so much so that nothing can disturb your mind. And when the fighting is done, or the competition is over, he believes it is giving and showing respect to and for the others who had the courage to step onto the battlefield; thus, developing their warrior spirit.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px]"
          >
            <img 
              src="https://carlsongracietucson.com/wp-content/uploads/2025/05/SnapInsta.to_467954322_18470802808018850_5966120767544216934_n.jpg" 
              alt="Professor André Freire" 
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </div>

        {/* Learning Martial Arts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px] order-2 lg:order-1"
          >
            <img 
              src="https://carlsongracietucson.com/wp-content/uploads/2025/05/Captura-de-tela-2025-05-28-132634.png" 
              alt="Professor André Freire Medals" 
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-3xl font-heading font-medium mb-4">Learning Martial Arts and Jiu-Jitsu</h3>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              André began his career in martial arts when he was 6 years old, starting in karate and capoeira. When he was 17, he started to practice Jiu-jitsu <span className="font-bold">no-Gi</span> in MMA classes and at 18 he started Jiujitsu <span className="font-bold">with Gi</span> in the most traditional team in his state of Ceará – Brazil led by Coral belt Master Sazinho Sá. In 2007 as a purple belt, André started teaching Jiu-Jitsu. He became a black belt in 2012 the same year that he completed his degree in Physical Education from Universidade de Fortaleza (Unifor) in Brazil.
            </p>
          </motion.div>
        </div>

        {/* Becoming a World Champion Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-heading font-medium mb-4">Becoming a World Champion</h3>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              The following year of 2012, André married his wife, Thaisa. He also competed in his first MMA competitions—the biggest championship competitions in Brazil, where he became 3x World champion, Pan American and National by CBLP, and won titles from CBJJE (a.k.a. the Mundials, which is the most prestigious Brazilian Jiu-Jitsu tournament in the world) and CBJJ.
            </p>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              In 2017 André came to the USA for the first time, where he won the championship title in the NAGA Las Vegas competition and competed for the first time in the World Masters. The following year of 2018 André moved to the U.S. with his wife, looking to compete in the biggest competitions in the world, which are currently taking place in the United States. December of the same year, his daughter Lunna was born, and André joined the Carlson Gracie Team under Professor Manny Soares in South Florida.
            </p>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              After 2 years of teaching and competing in Southern Florida André moved his family to Tucson, Arizona in 2020. Here in Tucson, he started teaching for the Gracie Barra Team, where he spearheaded and started up their successful competition team. In André’s last 4 years in the US, he has won more than 20 gold medals in multiple competitions, including state competitions across the U.S. and international Opens. He also won the bronze in the biggest event in the world, the IBJJF World and Pan.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px]"
          >
            <img 
              src="https://carlsongracietucson.com/wp-content/uploads/2025/05/Captura-de-tela-2025-05-28-134101.png" 
              alt="Professor André Freire Champion" 
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>

        {/* Carlson Gracie Tucson Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px] order-2 lg:order-1"
          >
            <img 
              src="https://carlsongracietucson.com/wp-content/uploads/2025/05/Captura-de-tela-2025-05-28-134503.png" 
              alt="Professor André Freire Kids Class" 
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-3xl font-heading font-medium mb-4">Carlson Gracie Tucson</h3>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              Today André brings to Tucson, AZ, his extensive worldwide competing and teaching experience. As a Brazilian Jiu-Jitsu instructor, who has taught and coached both children and adults, André’s Degree in Physical Education (UNIFOR), post-degree in Martial Arts (UECE), his many years of experience as a competitive athlete and more than 20+ years of Jiu-jitsu practice as a 3rd degree black belt, André’s skills and magnetic personality are a huge benefit to the Tucson Jiu-Jitsu community. André is very excited to be the Head Professor leading the 1st Carlson Gracie Tucson Academy and dedicating all his experience to the people of this community as a <span className="font-bold">legit</span> Brazilian Jiu-Jitsu black belt Professor.
            </p>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-2 border-red-600 rounded-3xl p-12 text-center max-w-4xl mx-auto mb-24 relative bg-zinc-50"
        >
          <Quote className="w-12 h-12 text-red-600/20 absolute top-8 left-8" />
          <p className="text-2xl md:text-4xl font-heading font-medium mb-6 text-zinc-900 italic relative z-10 leading-snug">
            “Leadership is not about being the best.<br />
            Leadership is about making everyone else better.”
          </p>
          <p className="text-red-700 font-bold uppercase tracking-widest">– André Freire</p>
        </motion.div>

      </div>
    </main>
  );
}

import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function WomensOnlyJiuJitsu() {
  return (
    <main className="pt-24 bg-white text-zinc-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* First Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl w-full"
          >
            <img 
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/Captura-de-tela-2025-05-26-151727.png" 
              alt="Women's Only Jiu Jitsu" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6 border-b-2 border-red-600 inline-block pb-2">
              <h1 className="text-red-700 text-2xl font-heading font-medium tracking-wide">
                Carlson Gracie Tucson
              </h1>
              <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tight mt-1 text-zinc-900">
                Women's Only Jiu Jitsu
              </h2>
            </div>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              At Carlson Gracie Tucson, the spirit of jiu-jitsu thrives within a unique enclave – the Women’s Jiu-Jitsu Class. Nestled within the heart of the bustling gym, this class is not just about grappling techniques; it’s about empowerment, camaraderie, and self-discovery. Led by skilled instructors, the women who step onto the mats embark on a journey of physical and mental fortitude. Here, they find a sanctuary where they can hone their skills, push their limits, and support one another in their pursuit of excellence.
            </p>
          </motion.div>
        </div>

        {/* Second Title Section */}
        <div className="mb-12 border-b-2 border-red-600 inline-block pb-2">
          <h2 className="text-red-700 text-2xl font-heading font-medium tracking-wide">
            Women's Only Jiu Jitsu
          </h2>
        </div>

        {/* Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-3xl font-heading font-medium mb-4">Overview</h3>
            <p className="text-lg text-zinc-700 leading-relaxed">
              In this class, the mats become a canvas where strength is not measured by physical size but by determination and skill. Women of all backgrounds and experience levels come together, united by their passion for jiu-jitsu and their desire to grow both individually and as a community.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 rounded-[3rem] overflow-hidden shadow-2xl w-full"
          >
            <img 
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2026/03/promocao-mulheres_.webp" 
              alt="Overview" 
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Community and other sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
           <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl w-full sticky top-24"
          >
            <img 
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/team_0143.jpg" 
              alt="Women's Community" 
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </motion.div>
          
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-heading font-medium mb-4">Community</h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
                Beyond the techniques and drills, the Women’s Jiu-Jitsu Class fosters a sense of sisterhood. In an environment free from judgment or ego, women encourage and uplift one another, celebrating victories and offering support during moments of struggle. For many, the class extends beyond the confines of the gym, evolving into a network of friendship and empowerment. Outside the academy, these women carry with them the lessons learned on the mats – resilience, discipline, and the belief that they are capable of overcoming any obstacle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-heading font-medium mb-4">Builds Confidence</h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
                The atmosphere is electric, charged with the energy of women who refuse to be confined by stereotypes or limitations. Each session is a testament to resilience and dedication, as participants push past their comfort zones and embrace the challenges that come with mastering this ancient martial art.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-3xl font-heading font-medium mb-4">Mental Health</h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
                At Carlson Gracie Tucson, the Women’s Jiu-Jitsu Class isn’t just about learning self-defense; it’s about discovering inner strength, building confidence, and embracing the warrior spirit that resides within each and every woman who steps onto the mat.
              </p>
            </motion.div>
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-2 border-red-600 rounded-3xl p-12 text-center max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-medium mb-6 text-zinc-900">Try a Free Class Today!</h2>
          <Link to="/contact" className="inline-block bg-red-700 hover:bg-red-600 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-colors text-lg">
            TRY CLASS
          </Link>
        </motion.div>

      </div>
    </main>
  );
}

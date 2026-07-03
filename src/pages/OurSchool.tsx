import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function OurSchool() {
  return (
    <div className="pt-24 pb-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-6">
            Our <span className="text-red-600">School</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            At Carlson Gracie Tucson, Brazilian Jiu-Jitsu isn't just a hobby – it's a way of life. Our school constantly strives to be the best, with hands-on instruction from highly-experienced instructors, a modern training space, and a commitment to the individual improvement of each and every student.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-zinc-800"
          >
            <img 
              src="https://carlsongracietucson.com/wp-content/uploads/2025/06/snapins-ai_3583484406528291350.jpg" 
              alt="Carlson Gracie Tucson Academy" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-heading font-bold text-white uppercase tracking-wide border-l-4 border-red-600 pl-4">
              A Welcoming Environment
            </h2>
            <div className="text-zinc-400 space-y-4 leading-relaxed">
              <p>
                We uphold an encouraging and uplifting environment, and above all else, want to see you succeed. If you join Carlson Gracie Tucson, you'll not only grow as an athlete, but you'll grow as a person.
              </p>
              <p>
                Unlock your full potential at Carlson Gracie Tucson Jujitsu, a premier martial arts institution that has been a transformative experience for our students. The staff and coaches are exceptional.
              </p>
              <p>
                You won't find a better children's program in Tucson. They consistently maintain exceptional coach to student ratios in class. The adult programs offer a competitive atmosphere while also featuring an executive program for those still wishing to train at a slower pace.
              </p>
            </div>
            <Link to="/contact" className="inline-block mt-4 bg-red-700 hover:bg-red-600 text-white px-8 py-3 rounded uppercase font-bold tracking-wider transition-colors">
              Join Our Family
            </Link>
          </motion.div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "https://carlsongracietucson.com/wp-content/uploads/2025/05/Captura-de-tela-2025-05-26-151641.png",
            "https://carlsongracietucson.com/wp-content/uploads/2025/05/Captura-de-tela-2025-05-26-151829.png",
            "https://carlsongracietucson.com/wp-content/uploads/2025/05/Captura-de-tela-2025-05-26-151512.png"
          ].map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="aspect-square rounded-lg overflow-hidden"
            >
              <img src={src} alt="Academy Life" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Testimonials } from "../components/Testimonials";

export function OurSchool() {
  return (
    <div className="pt-24 pb-24 bg-zinc-950 min-h-screen">
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
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-wide border-l-4 border-red-600 pl-4">
              Your Journey Starts Today
            </h2>
            <div className="text-zinc-400 space-y-4 leading-relaxed text-lg">
              <p>
                If you're looking to flip your fitness routine upside down, look no further. At Carlson Gracie Tucson, we believe that anyone is capable of success.
              </p>
              <p>
                The art of Brazilian Jiu-Jitsu is not just amazing for the body, but it cultivates the mind too. Carlson Gracie Tucson's Jiu-Jitsu program will help you master self-defense, while also instilling a lifelong sense of confidence and empowerment. Get started today!
              </p>
            </div>
            <Link to="/contact" className="inline-block mt-4 bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded font-bold uppercase tracking-wider transition-colors shadow-lg hover:-translate-y-1">
              Start Your Journey
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-zinc-800 shadow-[0_0_30px_rgba(220,38,38,0.15)]"
          >
            <img 
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/team_0143.jpg" 
              alt="Carlson Gracie Tucson Academy" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
             <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight mb-4">
              <span className="text-red-600">Features</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              While you may have many Jiu-Jitsu schools to choose from, we have no doubt that Carlson Gracie Tucson is in a league of its own. Don't believe us? Here's why:
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/IMG_1225.jpg",
              "https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/SnapInsta.to_467954322_18470802808018850_5966120767544216934_n.jpg",
              "https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/IMG_0289.jpeg"
            ].map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-square rounded-xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-900 flex items-center justify-center p-4"
              >
                <img src={src} alt="Feature" className="w-full h-full object-contain hover:scale-110 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Testimonials (Re-used from Home page) */}
      <div className="bg-white py-1">
        <Testimonials />
      </div>
    </div>
  );
}

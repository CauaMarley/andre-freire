import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function OurSchool() {
  return (
    <section id="school" className="py-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight mb-8">
              Our <span className="text-red-600">School</span>
            </h2>
            
            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                At Carlson Gracie Tucson, Brazilian Jiu Jitsu isn't just a hobby – it's a way of life. Our school constantly strives to be the best, with hands-on instruction from highly-experienced instructors, a modern training space, and a commitment to the individual improvement of each and every student.
              </p>
              <p>
                We uphold an encouraging and uplifting environment, and above all else, want to see you succeed. If you join Carlson Gracie Tucson, you'll not only grow as an athlete, but you'll grow tremendously as a person.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Highly-Experienced Instructors",
                "Modern Training Space",
                "Uplifting Environment",
                "Individual Improvement",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="font-semibold text-white tracking-wide">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
               <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white uppercase tracking-wider bg-red-700 hover:bg-red-600 rounded-sm transition-all hover:scale-105 active:scale-95"
              >
                Join Our Family
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden relative shadow-2xl shadow-black/50 bg-zinc-800/50 flex items-center justify-center">
              <img 
                src="https://i.imgur.com/O7My8vC.jpg" 
                alt="Carlson Gracie Tucson School" 
                loading="lazy"
                className="w-full h-auto object-contain transition-all duration-700"
              />
              <div className="absolute inset-0 border-4 border-zinc-800/20 rounded-lg pointer-events-none"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-600 rounded-sm -z-10 opacity-20 hidden md:block"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-zinc-800 rounded-sm -z-10 hidden md:block"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function ExecutiveClass() {
  return (
    <div className="pt-24 pb-24 bg-zinc-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://carlsongracietucson.com/wp-content/uploads/2025/05/WhatsApp-Image-2024-03-13-at-7.05.32-PM-1-1333x1000-1-1024x768.jpeg"
            alt="Executive Class"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter mb-6">
              Executive <span className="text-red-600">Class</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 font-medium max-w-3xl mx-auto">
              It's never too late to start something that improves both your body and your mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-wide">
              The 40+ Jiu-Jitsu Program
            </h2>
            <div className="w-20 h-1 bg-red-600 mb-8"></div>
            
            <div className="text-zinc-300 text-lg leading-relaxed space-y-6">
              <p>
                Our 40+ Jiu-Jitsu Program is specifically designed for adults who want to stay active, build confidence, and improve their overall health in a safe, supportive environment. Whether you're completely new to martial arts or returning to fitness after years away, our experienced instructors will help you progress at your own pace.
              </p>
              <p>
                Unlike high-impact workouts, Brazilian Jiu-Jitsu emphasizes technique, balance, mobility, and controlled movement making it an excellent choice for adults looking for sustainable fitness.
              </p>
              <p>
                No previous experience or exceptional fitness level is required. Every class is structured to accommodate beginners, allowing you to learn safely while gradually developing your skills and conditioning.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden border-l-4 border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.15)]">
              <img 
                src="https://carlsongracietucson.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-24-at-14.11.48-281x300.webp"
                alt="Executive Class Instructor"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-zinc-900 py-24 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight">
              Benefits of Our <span className="text-red-600">40+ Program</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Improve strength, flexibility, and mobility",
              "Enhance cardiovascular health and endurance",
              "Increase balance and coordination",
              "Learn practical self-defense skills",
              "Reduce stress and improve mental well-being",
              "Train in a friendly, respectful, and supportive community",
              "Build confidence while having fun"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 flex items-start gap-4 group hover:border-red-600/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-red-600/20 text-red-600 flex items-center justify-center shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-zinc-300 font-medium leading-relaxed group-hover:text-white transition-colors">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-wide">
            Your best time to start is <span className="text-red-600">today.</span>
          </h2>
          <p className="text-zinc-400 text-xl">
            Invest in your health, challenge yourself, and discover why thousands of adults over 40 are choosing Brazilian Jiu-Jitsu as their lifelong fitness journey.
          </p>
          <div className="pt-8">
            <Link 
              to="/contact" 
              className="inline-block bg-red-700 hover:bg-red-600 text-white font-bold text-lg uppercase tracking-wider px-10 py-5 rounded transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:-translate-y-1"
            >
              Start Your Journey
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

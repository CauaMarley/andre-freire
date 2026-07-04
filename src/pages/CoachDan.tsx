import { motion } from "motion/react";

export function CoachDan() {
  return (
    <main className="pt-24 bg-white text-zinc-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Header Title */}
        <div className="mb-12 border-b-2 border-red-600 inline-block pb-2">
          <h1 className="text-red-700 text-3xl md:text-4xl font-heading font-medium tracking-wide">
            Coach Dan Modrzejewski (Brown Belt)
          </h1>
          <h2 className="text-5xl md:text-6xl font-heading font-light tracking-tight mt-1 text-zinc-900">
            Instructor of Fundamental and Executive Class
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
              Dr. Dan Modrzejewski is a native of Tucson, Arizona. His initial martial arts training began in middle school where he participated in Kenpo Karate earning his brown belt, then moved to wrestling in high school and college. Dan has been involved with Jiu Jitsu for over 10 years and has been with Carlson Gracie Tucson since their opening. He currently coaches the Fundamental and Executive classes.
            </p>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              Dan retired after 30 years in the Fire and Emergency Medical services industry. During his career his duties ranged from ambulance operations, flight paramedic, and the fire service.
            </p>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              He holds a Bachelor’s degree in Fire Service Management and Master’s degree in Fire Service Administration from Arizona State University. In 2017 he earned a Doctorate in Social Science from Grand Canyon University where he received the honor of his dissertation being published in the U.S. Library of Congress.
            </p>
            <p className="text-lg text-zinc-900 font-medium mb-6 leading-relaxed">
              Thank you,<br/>
              Dan
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl w-full"
          >
            <img 
              src="https://carlsongracietucson.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-24-at-14.11.48.webp" 
              alt="Coach Dan Modrzejewski" 
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}

import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function CompetitionJiuJitsu() {
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
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/IMG_1225.jpg" 
              alt="Competition Jiu Jitsu" 
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
                Competition Jiu-Jitsu
              </h2>
            </div>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              Are you ready to take your skills to the next level? Well, you’ve come to the right place. Our Advanced/Competition BJJ class is designed to ensure each student is competition-ready. Taught by our most experienced instructors, you’ll soon be mastering advanced BJJ techniques and sparring like a pro. If you enroll in this class, you’ll have the opportunity to represent Carlson Gracie Tucson in competitions!
            </p>
          </motion.div>
        </div>

        {/* Second Title Section */}
        <div className="mb-12 border-b-2 border-red-600 inline-block pb-2">
          <h2 className="text-red-700 text-2xl font-heading font-medium tracking-wide">
            Competition Jiu-Jitsu
          </h2>
        </div>

        {/* Advanced Training */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-3xl font-heading font-medium mb-4">Advanced Training</h3>
            <p className="text-lg text-zinc-700 leading-relaxed">
              As Brazilian Jiu-Jitsu has grown in popularity, the competition has become fiercer than ever before. But there’s nothing to fear – at Carlson Gracie Tucson, we offer the best of the best. This class is one of the most advanced courses at our school, pushing students to reach higher goals and develop the skill set of their dreams. Students in Advanced/Competition BJJ have a solid grip on the fundamentals of Brazilian Jiu Jitsu and are ready to try modern techniques, gain more experience sparring other advanced athletes, and take on new challenges.
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
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/IMG_0289.jpeg" 
              alt="Advanced Training" 
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Competitions and Tournaments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
           <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl w-full"
          >
            <img 
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/IMG_0731-1510x1000-1.jpg" 
              alt="Competitions and Tournaments" 
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-heading font-medium mb-4">Competitions and Tournaments</h3>
            <p className="text-lg text-zinc-700 leading-relaxed">
              As you become an advanced martial artist, you may want to put your skills to the test. At Carlson Gracie Tucson, we believe that competition is the best way to apply your abilities in an environment that is safe, yet challenging. Competitions are the perfect place to not only identify your strengths and better understand how to utilize them but to discover your weak spots as well. Over the years, Carlson Gracie Tucson’s competition team has attended a wide variety of competitions, won countless awards, and achieved national recognition.
            </p>
          </motion.div>
        </div>

        {/* A One-of-a-Kind Team */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-3xl font-heading font-medium mb-4">A One-of-a-Kind Team</h3>
            <p className="text-lg text-zinc-700 leading-relaxed mb-4">
              Don’t get us wrong – winning a trophy, out-performing a competitor, or finally reaching a personal goal feels pretty great. But at the end of the day, none of those things are the best part of joining the Carlson Gracie Tucson competition team.
            </p>
            <p className="text-xl font-medium text-zinc-900 mb-4 italic">
              The real prize? Your teammates.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed">
              Between training, traveling, competing, and celebrating, members of our competition team spend a ton of time together. There’s a high level of camaraderie and friendship unique to our competition team that will push you to become the best martial artist you can be. We can’t wait for you to join us!
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
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/IMG_5667.jpeg" 
              alt="A One-of-a-Kind Team" 
              loading="lazy"
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
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

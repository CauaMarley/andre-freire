import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CurriculumWeek } from "../components/Curriculum";
import { adultCurriculum } from "../data/adultCurriculum";

export function AdultsTeensJiuJitsu() {
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
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-24-at-14.11.48.webp" 
              alt="Adult & Teens Jiu Jitsu" 
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
                Adult & Teens Jiu-Jitsu
              </h2>
            </div>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              Brazilian Jiu-Jitsu (BJJ) has gained a lot of attention in recent years, and it’s pretty obvious why. BJJ stands apart from other martial arts due to its focus on grappling, rather than the kicking and punching that characterize disciplines such as Karate and Taekwondo. BJJ is known to improve fitness levels, prepare its practitioners for situations requiring self-defense, and relieve stress.
            </p>
          </motion.div>
        </div>

        {/* Second Title Section */}
        <div className="mb-8 border-b-2 border-red-600 inline-block pb-2 mt-8">
          <h2 className="text-red-700 text-2xl font-heading font-medium tracking-wide">
            Adult & Teens Jiu-Jitsu
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-light tracking-tight mt-1 text-zinc-900">
            Overview
          </h3>
        </div>

        {/* Overview Section */}
        <div className="mb-24 max-w-3xl">
          <p className="text-lg text-zinc-700 mb-4 leading-relaxed">
            Brazilian Jiu-Jitsu (BJJ) is a martial art that focuses on grappling and ground fighting as self-defense. Jiu-Jitsu has recently become more popular and is noted to be one of the fastest-growing MMA sports in the United States. The concept of BJJ is that smaller people who are not as strong can defend themselves against a larger, stronger opponent. Through the use of skillful leveraging techniques and effective groundwork, Brazilian Jiu-Jitsu martial artists are able to manipulate, subdue, and control their opponent.
          </p>
          <a href="#" className="inline-block mt-4 text-red-600 font-bold hover:underline">Download Curriculum</a>
        </div>

        {/* No-Gi Jiu-Jitsu */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-3xl font-heading font-medium mb-4">No-Gi Jiu-Jitsu</h3>
            <p className="text-lg text-zinc-700 leading-relaxed">
              When practicing No-Gi Jiu-Jitsu, you’ll shed your thick kimono and pants for stretchy athletic wear, such as shorts and a rash guard. Without the lapel and collar of a kimono to grab hold of, No-Gi Jiu-Jitsu is much faster and requires quick thinking. While it’s up for you to decide, many feel that No-Gi BJJ is better when it comes to preparing for real-life altercations.
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
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/Captura-de-tela-2025-05-26-151727.png" 
              alt="No Gi Jiu Jitsu" 
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Self Defense */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
           <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl w-full"
          >
            <img 
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/team_0143.jpg" 
              alt="Self Defense" 
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
            <h3 className="text-3xl font-heading font-medium mb-4">Self Defense</h3>
            <p className="text-lg text-zinc-700 leading-relaxed">
              Made for the real world, BJJ is a form of self-defense that every person should master. BJJ focuses on ground-level altercations – utilizing holds, throws, blows, and a variety of submission techniques. This makes Jiu-Jitsu ideal when learning how to take on an opponent who may be larger than you, without necessarily having to hurt them.
            </p>
          </motion.div>
        </div>

        {/* Grappling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-3xl font-heading font-medium mb-4">Grappling</h3>
            <p className="text-lg text-zinc-700 leading-relaxed">
              While many martial art disciplines incorporate grappling here and there, when it comes to BJJ, grappling is at the core of all of your training. Not familiar with grappling? Here’s what you need to know – instead of utilizing weapons or striking, grappling is all about getting your opponent to concede through physical dominance. The rules and techniques of grappling vary depending on whether one is practicing Gi or No-Gi Jiu-Jitsu, as well as whether it’s being done in a sport or self-defense style. When grappling in BJJ, you’ll spend the majority of your time fighting from the ground and will likely utilize many different types of chokes.
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
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/WhatsApp-Image-2024-03-13-at-7.05.32-PM-1-1333x1000-1-1024x768.jpeg" 
              alt="Grappling" 
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Fitness and other sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl w-full sticky top-24"
          >
            <img 
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/team_0143.jpg" 
              alt="Fitness and Community" 
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
              <h3 className="text-3xl font-heading font-medium mb-4">Fitness</h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
                Brazilian Jiu-Jitsu is a total body workout because it involves a lot of explosive throws, speed, agility, and ground grappling. At Carlson Gracie Tucson, we know the importance of a healthy mind and body. In BJJ, you’ll burn hundreds of calories in each class, develop lean muscles, and boost stamina and endurance. Brazilian Jiu-Jitsu is a high-energy training class from start to finish that is fun and engaging for any student.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-heading font-medium mb-4">Weight Loss</h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
                Obesity is a serious problem in the United States, so a brand new workout to your routine will greatly help. At Carlson Gracie Tucson, we know the importance of a healthy mind and body, so introducing yourself to martial arts is a great way to combat obesity and promote weight loss. In BJJ, you’ll burn hundreds of calories in each class, develop lean muscles, and boost flexibility. BJJ is a high-energy training class that is great for overall health and/or weight loss.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-3xl font-heading font-medium mb-4">Positive Environment</h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
                You’ll love BJJ because we love BJJ. At Carlson Gracie Tucson, we are passionate about sharing the gift of Brazilian Jiu-Jitsu with our community. We aim to create an environment where every single student can accomplish their goals – whatever they may be. It doesn’t matter if you’ve spent your entire life training in MMA and are exploring your newest martial arts discipline or you’re just trying to break away from the monotony of the gym, we will exceed your expectations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-3xl font-heading font-medium mb-4">Community</h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
                In BJJ you need to have a training partner to practice with, so you spend a lot of time with the other students in your class. By creating a bond of trust and reciprocation, you and your grappling partner can then practice various techniques on each other and see what works or doesn’t work. This martial art cannot be learned based solely on the use of paddles or punching bags. Members at Carlson Gracie Tucson have become close friends and help each other refine their skills and reach their goals.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Curriculum Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-4 text-zinc-900">
              Fundamental Curriculum
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-wider text-red-700 mb-8">
              <span>Warm-up: 7 MIN</span>
              <span>•</span>
              <span>Self-Defense & Takedowns: 16 MIN</span>
              <span>•</span>
              <span>Water Break: 2 MIN</span>
              <span>•</span>
              <span>Sport Jiu-Jitsu: 20 MIN</span>
              <span>•</span>
              <span>Specific Training: 10 MIN</span>
              <span>•</span>
              <span>Cool Down: 5 MIN</span>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            {adultCurriculum.map((week) => (
              <CurriculumWeek key={week.number} week={week} />
            ))}
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

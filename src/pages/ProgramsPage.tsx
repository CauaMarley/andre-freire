import { motion } from "motion/react";
import { Link } from "react-router-dom";

const programsData = [
  {
    id: "adults",
    title: "Adult & Teens Jiu-Jitsu",
    description: "Brazilian Jiu-Jitsu (BJJ) has gained a lot of attention in recent years, and it's pretty obvious why. Improve fitness, learn self-defense, and relieve stress.",
    image: "https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/Captura-de-tela-2025-05-26-151829.png",
    url: "/adult-e-teens-jiu-jitsu"
  },
  {
    id: "kids",
    title: "Kids Jiu-Jitsu",
    description: "Brazilian Jiu-Jitsu (BJJ) isn't just for adults. In fact, it's the perfect activity for kids! Build discipline, respect, and confidence.",
    image: "https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/Captura-de-tela-2025-05-26-151727.png",
    url: "/kids-jiu-jitsu"
  },
  {
    id: "competition",
    title: "Competition Jiu-Jitsu",
    description: "Are you ready to take your skills to the next level? For those looking to test their skills in tournaments with advanced techniques.",
    image: "https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/WhatsApp-Image-2024-03-13-at-7.05.32-PM-1-1333x1000-1-1024x768.jpeg",
    url: "/competition-jiu-jitsu"
  },
  {
    id: "womens",
    title: "Women's Only",
    description: "At Carlson Gracie Tucson, the spirit of jiu-jitsu thrives within a unique enclave – the Women's Jiu-Jitsu Class. Learn practical self-defense in a safe environment.",
    image: "https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/team_0143.jpg",
    url: "/womens-only"
  },
  {
    id: "executive",
    title: "Executive Class",
    description: "Our 40+ Jiu-Jitsu Program is specifically designed for adults who want to stay active, build confidence, and improve their overall health in a safe environment.",
    image: "https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/SnapInsta.to_467954322_18470802808018850_5966120767544216934_n.jpg",
    url: "/executiveclass"
  }
];

export function Programs() {
  return (
    <div className="pt-24 pb-24 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-6">
              Our <span className="text-red-600">Programs</span>
            </h1>
            <div className="text-zinc-400 space-y-4 leading-relaxed text-lg border-l-4 border-red-600 pl-4">
              <p>
                At Carlson Gracie Tucson, Brazilian Jiu-Jitsu isn't just a hobby – it's a way of life. Our school constantly strives to be the best, with hands-on instruction from highly-experienced instructors, a modern training space, and a commitment to the individual improvement of each and every student.
              </p>
              <p>
                We uphold an encouraging and uplifting environment, and above all else, want to see you succeed. If you join Carlson Gracie Tucson, you'll not only grow as an athlete, but you'll grow tremendously as a person.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.15)]"
          >
            <div className="absolute inset-0 bg-black/20 z-10" />
            <img 
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/WhatsApp-Image-2024-03-13-at-7.05.32-PM-1-1333x1000-1-1024x768.jpeg" 
              alt="Carlson Gracie Tucson Programs" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col group hover:border-red-600 transition-colors duration-300 shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-wide mb-4">
                  {program.title}
                </h2>
                <div className="w-12 h-1 bg-red-600 mb-6"></div>
                
                <p className="text-zinc-400 text-base leading-relaxed mb-8 flex-1">
                  {program.description}
                </p>
                
                <Link 
                  to={program.url}
                  className="inline-block text-center w-full bg-zinc-950 hover:bg-red-700 border border-zinc-800 hover:border-red-700 text-white font-bold uppercase tracking-wider py-3 px-6 rounded transition-all"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

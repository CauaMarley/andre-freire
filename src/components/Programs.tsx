import { Link } from "react-router-dom";
import { motion } from "motion/react";

const programs = [
  {
    id: "kids",
    title: "Kids Jiu-Jitsu",
    description: "Brazilian Jiu-Jitsu (BJJ) isn't just for adults. In fact, it's the perfect activity for kids!",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/Captura-de-tela-2025-05-26-151512.png",
    url: "/programs"
  },
  {
    id: "adults",
    title: "Adult & Teens Jiu-Jitsu",
    description: "Brazilian Jiu-Jitsu (BJJ) has gained a lot of attention in recent years, and it's pretty obvious why.",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/Captura-de-tela-2025-05-26-151641.png",
    url: "/programs"
  },
  {
    id: "competition",
    title: "Competition Jiu-Jitsu",
    description: "Are you ready to take your skills to the next level? Well, you've come to the right place.",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/Captura-de-tela-2025-05-26-151829.png",
    url: "/programs"
  },
  {
    id: "womens",
    title: "Women's Only Jiu Jitsu",
    description: "At Carlson Gracie Tucson, the spirit of jiu-jitsu thrives within a unique enclave – the Women's Jiu-Jitsu Class.",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/Captura-de-tela-2025-05-26-151727.png",
    url: "/programs"
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight">
            Our <span className="text-red-600">Programs</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-96 rounded-lg overflow-hidden bg-zinc-900 shadow-xl"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${program.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-4">
                  <h4 className="text-2xl font-heading font-bold text-white uppercase tracking-wide mb-3 border-l-4 border-red-600 pl-3">
                    {program.title}
                  </h4>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto">
                    {program.description}
                  </p>
                  <Link to={program.url} className="inline-block border border-red-600 text-white hover:bg-red-600 px-6 py-2 uppercase tracking-wider font-bold text-xs transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

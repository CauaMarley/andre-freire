import { motion } from "motion/react";
import { Link } from "react-router-dom";

const instructors = [
  {
    name: "Professor André Freire",
    role: "Head Instructor / 3rd-Degree Black Belt",
    bio: "André Freire is a bonafide Brazilian with a 3rd-degree black belt in Brazilian Jiu-Jitsu, who has extensive teaching experience and who enjoys sharing his skills as he teaches both children and adult classes in Brazilian Jiu-Jitsu. André believes that respect is an important value in life and that you must give respect to get respect. To André fighting and competing teaches respect. He also believes that being a martial artist isn’t just about winning or losing, but rather, it’s about controlling your feelings and centering yourself, so much so that nothing can disturb your mind. And when the fighting is done, or the competition is over, he believes it is giving and showing respect to and for the others who had the courage to step onto the battlefield; thus, developing their warrior spirit.",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/SnapInsta.to_467954322_18470802808018850_5966120767544216934_n.jpg",
    link: "/andre"
  },
  {
    name: "Coach Dan Modrzejewski",
    role: "Brown Belt / Fundamental & Executive Class",
    bio: "Dr. Dan Modrzejewski is a native of Tucson, Arizona. His initial martial arts training began in middle school where he participated in Kenpo Karate earning his brown belt, then moved to wrestling in high school and college. Dan has been involved with Jiu Jitsu for over 10 years and has been with Carlson Gracie Tucson since their opening. He currently coaches the Fundamental and Executive classes. Dan retired after 30 years in the Fire and Emergency Medical services industry.",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-24-at-14.11.48.webp",
    link: "/coach-dan-modrzejewski"
  },
  {
    name: "Nathan Wright",
    role: "Brown Belt / Kids and Adult",
    bio: "Nathan Wright is a brown belt under Professor Andre Freire and has been practicing Brazilian Jiu-Jitsu for over five years. For more than four of those years, he has specialized in coaching children, blending his passion for the art with a strong commitment to youth development. His teaching style emphasizes discipline, fun, and confidence-building—creating an environment where kids thrive both on and off the mats.",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-24-at-16.42.03-1536x1025.webp",
    link: "/nathan-wright"
  },
  {
    name: "Emery Fesler",
    role: "Purple Belt / Women's Instructor",
    bio: "Emery Fesler is a purple belt that has been training and studying under Professor André since the very start of her Jiu Jitsu journey. She is currently leading the women’s only classes at Carlson Gracie Tucson - East side. She takes all that Professor André has taught her, and applies it in her own classes. She has a strong desire to help other women understand Jiu Jitsu and feel comfortable in their learning environment and feel empowered in understanding the self-defense aspects of Jiu Jitsu.",
    image: "https://i.imgur.com/FsdATKv.png",
    link: "/emery-fesler"
  }
];

export function InstructorsPage() {
  return (
    <div className="pt-24 pb-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-6">
            Our <span className="text-red-600">Instructors</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            At Carlson Gracie Tucson we are a family, and our school is bound to become our students’ second home. We are a judgment-free zone, where mistakes are viewed as growth opportunities and your instructors and fellow students are your #1 supporters. You’ll learn a lot of impressive skills and gain many new abilities at Carlson Gracie Tucson, but the most important thing you’ll acquire during your time here? Our community.
          </p>
        </motion.div>

        <div className="space-y-20">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row gap-10 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-l-4 border-red-600 bg-zinc-900 shadow-[0_0_30px_rgba(220,38,38,0.15)] group">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="border-b border-zinc-800 pb-6">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-wide mb-2">
                    {instructor.name}
                  </h2>
                  <p className="text-red-500 font-bold uppercase tracking-wider text-sm">
                    {instructor.role}
                  </p>
                </div>
                
                <div className="text-zinc-300 text-lg leading-relaxed space-y-4">
                  <p>{instructor.bio}</p>
                </div>
                <div className="pt-6">
                  {instructor.link && (
                    <Link to={instructor.link} className="inline-block bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors font-semibold">
                      Read Full Bio
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

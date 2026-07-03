import { motion } from "motion/react";

const instructors = [
  {
    name: "Professor André Freire",
    role: "Head Instructor / 3rd-Degree Black Belt",
    bio: "André Freire is a bonafide Brazilian with a 3rd-degree black belt in Brazilian Jiu-Jitsu, who has extensive teaching experience and who enjoys sharing his skills as he teaches both children and adult classes. André believes that respect is an important value in life and that you must give respect to get respect. To André fighting and competing teaches respect. Raised in Rio de Janeiro, André dedicated his life to martial arts and instills a rigorous yet compassionate methodology in all of his programs.",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/SnapInsta.to_467954322_18470802808018850_5966120767544216934_n.jpg",
  },
  {
    name: "Coach Dan Modrzejewski",
    role: "Brown Belt / Fundamental & Executive Class",
    bio: "Dr. Dan Modrzejewski is a native of Tucson, Arizona. His initial martial arts training began in middle school where he participated in Kenpo Karate earning his brown belt, then moved to wrestling in high school and college. Dan has been involved with Jiu Jitsu for over 10 years. Known for his methodical approach, he breaks down complex techniques so they are easy to grasp for students of all ages and athletic backgrounds.",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-24-at-14.11.48.webp",
  },
  {
    name: "Nathan Wright",
    role: "Brown Belt / Kids and Adult",
    bio: "Nathan Wright is a brown belt under Professor Andre Freire and has been practicing Brazilian Jiu-Jitsu for over five years. For more than four of those years, he has specialized in coaching children, blending his passion for the art with a strong commitment to youth development. Nathan brings an energetic and encouraging presence to the mats, ensuring every child feels confident while learning vital self-defense skills.",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-24-at-16.42.03-1536x1025.webp",
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
            Meet the dedicated and experienced team behind Carlson Gracie Tucson. Our instructors are passionate about sharing their knowledge and helping you achieve your martial arts goals.
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
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

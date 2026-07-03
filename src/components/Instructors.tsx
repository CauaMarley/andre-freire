import { motion } from "motion/react";
import { Link } from "react-router-dom";

const instructors = [
  {
    name: "Professor André Freire",
    role: "Head Instructor / 3rd-Degree Black Belt",
    bio: "André Freire is a bonafide Brazilian with a 3rd-degree black belt in Brazilian Jiu-Jitsu, who has extensive teaching experience and who enjoys sharing his skills as he teaches both children and adult classes. André believes that respect is an important value in life and that you must give respect to get respect. To André fighting and competing teaches respect.",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/SnapInsta.to_467954322_18470802808018850_5966120767544216934_n.jpg",
    link: "https://carlsongracietucson.com/andre/"
  },
  {
    name: "Coach Dan Modrzejewski",
    role: "Brown Belt / Fundamental & Executive Class",
    bio: "Dr. Dan Modrzejewski is a native of Tucson, Arizona. His initial martial arts training began in middle school where he participated in Kenpo Karate earning his brown belt, then moved to wrestling in high school and college. Dan has been involved with Jiu Jitsu for over 10 years.",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-24-at-14.11.48.webp",
    link: "https://carlsongracietucson.com/coach-dan-modrzejewski/"
  },
  {
    name: "Nathan Wright",
    role: "Brown Belt / Kids and Adult",
    bio: "Nathan Wright is a brown belt under Professor Andre Freire and has been practicing Brazilian Jiu-Jitsu for over five years. For more than four of those years, he has specialized in coaching children, blending his passion for the art with a strong commitment to youth development.",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-24-at-16.42.03-1536x1025.webp",
    link: "https://carlsongracietucson.com/nathan-wright/"
  },
  {
    name: "Emery Fesler",
    role: "Purple Belt / Women's Instructor",
    bio: "Emery Fesler is a purple belt that has been training and studying under Professor André since the very start of her Jiu Jitsu journey. She is currently leading the women’s only classes at Carlson Gracie Tucson - East side. She takes all that Professor André has taught her, and applies it in her own classes. She has a strong desire to help other women understand Jiu Jitsu and feel comfortable in their learning environment and feel empowered in understanding the self-defense aspects of Jiu Jitsu. She will share her passion and love of Jiu Jitsu with anyone that walks in the gym!\n\nEmery not only trains Brazilian Jiu Jitsu, but is also a recent graduate with her Masters Degree of Acupuncture and specialization in Herbal Medicine. She is a firm advocate for empowering others to live healthy and active lives. Emery hopes to combine her love of Jiu Jitsu and health and wellness, in supporting the students at Carlson Gracie Tucson to be able to feel and perform at their best!",
    image: "https://i.imgur.com/FsdATKv.png",
  }
];

export function Instructors() {
  return (
    <section id="instructors" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight">
            Our <span className="text-red-600">Instructors</span>
          </h2>
        </motion.div>

        <div className="space-y-12 md:space-y-24">
          {instructors.map((instructor, index) => (
            <motion.div 
              key={instructor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col gap-8 md:gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-l-4 border-red-600 bg-zinc-900">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-3xl font-heading font-bold text-white uppercase tracking-wide">
                  {instructor.name}
                </h3>
                <p className="text-red-500 font-bold uppercase tracking-wider text-sm mb-4 border-b border-zinc-800 pb-4 inline-block">
                  {instructor.role}
                </p>
                <div className="text-zinc-400 text-lg leading-relaxed">
                  <p>{instructor.bio}</p>
                </div>
                <div className="pt-6">
                  {instructor.link && (
                    <a href={instructor.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white px-6 py-2 rounded-sm text-sm uppercase tracking-wider transition-colors font-semibold">
                      Read Full Bio
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

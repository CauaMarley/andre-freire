import React from 'react';
import { motion } from 'motion/react';
import { Link2 } from 'lucide-react';

const blogs = [
  {
    title: "Learn BJJ at Carlson Gracie Tucson: All Skill Levels",
    desc: "Discover Brazilian Jiu-Jitsu at Carlson Gracie Tucson. We offer world-class training for beginners and experts. Join us today!",
    url: "https://carlsongracietucson.com/learn-brazilian-jiu-jitsu-tucson-all-levels/",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/WhatsApp-Image-2024-03-13-at-7.05.32-PM-1-1333x1000-1.jpeg",
    date: "April 10, 2026"
  },
  {
    title: "Self-Defense and Fitness Training",
    desc: "Transform your life at Carlson Gracie Tucson. Learn real self-defense and get fit with elite Jiu-Jitsu. Join us today.",
    url: "https://carlsongracietucson.com/carlson-gracie-tucson-self-defense-fitness/",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/06/snapins-ai_3583484406528291350.jpg",
    date: "April 12, 2026"
  },
  {
    title: "Best Jiu Jitsu for Fitness and Defense",
    desc: "Join Carlson Gracie Tucson for elite BJJ training. Boost your fitness and master real self-defense in the best local academy today.",
    url: "https://carlsongracietucson.com/best-jiu-jitsu-tucson-fitness-self-defense/",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-23-at-22.00.55-6-1.jpeg",
    date: "April 15, 2026"
  },
  {
    title: "BJJ Classes for All Ages at Carlson Gracie Tucson",
    desc: "Discover Jiu-Jitsu for all ages and fitness levels at Carlson Gracie Tucson. Start your journey today!",
    url: "https://carlsongracietucson.com/jiu-jitsu-classes-all-ages-fitness-tucson/",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/SnapInsta.to_469342930_17988889769750365_2181443428994732930_n.jpg",
    date: "April 18, 2026"
  },
  {
    title: "Self-Defense Classes in Tucson: Master BJJ",
    desc: "Join the best self-defense classes in Tucson. Master BJJ at Carlson Gracie for safety and confidence. Start your journey now!",
    url: "https://carlsongracietucson.com/self-defense-classes-tucson-jiu-jitsu/",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/SnapInsta.to_461808797_521545800608868_572171878860095246_n.jpg",
    date: "April 20, 2026"
  },
  {
    title: "BJJ for All Ages: Carlson Gracie Tucson Training",
    desc: "Empower your family at Carlson Gracie Tucson. Elite Jiu-Jitsu for adults and kids focusing on fitness and self-defense.",
    url: "https://carlsongracietucson.com/bjj-adults-kids-tucson-fitness-defense/",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-23-at-22.00.55-6-1.jpeg",
    date: "April 25, 2026"
  }
];

export function Blogs() {
  return (
    <section className="bg-white py-24 border-t border-zinc-200" id="blogs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-heading font-black text-black uppercase tracking-tighter"
          >
            Our Blogs
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.a
              key={index}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col bg-zinc-50 rounded-2xl overflow-hidden shadow-lg border border-zinc-200 hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="relative h-64 sm:h-56 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover object-[center_top] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="flex flex-col flex-1 p-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-heading uppercase leading-tight mb-4 text-black group-hover:text-red-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-zinc-600 mb-8 line-clamp-3">
                    {blog.desc}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-200">
                  <div className="flex items-center gap-2 text-zinc-500 font-bold text-sm">
                    <span className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center">
                      📅
                    </span>
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-black group-hover:text-red-600 transition-colors">
                    Read More <Link2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

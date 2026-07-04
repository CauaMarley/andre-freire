import { useState, useCallback, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link2, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Link } from 'react-router-dom';

export const blogs = [
  {
    title: "Self-Defense Classes in Tucson: Master BJJ",
    desc: "Join the best self-defense classes in Tucson. Master BJJ at Carlson Gracie for safety and confidence. Start your journey now!",
    url: "/self-defense-classes-tucson-jiu-jitsu",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/06/snapins-ai_3583484406528291350.jpg",
    date: "April 6, 2026"
  },
  {
    title: "BJJ for All Ages: Carlson Gracie Tucson Training",
    desc: "Empower your family at Carlson Gracie Tucson. Elite Jiu-Jitsu for adults and kids focusing on fitness and self-defense.",
    url: "/bjj-adults-kids-tucson-fitness-defense",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-23-at-22.00.55-6-1.jpeg",
    date: "April 1, 2026"
  },
  {
    title: "BJJ Classes for All Ages at Carlson Gracie Tucson",
    desc: "Discover Jiu-Jitsu for all ages and fitness levels at Carlson Gracie Tucson. Start your journey today!",
    url: "/jiu-jitsu-classes-all-ages-fitness-tucson",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/06/snapins-ai_3583484406528291350-768x448.jpg",
    date: "March 30, 2026"
  },
  {
    title: "Best Jiu Jitsu for Fitness and Defense",
    desc: "Join Carlson Gracie Tucson for elite BJJ training. Boost your fitness and master real self-defense in the best local academy today.",
    url: "/best-jiu-jitsu-tucson-fitness-self-defense",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-23-at-22.00.55-6-1.jpeg",
    date: "March 26, 2026"
  },
  {
    title: "Learn BJJ at Carlson Gracie Tucson: All Skill Levels",
    desc: "Discover Brazilian Jiu-Jitsu at Carlson Gracie Tucson. We offer world-class training for beginners and experts. Join us today!",
    url: "/learn-brazilian-jiu-jitsu-tucson-all-levels",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/WhatsApp-Image-2024-03-13-at-7.05.32-PM-1-1333x1000-1.jpeg",
    date: "March 24, 2026"
  },
  {
    title: "Self-Defense and Fitness Training",
    desc: "Transform your life at Carlson Gracie Tucson. Learn real self-defense and get fit with elite Jiu-Jitsu. Join us today.",
    url: "/carlson-gracie-tucson-self-defense-fitness",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/06/snapins-ai_3583484406528291350-1024x597.jpg",
    date: "March 20, 2026"
  },
  {
    title: "Self-Defense in Tucson: Carlson Gracie Jiu Jitsu",
    desc: "Looking for Self-Defense Training in Tucson? Join Carlson Gracie Tucson for Jiu-Jitsu. Master practical skills for real-world encounters.",
    url: "/self-defense-tucson-jiu-jitsu",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/Frame-1321314753.png",
    date: "March 18, 2026"
  },
  {
    title: "Start Your Jiu-Jitsu Journey Today for Fitness and Self-Defense",
    desc: "Discover the ultimate fitness experience and master practical self-defense skills at Carlson Gracie Tucson.",
    url: "/start-jiu-jitsu-tucson-fitness-self-defense",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/SnapInsta.to_491268050_18005772002750365_346771231950353141_n_1080-1.jpg",
    date: "March 12, 2026"
  },
  {
    title: "How to Start Jiu Jitsu in Tucson: A Complete Beginner Guide",
    desc: "Overcome your fears and start your martial arts journey today. A complete guide for beginners to start BJJ safely and confidently.",
    url: "/how-to-start-jiu-jitsu-in-tucson-a-complete-beginner-guide",
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-24-at-14.11.48.webp",
    date: "February 10, 2026"
  }
];

export function Blogs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-24 border-t border-zinc-200" id="blogs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-black uppercase tracking-tighter mb-4 md:mb-0"
          >
            Our Blogs
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/blogs"
              className="inline-block bg-zinc-900 hover:bg-zinc-800 text-white font-bold uppercase tracking-wider px-6 py-3 rounded-sm transition-colors text-sm"
            >
              View All Blogs
            </Link>
          </motion.div>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden px-2 py-4" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-4">
              {blogs.map((blog, index) => {
                const isInternal = blog.url.startsWith('/');
                return (
                  <div 
                    className="flex-none min-w-0 pl-4 relative w-[100%] md:w-[50%] lg:w-[33.333%]" 
                    key={index}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="group flex flex-col bg-zinc-50 rounded-2xl overflow-hidden shadow-lg border border-zinc-200 hover:shadow-2xl transition-all hover:-translate-y-1 h-full"
                    >
                      {isInternal ? (
                        <Link to={blog.url} className="flex flex-col h-full">
                          <BlogCardContent blog={blog} />
                        </Link>
                      ) : (
                        <a href={blog.url} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                          <BlogCardContent blog={blog} />
                        </a>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <button
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50 shadow-md transition-colors z-10 disabled:opacity-50"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50 shadow-md transition-colors z-10 disabled:opacity-50"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

function BlogCardContent({ blog }: { blog: typeof blogs[0] }) {
  return (
    <>
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
    </>
  );
}

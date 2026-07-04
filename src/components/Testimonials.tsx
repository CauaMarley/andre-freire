import { useState, useCallback, useEffect } from 'react';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    id: "1",
    name: "Steve",
    time: "1 year ago",
    text: "My daughter and i have been attending classes here for almost a year and have never had a bad experience. Great people, Great teacher's, awesome place.",
    rating: 5,
    initial: "S",
    color: "bg-red-700"
  },
  {
    id: "2",
    name: "Elisabeth Z",
    time: "1 year ago",
    text: "Cannot say enough amazing things about Carlson Gracie. Fantastic instructor-to-children ratio in the classes and excellent training from Professor Andre & team. 10 out of 10 would recommend!!",
    rating: 5,
    initial: "E",
    color: "bg-blue-600"
  },
  {
    id: "3",
    name: "k a",
    time: "1 year ago",
    text: "Mis hijos y yo Escogimos Carlson Gracie Tucson porque el Profesor André inspira, alienta a los alumnos a dar lo mejor y es un excelente maestro y competidor.\nLas instalaciones, el equipo, los coaches y profesores son de primer nivel. Lo recomiendo 100% para Todas las edades.",
    rating: 5,
    initial: "K",
    color: "bg-zinc-500"
  },
  {
    id: "4",
    name: "jorge juarez",
    time: "1 year ago",
    text: "Professor André had taught me so much in the 2.5 years I’ve been able to learn under his tutelage. He is committed to his students and their growth, and has a phenomenal adult and children’s program. I’d recommend this dojo to anyone.",
    rating: 5,
    initial: "j",
    color: "bg-amber-900"
  },
  {
    id: "5",
    name: "jaron dahlberg",
    time: "1 year ago",
    text: "Exceptional Jiu Jitsu Gym with Outstanding Coaches!\n\nMy son has been training at Carlson Gracie Tucson since October 2023, and I couldn’t be more impressed with the level of care, structure, and dedication the instructors bring to every class. From day one, the coaches have shown an incredible ability to balance discipline with encouragement, creating an environment where students not only grow in skill but also in confidence and character.\n\nThe structured curriculum ensures that each student progresses at a steady pace, with personalized attention that makes every lesson impactful. The coaches truly invest in their students, taking the time to correct techniques, build strong fundamentals, and instill important values like respect, perseverance, and teamwork.\n\nWhether your child is new to Jiu Jitsu or looking to refine their skills, this gym provides an excellent foundation both on and off the mat. Highly recommend!",
    rating: 5,
    initial: "j",
    color: "bg-emerald-900"
  },
  {
    id: "6",
    name: "Dee Maloney",
    time: "1 year ago",
    text: "Amazing jiu jitsu gym! I’ve tried many in Tucson for my boys and this club is leaps and bounds ahead of the competition. It’s organized, clean, well staffed, and has a good family like atmosphere.\nThe coaches are very attentive and involved.\nMust try if you’re considering.",
    rating: 5,
    initial: "D",
    color: "bg-blue-300"
  },
  {
    id: "7",
    name: "J Crate",
    time: "1 year ago",
    text: "My daughter ( Barbara) aka Pokémon is a one stripe blue belt and to see the continued growth of my daughter not only in the physical sense but in the mental sense she has been inspiring and I have two black belts to thank so thank you Andre and Eliezer. Amazing school!",
    rating: 5,
    initial: "J",
    color: "bg-slate-500"
  },
  {
    id: "8",
    name: "Roxanne Harper",
    time: "1 year ago",
    text: "My son has been attending Carlson Gracie since their grand opening! He absolutely loves it. He has made friends that have become like family and his confidence has grown so much! He has matured and has learned self defense and discipline.\nProfessor Andre is amazing and all coaches are very knowledgeable in teaching techniques to everyone of all ages!\n\nCarlson Gracie Tucson is a family friendly environment! We highly recommend this place a 10/10!!!",
    rating: 5,
    initial: "R",
    color: "bg-indigo-900"
  },
  {
    id: "9",
    name: "O G",
    time: "1 year ago",
    text: "This place has been amazing for my daughter. She has been going for almost a year and feels really at home. The coaches are amazing they really take the time to explain everything in a way the kids understand and can learn from. My daughters confidence is growing and so is her patience. They are disciplined but still keep it fun and engage even the littlest kids. The coaches are attentive and patient with new students to help them learn in a welcoming environment. We have felt welcome since day 1.\nThe facility is really clean, well maintained and organized. Class schedules are very consistent and always run on time. I would strongly recommend anyone interested in Jiujitsu to join.",
    rating: 5,
    initial: "O",
    color: "bg-teal-700"
  },
  {
    id: "10",
    name: "Candace Downard",
    time: "1 year ago",
    text: "Unlock your full potential at Carlson Gracie Tucson Jujitsu and Muay Thai, a premier martial arts institution that has been a transformative experience for my husband and 2 children. The staff and coaches are exceptional. You won't find a better children's program in Tucson. They consistently maintain exceptional coach to student ratios in class. The adult programs offer a competitive atmosphere while also featuring an executive program (40+) for those still wishing to train at a slower pace. The staff and coaches have become an integral part of our family and I cannot imagine not having Carlson Gracie Tucson in our life.",
    rating: 5,
    initial: "C",
    color: "bg-orange-800"
  }
];

export function Testimonials() {
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
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

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

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-10 h-10 md:w-16 md:h-16 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h3 className="text-2xl md:text-3xl font-medium text-black mb-2">
            People Love Learning Jiu-Jitsu With Carlson Gracie
          </h3>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden px-2 py-4" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-4 items-stretch">
              {testimonials.map((testimonial, index) => {
                const isExpanded = expandedItems[testimonial.id];
                const shouldTruncate = testimonial.text.length > 150;
                
                return (
                  <div 
                    className="flex-none min-w-0 pl-4 relative w-[100%] md:w-[50%] lg:w-[33.333%]" 
                    key={testimonial.id}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-zinc-100 h-full flex flex-col"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center font-bold text-white text-xl`}>
                            {testimonial.initial}
                          </div>
                          <div>
                            <h4 className="text-black font-bold text-base">{testimonial.name}</h4>
                            <span className="text-zinc-500 text-sm">{testimonial.time}</span>
                          </div>
                        </div>
                        
                        {/* Google G icon SVG */}
                        <div className="w-6 h-6">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="flex gap-0.5 mb-4 items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        <CheckCircle2 className="w-4 h-4 text-blue-500 ml-1 fill-blue-500 stroke-white" />
                      </div>
                      
                      <div className="text-black text-base leading-relaxed mb-4 flex-1 whitespace-pre-wrap">
                        {isExpanded || !shouldTruncate 
                          ? testimonial.text 
                          : `${testimonial.text.slice(0, 150)}...`}
                      </div>
                      
                      {shouldTruncate && (
                        <button 
                          onClick={() => toggleExpand(testimonial.id)}
                          className="text-zinc-400 text-sm font-medium hover:text-zinc-600 transition-colors text-left w-max mt-auto"
                        >
                          {isExpanded ? 'Hide' : 'Read more'}
                        </button>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50 shadow-md transition-colors z-10 disabled:opacity-50"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50 shadow-md transition-colors z-10 disabled:opacity-50"
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

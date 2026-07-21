import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function SpecialOffers() {
  const offers = [
    {
      id: "womens",
      title: "CELEBRATE WOMEN´S",
      description: "Celebrate women at Carlson Gracie Tucson! We believe in the power and strength of every woman. To honor you, we are launching our exclusive Women Special. Come train jiu jitsu, learn essential self defense skills, and build unstoppable confidence on the mat. Join our amazing community of strong female warriors today. Discover your true potential and claim your offer!",
      image: "https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2026/03/promocao-mulheres_.webp",
      buttonText: "Schedule Today",
    },
    {
      id: "military",
      title: "MILITARY SPECIAL",
      description: "Attention Tucson military! Carlson Gracie Academy honors your courage. As a thank you for your service, we proudly launch our Military Special. Come train jiu jitsu, improve your self defense, and strengthen your mind. We have exclusive plans for active duty heroes and veterans. Come be part of our team. Show all your strength. Secure this incredible offer today!",
      image: "https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2026/03/Promocao-militares_.webp",
      buttonText: "Schedule Today",
    },
    {
      id: "free-trial",
      title: "FREE Trial Class",
      description: "Still not sure that BJJ is for you? Don't just take our word for it, experience Carlson Gracie Tucson for yourself. Sign up today and enjoy a free first class! Step on the mat, meet our welcoming instructors, and discover how martial arts can transform your life. No prior experience is needed to begin. Secure your spot right now!",
      image: "https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2026/03/free_trial_class.webp",
      buttonText: "Register Here",
    },
    {
      id: "free-gi",
      title: "Start your jiu jitsu journey today, and earn a free Gi.",
      description: "Take the first step towards transforming your life with Brazilian Jiu-Jitsu. Sign up for a membership today and we'll provide you with a high-quality, complimentary Gi to kickstart your training. Our expert instructors at Carlson Gracie Tucson are ready to guide you on your martial arts journey, helping you build strength, confidence, and discipline on and off the mat.",
      image: "https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/Frame-1321314761.png",
      buttonText: "Register Here",
    }
  ];

  return (
    <div className="bg-zinc-950 min-h-screen pt-24 pb-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4 block">Exclusive Deals</span>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter mb-6">
            Special <span className="text-red-600">Offers</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl">
            Start your martial arts journey today with our exclusive promotions. 
            There has never been a better time to join the Carlson Gracie Tucson family.
          </p>
        </motion.div>
      </div>

      {/* Offers List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col lg:flex-row gap-10 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border-l-4 border-red-600 bg-zinc-900 shadow-[0_0_30px_rgba(220,38,38,0.15)] group">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-wide border-b border-zinc-800 pb-4 inline-block">
                {offer.title}
              </h2>
              <div className="text-zinc-300 text-lg leading-relaxed space-y-4">
                <p>{offer.description}</p>
              </div>
              <div className="pt-4">
                <Link to="/contact" className="inline-block bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded uppercase font-bold tracking-wider transition-colors shadow-lg hover:-translate-y-1">
                  {offer.buttonText}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

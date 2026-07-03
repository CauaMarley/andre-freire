import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Check, Shield, Star, Calendar } from "lucide-react";

export function SpecialOffers() {
  const offers = [
    {
      id: "first-month",
      title: "First Month FREE!",
      description: "We will pay for your 1st month of Jiu jitsu classes with your upfront purchase of a uniform (Gi and Rash Guard) and a 2-month membership commitment after the free month.",
      features: [
        "First month completely FREE",
        "NO registration fee (extra incentive!)",
        "Includes access to all fundamental classes",
        "Start your journey with professional gear"
      ],
      icon: Star,
      popular: true
    },
    {
      id: "military",
      title: "Military Special",
      description: "Attention Tucson military! As a thank you for your service, we have exclusive plans for active duty heroes and veterans. Improve your self-defense and strengthen your mind.",
      features: [
        "Exclusive pricing for active duty & veterans",
        "Join a team of disciplined warriors",
        "Build mental and physical resilience",
        "Flexible training schedules"
      ],
      icon: Shield,
      popular: false
    },
    {
      id: "womens",
      title: "Women's Special",
      description: "We believe in the power and strength of every woman. Come train jiu-jitsu, learn essential self-defense skills, and build unstoppable confidence on the mat.",
      features: [
        "Learn essential self-defense skills",
        "Build unstoppable confidence",
        "Join an amazing community of strong women",
        "Supportive learning environment"
      ],
      icon: Check,
      popular: false
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

      {/* Free Trial Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-red-700 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-[0_0_40px_rgba(220,38,38,0.3)]"
        >
          <div className="absolute inset-0 bg-[url('https://carlsongracietucson.com/wp-content/uploads/2025/06/snapins-ai_3583484406528291350.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <div className="relative z-10">
            <Calendar className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight mb-4">
              Free First Class
            </h2>
            <p className="text-red-100 text-lg max-w-2xl mx-auto mb-8">
              Still not sure that BJJ is for you? Don't just take our word for it, experience Carlson Gracie Tucson for yourself. Step on the mat, meet our welcoming instructors, and discover how martial arts can transform your life. No prior experience needed!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-red-700 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-zinc-100 transition-colors shadow-lg hover:scale-105 active:scale-95"
            >
              Schedule Today
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Pricing/Offers Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`relative flex flex-col p-8 rounded-2xl border ${
                  offer.popular 
                    ? "bg-zinc-900 border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.15)] md:-mt-8 md:mb-8" 
                    : "bg-zinc-900/50 border-zinc-800"
                }`}
              >
                {offer.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${offer.popular ? 'bg-red-600/20 text-red-500' : 'bg-zinc-800 text-zinc-400'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide mb-3">
                    {offer.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed min-h-[80px]">
                    {offer.description}
                  </p>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {offer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 shrink-0 ${offer.popular ? 'text-red-500' : 'text-zinc-500'}`} />
                        <span className="text-zinc-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className={`block w-full text-center px-6 py-3 rounded-md font-bold uppercase tracking-wider transition-all ${
                    offer.popular
                      ? "bg-red-700 hover:bg-red-600 text-white shadow-lg"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white"
                  }`}
                >
                  Claim Offer
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function ThankYou() {
  useEffect(() => {
    // Fire the Google Ads conversion tracking snippet
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {'send_to': 'AW-16468866093/4uQaCK7Dg9QaEK3o-6w9'});
    }
  }, []);

  return (
    <div className="pt-24 pb-24 min-h-screen bg-zinc-950 flex flex-col items-center justify-center border-t border-zinc-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <img 
          src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2026/05/logo-sem-fundo.png" 
          alt="Carlson Gracie Logo" 
          className="w-40 h-40 mx-auto mb-8 object-contain"
        />
        <h1 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-6 leading-tight">
          Thank You!<br/>
          <span className="text-red-600">Your Request Has Been Received</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          We have received your request for a free trial class. Our team will contact you shortly to confirm your spot.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/" 
            className="w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white font-bold py-4 px-8 rounded uppercase tracking-wider transition-all"
          >
            Return to Home
          </Link>
          <Link 
            to="/schedule" 
            className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-bold py-4 px-8 rounded uppercase tracking-wider transition-all"
          >
            View Schedule
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

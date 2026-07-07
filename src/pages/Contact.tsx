import { motion } from "motion/react";
import { Booking } from "../components/Booking";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Contact() {
  return (
    <div className="pt-24 pb-12 bg-zinc-950 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-6">
          Contact <span className="text-red-600">Us</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Have questions or want to try a free class? Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </motion.div>

      <Booking />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-12 border-t border-zinc-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-tighter mb-4">
            Visit Our <span className="text-red-600">Academies</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Better yet, see us in person! We love our students, so feel free to visit during normal business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 flex flex-col items-center text-center space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 w-full h-1 bg-red-600"></div>
            
            <img 
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/SnapInsta.to_467954322_18470802808018850_5966120767544216934_n.jpg" 
              alt="Marcio Cruz Logo" 
              className="h-24 w-auto object-contain mb-2 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            />
            
            <div>
              <h3 className="text-2xl font-bold text-white uppercase font-heading tracking-wide">Carlson Gracie Tucson</h3>
              <p className="text-red-500 font-bold tracking-widest text-sm uppercase mt-1">Main Academy</p>
            </div>

            <div className="space-y-4 text-zinc-300 w-full">
              <a href="tel:5208495246" className="flex items-center justify-center gap-3 hover:text-red-500 transition-colors bg-zinc-950 py-3 px-4 rounded-lg border border-zinc-800">
                <Phone className="w-5 h-5 text-red-600" />
                <span className="font-medium">(520) 849-5246</span>
              </a>
              <a href="mailto:carlsongracietucson@gmail.com" className="flex items-center justify-center gap-3 hover:text-red-500 transition-colors bg-zinc-950 py-3 px-4 rounded-lg border border-zinc-800">
                <Mail className="w-5 h-5 text-red-600" />
                <span className="font-medium truncate max-w-[200px] sm:max-w-full">carlsongracietucson@gmail.com</span>
              </a>
              <a href="https://maps.google.com/?q=8822+East+Broadway+Boulevard,+Tucson,+AZ+85710" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 hover:text-red-500 transition-colors bg-zinc-950 py-3 px-4 rounded-lg border border-zinc-800">
                <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                <span className="font-medium">8822 East Broadway Blvd, Tucson, AZ 85710</span>
              </a>
            </div>
            
            <div className="pt-4 border-t border-zinc-800 w-full text-center">
              <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex items-center justify-center gap-6 text-zinc-400">
                <a href="https://www.instagram.com/carlsongracietucson/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://web.facebook.com/carlsongracietucson" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* North Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 flex flex-col items-center text-center space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 w-full h-1 bg-zinc-600"></div>

            <img 
              src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2025/05/team_0143.jpg" 
              alt="Carlson Gracie North" 
              className="h-24 w-auto object-contain mb-2 rounded-lg opacity-90"
            />
            
            <div>
              <h3 className="text-2xl font-bold text-white uppercase font-heading tracking-wide">Carlson Gracie North Tucson</h3>
              <p className="text-zinc-400 font-bold tracking-widest text-sm uppercase mt-1">North Academy</p>
            </div>

            <div className="space-y-4 text-zinc-300 w-full">
              <a href="tel:5208017821" className="flex items-center justify-center gap-3 hover:text-red-500 transition-colors bg-zinc-950 py-3 px-4 rounded-lg border border-zinc-800">
                <Phone className="w-5 h-5 text-red-600" />
                <span className="font-medium">(520) 801-7821</span>
              </a>
              <a href="https://maps.google.com/?q=1749+E+Prince+Rd,+Tucson,+AZ+85719" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 hover:text-red-500 transition-colors bg-zinc-950 py-3 px-4 rounded-lg border border-zinc-800">
                <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                <span className="font-medium">1749 E Prince Rd, Tucson, AZ 85719</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

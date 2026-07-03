import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 pt-16 pb-8 text-zinc-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="font-heading font-bold text-2xl uppercase tracking-wider mb-6 text-black">Menu</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-zinc-600 hover:text-red-600 transition-colors uppercase text-sm tracking-wide">Home</Link></li>
              <li><Link to="/#programs" className="text-zinc-600 hover:text-red-600 transition-colors uppercase text-sm tracking-wide border-t border-zinc-100 pt-3 block">Programs</Link></li>
              <li><Link to="/schedule" className="text-zinc-600 hover:text-red-600 transition-colors uppercase text-sm tracking-wide border-t border-zinc-100 pt-3 block">Schedule</Link></li>
              <li><Link to="/contact" className="text-zinc-600 hover:text-red-600 transition-colors uppercase text-sm tracking-wide border-t border-zinc-100 pt-3 block">Contact Us</Link></li>
              <li><Link to="/our-school" className="text-zinc-600 hover:text-red-600 transition-colors uppercase text-sm tracking-wide border-t border-zinc-100 pt-3 block">About Us</Link></li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative md:border-l md:border-r border-zinc-200 md:px-8"
          >
            {/* Design detail from screenshot */}
            <div className="absolute top-0 left-8 bg-zinc-700 text-white text-xs text-center p-3 w-32 hidden lg:block -mt-10">
              CARLSON GRACIE NORTH TUCSON
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-700 rotate-45"></div>
            </div>

            <h4 className="font-heading font-bold text-2xl uppercase tracking-wider mb-6 text-black">Contact Us</h4>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-zinc-800 font-medium">
                <Phone className="w-5 h-5 text-black" />
                <span>520-849-5246</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-800 font-medium">
                <Mail className="w-5 h-5 text-black" />
                <span>carlsongracietucson@gmail.com</span>
              </div>
              <a 
                href="https://maps.app.goo.gl/5R7sB3Zy7jNxXNf87"
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-start gap-3 text-zinc-800 font-medium hover:text-red-600 transition-colors group"
              >
                <MapPin className="w-5 h-5 text-black mt-1 group-hover:text-red-600 transition-colors" />
                <span>
                  8822 East Broadway<br />
                  Boulevard, Tucson, AZ<br />
                  85710
                </span>
              </a>
            </div>

            <div className="mt-8 text-sm text-zinc-500">
              <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a> / <a href="#" className="hover:text-red-600 transition-colors">Terms of Service</a>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tighter mb-4 text-black leading-tight">
              Ready to get going? Contact us today!
            </h4>
            <p className="text-zinc-800 font-bold mb-2">Better yet, see us in person!</p>
            <p className="text-zinc-600 mb-6">
              We love our customers, so feel free to visit during normal business hours.
            </p>
          </motion.div>

        </div>
      </div>
    </footer>
  );
}

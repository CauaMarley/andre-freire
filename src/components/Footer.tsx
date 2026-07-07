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
              <li><Link to="/programs" className="text-zinc-600 hover:text-red-600 transition-colors uppercase text-sm tracking-wide border-t border-zinc-100 pt-3 block">Programs</Link></li>
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
            <h4 className="font-heading font-bold text-2xl uppercase tracking-wider mb-6 text-black">Contact Us</h4>
            
            <div className="space-y-6">
              <div>
                <h5 className="font-bold text-red-600 uppercase text-sm mb-2">Carlson Gracie Tucson</h5>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-zinc-800 font-medium text-sm">
                    <Phone className="w-4 h-4 text-black" />
                    <span>520-849-5246</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-800 font-medium text-sm">
                    <Mail className="w-4 h-4 text-black" />
                    <span className="truncate break-all">carlsongracietucson@gmail.com</span>
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/5R7sB3Zy7jNxXNf87"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-start gap-3 text-zinc-800 font-medium hover:text-red-600 transition-colors group text-sm"
                  >
                    <MapPin className="w-4 h-4 text-black mt-1 group-hover:text-red-600 transition-colors shrink-0" />
                    <span>
                      8822 East Broadway Blvd,<br />
                      Tucson, AZ 85710
                    </span>
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200">
                <h5 className="font-bold text-red-600 uppercase text-sm mb-2">Carlson Gracie North Tucson</h5>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-zinc-800 font-medium text-sm">
                    <Phone className="w-4 h-4 text-black" />
                    <span>520-801-7821</span>
                  </div>
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-start gap-3 text-zinc-800 font-medium hover:text-red-600 transition-colors group text-sm"
                  >
                    <MapPin className="w-4 h-4 text-black mt-1 group-hover:text-red-600 transition-colors shrink-0" />
                    <span>
                      1749 E Prince Rd,<br />
                      Tucson, AZ 85719
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 text-sm text-zinc-500">
              <Link to="/privacy-policy" className="hover:text-red-600 transition-colors">Privacy Policy</Link> / <Link to="/terms-of-service" className="hover:text-red-600 transition-colors">Terms of Service</Link>
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

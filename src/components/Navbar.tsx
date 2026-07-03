import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: { name: string; href: string; subLinks?: { name: string; href: string }[] }[] = [
    {
      name: "Programs",
      href: "/programs",
    },
    { name: "Special Offers", href: "/special-offers" },
    { name: "Our School", href: "/our-school" },
    { name: "Instructors", href: "/instructors" },
    { name: "Schedule", href: "/schedule" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:flex bg-zinc-900 border-b border-zinc-800 text-zinc-300 py-2 px-4 sm:px-6 lg:px-8 justify-end items-center gap-6 text-sm font-medium z-50 relative">
        <a href="tel:520-849-5246" className="flex items-center gap-2 hover:text-white transition-colors">
          <Phone className="w-4 h-4 text-red-600" />
          520-849-5246
        </a>
        <a href="mailto:carlsongracietucson@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
          <Mail className="w-4 h-4 text-red-600" />
          carlsongracietucson@gmail.com
        </a>
      </div>

      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 top-0 py-2"
            : "bg-transparent md:top-[36px] top-0 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center p-1">
                  <img src="https://cgnorthtucson.com/wp-content/uploads/2026/05/logo-sem-fundo.png" alt="Carlson Gracie Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-xl tracking-wider uppercase text-white leading-tight">
                    Carlson Gracie
                  </span>
                  <span className="text-red-600 text-sm font-bold tracking-widest uppercase leading-tight border-t border-zinc-800 pt-0.5">
                    Tucson
                  </span>
                </div>
              </Link>
            </div>
            
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-6">
                {navLinks.map((link) => (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={link.href}
                      className="flex items-center gap-1 text-zinc-300 hover:text-white transition-colors px-3 py-2 text-sm font-semibold uppercase tracking-wider"
                    >
                      {link.name}
                      {link.subLinks && (
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      )}
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {link.subLinks && (
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5 overflow-hidden"
                          >
                            <div className="py-1 flex flex-col" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                              {link.subLinks.map((subLink) => (
                                <a
                                  key={subLink.name}
                                  href={subLink.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block px-4 py-3 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors border-b border-zinc-800/50 last:border-0"
                                  role="menuitem"
                                >
                                  {subLink.name}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
                <Link
                  to="/contact"
                  className="bg-red-700 hover:bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:scale-105 active:scale-95"
                >
                  Try Class
                </Link>
              </div>
            </div>
            
            <div className="lg:hidden flex items-center space-x-2">
              <Link
                to="/contact"
                className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_10px_rgba(220,38,38,0.3)]"
              >
                Try Class
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-zinc-300 hover:text-white p-2"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden bg-zinc-900 border-b border-zinc-800 absolute w-full left-0 top-full max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col">
                    <Link
                      to={link.href}
                      onClick={() => !link.subLinks && setIsOpen(false)}
                      className="text-zinc-300 hover:text-white flex items-center justify-between px-3 py-3 rounded-md text-base font-bold uppercase tracking-wider"
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <div className="pl-6 flex flex-col space-y-2 mb-2 border-l-2 border-zinc-800 ml-4">
                        {link.subLinks.map((subLink) => (
                          <a
                            key={subLink.name}
                            href={subLink.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="text-zinc-400 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {subLink.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 pb-2 border-t border-zinc-800 flex flex-col gap-4">
                  <a href="tel:520-849-5246" className="flex items-center gap-3 text-zinc-400 px-3">
                    <Phone className="w-5 h-5 text-red-600" />
                    520-849-5246
                  </a>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center block mt-2 bg-red-700 hover:bg-red-600 text-white px-5 py-4 rounded-md text-base font-bold uppercase tracking-wider transition-colors"
                  >
                    Try Free Class
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function Booking() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xykqbnkb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <section id="contact" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-red-600 font-medium text-2xl mb-2">Carlson Gracie Tucson</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 border-b border-red-600 pb-6 inline-block">
              Your Journey Starts Today
            </h3>
            
            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed mt-4">
              <p>
                "If you're ready to transform your fitness, confidence, and mindset, you've come to the right place. At Carlson Gracie Tucson, we believe everyone has the potential to succeed. Our Brazilian Jiu-Jitsu program strengthen your body, sharpen your mind, and teach real, effective self-defense.
              </p>
              <p>
                Whether your goal is fitness, discipline, competition, or personal growth, our academy will guide you every step of the way. Start your journey today and experience the difference."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl shadow-2xl relative"
          >
            {/* Top red accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-red-600 rounded-t-xl"></div>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 flex items-center justify-center p-1 mx-auto mb-4">
                <img src="https://cgnorthtucson.com/wp-content/uploads/2026/05/logo-sem-fundo.png" alt="Carlson Gracie Logo" className="w-full h-full object-contain" />
              </div>
              <h4 className="text-2xl font-heading font-bold text-white uppercase tracking-wider mb-2">Book Your Free Class</h4>
              <p className="text-zinc-500 text-sm">No experience needed. First class on us.</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit} method="POST" action="https://formspree.io/f/xykqbnkb">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-red-600/20 text-red-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2 font-heading uppercase">Request Sent!</h4>
                    <p className="text-zinc-400 max-w-sm">Thank you. The Carlson Gracie Tucson team will contact you shortly to schedule your free class.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="firstName" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1.5">First Name *</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1.5">Last Name *</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1.5">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                        placeholder="john@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1.5">Phone *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                        placeholder="(520) 000-0000"
                      />
                    </div>

                    <div>
                      <label htmlFor="program" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1.5">Program of Interest *</label>
                      <select
                        id="program"
                        name="program"
                        required
                        className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors appearance-none"
                      >
                        <option value="">Select</option>
                        <option value="fundamentals">Adult Fundamentals</option>
                        <option value="advanced">Advanced BJJ</option>
                        <option value="kids">Kids & Teens Program</option>
                      </select>
                    </div>

                    <div className="flex items-start gap-3 mt-4 bg-zinc-950/50 p-4 rounded border border-zinc-800">
                      <input type="checkbox" id="sms" name="smsConsent" required className="mt-1 shrink-0 accent-red-600" />
                      <label htmlFor="sms" className="text-xs text-zinc-500 leading-relaxed">
                        By opting in to SMS, I agree to receive announcements and billing alerts from Carlson Gracie Tucson. Standard messaging rates may apply. Reply STOP to opt out.
                      </label>
                    </div>

                    {status === "error" && (
                      <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again.</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-red-700 hover:bg-red-600 text-white font-bold uppercase tracking-wider py-4 rounded transition-all mt-4 disabled:opacity-50 disabled:hover:bg-red-700"
                    >
                      {status === "submitting" ? "Sending..." : "Request My Free Class →"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

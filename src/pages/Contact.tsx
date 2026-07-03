import { motion } from "motion/react";
import { Booking } from "../components/Booking";

export function Contact() {
  return (
    <div className="pt-24 pb-12">
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
    </div>
  );
}

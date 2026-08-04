import { motion } from "motion/react";
import { ScheduleGrid } from "../components/ScheduleGrid";

export function Schedule() {
  return (
    <div className="pt-24 pb-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-6">
            Class <span className="text-red-600">Schedule</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Flexible schedules with classes offered on a variety of days and times! You are sure to find a class that works for you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full flex flex-col items-center max-w-6xl mx-auto"
        >
          <ScheduleGrid />
        </motion.div>
      </div>
    </div>
  );
}

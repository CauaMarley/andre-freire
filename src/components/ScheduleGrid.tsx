import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';

const scheduleData = [
  {
    day: "Monday",
    classes: [
      { time: "6:00 AM", name: "Adults & Teens", details: "All Levels (Gi)", tag: "" },
      { time: "11:30 AM", name: "Teens & Adults", details: "All Levels (Gi Class)", tag: "" },
      { time: "4:00 PM", name: "Baby Bulldogs", details: "3 - 4 Years Old (Gi)", tag: "" },
      { time: "4:30 PM", name: "Little Bulldogs", details: "4 - 7 Years Old (Gi)", tag: "" },
      { time: "5:30 PM", name: "Bulldogs", details: "8 - 13 Years Old (Gi)", tag: "" },
      { time: "6:30 PM", name: "Adults No-Gi Class", details: "All Levels (No Gi)", tag: "" },
    ]
  },
  {
    day: "Tuesday",
    classes: [
      { time: "4:30 PM", name: "Little Bulldogs & Bulldogs Fundamental", details: "4 - 13 Years Old (Gi)", tag: "" },
      { time: "5:30 PM", name: "Bulldogs Advanced", details: "Invitation Only\n7 - 13 Years Old (Gi)", tag: "" },
      { time: "5:30 PM", name: "Women Only", details: "(Gi)", tag: "" },
      { time: "6:30 PM", name: "Adults & Teens", details: "Fundamental (Gi)", tag: "" },
      { time: "6:30 PM", name: "Advanced / Competition", details: "Adults & Teen (Gi)", tag: "" },
    ]
  },
  {
    day: "Wednesday",
    classes: [
      { time: "6:00 AM", name: "Adults & Teens", details: "All Levels (Gi)", tag: "" },
      { time: "11:30 AM", name: "Teens & Adults", details: "All Levels (Gi Class)", tag: "" },
      { time: "4:00 PM", name: "Baby Bulldogs", details: "3 - 4 Years Old (Gi)", tag: "" },
      { time: "4:30 PM", name: "Little Bulldogs", details: "4 - 7 Years Old (No Gi)", tag: "" },
      { time: "5:30 PM", name: "Bulldogs", details: "8 - 13 Years Old (No Gi)", tag: "" },
      { time: "6:30 PM", name: "Adults & Teens", details: "Executive Class (Gi)", tag: "" },
      { time: "6:30 PM", name: "Adults & Teens", details: "All Levels (No Gi)", tag: "" },
    ]
  },
  {
    day: "Thursday",
    classes: [
      { time: "4:30 PM", name: "Little Bulldogs & Bulldogs Fundamental", details: "4 - 13 Years Old (Gi)", tag: "" },
      { time: "5:30 PM", name: "Bulldogs Advanced", details: "Invitation Only\n7 - 13 Years Old (Gi)", tag: "" },
      { time: "5:30 PM", name: "Women Only", details: "(Gi)", tag: "" },
      { time: "6:30 PM", name: "Adults & Teens", details: "Fundamental (Gi)", tag: "" },
      { time: "6:30 PM", name: "Advanced / Competition", details: "Adults & Teen (Gi)", tag: "" },
    ]
  },
  {
    day: "Friday",
    classes: [
      { time: "6:00 AM", name: "Adults & Teens", details: "All Levels (No Gi)", tag: "★ NEW" },
      { time: "11:30 AM", name: "Teens & Adults", details: "All Levels (Gi Class)", tag: "" },
      { time: "5:30 PM", name: "Executive Class", details: "40 Years Old Plus (Gi)", tag: "" },
      { time: "5:30 PM", name: "Adults & Teens", details: "All Levels (No Gi)", tag: "" },
      { time: "6:30 PM", name: "Carlson Gracie Team Open Mat", details: "Gi & No Gi", tag: "" },
    ]
  },
  {
    day: "Saturday",
    classes: [
      { time: "10:00 AM", name: "Little Bulldogs & Bulldogs", details: "4 - 13 Years Old (Gi)", tag: "" },
      { time: "11:00 AM", name: "Adults & Teens", details: "All Levels (Gi)", tag: "" },
      { time: "12:00 PM", name: "Sparring", details: "", tag: "" },
    ]
  }
];

export function ScheduleGrid() {
  return (
    <div className="w-full flex flex-col items-center font-sans">
      {/* Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-6xl bg-red-700 text-white rounded-lg p-6 mb-8 text-left shadow-xl border border-red-600"
      >
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <AlertCircle className="w-8 h-8 shrink-0 mt-1 text-white" />
          <div>
            <h4 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-2 font-heading">
              📣 Schedule Changes – Effective August 10th
            </h4>
            <p className="text-red-50 leading-relaxed text-sm md:text-base font-medium">
              Due to the end of summer and the reduced number of assistant coaches available, we will be making a few schedule adjustments to ensure the best possible training experience and maintain class quality. Thank you for your understanding and continued support!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Schedule Table Container */}
      <div className="w-full max-w-6xl bg-white text-black shadow-2xl overflow-hidden border border-zinc-200">
        
        {/* Header (Logo + Title) */}
        <div className="flex flex-col items-center pt-10 pb-8 px-4">
          <img 
            src="https://lightcyan-jellyfish-205832.hostingersite.com/wp-content/uploads/2026/05/logo-sem-fundo.png" 
            alt="Carlson Gracie Logo" 
            className="w-32 h-32 object-contain mb-6 drop-shadow-xl"
          />
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter uppercase text-black text-center leading-none mb-3">
            Our Schedule
          </h2>
          <h3 className="text-xl md:text-2xl tracking-[0.2em] font-bold uppercase mt-2 text-black text-center">
            Carlson Gracie Tucson
          </h3>
        </div>

        {/* Desktop Grid (Hidden on Mobile) */}
        <div className="hidden lg:grid grid-cols-6 border-t-[8px] border-black bg-black gap-[2px] p-[2px]">
          {scheduleData.map((dayData, index) => (
            <div key={index} className="flex flex-col h-full bg-zinc-100">
              {/* Column Header */}
              <div className="bg-black text-white text-center py-4">
                <span className="font-bold tracking-widest text-sm uppercase">{dayData.day}</span>
              </div>
              
              {/* Classes */}
              <div className="flex flex-col divide-y-2 divide-zinc-100 flex-grow bg-zinc-100">
                {dayData.classes.map((cls, idx) => (
                  <div key={idx} className="p-4 bg-white flex-grow relative hover:bg-zinc-50 transition-colors">
                    {cls.tag && (
                      <span className="bg-black text-white text-[10px] font-bold px-2 py-0.5 absolute top-0 left-0 tracking-wider">
                        {cls.tag}
                      </span>
                    )}
                    <div className="font-black text-[13px] mb-1 mt-1 tracking-tight">{cls.time}</div>
                    <div className="font-bold text-[14px] leading-tight uppercase font-heading">{cls.name}</div>
                    <div className="text-[11px] font-bold text-zinc-500 mt-1 uppercase leading-tight whitespace-pre-line">{cls.details}</div>
                  </div>
                ))}
                <div className="flex-grow bg-white min-h-[100px]"></div> {/* empty space filler */}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View (Hidden on Desktop) */}
        <div className="lg:hidden flex flex-col border-t-8 border-black">
          {scheduleData.map((dayData, index) => (
            <div key={index} className="bg-white">
              <div className="bg-black text-white text-center py-4 sticky top-0 z-10 border-b-2 border-zinc-800">
                <span className="font-bold tracking-widest text-lg uppercase">{dayData.day}</span>
              </div>
              <div className="flex flex-col divide-y-2 divide-zinc-100 bg-zinc-100">
                {dayData.classes.length > 0 ? dayData.classes.map((cls, idx) => (
                  <div key={idx} className="p-5 relative bg-white hover:bg-zinc-50 transition-colors">
                    {cls.tag && (
                      <span className="bg-black text-white text-[10px] font-bold px-3 py-1 mb-3 inline-block tracking-wider uppercase">
                        {cls.tag}
                      </span>
                    )}
                    <div className="font-black text-sm mb-1">{cls.time}</div>
                    <div className="font-bold text-lg leading-tight uppercase font-heading">{cls.name}</div>
                    <div className="text-xs font-bold text-zinc-500 mt-1 uppercase whitespace-pre-line">{cls.details}</div>
                  </div>
                )) : (
                  <div className="p-8 text-center text-zinc-500 font-medium bg-white">No Classes Scheduled</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-black text-white flex flex-col sm:flex-row justify-center items-center gap-6 py-8 px-4 mt-auto">
          <a href="tel:5208495246" className="flex items-center gap-3 hover:text-red-500 transition-colors group">
            <span className="border-2 border-white group-hover:border-red-500 rounded-full w-12 h-12 flex items-center justify-center font-bold text-[10px] uppercase tracking-widest transition-colors">Tel</span>
            <span className="text-2xl md:text-3xl font-black font-heading tracking-tight">520-849-5246</span>
          </a>
          <a href="https://www.carlsongracietucson.com" className="flex items-center gap-3 hover:text-red-500 transition-colors group">
            <span className="border-2 border-white group-hover:border-red-500 rounded-full w-12 h-12 flex items-center justify-center font-bold text-[10px] uppercase tracking-widest transition-colors">Web</span>
            <span className="text-xl md:text-2xl font-black font-heading tracking-tight">CARLSONGRACIETUCSON.COM</span>
          </a>
        </div>
        
      </div>
    </div>
  );
}

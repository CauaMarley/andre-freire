import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ClassContent {
  title: string;
  items: string[];
}

interface WeekProps {
  number: number;
  title: string;
  class1: ClassContent[];
  class2: ClassContent[];
  specificTraining: string;
  coolDown: string;
}

export const CurriculumWeek: React.FC<{ week: WeekProps }> = ({ week }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-zinc-900 hover:bg-zinc-800 transition-colors"
      >
        <div className="flex items-center gap-4 text-left">
          <span className="text-red-600 font-bold uppercase tracking-wider text-sm md:text-base">
            Week {week.number}
          </span>
          <h4 className="text-white font-heading font-medium text-lg md:text-xl uppercase">
            {week.title}
          </h4>
        </div>
        <div className="text-zinc-500 shrink-0 ml-4">
          {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-zinc-800"
          >
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Class 1 */}
              <div>
                <h5 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4 pb-2 border-b border-zinc-800">
                  Class 1
                </h5>
                <div className="space-y-4">
                  {week.class1.map((section, idx) => (
                    <div key={idx}>
                      <h6 className="text-white text-xs font-bold uppercase tracking-wider mb-2">
                        {section.title}
                      </h6>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm">
                            <span className="text-red-600 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Class 2 */}
              <div>
                <h5 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4 pb-2 border-b border-zinc-800">
                  Class 2
                </h5>
                <div className="space-y-4">
                  {week.class2.map((section, idx) => (
                    <div key={idx}>
                      <h6 className="text-white text-xs font-bold uppercase tracking-wider mb-2">
                        {section.title}
                      </h6>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm">
                            <span className="text-red-600 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2">
              <div className="bg-zinc-950 p-4 rounded-lg flex flex-col sm:flex-row gap-4 justify-between border border-zinc-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-1">
                    Specific Training
                  </span>
                  <p className="text-zinc-300 text-sm">{week.specificTraining}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-1">
                    Cool Down
                  </span>
                  <p className="text-zinc-300 text-sm">{week.coolDown}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

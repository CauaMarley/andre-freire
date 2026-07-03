import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const programsData = [
  {
    id: "adults",
    title: "Adults (Curriculum)",
    description: "Our Fundamentals Program is designed for anyone who wants to learn Brazilian Jiu-Jitsu. This program is for everyone, regardless of your fitness level, age, or gender. The curriculum focuses on the core techniques and principles of BJJ, providing a solid foundation for your martial arts journey.",
    objectives: [
      "Learn the core fundamentals of Brazilian Jiu-Jitsu",
      "Improve overall fitness, strength, and flexibility",
      "Develop effective self-defense skills",
      "Understand the underlying concepts of leverage and body mechanics"
    ],
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/Captura-de-tela-2025-05-26-151641.png"
  },
  {
    id: "kids1",
    title: "Kids 01 (Bulldogs)",
    description: "The Bulldogs program is specifically designed for older children. We focus on building discipline, respect, and confidence while teaching the essential techniques of Brazilian Jiu-Jitsu in a safe and engaging environment.",
    objectives: [
      "Build unshakeable confidence and self-esteem",
      "Learn conflict resolution and anti-bullying techniques",
      "Improve coordination, balance, and agility",
      "Develop focus and discipline through structured classes"
    ],
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/Captura-de-tela-2025-05-26-151512.png"
  },
  {
    id: "kids2",
    title: "Kids 02 (Little Bulldogs)",
    description: "Our Little Bulldogs program is perfect for our youngest practitioners. We use games and fun activities to introduce basic martial arts concepts, helping them develop motor skills, listening skills, and social interaction.",
    objectives: [
      "Develop basic motor skills and body awareness",
      "Learn to follow instructions and improve listening skills",
      "Interact positively with other children in a team environment",
      "Have fun while getting introduced to physical fitness"
    ],
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/Captura-de-tela-2025-05-26-151512.png" // Reusing kids image
  },
  {
    id: "competition",
    title: "Competition Jiu-Jitsu",
    description: "For those looking to test their skills in tournaments, our Competition class offers advanced techniques, rigorous drilling, and intense sparring. This program prepares athletes physically and mentally for the demands of competitive BJJ.",
    objectives: [
      "Master advanced tournament-tested techniques",
      "Develop high-level conditioning and stamina",
      "Refine timing, strategy, and game planning",
      "Engage in high-intensity positional and live sparring"
    ],
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/Captura-de-tela-2025-05-26-151829.png"
  },
  {
    id: "womens",
    title: "Women's Only",
    description: "Our Women's Only class provides a supportive and empowering environment for women to learn Brazilian Jiu-Jitsu. Led by female instructors, this program covers self-defense, fitness, and sport BJJ techniques tailored for women.",
    objectives: [
      "Learn practical self-defense in a safe environment",
      "Build a supportive community with other female practitioners",
      "Empowerment through physical capability and fitness",
      "Master techniques focusing on leverage over strength"
    ],
    image: "https://carlsongracietucson.com/wp-content/uploads/2025/05/Captura-de-tela-2025-05-26-151727.png"
  }
];

export function Programs() {
  const [activeTab, setActiveTab] = useState(programsData[0].id);

  const activeProgram = programsData.find(p => p.id === activeTab) || programsData[0];

  return (
    <div className="pt-24 pb-24 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-6">
            Our <span className="text-red-600">Programs</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            Explore our comprehensive curriculum designed for every age and skill level. 
            From fundamental self-defense to high-level competition training, we have a place for you on the mats.
          </p>
        </motion.div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex justify-center mb-12 flex-wrap gap-2">
          {programsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab.id 
                  ? "text-white" 
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-red-700 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Mobile Dropdown (Alternative to tabs for small screens) */}
        <div className="md:hidden mb-12">
          <select 
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded-lg font-bold uppercase tracking-wider focus:ring-2 focus:ring-red-600 focus:outline-none"
          >
            {programsData.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.title}
              </option>
            ))}
          </select>
        </div>

        {/* Content Area */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-10 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProgram.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-white uppercase tracking-wide mb-4">
                    {activeProgram.title}
                  </h2>
                  <div className="w-20 h-1 bg-red-600 mb-6"></div>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    {activeProgram.description}
                  </p>
                </div>

                <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800/50">
                  <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="text-red-600">★</span> Program Objectives
                  </h3>
                  <ul className="space-y-3">
                    {activeProgram.objectives.map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-zinc-400">
                        <div className="mt-1 w-2 h-2 rounded-full bg-red-600 shrink-0" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-zinc-800 shadow-2xl">
                <div className="absolute inset-0 bg-black/20 z-10" />
                <img 
                  src={activeProgram.image} 
                  alt={activeProgram.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

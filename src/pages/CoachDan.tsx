import { motion } from "motion/react";
import { useMediaUrl } from "../utils/mediaStore";

export function CoachDan() {
  const danPortraitUrl = useMediaUrl('dan_portrait');
  const danBlackBeltUrl = useMediaUrl('dan_blackbelt');

  return (
    <main className="pt-24 bg-white text-zinc-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Header Title */}
        <div className="mb-12 border-b-2 border-red-600 inline-block pb-2">
          <h1 className="text-red-700 text-3xl md:text-4xl font-heading font-medium tracking-wide">
            Professor Dan Modrzejewski
          </h1>
          <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tight mt-1 text-zinc-900">
            Fundamental and Executive / Black Belt
          </h2>
        </div>

        {/* Biography Section with First Strategic Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              Dr. Dan Modrzejewski is a native of Tucson, Arizona. His initial martial arts training began in middle school where he participated in Kenpo Karate earning his brown belt, then moved to wrestling in high school and college. Dan has been involved with Jiu Jitsu for over 10 years and has been with Carlson Gracie Tucson since their opening. Today, as a Brazilian Jiu-Jitsu Black Belt, he coaches the Fundamental and Executive classes. Dan retired after 30 years in the Fire and Emergency Medical services industry.
            </p>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              He started in ambulance operations, then served as a flight paramedic and lastly in the fire service. He has an Associate’s Degree in Paramedicine, a Bachelor’s in Fire Service Management, and a Master’s in Fire Service Administration from Arizona State University. In 2017, Dan received his Doctorate in Social Science from Grand Canyon University, with his dissertation published in the Library of Congress.
            </p>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              Thank you,<br />
              <strong className="text-zinc-900">Dan Modrzejewski</strong>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl w-full flex items-center justify-center bg-zinc-100"
          >
            <img 
              src={danPortraitUrl || "https://i.imgur.com/WU2QoKR.jpeg"}
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== "https://i.imgur.com/WU2QoKR.jpeg") {
                  target.src = "https://i.imgur.com/WU2QoKR.jpeg";
                }
              }}
              alt="Professor Dan Modrzejewski Black Belt"
              className="w-full max-h-[650px] object-cover object-top"
            />
          </motion.div>
        </div>

        {/* Second Strategic Image: Black Belt Promotion Ceremony */}
        <div className="mb-24">
          <div className="mb-8 border-b border-zinc-200 pb-3">
            <h3 className="text-2xl md:text-3xl font-heading font-medium text-zinc-900">
              Black Belt Promotion
            </h3>
            <p className="text-zinc-600 text-sm mt-1">
              Professor Dan Modrzejewski awarded his Brazilian Jiu-Jitsu Black Belt by Professor André Freire.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl max-w-4xl mx-auto"
          >
            <img 
              src={danBlackBeltUrl || "https://i.imgur.com/WU2QoKR.jpeg"}
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== "https://i.imgur.com/WU2QoKR.jpeg") {
                  target.src = "https://i.imgur.com/WU2QoKR.jpeg";
                }
              }}
              alt="Professor Dan Modrzejewski Black Belt Promotion with Professor André Freire"
              className="w-full h-auto object-cover object-center"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export const ProfessorDan = CoachDan;

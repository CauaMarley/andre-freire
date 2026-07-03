import { motion } from "motion/react";

export function KidsJiuJitsu() {
  return (
    <main className="pt-24 bg-white text-zinc-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* First Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl h-[400px] lg:h-[500px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80" 
              alt="Kids Jiu Jitsu Training" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6 border-b-2 border-red-600 inline-block pb-2">
              <h1 className="text-red-700 text-2xl font-heading font-medium tracking-wide">
                Carlson Gracie Tucson
              </h1>
              <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tight mt-1 text-zinc-900">
                Kids Jiu-Jitsu
              </h2>
            </div>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              Brazilian Jiu-Jitsu (BJJ) isn't just for adults. In fact, it's the perfect activity for kids! This form of martial arts incorporates a lot of ground grappling and is based on automatic human responses. When it comes to self-defense, BJJ empowers a smaller individual to fight against a larger opponent. But the advantages don't stop there. BJJ helps kids gain confidence, learn discipline, focus their energy, foster respect for others, and be a part of a one-of-a-kind community full of future friends and mentors!
            </p>
          </motion.div>
        </div>

        {/* Second Title Section */}
        <div className="mb-8 border-b-2 border-red-600 inline-block pb-2 mt-8">
          <h2 className="text-red-700 text-2xl font-heading font-medium tracking-wide">
            Carlson Gracie Tucson
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-light tracking-tight mt-1 text-zinc-900">
            Your Journey Starts Today
          </h3>
        </div>

        {/* Overview Section */}
        <div className="mb-24 max-w-3xl">
          <h3 className="text-3xl font-heading font-medium mb-4">Overview</h3>
          <p className="text-lg text-zinc-700 mb-4">Carlson Gracie Tucson offers Jiu-Jitsu for all ages of children!</p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-zinc-800 font-medium">
            <li>Little Bulldogs: <span className="text-zinc-600 font-normal">4 to 7-year-olds</span> <a href="#" className="underline hover:text-red-600">(Download Curriculum)</a></li>
            <li>Bulldogs: <span className="text-zinc-600 font-normal">8 to 13-year-olds</span> <a href="#" className="underline hover:text-red-600">(Download Curriculum)</a></li>
          </ul>
        </div>

        {/* Improves Self-Confidence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-3xl font-heading font-medium mb-4">Improves Self-Confidence</h3>
            <p className="text-lg text-zinc-700 leading-relaxed">
              We get it, being a kid isn't always easy! Between homework, trying to make friends, and school bullies, there's a lot to deal with. At Carlson Gracie Tucson, we want to be a place of escape from all of those struggles. While the rest of the world may take a toll on your child's confidence, we're here to build it up. After watching hundreds of young martial artists go through our program, we have no doubt that practicing BJJ improves students' confidence in a way that no other activity can. BJJ pushes students out of their comfort zones – helping them acquire new skills, teaching them how to defend themselves and avoid conflict, and providing them with much-needed support and guidance. Students enter our Kids BJJ program as shy and insecure children and leave as outgoing and self-assured martial artists.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 rounded-[3rem] overflow-hidden shadow-2xl h-[400px] lg:h-[500px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80" 
              alt="Kids Jiu Jitsu Confidence" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Promotes Respect & Teaches Discipline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px] lg:h-[600px] sticky top-24"
          >
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" 
              alt="Kids Jiu Jitsu Respect" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-heading font-medium mb-4">Promotes Respect</h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
                The martial arts provide an advantage that no other sport can boast about – the value of respect. Respect for both oneself and others is embedded into everything martial arts does. At Carlson Gracie Tucson, students bow to their instructor at the beginning and ending of class, receive constructive feedback with a positive attitude, always try their hardest, and encourage their classmates and training partners.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-heading font-medium mb-4">Teaches Discipline</h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
                At Carlson Gracie Tucson, we believe that having fun and practicing discipline go hand in hand. To create amazing martial artists, we must teach them the importance of good behavior. So...how is discipline practiced in BJJ? Practicing discipline in our school is all about carefully following your instructor's directions, staying quiet during class, having a good attitude from the moment you enter our building, and taking accountability for your actions. After all, you can't perfect a technique if you're too busy talking to your friend!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-3xl font-heading font-medium mb-4">Instills Focus</h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
                A huge part of what makes BJJ so great is that it doesn't just strengthen the body, it strengthens the mind as well. Many parents worry that Jiu-Jitsu won't be the right fit for their child because he or she has a lot of energy. But this couldn't be further from the truth! At Carlson Gracie Tucson, we want our students to be energetic and excited when they come to class – our goal is simply to <em>focus</em> that energy. After a long day sitting at a desk, kids need a place to let loose. Our BJJ curriculum aims to take all that pent-up energy and direct it into throws, blows, and a wide variety of fun activities.
              </p>
            </motion.div>
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-2 border-red-600 rounded-3xl p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-medium mb-6 text-zinc-900">Try a Free Class Today!</h2>
          <a href="/#contact" className="inline-block bg-red-700 hover:bg-red-600 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-colors text-lg">
            TRY CLASS
          </a>
        </motion.div>

      </div>
    </main>
  );
}

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollSimpleReveal } from './ui/ScrollSimpleReveal';
import { NotificationCard } from './ui/NotificationCard';

const Bottlenecks = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const cardsExitY = useTransform(scrollYProgress, [0.9, 1], [0, -150]);
  const cardsExitOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  const titleOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative w-full bg-white">
      <div className="h-[300vh] w-full relative">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
           
           {/* TITLE */}
           <motion.div 
             style={{ opacity: titleOpacity, scale: titleScale }}
             className="text-center z-0 px-4 relative"
           >
              <h2 className="text-5xl md:text-7xl font-bold text-[#131313] tracking-tight leading-[0.95] mb-6">
                Eliminate the <br /> bottlenecks <br />
                <span className="text-[#D5312F]">that hold you back</span>
              </h2>
              <p className="text-gray-400 text-lg animate-pulse">
                Scroll to diagnose
              </p>
           </motion.div>

           {/* FLOATING CARDS */}
           <motion.div 
             style={{ y: cardsExitY, opacity: cardsExitOpacity }}
             className="absolute inset-0 w-full h-full pointer-events-none z-10 max-w-6xl mx-auto"
           >
             <div className="absolute top-[20%] left-4 md:left-10 lg:left-0 w-72 md:w-80">
               <ScrollSimpleReveal scrollYProgress={scrollYProgress} start={0.15}>
                 <NotificationCard text="Teams spend too much time on repetitive tasks." />
               </ScrollSimpleReveal>
             </div>

             <div className="absolute top-[28%] right-4 md:right-10 lg:right-0 w-72 md:w-80">
               <ScrollSimpleReveal scrollYProgress={scrollYProgress} start={0.30}>
                 <NotificationCard text="Leads slip away without consistent follow-up." />
               </ScrollSimpleReveal>
             </div>

             <div className="absolute bottom-[28%] left-4 md:left-20 lg:left-10 w-72 md:w-80">
               <ScrollSimpleReveal scrollYProgress={scrollYProgress} start={0.45}>
                 <NotificationCard text="Outdated workflows hurt customer experience." />
               </ScrollSimpleReveal>
             </div>

             <div className="absolute bottom-[20%] right-4 md:right-20 lg:right-10 w-72 md:w-80">
               <ScrollSimpleReveal scrollYProgress={scrollYProgress} start={0.60}>
                 <NotificationCard text="Scaling requires more people and higher costs." />
               </ScrollSimpleReveal>
             </div>
           </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Bottlenecks;

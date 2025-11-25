import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { PixelRezReveal } from './ui/PixelRezReveal';

// ---------------------------------------------------------------------------
// DATA
// ---------------------------------------------------------------------------
const testimonials = [
  {
    id: 1,
    quote: "Working with Sadewa was a game changer. They automated our processes, streamlined our CRM, and boosted our team’s productivity in no time!",
    author: "Rizki Anugrah",
    role: "PRODUCT MANAGER OF BLOCKHAUS",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "The AI agents they built for us handled 80% of our customer support queries instantly. It freed up our team to focus on complex issues.",
    author: "Sarah Jenkins",
    role: "CTO OF TECHFLOW",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "Implementation was smooth and the results were immediate. Our lead qualification process is now fully automated and 3x faster.",
    author: "David Chen",
    role: "HEAD OF SALES AT NEXUS",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  }
];

// ---------------------------------------------------------------------------
// CLEAN NAV BUTTON (Updated based on feedback)
// ---------------------------------------------------------------------------
const CleanNavButton = ({ onClick, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-14 h-14 bg-[#F0F0F0] flex items-center justify-center rounded-sm overflow-hidden group"
    >
      {/* Fill Layer */}
      <div className="absolute inset-0 bg-[#131313] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      
      {/* Icon */}
      <div className="relative z-10">
         <Icon 
           size={20} 
           className="text-[#131313] group-hover:text-white transition-colors duration-300" 
         />
      </div>
    </button>
  );
};

// ---------------------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------------------

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setActiveIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  };

  const current = testimonials[activeIndex];

  const contentVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "circOut"
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: "circIn"
      }
    })
  };

  return (
    <section className="py-32 bg-[#FAFAFA] border-t border-gray-100 w-full overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="max-w-5xl mx-auto">
          
          {/* INTRO ANIMATION */}
          <ScrollReveal mode="slide-right" className="mb-12 border-t border-gray-200 pt-8 inline-block w-full">
             <span className="text-gray-400 font-bold tracking-widest uppercase text-xs block mb-8">
               /TESTIMONIALS
             </span>
             
             {/* IDLE ANIMATION: Quote Icon floats gently */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="text-gray-200 mb-8"
             >
               <Quote size={64} fill="#E5E5E5" stroke="none" />
             </motion.div>
          </ScrollReveal>

          {/* CAROUSEL AREA (Text Transition) */}
          <div className="min-h-[300px] relative mb-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col gap-8"
              >
                <h3 className="text-3xl md:text-5xl font-medium text-[#131313] leading-tight">
                  "{current.quote}"
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* BOTTOM CONTROLS */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
             
             {/* Profile Section */}
             <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="relative">
                   {/* Pixel Reveal on Intro + Pulse Idle */}
                   <PixelRezReveal className="shrink-0 relative z-10">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden shadow-sm">
                         <AnimatePresence mode="wait" custom={direction}>
                           <motion.img 
                             key={current.image}
                             src={current.image} 
                             alt={current.author} 
                             className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                             initial={{ opacity: 0, scale: 1.2 }}
                             animate={{ opacity: 1, scale: 1 }}
                             exit={{ opacity: 0, scale: 0.8 }}
                             transition={{ duration: 0.4 }}
                           />
                         </AnimatePresence>
                      </div>
                   </PixelRezReveal>
                   
                   {/* Idle Pulse Ring */}
                   <motion.div 
                      animate={{ scale: [1, 1.1, 1], opacity: [0, 0.5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-lg border border-[#98fe00] z-0 pointer-events-none"
                   />
                </div>
                
                <div className="overflow-hidden">
                   <AnimatePresence mode="wait" custom={direction}>
                     <motion.div
                        key={current.author}
                        custom={direction}
                        variants={contentVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                     >
                        <h4 className="text-xl font-bold text-[#131313]">{current.author}</h4>
                        <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mt-1">{current.role}</p>
                     </motion.div>
                   </AnimatePresence>
                </div>
             </div>

             {/* Clean Nav Buttons */}
             <div className="flex gap-2 self-end md:self-center">
                <CleanNavButton onClick={() => paginate(-1)} icon={ArrowLeft} />
                <CleanNavButton onClick={() => paginate(1)} icon={ArrowRight} />
             </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
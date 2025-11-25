import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from './ui/ScrollReveal';
import { PixelRezReveal } from './ui/PixelRezReveal'; 
import MobileOurApproach from './MobileOurApproach'; 
// IMPORT ASSETS (User provided path: src/assets/img/our approches/)
// Please ensure these file names match your actual files
import img1 from '../assets/img/our_approaches/1.0.png';
import img2 from '../assets/img/our_approaches/2.0.png';
import img3 from '../assets/img/our_approaches/3.0.png';
import img4 from '../assets/img/our_approaches/4.1.png';

// ---------------------------------------------------------------------------
// STEP DATA
// ---------------------------------------------------------------------------
const steps = [
  {
    id: "01",
    title: "Discover",
    desc: "We start by digging deep, understanding your goals, audience, and challenges. This is where insights surface and opportunities take shape.",
    image: img1
  },
  {
    id: "02",
    title: "Plan",
    desc: "Next we map out a clear strategy, aligning AI solutions with your vision. Every step is designed to solve real problems and unlock growth.",
    image: img2
  },
  {
    id: "03",
    title: "Build",
    desc: "Then we bring ideas to life, developing custom AI agents and automations. Each solution is crafted to fit seamlessly into your workflow.",
    image: img3
  },
  {
    id: "04",
    title: "Scale",
    desc: "Finally we refine and expand, tracking results, improving performance, and scaling your AI systems as your business grows.",
    image: img4
  }
];

// ---------------------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------------------

const OurApproach = () => {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Update active step based on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newStep = latest < 0.25 ? 0 : latest < 0.50 ? 1 : latest < 0.75 ? 2 : 3;
    if (newStep !== activeStep) {
      setActiveStep(newStep);
    }
  });

  return (
    <section ref={containerRef} className="relative bg-white">
      
      {/* 1. SCROLL TRACK */}
      <div className="h-[400vh] w-full">
        
        {/* 2. STICKY VIEWPORT */}
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          {/* Wider container for better spacing */}
          <div className="container mx-auto px-6 md:px-12 h-full flex flex-col md:flex-row items-center gap-16 md:gap-24">

            {/* LEFT SIDE: NUMBER & TEXT (Scrolls Up Effect) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center h-full relative z-10">
               
               <div className="mb-16 pl-2">
                 <ScrollReveal mode="slide-right">
                   <span className="text-gray-400 font-bold tracking-widest uppercase text-xs block mb-4">
                     / OUR APPROACH
                   </span>
                 </ScrollReveal>
               </div>

               <div className="relative h-[400px] flex flex-col justify-center">
                 <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 100 }} // Enters from bottom
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -100 }}   // Exits to top
                      transition={{ duration: 0.6, ease: "circOut" }}
                      className="absolute w-full"
                    >
                       <div className="flex items-baseline gap-6 mb-6">
                          <span className="text-8xl font-bold text-gray-200 font-mono leading-none select-none">
                            /{steps[activeStep].id}
                          </span>
                       </div>
                       <h3 className="text-6xl font-bold text-[#131313] mb-8 leading-[1.1] tracking-tight">
                         {steps[activeStep].title}
                       </h3>
                       <p className="text-[#666666] text-xl leading-relaxed max-w-lg">
                         {steps[activeStep].desc}
                       </p>
                    </motion.div>
                 </AnimatePresence>
               </div>

               {/* Progress Dots */}
               <div className="flex gap-3 mt-12 pl-2">
                  {steps.map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ 
                        scale: i === activeStep ? 1.5 : 1,
                        backgroundColor: i === activeStep ? "#131313" : "#E5E5E5" 
                      }}
                      className="w-2 h-2 rounded-full transition-colors duration-300"
                    />
                  ))}
               </div>

            </div>

            {/* RIGHT SIDE: IMAGE (Pixel Animation) */}
            <div className="w-full md:w-1/2 h-full flex items-center justify-center relative">
               
               {/* Background Circle for Depth */}
               <div className="absolute w-[600px] h-[600px] border border-gray-100 rounded-full opacity-60 animate-[spin_120s_linear_infinite]" />

               {/* Image Container */}
               <div className="relative w-full h-[500px] flex items-center justify-center">
                 <AnimatePresence mode="wait">
                    {/* PixelRezReveal handles the pixelated load on each step change */}
                    <PixelRezReveal key={activeStep} className="w-full h-full flex items-center justify-center">
                        <motion.img
                          src={steps[activeStep].image}
                          alt={steps[activeStep].title}
                          className="w-auto h-full max-h-[450px] object-contain drop-shadow-2xl"
                          // Gentle float to keep it alive
                          animate={{ y: [-10, 10, -10] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </PixelRezReveal>
                 </AnimatePresence>
               </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default OurApproach;
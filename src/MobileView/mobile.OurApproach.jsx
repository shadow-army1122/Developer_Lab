import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { PixelRezReveal } from './ui/PixelRezReveal';

// Import assets directly here
import img1 from '../assets/img/our_approaches/1.png';
import img2 from '../assets/img/our_approaches/2.png';
import img3 from '../assets/img/our_approaches/3.png';
import img4 from '../assets/img/our_approaches/4.png';

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

const MobileOurApproach = () => {
  return (
    <div className="block md:hidden py-20 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <ScrollReveal mode="slide-right">
            <span className="text-[#D5312F] font-bold tracking-widest uppercase text-xs block mb-4">
              / OUR APPROACH
            </span>
            <h2 className="text-4xl font-bold text-[#131313] tracking-tight leading-tight">
               How we work
            </h2>
          </ScrollReveal>
        </div>

        {/* Vertical Steps List */}
        <div className="flex flex-col gap-20">
           {steps.map((step) => (
              <ScrollReveal key={step.id} mode="fade-up" className="flex flex-col gap-8">
                 
                 {/* Visual Card */}
                 <div className="relative w-full aspect-square bg-[#F9F9F9] rounded-[2.5rem] flex items-center justify-center overflow-hidden border border-gray-100 shadow-sm">
                    {/* Large Background Number */}
                    <span className="absolute -bottom-6 -left-2 text-[140px] font-bold text-white leading-none select-none z-0 pointer-events-none drop-shadow-sm">
                      /{step.id}
                    </span>
                    
                    {/* Image with Pixel Reveal */}
                    <div className="relative z-10 w-3/4 h-3/4 flex items-center justify-center">
                       <PixelRezReveal className="w-full h-full flex items-center justify-center">
                          <img 
                            src={step.image} 
                            alt={step.title} 
                            className="w-full h-full object-contain drop-shadow-2xl" 
                          />
                       </PixelRezReveal>
                    </div>
                 </div>

                 {/* Text Content */}
                 <div className="px-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold text-white bg-[#D5312F] px-3 py-1 rounded-full uppercase tracking-wider shadow-md shadow-[#D5312F]/30">
                        Step {step.id}
                      </span>
                      <div className="h-[1px] bg-gray-200 flex-1" />
                    </div>
                    <h3 className="text-4xl font-bold text-[#131313] mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#666666] text-lg leading-relaxed">
                      {step.desc}
                    </p>
                 </div>

              </ScrollReveal>
           ))}
        </div>

      </div>
    </div>
  );
};

export default MobileOurApproach;
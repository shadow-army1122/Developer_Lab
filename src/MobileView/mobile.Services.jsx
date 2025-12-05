import React from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { PixelRezReveal } from '../components/ui/PixelRezReveal';

// ---------------------------------------------------------------------------
// CSS GRAPHICS (Reused from Desktop)
// ---------------------------------------------------------------------------

const GraphicStrategy = () => (
  <div className="relative w-40 h-28 transform rotate-[-10deg] scale-90">
    <div className="absolute top-0 right-0 w-20 h-20 border-[12px] border-[#E0E0E0] rounded-[1.5rem] transform translate-x-3 -translate-y-3 z-0" />
    <div className="absolute top-3 right-3 w-20 h-20 border-[12px] border-[#D4D4D4] rounded-[1.5rem] z-10 bg-white" />
    <div className="absolute top-0 right-0 w-20 h-20 border-[12px] border-[#131313] rounded-[1.5rem] z-20" />
  </div>
);

const GraphicContent = () => (
  <div className="relative w-32 h-32 flex items-center justify-center">
    <div className="w-28 h-20 bg-white border-[1px] border-gray-200 rounded-2xl shadow-lg flex items-center justify-center transform -rotate-12 scale-90">
       <div className="w-0 h-0 border-l-[16px] border-l-[#131313] border-y-[10px] border-y-transparent ml-1" />
    </div>
  </div>
);

const GraphicAgent = () => (
  <div className="relative w-28 h-28 scale-90">
     <div className="absolute inset-0 bg-white border border-gray-200 rounded-[1.5rem] shadow-lg transform -rotate-6 flex items-center justify-center gap-2">
        <div className="w-2 h-2 bg-[#131313] rounded-full" />
        <div className="w-2 h-2 bg-gray-300 rounded-full" />
        <div className="w-2 h-2 bg-gray-300 rounded-full" />
     </div>
  </div>
);

const GraphicCRM = () => (
  <div className="relative w-32 h-32 flex items-center justify-center scale-90">
     <div className="absolute w-12 h-12 border-[6px] border-[#E5E5E5] rounded-full border-dashed" />
     <div className="absolute w-20 h-20 border-[6px] border-[#131313] rounded-full border-dotted" />
  </div>
);

const GraphicProcess = () => (
  <div className="relative w-32 h-28 flex items-center justify-center scale-90">
     <div className="w-20 h-20 border-[10px] border-[#E0E0E0] rounded-full border-t-[#131313] transform rotate-45" />
  </div>
);

const servicesData = [
  {
    title: "AI Strategy & Consulting",
    desc: "Get a clear roadmap on how AI can drive growth and efficiency.",
    Graphic: GraphicStrategy
  },
  {
    title: "AI Content Creation",
    desc: "Automate high-quality content production at scale.",
    Graphic: GraphicContent
  },
  {
    title: "AI Agent Development",
    desc: "Design custom AI agents to solve unique business challenges.",
    Graphic: GraphicAgent
  },
  {
    title: "CRM AI Automation",
    desc: "Automate customer interactions and follow-ups.",
    Graphic: GraphicCRM
  },
  {
    title: "AI Process Automation",
    desc: "Transform repetitive workflows into automated systems.",
    Graphic: GraphicProcess
  }
];

// ---------------------------------------------------------------------------
// MOBILE COMPONENT
// ---------------------------------------------------------------------------

export default function MobileServices() {
  return (
    <div className="block md:hidden py-20 bg-white px-6">
       
       {/* Header */}
       <div className="mb-12">
         <ScrollReveal mode="slide-right">
            <span className="text-[#D5312F] font-bold tracking-widest uppercase text-xs block mb-4">
              / OUR SERVICES
            </span>
            <h2 className="text-4xl font-black text-[#131313] leading-[0.95] mb-6">
              Automation solutions
            </h2>
         </ScrollReveal>
         <ScrollReveal mode="fade-up" delay={0.1}>
            <p className="text-lg text-gray-600 leading-relaxed">
              Streamline operations and help your business grow without extra effort.
            </p>
         </ScrollReveal>
       </div>

       {/* Service Cards Stack */}
       <div className="flex flex-col gap-6">
          {servicesData.map((service, i) => (
             <ScrollReveal key={i} mode="fade-up" delay={i * 0.05}>
                <div className="bg-[#F4F4F5] rounded-3xl p-6 flex flex-col gap-6 overflow-hidden border border-transparent">
                   
                   {/* Graphic Area */}
                   <div className="w-full h-40 flex items-center justify-center rounded-2xl">
                      <PixelRezReveal className="flex items-center justify-center w-full h-full">
                         <service.Graphic />
                      </PixelRezReveal>
                   </div>

                   {/* Text Content */}
                   <div>
                      <h3 className="text-2xl font-bold text-[#131313] mb-2 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-[#666666] text-base leading-relaxed">
                        {service.desc}
                      </p>
                   </div>

                </div>
             </ScrollReveal>
          ))}
       </div>

    </div>
  );
}
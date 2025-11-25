import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Brain, MessageSquare, Zap, BarChart } from 'lucide-react';
import { PixelRezReveal } from './ui/PixelRezReveal';
import { ScrollReveal } from './ui/ScrollReveal';

// ---------------------------------------------------------------------------
// 1. CSS GRAPHICS (Mimicking the Screenshot - Fixed State)
// ---------------------------------------------------------------------------

const GraphicStrategy = () => (
  <div className="relative w-48 h-32 transform rotate-[-10deg]">
    <div className="absolute top-0 right-0 w-24 h-24 border-[16px] border-[#E0E0E0] rounded-[2rem] transform translate-x-4 -translate-y-4 z-0" />
    <div className="absolute top-4 right-4 w-24 h-24 border-[16px] border-[#D4D4D4] rounded-[2rem] z-10 bg-white" />
    <div className="absolute top-0 right-0 w-24 h-24 border-[16px] border-[#131313] rounded-[2rem] z-20" />
  </div>
);

const GraphicContent = () => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    <div className="w-32 h-24 bg-white border-[1px] border-gray-200 rounded-3xl shadow-xl flex items-center justify-center transform -rotate-12">
       <div className="w-0 h-0 border-l-[20px] border-l-[#131313] border-y-[12px] border-y-transparent ml-2" />
    </div>
  </div>
);

const GraphicAgent = () => (
  <div className="relative w-32 h-32">
     <div className="absolute inset-0 bg-white border border-gray-200 rounded-[2rem] shadow-lg transform -rotate-6 flex items-center justify-center gap-2">
        <div className="w-3 h-3 bg-[#131313] rounded-full" />
        <div className="w-3 h-3 bg-gray-300 rounded-full" />
        <div className="w-3 h-3 bg-gray-300 rounded-full" />
     </div>
  </div>
);

const GraphicCRM = () => (
  <div className="relative w-40 h-40 flex items-center justify-center">
     <div className="absolute w-16 h-16 border-[8px] border-[#E5E5E5] rounded-full border-dashed" />
     <div className="absolute w-24 h-24 border-[8px] border-[#131313] rounded-full border-dotted" />
  </div>
);

const GraphicProcess = () => (
  <div className="relative w-40 h-32 flex items-center justify-center">
     <div className="w-24 h-24 border-[12px] border-[#E0E0E0] rounded-full border-t-[#131313] transform rotate-45" />
  </div>
);

// ---------------------------------------------------------------------------
// 2. SERVICE CARD (Fixed, Rectangular, Darker, Pixel Load)
// ---------------------------------------------------------------------------

const ServiceCard = ({ title, desc, Graphic, className = "" }) => {
  return (
    <div className={`bg-[#F4F4F5] rounded-lg p-6 flex flex-col justify-between h-[320px] ${className}`}>
      
      {/* GRAPHIC AREA */}
      <div className="flex-1 flex items-center justify-end relative min-h-[140px]">
         <PixelRezReveal className="origin-center">
            <Graphic />
         </PixelRezReveal>
      </div>

      {/* TEXT CONTENT */}
      <div className="mt-4">
        {/* Increased font size from text-xl to text-2xl lg:text-3xl */}
        <h3 className="text-2xl lg:text-3xl font-bold text-[#131313] mb-3 tracking-tight leading-tight">
          {title}
        </h3>
        <p className="text-[#555555] text-sm leading-relaxed font-medium pr-2">
          {desc}
        </p>
      </div>

    </div>
  );
};

// ---------------------------------------------------------------------------
// 3. MAIN SECTION
// ---------------------------------------------------------------------------

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white"> 
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-2xl">
            <ScrollReveal mode="slide-right">
              <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-2 block">
                / OUR SERVICES
              </span>
              <h2 className="text-5xl font-bold text-[#131313] tracking-tight">
                Automation solutions
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal mode="fade-up" delay={0.2}>
            <p className="text-[#666666] max-w-md text-sm leading-relaxed pt-4">
              Our AI-driven automation eliminates busywork, streamlines your operations, and helps your business grow, without extra effort.
            </p>
          </ScrollReveal>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          
          {/* TOP ROW */}
          <div className="lg:col-span-3">
             <ServiceCard 
               title="SEO strategy & optimization"
               desc="Boost your visibility with advanced SEO practices built to improve ranking, traffic, and brand reach.
                    We optimize your website end-to-end to drive long-term, organic growth."
               Graphic={GraphicStrategy}
             />
          </div>
          <div className="lg:col-span-3">
             <ServiceCard 
               title="Cross-platform app development"
               desc="Build fast, beautiful, and scalable mobile apps with Flutter.
               We deliver high-performance applications for Android, iOS, and Web—all from a single codebase."
               Graphic={GraphicContent}
             />
          </div>

          {/* BOTTOM ROW */}
          <div className="lg:col-span-2">
            <ServiceCard 
              title="AI/ML product engineering"
              desc="We build custom AI solutions that automate tasks and drive real results."
              Graphic={GraphicAgent}
            />
          </div>
          <div className="lg:col-span-2">
            <ServiceCard 
              title="Full-stack web applications"
              desc="We build complete digital products — UI, backend, APIs, and deployment."
              Graphic={GraphicCRM}
            />
          </div>
          <div className="lg:col-span-2">
            <ServiceCard 
              title="AI process automation"
              desc="Transform repetitive workflows into smooth, automated systems that save time."
              Graphic={GraphicProcess}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
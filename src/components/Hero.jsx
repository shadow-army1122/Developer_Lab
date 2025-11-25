import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight } from 'lucide-react';
import { PixelRevealImage, PixelButton } from './ui/PixelReveal'; 
import { ScrollReveal } from './ui/ScrollReveal';

// Import the 3D Logo
import logo3d from '../assets/img/logo/3d-glass-logo.png'; 

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col justify-center pt-32 pb-20">
      
      <div className="container mx-auto px-6">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* --- LEFT COLUMN (Headline + 3D) --- */}
          <div className="lg:col-span-7 flex flex-col gap-12 relative z-20">
            
            {/* Headline - Adjusted sizing and formatting */}
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-[#131313]"
            >
              AI-Driven <br/>Product Engineering <br />
             <span className="text-gray-400"> for Future - Ready Brands</span>
            </motion.h1>

            {/* 3D Element */}
            <div className="relative w-full h-[400px] flex items-center justify-center lg:justify-start">
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
                 transition={{ delay: 0.4, duration: 1, ease: "circOut" }}
                 className="relative w-80 h-80 perspective-1000"
              >
                 {/* Floating Animation */}
                 <motion.img
                   src={logo3d}
                   alt="3D Logo"
                   className="w-full h-full object-contain drop-shadow-2xl"
                   animate={{ 
                     y: [-15, 15, -15],
                     rotateZ: [-2, 2, -2],
                     scale: [1, 1.02, 1]
                   }}
                   transition={{ 
                     duration: 8, 
                     repeat: Infinity, 
                     ease: "easeInOut" 
                   }}
                 />
              </motion.div>
            </div>
          </div>

          {/* --- RIGHT COLUMN (Video + Content) --- */}
          <div className="lg:col-span-5 flex flex-col gap-12 relative z-30 pt-4">
             
             {/* Video Card (Top Right) */}
             <div className="flex justify-end">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.6, duration: 0.5 }}
                 className="relative w-full max-w-xs"
               >
                 <div className="bg-[#131313] rounded-2xl p-3 shadow-2xl transform rotate-2 border border-white/10">
                    <div className="flex justify-between text-white/50 text-[10px] font-mono mb-3 px-1 tracking-widest uppercase">
                        <span>Showreel</span>
                        <span>DLab</span>
                    </div>
                    <div className="h-40 rounded-lg overflow-hidden relative bg-gray-900">
                       <PixelRevealImage 
                         src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" 
                         alt="Showreel"
                         gridSize={15} 
                         delay={0.8}
                       />
                       <div className="absolute inset-0 flex items-center justify-center z-20">
                          <div className="w-12 h-12 bg-[#D5312F] rounded-full flex items-center justify-center shadow-lg shadow-[#D5312F]/20 cursor-pointer hover:scale-110 transition-transform duration-300">
                            <Play fill="#131313" size={20} className="ml-1 text-[#131313]" />
                          </div>
                       </div>
                    </div>
                 </div>
               </motion.div>
             </div>

             {/* Description & CTAs (Middle Right) */}
             <div className="flex flex-col justify-center mt-10">
                <ScrollReveal delay={0.5}>
                  <p className="text-xl text-[#666666] leading-relaxed mb-10">
We build smart, scalable tech products for startups, new brands, and fast-growing companies—helping them innovate, launch, and lead with confidence.                  </p>
                </ScrollReveal>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 mb-16 w-full"
                >
                  <div className="w-full sm:w-auto">
                    <PixelButton type="primary" className="w-full">
                       Get Free Consultation
                    </PixelButton>
                  </div>
                  
                  <div className="w-full sm:w-auto">
                    <PixelButton type="secondary" className="w-full">
                       Work with us
                    </PixelButton>
                  </div>
                </motion.div>

                {/* Trusted By */}
                <ScrollReveal delay={0.7} className="border-t border-gray-100 pt-8">
                   <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 block">/ Trusted by 300+ Companies</span>
                   <div className="flex flex-wrap gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                      <img src="https://logoipsum.com/logo/logo-32.svg" className="h-6 w-auto" alt="logo" />
                      <img src="https://logoipsum.com/logo/logo-33.svg" className="h-6 w-auto" alt="logo" />
                      <img src="https://logoipsum.com/logo/logo-34.svg" className="h-6 w-auto" alt="logo" />
                   </div>
                </ScrollReveal>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { PixelRezReveal } from './ui/PixelRezReveal'; 

const Comparison = () => {
  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-24">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.8 }} 
             transition={{ duration: 0.8, ease: "circOut" }}
           >
             <h2 className="text-5xl md:text-7xl font-bold text-[#131313] tracking-tight mb-6">
               The difference is clear
             </h2>
             <p className="text-[#666666] text-xl max-w-2xl mx-auto">
               See why leading brands choose Sadewa over traditional agencies for their AI automation needs.
             </p>
           </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* SADEWA CARD */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }} 
            transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
            className="relative h-full"
          >
            <PixelRezReveal className="h-full">
              <div className="bg-[#131313] text-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden h-full flex flex-col border border-gray-800">
                
                {/* RED Background Glow */}
                <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-[#D5312F] rounded-full blur-[120px] pointer-events-none opacity-10" />
                
                <div className="flex items-center gap-5 mb-12 relative z-10">
                   <div className="w-14 h-14 bg-[#D5312F] rounded-2xl flex items-center justify-center text-[#131313] font-bold text-2xl shadow-lg shadow-[#D5312F]/20">S</div>
                   <h3 className="text-4xl font-bold tracking-tight">Sadewa</h3>
                </div>

                {/* Staggered List */}
                <motion.ul 
                  variants={listContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-8 relative z-10 flex-1"
                >
                  {[
                    "Tailored custom AI agents and automation", 
                    "Covers strategy, build, and optimization", 
                    "Machine learning insights", 
                    "Solutions that grow with your business", 
                    "Continuous improvements and support", 
                    "Global tech expertise", 
                    "Works alongside your team like an extension"
                  ].map((item, i) => (
                    <motion.li key={i} variants={listItemVariants} className="flex items-start gap-5 group">
                      <div className="w-7 h-7 bg-[#D5312F] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm group-hover:scale-110 transition-transform">
                        <Check size={16} className="text-[#131313] stroke-[3]" />
                      </div>
                      <span className="text-lg md:text-xl font-medium text-white/90 leading-snug group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </PixelRezReveal>
          </motion.div>

          {/* OTHER AGENCIES CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
            className="h-full"
          >
            <div className="bg-[#F9F9F9] p-10 md:p-14 rounded-[2.5rem] border border-gray-200 flex flex-col h-full">
               <div className="mb-12 pl-2 flex items-center gap-4">
                 <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center">
                    <X size={28} className="text-gray-400" />
                 </div>
                 <h3 className="text-3xl font-bold text-[#131313]">Other Agencies</h3>
               </div>

               <motion.ul 
                  variants={listContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-8 text-[#666666] flex-1"
               >
                {[
                  "Limited or no AI expertise", 
                  "Only offers basic marketing or dev services", 
                  "Manual analysis, slower results", 
                  "Hard to scale without extra costs", 
                  "One-off projects with little follow-up", 
                  "Generic approaches, no cultural uniqueness", 
                  "Transactional, project-based relationships"
                ].map((item, i) => (
                  <motion.li key={i} variants={listItemVariants} className="flex items-start gap-5 opacity-60 hover:opacity-100 transition-opacity">
                    <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <X size={16} className="text-gray-500" />
                    </div>
                    <span className="text-lg md:text-xl leading-snug font-medium">{item}</span>
                  </motion.li>
                ))}
               </motion.ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;

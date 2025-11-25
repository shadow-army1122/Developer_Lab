import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { PixelRezReveal } from './ui/PixelRezReveal';

const ComingSoon = ({ onBack }) => {
  return (
    <section className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center text-center px-6">
      
      <PixelRezReveal className="mb-8">
        <h1 className="text-6xl md:text-8xl font-bold text-[#131313] tracking-tighter">
          Coming Soon
        </h1>
      </PixelRezReveal>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-[#666666] text-xl max-w-md mb-12 leading-relaxed"
      >
        We are currently crafting this experience. Check back later for something amazing.
      </motion.p>

      <motion.button
        onClick={onBack}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex items-center gap-2 text-sm font-bold text-[#131313] hover:text-[#98fe00] transition-colors uppercase tracking-widest"
      >
        <ArrowLeft size={16} />
        Back to Home
      </motion.button>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      
    </section>
  );
};

export default ComingSoon;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const gridSize = 12; 
  const blocks = Array.from({ length: gridSize * gridSize });

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none">
          
          {/* Pixel Grid */}
          <div 
            className="absolute inset-0 z-0 grid w-full h-full"
            style={{
              gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
              gridTemplateRows: `repeat(${gridSize}, 1fr)`,
            }}
          >
            {blocks.map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: Math.random() * 0.5,
                  ease: "easeOut"
                }}
                className="bg-[#111111] w-full h-full border-[0.5px] border-white/5" 
              />
            ))}
          </div>

          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex items-center gap-3 text-white"
          >
             <div className="w-10 h-10 bg-[#D5312F] rounded-lg flex items-center justify-center text-black font-bold text-2xl">
               DL
             </div>
             <span className="text-3xl font-bold tracking-tighter">Developer Lab</span>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;

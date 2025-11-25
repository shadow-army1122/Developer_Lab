import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const PixelCardReveal = ({ children, className = "" }) => {
  const cols = 16; 
  const rows = 8; 
  
  const blocks = useMemo(() => {
    return Array.from({ length: cols * rows }).map((_, i) => ({
      id: i,
      isLime: Math.random() > 0.85,
      delay: Math.random() * 0.3,
    }));
  }, []);

  return (
    <motion.div 
      className={`relative overflow-hidden rounded-2xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* CONTENT */}
      <div className="relative z-0 h-full">
        {children}
      </div>

      {/* PIXEL MASK */}
      <div 
        className="absolute inset-0 z-20 grid w-full h-full pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {blocks.map((block) => (
          <motion.div
            key={block.id}
            initial={{ scale: 1, opacity: 1 }}
            whileInView={{ scale: 0, opacity: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.4,
              delay: block.delay,
              ease: "backIn"
            }}
            style={{
              backgroundColor: block.isLime ? "#D5312F" : "#131313"
            }}
            className="w-full h-full relative scale-[1.05]"
          />
        ))}
      </div>
    </motion.div>
  );
};

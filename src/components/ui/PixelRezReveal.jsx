import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const PixelRezReveal = ({ children, className = "", gridSize = 10 }) => {
  // Create a grid of blocks
  const safeGridSize = gridSize || 10;
  const blocks = useMemo(() => Array.from({ length: safeGridSize * safeGridSize }), [safeGridSize]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 1. CONTENT */}
      <div className="relative z-0 w-full h-full">
        {children}
      </div>

      {/* 2. PIXEL MASK (White blocks that vanish) */}
      <div 
        className="absolute inset-0 z-10 grid pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${safeGridSize}, 1fr)`,
          gridTemplateRows: `repeat(${safeGridSize}, 1fr)`,
        }}
      >
        {blocks.map((_, i) => (
<motion.div
  key={i}
  initial={{ opacity: 1 }}
  animate={{ opacity: 0 }}
  transition={{
    duration: 0.4,
    delay: Math.random() * 0.4
  }}
  className="bg-white w-full h-full scale-[1.05]"
/>

        ))}
      </div>
    </div>
  );
};
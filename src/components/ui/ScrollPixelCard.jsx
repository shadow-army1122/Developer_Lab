import React, { useState, useMemo } from 'react';
import { motion, useMotionValueEvent } from 'framer-motion';

export const ScrollPixelCard = ({ children, scrollYProgress, start, className = "" }) => {
  const [isTriggered, setIsTriggered] = useState(false);
  
  // 1. DENSE GRID (20x8)
  const cols = 20; 
  const rows = 8; 
  
  // 2. Generate Glitch Blocks
  const blocks = useMemo(() => {
    return Array.from({ length: cols * rows }).map((_, i) => ({
      id: i,
      isLime: Math.random() > 0.9,  // now used for red pixels
      glitchDelay: Math.random() * 5,
      glitchDuration: 0.2 + Math.random() * 0.3,
    }));
  }, []);

  // 3. Monitor Scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= start && !isTriggered) {
      setIsTriggered(true);
    } else if (latest < start && isTriggered) {
      setIsTriggered(false);
    }
  });

  return (
    <div className={`relative rounded-xl ${className}`}>
      
      {/* A. CONTENT CARD */}
      <motion.div
        animate={{ 
          opacity: isTriggered ? 1 : 0,
          filter: isTriggered ? "blur(0px)" : "blur(8px)",
          scale: isTriggered ? 1 : 0.95
        }}
        transition={{ duration: 0.4, ease: "circOut" }}
        className="relative z-0 h-full"
      >
        {children}
      </motion.div>

      {/* B. GLITCH MASK */}
      <div 
        className="absolute inset-0 z-10 grid w-full h-full pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {blocks.map((block) => (
          <motion.div
            key={block.id}
            initial={{ opacity: 1, scale: 1 }}
            
            animate={
              isTriggered
                ? {
                    opacity: 0,
                    scale: 0,
                    x: (Math.random() - 0.5) * 50,
                    y: (Math.random() - 0.5) * 50,
                  }
                : {
                    opacity: [1, 0, 1, 1, 0, 1],
                    scale: [1, 1.1, 0.9, 1],
                  }
            }
            
            transition={
              isTriggered
                ? {
                    duration: 0.4,
                    ease: "backIn",
                    delay: Math.random() * 0.1,
                  }
                : {
                    duration: block.glitchDuration,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 3,
                    delay: block.glitchDelay,
                    ease: "steps(1)",
                  }
            }

            style={{
              backgroundColor: block.isLime ? "#D5312F" : "#131313"
            }}
            className="w-full h-full relative scale-[1.05]"
          />
        ))}
      </div>
    </div>
  );
};

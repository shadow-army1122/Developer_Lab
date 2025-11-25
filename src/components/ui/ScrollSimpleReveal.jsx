import React, { useState } from 'react';
import { motion, useMotionValueEvent } from 'framer-motion';

export const ScrollSimpleReveal = ({ children, scrollYProgress, start, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Monitor Scroll Position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Trigger reveal when scroll passes the start point
    if (latest >= start && !isVisible) {
      setIsVisible(true);
    } else if (latest < start && isVisible) {
      setIsVisible(false);
    }
  });

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 100, scale: 0.95 }} // Start Lower & Smaller
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 100,       // Slide Up
        scale: isVisible ? 1 : 0.95   // Scale Up
      }}
      transition={{ 
        duration: 0.8, 
        ease: [0.2, 0.65, 0.3, 0.9] // Soft deceleration curve
      }}
    >
      {children}
    </motion.div>
  );
};
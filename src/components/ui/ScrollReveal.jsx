import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const ScrollReveal = ({ 
  children, 
  mode = "fade-up", 
  delay = 0,
  className = "",
  duration = 0.6
}) => {
  const { ref, isInView } = useScrollAnimation();

  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 }
    },
    "scale": {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 }
    },
    "slide-right": {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[mode]}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.2, 0.65, 0.3, 0.9]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

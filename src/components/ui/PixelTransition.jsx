import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PixelTransition = ({ isActive = true, duration = 0.5 }) => {
  const [show, setShow] = useState(true);

  // Auto-hide for entrance animation
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setShow(false), duration * 1000 + 200);
      return () => clearTimeout(timer);
    }
  }, [isActive, duration]);

  const cols = 20;
  const rows = 10;

  const blocks = useMemo(
    () =>
      Array.from({ length: cols * rows }).map((_, i) => ({
        id: i,
        isLime: Math.random() > 0.85,
        delay: Math.random() * 0.2,
      })),
    []
  );

  return (
    <AnimatePresence>
      {show && (
        <div
          className="absolute inset-0 z-50 grid pointer-events-none"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {blocks.map((block) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 0.4,
                delay: block.delay,
                ease: "circOut",
              }}
              style={{
                backgroundColor: block.isLime ? "#D5312F" : "#131313",
              }}
              className="w-full h-full relative scale-105"
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

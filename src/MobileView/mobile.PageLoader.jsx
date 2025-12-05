import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobilePageLoader = () => {
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
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none bg-black"
          style={{
            ["--cell-size"]: `calc(100vh / ${gridSize})` // PERFECT SQUARE SIZE
          }}
        >

          {/* FULLSCREEN PERFECT SQUARE GRID */}
          <div
            className="absolute inset-0 grid"
            style={{
              gridTemplateColumns: `repeat(${gridSize}, var(--cell-size))`,
              gridTemplateRows: `repeat(${gridSize}, var(--cell-size))`,
              width: `calc(var(--cell-size) * ${gridSize})`,
              height: `100vh`,
              margin: "0 auto",                 // center horizontally
              left: "50%",
              transform: "translateX(-50%)"
            }}
          >
            {blocks.map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}  // EXACT EXIT ANIMATION
                transition={{
                  duration: 0.5,
                  delay: Math.random() * 0.5,
                  ease: "easeOut",
                }}
                style={{
                  width: "var(--cell-size)",
                  height: "var(--cell-size)",
                }}
                className="bg-[#111111] border-[0.4px] border-white/5"
              />
            ))}
          </div>

          {/* LOGO AREA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center text-white gap-3"
          >
            <div className="w-14 h-14 bg-[#D5312F] rounded-lg flex items-center justify-center text-black font-extrabold text-3xl">
              DL
            </div>
            <span className="text-2xl font-bold tracking-tight">
              Developer Lab
            </span>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
};

export default MobilePageLoader;

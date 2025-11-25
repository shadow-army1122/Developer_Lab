import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- 1. The Pixel Image Reveal ---
export const PixelImage = ({ src, alt, className }) => {
  const columns = 8;
  const rows = 6;
  const blocks = Array.from({ length: columns * rows });

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* The Image */}
      <img src={src} alt={alt} className="w-full h-full object-cover" />

      {/* Pixel Overlay */}
      <div
        className="absolute inset-0 grid w-full h-full pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`
        }}
      >
        {blocks.map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: Math.random() * 0.4,
              ease: "easeInOut"
            }}
            className="bg-white w-full h-full"
          />
        ))}
      </div>
    </div>
  );
};

// --- 2. The Pixel Button (Hover Effect) ---
export const PixelButton = ({ children, onClick, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const pixels = Array.from({ length: 20 });

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative px-8 py-4 overflow-hidden rounded-lg font-bold text-lg transition-colors duration-300 ${className} ${
        isHovered ? "text-black" : "text-brand-black"
      }`}
    >
      {/* Background pixel animation */}
      <div className="absolute inset-0 flex w-full h-full pointer-events-none">
        {pixels.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: isHovered ? "0%" : "100%"
            }}
            transition={{
              duration: 0.3,
              delay: Math.random() * 0.1,
              ease: "circOut"
            }}
            className="flex-1 bg-[#D5312F] h-full"
          />
        ))}
      </div>

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

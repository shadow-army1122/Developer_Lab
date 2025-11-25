import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// ----------------------------------------------------------
// 1. PIXEL IMAGE REVEAL (Safe Version)
// ----------------------------------------------------------
export const PixelRevealImage = ({ 
  src, 
  alt, 
  className = "", 
  gridSize = 10,
  delay = 0 
}) => {
  const safeGridSize = gridSize || 10;
  const blocks = Array.from({ length: safeGridSize * safeGridSize });

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt || "Image"} 
        className="w-full h-full object-cover relative z-0" 
      />
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
            whileInView={{ opacity: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.01,
              delay: delay + Math.random() * 0.5, 
            }}
            className="bg-white w-full h-full scale-[1.05]"
          />
        ))}
      </div>
    </div>
  );
};

// ----------------------------------------------------------
// 2. PIXEL BUTTON (Randomized on Every Hover)
// ----------------------------------------------------------
export const PixelButton = ({ 
  children, 
  onClick, 
  className = "",
  type = "primary" 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationSeed, setAnimationSeed] = useState(0);
  
  // UPDATED COLORS
  const BLACK_BG = "bg-[#131313]";
  const RED_ACCENT = "bg-[#D5312F]";
  const TEXT_WHITE = "text-white";
  const TEXT_BLACK = "text-[#131313]";

  const isPrimary = type === "primary";

  // Style Logic
  const initialBg = isPrimary ? BLACK_BG : "bg-[#F5F5F5]";
  const initialText = isPrimary ? TEXT_WHITE : TEXT_BLACK;
  const boxBg = isPrimary ? RED_ACCENT : "bg-transparent";
  const pixelColor = RED_ACCENT;

  // Pixel blocks
  const blocks = Array.from({ length: 48 });

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAnimationSeed((prev) => prev + 1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        group relative overflow-hidden rounded-[4px] font-medium text-sm md:text-base 
        transition-all duration-300 flex items-center justify-between 
        pl-5 pr-1.5 py-1.5 gap-6 h-[48px]
        ${initialBg} ${className}
      `}
    >
      {/* A. PIXEL GRID */}
      <div 
        key={animationSeed}
        className="absolute inset-0 grid w-full h-full pointer-events-none z-0"
        style={{ gridTemplateColumns: `repeat(12, 1fr)` }}
      >
        {blocks.map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{
              duration: 0.05,
              delay: Math.random() * 0.15,
            }}
            className={`${pixelColor} w-full h-full`}
          />
        ))}
      </div>

      {/* B. TEXT CONTENT */}
      <span className={`relative z-10 transition-colors duration-300 ${isHovered ? TEXT_BLACK : initialText}`}>
        {children}
      </span>

      {/* C. ICON BOX */}
      <div className={`
        relative z-10 w-[36px] h-[36px] rounded-[2px] flex items-center justify-center 
        transition-colors duration-300 overflow-hidden
        ${isHovered ? BLACK_BG : boxBg}
      `}>
         <div className="relative w-5 h-5">
            {/* Outgoing arrow */}
            <ArrowUpRight 
                size={20} 
                strokeWidth={2.5}
                className={`
                  absolute inset-0 transition-all duration-300 
                  ${isHovered ? 'translate-x-full -translate-y-full opacity-0' : 'opacity-100'}
                  ${TEXT_BLACK}
                `} 
            />
            {/* Incoming arrow (RED) */}
            <ArrowUpRight 
                size={20} 
                strokeWidth={2.5}
                className={`
                  absolute inset-0 transition-all duration-300
                  ${isHovered ? 'translate-x-0 translate-y-0 opacity-100' : '-translate-x-full translate-y-full opacity-0'}
                  text-[#D5312F]
                `} 
            />
         </div>
      </div>
    </button>
  );
};

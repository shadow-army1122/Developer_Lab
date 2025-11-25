import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Twitter, Linkedin } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

// Assuming you might want social icons mapped
const socialLinks = [
  { name: 'X / Twitter', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'Behance', href: '#' },
  { name: 'Telegram', href: '#' },
  { name: 'LinkedIn', href: '#' }
];

// --- INLINE PIXEL BUTTON FOR FOOTER ---
const FooterPixelButton = ({ children, onClick, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationSeed, setAnimationSeed] = useState(0);

  const blocks = Array.from({ length: 48 }); 

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAnimationSeed((prev) => prev + 1); 
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative overflow-hidden rounded-lg font-bold text-lg 
        transition-all duration-300 flex items-center gap-2
        px-8 py-4 border border-[#D5312F] bg-[#D5312F] text-white
        ${className}
      `}
    >
      {/* PIXEL GRID LAYER */}
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
            className="bg-[#131313] w-full h-full" // Flicker to black pixels on hover
          />
        ))}
      </div>

      {/* CONTENT */}
      <span className="relative z-10 transition-colors duration-300 group-hover:text-[#D5312F]">
        {children}
      </span>
    </button>
  );
};

// --- PIXEL TEXT LINK ---
const PixelTextLink = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  // Small grid for text link hover effect
  const blocks = useMemo(() => Array.from({ length: 20 }), []); 

  return (
    <a 
      href={href} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-flex items-center gap-2 group overflow-hidden rounded-sm px-1"
    >
       {/* Background Pixel Reveal */}
       <div className="absolute inset-0 grid grid-cols-10 pointer-events-none">
          {blocks.map((_, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0 }}
               animate={{ opacity: isHovered ? 1 : 0 }}
               transition={{ duration: 0.02, delay: Math.random() * 0.1 }}
               className="bg-[#D5312F]/10 w-full h-full"
             />
          ))}
       </div>

       <span className="relative z-10 transition-colors group-hover:text-[#D5312F]">
         {children}
       </span>
       <ArrowUpRight size={14} className="relative z-10 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#D5312F]" />
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#131313] text-white pt-32 pb-12 rounded-t-[3rem] mt-10 relative overflow-hidden">
      
      {/* Background Detail */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#D5312F] rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        
        {/* Top Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 border-b border-white/10 pb-20">
          <div className="max-w-2xl">
            {/* Masked Reveal Animation for Headline */}
            <div className="overflow-hidden mb-12">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Apple-style ease
                className="text-5xl md:text-7xl font-bold leading-tight block"
              >
                Ready to transform  <br /> your vision into reality?
              </motion.h2>
            </div>

            {/* Animated Button Entrance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "circOut" }}
            >
              {/* PIXEL BUTTON REPLACEMENT */}
              
             <a href="mailto:contact.developerlab@gmail.com" className="text-2xl font-bold text-[#D5312F] hover:text-white transition-colors block">
              <FooterPixelButton>
                 Get Free Consultation <ArrowUpRight size={20} className="inline ml-2" />
              </FooterPixelButton></a>
            </motion.div>
          </div>
          
          {/* Rotating 3D Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
            whileInView={{ opacity: 0.5, scale: 1, rotate: 12 }}
            transition={{ duration: 1 }}
            className="hidden lg:block w-64 h-64 border border-white/10 rounded-3xl relative"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent" />
             <div className="absolute inset-0 flex items-center justify-center">
                {/* Pulse Animation matching the video vibe */}
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-20 h-20 bg-[#D5312F] rounded-full blur-2xl" 
                />
             </div>
          </motion.div>
        </div>

        {/* Links Grid (Staggered Entrance) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">

           <ScrollReveal delay={0.1} className="space-y-4">
             <span className="text-xs text-gray-500 uppercase tracking-wider">/ Email</span>
             <a href="mailto:contact.developerlab@gmail.com" className="text-2xl font-bold text-[#D5312F] hover:text-white transition-colors block">
               hello@sadewa.com
             </a>
             <p className="text-xl text-gray-400">+1 234 567 89</p>
           </ScrollReveal>

           <ScrollReveal delay={0.2} className="space-y-6">
             <span className="text-xs text-gray-500 uppercase tracking-wider">/ Navigation</span>
             <ul className="space-y-3 text-lg font-medium text-gray-300">
               {['Home', 'Services', 'Case Studies', 'Blog', 'Waitlist'].map(link => (
                 <li key={link}>
                   <PixelTextLink href="#">{link}</PixelTextLink>
                 </li>
               ))}
             </ul>
           </ScrollReveal>

           <ScrollReveal delay={0.3} className="space-y-6">
             <span className="text-xs text-gray-500 uppercase tracking-wider">/ Company</span>
             <ul className="space-y-3 text-lg font-medium text-gray-300">
               {['About Us', 'Careers', 'Contact Us'].map(link => (
                 <li key={link}>
                   <PixelTextLink href="#">{link}</PixelTextLink>
                 </li>
               ))}
             </ul>
           </ScrollReveal>

           <ScrollReveal delay={0.4} className="space-y-6">
             <span className="text-xs text-gray-500 uppercase tracking-wider">/ Follow Us</span>
             <ul className="space-y-3 text-lg font-medium text-gray-300">
               {socialLinks.map(link => (
                 <li key={link.name}>
                   <PixelTextLink href={link.href}>{link.name}</PixelTextLink>
                 </li>
               ))}
             </ul>
           </ScrollReveal>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end pt-10 border-t border-white/10">
          {/* Giant Watermark */}
          <h1 className="text-[15vw] md:text-[10rem] font-bold leading-none text-white/5 select-none tracking-tighter">
            Developer Lab
          </h1>
          
          <div className="flex flex-col md:flex-row gap-6 text-sm text-gray-500 mb-6 md:mb-4 items-center">
             <span>©2025 Developer Lab. All rights reserved.</span>
             <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             </div>
             <div className="text-xs text-gray-600 border-l border-gray-800 pl-6 ml-2">
                MADE BY <span className="text-white"> <br></br>Vivek K Nair</span>
             </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
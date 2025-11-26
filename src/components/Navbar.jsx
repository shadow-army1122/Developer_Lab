import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from "react-router-dom";
import logo2d from '../../assets/img/logo/2d-bg-logo.png';
/* --------------------------------------------
   1. PIXEL NAV LINK (unchanged animation)
--------------------------------------------- */
const PixelNavLink = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cols = 12;
  const rows = 4;
  const blocks = Array.from({ length: cols * rows });

  const isInternal = href.startsWith("/");
  const Wrapper = isInternal ? Link : "a";

  return (
    <Wrapper
      to={isInternal ? href : undefined}
      href={!isInternal ? href : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative px-6 py-2.5 rounded-full overflow-hidden group flex items-center justify-center"
    >
      <div
        className="absolute inset-0 grid w-full h-full pointer-events-none z-0"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {blocks.map((_, i) => {
          const col = i % cols;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{
                duration: 0.15,
                delay: isHovered ? col * 0.03 : 0,
                ease: "linear",
              }}
              className="bg-[#131313] w-full h-full relative"
            />
          );
        })}
      </div>
      <span className="relative z-10 text-sm font-medium text-[#666666] transition-colors duration-300 group-hover:text-[#D5312F]">
        {children}
      </span>
    </Wrapper>
  );
};

/* --------------------------------------------
   2. NAV CTA (unchanged except colors)
--------------------------------------------- */
const NavCTA = () => {
  return (
    <a
      href="#contact"
      className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-[#131313] transition-colors duration-300 hover:border-[#131313]"
    >
      <div className="absolute inset-0 translate-y-full bg-[#131313] transition-transform duration-300 ease-[0.22,1,0.36,1] group-hover:translate-y-0" />
      <span className="relative z-10 transition-colors duration-300 group-hover:text-[#D5312F]">
        Work with us
      </span>
      <div className="relative z-10 overflow-hidden w-4 h-4">
        <div className="flex flex-col transition-transform duration-300 ease-[0.22,1,0.36,1] group-hover:-translate-y-1/2">
          <div className="h-4 flex items-center justify-center text-[#131313] transition-colors duration-300 group-hover:text-[#D5312F]">
            <ArrowUpRight size={16} />
          </div>
          <div className="h-4 flex items-center justify-center text-[#D5312F]">
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </a>
  );
};

/* --------------------------------------------
   3. NAV LINKS
--------------------------------------------- */
const navLinks = [
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Blog', href: '' },
  { name: 'Careers', href: '#careers' },
];

/* --------------------------------------------
   4. FULL NAVBAR (with mobile support)
--------------------------------------------- */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    initial: { y: -100, opacity: 0 },
    top: {
      y: 0,
      opacity: 1,
      width: "100%",
      maxWidth: "1536px",
      backgroundColor: "rgba(255, 255, 255, 0)",
      borderColor: "rgba(255, 255, 255, 0)",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      padding: "24px",
    },
    scrolled: {
      y: 12,
      opacity: 1,
      width: "92%",
      maxWidth: "1100px",
      backgroundColor: "rgba(255,255,255,0.8)",
      borderColor: "rgba(255,255,255,0.2)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
      padding: "12px 16px",
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">

      <motion.nav
        variants={navVariants}
        initial="initial"
        animate={scrolled ? "scrolled" : "top"}
        transition={{ type: "spring", stiffness: 150, damping: 22, mass: 1 }}
        className="backdrop-blur-xl rounded-full flex items-center justify-between border pointer-events-auto"
      >

        {/* LOGO */}
        <a href="#" className="flex items-center gap-3 group mr-8 shrink-0">
          <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-white shadow-lg ring-1 ring-black/5">
            <img
              src={logo2d}
              alt="Developer Lab"
              className="w-full h-full object-contain p-1.5"
              draggable="false"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000" />
          </div>

          <span className="text-xl font-black tracking-tight text-[#131313] hidden lg:block">
            DEVELOPER LAB
          </span>
        </a>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center bg-white/60 p-1.5 rounded-full backdrop-blur-md border border-gray-200/50 shadow-sm gap-1">
          {navLinks.map((link) => (
            <PixelNavLink key={link.name} href={link.href}>
              {link.name}
            </PixelNavLink>
          ))}
        </div>

        {/* CTA + MOBILE BUTTON */}
        <div className="flex items-center gap-4 ml-8 shrink-0">
          <div className="hidden md:block"><NavCTA /></div>

          {/* MOBILE HAMBURGER */}
          <button 
            className="md:hidden text-[#131313]"
            onClick={() => setMobileOpen(true)}
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
            </div>
          </button>
        </div>
      </motion.nav>

      {/* ---------------------- MOBILE MENU ---------------------- */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl px-6 py-10 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              className="absolute top-5 right-6 text-[#131313] text-2xl"
              onClick={() => setMobileOpen(false)}
            >
              ×
            </button>

            {/* LINKS */}
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <PixelNavLink key={link.name} href={link.href}>
                  {link.name}
                </PixelNavLink>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="#contact"
                className="w-full block text-center rounded-full bg-[#131313] text-[#D5312F] py-3 font-medium"
              >
                Work with us
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}

    </div>
  );
};

export default Navbar;

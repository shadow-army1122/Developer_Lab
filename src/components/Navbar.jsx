import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

/* --------------------------------------------
   PIXEL NAV LINK (Desktop Only)
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
   NAV CTA (Desktop Only)
--------------------------------------------- */
const NavCTA = () => {
  return (
    <a
      href="#contact"
      className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-[#131313] transition-colors duration-300 hover:border-[#131313]"
    >
      <div className="absolute inset-0 translate-y-full bg-[#131313] transition-transform duration-300 ease-[0.22,1,0.36,1] group-hover:translate-y-0" />
      <span className="relative z-10 transition-colors duration-300 group-hover:text-[#D5312F]">
        Login
      </span>
      <div className="relative z-10 overflow-hidden w-4 h-4">
        <div className="flex flex-col transition-transform duration-300 ease-[0.22,1,0.36,1] group-hover:-translate-y-1/2">
          <div className="h-4 flex items-center justify-center text-[#131313] group-hover:text-[#D5312F]">
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
   NAV LINKS
--------------------------------------------- */
const navLinks = [
  
  { name: 'Careers', href: '/careers' },
  { name: 'Services', href: '/?scroll=services' },
  { name: 'About', href: '/About' },
  { name: 'Projects', href: '/Projects' },
  { name: 'Contact us', href: '/Contact' },
];

/* --------------------------------------------
   MERGED NAVBAR (Desktop + Mobile Headings)
--------------------------------------------- */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Scroll detection for desktop animation
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* --------------------------------------------
     MOBILE NAVIGATION HANDLING (from Code #2)
  --------------------------------------------- */
  const handleMobileNavClick = (href) => {
    setMobileOpen(false);

    if (href.startsWith('#')) {
      const id = href.replace('#', '');
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: id } });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    navigate(href);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState({}, document.title);
      }, 150);
    }
  }, [location]);

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
    <>
      {/* DESKTOP NAVBAR */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.nav
          variants={navVariants}
          initial="initial"
          animate={scrolled ? "scrolled" : "top"}
          transition={{ type: "spring", stiffness: 150, damping: 22, mass: 1 }}
          className="backdrop-blur-xl rounded-full flex items-center justify-between border pointer-events-auto"
        >

          {/* LOGO — DESKTOP & MOBILE VERSIONS */}
          <a href="/" className="flex items-center gap-3 group mr-8 shrink-0">

            {/* Desktop Heading */}
            <span className="text-xl font-black tracking-tight hidden md:block">
              <span className="text-[#131313]">DEVELOPER </span>
              <span className="text-[#D5312F]">LAB</span>
            </span>

            {/* Mobile Heading */}
            <span className="text-lg font-black tracking-tight md:hidden">
              <span className="text-[#131313]">DEV </span>
              <span className="text-[#D5312F]">LAB</span>
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

            <button 
              className="md:hidden text-[#131313] p-2"
              onClick={() => setMobileOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* ------------------ FULLSCREEN MOBILE MENU ------------------ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[70] bg-white pt-28 px-6 pb-6 md:hidden flex flex-col gap-6 overflow-y-auto"
          >
            {/* Close Button */}
            <button 
              className="absolute top-10 right-6 text-[#131313] text-3xl"
              onClick={() => setMobileOpen(false)}
            >
              <X />
            </button>

            {/* Mobile Logo Heading */}
            <div className="text-2xl font-black mb-6">
              <span className="text-[#131313]">DEVELOPER </span>
              <span className="text-[#D5312F]">LAB</span>
            </div>

            {/* Link List */}
            <div className="flex flex-col gap-2 mt-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleMobileNavClick(link.href)}
                  className="text-left text-2xl font-bold text-[#131313] py-4 border-b border-gray-100"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => handleMobileNavClick('#contact')}
              className="w-full bg-[#131313] text-white py-4 rounded-xl font-bold mt-auto flex items-center justify-center gap-2"
            >
              Login <ArrowUpRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TypewriterReveal from "../components/ui/TypewriterReveal";

const links = [
  { name: "Careers", to: "/careers" },
  { name: "Services", to: "/services" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Contact us", to: "/contact" },
];


const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navigateTo = (to) => {
    setOpen(false);
    setTimeout(() => navigate(to), 220);
  };

  return (
    <>
      {/* TOP GLASS NAVBAR */}
      <div className="fixed top-0 left-0 right-0 z-[90] md:hidden px-6 py-5
                      flex justify-between items-center
                      bg-white/20 backdrop-blur-xl border-b border-white/20
                      shadow-[0_4px_20px_rgba(0,0,0,0.06)]">

        {/* LOGO */}
        <div onClick={() => navigateTo("/")} className="flex items-center gap-2">
                   
              <span className="text-[#131313]">DEVELOPER </span>
              <span className="text-[#D5312F]">LAB</span>
            
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-md"
        >
          <Menu size={22} className="text-[#131313]" />
        </button>
      </div>

      {/* DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* DIM BACKDROP */}
            <motion.div
              className="fixed inset-0 z-[94] bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* DRAWER PANEL */}
            <motion.div
              className="fixed top-0 right-0 h-full w-[80%] max-w-[310px]
                          bg-white/60 backdrop-blur-2xl border-l border-white/30
                          shadow-[0_10px_40px_rgba(0,0,0,0.15)] z-[95]
                          p-10 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/40 backdrop-blur-xl 
                           border border-white/20 shadow-md"
              >
                <X size={20} className="text-black/70" />
              </button>

              {/* DRAWER LOGO */}
              <div className="flex items-center gap-3 mb-14 mt-4">
                <div className="w-11 h-11 bg-[#D5312F] rounded-xl flex items-center justify-center 
                                text-black font-bold text-lg shadow-md">
                  DL
                </div>
                <h1 className="text-2xl font-black text-[#131313]">Developer Lab</h1>
              </div>

              {/* NAVIGATION ITEMS */}
              <div className="flex flex-col gap-7 mt-2">
                {links.map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => navigateTo(link.to)}
                    className="flex justify-between items-center pr-1 relative active:scale-[0.97] transition"
                  >
                    <TypewriterReveal
                      text={link.name}
                      active={open}
                      index={idx}
                      speed={38}
                    />

                    <ArrowUpRight size={18} className="text-[#D5312F]" />
                  </button>
                ))}
              </div>

              {/* CTA BUTTON */}
              <div className="mt-auto pt-10">
                <button
                  onClick={() => navigateTo("/contact")}
                  className="w-full bg-[#D5312F] text-black py-4 rounded-xl font-bold text-lg
                             flex items-center justify-center gap-2 shadow-lg 
                             active:scale-[0.97] transition"
                >
                  Login <ArrowUpRight />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;

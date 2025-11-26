// src/components/CaseStudies.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import eventur from '../assets/img/projects/eventur.png';
// ---------------------------------------------------------------------------
// PROJECT DATA
// ---------------------------------------------------------------------------
const projects = [
  {
    id: 1,
    client: "EVENTUR",
    year: "/2024",
    title: "AI-Powered Event Management & Booking Platform for Institutions",
    stats: [
      { label: "Faster event workflow", value: "65%" },
      { label: "Automated modules", value: "12+" },
      { label: "Increase in user engagement", value: "3x" },
    ],
    image: eventur
  },
  {
    id: 2,
    client: "MENTUR",
    year: "/2024",
    title: "AI Career Guidance System for Students & Academic Platforms ",
    stats: [
      { label: "Better course-match accuracy", value: "72%" },
      { label: "Student journeys supported", value: "4K+" },
      { label: "Faster decision-making through AI", value: "5x" },
    ],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: 3,
    client: "RENTON",
    year: "/2024",
    title: "Car Rental & Booking Software with Real-time Fleet Management",
    stats: [
      { label: "Improved booking efficiency", value: "40%" },
      { label: "Active fleet integrations", value: "150+" },
      { label: "Faster customer conversion rate", value: "2x" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2400&auto=format&fit=crop",
  },
];

// ---------------------------------------------------------------------------
// PIXEL WIPE IMAGE
// ---------------------------------------------------------------------------
const PixelWipeImage = ({ src }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-15% 0px -15% 0px" });
  const cols = 16;
  const rows = 10;

  return (
    <div ref={ref} className="relative w-full h-full bg-black overflow-hidden group">
      <motion.img
        src={src}
        alt="Project"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        initial={{ scale: 1.1 }}
        animate={{ scale: isInView ? 1 : 1.1 }}
        transition={{ duration: .5, ease: "easeOut" }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div
        className="absolute inset-0 z-20 grid pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: cols * rows }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 1, scale: 1.05 }}
            animate={{
              opacity: isInView ? 0 : 1,
              scale: isInView ? 0 : 1.05,
            }}
            transition={{
              duration: 0.5,
              delay: isInView ? Math.random() * 0.35 : (cols * rows - i) * 0.002,
              ease: "circOut",
            }}
            className="bg-black/90 border-[0.5px] border-white/5"
          />
        ))}
      </div>

      {/* Hover Button */}
      <div className="absolute bottom-8 right-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-[#131313] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#D5312F] hover:text-black transition-all duration-300">
          <span className="text-sm font-bold">View Case Study</span>
          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// PROJECT CARD
// ---------------------------------------------------------------------------
const ProjectCard = ({ project, index }) => {
  return (
    <ScrollReveal mode="fade-up" delay={index * 0.25}>
      <motion.div
        layout
        className="relative w-full bg-[#F9F9F9] rounded-3xl overflow-hidden flex flex-col lg:flex-row min-h-[600px] shadow-lg hover:shadow-2xl transition-shadow duration-500"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-10%" }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
      >
        {/* Text */}
        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-between border-r border-gray-100">
          <div>
            <div className="flex justify-between items-start mb-12">
              <h3 className="text-[#D5312F] font-bold text-3xl tracking-widest uppercase">
                {project.client}
              </h3>
              <span className="text-gray-400 font-mono text-lg">{project.year}</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#131313] leading-[1.05] mb-10">
              {project.title}
            </h2>
          </div>

          <div>
            <div className="w-full h-[1px] bg-gray-200 mb-10" />
            <div className="grid grid-cols-3 gap-8">
              {project.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + i * 0.15 }}
                >
                  <p className="text-3xl lg:text-4xl font-bold text-[#D5312F] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto">
          <PixelWipeImage src={project.image} />
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

// ---------------------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------------------
const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-20">
          <ScrollReveal mode="slide-right">
            <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-4 block">
              / Case Studies
            </span>
            <h2 className="text-6xl lg:text-8xl font-bold text-[#131313] tracking-tight">
              Latest works
            </h2>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-32">
          <button className="bg-[#131313] text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#D5312F] hover:text-black transition-all duration-300 flex items-center gap-3 mx-auto">
            View All Projects <ArrowUpRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

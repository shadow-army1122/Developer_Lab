// PROJECTS.jsx
import React, { useRef } from "react";
import { PixelRezReveal } from "../components/ui/PixelRezReveal";

// ---------------------------------------------------------------------------
// PROJECT DATA
// ---------------------------------------------------------------------------
const allProjects = [
  {
    id: 1,
    client: "NAKULA",
    year: "/2022",
    title: "AI Automation & Portfolio Website for a Design Studio",
    stats: [
      { label: "INCREASE IN ROI", value: "40%" },
      { label: "NEW RETAINER", value: "3" },
      { label: "WEBSITE ENGAGEMENT", value: "2x" },
    ],
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: 2,
    client: "OBIMA",
    year: "/2023",
    title: "Custom AI Agent for Enterprise Lead Scoring",
    stats: [
      { label: "LEADS PROCESSED", value: "10k+" },
      { label: "MANUAL HOURS SAVED", value: "120/mo" },
      { label: "CONVERSION RATE", value: "+15%" },
    ],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: 3,
    client: "VELOX",
    year: "/2024",
    title: "Automated CRM Workflow for SaaS Scale-up",
    stats: [
      { label: "RESPONSE TIME", value: "< 2min" },
      { label: "TEAM EFFICIENCY", value: "3x" },
      { label: "CHURN REDUCTION", value: "10%" },
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: 4,
    client: "AEROLAB",
    year: "/2024",
    title: "Predictive Maintenance System for Aviation",
    stats: [
      { label: "DOWNTIME REDUCED", value: "25%" },
      { label: "COST SAVINGS", value: "$2M" },
      { label: "ACCURACY", value: "99.9%" },
    ],
    image:
      "https://images.unsplash.com/photo-1559060017-445fb9722f2a?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: 5,
    client: "SYNTHIA",
    year: "/2023",
    title: "Generative AI Content Platform for Marketers",
    stats: [
      { label: "CONTENT OUTPUT", value: "10x" },
      { label: "USER GROWTH", value: "400%" },
      { label: "RETENTION", value: "85%" },
    ],
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2400&auto=format&fit=crop",
  },
];

// ---------------------------------------------------------------------------
// PROJECT CARD COMPONENT
// ---------------------------------------------------------------------------
const ProjectCard = ({ project }) => {
  const imageRef = useRef(null);

  return (
    <div className="w-full mb-20 last:mb-0">
      <div className="relative w-full bg-[#F9F9F9] rounded-3xl overflow-hidden flex flex-col lg:flex-row min-h-[600px] shadow-sm hover:shadow-md transition-shadow duration-500">
        
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-between border-r border-gray-100">
          
          <div className="flex justify-between items-start mb-12">
            <h3 className="text-[#CCCCCC] font-bold text-2xl uppercase tracking-wide">
              {project.client}
            </h3>
            <span className="text-gray-400 font-mono">{project.year}</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-[#131313] leading-[1.1] mb-12">
            {project.title}
          </h2>

          <div className="w-full h-[1px] bg-gray-200 mb-8" />

          <div className="grid grid-cols-3 gap-8">
            {project.stats.map((stat, i) => (
              <div key={i}>
                <p className="text-3xl lg:text-4xl font-medium text-[#131313] mb-2">
                  {stat.value}
                </p>
                <p className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE (PixelRezReveal Only) */}
        <div
          ref={imageRef}
          className="w-full lg:w-1/2 relative h-[400px] lg:h-auto bg-black overflow-hidden"
          style={{
            clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
          }}
        >
          <PixelRezReveal className="w-full h-full">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
          </PixelRezReveal>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>

      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// MAIN PROJECTS PAGE
// ---------------------------------------------------------------------------
const Projects = () => {
  return (
    <div id="projects" className="w-full bg-white pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="mb-24 pt-12">
          <span className="text-[#D5312F] font-bold tracking-widest uppercase text-xs block mb-6">
            / PROJECTS
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-[#131313] leading-[0.9]">
            Selected works<br />& case studies
          </h1>
        </div>

        {/* PROJECT LIST */}
        <div className="flex flex-col gap-12">
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;

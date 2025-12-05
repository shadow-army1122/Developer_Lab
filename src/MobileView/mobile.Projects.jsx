import React from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { PixelRezReveal } from '../components/ui/PixelRezReveal';

const projects = [
  {
    id: 1,
    client: "NAKULA",
    year: "/2022",
    title: "AI Automation & Portfolio",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=600&auto=format&fit=crop", 
  },
  {
    id: 2,
    client: "OBIMA",
    year: "/2023",
    title: "Custom AI Agent",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop", 
  },
  {
    id: 3,
    client: "VELOX",
    year: "/2024",
    title: "Automated CRM Workflow",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop", 
  }
];

const MobileProjects = () => {
  return (
    <div className="block md:hidden pt-32 pb-20 bg-white px-6">
       <ScrollReveal mode="fade-up">
          <span className="text-[#D5312F] font-bold tracking-widest uppercase text-xs block mb-4">/ PROJECTS</span>
          <h1 className="text-5xl font-black text-[#131313] leading-[0.95] mb-12">Selected works</h1>
       </ScrollReveal>

       <div className="flex flex-col gap-12">
          {projects.map((project, i) => (
             <ScrollReveal key={i} mode="fade-up">
                <div className="bg-[#F9F9F9] rounded-3xl overflow-hidden border border-gray-100">
                   <div className="relative aspect-square">
                      <PixelRezReveal className="w-full h-full">
                         <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      </PixelRezReveal>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                         <h3 className="text-white text-2xl font-bold leading-tight">{project.title}</h3>
                      </div>
                   </div>
                   <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                         <span className="text-sm font-bold text-[#131313]">{project.client}</span>
                         <span className="text-xs font-mono text-gray-400">{project.year}</span>
                      </div>
                      <button className="w-full py-3 rounded-xl bg-white border border-gray-200 text-sm font-bold text-[#131313]">View Case Study</button>
                   </div>
                </div>
             </ScrollReveal>
          ))}
       </div>
    </div>
  );
};

export default MobileProjects;
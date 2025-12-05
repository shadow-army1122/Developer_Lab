import React from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { ArrowUpRight } from 'lucide-react';

const jobs = [
  { id: 1, title: "Project Manager", location: "ON-SITE (GERMANY)", salary: "$250k+" },
  { id: 2, title: "Content Marketing", location: "REMOTE (CANADA)", salary: "$150k+" },
  { id: 3, title: "Human Resources", location: "ON-SITE (SINGAPORE)", salary: "$120k+" },
  { id: 4, title: "Software Engineer", location: "REMOTE", salary: "$200k+" },
  { id: 5, title: "Head of Design", location: "ON-SITE (INDONESIA)", salary: "$250k+" },
  { id: 6, title: "AI Specialist", location: "REMOTE", salary: "$250k+" },
];

const MobileCareers = ({ onJobSelect }) => {
  return (
    <div className="block md:hidden pt-32 pb-20 bg-white px-6">
       <ScrollReveal mode="fade-up">
          <span className="text-[#D5312F] font-bold tracking-widest uppercase text-xs block mb-4">/ CAREERS</span>
          <h1 className="text-5xl font-black text-[#131313] leading-[0.95] mb-6">Join our team</h1>
          <p className="text-lg text-gray-600 mb-12">We're always searching for talent.</p>
       </ScrollReveal>

       <div className="flex flex-col gap-4">
          {jobs.map((job, i) => (
             <ScrollReveal key={i} mode="fade-up" delay={i * 0.05}>
                <div 
                  onClick={() => onJobSelect(job)}
                  className="bg-[#FAFAFA] p-6 rounded-2xl border border-gray-100 active:scale-95 transition-transform"
                >
                   <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-[#131313]">{job.title}</h3>
                      <ArrowUpRight size={20} className="text-gray-400" />
                   </div>
                   <p className="text-xs font-bold text-gray-500 uppercase">{job.location}</p>
                   <p className="text-xs font-mono text-gray-400 mt-1">{job.salary}</p>
                </div>
             </ScrollReveal>
          ))}
       </div>
    </div>
  );
};

export default MobileCareers;
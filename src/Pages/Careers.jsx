import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, Check } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import {  PixelButton } from '../components/ui/PixelReveal'
// ---------------------------------------------------------------------------
// JOB DATA
// ---------------------------------------------------------------------------
const jobs = [
  { id: 1, title: "Project Manager", location: "ON-SITE (GERMANY)", salary: "$250k - $350k" },
  { id: 2, title: "Content Marketing Specialist", location: "REMOTE (CANADA)", salary: "$150k - $250k" },
  { id: 3, title: "Human Resources", location: "ON-SITE (SINGAPORE)", salary: "$120k - $180k" },
  { id: 4, title: "Software Engineer", location: "REMOTE", salary: "$200k - $300k" },
  { id: 5, title: "Head of Design", location: "ON-SITE (INDONESIA)", salary: "$250k - $350k" },
  { id: 6, title: "AI Automation Specialist", location: "REMOTE", salary: "$250k - $350k" },
];

// ---------------------------------------------------------------------------
// APPLICATION FORM COMPONENT
// ---------------------------------------------------------------------------
const ApplicationForm = ({ job, onBack }) => {
  return (
    <div className="w-full max-w-6xl mx-auto animate-fade-in">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="mb-12 flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#131313] transition-colors uppercase tracking-widest"
      >
        <ArrowLeft size={16} /> Back to openings
      </button>

      <div className="grid lg:grid-cols-12 gap-16">
        
        {/* Left: Header */}
        <div className="lg:col-span-4">
          <ScrollReveal mode="slide-right">
            <span className="text-gray-400 font-bold tracking-widest uppercase text-xs block mb-6">
              / APPLICATION
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[#131313] leading-[0.9] mb-6">
              Apply for <br/> this job
            </h1>
            {job && (
              <div className="p-6 bg-[#F9F9F9] rounded-2xl border border-gray-200 mt-8">
                <h3 className="text-xl font-bold text-[#131313] mb-2">{job.title}</h3>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {job.location}
                </p>
              </div>
            )}
          </ScrollReveal>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-8">
          <ScrollReveal mode="fade-up" delay={0.2}>
            <form className="bg-white p-0 md:p-8 space-y-8">
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-[#131313] mb-3 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name"
                    className="w-full bg-white border-b border-gray-200 py-4 text-lg focus:outline-none focus:border-[#131313] transition-colors placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#131313] mb-3 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter email address"
                    className="w-full bg-white border-b border-gray-200 py-4 text-lg focus:outline-none focus:border-[#131313] transition-colors placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#131313] mb-3 uppercase tracking-wider">Phone (Optional)</label>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number"
                    className="w-full bg-white border-b border-gray-200 py-4 text-lg focus:outline-none focus:border-[#131313] transition-colors placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#131313] mb-3 uppercase tracking-wider">Website (Optional)</label>
                  <input 
                    type="url" 
                    placeholder="Any link to your CV and portfolio"
                    className="w-full bg-white border-b border-gray-200 py-4 text-lg focus:outline-none focus:border-[#131313] transition-colors placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#131313] mb-3 uppercase tracking-wider">Why do you want to join?</label>
                  <textarea 
                    rows="4"
                    placeholder="Describe why?"
                    className="w-full bg-white border-b border-gray-200 py-4 text-lg focus:outline-none focus:border-[#131313] transition-colors placeholder:text-gray-300 resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="pt-6 flex items-start gap-3">
                <div className="relative flex items-center">
                  <input type="checkbox" id="confirm" className="peer h-6 w-6 cursor-pointer appearance-none rounded border border-gray-300 checked:border-[#131313] checked:bg-[#131313] transition-all" />
                  <Check className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" size={14} strokeWidth={3} />
                </div>
                <label htmlFor="confirm" className="text-sm text-[#131313] font-medium leading-relaxed cursor-pointer select-none">
                  I confirm that all the information I have provided is true and accurate to the best of my knowledge.
                </label>
              </div>

              <div className="pt-8">
                <PixelButton type="primary" className="w-3/4 justify-center">
                <span>Apply</span>
                </PixelButton>
              </div>

            </form>
          </ScrollReveal>
        </div>

      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// MAIN CAREERS PAGE
// ---------------------------------------------------------------------------
const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div id="careers" className="w-full bg-white pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        
        <AnimatePresence mode="wait">
          {selectedJob ? (
            // SHOW APPLICATION FORM
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ApplicationForm job={selectedJob} onBack={() => setSelectedJob(null)} />
            </motion.div>
          ) : (
            // SHOW JOB LIST
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-20 items-start">
                
                {/* Left Header */}
                <div className="sticky top-32">
                   <ScrollReveal mode="fade-up">
                     <span className="text-[#D5312F] font-bold tracking-widest uppercase text-xs block mb-6">
                       / CAREERS
                     </span>
                     <h1 className="text-6xl md:text-8xl font-black text-[#131313] leading-[0.9] mb-8">
                       Join our team
                     </h1>
                     <p className="text-xl text-gray-600 mb-10 max-w-md">
                       We're always in the search for talented people to grow.
                     </p>
                   </ScrollReveal>
                </div>

                {/* Right List */}
                <div className="grid grid-cols-1 gap-4">
                  {jobs.map((job, i) => (
                    <ScrollReveal key={job.id} mode="slide-right" delay={i * 0.1}>
                      <div 
                        onClick={() => setSelectedJob(job)}
                        className="bg-[#FAFAFA] rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all cursor-pointer group border border-transparent hover:border-gray-200 relative overflow-hidden"
                      >
                        {/* Cut Corner */}
                        <div className="absolute top-0 right-0 w-10 h-10 bg-white transform rotate-45 translate-x-5 -translate-y-5 border border-gray-100" />
                        
                        <div className="flex justify-between items-center relative z-10">
                          <div>
                            <h3 className="text-2xl font-bold text-[#131313] mb-2 group-hover:text-[#D5312F] transition-colors">{job.title}</h3>
                            <p className="text-gray-500 text-xs font-bold tracking-wider uppercase">
                              {job.location} <span className="text-gray-300 mx-2">/</span> CONTRACT <span className="text-gray-300 mx-2">/</span> {job.salary}
                            </p>
                          </div>
                          <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-[#131313] group-hover:text-white transition-colors">
                             <ArrowUpRight size={24} />
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Careers;
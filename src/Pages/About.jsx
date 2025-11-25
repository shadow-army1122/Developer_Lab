import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { PixelRezReveal } from '../components/ui/PixelRezReveal';

// ASSET IMPORTS
import team1 from '../assets/img/team/1.jpg';
import team2 from '../assets/img/team/2.jpg';
import team3 from '../assets/img/team/3.jpg';
import team4 from '../assets/img/team/4.jpg';
import team5 from '../assets/img/team/5.jpg';
import team6 from '../assets/img/team/6.jpg';
import team7 from '../assets/img/team/7.jpg';
import team8 from '../assets/img/team/8.jpg';

import heroImage from '../assets/img/about/hero.jpg';
import storyImage from '../assets/img/about/story.jpg';

const team = [
  { name: "Bayu Pratama", role: "CEO", img: team1 },
  { name: "Putri Ananda", role: "CTO", img: team2 },
  { name: "Gilang Nugroho", role: "VP OF ENGINEERING", img: team3 },
  { name: "Dinda Kumalasari", role: "VP OF DESIGN", img: team4 },
  { name: "Kartika Sari", role: "SENIOR DESIGNER", img: team5 },
  { name: "Ardhito Prayogo", role: "SENIOR ENGINEER", img: team6 },
  { name: "Paramitha", role: "SOCIAL MEDIA SPECIALIST", img: team7 },
  { name: "Samsul Eka", role: "PARTNERSHIPS MANAGER", img: team8 },
];

const About = () => {
  return (
    <div id="about" className="w-full bg-white">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Text */}
            <div>
              <ScrollReveal mode="slide-right">
                <span className="text-[#D5312F] font-bold tracking-widest uppercase text-xs block mb-6">
                  / ABOUT US
                </span>
                <h1 className="text-6xl md:text-8xl font-black text-[#131313] leading-[0.9] mb-8">
                  The humans<br />behind Sadewa
                </h1>
              </ScrollReveal>
              
              <ScrollReveal mode="fade-up" delay={0.2}>
                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                  With years of experience in digital solutions and a deep curiosity for AI's potential, 
                  we saw an opportunity to help companies move beyond repetitive work and unlock their true potential.
                </p>
              </ScrollReveal>
            </div>

            {/* Right Image */}
            <div className="relative">
              <PixelRezReveal className="w-full h-full">
                <img 
                  src={heroImage} 
                  alt="Sadewa Team" 
                  className="w-full rounded-3xl shadow-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </PixelRezReveal>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
               <PixelRezReveal>
                  <img 
                    src={storyImage} 
                    alt="Our Story" 
                    className="w-full rounded-3xl shadow-2xl"
                  />
               </PixelRezReveal>
            </div>
            <div className="order-1 md:order-2">
              <ScrollReveal mode="fade-up">
                <span className="text-[#D5312F] font-bold tracking-widest uppercase text-xs block mb-6">
                  / OUR STORY
                </span>
                <h2 className="text-5xl md:text-7xl font-black text-[#131313] leading-[0.9] mb-8">
                  Rooted in wisdom,<br />driven by innovation
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Founded in Indonesia, Sadewa is named after the wise and strong twin of Nakula from the Mahabharata. 
                  From Jakarta to the world, we blend Indonesian creativity with advanced AI to solve real business challenges.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* HUMANS BEHIND AI (New Design) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-20">
             <ScrollReveal mode="fade-up">
                <span className="text-[#D5312F] font-bold tracking-widest uppercase text-xs block mb-6">
                  / TEAMS
                </span>
                <h2 className="text-6xl md:text-8xl font-black text-[#131313]">
                  Humans behind AI
                </h2>
             </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={i} mode="fade-up" delay={i * 0.1} className="group">
                <div 
                  className="relative bg-white border border-gray-100 p-6 pb-8 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  // Custom Clip Path for the "Cut Corner" look
                  style={{ clipPath: "polygon(0 0, 85% 0, 100% 10%, 100% 100%, 0 100%)", borderRadius: "1.5rem" }} 
                >
                  {/* Number */}
                  <span className="absolute top-6 left-6 text-xs font-bold text-gray-300">
                     ■ 0{i + 1}
                  </span>

                  <div className="mt-8 mb-6 overflow-hidden rounded-2xl aspect-[4/5]">
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#131313] mb-1">{member.name}</h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN OUR TEAM (New Design) */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid md:grid-cols-2 gap-20 items-start">
            
            {/* Left Sticky Content */}
            <div className="sticky top-32">
               <ScrollReveal mode="fade-up">
                 <span className="text-[#D5312F] font-bold tracking-widest uppercase text-xs block mb-6">
                   / CAREERS
                 </span>
                 <h2 className="text-6xl md:text-8xl font-black text-[#131313] leading-[0.9] mb-8">
                   Join our team
                 </h2>
                 <p className="text-xl text-gray-600 mb-10 max-w-md">
                   We're always in the search for talented people to grow.
                 </p>
                 <button className="bg-[#131313] text-white px-8 py-4 rounded-lg font-bold flex items-center gap-3 hover:bg-[#98fe00] hover:text-black transition-colors group">
                   See all openings 
                   <div className="bg-[#98fe00] text-black p-1 rounded group-hover:bg-white group-hover:text-black transition-colors">
                     <ArrowUpRight size={16} />
                   </div>
                 </button>
               </ScrollReveal>
            </div>

            {/* Right List */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Project Manager", location: "ON-SITE (GERMANY)", salary: "$250k - $350k" },
                { title: "Content Marketing Specialist", location: "REMOTE (CANADA)", salary: "$150k - $250k" },
                { title: "Human Resources", location: "ON-SITE (SINGAPORE)", salary: "$120k - $180k" },
                { title: "Software Engineer", location: "REMOTE", salary: "$200k - $300k" },
                { title: "Head of Design", location: "ON-SITE (INDONESIA)", salary: "$250k - $350k" },
                { title: "AI Automation Specialist", location: "REMOTE", salary: "$250k - $350k" },
              ].map((job, i) => (
                <ScrollReveal key={i} mode="slide-right" delay={i * 0.1}>
                  <div className="bg-white rounded-xl p-8 hover:bg-white/80 transition-all cursor-pointer group border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md relative overflow-hidden">
                    {/* Cut Corner Effect for Job Card */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-[#FAFAFA] transform rotate-45 translate-x-4 -translate-y-4 border border-gray-200" />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-[#131313] mb-2 group-hover:text-[#D5312F] transition-colors">{job.title}</h3>
                        <p className="text-gray-500 text-xs font-bold tracking-wider uppercase">
                          {job.location} <span className="text-gray-300 mx-2">/</span> CONTRACT <span className="text-gray-300 mx-2">/</span> {job.salary}
                        </p>
                      </div>
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#131313] group-hover:text-white transition-colors">
                         <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
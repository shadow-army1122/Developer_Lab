import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { PixelRezReveal } from '../components/ui/PixelRezReveal';
import {  PixelButton } from '../components/ui/PixelReveal'
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

const About = () => {
  return (
    <div id="about" className="w-full bg-white">
      
      {/* HERO SECTION (Exact Replica of Image) */}
      <section className="relative min-h-screen flex items-center bg-[#FAFAFA] overflow-hidden pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Top Label */}
          <div className="mb-12">
             <ScrollReveal mode="slide-right">
                <span className="text-gray-400 font-bold tracking-widest uppercase text-xs block">
                  / ABOUT US
                </span>
             </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* LEFT COLUMN: Text + Small Image */}
            <div className="flex flex-col gap-12">
              <div>
                <ScrollReveal mode="fade-up">
                  <h1 className="text-6xl md:text-8xl font-black text-[#131313] leading-[0.9] mb-8 tracking-tight">
                    The Humans<br />behind Developer Lab
                  </h1>
                </ScrollReveal>
              </div>

              {/* Small Image with Cut Corner */}
              <div className="relative w-full max-w-md aspect-[16/9] overflow-hidden group">
                 <PixelRezReveal className="w-full h-full">
                    <div className="w-full h-full relative" style={{ clipPath: "polygon(0 0, 85% 0, 100% 20%, 100% 100%, 0 100%)" }}>
                       <img 
                         src={storyImage} 
                         alt="Team Working" 
                         className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                       />
                    </div>
                 </PixelRezReveal>
              </div>

              <ScrollReveal mode="fade-up" delay={0.2}>
                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                 At   Developer Lab, we believe technology should elevate human potential, not replace it. 
                 Our team brings deep experience in AI, machine learning, full-stack development, automation systems, and intelligent digital products. 
                 With a shared passion for innovation, we help businesses transform their ideas into powerful, scalable, and future-ready solutions.
                </p>
              </ScrollReveal>
            </div>

            {/* RIGHT COLUMN: Large Image with Cut Corner */}
            <div className="relative h-full min-h-[600px]">
              <PixelRezReveal className="w-full h-full">
                <div 
                  className="w-full h-full relative overflow-hidden bg-gray-200"
                  style={{ clipPath: "polygon(0 0, 80% 0, 100% 10%, 100% 100%, 0 100%)" }}
                >
                  <img 
                    src={heroImage} 
                    alt="Developer Lab Team Happy" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105"
                  />
                </div>
              </PixelRezReveal>
            </div>

          </div>
        </div>
      </section>
      {/* WHO WE ARE SECTION */}
<section className="py-32 bg-white">
  <div className="container mx-auto px-6 md:px-12">

    <ScrollReveal mode="slide-right">
      <span className="text-gray-400 font-bold tracking-widest uppercase text-xs block mb-6">
        / WHO WE ARE
      </span>
    </ScrollReveal>

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT — TEXT AREA */}
      <ScrollReveal mode="fade-up">
        <div>
          <h2 className="text-6xl md:text-7xl font-black text-[#131313] leading-[0.9] mb-8">
            Where Innovation <br />Solves Real Problems
          </h2>

          <p className="text-xl text-gray-600 max-w-md leading-relaxed">
           Developer Lab is a modern tech-service company built by developers, engineers, and innovators who love solving real-world problems. 
           We specialize in designing intelligent digital ecosystems that simplify complexity, increase efficiency, and supercharge business growth.
          </p>
        </div>
      </ScrollReveal>

      {/* RIGHT — IMAGE WITH CUT CORNER */}
      <PixelRezReveal className="w-full h-full">
        <div 
          className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200"
          style={{ clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)" }}
        >
          <img
            src={storyImage}
            alt="Who We Are"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </PixelRezReveal>

    </div>
  </div>
</section>



      {/* CAREERS (Join our team) */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid md:grid-cols-2 gap-20 items-start">
            
            {/* Left Content */}
            <div className="sticky top-32">
               <ScrollReveal mode="fade-up">
                 <span className="text-gray-400 font-bold tracking-widest uppercase text-xs block mb-6">
                   / CAREERS
                 </span>
                 <h2 className="text-6xl md:text-8xl font-black text-[#131313] leading-[0.9] mb-8">
                   Join our team
                 </h2>
                 <p className="text-xl text-gray-600 mb-10 max-w-md">
                   We're always in the search for talented people to grow.
                 </p>
                <PixelButton type="primary" className="w-3/4" href="/careers">
                  See all Openings
                  </PixelButton>
               </ScrollReveal>
            </div>

            {/* Right List */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Project Manager" },
                { title: "Content Marketing Specialist" },
                { title: "Human Resources" },
                { title: "Software Engineer" },
                { title: "Head of Design" },
                { title: "AI Automation Specialist"},
              ].map((job, i) => (
                <ScrollReveal key={i} mode="slide-right" delay={i * 0.1}>
                  <div className="bg-[#F9F9F9] rounded-xl p-8 hover:bg-white hover:shadow-md transition-all cursor-pointer group border border-transparent hover:border-gray-200 relative overflow-hidden">
                    {/* Cut Corner Effect */}
                    <div className="absolute top-0 right-0 w-10 h-10 bg-white transform rotate-45 translate-x-5 -translate-y-5 border border-gray-100" />
                    
                    <div className="flex justify-between items-center relative z-10">
                      <div>
                        <h3 className="text-2xl font-bold text-[#131313] mb-2 group-hover:text-[#D5312F] transition-colors">{job.title}</h3>

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
        </div>
      </section>

    </div>
  );
};

export default About;

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const MobileFooter = () => {
  return (
    <footer className="block md:hidden bg-[#131313] text-white pt-16 pb-10 rounded-t-[2rem] mt-16 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[10%] right-[-30%] w-[280px] h-[280px] bg-[#D5312F] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 px-6">

        {/* CTA Section */}
        <div className="mb-14 border-b border-white/10 pb-10">
          <ScrollReveal mode="fade-up">
            <h2 className="text-3xl font-bold leading-snug mb-6">
              Ready to implement <br /> AI in your business?
            </h2>

            <button className="w-full bg-[#D5312F] text-white py-4 rounded-xl font-semibold text-base active:scale-[0.97] transition flex items-center justify-center gap-2 shadow-lg">
              Get Free Consultation <ArrowUpRight size={18} />
            </button>
          </ScrollReveal>
        </div>

        {/* Link Groups */}
        <div className="flex flex-col gap-12 mb-16">

          {/* Email */}
          <ScrollReveal delay={0.1}>
            <span className="text-[11px] text-gray-400 uppercase tracking-wider block mb-2">/ Email</span>
            <a
              href="mailto:contact.developerlab@gmail.com"
              className="text-xl font-semibold text-[#D5312F] break-all"
            >
              contact.developerlab@gmail.com
            </a>
          </ScrollReveal>

          {/* Navigation */}
          <ScrollReveal delay={0.2}>
            <span className="text-[11px] text-gray-400 uppercase tracking-wider block mb-3">/ Navigation</span>
            <ul className="space-y-2 text-base font-medium text-gray-300">
              {['Home', 'Services', 'Case Studies', 'Blog', 'Waitlist'].map(link => (
                <li key={link}>
                  <a href="#" className="active:opacity-70">{link}</a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Company */}
          <ScrollReveal delay={0.3}>
            <span className="text-[11px] text-gray-400 uppercase tracking-wider block mb-3">/ Company</span>
            <ul className="space-y-2 text-base font-medium text-gray-300">
              {['About Us', 'Careers', 'Contact Us'].map(link => (
                <li key={link}>
                  <a href="#" className="active:opacity-70">{link}</a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Social */}
          <ScrollReveal delay={0.4}>
            <span className="text-[11px] text-gray-400 uppercase tracking-wider block mb-3">/ Follow Us</span>
            <ul className="space-y-2 text-base font-medium text-gray-300">
              {['X / Twitter', 'Instagram', 'LinkedIn'].map(link => (
                <li key={link}>
                  <a href="#" className="active:opacity-70">{link}</a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

        </div>

        {/* Bottom Branding */}
        <div className="pt-6 border-t border-white/10">
          <h1 className="text-[18vw] font-black leading-none text-white/10 tracking-tighter text-center mb-8 select-none">
            Developer Lab
          </h1>

          <div className="flex flex-col gap-3 text-xs text-gray-500 text-center">
            <div className="flex justify-center gap-6">
              <a href="#" className="active:opacity-70">Privacy Policy</a>
              <a href="#" className="active:opacity-70">Terms</a>
            </div>
            <span className="text-[11px]">
              ©2025 Developer Lab. All rights reserved.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default MobileFooter;

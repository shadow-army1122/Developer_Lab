import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { PixelRezReveal } from "../components/ui/PixelRezReveal";

export default function MobileHome() {
  return (
    <div className="w-full bg-white text-[#131313] pb-24">

      {/* ================= HERO ================= */}
      <section className="px-6 pt-32 pb-24 bg-gradient-to-b from-[#fafafa] to-white">
        <ScrollReveal mode="fade-up">
          <h1 className="text-5xl font-extrabold leading-[1.15] mb-5 tracking-tight">
            Build the <span className="text-[#D5312F]">Future</span>.  
            <br />
            Scale with AI.
          </h1>
        </ScrollReveal>

        <ScrollReveal mode="fade-up" delay={0.2}>
          <p className="text-gray-600 text-base leading-relaxed mb-10">
            We design next-gen digital products powered by automation, AI and modern engineering.
          </p>
        </ScrollReveal>

        <ScrollReveal mode="scale" delay={0.4}>
          <button className="w-full bg-[#131313] text-white py-4 rounded-2xl text-lg font-semibold active:scale-[0.97] transition flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(0,0,0,0.15)]">
            Start a Project <ArrowUpRight size={20} />
          </button>
        </ScrollReveal>
      </section>

      {/* ================= SECTION DIVIDER ================= */}
      <div className="w-full h-4 bg-gradient-to-b from-transparent to-gray-100" />

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="px-6 py-14 bg-gray-100">
        <ScrollReveal mode="slide-right">
           <h2 className="text-3xl font-bold mb-6">What We Do</h2>
        </ScrollReveal>

        <div className="space-y-5">

          {/* CARD 1 */}
          <ScrollReveal delay={0.1}>
            <Link
              to="/services"
              className="block rounded-2xl p-5 bg-white shadow-md backdrop-blur-sm active:scale-[0.98] transition border border-gray-100"
            >
              <h3 className="font-semibold text-lg mb-1">AI Automation</h3>
              <p className="text-gray-500 text-sm">
                Custom agents & workflow automation systems for businesses.
              </p>
            </Link>
          </ScrollReveal>

          {/* CARD 2 */}
          <ScrollReveal delay={0.2}>
            <Link
              to="/services"
              className="block rounded-2xl p-5 bg-white shadow-md backdrop-blur-sm active:scale-[0.98] transition border border-gray-100"
            >
              <h3 className="font-semibold text-lg mb-1">App Development</h3>
              <p className="text-gray-500 text-sm">
                iOS, Android & Web apps built for performance and scalability.
              </p>
            </Link>
          </ScrollReveal>

          {/* CARD 3 */}
          <ScrollReveal delay={0.3}>
            <Link
              to="/services"
              className="block rounded-2xl p-5 bg-white shadow-md backdrop-blur-sm active:scale-[0.98] transition border border-gray-100"
            >
              <h3 className="font-semibold text-lg mb-1">Full-Stack Engineering</h3>
              <p className="text-gray-500 text-sm">
                Powerful backend + modern UI/UX for complete digital products.
              </p>
            </Link>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= FEATURED WORK ================= */}
      <section className="px-6 py-16 bg-white">
        <ScrollReveal mode="fade-up">
           <h2 className="text-3xl font-bold mb-3">Featured Work</h2>
           <p className="text-gray-500 text-sm mb-8">
             Some of our recent projects and collaborations.
           </p>
        </ScrollReveal>

        <div className="space-y-8">

          {/* PROJECT CARD 1 */}
          <ScrollReveal mode="scale" delay={0.1}>
            <Link
              to="/projects"
              className="block bg-gray-50 rounded-2xl overflow-hidden shadow-lg active:scale-[0.98] transition"
            >
              <div className="h-48 overflow-hidden relative">
                <PixelRezReveal className="w-full h-full">
                   <img
                     src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"
                     className="w-full h-full object-cover"
                     alt="Project"
                   />
                </PixelRezReveal>
              </div>
              <div className="p-5">
                <p className="uppercase text-xs font-bold text-[#D5312F] tracking-widest">
                  OBIMA / 2023
                </p>
                <h3 className="text-lg font-bold leading-tight mt-1">
                  AI Lead Scoring System
                </h3>
              </div>
            </Link>
          </ScrollReveal>

          {/* PROJECT CARD 2 */}
          <ScrollReveal mode="scale" delay={0.2}>
            <Link
              to="/projects"
              className="block bg-gray-50 rounded-2xl overflow-hidden shadow-lg active:scale-[0.98] transition"
            >
              <div className="h-48 overflow-hidden relative">
                <PixelRezReveal className="w-full h-full">
                   <img
                     src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop"
                     className="w-full h-full object-cover"
                     alt="Project"
                   />
                </PixelRezReveal>
              </div>
              <div className="p-5">
                <p className="uppercase text-xs font-bold text-[#D5312F] tracking-widest">
                  NAKULA / 2022
                </p>
                <h3 className="text-lg font-bold leading-tight mt-1">
                  Portfolio + Automation Suite
                </h3>
              </div>
            </Link>
          </ScrollReveal>

        </div>

        <ScrollReveal mode="fade-up" delay={0.4}>
          <button className="mt-8 w-full py-4 bg-[#131313] text-white rounded-2xl font-semibold active:scale-[0.97] transition flex items-center justify-center gap-2">
            View All Projects <ArrowUpRight size={20} />
          </button>
        </ScrollReveal>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="px-6 py-16 bg-gray-100">
        <ScrollReveal mode="slide-right">
           <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
        </ScrollReveal>

        <div className="space-y-5">

          <ScrollReveal delay={0.1}>
            <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-100">
              <h3 className="font-semibold text-lg mb-1">Fast Execution</h3>
              <p className="text-sm text-gray-500">
                Launch MVPs in weeks — not months.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-100">
              <h3 className="font-semibold text-lg mb-1">AI-Driven Workflow</h3>
              <p className="text-sm text-gray-500">
                Smart systems that scale your operations.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-100">
              <h3 className="font-semibold text-lg mb-1">Designed for Growth</h3>
              <p className="text-sm text-gray-500">
                Architecture that grows with your business.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 pb-24 bg-white">
        <ScrollReveal mode="scale" delay={0.2}>
          <div className="bg-[#131313] text-white p-7 rounded-2xl shadow-xl text-center">
            <h3 className="text-2xl font-extrabold mb-3">
              Let’s Build Something Incredible
            </h3>
            <p className="text-gray-300 text-sm mb-8">
              Work with an engineering-first team that values quality and speed.
            </p>

            <button className="w-full py-4 bg-white text-[#131313] rounded-xl font-semibold flex items-center justify-center gap-2 active:scale-[0.97]">
              Contact Us <ArrowUpRight size={20} />
            </button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
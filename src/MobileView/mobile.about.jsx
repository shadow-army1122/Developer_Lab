import React, { useRef, useEffect, useState } from "react";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import PixelRezRevealEverytime from "../components/ui/PixelRezRevealEverytime";

// ASSETS
import heroImage from "../assets/img/about/hero.jpg";
import storyImage from "../assets/img/about/story.jpg";
import team1 from "../assets/img/team/1.jpg";
import team2 from "../assets/img/team/2.jpg";
import team3 from "../assets/img/team/3.jpg";
import team4 from "../assets/img/team/4.jpg";
import team5 from "../assets/img/team/5.jpg";
import team6 from "../assets/img/team/6.jpg";
import team7 from "../assets/img/team/7.jpg";
import team8 from "../assets/img/team/8.jpg";

const team = [
  { name: "Bayu Pratama", role: "CEO", img: team1 },
  { name: "Putri Ananda", role: "CTO", img: team2 },
  { name: "Gilang Nugroho", role: "VP OF ENGINEERING", img: team3 },
  { name: "Dinda Kumalasari", role: "VP OF DESIGN", img: team4 },
  { name: "Kartika Sari", role: "SENIOR DESIGNER", img: team5 },
  { name: "Ardhito Prayogo", role: "SENIOR ENGINEER", img: team6 },
  { name: "Paramitha", role: "SOCIAL MEDIA", img: team7 },
  { name: "Samsul Eka", role: "PARTNERSHIPS", img: team8 },
];

const MobileAbout = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔥 AUTO CAROUSEL + ACTIVE CARD DETECTION
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let isAuto = true;
    const cardWidth = 260 + 24; // width + gap

    const updateActive = () => {
      const center = carousel.scrollLeft + carousel.offsetWidth / 2;
      const cards = Array.from(carousel.children);

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(center - cardCenter);

        // Find active card
        if (dist < closestDistance) {
          closestDistance = dist;
          closestIndex = i;
        }

        // Smooth scaling effect
        const scale = Math.max(0.85, 1 - dist / 450);
        card.style.transform = `scale(${scale})`;
      });

      setActiveIndex(closestIndex);
    };

    const autoScroll = () => {
      if (!isAuto) return;

      const maxScroll = carousel.scrollWidth - carousel.clientWidth;

      if (carousel.scrollLeft >= maxScroll - 5) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    };

    const interval = setInterval(autoScroll, 2200);

    carousel.addEventListener("scroll", updateActive);
    carousel.addEventListener("touchstart", () => (isAuto = false));
    carousel.addEventListener("mousedown", () => (isAuto = false));

    updateActive();

    return () => {
      clearInterval(interval);
      carousel.removeEventListener("scroll", updateActive);
    };
  }, []);

  return (
    <div className="block md:hidden pb-20 bg-white">

      {/* HERO */}
      <div className="px-6 pt-32 pb-16">
        <ScrollReveal mode="fade-up">
          <span className="text-[#D5312F] font-bold tracking-widest uppercase text-xs block mb-4">
            / ABOUT US
          </span>

          <h1 className="text-5xl font-black text-[#131313] leading-[0.95] mb-6">
            The humans<br/>behind Sadewa
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We help companies move beyond repetitive work and unlock their true potential through AI.
          </p>
         <PixelRezRevealEverytime>
          <div className="rounded-2xl overflow-hidden aspect-square shadow-lg">
            <img src={heroImage} className="w-full h-full object-cover" />
          </div>
          </PixelRezRevealEverytime>
        </ScrollReveal>
      </div>

      {/* STORY */}
      <div className="px-6 py-16 bg-[#FAFAFA]">
        <PixelRezRevealEverytime>
          <div className="rounded-2xl overflow-hidden aspect-video shadow-lg mb-8">
            <img src={storyImage} className="w-full h-full object-cover" />
          </div>
         </PixelRezRevealEverytime>
         <ScrollReveal>
          <span className="text-[#D5312F] font-bold tracking-widest uppercase text-xs block mb-4">
            / OUR STORY
          </span>

          <h2 className="text-4xl font-black text-[#131313] mb-6">Rooted in wisdom</h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Founded in Indonesia, blending creativity with advanced AI to solve real business challenges.
          </p>
        </ScrollReveal>
      </div>

      {/* VISION */}
      <div className="px-6 py-16">
        <ScrollReveal mode="fade-up">
          <span className="text-[#D5312F] font-bold tracking-widest uppercase text-xs block mb-3">
            / OUR VISION
          </span>

          <h2 className="text-4xl font-black text-[#131313] mb-4">Our Vision</h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            To build intelligent systems that elevate human capability — not replace it.
          </p>
        </ScrollReveal>
      </div>

      {/* MISSION */}
      <div className="px-6 py-16 bg-[#FAFAFA]">
        <ScrollReveal mode="fade-up">
          <span className="text-[#D5312F] font-bold tracking-widest uppercase text-xs block mb-3">
            / OUR MISSION
          </span>

          <h2 className="text-4xl font-black text-[#131313] mb-4">Our Mission</h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            To democratize AI by transforming complex systems into simple, practical, powerful tools.
          </p>
        </ScrollReveal>
      </div>

      {/* TEAM */}
      <div className="px-6 py-16">
        <ScrollReveal mode="fade-up">
          <span className="text-[#D5312F] font-bold tracking-widest uppercase text-xs block mb-3">
            / THE TEAM
          </span>
          <h2 className="text-4xl font-black text-[#131313] mb-8">Meet Our Team</h2>
        </ScrollReveal>

        {/* CAROUSEL */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar items-center"
          style={{ scrollBehavior: "smooth" }}
        >
          {team.map((member, i) => (
            <div
              key={i}
              className="snap-center flex-shrink-0 transition-transform duration-300"
              style={{ width: "260px" }}
            >
              <PixelRezRevealEverytime active={activeIndex === i}>
                <div className="bg-[#FAFAFA] p-5 rounded-2xl border border-gray-100 shadow-sm w-full">
                  <div className="aspect-square rounded-xl overflow-hidden mb-4">
                    <img src={member.img} className="w-full h-full object-cover" />
                  </div>

                  <h3 className="text-xl font-bold text-[#131313]">{member.name}</h3>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
              </PixelRezRevealEverytime>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MobileAbout;

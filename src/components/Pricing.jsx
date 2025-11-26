import React, { useState } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Skill Launchpad",
      desc: "Perfect for Students & Beginners",
      price:  "₹10,000",
      features: ["Complete Course Training", "Internship Opportunity", "Real-World Project Experience", "Weekly Progress Evaluation","Project Presentation & Certification"],
      highlight: false
    },
    {
      name: "Ignite Brand Plan",
      desc: "Perfect for Startups & New Brands",
      price:  "₹25,000",
      features: ["High-quality Landing Page Website", "SEO Setup & Optimization", "Logo Design + Brand Identity Pack", "Brand Name Suggestions","Social Media Kit Setup"],
      highlight: true
    },
    {
      name: "Innovation Tech Build",
      desc: "Perfect for Businesses Building Custom Tech Products",
      price:  "Starts from ₹1,00,000",
      features: ["Full-stack Product Design & Development", "Custom Features & Automation Workflows", "Performance-Optimized Architecture", "Weekly Build Updates & Sprint Reviews","Deployment + Post-Launch Support"],
      highlight: false
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <div>
             <span className="text-sm text-brand-gray uppercase tracking-wider">/ Pricing</span>
             <h2 className="text-5xl font-bold mt-4 text-brand-black">Choose your plan</h2>
           </div>
           
           {/* TOGGLE SWITCH */}
           <div className="flex items-center bg-gray-100 p-1 rounded-full mt-6 md:mt-0">
  

              <button 
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  !isYearly ? 'bg-[#D5312F] text-black' : 'text-brand-gray'
                }`}
              >
                Monthly
              </button>
           </div>
        </div>

        {/* PLANS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-3xl border flex flex-col ${
                plan.highlight 
                  ? 'bg-brand-black text-white border-brand-black' 
                  : 'bg-white border-gray-200 text-brand-black'
              }`}
            >
              
              {/* TITLE */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className={`text-sm mt-2 ${plan.highlight ? 'text-gray-400' : 'text-brand-gray'}`}>
                  {plan.desc}
                </p>
              </div>
              
              {/* PRICE */}
              <div className="mb-8">
                 {plan.price === "Custom" ? (
                   <span className="text-4xl font-bold">Get quote</span>
                 ) : (
                   <div className="flex items-baseline gap-1">
                     <span className="text-4xl font-bold">{plan.price}</span>
                     <span className="text-sm opacity-60">/month</span>
                   </div>
                 )}
              </div>

              {/* FEATURES */}
              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div 
                      className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ₹{
                        plan.highlight 
                          ? 'bg-[#D5312F] text-black' 
                          : 'bg-gray-100 text-black'
                      }`}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA BUTTON */}
              <button
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] ${
                  plan.highlight 
                    ? 'bg-[#D5312F] text-black' 
                    : 'bg-brand-black text-white'
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : `Choose ${plan.name}`} 
                <ArrowUpRight size={18} />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;

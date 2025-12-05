import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const MobileContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="block md:hidden pt-32 pb-20 bg-white px-6">
      
      {/* Header */}
      <div className="mb-12">
        <ScrollReveal mode="slide-right">
          <span className="text-[#D5312F] font-bold tracking-widest uppercase text-xs block mb-4">
            / CONTACT
          </span>
          <h1 className="text-5xl font-black text-[#131313] leading-[0.95] mb-6">
            Let's build<br/>something great.
          </h1>
        </ScrollReveal>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col gap-6 mb-16">
         <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Mail size={18} className="text-[#131313]" />
               </div>
               <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Email</span>
                  <a href="mailto:hello@sadewa.com" className="text-sg font-bold text-[#131313]">contact.developerlab@gmail.com</a>
               </div>
            </div>
         </ScrollReveal>

         <ScrollReveal delay={0.2}>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Phone size={18} className="text-[#131313]" />
               </div>
               <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Phone</span>
                  <p className="text-lg font-bold text-[#131313]">+91 96335 41720</p>
               </div>
            </div>
         </ScrollReveal>
      </div>

      {/* Form */}
      <ScrollReveal delay={0.3}>
        <form onSubmit={handleSubmit} className="space-y-6">
           <div>
             <label className="block text-xs font-bold text-[#131313] mb-2 uppercase tracking-wider">Name</label>
             <input 
               type="text" 
               name="name"
               value={formData.name}
               onChange={handleChange}
               required
               className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-5 py-4 text-base focus:outline-none focus:border-[#131313] transition-colors"
               placeholder="John Doe"
             />
           </div>

           <div>
             <label className="block text-xs font-bold text-[#131313] mb-2 uppercase tracking-wider">Email</label>
             <input 
               type="email" 
               name="email"
               value={formData.email}
               onChange={handleChange}
               required
               className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-5 py-4 text-base focus:outline-none focus:border-[#131313] transition-colors"
               placeholder="john@example.com"
             />
           </div>

           <div>
             <label className="block text-xs font-bold text-[#131313] mb-2 uppercase tracking-wider">Message</label>
             <textarea 
               name="message"
               value={formData.message}
               onChange={handleChange}
               required
               rows="4"
               className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-5 py-4 text-base focus:outline-none focus:border-[#131313] transition-colors resize-none"
               placeholder="Tell us about your project..."
             ></textarea>
           </div>

           <button className="w-full bg-[#131313] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-transform shadow-lg">
             {status === 'submitting' ? 'Sending...' : 'Send Message'} <ArrowUpRight size={20} />
           </button>

           {status === 'success' && <p className="text-[#D5312F] font-bold text-center text-sm">Message sent successfully!</p>}
           {status === 'error' && <p className="text-red-600 font-bold text-center text-sm">Something went wrong.</p>}
        </form>
      </ScrollReveal>

    </div>
  );
};

export default MobileContact;
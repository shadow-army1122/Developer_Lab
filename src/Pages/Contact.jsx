import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { PixelRezReveal } from "../components/ui/PixelRezReveal";

const Contact = () => {
  return (
    <div className="hidden md:block pt-40 pb-32 bg-white">
      
      {/* HERO */}
      <PixelRezReveal>
        <div className="text-center mb-24 px-8">
          <span className="text-[#D5312F] text-xs font-semibold tracking-widest uppercase block mb-4">
            / Contact Us
          </span>

          <h1 className="text-7xl font-black text-[#131313] leading-[0.9] mb-6">
            Let's build something<br />intelligent together.
          </h1>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We help companies integrate AI systems, automate workflows, and build predictive engines.
            Tell us what you want to improve — we’ll make it happen.
          </p>
        </div>
      </PixelRezReveal>

      {/* MAIN SECTION */}
      <div className="container mx-auto px-12 grid grid-cols-2 gap-24">
        
        {/* LEFT SIDE — CONTACT INFO */}
        <div className="space-y-14">
          
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl"
          >
            <Mail className="text-[#D5312F] mb-4" size={32} />
            <h3 className="text-2xl font-bold text-[#131313] mb-2">Email Us</h3>
            <p className="text-gray-600 text-lg">contact.developerlab@gmail.com</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl"
          >
            <Phone className="text-[#D5312F] mb-4" size={32} />
            <h3 className="text-2xl font-bold text-[#131313] mb-2">Call Us</h3>
            <p className="text-gray-600 text-lg">+91 9876543210</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl"
          >
            <MapPin className="text-[#D5312F] mb-4" size={32} />
            <h3 className="text-2xl font-bold text-[#131313] mb-2">Our Office</h3>
            <p className="text-gray-600 text-lg">Kerala, India</p>
          </motion.div>

        </div>

        {/* RIGHT SIDE — FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-12 rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl"
        >
          <h2 className="text-4xl font-bold mb-8 text-[#131313]">Send a Message</h2>

          <form className="space-y-8">
            
            {/* Input */}
            <div className="relative">
              <input
                type="text"
                required
                className="w-full border-b-2 border-gray-300 py-3 focus:border-[#D5312F] outline-none transition"
              />
              <label className="absolute left-0 top-0 text-gray-500 text-sm pointer-events-none">
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                required
                className="w-full border-b-2 border-gray-300 py-3 focus:border-[#D5312F] outline-none transition"
              />
              <label className="absolute left-0 top-0 text-gray-500 text-sm">
                Email Address
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                required
                rows="4"
                className="w-full border-b-2 border-gray-300 py-3 focus:border-[#D5312F] outline-none transition"
              ></textarea>
              <label className="absolute left-0 top-0 text-gray-500 text-sm">
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#D5312F] text-white py-4 rounded-xl font-bold text-lg 
                         flex items-center justify-center gap-2 shadow-lg hover:opacity-90 active:scale-95 transition"
            >
              Send Message <ArrowUpRight size={20} />
            </button>

          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;

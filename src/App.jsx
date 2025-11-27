import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import OurApproach from './components/OurApproach';
import Testimonials from './components/Testimonials';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Bottlenecks from './components/Bottlenecks';
import ScrollToSection from "./components/ScrollToSection";

import About from './Pages/About';
import Careers from './Pages/Careers';

import PageLoader from './components/ui/PageLoader';

function App() {
  return (
    <BrowserRouter>
      <div className="relative antialiased bg-white min-h-screen selection:bg-brand-lime selection:text-black">

        <PageLoader />
        <Navbar />

        <Routes>

          {/* HOME PAGE */}
          <Route 
            path="/" 
            element={
              <>
                <ScrollToSection />
                <Hero />
                <Bottlenecks />
                <Services />
                <CaseStudies />
                <OurApproach />
                <Testimonials />
                <Comparison />
                <Pricing />
                <Footer />
              </>
            } 
          />

          {/* ABOUT PAGE */}
          <Route path="/about" element={<><About /> <Footer/></>} />

          {/* SERVICES PAGE */}
          <Route 
            path="/services" 
            element={
              <>
                <Hero />
                <Bottlenecks />
                <Services />
                <CaseStudies />
                <OurApproach />
                <Testimonials />
                <Comparison />
                <Pricing />
                <Footer />
              </>
            } 
          />

          {/* CAREERS PAGE */}
          <Route 
            path="/careers" 
            element={<><Careers /> <Footer/></>} 
          />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

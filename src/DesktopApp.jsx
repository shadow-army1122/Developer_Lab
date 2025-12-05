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
import ScrollToSection from './components/ScrollToSection';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Careers from './Pages/Careers';
import Contact from './Pages/Contact';
import PageLoader from './components/ui/PageLoader';
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function DesktopApp() {
  return (
    <BrowserRouter>
    <ScrollToTop />
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

          {/* CAREERS */}
          <Route path="/careers" element={<><Careers /> <Footer/></>} />

          {/* PROJECTS */}
          <Route path="/projects" element={<><Projects /> <Footer/></>} />

             <Route path="/contact" element={<><Contact /> <Footer/></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

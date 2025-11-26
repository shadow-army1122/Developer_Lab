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

// Pages
import About from './Pages/About';

// Loader
import PageLoader from './components/ui/PageLoader';

function App() {
  return (
    <BrowserRouter>
      <div className="relative antialiased bg-white min-h-screen selection:bg-brand-lime selection:text-black">

        {/* Global Loader */}
        <PageLoader />

        <Navbar />

        <Routes>

          {/* HOME PAGE */}
          <Route 
            path="/" 
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

          {/* external PAGE */}
          <Route path="/about" element={<><About /> <Footer/></>} />
          <Route 
            path="/Services" 
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
        </Routes>
            
      </div>
    </BrowserRouter>
  );
}

export default App;

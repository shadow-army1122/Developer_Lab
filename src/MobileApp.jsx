import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import MobileHome from "./MobileView/mobile.Home";
import MobileAbout from "./MobileView/mobile.about";
import MobileServices from "./MobileView/mobile.Services";
import MobileProjects from "./MobileView/mobile.Projects";
import MobileCareers from "./MobileView/mobile.Careers";

import PageLoader from "./MobileView/mobile.PageLoader";
import Navbar from "./MobileView/mobile.Navbar";
import Footer from "./MobileView/mobile.Footer";
import Contact from "./MobileView/mobile.Contact";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function MobileApp() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <PageLoader />
      <Navbar />

      <Routes>
        <Route path="/" element={<MobileHome />} />
        <Route path="/about" element={<MobileAbout />} />
        <Route path="/services" element={<MobileServices />} />
        <Route path="/projects" element={<MobileProjects />} />
        <Route path="/careers" element={<MobileCareers />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

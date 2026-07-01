/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Core layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ScrollProgressBar, ScrollToTop } from './components/UI';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Fees from './pages/Fees';
import Staff from './pages/Staff';
import Exams from './pages/Exams';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Helper component to auto-scroll to top on route change
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll to Top on page transition */}
      <ScrollToTopOnNavigate />

      {/* Elegant scroll progress visual indicator */}
      <ScrollProgressBar />

      {/* Main app layout wrapper with soft background */}
      <div className="min-h-screen flex flex-col theme-bg text-slate-800 dark:text-slate-100 transition-colors duration-300">
        
        {/* Floating Glass Navigation Header */}
        <Navbar />

        {/* Content Body */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Premium multi-column dark Footer */}
        <Footer />

        {/* Floating back-to-top button */}
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

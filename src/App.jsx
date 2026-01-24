import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LazyMotion, domAnimation } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

// Lazy load components
const ParticleCanvas = React.lazy(() => import('./components/ui/ParticleCanvas'));
const CursorGlow = React.lazy(() => import('./components/ui/CursorGlow'));
const Work = React.lazy(() => import('./pages/Work'));
const Certifications = React.lazy(() => import('./pages/Certifications'));
const Contact = React.lazy(() => import('./pages/Contact'));
const ProjectPage = React.lazy(() => import('./pages/ProjectPage'));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [mountEffects, setMountEffects] = useState(false);

  useEffect(() => {
    // Check if device is mobile (using 768px as breakpoint)
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    // Only mount effects on desktop after delay
    if (!isMobile) {
      const timer = setTimeout(() => {
        setMountEffects(true);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <LazyMotion features={domAnimation} strict>
        <div className="antialiased overflow-x-hidden min-h-screen">
          {mountEffects && (
            <Suspense fallback={null}>
              <ParticleCanvas />
              <CursorGlow />
            </Suspense>
          )}
          <Header />

          <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-machine-accent">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
            </Routes>
          </Suspense>

          <Footer />
        </div>
      </LazyMotion>
    </Router>
  );
}

export default App;

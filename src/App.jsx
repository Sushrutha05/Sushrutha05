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
const NaadSwarPremium = React.lazy(() => import('./pages/NaadSwarPremium'));
const NexusModular = React.lazy(() => import('./pages/NexusModular'));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const MainContent = () => {
  const { pathname } = useLocation();
  const isPremiumPage = pathname === '/naadswar-premium' || pathname === '/nexus-modular';
  const [mountEffects, setMountEffects] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) {
      const timer = setTimeout(() => {
        setMountEffects(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="antialiased overflow-x-hidden min-h-screen">
      {mountEffects && (
        <Suspense fallback={null}>
          <ParticleCanvas />
          <CursorGlow />
        </Suspense>
      )}
      
      {!isPremiumPage && <Header />}

      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-machine-accent">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/naadswar-premium" element={<NaadSwarPremium />} />
          <Route path="/nexus-modular" element={<NexusModular />} />
        </Routes>
      </Suspense>

      {!isPremiumPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LazyMotion features={domAnimation} strict>
        <MainContent />
      </LazyMotion>
    </Router>
  );
}

export default App;

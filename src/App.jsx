import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ParticleCanvas from './components/ui/ParticleCanvas';
import CursorGlow from './components/ui/CursorGlow';
import Home from './pages/Home';
import Work from './pages/Work';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import ProjectPage from './pages/ProjectPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="antialiased overflow-x-hidden min-h-screen">
        <ParticleCanvas />
        <CursorGlow />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

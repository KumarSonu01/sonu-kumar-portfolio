import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeSection from './pages/HomeSection';
import AboutSection from './pages/AboutSection';
import StackSection from './pages/StackSection';
import WorkSection from './pages/WorkSection';
import ExperienceSection from './pages/ExperienceSection';
import ContactSection from './pages/ContactSection';
import Chatbot from './components/Chatbot';

function PortfolioMain({ activeSection, setActiveSection }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Scrollspy observer for seamless section tracking
  useEffect(() => {
    const sections = ['home', 'about', 'stack', 'work', 'experience', 'contact'];
    
    // If arriving at a direct route like /work, scroll to it smoothly
    const currentPath = location.pathname.replace('/', '');
    if (currentPath && sections.includes(currentPath)) {
      setTimeout(() => {
        const el = document.getElementById(currentPath);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.1
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname, setActiveSection]);

  const handleNavigate = (id) => {
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update browser URL without reloading
      window.history.pushState(null, '', id === 'home' ? '/' : `/${id}`);
    } else {
      navigate(id === 'home' ? '/' : `/${id}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-purple-500 selection:text-white">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="flex-grow space-y-6 sm:space-y-10">
        <HomeSection onNavigate={handleNavigate} />
        <AboutSection onNavigate={handleNavigate} />
        <StackSection />
        <WorkSection onNavigate={handleNavigate} />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer onNavigate={handleNavigate} />
      <Chatbot />
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <Routes>
      <Route 
        path="/" 
        element={<PortfolioMain activeSection={activeSection} setActiveSection={setActiveSection} />} 
      />
      <Route 
        path="/home" 
        element={<PortfolioMain activeSection="home" setActiveSection={setActiveSection} />} 
      />
      <Route 
        path="/about" 
        element={<PortfolioMain activeSection="about" setActiveSection={setActiveSection} />} 
      />
      <Route 
        path="/stack" 
        element={<PortfolioMain activeSection="stack" setActiveSection={setActiveSection} />} 
      />
      <Route 
        path="/work" 
        element={<PortfolioMain activeSection="work" setActiveSection={setActiveSection} />} 
      />
      <Route 
        path="/experience" 
        element={<PortfolioMain activeSection="experience" setActiveSection={setActiveSection} />} 
      />
      <Route 
        path="/contact" 
        element={<PortfolioMain activeSection="contact" setActiveSection={setActiveSection} />} 
      />
    </Routes>
  );
  return (
  <div className="min-h-screen flex flex-col justify-between selection:bg-purple-500 selection:text-white">
    <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

    <main className="flex-grow space-y-6 sm:space-y-10">
      <HomeSection onNavigate={handleNavigate} />
      <AboutSection onNavigate={handleNavigate} />
      <StackSection />
      <WorkSection onNavigate={handleNavigate} />
      <ExperienceSection />
      <ContactSection />
    </main>

    <Footer onNavigate={handleNavigate} />

    <Chatbot />
  </div>
);
}

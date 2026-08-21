
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import About from '@/components/About';
import Quotes from '@/components/Quotes';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToProjects) {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-pattern-grid">
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProjectGrid />
        <About />
        <Quotes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

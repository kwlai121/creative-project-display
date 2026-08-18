
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import About from '@/components/About';
import Quotes from '@/components/Quotes';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
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

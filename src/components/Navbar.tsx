import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  hideNavLinks?: boolean;
}

const Navbar = ({ hideNavLinks = false }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  return (
    <>
      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Skip to main content
      </a>
      
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4",
          scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        )}
      >
        <div className="container-width flex items-center justify-between">
        <a href="#" className="text-xl font-medium tracking-tight">
          <span className="sr-only">Designer Portfolio</span>
          <span className="text-primary">K.Lai</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
          <a 
            href="#projects" 
            className="nav-link"
            tabIndex={hideNavLinks ? -1 : undefined}
            aria-hidden={hideNavLinks || undefined}
          >
            Portfolio
          </a>
          <a 
            href="#about" 
            className="nav-link"
            tabIndex={hideNavLinks ? -1 : undefined}
            aria-hidden={hideNavLinks || undefined}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="nav-link"
            tabIndex={hideNavLinks ? -1 : undefined}
            aria-hidden={hideNavLinks || undefined}
          >
            Contact
          </a>
          <ThemeToggle hidden={hideNavLinks} />
        </nav>
        
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle hidden={hideNavLinks} />
          <button 
            className="p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden absolute top-full left-0 right-0 bg-background border-t shadow-lg animate-fade-in duration-300">
          <nav 
            className="container-width py-4 flex flex-col space-y-4"
            role="menu"
            aria-label="Mobile navigation"
          >
            <a 
              href="#projects" 
              className="nav-link py-2 px-4 hover:bg-muted rounded-md" 
              onClick={() => setMobileMenuOpen(false)}
              role="menuitem"
              tabIndex={hideNavLinks ? -1 : undefined}
              aria-hidden={hideNavLinks || undefined}
            >
              Portfolio
            </a>
            <a 
              href="#about" 
              className="nav-link py-2 px-4 hover:bg-muted rounded-md" 
              onClick={() => setMobileMenuOpen(false)}
              role="menuitem"
              tabIndex={hideNavLinks ? -1 : undefined}
              aria-hidden={hideNavLinks || undefined}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="nav-link py-2 px-4 hover:bg-muted rounded-md" 
              onClick={() => setMobileMenuOpen(false)}
              role="menuitem"
              tabIndex={hideNavLinks ? -1 : undefined}
              aria-hidden={hideNavLinks || undefined}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
      </header>
    </>
  );
};

export default Navbar;

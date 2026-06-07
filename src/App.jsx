import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initSmoothScroll, destroySmoothScroll } from './utils/smoothScroll';
import { initGA, trackPageView } from './utils/analytics';
import { useMetaTags } from './utils/seo';
import './styles/darkMode.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Set up SEO meta tags
  useMetaTags({
    title: 'Syed Raiyan Nasim - Computer Science & Engineering Student | Portfolio',
    description: 'Passionate Computer Science & Engineering student specializing in web development, software engineering, and innovative technology solutions. View my projects, skills, and achievements.',
    keywords: 'Syed Raiyan Nasim, Raiyan Nasim, Computer Science, Software Engineer, Web Developer, Portfolio, React Developer, Full Stack Developer, CSE Student',
    url: 'https://raiyan91200-new.vercel.app/'
  });

  useEffect(() => {
    // Initialize Google Analytics on app mount
    initGA();
    // Track initial page view
    trackPageView(window.location.pathname);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      // Initialize smooth scroll after preloader completes
      const lenis = initSmoothScroll();
      
      return () => {
        destroySmoothScroll();
      };
    }
  }, [isLoaded]);

  return (
    <div className="min-h-screen relative scanline-overlay">
      {/* Preloader */}
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}

      {/* Main Content */}
      <div
        className={`transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Background */}
        <div className="fixed inset-0 z-0">
          {/* Gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 20% 50%, rgba(0,212,255,0.04) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 20%, rgba(178,75,243,0.03) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 80%, rgba(57,255,20,0.02) 0%, transparent 50%),
                #0A0A0F
              `,
            }}
          />
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Certificates />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
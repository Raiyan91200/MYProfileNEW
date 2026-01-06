import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import { initGA, trackPageView } from './utils/analytics';
import { useMetaTags } from './utils/seo';
import './styles/antd-dark.css';
import './styles/darkMode.css';

function App() {
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

  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-hidden">
        {/* Unified Background for All Sections */}
        <div className="fixed inset-0 hero-background z-0">
          {/* Animated Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-gradient-shift"></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
            <div className="particle particle-6"></div>
            <div className="particle particle-7"></div>
            <div className="particle particle-8"></div>
          </div>
        </div>
        
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
    </ThemeProvider>
  );
}

export default App;
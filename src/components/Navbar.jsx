import React, { useState, useEffect } from 'react';
import { scrollTo } from '../utils/smoothScroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Home', href: '#hero', key: 'hero' },
    { label: 'About', href: '#about', key: 'about' },
    { label: 'Skills', href: '#skills', key: 'skills' },
    { label: 'Projects', href: '#projects', key: 'projects' },
    { label: 'Certificates', href: '#certificates', key: 'certificates' },
    { label: 'Education', href: '#education', key: 'education' },
    { label: 'Contact', href: '#contact', key: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(l => l.key);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollTo(href, { offset: -80 });
    setIsMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-void/80 backdrop-blur-xl border-b border-neon-blue/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3"
          >
            <span className="font-orbitron text-lg md:text-xl font-bold tracking-[0.15em] text-neon-blue transition-all duration-300 group-hover:text-neon-cyan"
              style={{ textShadow: '0 0 10px rgba(0,212,255,0.3)' }}
            >
              SRN
            </span>
            <span className="hidden sm:block text-text-muted text-sm font-rajdhani tracking-wider">
              // PORTFOLIO
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 font-rajdhani text-sm font-medium tracking-wider uppercase transition-all duration-300 group ${
                  activeSection === link.key
                    ? 'text-neon-blue'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                <span className="relative z-10">[ {link.label} ]</span>
                {/* Active indicator */}
                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-neon-blue transition-all duration-300 ${
                    activeSection === link.key ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                  style={{ boxShadow: '0 0 8px rgba(0,212,255,0.5)' }}
                />
                {/* Hover underline */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-0 bg-text-muted group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center group"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-end gap-1.5">
              <span
                className={`block h-[2px] bg-neon-blue transition-all duration-300 ${
                  isMobileOpen ? 'w-6 rotate-45 translate-y-[5px]' : 'w-6'
                }`}
              />
              <span
                className={`block h-[2px] bg-neon-blue transition-all duration-300 ${
                  isMobileOpen ? 'w-0 opacity-0' : 'w-4'
                }`}
              />
              <span
                className={`block h-[2px] bg-neon-blue transition-all duration-300 ${
                  isMobileOpen ? 'w-6 -rotate-45 -translate-y-[5px]' : 'w-5'
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-void/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, index) => (
            <a
              key={link.key}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-orbitron text-2xl tracking-[0.2em] uppercase transition-all duration-500 ${
                activeSection === link.key
                  ? 'text-neon-blue'
                  : 'text-text-muted hover:text-text-primary'
              }`}
              style={{
                transitionDelay: isMobileOpen ? `${index * 80}ms` : '0ms',
                transform: isMobileOpen ? 'translateY(0)' : 'translateY(30px)',
                opacity: isMobileOpen ? 1 : 0,
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
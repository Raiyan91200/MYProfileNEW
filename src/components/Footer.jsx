import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { scrollTo } from '../utils/smoothScroll';
import { trackEvent } from '../utils/analytics';

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Raiyan91200', label: 'GitHub' },
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/raiyannasim91200', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://x.com/nasim_raiyan', label: 'Twitter' },
    { icon: <FaFacebookF />, url: 'https://www.facebook.com/Raiyan.91200', label: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/raiyannasim91200/', label: 'Instagram' },
  ];

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollTo(href, { offset: -80 });
  };

  return (
    <footer className="relative border-t border-white/5 bg-panel/50 pt-16 pb-8">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Top section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
            {/* Brand */}
            <div className="max-w-sm">
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, '#hero')}
                className="inline-block mb-4"
              >
                <span
                  className="font-orbitron text-xl font-bold tracking-[0.15em] text-neon-blue"
                  style={{ textShadow: '0 0 10px rgba(0,212,255,0.3)' }}
                >
                  SRN
                </span>
              </a>
              <p className="font-rajdhani text-text-muted leading-relaxed text-sm">
                Passionate about creating innovative software solutions and exploring the world of technology.
                Turning code into digital experiences.
              </p>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-rajdhani text-sm text-text-muted hover:text-neon-blue transition-colors duration-300 tracking-wider"
                >
                  [ {link.label} ]
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                onClick={() => trackEvent('Social', 'Click_Footer', social.label)}
                className="w-9 h-9 flex items-center justify-center border border-white/10 text-text-muted hover:text-neon-blue hover:border-neon-blue/40 transition-all duration-300 text-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Bottom */}
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-text-muted tracking-wider">
              © {year} SYED RAIYAN NASIM // ALL RIGHTS RESERVED
            </p>
            <p className="font-mono text-[10px] text-text-muted/50 tracking-wider">
              BUILT WITH REACT + VITE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
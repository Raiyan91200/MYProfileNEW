import React, { useEffect, useRef } from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { scrollTo } from '../utils/smoothScroll';
import { trackDownload, trackEvent } from '../utils/analytics';

const Hero = () => {
  const titleRef = useRef(null);

  const socialLinks = [
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/raiyannasim91200', label: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com/Raiyan91200', label: 'GitHub' },
    { icon: <FaTwitter />, url: 'https://x.com/nasim_raiyan', label: 'Twitter' },
    { icon: <FaFacebookF />, url: 'https://www.facebook.com/Raiyan.91200', label: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/raiyannasim91200/', label: 'Instagram' },
    { icon: <FaEnvelope />, url: 'mailto:raiyannasim91200@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large circle decoration */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-neon-blue/5 animate-pulse-glow"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-neon-purple/5"
          style={{ animation: 'pulse-glow 6s ease-in-out infinite reverse' }}
        />
        {/* Corner accents */}
        <div className="absolute top-20 left-8 md:left-16 w-16 h-16 border-t border-l border-neon-blue/10" />
        <div className="absolute bottom-20 right-8 md:right-16 w-16 h-16 border-b border-r border-neon-blue/10" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Code comment label */}
        <div className="font-mono text-xs md:text-sm text-neon-blue/60 tracking-[0.3em] uppercase mb-6 md:mb-8 animate-fadeInUp">
          {'// WELCOME TO MY PORTFOLIO'}
        </div>

        {/* Main Title */}
        <div ref={titleRef} className="mb-6 md:mb-8">
          <h1 className="font-orbitron text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.08em] leading-tight">
            <span
              className="block text-text-primary mb-2 animate-fadeInUp"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              <span className="hero-glitch" data-text="SYED ">SYED </span>
              <span
                className="text-neon-blue inline-block animate-fadeInUp hero-glitch"
                data-text="RAIYAN"
                style={{
                  animationDelay: '0.3s',
                  animationFillMode: 'both',
                  textShadow: '0 0 30px rgba(0,212,255,0.4), 0 0 60px rgba(0,212,255,0.15)',
                }}
              >
                RAIYAN
              </span>
            </span>
            <span
              className="block text-text-primary animate-fadeInUp"
              style={{
                animationDelay: '0.5s',
                animationFillMode: 'both',
              }}
            >
              <span className="hero-glitch" data-text="NASIM">NASIM</span>
            </span>
          </h1>
        </div>

        {/* Subtitle with typing effect */}
        <div
          className="font-mono text-sm md:text-base text-neon-green/80 tracking-wider mb-4 animate-fadeInUp"
          style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
        >
          {'< Computer Science & Engineering />'}
        </div>

        {/* Tagline */}
        <p
          className="font-rajdhani text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 md:mb-14 animate-fadeInUp"
          style={{ animationDelay: '0.9s', animationFillMode: 'both' }}
        >
          Ensuring software quality through rigorous testing and automation. Passionate about breaking things
          to make them unbreakable — from web apps to game worlds.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16 animate-fadeInUp"
          style={{ animationDelay: '1.1s', animationFillMode: 'both' }}
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="btn-neon"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            VIEW PROJECTS
          </button>
          <button
            onClick={() => {
              trackDownload('Resume_Hero');
              const link = document.createElement('a');
              link.href = 'https://drive.usercontent.google.com/download?id=1fycb8w_5nvrKaY_Axy1gscvSISeakHNG&export=download&authuser=0';
              link.download = 'Syed_Raiyan_Nasim_Resume.pdf';
              link.target = '_blank';
              link.click();
            }}
            className="btn-neon btn-neon-green"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            DOWNLOAD RESUME
          </button>
        </div>

        {/* Social Links */}
        <nav
          className="flex justify-center gap-3 sm:gap-4 animate-fadeInUp"
          style={{ animationDelay: '1.3s', animationFillMode: 'both' }}
          aria-label="Social Media Links"
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              onClick={() => trackEvent('Social', 'Click_Hero', social.label)}
              className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center border border-white/10 text-text-muted hover:text-neon-blue hover:border-neon-blue/50 transition-all duration-300 text-sm md:text-base hover:shadow-[0_0_10px_rgba(0,212,255,0.2)]"
            >
              {social.icon}
            </a>
          ))}
        </nav>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Scroll</span>
        <svg className="w-4 h-4 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
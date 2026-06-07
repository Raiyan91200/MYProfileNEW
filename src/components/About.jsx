import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const xpBarsRef = useRef([]);

  const stats = [
    { number: '10', suffix: '+', label: 'Projects Completed' },
    { number: '3', suffix: '+', label: 'Programming Languages' },
    { number: '1', suffix: '+', label: 'Years Experience' },
  ];

  const equipped = [
    'Manual & Automation Testing',
    'Game Testing & QA Sweeps',
    'Test Case Design & Execution',
    'API Testing (Postman)',
    'Bug Tracking & Reporting',
    'Basic Game Dev (Unity)',
  ];

  useEffect(() => {
    if (inView) {
      // Trigger XP bar animations
      xpBarsRef.current.forEach((bar) => {
        if (bar) bar.classList.add('charged');
      });
    }
  }, [inView]);

  return (
    <section id="about" className="game-section relative" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Label */}
          <div className="section-code-heading animate-fadeInUp">
            {'// ABOUT_ME'}
          </div>

          {/* Section Title */}
          <h2
            id="about-heading"
            className="font-orbitron text-3xl md:text-5xl font-bold mb-12 md:mb-16"
          >
            <span className="text-text-primary">PLAYER </span>
            <span
              className="text-neon-blue"
              style={{ textShadow: '0 0 20px rgba(0,212,255,0.3)' }}
            >
              PROFILE
            </span>
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mb-16">
            {/* Left — Bio */}
            <div className="space-y-6">
              {/* Profile Image in HUD Frame */}
              <div className="relative inline-block mb-6">
                <div className="hud-panel p-1">
                  <img
                    src="https://i.ibb.co.com/fdPC1hLx/ddry.png"
                    alt="Syed Raiyan Nasim - Computer Science Engineering Student"
                    className="w-32 h-32 md:w-40 md:h-40 object-cover"
                    style={{ filter: 'contrast(1.05)' }}
                  />
                </div>
                {/* Status indicator */}
                <div className="absolute -bottom-1 -right-1 flex items-center gap-1.5 bg-void px-2 py-1">
                  <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                  <span className="font-mono text-[10px] text-neon-green tracking-wider">ONLINE</span>
                </div>
              </div>

              <p className="font-rajdhani text-lg text-text-primary/80 leading-relaxed">
                I am a Computer Science & Engineering student specializing in Software Quality Assurance and Game Testing.
                Skilled in manual/automation testing, bug tracking, and game QA, I focus on delivering high-performance, polished software and game experiences.
              </p>
              <p className="font-rajdhani text-lg text-text-primary/60 leading-relaxed">
                Currently working as a Game Tester at Arclite System and previously SQA Intern at 9 AM Solution, I actively apply tools like Playwright, Selenium, Postman, and Unity to verify quality across platforms.
              </p>
            </div>

            {/* Right — Stats & Equipped Skills */}
            <div className="space-y-10">
              {/* Stats HUD */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="hud-panel p-4 text-center">
                    <div className="font-orbitron text-2xl md:text-3xl font-bold text-neon-blue mb-1"
                      style={{ textShadow: '0 0 10px rgba(0,212,255,0.3)' }}
                    >
                      {stat.number}
                      <span className="text-neon-green">{stat.suffix}</span>
                    </div>
                    <div className="font-mono text-[10px] md:text-xs text-text-muted tracking-wider uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Equipped Skills Panel */}
              <div className="hud-panel p-6">
                <h3 className="font-orbitron text-sm font-semibold text-neon-purple tracking-[0.15em] mb-4"
                  style={{ textShadow: '0 0 10px rgba(178,75,243,0.3)' }}
                >
                  EQUIPPED SKILLS
                </h3>
                <ul className="space-y-3">
                  {equipped.map((skill, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-text-primary/70 font-rajdhani"
                    >
                      <span className="w-1.5 h-1.5 bg-neon-blue/60 rotate-45 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
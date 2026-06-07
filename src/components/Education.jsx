import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt } from 'react-icons/fa';

const education = [
  {
    period: 'Feb 2026 - Present',
    level: 'LVL 05',
    degree: 'Game Tester',
    institution: 'Arclite System',
    link: 'https://arclitebd.com/',
    description: 'Performing game functionality testing, QA sweeps, regression tests, and bug tracking to ensure polished gameplay and stability.',
  },
  {
    period: '2025 - 2026',
    level: 'LVL 04',
    degree: 'SQA Intern',
    institution: '9 AM Solution',
    link: 'https://www.9amsolution.com/',
    description: 'Assisted in manual testing, test case creation/execution, UI/UX validation, and bug reporting for web and mobile platforms.',
  },
  {
    period: '2022 - 2026',
    level: 'LVL 03',
    degree: 'B.Sc. in Computer Science and Engineering',
    institution: 'Green University Bangladesh',
    link: 'https://www.green.edu.bd/',
    description: 'Bachelor\'s degree focused on software engineering, software quality assurance, and project management.',
  },
  {
    period: '2018 - 2020',
    level: 'LVL 02',
    degree: 'Higher Secondary School Certificate (H.S.C)',
    institution: 'Banophool Adibashi Green Heart College',
    link: 'https://baghc.edu.bd/',
    description: 'Science — Graduated',
  },
  {
    period: '2018',
    level: 'LVL 01',
    degree: 'Secondary School Certificate (S.S.C)',
    institution: 'Shaheed Police Smrity College',
    link: 'https://www.spsc.edu.bd/',
    description: 'Science — Graduated',
  },
];

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="game-section relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Label */}
          <div className="section-code-heading">{'// LEVEL_PROGRESS'}</div>

          {/* Section Title */}
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
            <span className="text-text-primary">LEVEL </span>
            <span className="text-neon-cyan" style={{ textShadow: '0 0 20px rgba(0,255,245,0.3)' }}>
              PROGRESS
            </span>
          </h2>

          <p className="font-rajdhani text-lg text-text-muted mb-12 md:mb-16 max-w-2xl">
            The journey of leveling up through education — each milestone unlocking new skills and knowledge.
          </p>

          {/* Timeline */}
          <div ref={ref} className="level-timeline">
            {education.map((edu, index) => (
              <div
                key={index}
                className="level-node"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateX(0)' : 'translateX(-30px)',
                  transition: `all 0.6s ease ${index * 0.2}s`,
                }}
              >
                <div className="hud-panel p-5 md:p-6 group hover:border-neon-cyan/30 transition-all duration-500">
                  {/* Level Badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-orbitron text-[10px] font-bold text-neon-cyan tracking-[0.2em] px-2 py-1 border border-neon-cyan/30 bg-neon-cyan/5">
                      {edu.level}
                    </span>
                    <span className="font-mono text-xs text-text-muted tracking-wider">
                      {edu.period}
                    </span>
                  </div>

                  {/* Degree */}
                  <h3 className="font-orbitron text-sm md:text-base font-semibold text-text-primary tracking-wider mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-rajdhani text-sm text-neon-blue/70 hover:text-neon-blue transition-colors duration-300 mb-3"
                  >
                    {edu.institution}
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>

                  {/* Description */}
                  <p className="font-rajdhani text-sm text-text-muted leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
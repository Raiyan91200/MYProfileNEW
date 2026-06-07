import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaTimes } from 'react-icons/fa';

const certificates = [
  {
    id: 1,
    name: 'Job Ready: Employability Skills',
    issuer: 'Wadhwani Foundation',
    date: 'Dec 22, 2025',
    images: ['https://i.ibb.co.com/rR7p9vPZ/Wadhwani-Foundation-Certificate-6948477de148b98d90fa9172-1.png'],
    skills: ['Employability Skills', 'Professional Development'],
  },
  {
    id: 2,
    name: 'SQA: Manual & Automated Testing',
    issuer: 'Ostad',
    date: 'Completed 2025',
    images: [
      'https://i.ibb.co.com/rB1fcqZ/Syed-Raiyan-Nasim-Software-Testing-12-C36302-1.png',
      'https://i.ibb.co.com/5WNzXdPY/Syed-Raiyan-Nasim-Software-Testing-12-A36303-1.png',
    ],
    skills: ['Manual Testing', 'Automated Testing', 'SQA'],
  },
  {
    id: 3,
    name: 'SQL (Basic) Certification',
    issuer: 'HackerRank',
    date: 'Nov 26, 2025',
    images: ['https://i.ibb.co.com/hFjLwyLn/sql-basic-certificate-1.png'],
    skills: ['SQL', 'Database'],
  },
  {
    id: 4,
    name: 'Introduction to Git',
    issuer: 'DataCamp',
    date: 'Nov 15, 2025',
    images: ['https://i.ibb.co.com/6dqFjqM/Git-Cretificate-1.png'],
    skills: ['Git', 'Version Control'],
  },
  {
    id: 5,
    name: 'Introduction to GitHub Concepts',
    issuer: 'DataCamp',
    date: 'Nov 27, 2025',
    images: ['https://i.ibb.co.com/627WJCJ/Github-Cirtificate-1.png'],
    skills: ['GitHub', 'Repository Management'],
  },
  {
    id: 6,
    name: 'Introduction to JIRA',
    issuer: 'Simplilearn',
    date: 'Oct 3, 2025',
    images: ['https://i.ibb.co.com/xtwjgsq2/Jira-1.png'],
    skills: ['JIRA', 'Project Management'],
  },
  {
    id: 7,
    name: 'n8n Course: No Code AI Agent Builder',
    issuer: 'Simplilearn',
    date: 'Oct 3, 2025',
    images: ['https://i.ibb.co.com/H5Vwz8s/N8N-1.png'],
    skills: ['n8n', 'No-Code', 'AI Automation'],
  },
  {
    id: 8,
    name: 'Data Navigator Badge',
    issuer: 'Professional Achievement',
    date: 'Earned 2025',
    images: ['https://i.ibb.co.com/99Q82NMZ/download.png'],
    skills: ['Data Query', 'Data Analysis'],
  },
];

const AchievementCard = ({ cert, index, inView, onOpen }) => {
  return (
    <button
      onClick={() => onOpen(cert)}
      className="w-full text-left achievement-card group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.6s ease ${index * 0.1}s`,
      }}
    >
      {/* Trophy Icon */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 flex items-center justify-center border border-neon-blue/20 text-neon-blue/60 group-hover:text-neon-blue group-hover:border-neon-blue/40 transition-all duration-300 flex-shrink-0">
          <FaTrophy className="text-sm" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-orbitron text-xs md:text-sm font-semibold text-text-primary tracking-wider mb-1 group-hover:text-neon-blue transition-colors duration-300">
            {cert.name}
          </h3>
          <div className="font-mono text-[10px] text-text-muted tracking-wider mb-2">
            Granted by: {cert.issuer}
          </div>
          <div className="font-mono text-[10px] text-neon-green/60 tracking-wider mb-3">
            Unlocked: {cert.date}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-[9px] px-1.5 py-0.5 border border-neon-purple/20 text-neon-purple/60 tracking-wider"
              >
                +{skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
};

const Certificates = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selected, setSelected] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="certificates" className="game-section relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <div className="section-code-heading">{'// ACHIEVEMENTS'}</div>

          {/* Section Title */}
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
            <span className="text-text-primary">ACHIEVEMENTS </span>
            <span className="text-neon-purple" style={{ textShadow: '0 0 20px rgba(178,75,243,0.3)' }}>
              UNLOCKED
            </span>
          </h2>

          <p className="font-rajdhani text-lg text-text-muted mb-12 md:mb-16 max-w-2xl">
            Certifications earned through continuous learning and dedication to mastering new technologies.
          </p>

          {/* Achievement Grid */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {certificates.map((cert, index) => (
              <AchievementCard
                key={cert.id}
                cert={cert}
                index={index}
                inView={inView}
                onOpen={setSelected}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          onClick={() => { setSelected(null); setActiveImage(0); }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-void/95 backdrop-blur-xl" />

          {/* Content */}
          <div
            className="relative max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => { setSelected(null); setActiveImage(0); }}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center border border-white/10 text-text-muted hover:text-neon-pink hover:border-neon-pink/50 transition-all duration-300"
            >
              <FaTimes />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h3 className="font-orbitron text-lg md:text-xl font-bold text-text-primary tracking-wider mb-2">
                {selected.name}
              </h3>
              <span className="font-mono text-xs text-text-muted">
                {selected.issuer} • {selected.date}
              </span>
            </div>

            {/* Image */}
            <div className="border border-white/10 bg-black/50 rounded-sm overflow-hidden">
              <img
                src={selected.images?.[activeImage]}
                alt={selected.name}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Thumbnails */}
            {selected.images && selected.images.length > 1 && (
              <div className="flex gap-2 justify-center mt-4">
                {selected.images.map((img, index) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(index)}
                    className={`w-20 h-14 overflow-hidden border transition-all duration-200 ${
                      index === activeImage
                        ? 'border-neon-blue shadow-[0_0_10px_rgba(0,212,255,0.3)]'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;

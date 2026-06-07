import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FaPython, FaJs, FaGitAlt, FaReact, FaNodeJs, FaDatabase, FaRobot
} from 'react-icons/fa';
import {
  SiSelenium, SiPostman, SiUnity
} from 'react-icons/si';

const skills = [
  { name: 'Python', icon: <FaPython />, level: 90, color: '#3776AB', tags: ['Problem Solving', 'Automation'] },
  { name: 'JavaScript', icon: <FaJs />, level: 85, color: '#F7DF1E', tags: ['ES6+', 'React', 'Node.js'] },
  { name: 'Playwright', icon: <FaRobot />, level: 80, color: '#2EAD33', tags: ['Automation', 'E2E Testing'] },
  { name: 'Selenium', icon: <SiSelenium />, level: 85, color: '#43B02A', tags: ['Automation', 'Web Testing'] },
  { name: 'Postman', icon: <SiPostman />, level: 85, color: '#FF6C37', tags: ['API Testing', 'Integration'] },
  { name: 'Unity', icon: <SiUnity />, level: 75, color: '#FFFFFF', tags: ['Game Dev', 'Game Testing'] },
  { name: 'Git', icon: <FaGitAlt />, level: 80, color: '#F05032', tags: ['GitHub', 'Version Control'] },
  { name: 'React', icon: <FaReact />, level: 75, color: '#61DAFB', tags: ['Hooks', 'UI Dev'] },
  { name: 'SQL', icon: <FaDatabase />, level: 85, color: '#4479A1', tags: ['MySQL', 'MongoDB'] },
  { name: 'Node.js', icon: <FaNodeJs />, level: 70, color: '#339933', tags: ['Express', 'REST API'] },
];

const SkillCard = ({ skill, index, inView }) => {
  return (
    <div
      className="hud-panel p-5 md:p-6 group hover:border-neon-blue/30 transition-all duration-500"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.6s ease ${index * 0.1}s`,
      }}
    >
      {/* Icon */}
      <div
        className="text-3xl md:text-4xl mb-4 transition-all duration-300 group-hover:scale-110"
        style={{ color: skill.color, filter: `drop-shadow(0 0 8px ${skill.color}40)` }}
      >
        {skill.icon}
      </div>

      {/* Name */}
      <h3 className="font-orbitron text-sm md:text-base font-semibold text-text-primary tracking-wider mb-4">
        {skill.name}
      </h3>

      {/* XP Bar */}
      <div className="mb-3">
        <div className="flex justify-between mb-1.5">
          <span className="font-mono text-[10px] text-text-muted tracking-widest">XP LEVEL</span>
          <span className="font-mono text-[10px] text-neon-green">{skill.level}%</span>
        </div>
        <div className="xp-bar">
          <div
            className={`xp-bar-fill ${inView ? 'charged' : ''}`}
            style={{ '--level': `${skill.level}%` }}
          />
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-3">
        {skill.tags.map((tag, i) => (
          <span
            key={i}
            className="font-mono text-[10px] px-2 py-0.5 border border-white/10 text-text-muted tracking-wider"
          >
            [{tag}]
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="game-section relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <div className="section-code-heading">{'// SKILL_TREE'}</div>

          {/* Section Title */}
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
            <span className="text-text-primary">SKILL </span>
            <span className="text-neon-green" style={{ textShadow: '0 0 20px rgba(57,255,20,0.3)' }}>
              TREE
            </span>
          </h2>

          <p className="font-rajdhani text-lg text-text-muted mb-12 md:mb-16 max-w-2xl">
            Proficient in various programming languages and technologies.
            Each skill has been leveled up through projects and continuous learning.
          </p>

          {/* Skills Grid */}
          <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
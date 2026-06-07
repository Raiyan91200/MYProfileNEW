import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';
import { trackEvent, trackProjectClick } from '../utils/analytics';

const projects = [
  {
    title: 'Saucedemo Playwright Testing Suite',
    description: 'Automated Playwright end-to-end tests for Saucedemo workflows including login, product purchase, and order verification. Generates Allure reports.',
    tech: ['Playwright', 'JavaScript', 'Node.js', 'Allure'],
    link: 'https://github.com/Raiyan91200/playwright_project',
    demo: '',
    date: '2025',
    features: ['Login & account validation', 'Order placement and cart operations', 'Page Object Model structure', 'Allure test reporting', 'Headed and headless execution'],
  },
  {
    title: 'All Report Template',
    description: 'A collection of structured QA testing documentation and templates, including bug reports and detailed test case designs.',
    tech: ['Excel', 'Word', 'Test Documentation'],
    link: 'https://github.com/Raiyan91200/All_Report_template',
    demo: '',
    date: '2025',
    features: ['Bug report templates', 'Comprehensive test suite documentation', 'Detailed test case design spreadsheets', 'Severity classification'],
  },
  {
    title: 'RESTful API Testing Suite',
    description: 'Comprehensive API testing for RESTful-API.dev using Postman collections and Newman CLI with HTML reporting.',
    tech: ['Postman', 'Newman', 'JavaScript', 'AJV'],
    link: 'https://github.com/Raiyan91200/api.restful-api.dev_Api_testing',
    demo: '',
    date: '2025',
    features: ['CRUD endpoint tests', 'Schema validation', 'Dynamic testing with random ID generation', 'Automated Newman execution'],
  },
  {
    title: 'YouTube Automated Test Suite',
    description: 'End-to-end automated testing suite for YouTube search and content validation using Selenium WebDriver.',
    tech: ['Selenium', 'Mocha', 'Chai', 'Node.js'],
    link: 'https://github.com/Raiyan91200/Youtube_test_Suite',
    demo: '',
    date: '2025',
    features: ['Automated YouTube search validation', 'Content verification', 'UI element checks', 'Mochawesome HTML reports'],
  },
  {
    title: 'EverShop E2E Playwright Suite',
    description: 'Comprehensive Playwright automated UI testing suite for EverShop e-commerce demo, built using Page Object Model.',
    tech: ['Playwright', 'JavaScript', 'Node.js', 'Allure', 'POM'],
    link: 'https://github.com/Raiyan91200/Playwright_everShop.Io_',
    demo: '',
    date: '2025',
    features: ['End-to-end coverage of browsing, cart, checkout', 'Page Object Model architecture', 'Allure rich test reports', 'CI/CD friendly config'],
  },
  {
    title: 'EverShop API Testing Suite',
    description: 'Automated API tests for key e-commerce workflows on EverShop.io — search, cart operations, and product management.',
    tech: ['Postman', 'Newman', 'JavaScript'],
    link: 'https://github.com/Raiyan91200/Api_Testing-First-evershop.io-with-automation-scripts-',
    demo: '',
    date: '2025',
    features: ['Search & cart validation via API', 'Response structure checks', 'Automated test reports'],
  },
  {
    title: 'OrderUP! Cafeteria App',
    description: 'A mobile app for seamless cafeteria ordering with quick menu browsing, QR-based payments, and order tracking.',
    tech: ['Android', 'Firebase', 'Java'],
    link: 'https://github.com/Raiyan91200/OrderUP3',
    demo: '',
    date: '2024',
    features: ['User-friendly mobile ordering', 'Firebase authentication', 'Real-time order management', 'QR code payment'],
  },
  {
    title: 'Restaurant Recommendation System',
    description: 'ML-based system analyzing FoodPanda Bangladesh dataset for personalized restaurant recommendations using sentiment analysis.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow'],
    link: 'https://github.com/Raiyan91200/Restaurant-Recommendation-using-food-Panda-Dataset',
    demo: '',
    date: '2024',
    features: ['Sentiment analysis on reviews', 'Content-based recommendation engine', 'Mixed-language text processing', 'Visualization of insights'],
  },
  {
    title: 'Desh Explorer Travel Platform',
    description: 'Full-stack travel platform to explore curated tour packages with secure authentication and real-time community features.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://github.com/jibon49/desh-explorer-client',
    demo: 'https://desh-explorer.web.app/',
    date: '2024',
    features: ['User authentication', 'Real-time booking', 'Stripe payment integration', 'Tour package customization'],
  },
  {
    title: 'Sorting Algorithms Visualizer',
    description: 'Interactive Java application that visualizes sorting algorithms in real-time through animated demonstrations.',
    tech: ['Java', 'Swing'],
    link: 'https://github.com/Raiyan91200/SortingAlgorithmsVisualizer-master',
    demo: '',
    date: '2024',
    features: ['Real-time visualization', 'Multiple sorting methods', 'Adjustable speed', 'Step-by-step execution'],
  },
  {
    title: 'Employee Management System 1.0',
    description: 'Console-based C application for managing employee records with secure access control and file-based storage.',
    tech: ['C', 'File I/O'],
    link: 'https://github.com/Raiyan91200/EMS1.0',
    demo: '',
    date: '2023',
    features: ['File-based data persistence', 'CRUD operations', 'Role-based access control', 'Advanced sorting'],
  },
  {
    title: 'Employee Management System 2.0',
    description: 'Feature-rich Java desktop application with MySQL integration for comprehensive employee data management.',
    tech: ['Java', 'MySQL', 'JDBC', 'Swing'],
    link: 'https://github.com/Raiyan91200/EMS_2.0',
    demo: '',
    date: '2023',
    features: ['MySQL integration with JDBC', 'Modern Swing GUI', 'Advanced reporting', 'Secure authentication'],
  },
  {
    title: 'Shell-based File Manager',
    description: 'Command-line utility built with Shell script providing comprehensive file system operations.',
    tech: ['Shell', 'Bash', 'Linux'],
    link: 'https://github.com/Raiyan91200/File-manager',
    demo: '',
    date: '2023',
    features: ['Interactive CLI', 'File system operations', 'Batch processing', 'Permission management'],
  },
  {
    title: 'ATM Machine',
    description: 'Low-level ATM simulator built in Assembly language with core banking operations and secure authentication.',
    tech: ['Assembly', 'x86'],
    link: 'https://github.com/Raiyan91200/ATM-Machine',
    demo: '',
    date: '2023',
    features: ['x86 Assembly implementation', 'PIN authentication', 'Transaction processing', 'Balance management'],
  },
  {
    title: 'Encrypted Chat Application',
    description: 'Secure messaging app with end-to-end encryption using hybrid cryptographic system and real-time socket communication.',
    tech: ['Java', 'Socket Programming', 'Cryptography'],
    link: 'https://github.com/Raiyan91200/Chatapplicationjava',
    demo: '',
    date: '2023',
    features: ['End-to-end encryption', 'Real-time socket communication', 'Modern chat interface', 'Hybrid cryptographic system'],
  },
  {
    title: 'BoiBazar Online Bookstore',
    description: 'Full-stack e-commerce platform built with PHP and MySQL for comprehensive book shopping.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    link: 'https://github.com/Raiyan91200/BoiBazar',
    demo: '',
    date: '2023',
    features: ['E-commerce functionality', 'User authentication', 'Admin dashboard', 'Search and filtering'],
  },
];

const MissionItem = ({ project, index, isExpanded, onToggle }) => {
  const number = String(index + 1).padStart(2, '0');

  return (
    <div className="border-b border-white/5 last:border-b-0">
      <div
        className="mission-item"
        onClick={onToggle}
      >
        <span className="mission-number">[{number}]</span>
        <div className="flex-1 min-w-0">
          <div className="mission-name">{project.title}</div>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.slice(0, 3).map((t, i) => (
              <span key={i} className="font-mono text-[10px] text-text-muted/60 tracking-wider">
                {t}{i < Math.min(project.tech.length, 3) - 1 ? ' ·' : ''}
              </span>
            ))}
          </div>
        </div>
        <span className="mission-date">// {project.date}</span>
        <FaChevronDown
          className={`text-text-muted/40 text-xs transition-transform duration-300 ml-2 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''
            }`}
        />
      </div>

      {/* Expanded Details */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="pl-12 md:pl-20 pr-6 pb-6 space-y-4">
          <p className="font-rajdhani text-text-primary/60 leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          <div>
            <h4 className="font-mono text-xs text-neon-purple tracking-wider mb-2">KEY FEATURES:</h4>
            <ul className="space-y-1.5">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-primary/50 font-rajdhani">
                  <span className="text-neon-blue/60 mt-1">▸</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="font-mono text-[10px] px-2 py-1 border border-neon-blue/20 text-neon-blue/60 tracking-wider"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackProjectClick(project.title, 'github')}
              className="btn-neon text-xs py-2 px-4"
            >
              <FaGithub className="text-sm" />
              SOURCE CODE
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackProjectClick(project.title, 'demo')}
                className="btn-neon btn-neon-green text-xs py-2 px-4"
              >
                <FaExternalLinkAlt className="text-xs" />
                LIVE DEMO
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 8);

  return (
    <section id="projects" className="game-section relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Label */}
          <div className="section-code-heading">{'// MISSION_LOG'}</div>

          {/* Section Title */}
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
            <span className="text-text-primary">MISSION </span>
            <span className="text-neon-blue" style={{ textShadow: '0 0 20px rgba(0,212,255,0.3)' }}>
              LOG
            </span>
          </h2>

          <p className="font-rajdhani text-lg text-text-muted mb-12 md:mb-16 max-w-2xl">
            A collection of completed missions — each project represents a challenge conquered
            and skills leveled up.
          </p>

          {/* Mission List */}
          <div
            ref={ref}
            className="hud-panel"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease',
            }}
          >
            {visibleProjects.map((project, index) => (
              <MissionItem
                key={index}
                project={project}
                index={index}
                isExpanded={expandedIndex === index}
                onToggle={() => {
                  if (expandedIndex !== index) trackEvent('Project', 'Expand', project.title);
                  setExpandedIndex(expandedIndex === index ? null : index);
                }}
              />
            ))}
          </div>

          {/* View All Button */}
          {!showAll && projects.length > 8 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(true)}
                className="btn-neon btn-neon-purple text-xs"
              >
                VIEW ALL MISSIONS ({projects.length})
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
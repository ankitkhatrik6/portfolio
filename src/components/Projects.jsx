import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'Constitution Bot - AI-Powered Constitutional Guide',
      description: 'An intelligent chatbot designed to help users understand the Constitution of Nepal 2072. Powered by Groq AI, this application leverages advanced language models to provide accurate and helpful information about constitutional matters.',
      technologies: ['React', 'Next.js', 'Groq AI', 'JavaScript'],
      github: 'https://github.com/ankitkhatrik6/Constitution-Bot',
      demo: 'https://constitution-bot.vercel.app/',
      highlights: [
        'AI-powered conversational interface',
        'Real-time information retrieval',
        'Responsive and user-friendly design',
        'Built with modern web technologies'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-highlights">
                <h4>Key Features:</h4>
                <ul>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="tech-stack">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link demo-link"
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="more-projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>More projects coming soon...</p>
          <a href="https://github.com/ankitkhatrik6" target="_blank" rel="noopener noreferrer">
            Check out my GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

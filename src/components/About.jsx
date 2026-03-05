import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiZap, FiBook } from 'react-icons/fi';
import './About.css';

export default function About() {
  const skills = [
    {
      icon: <FiCode />,
      title: 'Frontend Development',
      description: 'React, JavaScript, CSS, Responsive Design, Vite'
    },
    {
      icon: <FiDatabase />,
      title: 'Backend Development',
      description: 'Node.js, Express, Python, Django, MongoDB'
    },
    {
      icon: <FiBook />,
      title: 'AI/ML',
      description: 'Machine Learning, Python, Data Analysis, AI Integration'
    },
    {
      icon: <FiZap />,
      title: 'Cybersecurity',
      description: 'Learning Security Practices, Network Security, Best Practices'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>I'm a passionate developer and learner</h3>
            <p>
              I'm Ankit Khatri KC, currently pursuing a Bachelor's degree in Computer Science and IT at Amrit Science Campus (ASCOL), affiliated with Tribhuvan University. I'm passionate about building beautiful and functional web applications using modern technologies like React and Next.js.
            </p>
            <p>
              My learning journey spans across full-stack development with the MERN stack, backend development with Python and Django, and I'm actively exploring the fascinating domains of AI/ML and Cybersecurity.
            </p>
            <p>
              I believe in continuous learning and love collaborating on projects that challenge me to grow. I'm always excited to work on innovative projects and contribute to the tech community.
            </p>
          </motion.div>

          <motion.div
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

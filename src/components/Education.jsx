import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

export default function Education() {
  const educationData = [
    {
      degree: 'BSc. CSIT',
      school: 'Amrit Science Campus (ASCOL) - Affiliated to Tribhuvan University',
      year: 'Present',
      status: 'ongoing',
      description: 'Pursuing bachelor\'s degree in Computer Science and Information Technology'
    },
    {
      degree: 'School Leaving Certificate (SLC)',
      school: 'National School of Sciences',
      year: '2025',
      status: 'completed',
      description: 'Completed high school with focus on science subjects'
    },
    {
      degree: 'School Leaving Examination (SEE)',
      school: 'Jalupa Secondary School',
      year: '2023',
      status: 'completed',
      description: 'Completed secondary education'
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <motion.div
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`education-item ${edu.status}`}
              variants={itemVariants}
            >
              <div className="timeline-dot">
                <div className="dot-inner"></div>
              </div>
              <div className="timeline-content">
                <h3>{edu.degree}</h3>
                <p className="school">{edu.school}</p>
                <p className="year">{edu.year}</p>
                <p className="description">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

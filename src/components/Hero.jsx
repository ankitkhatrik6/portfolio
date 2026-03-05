import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Hi, I'm <span className="highlight">Ankit Khatri KC</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Full-Stack Developer | AI/ML Enthusiast | Cybersecurity Learner
            </motion.p>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Passionate about building beautiful web applications with React, learning backend technologies like Django and Node.js, and exploring the exciting world of AI/ML and Cybersecurity.
            </motion.p>

            <motion.p
              className="hero-status"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="status-badge">🚀 Available for Internship Offers</span>
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <a href="mailto:ankitkhatrik6@gmail.com" className="btn-primary">
                Get In Touch <FiArrowRight />
              </a>
              <a href="#projects" className="btn-secondary">
                View My Work
              </a>
            </motion.div>

            <motion.div
              className="hero-contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="contact-item">
                <FiMail />
                <a href="mailto:ankitkhatrik6@gmail.com">ankitkhatrik6@gmail.com</a>
              </div>
              <div className="contact-item">
                <FiPhone />
                <a href="tel:+977 9705847863">+977 9705847863</a>
              </div>
              <div className="contact-item">
                <FiMapPin />
                <span>Kathmandu, Nepal</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="image-wrapper">
              <div className="image-placeholder">
                <img src="/portfolio/ankit.png" alt="Ankit Khatri KC" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-dot"></div>
      </motion.div>
    </section>
  );
}

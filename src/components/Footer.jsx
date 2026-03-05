import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="footer-text">
            <p>
              Designed & Built by <span className="highlight">Ankit Khatri KC</span>
            </p>
            <p className="tech-used">
              Built with React, Vite, and Framer Motion
            </p>
          </div>

          <div className="footer-divider"></div>

          <p className="copyright">
            © {currentYear} Ankit Khatri KC. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

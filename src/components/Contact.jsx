import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'ankitkhatrik6@gmail.com',
      link: 'mailto:ankitkhatrik6@gmail.com'
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: '+977 9705847863',
      link: 'tel:+977 9705847863'
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'Kathmandu, Nepal',
      link: '#'
    }
  ];

  const socials = [
    {
      icon: <FiGithub />,
      label: 'GitHub',
      link: 'https://github.com/ankitkhatrik6'
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/ankit-khatri-kc-baa76a397'
    },
    {
      icon: <FiInstagram />,
      label: 'Instagram',
      link: 'https://instagram.com/21ank1t'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="contact-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="contact-intro">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="contact-grid">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="contact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-details">
                  <p className="contact-label">{item.label}</p>
                  <p className="contact-value">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="social-section">
            <h4>Connect With Me</h4>
            <div className="social-grid">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="social-icon">{social.icon}</div>
                  <span className="social-label">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

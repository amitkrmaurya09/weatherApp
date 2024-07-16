// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://www.linkedin.com/in/amitkrmaurya09" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/amitkrmaurya09" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaGithub size={30} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

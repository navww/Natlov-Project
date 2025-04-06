import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../../../context/ThemeContext';
import Logo from '../../common/Logo/Logo';
import './Footer.css';

const Footer = () => {
  const { isDarkMode } = useTheme();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`footer ${isDarkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <Logo size="medium" variant="default" />
            <p className="footer-description">
              NatLov provides innovative IT solutions and technical services to help businesses thrive in the digital age.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Services</h3>
              <ul>
                <li><Link to="/technical-service/service">IT Services</Link></li>
                <li><Link to="/technical-service/support">Technical Support</Link></li>
                <li><Link to="/technical-service/contact-us">Contact Us</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Company</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/career">Careers</Link></li>
                <li><Link to="/staycation">Staycation</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Legal</h3>
              <ul>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service">Terms of Service</Link></li>
                <li><Link to="/cookie-policy">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} NatLov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
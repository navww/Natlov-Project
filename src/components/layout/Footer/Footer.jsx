import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { useTheme } from '../../../context/ThemeContext';
import './Footer.css';

const Footer = () => {
  const { isDarkMode } = useTheme();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/technical-service/service' },
      { name: 'Projects', path: '/projects' },
      { name: 'Career', path: '/career' },
    ],
    services: [
      { name: 'IT Services', path: '/technical-service/service' },
      { name: 'Technical Support', path: '/technical-service/support' },
      { name: 'Staycation', path: '/staycation' },
      { name: 'Contact Us', path: '/technical-service/contact-us' },
    ],
    social: [
      { name: 'Facebook', icon: <FaFacebookF />, url: 'https://facebook.com' },
      { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com' },
      { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com' },
      { name: 'LinkedIn', icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
    ],
  };

  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
  };

  return (
    <footer className={`footer ${isDarkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="footer-logo">
              <img 
                src="https://www.natlov.com/static/images/inline-logo-1.png" 
                alt="NatLov Logo" 
                className="footer-logo"
              />
            </Link>
            <p>
              Empowering businesses with innovative technology solutions and
              exceptional engineering services.
            </p>
            <div className="social-links">
              {footerLinks.social.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <div className="footer-links">
            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Company</h3>
              <ul>
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Services</h3>
              <ul>
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>Contact Info</h3>
              <ul className="contact-info">
                <li>
                  <FaMapMarkerAlt />
                  <span>123 Business Street, City, Country</span>
                </li>
                <li>
                  <FaPhoneAlt />
                  <span>+1 234 567 8900</span>
                </li>
                <li>
                  <FaEnvelope />
                  <span>info@natlov.com</span>
                </li>
                <li>
                  <FaClock />
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3>Newsletter</h3>
              <p>Subscribe to our newsletter for updates and news.</p>
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>
            &copy; {currentYear} Natlov Technologies Private Limited. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 
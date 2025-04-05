import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHeadset, FaTools, FaServer, FaCloud, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import './Support.css';

const Support = () => {
  const supportServices = [
    {
      icon: <FaHeadset />,
      title: "24/7 Technical Support",
      description: "Round-the-clock assistance for all your technical needs",
      features: ["Live Chat Support", "Phone Support", "Email Support", "Remote Assistance"]
    },
    {
      icon: <FaTools />,
      title: "System Maintenance",
      description: "Regular maintenance to keep your systems running smoothly",
      features: ["Performance Optimization", "Security Updates", "Backup Solutions", "Hardware Maintenance"]
    },
    {
      icon: <FaServer />,
      title: "Infrastructure Support",
      description: "Comprehensive support for your IT infrastructure",
      features: ["Network Management", "Server Administration", "Cloud Infrastructure", "Data Center Support"]
    },
    {
      icon: <FaCloud />,
      title: "Cloud Services Support",
      description: "Expert support for cloud-based solutions",
      features: ["AWS Support", "Azure Support", "GCP Support", "Cloud Migration"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Security Support",
      description: "Protection and security for your digital assets",
      features: ["Threat Detection", "Vulnerability Assessment", "Security Audits", "Incident Response"]
    },
    {
      icon: <FaChartLine />,
      title: "Performance Monitoring",
      description: "Continuous monitoring and optimization",
      features: ["Real-time Monitoring", "Performance Analytics", "Resource Optimization", "Capacity Planning"]
    }
  ];

  return (
    <div className="support-page">
      <section className="support-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="support-hero-content"
          >
            <h1>Technical Support Services</h1>
            <p>Expert technical assistance to keep your systems running smoothly and efficiently.</p>
          </motion.div>
        </div>
      </section>

      <section className="support-section">
        <div className="container">
          <div className="support-grid">
            {supportServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="support-card"
              >
                <div className="support-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="support-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link to="/technical-service/contact-us" className="support-link">
                  Get Support <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="support-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Need Immediate Assistance?</h2>
            <p>Our technical support team is available 24/7 to help you with any issues.</p>
            <Link to="/technical-service/contact-us" className="cta-button">
              Contact Support <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Support; 
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaMobile, FaServer, FaCloud, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      features: ["Responsive Design", "SEO Optimization", "Performance Focus"]
    },
    {
      icon: <FaMobile />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android", "Cross-platform", "User-friendly UI"]
    },
    {
      icon: <FaServer />,
      title: "Backend Solutions",
      description: "Robust and scalable backend infrastructure",
      features: ["API Development", "Database Design", "Cloud Integration"]
    },
    {
      icon: <FaCloud />,
      title: "Cloud Services",
      description: "Cloud infrastructure and deployment solutions",
      features: ["AWS/Azure/GCP", "DevOps", "Scalability"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions",
      features: ["Security Audits", "Threat Prevention", "Data Protection"]
    },
    {
      icon: <FaChartLine />,
      title: "Digital Analytics",
      description: "Data-driven insights and analytics",
      features: ["Performance Metrics", "User Analytics", "Business Intelligence"]
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Our Services</h2>
          <p>
            We offer a comprehensive range of technology services to help
            businesses thrive in the digital age.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link to="/technical-service" className="service-link">
                Learn More <FaArrowRight />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaMobile, FaServer, FaCloud, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import './Service.css';

const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["React/Next.js", "Node.js", "Python/Django", "PHP/Laravel"]
    },
    {
      icon: <FaMobile />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Robust and scalable backend solutions for your applications.",
      features: ["API Development", "Microservices", "Serverless", "Cloud Functions"]
    },
    {
      icon: <FaCloud />,
      title: "Cloud Services",
      description: "Cloud infrastructure and deployment solutions for your applications.",
      features: ["AWS", "Azure", "Google Cloud", "DevOps"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Security Training"]
    }
  ];

  return (
    <div className="service-page">
      <div className="service-hero">
        <div className="container">
          <motion.div
            className="service-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Our Services</h1>
            <p>
              Comprehensive technical solutions tailored to your business needs.
              From web development to cybersecurity, we've got you covered.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="services-section" ref={ref}>
        <div className="container">
          <motion.div
            className="services-grid"
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
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link to="/technical-service/contact-us" className="service-link">
                  Learn More <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Ready to Get Started?</h2>
            <p>
              Let's discuss how our technical services can help transform your business.
              Contact us today for a free consultation.
            </p>
            <Link to="/technical-service/contact-us" className="cta-button">
              Contact Us <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Service; 
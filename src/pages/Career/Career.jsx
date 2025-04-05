import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBriefcase, FaGraduationCap, FaUsers, FaHandshake, FaRocket, FaLightbulb, FaChartLine } from 'react-icons/fa';
import './Career.css';

const Career = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: <FaRocket />,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear career progression paths."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation First",
      description: "Work in an environment that encourages creativity and new ideas."
    },
    {
      icon: <FaHandshake />,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options for better work-life harmony."
    },
    {
      icon: <FaChartLine />,
      title: "Competitive Benefits",
      description: "Comprehensive health insurance, retirement plans, and performance bonuses."
    }
  ];

  const positions = [
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Join our engineering team to build scalable applications using modern technologies."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Create beautiful and intuitive user interfaces for our digital products."
    },
    {
      title: "Technical Project Manager",
      department: "Management",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Lead technical projects and coordinate with cross-functional teams."
    },
    {
      title: "Technical Support Engineer",
      department: "Support",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Provide expert technical support and solutions to our clients."
    }
  ];

  return (
    <div className="career-page">
      <div className="career-hero">
        <div className="container">
          <motion.div
            className="career-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Join Our Team</h1>
            <p>
              Be part of a dynamic team that's shaping the future of technology.
              We're looking for talented individuals who are passionate about innovation and growth.
            </p>
            <Link to="/technical-service/contact-us" className="career-cta-button">
              Apply Now <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>

      <section className="career-culture">
        <div className="container">
          <motion.div
            className="culture-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Our Culture</h2>
            <p>
              At Natlov Technologies, we foster a culture of innovation, collaboration, and continuous learning.
              Our team members are our greatest asset, and we invest in their growth and development.
              We believe in creating an environment where everyone can thrive and reach their full potential.
            </p>
            <div className="culture-stats">
              <div className="stat-item">
                <h3>50+</h3>
                <p>Team Members</p>
              </div>
              <div className="stat-item">
                <h3>10+</h3>
                <p>Countries</p>
              </div>
              <div className="stat-item">
                <h3>100+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="career-benefits" ref={ref}>
        <div className="container">
          <motion.div
            className="benefits-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="benefit-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="career-positions">
        <div className="container">
          <motion.div
            className="positions-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Open Positions</h2>
            <p>
              We're always looking for talented individuals to join our team.
              Check out our current openings and take the first step towards an exciting career.
            </p>
          </motion.div>

          <div className="positions-grid">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                className="position-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="position-header">
                  <h3>{position.title}</h3>
                  <span className="position-type">{position.type}</span>
                </div>
                <div className="position-details">
                  <p className="position-department">
                    <FaBriefcase /> {position.department}
                  </p>
                  <p className="position-location">
                    <FaUsers /> {position.location}
                  </p>
                </div>
                <p className="position-description">{position.description}</p>
                <Link to="/technical-service/contact-us" className="position-link">
                  Apply Now <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="career-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Don't See Your Role?</h2>
            <p>
              We're always looking for talented individuals to join our team.
              Send us your resume and we'll keep you in mind for future opportunities.
              Your next career move could be just around the corner.
            </p>
            <Link to="/technical-service/contact-us" className="cta-button">
              Send Your Resume <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Career; 
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLightbulb, FaHandshake, FaUsers, FaRocket } from 'react-icons/fa';
import './Culture.css';

const Culture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "We embrace creativity and forward-thinking solutions to drive technological advancement."
    },
    {
      icon: <FaHandshake />,
      title: "Integrity",
      description: "We maintain the highest standards of honesty and ethical behavior in all our interactions."
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and fostering strong relationships."
    },
    {
      icon: <FaRocket />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering outstanding results."
    }
  ];

  return (
    <section className="culture-section" ref={ref}>
      <div className="container">
        <motion.div
          className="culture-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h6>OUR CULTURE</h6>
          <h2>Values That Drive Us</h2>
          <p>
            At Natlov, our culture is built on strong values that shape everything we do.
            These principles guide our decisions and help us deliver exceptional results.
          </p>
        </motion.div>

        <div className="values-grid">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="culture-content"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="culture-image">
            <img src="/images/culture.jpg" alt="Our Culture" />
          </div>
          <div className="culture-text">
            <h3>Join Our Team</h3>
            <p>
              We're always looking for talented individuals who share our values
              and passion for innovation. Join us in creating cutting-edge
              solutions that make a difference.
            </p>
            <ul className="culture-benefits">
              <li>Collaborative work environment</li>
              <li>Professional growth opportunities</li>
              <li>Work-life balance</li>
              <li>Innovative projects</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Culture; 
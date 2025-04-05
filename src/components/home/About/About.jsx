import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="about section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          <h6>ABOUT US</h6>
          <h2>Who we are?</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-image"
          >
            <img src="/images/about.png" alt="About Natlov" />
            <div className="image-overlay"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="about-text"
          >
            <p>
              Natlov Technologies Private Limited is a forward-thinking engineering company that
              combines expertise, ingenuity, and a strong focus on customer satisfaction to deliver
              outstanding engineering solutions. With a highly skilled team of professionals, Natlov
              Technologies is dedicated to achieving excellence, efficiency, and meeting customer
              needs.
            </p>
            <p>
              Our core mission at Natlov Technologies Private Limited is to provide cutting-edge
              engineering solutions that empower our clients to thrive in their endeavors. We are committed to fostering seamless matches between our
              clients and the perfect candidates, propelling projects forward, and empowering
              engineers to reach their full potential in rewarding roles.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="about-stats"
        >
          <div className="stat-item">
            <h3>100+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 
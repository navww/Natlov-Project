import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBed, FaUtensils, FaWifi, FaParking } from 'react-icons/fa';
import './Staycation.css';

const Staycation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <FaBed />,
      title: "Luxury Rooms",
      description: "Experience comfort in our well-appointed rooms"
    },
    {
      icon: <FaUtensils />,
      title: "Fine Dining",
      description: "Enjoy exquisite cuisine at our restaurants"
    },
    {
      icon: <FaWifi />,
      title: "High-Speed WiFi",
      description: "Stay connected with complimentary internet"
    },
    {
      icon: <FaParking />,
      title: "Free Parking",
      description: "Convenient parking for all our guests"
    }
  ];

  return (
    <section className="staycation-section">
      <div className="container">
        <motion.div
          className="staycation-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="staycation-text">
            <h2>Experience Luxury Staycation</h2>
            <p>
              Indulge in a perfect blend of comfort and luxury at our premium
              staycation destination. Your home away from home awaits.
            </p>
            <Link to="/staycation" className="staycation-link">
              Explore More <FaArrowRight />
            </Link>
          </div>
          <div className="staycation-image">
            <img src="/images/staycation.jpg" alt="Luxury Staycation" />
          </div>
        </motion.div>

        <motion.div
          className="features-grid"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Staycation; 
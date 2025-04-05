import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBed, FaUtensils, FaWifi, FaParking, FaSwimmingPool, FaSpa, FaConciergeBell } from 'react-icons/fa';
import './Staycation.css';

const Staycation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const amenities = [
    {
      icon: <FaBed />,
      title: "Luxury Rooms",
      description: "Spacious and comfortable rooms with premium amenities"
    },
    {
      icon: <FaUtensils />,
      title: "Fine Dining",
      description: "Restaurant serving local and international cuisine"
    },
    {
      icon: <FaWifi />,
      title: "High-Speed WiFi",
      description: "Complimentary internet access throughout the property"
    },
    {
      icon: <FaParking />,
      title: "Free Parking",
      description: "Secure parking available for all guests"
    },
    {
      icon: <FaSwimmingPool />,
      title: "Swimming Pool",
      description: "Temperature-controlled pool with lounging area"
    },
    {
      icon: <FaSpa />,
      title: "Spa Services",
      description: "Relaxing treatments and wellness programs"
    },
    {
      icon: <FaConciergeBell />,
      title: "24/7 Service",
      description: "Round-the-clock concierge and room service"
    }
  ];

  const rooms = [
    {
      title: "Deluxe Room",
      description: "Modern comfort with city views",
      price: "$150",
      per: "per night",
      features: ["King-size bed", "City view", "Work desk", "Mini bar"]
    },
    {
      title: "Executive Suite",
      description: "Spacious suite with separate living area",
      price: "$250",
      per: "per night",
      features: ["King-size bed", "Living room", "Dining area", "Premium amenities"]
    },
    {
      title: "Presidential Suite",
      description: "Luxury experience with panoramic views",
      price: "$500",
      per: "per night",
      features: ["Master bedroom", "Private balcony", "Butler service", "Luxury amenities"]
    }
  ];

  return (
    <div className="staycation-page">
      <div className="staycation-hero">
        <div className="container">
          <motion.div
            className="staycation-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Experience Luxury Staycation</h1>
            <p>
              Indulge in a perfect blend of comfort and luxury at our premium staycation destination.
              Your home away from home awaits.
            </p>
            <Link to="/technical-service/contact-us" className="staycation-cta-button">
              Book Now <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>

      <section className="staycation-rooms">
        <div className="container">
          <motion.div
            className="rooms-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Our Rooms</h2>
            <p>
              Choose from our selection of carefully designed rooms and suites,
              each offering a unique experience for your stay.
            </p>
          </motion.div>

          <div className="rooms-grid">
            {rooms.map((room, index) => (
              <motion.div
                key={room.title}
                className="room-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="room-header">
                  <h3>{room.title}</h3>
                  <div className="room-price">
                    <span className="price">{room.price}</span>
                    <span className="per">{room.per}</span>
                  </div>
                </div>
                <p className="room-description">{room.description}</p>
                <ul className="room-features">
                  {room.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Link to="/technical-service/contact-us" className="room-link">
                  Book Now <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="staycation-amenities" ref={ref}>
        <div className="container">
          <motion.div
            className="amenities-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Amenities & Services</h2>
            <p>
              Enjoy our comprehensive range of amenities and services designed
              to make your stay comfortable and memorable.
            </p>
          </motion.div>

          <motion.div
            className="amenities-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                className="amenity-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="amenity-icon">{amenity.icon}</div>
                <h3>{amenity.title}</h3>
                <p>{amenity.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="staycation-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Ready for Your Stay?</h2>
            <p>
              Book your stay now and experience the perfect blend of comfort and luxury.
              Our team is ready to welcome you.
            </p>
            <Link to="/technical-service/contact-us" className="cta-button">
              Book Your Stay <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Staycation; 
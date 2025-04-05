import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Welcome to Natlov Technologies",
      description: "Your trusted partner in digital transformation and innovation"
    },
    {
      title: "Expert Technical Solutions",
      description: "Delivering cutting-edge technology solutions for your business"
    },
    {
      title: "24/7 Support Available",
      description: "Round-the-clock technical support and maintenance services"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Carousel Section */}
      <section className="hero-carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="carousel-content">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {slide.description}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          className="carousel-control prev"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
        >
          <span className="sr-only">Previous</span>
          <FaArrowRight style={{ transform: 'rotate(180deg)' }} />
        </button>
        <button
          className="carousel-control next"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          aria-label="Next slide"
        >
          <span className="sr-only">Next</span>
          <FaArrowRight />
        </button>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <motion.h6
                className="orange-header"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                About Us
              </motion.h6>
              <motion.h2
                className="big-title"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We Are The Best Technical Service Provider
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Natlov Technologies is a leading provider of technical services, offering comprehensive solutions for businesses of all sizes. Our team of experts is dedicated to delivering high-quality services and innovative solutions to help your business thrive in the digital age.
              </motion.p>
            </div>
            <div className="col-md-6">
              <motion.img
                src="https://www.natlov.com/static/images/about.png"
                alt="About Natlov Technologies"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <motion.h6
            className="orange-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h6>
          <motion.h2
            className="big-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What We Do
          </motion.h2>
          <div className="services-container">
            <div className="row">
              <div className="col-md-4">
                <motion.div
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <img src="https://www.natlov.com/static/images/home_app/ItService.png" className="card-img-top" alt="Technical Support" />
                  <div className="card-body">
                    <h5 className="card-title">Technical Support</h5>
                    <p className="card-text">24/7 technical support services for all your IT needs. Our expert team is always ready to help.</p>
                    <Link to="/technical-service" className="btn btn-primary">Learn More</Link>
                  </div>
                </motion.div>
              </div>
              <div className="col-md-4">
                <motion.div
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <img src="https://www.natlov.com/static/images/home_app/itsupport.png" className="card-img-top" alt="Consulting" />
                  <div className="card-body">
                    <h5 className="card-title">Consulting</h5>
                    <p className="card-text">Expert consulting services to help you make informed decisions about your technology investments.</p>
                    <Link to="/technical-service" className="btn btn-primary">Learn More</Link>
                  </div>
                </motion.div>
              </div>
              {/* <div className="col-md-4">
                <motion.div
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <img src="/images/home_app/service3.jpg" className="card-img-top" alt="Implementation" />
                  <div className="card-body">
                    <h5 className="card-title">Implementation</h5>
                    <p className="card-text">Professional implementation services to ensure your technology solutions are properly deployed.</p>
                    <Link to="/technical-service" className="btn btn-primary">Learn More</Link>
                  </div>
                </motion.div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Staycation Section */}
      <section className="staycation-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <motion.div
                className="staycation-image"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img src="https://www.natlov.com/static/images/home_app/8df690172c37da6afc3b32ae185a5767.png" alt="Staycation" />
              </motion.div>
            </div>
            <div className="col-md-6">
              <motion.div
                className="staycation-content"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h5>Experience Our Staycation Services</h5>
                <p>Discover our unique staycation services designed to provide you with a comfortable and productive environment. Perfect for remote work and team collaborations.</p>
                <Link to="/staycation" className="btn btn-warning">Explore Staycation</Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <motion.h6
            className="orange-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Projects
          </motion.h6>
          <motion.h2
            className="big-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Recent Work
          </motion.h2>
          <div className="row">
            <div className="col-md-4">
              <motion.div
                className="project-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="project-image">
                  <img src="https://www.natlov.com/static/images/home_app/project1.png" alt="Project 1" />
                </div>
                <h6>Enterprise Solution</h6>
                <p>Implemented a comprehensive enterprise solution for a leading financial institution.</p>
              </motion.div>
            </div>
            <div className="col-md-4">
              <motion.div
                className="project-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="project-image">
                  <img src="https://www.natlov.com/static/images/home_app/project3.png" alt="Project 2" />
                </div>
                <h6>Cloud Migration</h6>
                <p>Successfully migrated a large-scale application to the cloud with zero downtime.</p>
              </motion.div>
            </div>
            <div className="col-md-4">
              <motion.div
                className="project-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="project-image">
                  <img src="https://www.natlov.com/static/images/home_app/isa.png" alt="Project 3" />
                </div>
                <h6>Digital Transformation</h6>
                <p>Led a digital transformation initiative for a retail chain, improving efficiency by 40%.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
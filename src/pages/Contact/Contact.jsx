import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBriefcase, FaGraduationCap, FaUsers, FaHandshake, FaRocket, FaLightbulb, FaChartLine, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="containerBox-hero-section">
        <div className="containerBox-hero-content">
          <div className="container">
            <div>
              <h1 className="containerBox-hero-title">EMPOWER YOUR BUSINESS</h1>
              <p className="containerBox-hero-subtitle">with our technical services and support</p>
              <p className="containerBox-hero-subtitle">Explore various technologies we offer our services in. Connect with us and let us support you and your vision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section" id="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="contact-info-wrapper revealLeft">
                <div className="contact-info-card">
                  <div className="contact-info-list">
                    <div className="contact-info">
                      <h2>How We Can Help</h2>
                      <p>Fill out the form and our team will get back to you within 24 hours.</p>
                      
                      <p><span className="icon icon-location"></span> <strong>Our Location:</strong> Ranchi, Jharkhand, India</p>
                      <p><span className="icon icon-clock"></span> <strong>Working Hours:</strong> Monday - Friday: 1230 - 2130 GMT</p>
                      <p><span className="icon icon-mail"></span> <strong>Email Us:</strong> <a href="mailto:business@natlov.com">business@natlov.com</a></p>
                      
                      <div className="social-icons">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><span className="x-icon">X</span></a>
                        <a href="https://www.instagram.com/natlov_technologies/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://in.linkedin.com/company/natlov-tech" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact-image-container">
                  <img src="https://www.natlov.com/static/images/inline-logo-1.png" alt="Natlov Technologies Logo" className="img-fluid contact-image" />
                  <div className="image-shape-1"></div>
                  <div className="image-shape-2"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-container revealRight">
                <div className="form-background-shapes">
                  <div className="shape shape-1"></div>
                  <div className="shape shape-2"></div>
                  <div className="shape shape-3"></div>
                </div>
                <form action="https://forms.nicepagesrv.com/v2/form/process" className="contact-form" source="email" name="form">
                  <div className="form-floating mb-4">
                    <input type="text" id="name" name="name" className="form-control custom-input" placeholder="Enter your name" required />
                    <label htmlFor="name"><i className="fas fa-user me-2"></i>Your Name</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input type="email" id="email" name="email" className="form-control custom-input" placeholder="Enter your email" required />
                    <label htmlFor="email"><i className="fas fa-envelope me-2"></i>Email Address</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input type="tel" id="phone" name="phone" className="form-control custom-input" placeholder="Enter your phone number" />
                    <label htmlFor="phone"><i className="fas fa-phone me-2"></i>Phone Number</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input type="text" id="subject" name="subject" className="form-control custom-input" placeholder="What is this regarding?" />
                    <label htmlFor="subject"><i className="fas fa-tag me-2"></i>Subject</label>
                  </div>
                  <div className="form-floating mb-4">
                    <textarea id="message" name="message" className="form-control custom-input" style={{ height: "150px" }} placeholder="How can we help you?" required></textarea>
                    <label htmlFor="message"><i className="fas fa-comment me-2"></i>Message</label>
                  </div>
                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" value="" id="privacyCheck" required />
                    <label className="form-check-label" htmlFor="privacyCheck">
                      I agree to the <a href="#" className="text-primary">Privacy Policy</a>
                    </label>
                  </div>
                  <button type="submit" className="btn-submit btn-primary send-button">
                    <span className="btn-text">Send Message</span>
                    <span className="btn-icon"><i className="fas fa-paper-plane"></i></span>
                  </button>

                  <div className="form-response success-message mt-3" style={{ display: "none" }}>
                    <i className="fas fa-check-circle me-2"></i>
                    Thank you! Your message has been sent successfully.
                  </div>
                  <div className="form-response error-message mt-3" style={{ display: "none" }}>
                    <i className="fas fa-exclamation-circle me-2"></i>
                    Unable to send your message. Please fix errors then try again.
                  </div>
                  <input type="hidden" value="" name="recaptchaResponse" />
                  <input type="hidden" name="formServices" value="f84b8cf83532e8a02c44348819f6aa78" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-particles" id="cta-particles"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h2 className="cta-title">Ready to Transform Your Business?</h2>
              <p className="cta-desc">Partner with Natlov Technologies to leverage our technical expertise and drive your business forward. Our team is ready to support your vision and help you achieve your goals.</p>
              <div className="cta-buttons">
                <a href="https://wa.me/916287065601" className="cta-btn primary" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp me-2"></i> Connect on WhatsApp
                </a>
                <a href="mailto:business@natlov.com" className="cta-btn secondary">
                  <i className="fas fa-envelope me-2"></i> Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-shapes">
          <div className="cta-shape shape-1"></div>
          <div className="cta-shape shape-2"></div>
          <div className="cta-shape shape-3"></div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-overlay">
          <div className="map-text">Click to view our location</div>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117711.91484915413!2d85.25609205820312!3d23.34398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1659123456789!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Natlov Technologies Location"
        ></iframe>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: "#001F3D" }}>Frequently Asked Questions</h2>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item mb-3 border">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What services does Natlov Technologies offer?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Natlov Technologies offers a wide range of IT and engineering services including software development, web and mobile app development, cloud solutions, database management, cybersecurity, technical support, and IT consulting.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3 border">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How can I request a quote for my project?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      You can request a quote by filling out our contact form on this page, sending an email to business@natlov.com, or calling us directly. Please provide as much detail about your project as possible so we can give you an accurate estimate.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3 border">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      What is your typical response time?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We typically respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling us directly or using WhatsApp for faster response.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3 border">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Do you offer ongoing maintenance and support?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, we offer comprehensive maintenance and support packages for all our services. We can tailor a support plan that meets your specific needs and budget, ensuring your systems remain operational and up-to-date.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Info Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h2 className="mb-4" style={{ color: "#001F3D" }}>About Natlov Technologies</h2>
              <p className="mb-4">Natlov Technologies Private Limited is a forward-thinking engineering company that combines expertise, ingenuity, and a strong focus on customer satisfaction to deliver outstanding engineering solutions. With a highly skilled team of professionals, Natlov Technologies is dedicated to achieving excellence, efficiency, and meeting customer needs.</p>
              <p>Our core mission at Natlov Technologies Private Limited is to provide cutting-edge engineering solutions that empower our clients to thrive in their endeavors. We are committed to fostering seamless matches between our clients and the perfect candidates, propelling projects forward, and empowering engineers to reach their full potential in rewarding roles.</p>
              <p className="mt-3"><strong>CIN: U58201JH2023PTC020227</strong></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 
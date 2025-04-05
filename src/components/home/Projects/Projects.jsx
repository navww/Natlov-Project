import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Shri GogaJi SoftIn Services',
      description: 'An Information Technology service provider company.',
      image: '/images/home_app/project1.png'
    },
    {
      title: 'Savitri Textiles',
      description: 'A clothing/textiles company. Built an android fabric colour changing app that helped customer visualize what clothes would look in different colours.',
      image: '/images/home_app/project3.png'
    },
    {
      title: 'Indian Survival Academy',
      description: 'A survival gudiences company.They will teach you the art of jungle survival, from deciphering animal tracks to crafting your own shelter, making fire, sourcing food, and finding clean water sources.',
      image: '/images/home_app/isa.png'
    },
    {
      title: 'App Usage Tracker',
      description: 'An app that tracks yours daily phone usage and how much time you are spending on your apps. Allows you to set time limit that notifies you, once its reached.',
      image: '/images/home_app/project2v2.png',
      comingSoon: true
    }
  ];

  return (
    <section className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          <h6>PROJECTS</h6>
          <h2>Some things we've worked on</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                {project.comingSoon && <div className="coming-soon">Coming Soon</div>}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {!project.comingSoon && (
                  <Link to="#" className="project-link">
                    Learn More <FaArrowRight />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
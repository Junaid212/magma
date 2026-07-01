import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap, ScrollTrigger } from '../../../../utils/gsapConfig';
import styles from './ProjectsSection.module.scss';
import projectImg from '../../../../assets/images/img/14.webp';
import projectImg2 from '../../../../assets/images/img/15.webp';

const filterTabs = ['Featured', 'Architecture', 'Interior', 'Landscape', 'Furniture'];

const projects = [
  {
    id: 1,
    title: 'Townhouse in San Joe',
    desc: 'This area will is short description of project, you can select to show or hide it, this a sample short paragraph for this.',
    image: projectImg,
    tags: ['Architecture', 'Furniture'],
    categories: ['Featured', 'Architecture', 'Furniture'],
  },
  {
    id: 2,
    title: 'Homestay Rennovation and Interior Design',
    desc: 'This area will is short description of project, you can select to show or hide it, this a sample short paragraph for this.',
    image: projectImg2,
    tags: ['Furniture', 'Furniture'],
    categories: ['Featured', 'Interior', 'Furniture'],
  },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('Featured');
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  const filteredProjects = projects.filter((p) =>
    p.categories.includes(activeFilter)
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate cards whenever filter changes
  useEffect(() => {
    if (cardsRef.current.length) {
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out' }
      );
    }
  }, [activeFilter]);

  return (
    <section className={styles.projectsSection} ref={sectionRef}>
      <div className="container">
        {/* Header row */}
        <div className={styles.sectionHeader} ref={headingRef}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>

          {/* Filter Tabs + See All button */}
          <div className={styles.filterRow}>
            <div className={styles.filterTabs}>
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  className={`${styles.filterTab} ${activeFilter === tab ? styles.active : ''}`}
                  onClick={() => setActiveFilter(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <Link to="/projects" className={styles.seeAllBtn}>
              See All Projects ↗
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={styles.projectCard}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              {/* Project Image */}
              <div className={styles.cardImageWrap}>
                <img src={project.image} alt={project.title} className={styles.cardImage} />
              </div>

              {/* Project Info */}
              <div className={styles.cardInfo}>
                {/* Tags */}
                <div className={styles.tagList}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className={styles.divider} />
      </div>
    </section>
  );
};

export default ProjectsSection;

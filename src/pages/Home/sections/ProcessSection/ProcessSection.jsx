import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { gsap, ScrollTrigger } from '../../../../utils/gsapConfig';
import styles from './ProcessSection.module.scss';

const processItems = [
  {
    id: 1,
    title: 'Survey & Quotes',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=700&q=80',
    content:
      'After surveying and obtaining the necessary information, we will create a preliminary design including technical drawings, 3D images of the interior and provide a 3D VR experience to help customers get a visual view of their project.',
  },
  {
    id: 2,
    title: 'Design & Perfomance',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80',
    content:
      'We develop detailed design documentation, construction drawings and specifications, collaborating closely with engineers and consultants to ensure the highest performance standards.',
  },
  {
    id: 3,
    title: 'Hand Over',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80',
    content:
      'We manage the handover process thoroughly — final inspections, punch lists, and commissioning — ensuring all systems are functioning correctly before clients take possession.',
  },
];

const ProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const leftRef = useRef(null);
  const imageRef = useRef(null);
  const decorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, rotate: 5, scale: 0.9 },
        {
          opacity: 1,
          rotate: 8,
          scale: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate image swap on accordion toggle
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [activeIndex]);

  const toggleItem = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className={styles.processSection} ref={sectionRef}>
      <div className="container">
        {/* Section Heading */}
        <h2 className={styles.sectionTitle} ref={headingRef}>
          Our Process Work
        </h2>

        <div className={styles.processLayout}>
          {/* Left: Accordion */}
          <div className={styles.accordionCol} ref={leftRef}>
            {processItems.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
              >
                <div
                  className={styles.accordionHeader}
                  onClick={() => toggleItem(index)}
                  role="button"
                  aria-expanded={activeIndex === index}
                >
                  <span className={styles.itemNum}>{item.id} /</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <span className={styles.toggleIcon}>
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>

                <div
                  className={styles.accordionBody}
                  style={{ maxHeight: activeIndex === index ? '300px' : '0' }}
                >
                  <p className={styles.accordionText}>{item.content}</p>
                </div>
              </div>
            ))}

            {/* Our Projects Button */}
            <div className={styles.projectsBtn}>
              <Link to="/projects" className={styles.outlineBtn}>
                Our Projects ↗
              </Link>
            </div>
          </div>

          {/* Right: Image with decoration */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrap} ref={imageRef}>
              <img
                src={processItems[activeIndex >= 0 ? activeIndex : 0]?.image}
                alt={processItems[activeIndex >= 0 ? activeIndex : 0]?.title}
              />
            </div>
            {/* Red decorative SVG */}
            <div className={styles.decorSvg} ref={decorRef}>
              <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M50 100 C 150 50, 250 100, 280 200 C 310 300, 250 400, 150 430 C 100 450, 50 420, 80 380 C 120 330, 180 350, 170 300"
                  stroke="#FF481F"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

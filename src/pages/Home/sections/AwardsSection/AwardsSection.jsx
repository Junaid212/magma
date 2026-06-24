import React, { useRef, useEffect, useState } from 'react';
import { gsap, ScrollTrigger } from '../../../../utils/gsapConfig';
import { IoLocationOutline } from 'react-icons/io5';
import styles from './AwardsSection.module.scss';

const awards = [
  { year: '2023', title: 'Boston Award For Architecture', location: 'Boston, Massachusetts' },
  { year: '2022', title: 'AIAG - Best Domestic Design', location: 'Worldwide' },
  { year: '2022', title: 'US Green - Top 5 Sustainable Design', location: 'Brooklyn, NY' },
  { year: '2021', title: 'WAF Festival - Spatial Design', location: 'Los Anglous, CA' },
  { year: '2021', title: 'Behance - Project Of The Year', location: 'Worldwide' },
  { year: '2020', title: 'AWA International Architectural Design - 2nd Prize', location: 'Berline, Germany' },
];

const AwardsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const rowsRef = useRef([]);
  const [showMore, setShowMore] = useState(false);

  const visibleAwards = showMore ? awards : awards.slice(0, 4);

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

      gsap.fromTo(
        rowsRef.current.filter(Boolean),
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
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

  return (
    <section className={styles.awardsSection} ref={sectionRef}>
      <div className="container">
        <h2 className={styles.sectionTitle} ref={headingRef}>
          Awards & Recognition
        </h2>

        <div className={styles.awardsList}>
          {visibleAwards.map((award, index) => (
            <div
              key={index}
              className={styles.awardRow}
              ref={(el) => (rowsRef.current[index] = el)}
            >
              <span className={styles.awardYear}>{award.year}</span>
              <h3 className={styles.awardTitle}>{award.title}</h3>
              <span className={styles.awardLocation}>
                <IoLocationOutline />
                {award.location}
              </span>
              <button className={styles.arrowBtn} aria-label="View award">
                ↗
              </button>
            </div>
          ))}
        </div>

        {/* Show More / Less */}
        <div className={styles.showMoreWrap}>
          <button
            className={styles.showMoreBtn}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less ∧' : 'Show More ∨'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;

import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../../../../utils/gsapConfig';
import styles from './TeamSection.module.scss';

const teamMembers = [
  { id: 1, name: 'Alex M.', size: 'sm', img: 'https://randomuser.me/api/portraits/men/52.jpg', top: '0', left: '0' },
  { id: 2, name: 'Robert K.', size: 'lg', img: 'https://randomuser.me/api/portraits/men/62.jpg', top: '0', left: '160px' },
  { id: 3, name: 'James L.', size: 'sm', img: 'https://randomuser.me/api/portraits/men/10.jpg', top: '0', left: '420px' },
  { id: 4, name: 'Chris T.', size: 'sm', img: 'https://randomuser.me/api/portraits/men/22.jpg', top: '0', left: '570px' },
  { id: 5, name: 'Mark D.', size: 'sm', img: 'https://randomuser.me/api/portraits/men/35.jpg', top: '0', left: '720px' },
  { id: 6, name: 'Paul N.', size: 'sm', img: 'https://randomuser.me/api/portraits/men/47.jpg', top: '180px', left: '0' },
  { id: 7, name: 'Leo H.', size: 'sm', img: 'https://randomuser.me/api/portraits/men/88.jpg', top: '180px', left: '420px' },
];

const stats = [
  { value: '95%', label: 'Happy Customer And Repeating' },
  { value: '126', label: 'Projects Completed In 15 Years' },
  { value: '25', label: 'Architects And High Qualified Crafters' },
];

const TeamSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const membersRef = useRef([]);
  const statsRef = useRef([]);

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
        membersRef.current.filter(Boolean),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.3)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        statsRef.current.filter(Boolean),
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.teamSection} ref={sectionRef}>
      <div className="container">
        <h2 className={styles.sectionTitle} ref={headingRef}>
          Meet our top-notch experts
        </h2>

        {/* Team members visual layout */}
        <div className={styles.teamGrid}>
          {/* Small circle - top left */}
          <div
            className={`${styles.memberCircle} ${styles.sm}`}
            ref={(el) => (membersRef.current[0] = el)}
          >
            <img src={teamMembers[0].img} alt={teamMembers[0].name} />
          </div>

          {/* Large circle - center prominent */}
          <div
            className={`${styles.memberCircle} ${styles.lg}`}
            ref={(el) => (membersRef.current[1] = el)}
          >
            <img src={teamMembers[1].img} alt={teamMembers[1].name} />
          </div>

          {/* Small circle - mid row */}
          <div
            className={`${styles.memberCircle} ${styles.sm}`}
            ref={(el) => (membersRef.current[2] = el)}
          >
            <img src={teamMembers[2].img} alt={teamMembers[2].name} />
          </div>

          {/* Small circle */}
          <div
            className={`${styles.memberCircle} ${styles.sm}`}
            ref={(el) => (membersRef.current[3] = el)}
          >
            <img src={teamMembers[3].img} alt={teamMembers[3].name} />
          </div>

          {/* Small circle */}
          <div
            className={`${styles.memberCircle} ${styles.sm}`}
            ref={(el) => (membersRef.current[4] = el)}
          >
            <img src={teamMembers[4].img} alt={teamMembers[4].name} />
          </div>

          {/* Row 2 left */}
          <div
            className={`${styles.memberCircle} ${styles.sm}`}
            ref={(el) => (membersRef.current[5] = el)}
          >
            <img src={teamMembers[5].img} alt={teamMembers[5].name} />
          </div>

          {/* Row 2 mid */}
          <div
            className={`${styles.memberCircle} ${styles.sm}`}
            ref={(el) => (membersRef.current[6] = el)}
          >
            <img src={teamMembers[6].img} alt={teamMembers[6].name} />
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Stats Row */}
        <div className={styles.statsRow}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={styles.statItem}
              ref={(el) => (statsRef.current[index] = el)}
            >
              <span className={styles.statValue}>{stat.value}</span>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

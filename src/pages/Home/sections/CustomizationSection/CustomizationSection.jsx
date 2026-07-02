import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap, ScrollTrigger } from '../../../../utils/gsapConfig';
import styles from './CustomizationSection.module.scss';
import { ArrowUpRight } from 'lucide-react';

const customizations = [
  {
    id: 1,
    title: 'Kitchen Countertops',
    desc: 'Custom-crafted surfaces designed to combine durability, functionality, and timeless elegance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6H21M3 6V20H21V6M3 6L5 4H19L21 6M8 12H16M8 16H12" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Vanity Tops',
    desc: 'Premium stone vanities tailored to complement sophisticated interior spaces.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="8" width="18" height="4" rx="1" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5 12V20M19 12V20M8 20H16" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 8V5C9 4.44772 9.44772 4 10 4H14C14.5523 4 15 4.44772 15 5V8" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Staircases',
    desc: 'Precision-finished stone staircases that create a grand architectural statement.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 20H7V16H11V12H15V8H19V4" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 20V4" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Custom Furniture',
    desc: 'Exclusive marble furniture pieces designed for distinctive luxury interiors.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V9" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M1 9H23V14H1V9Z" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 14V19M20 14V19" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Wall Cladding',
    desc: 'Elegant natural stone applications that add depth, texture, and character.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="8" height="5" rx="1" stroke="#FF481F" strokeWidth="1.5"/>
        <rect x="13" y="3" width="8" height="5" rx="1" stroke="#FF481F" strokeWidth="1.5"/>
        <rect x="3" y="10" width="8" height="5" rx="1" stroke="#FF481F" strokeWidth="1.5"/>
        <rect x="13" y="10" width="8" height="5" rx="1" stroke="#FF481F" strokeWidth="1.5"/>
        <rect x="3" y="17" width="8" height="4" rx="1" stroke="#FF481F" strokeWidth="1.5"/>
        <rect x="13" y="17" width="8" height="4" rx="1" stroke="#FF481F" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Flooring Solutions',
    desc: 'Seamless flooring systems crafted for both residential and commercial environments.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 3L12 12L21 3" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 12H21" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 21L12 12L21 21" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Reception Counters',
    desc: 'Statement reception areas built to leave a lasting first impression.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 17H22M2 17V21H22V17M2 17V13C2 11.8954 2.89543 11 4 11H20C21.1046 11 22 11.8954 22 13V17" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11V7C8 5.34315 9.34315 4 11 4H13C14.6569 4 16 5.34315 16 7V11" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Dining Tables',
    desc: 'Handcrafted stone tables that merge functionality with refined aesthetics.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10H21" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 7H21V13H3V7Z" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 13V19M17 13V19" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5 19H9M15 19H19" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 9,
    title: 'Feature Walls',
    desc: 'Architectural focal points that celebrate the beauty of natural materials.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#FF481F" strokeWidth="1.5"/>
        <path d="M3 9H21M3 15H21M9 3V21M15 3V21" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 10,
    title: 'Bespoke Projects',
    desc: 'Fully customized stone creations tailored to unique client visions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L14.85 8.62L22 9.27L17 13.97L18.47 21L12 17.27L5.53 21L7 13.97L2 9.27L9.15 8.62L12 2Z" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const CustomizationSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const labelRef = useRef(null);
  const cardsRef = useRef([]);
  const decorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label fade-up
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: labelRef.current,
            start: 'top 85%',
          },
        }
      );

      // Heading stagger reveal
      const headingLines = headingRef.current?.querySelectorAll('span');
      if (headingLines?.length) {
        gsap.fromTo(
          headingLines,
          { opacity: 0, y: 35, skewY: 1.5 },
          {
            opacity: 1,
            y: 0,
            skewY: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Subtitle fade-up
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 85%',
          },
        }
      );

      // Decorative background element
      if (decorRef.current) {
        gsap.fromTo(
          decorRef.current,
          { opacity: 0, scale: 0.88 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            },
          }
        );
      }

      // Cards staggered reveal — batched in rows of 5
      const cards = cardsRef.current.filter(Boolean);
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.07,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current.querySelector(`.${styles.cardsGrid}`),
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.customizationSection} ref={sectionRef}>
      {/* Decorative circle blob — consistent with site's beige aesthetic */}
      <div className={styles.decorBlob} ref={decorRef} aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel} ref={labelRef}>CUSTOMIZATION</p>
          <h2 className={styles.sectionHeading} ref={headingRef}>
            <span>Crafted For Your Vision</span>
          </h2>
          <p className={styles.sectionSubtitle} ref={subtitleRef}>
            Tailored stone solutions crafted with precision, transforming natural beauty into timeless spaces.
          </p>
        </div>

        {/* Cards Grid — 5 × 2 */}
        <div className={styles.cardsGrid}>
          {customizations.map((item, i) => (
            <div
              key={item.id}
              className={styles.card}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              {/* Top accent line */}
              <span className={styles.cardAccent} aria-hidden="true" />

              {/* Icon */}
              <div className={styles.cardIcon}>{item.icon}</div>

              {/* Content */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>

              {/* Arrow CTA */}
              <button className={styles.cardArrow} aria-label={`Learn more about ${item.title}`}>
                <ArrowUpRight strokeWidth={0.75} />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.ctaRow}>
          <p className={styles.ctaNote}>
            Every project is unique. Tell us yours.
          </p>
          <Link to="/contact" className={styles.ctaBtn}>
            Start a Custom Project 
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomizationSection;

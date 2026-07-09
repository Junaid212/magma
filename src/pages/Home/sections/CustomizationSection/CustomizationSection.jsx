import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap, ScrollTrigger } from '../../../../utils/gsapConfig';
import styles from './CustomizationSection.module.scss';
import { ArrowUpRight } from 'lucide-react';

// ── Local image imports ────────────────────────────────────────────────────
import img3  from '../../../../assets/images/img/20.webp';
import img4  from '../../../../assets/images/img/21.webp';
import img5  from '../../../../assets/images/img/22.webp';
import img6  from '../../../../assets/images/img/23.webp';
import img7  from '../../../../assets/images/img/24.webp';
import img9  from '../../../../assets/images/img/25.webp';
import img10 from '../../../../assets/images/img/26.webp';
import img14 from '../../../../assets/images/img/27.webp';
import img15 from '../../../../assets/images/img/28.webp';
import img16 from '../../../../assets/images/img/29.webp';

const customizations = [
  {
    id: 1,
    title: 'Kitchen Countertops',
    tag: 'Interior',
    desc: 'Custom-crafted surfaces combining durability, functionality, and timeless elegance.',
    image: img3,
  },
  {
    id: 2,
    title: 'Vanity Tops',
    tag: 'Bathroom',
    desc: 'Premium stone vanities tailored to complement sophisticated interior spaces.',
    image: img4,
  },
  {
    id: 3,
    title: 'Staircases',
    tag: 'Architecture',
    desc: 'Precision-finished stone staircases that create a grand architectural statement.',
    image: img5,
  },
  {
    id: 4,
    title: 'Custom Furniture',
    tag: 'Furniture',
    desc: 'Exclusive marble furniture pieces designed for distinctive luxury interiors.',
    image: img6,
  },
  {
    id: 5,
    title: 'Wall Cladding',
    tag: 'Exterior',
    desc: 'Elegant natural stone applications that add depth, texture, and character.',
    image: img7,
  },
  {
    id: 6,
    title: 'Flooring Solutions',
    tag: 'Flooring',
    desc: 'Seamless flooring systems for both residential and commercial environments.',
    image: img9,
  },
  {
    id: 7,
    title: 'Reception Counters',
    tag: 'Commercial',
    desc: 'Statement reception areas built to leave a lasting first impression.',
    image: img10,
  },
  {
    id: 8,
    title: 'Dining Tables',
    tag: 'Furniture',
    desc: 'Handcrafted stone tables that merge functionality with refined aesthetics.',
    image: img14,
  },
  {
    id: 9,
    title: 'Feature Walls',
    tag: 'Interior',
    desc: 'Architectural focal points that celebrate the beauty of natural materials.',
    image: img15,
  },
  {
    id: 10,
    title: 'Bespoke Projects',
    tag: 'Custom',
    desc: 'Fully customized stone creations tailored to unique client visions.',
    image: img16,
  },
];

const CustomizationSection = () => {
  const sectionRef  = useRef(null);
  const headingRef  = useRef(null);
  const labelRef    = useRef(null);
  const subtitleRef = useRef(null);
  const trackRef    = useRef(null);
  const cardsRef    = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Header animations ────────────────────────────────────────────
      gsap.fromTo(labelRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: labelRef.current, start: 'top 88%' } }
      );

      const headingLines = headingRef.current?.querySelectorAll('span');
      if (headingLines?.length) {
        gsap.fromTo(headingLines,
          { opacity: 0, y: 40, skewY: 2 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: headingRef.current, start: 'top 82%' } }
        );
      }

      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: subtitleRef.current, start: 'top 86%' } }
      );

      // ── Cards: staggered fade-up ─────────────────────────────────────
      const cards = cardsRef.current.filter(Boolean);
      gsap.fromTo(cards,
        { opacity: 0, y: 60, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.8, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: trackRef.current, start: 'top 80%' },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.customizationSection} ref={sectionRef}>
      <div className="container">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <p className={styles.sectionLabel} ref={labelRef}>Customization</p>
            <h2 className={styles.sectionHeading} ref={headingRef}>
              <span>Crafted For </span>
              <span>Your Vision</span>
            </h2>
          </div>
          <div className={styles.headerRight}>
            {/* <p className={styles.sectionSubtitle} ref={subtitleRef}>
              Tailored stone solutions crafted with precision, transforming
              natural beauty into timeless spaces.
            </p> */}
            {/* <Link to="/contact" className={styles.headerCta}>
              Start a Project <ArrowUpRight strokeWidth={1} size={16} />
            </Link> */}
          </div>
        </div>

        {/* ── Cards Grid ─────────────────────────────────────────────── */}
        <div className={styles.cardsGrid} ref={trackRef}>
          {customizations.map((item, i) => (
            <div
              key={item.id}
              className={styles.card}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              {/* Full-bleed image */}
              <div className={styles.cardImageWrap}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.cardImage}
                  loading="lazy"
                />
                {/* Gradient overlay so text stays readable */}
                <div className={styles.cardOverlay} />
              </div>

              {/* Tag pill (top-left) */}
              <span className={styles.cardTag}>{item.tag}</span>

              {/* Arrow (top-right) */}
              <button className={styles.cardArrow} aria-label={`Explore ${item.title}`}>
                <ArrowUpRight strokeWidth={1.2} size={18} />
              </button>

              {/* Content block (bottom) */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomizationSection;

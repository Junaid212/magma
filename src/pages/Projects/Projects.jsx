import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from '../../utils/gsapConfig';
import Footer from '../../components/Footer/Footer';
import styles from './Projects.module.scss';

import img1  from '../../assets/images/img/1.webp';
import img2  from '../../assets/images/img/2.webp';
import img5  from '../../assets/images/img/5.webp';
import img9  from '../../assets/images/img/9.webp';
import img14 from '../../assets/images/img/14.webp';
import img17 from '../../assets/images/img/17.webp';
import { ArrowUpRight } from 'lucide-react';

// ─── Data ───────────────────────────────────────────────────

const filterTabs = ['All', 'Residential', 'Commercial', 'Hospitality', 'Restoration'];

const projects = [
  {
    id: 1,
    title: 'Sentido Touch Panel',
    subtitle: 'Brushed metal keypad with soft-glow icons',
    badge: 'BASALTE',
    price: '$1,200',
    poa: false,
    image: img1,
    categories: ['All', 'Residential'],
    span: false,
  },
  {
    id: 2,
    title: 'Sentido Touch Panel',
    subtitle: 'Brushed metal keypad with soft-glow icons',
    badge: 'BASALTE',
    price: null,
    poa: true,
    image: img9,
    categories: ['All', 'Commercial'],
    span: false,
  },
  {
    id: 3,
    title: 'Sentido Touch Panel',
    subtitle: 'Brushed metal keypad with soft-glow icons',
    badge: 'BASALTE',
    price: '$1,200',
    poa: false,
    image: img17,
    categories: ['All', 'Hospitality'],
    span: true, // spans 2 rows in the grid
  },
  {
    id: 4,
    title: 'Sentido Touch Panel',
    subtitle: 'Brushed metal keypad with soft-glow icons',
    badge: 'BASALTE',
    price: null,
    poa: true,
    image: img14,
    categories: ['All', 'Residential'],
    span: false,
  },
  {
    id: 5,
    title: 'Sentido Touch Panel',
    subtitle: 'Brushed metal keypad with soft-glow icons',
    badge: 'BASALTE',
    price: '$1,200',
    poa: false,
    image: img2,
    categories: ['All', 'Commercial'],
    span: false,
  },
];

// ─── Component ───────────────────────────────────────────────

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const heroRef       = useRef(null);
  const heroInnerRef  = useRef(null);
  const headerRef     = useRef(null);
  const gridRef       = useRef(null);
  const cardsRef      = useRef([]);

  const filteredProjects = projects.filter((p) =>
    p.categories.includes(activeFilter)
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        heroInnerRef.current?.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.3 }
      );

      // Section header
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.75, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: headerRef.current, start: 'top 80%' },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  // Animate cards when filter changes
  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (cards.length) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.08, ease: 'power3.out' }
      );
    }
  }, [activeFilter]);

  return (
    <div className={styles.projectsPage}>

      {/* ══════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════ */}
      <section className={styles.heroSection} ref={heroRef}>
        <div className={styles.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=85"
            alt="Luxury interior space"
          />
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className="container">
          <div className={styles.heroInner} ref={heroInnerRef}>
            <div className={styles.heroBreadcrumb}>
              <span>Home</span>
              <span className={styles.sep}>/</span>
              <span className={styles.active}>Projects</span>
            </div>
            <h1 className={styles.heroTitle}>Our Projects</h1>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HIGHLIGHTED PRODUCTS SECTION
      ══════════════════════════════════════════ */}
      <section className={styles.highlightSection}>
        <div className="container">

          {/* ── Section Header (dashed top border) ── */}
          <div className={styles.sectionHeader} ref={headerRef}>
            <div className={styles.headerTop}>
              {/* Left: label + heading */}
              <div className={styles.headerLeft}>
                <div className={styles.popularBadge}>
                  <span className={styles.popularIcon} aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="16" height="16" rx="3" fill="#af864cff"/>
                      <path d="M4 8h8M8 4v8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <span className={styles.popularText}>MOST POPULAR</span>
                </div>
                <h2 className={styles.sectionTitle}>Highlighted Projects</h2>
              </div>

              {/* Right: description */}
              <p className={styles.sectionDesc}>
                A refined selection of control systems, keypads, and interfaces
                designed for seamless integration and long-term performance.
              </p>
            </div>

            {/* Dashed divider below header */}
            <div className={styles.dashedDivider} aria-hidden="true" />

            {/* Filter Tabs */}
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
              <Link to="/contact" className={styles.inquireBtn}>
                Request a Quote <ArrowUpRight strokeWidth={0.75} />
              </Link>
            </div>
          </div>

          {/* ── Masonry-style Product Grid ── */}
          <div className={styles.productsGrid}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`${styles.productCard} ${project.span ? styles.cardSpan : ''}`}
                ref={(el) => (cardsRef.current[index] = el)}
              >
                {/* Background image */}
                <div className={styles.cardImg}>
                  <img src={project.image} alt={project.title} />
                </div>

                {/* Overlay gradient */}
                <div className={styles.cardOverlay} aria-hidden="true" />

                {/* Badge — top right */}
                <div className={styles.cardBadge}>{project.badge}</div>

                {/* Info — bottom */}
                <div className={styles.cardInfo}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardSubtitle}>{project.subtitle}</p>
                  <span className={styles.cardPrice}>
                    {project.poa ? 'P.O.A.' : project.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA STRIP
      ══════════════════════════════════════════ */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <div className={styles.sectionMeta}>
                <span className={styles.metaLine} />
                <span className={styles.metaLabel}>Start Your Project</span>
              </div>
              <h2 className={styles.ctaHeading}>Ready to Transform Your Space?</h2>
              <p className={styles.ctaDesc}>
                Our team is ready to bring your vision to life with premium stone craftsmanship
                and unmatched installation expertise.
              </p>
            </div>
            <Link to="/contact" className={styles.ctaButton}>
              Get In Touch <ArrowUpRight strokeWidth={0.75} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;

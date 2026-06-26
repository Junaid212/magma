import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap, ScrollTrigger } from '../../utils/gsapConfig';
import Footer from '../../components/Footer/Footer';
import styles from './About.module.scss';

// ─── Data ───────────────────────────────────────────────────

const coreValues = [
  {
    id: 1,
    title: 'Precision Craftsmanship',
    desc: 'Every cut, finish, and joint is executed with absolute precision — no detail is too small.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Natural Excellence',
    desc: 'We source only the finest natural stone, celebrating the unique character of every slab.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="#FF481F" strokeWidth="1.5"/>
        <path d="M2 12H22M12 2C9.33333 6 8 9 8 12C8 15 9.33333 18 12 22C14.6667 18 16 15 16 12C16 9 14.6667 6 12 2Z"
          stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Client-First Approach',
    desc: 'Every project begins with listening. Your vision drives every decision we make.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
          stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
          stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
          stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Timeless Design',
    desc: 'We create spaces that endure — aesthetically and structurally — for generations to come.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#FF481F" strokeWidth="1.5"/>
        <polyline points="12,6 12,12 16,14" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

// ─── Component ───────────────────────────────────────────────

const About = () => {
  const heroRef        = useRef(null);
  const heroInnerRef   = useRef(null);
  const aboutRef       = useRef(null);
  const imageRef       = useRef(null);
  const textRef        = useRef(null);
  const statsRef       = useRef(null);
  const valuesStripRef = useRef(null);
  const missionRef     = useRef(null);
  const mvHeaderRef    = useRef(null);
  const mvCardsRef     = useRef([]);
  const coreCardsRef   = useRef([]);
  const teamRef        = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Hero: content slides up on mount
      gsap.fromTo(
        heroInnerRef.current?.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.3,
        }
      );

      // ── About: image reveals
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -60, scale: 0.96 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // ── About: text children stagger
      const textChildren = textRef.current?.children;
      if (textChildren) {
        gsap.fromTo(
          textChildren,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // ── Stats row
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current?.querySelectorAll(`.${styles.statItem}`),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // ── Values strip items
      if (valuesStripRef.current) {
        gsap.fromTo(
          valuesStripRef.current?.querySelectorAll(`.${styles.valueItem}`),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: valuesStripRef.current,
              start: 'top 75%',
            },
          }
        );
      }

      // ── Mission/Vision header
      if (mvHeaderRef.current) {
        gsap.fromTo(
          mvHeaderRef.current?.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: mvHeaderRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // ── M&V cards
      const mvCards = mvCardsRef.current.filter(Boolean);
      gsap.fromTo(
        mvCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: missionRef.current?.querySelector(`.${styles.mvGrid}`),
            start: 'top 75%',
          },
        }
      );

      // ── Core value cards
      const cCards = coreCardsRef.current.filter(Boolean);
      gsap.fromTo(
        cCards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: missionRef.current?.querySelector(`.${styles.valuesCards}`),
            start: 'top 80%',
          },
        }
      );

      // ── Team strip
      if (teamRef.current) {
        gsap.fromTo(
          teamRef.current?.querySelector(`.${styles.teamStripInner}`)?.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: teamRef.current,
              start: 'top 80%',
            },
          }
        );
      }

    });

    return () => ctx.revert();
  }, []);

  return (
    <div>

      {/* ══════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════ */}
      <section className={styles.heroSection} ref={heroRef}>
        {/* Background image */}
        <div className={styles.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1800&q=85"
            alt="Luxury marble interior"
          />
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className="container">
          <div className={styles.heroInner} ref={heroInnerRef}>
            {/* Breadcrumb */}
            <div className={styles.heroBreadcrumb}>
              <span>Home</span>
              <span className={styles.sep}>/</span>
              <span className={styles.active}>About Us</span>
            </div>

            {/* <p className={styles.heroLabel}>Our Story</p> */}
            <h1 className={styles.heroTitle}>
              About MAGMA
            </h1>
            {/* <p className={styles.heroSubtitle}>
              A heritage of excellence in natural stone — from quarry to installation,
              we bring precision, beauty, and permanence to every space we touch.
            </p> */}
          </div>
        </div>

        {/* Scroll cue */}
        {/* <div className={styles.heroScroll} aria-hidden="true">
          <div className={styles.scrollLine} />
          <span>Scroll</span>
        </div> */}
      </section>

      {/* ══════════════════════════════════════════
          WHO WE ARE — About Section
      ══════════════════════════════════════════ */}
      <section className={styles.aboutSection} ref={aboutRef}>
        {/* Decorative SVG lines — same as home */}
        <div className={styles.decorLines} aria-hidden="true">
          <svg viewBox="0 0 1440 650" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              d="M1430 10 C 1200 60, 950 80, 780 160 C 620 240, 560 350, 480 420 C 400 490, 300 500, 100 540"
              stroke="#FF481F" strokeWidth="1.5" fill="none" opacity="0.35"
            />
            <path
              d="M 510 460 C 490 510, 545 560, 595 545 C 645 530, 620 590, 575 610"
              stroke="#FF481F" strokeWidth="1.5" fill="none" opacity="0.35"
            />
          </svg>
        </div>

        <div className="container">
          <div className={styles.aboutInner}>

            {/* ── Left: Image ── */}
            <div className={styles.aboutImageSide} ref={imageRef}>
              <div className={styles.mainImageWrap}>
                <img
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&q=85"
                  alt="Master craftsman working with marble"
                />
              </div>
              {/* Floating card */}
              <div className={styles.floatingCard}>
                <span className={styles.floatNumber}>15<em style={{fontSize:'28px', fontWeight:400}}>+</em></span>
                <span className={styles.floatLabel}>Years of<br/>Excellence</span>
              </div>
            </div>

            {/* ── Right: Text ── */}
            <div className={styles.aboutTextSide} ref={textRef}>
              <div className={styles.sectionMeta}>
                <span className={styles.metaLine} />
                <span className={styles.metaLabel}>Who We Are</span>
              </div>

              <h2 className={styles.aboutHeading}>
                Transforming Natural Stone Into Living Masterpieces
              </h2>

              <p className={styles.aboutLead}>
                Founded on a deep reverence for natural materials, Magma Stone has been
                crafting bespoke marble and stone solutions for residential and commercial
                spaces since 2009.
              </p>

              <p className={styles.aboutBody}>
                Every project we undertake is treated as a work of art. Our team of skilled
                artisans and designers collaborate closely with clients to deliver surfaces
                that are not only visually stunning but built to endure for generations.
                From Italian Carrara to rare Onyx, we source the world's finest stone and
                shape it with uncompromising precision.
              </p>

              {/* Stats */}
              <div className={styles.statsRow} ref={statsRef}>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>850<em>+</em></span>
                  <span className={styles.statText}>Projects Completed</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>40<em>+</em></span>
                  <span className={styles.statText}>Stone Varieties</span>
                </div>
              </div>

              <Link to="/contact" className={styles.aboutCta}>
                Work With Us ↗
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DARK VALUES STRIP
      ══════════════════════════════════════════ */}
      <div className={styles.valuesStrip} ref={valuesStripRef}>
        <div className="container">
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 17L12 22L22 17" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12L12 17L22 12" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span className={styles.valueBig}>850<em>+</em></span>
              <span className={styles.valueTitle}>Projects Delivered</span>
              <p className={styles.valueDesc}>From intimate bathrooms to grand hotel lobbies — every project exceeds expectations.</p>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#FF481F" strokeWidth="1.5"/><path d="M12 8V12L15 15" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <span className={styles.valueBig}>15<em>+</em></span>
              <span className={styles.valueTitle}>Years of Experience</span>
              <p className={styles.valueDesc}>A decade and a half of mastering stone — our expertise runs as deep as the quarry.</p>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none"><path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="#FF481F" strokeWidth="1.5"/><path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/><path d="M16 3.13C17.7699 3.58317 19.0078 5.17822 19.0078 7.005C19.0078 8.83178 17.7699 10.4268 16 10.88" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <span className={styles.valueBig}>200<em>+</em></span>
              <span className={styles.valueTitle}>Happy Clients</span>
              <p className={styles.valueDesc}>Trust built one polished surface at a time — our clients return, and they refer.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MISSION & VISION
      ══════════════════════════════════════════ */}
      <section className={styles.missionSection} ref={missionRef}>
        <div className="container">

          {/* Header */}
          <div className={styles.mvHeader} ref={mvHeaderRef}>
            <p className={styles.mvLabel}>Purpose & Direction</p>
            {/* <h2 className={styles.mvTitle}>Mission & Vision</h2>
            <p className={styles.mvSubtitle}>
              Two pillars that guide every decision, every design, and every stone we lay.
            </p> */}
          </div>

          {/* Mission + Vision cards */}
          <div className={styles.mvGrid}>
            {/* Mission */}
            <div
              className={styles.mvCard}
              ref={(el) => (mvCardsRef.current[0] = el)}
            >
              <div className={styles.mvCardBg}>
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85"
                  alt="Mission — precision stone craftsmanship"
                />
              </div>
              <div className={styles.mvCardContent}>
                <div className={styles.mvCardTag}>
                  <span className={styles.mvTagDot} />
                  <span className={styles.mvTagText}>Our Mission</span>
                </div>
                <h3 className={styles.mvCardTitle}>
                  To Elevate Every Space With Natural Beauty
                </h3>
                <p className={styles.mvCardBody}>
                  Our mission is to deliver stone solutions of exceptional quality that
                  transform environments into timeless experiences — serving clients with
                  integrity, precision, and unmatched craftsmanship.
                </p>
                <ul className={styles.mvCardPoints}>
                  <li>Source the world's finest natural stone</li>
                  <li>Deliver precision-crafted bespoke solutions</li>
                  <li>Build lasting relationships through trust</li>
                  <li>Exceed client expectations on every project</li>
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div
              className={styles.mvCard}
              ref={(el) => (mvCardsRef.current[1] = el)}
            >
              <div className={styles.mvCardBg}>
                <img
                  src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=900&q=85"
                  alt="Vision — future of stone design"
                />
              </div>
              <div className={styles.mvCardContent}>
                <div className={styles.mvCardTag}>
                  <span className={styles.mvTagDot} />
                  <span className={styles.mvTagText}>Our Vision</span>
                </div>
                <h3 className={styles.mvCardTitle}>
                  To Be The Global Standard In Stone Excellence
                </h3>
                <p className={styles.mvCardBody}>
                  We envision a world where the art of stone craftsmanship is celebrated
                  as a living heritage — a future where every home and commercial space
                  carries the fingerprint of nature's finest materials.
                </p>
                <ul className={styles.mvCardPoints}>
                  <li>Pioneer sustainable sourcing practices</li>
                  <li>Redefine luxury through natural materials</li>
                  <li>Inspire the next generation of craftsmen</li>
                  <li>Become the benchmark of global stone design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core Values cards */}
          <div className={styles.valuesCards}>
            {coreValues.map((v, i) => (
              <div
                key={v.id}
                className={styles.valueCard}
                ref={(el) => (coreCardsRef.current[i] = el)}
              >
                <div className={styles.valueCardIcon}>{v.icon}</div>
                <h4 className={styles.valueCardTitle}>{v.title}</h4>
                <p className={styles.valueCardDesc}>{v.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          TEAM TEASER STRIP
      ══════════════════════════════════════════ */}
      <section className={styles.teamStrip} ref={teamRef}>
        <div className="container">
          <div className={styles.teamStripInner}>
            <div className={styles.teamTextBlock}>
              <div className={styles.sectionMeta}>
                <span className={styles.metaLine} />
                <span className={styles.metaLabel}>Our People</span>
              </div>
              <h2 className={styles.teamHeading}>
                The Artisans Behind Every Surface
              </h2>
              <p className={styles.teamDesc}>
                Our team of master craftsmen, stone specialists, and design consultants
                bring decades of collective expertise to every project. We are stone lovers
                first, and professionals second.
              </p>
            </div>
            <Link to="/contact" className={styles.teamCta}>
              Get In Touch ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <Footer />
    </div>
  );
};

export default About;

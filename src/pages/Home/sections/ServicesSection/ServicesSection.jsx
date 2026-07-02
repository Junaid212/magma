import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap, ScrollTrigger } from '../../../../utils/gsapConfig';
import styles from './ServicesSection.module.scss';
import serviceImg from '../../../../assets/images/img/10.webp';
import serviceImg2 from '../../../../assets/images/img/11.webp';
import serviceImg3 from '../../../../assets/images/img/12.webp';
import serviceImg4 from '../../../../assets/images/img/13.webp';
import stoneImg from '../../../../assets/images/img/stone.png';
import { ArrowUpRight } from 'lucide-react';


const services = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21M3 7L12 2L21 7M5 21V7M19 21V7M9 21V14H15V21" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Supply',
    image: serviceImg,
    tags: 'Planning, 3D Visuallization, Landscape Design, Structural Drawing, CGI, Construction Supervision',
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 20H22M4 20V9L12 4L20 9V20M10 20V15H14V20M6 12H8M6 16H8M16 12H18M16 16H18" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="9" r="2" stroke="#FF481F" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Manufacturing ( cutting and polishing )',
    image: serviceImg2,
    tags: 'Interior Design, Exterior Design, Rennovation, Sustainable Design, Installation, Plumbing System, 3D Experience',
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 9V19C20 20.1 19.1 21 18 21H6C4.9 21 4 20.1 4 19V9M1 9H23M8 9V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V9" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 13V17M9 15H15" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Installation',
    image: serviceImg3,
    tags: 'Bespoke Furniture, Material Supply, Online Store, Distribute, 3D Modeling',
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Maintenance',
    image: serviceImg4,
    tags: 'Project Analysis, Bid Documentation, Construction Supervisor',
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);
  const col4Ref = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
          },
        }
      );

      // Columns stagger in
      const oddCols = [col1Ref.current, col3Ref.current];
      const evenCols = [col2Ref.current, col4Ref.current];

      gsap.fromTo(
        oddCols,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        evenCols,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // CTA button
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.servicesSection} ref={sectionRef}>
      <div className="container">
        {/* Section Heading */}
        <div className={styles.sectionHeader} ref={headingRef}>
          <p className={styles.sectionLabel}>OUR SERVICES</p>
        </div>

        {/* Services Grid — 4 columns with vertical stagger on columns 2 & 4 */}
        <div className={styles.servicesGrid}>
          {/* Column 1 — top-aligned */}
          <div className={`${styles.serviceCol} ${styles.colOdd}`} ref={col1Ref}>
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>{services[0].icon}</div>
              <h3 className={styles.cardTitle}>{services[0].title}</h3>
              <div className={styles.cardImage}>
                <img src={services[0].image} alt={services[0].title} />
              </div>
              <p className={styles.cardTags}>{services[0].tags}</p>
              <button className={styles.cardArrow} aria-label="Learn more"><ArrowUpRight strokeWidth={0.75} /></button>
            </div>
          </div>

          {/* Column 2 — offset down */}
          <div className={`${styles.serviceCol} ${styles.colEven}`} ref={col2Ref}>
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>{services[1].icon}</div>
              <h3 className={styles.cardTitle}>{services[1].title}</h3>
              <div className={styles.cardImage}>
                <img src={services[1].image} alt={services[1].title} />
              </div>
              <p className={styles.cardTags}>{services[1].tags}</p>
              <button className={styles.cardArrow} aria-label="Learn more"><ArrowUpRight strokeWidth={0.75} /></button>
            </div>
          </div>

          {/* Column 3 — top-aligned */}
          <div className={`${styles.serviceCol} ${styles.colOdd}`} ref={col3Ref}>
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>{services[2].icon}</div>
              <h3 className={styles.cardTitle}>{services[2].title}</h3>
              <div className={styles.cardImage}>
                <img src={services[2].image} alt={services[2].title} />
              </div>
              <p className={styles.cardTags}>{services[2].tags}</p>
              <button className={styles.cardArrow} aria-label="Learn more"><ArrowUpRight strokeWidth={0.75} /></button>
            </div>
          </div>

          {/* Column 4 — offset down */}
          <div className={`${styles.serviceCol} ${styles.colEven}`} ref={col4Ref}>
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>{services[3].icon}</div>
              <h3 className={styles.cardTitle}>{services[3].title}</h3>
              <div className={styles.cardImage}>
                <img src={services[3].image} alt={services[3].title} />
              </div>
              <p className={styles.cardTags}>{services[3].tags}</p>
              <button className={styles.cardArrow} aria-label="Learn more"><ArrowUpRight strokeWidth={0.75} /></button>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        {/* <div className={styles.ctaWrap} ref={ctaRef}>
          <Link to="/contact" className={styles.quotaBtn}>
            Get A Free Quote Now 
          </Link>
        </div> */}
      </div>

      {/* Decorative building image at bottom */}
      <div className={styles.bottomBuilding}>
        <img
          src={stoneImg}
          alt="Architecture building"
        />
      </div>
    </section>
  );
};

export default ServicesSection;

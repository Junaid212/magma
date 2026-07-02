import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap, ScrollTrigger } from '../../../../utils/gsapConfig';
import styles from './AboutSection.module.scss';
import aboutImg from '../../../../assets/images/img/3.webp';
import { ArrowUpRight, MoveUpRight } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const statRef = useRef(null);
  const linesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 40, rotate: -15 },
        {
          opacity: 1,
          y: 0,
          rotate: -8,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // SVG lines reveal
      if (linesRef.current) {
        const paths = linesRef.current.querySelectorAll('path');
        paths.forEach((path) => {
          const length = path.getTotalLength ? path.getTotalLength() : 1000;
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 2,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          });
        });
      }

      // Stats reveal
      gsap.fromTo(
        statRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Text content reveal
      const textChildren = textRef.current?.children;
      if (textChildren) {
        gsap.fromTo(
          textChildren,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.aboutSection} ref={sectionRef}>
      {/* Red decorative SVG lines */}
      <div className={styles.decorLines} ref={linesRef}>
        <svg
          viewBox="0 0 1440 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Main sweeping arc from top right, through image center to bottom left */}
          <path
            d="M1430 10 C 1200 60, 950 80, 780 160 C 620 240, 560 350, 480 420 C 400 490, 300 500, 100 540"
            stroke="#FF481F"
            strokeWidth="1.8"
            fill="none"
          />
          {/* Small loop/oval near the bottom of the image */}
          <path
            d="M 510 460 C 490 510, 545 560, 595 545 C 645 530, 620 590, 575 610"
            stroke="#FF481F"
            strokeWidth="1.8"
            fill="none"
          />
        </svg>
      </div>

      {/* Rotated vertical contact info on right */}
      {/* <div className={styles.sideContact}>
        <span>HELLO@ARCHINSTUDIO.CO</span>
        <span>(054) 3256 78 87</span>
      </div> */}

      <div className="container">
        <div className={styles.innerWrap}>
          {/* Left: Stats */}
          <div className={styles.leftCol}>
            <div className={styles.statBlock} ref={statRef}>
              <p className={styles.statLabel}>
                YEARS OF<br />EXPERIENCE
              </p>
              <span className={styles.statNumber}>15</span>
            </div>
          </div>

          {/* Center: Tilted Image */}
          <div className={styles.centerCol}>
            <div className={styles.imageWrap} ref={imageRef}>
              <img
                src={aboutImg}
                alt="Modern architectural building"
                className={styles.aboutImage}
              />
            </div>
          </div>

          {/* Right: Text content */}
          <div className={styles.rightCol} ref={textRef}>
            <h2 className={styles.estTitle}>Est. 1986</h2>
            <p className={styles.desc}>
              Archin Studio is an archiectural practice based in
              Boston. We cut ourteeth on designing and
              creating buildings that are both beautiful and
              sustainable.
            </p>
            <Link to="/about" className={styles.studioBtn}>
              Our Studio <ArrowUpRight strokeWidth={0.75} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

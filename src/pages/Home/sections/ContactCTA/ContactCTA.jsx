import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../../../../utils/gsapConfig';
import styles from './ContactCTA.module.scss';

const ContactCTA = () => {
  const sectionRef = useRef(null);
  const emailRef = useRef(null);
  const textRef = useRef(null);
  const decorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Email text reveal
      gsap.fromTo(
        emailRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      // SVG decor line draw
      if (decorRef.current) {
        const path = decorRef.current.querySelector('path');
        if (path) {
          const length = path.getTotalLength?.() || 500;
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 2.5,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            },
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.contactCTA} ref={sectionRef}>
      <div className="container">
        <a href="mailto:hello@archin.co" className={styles.emailLink} ref={emailRef}>
          hello@archin.co
        </a>
        <p className={styles.subtitle} ref={textRef}>
          Let us help your dream<br />become reality
        </p>
      </div>

      {/* Decorative red line SVG */}
      <div className={styles.decorSvg} ref={decorRef}>
        <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M550 80 C 450 100, 380 160, 320 220 C 260 280, 240 340, 270 380 C 290 410, 320 400, 300 360 C 280 330, 240 330, 220 360 C 200 390, 210 420, 250 440"
            stroke="#FF481F"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
};

export default ContactCTA;

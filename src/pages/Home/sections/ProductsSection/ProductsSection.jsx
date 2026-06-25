import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../../../../utils/gsapConfig';
import styles from './ProductsSection.module.scss';

const products = [
  {
    id: 1,
    name: 'Onyx\n& Stones',
    image: 'https://images.unsplash.com/photo-1565034946487-077786996e27?w=500&q=85',
  },
  {
    id: 2,
    name: 'Marbles',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=85',
  },
  {
    id: 3,
    name: 'Mosaics',
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500&q=85',
  },
  {
    id: 4,
    name: 'Furnishing',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=85',
  },
  {
    id: 5,
    name: 'Finitures',
    image: 'https://images.unsplash.com/photo-1628566638003-8ccd6fce6869?w=500&q=85',
  },
];

const ProductsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const tilesRef = useRef([]);
  const dividerRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label fades in
      gsap.fromTo(
        labelRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: labelRef.current, start: 'top 85%' },
        }
      );

      // Heading lines stagger in
      const lines = headingRef.current?.querySelectorAll('span');
      if (lines) {
        gsap.fromTo(
          lines,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
          }
        );
      }

      // Divider draws in
      const line = dividerRef.current?.querySelector(`.${styles.dividerLine}`);
      if (line) {
        gsap.fromTo(
          line,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            transformOrigin: 'left center',
            scrollTrigger: { trigger: dividerRef.current, start: 'top 85%' },
          }
        );
      }

      // Tiles stagger in from bottom
      gsap.fromTo(
        tilesRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.productsSection} ref={sectionRef}>
      <div className={styles.inner}>

        {/* Small label */}
        <p className={styles.sectionLabel} ref={labelRef}>PRODUCTS</p>

        {/* Giant display heading */}
        <h2 className={styles.displayHeading} ref={headingRef}>
          <span className={styles.line1}>Nature Paints</span>
          <span className={styles.line2}>The Best</span>
          <span className={styles.line3}>Masterpieces For Us</span>
        </h2>

        {/* Gold divider — line + ELITE STONE */}
        <div className={styles.divider} ref={dividerRef}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerText}>ELITE STONE</span>
        </div>

        {/* 5 diamond product tiles */}
        <div className={styles.tilesRow}>
          {products.map((product, i) => (
            <div
              key={product.id}
              className={styles.tileItem}
              ref={(el) => (tilesRef.current[i] = el)}
            >
              <div className={styles.diamond}>
                <img
                  src={product.image}
                  alt={product.name.replace('\n', ' ')}
                  className={styles.diamondImg}
                  loading="lazy"
                />
              </div>
              <p className={styles.tileName}>
                {product.name.split('\n').map((line, j, arr) => (
                  <React.Fragment key={j}>
                    {line}
                    {j < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;

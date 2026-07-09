import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../../../../utils/gsapConfig';
import styles from './ScrollRevealLine.module.scss';

/**
 * ScrollRevealLine
 * ─────────────────
 * An SVG path that draws itself as the user scrolls.
 * Mount it inside a `position: relative` wrapper that spans
 * the sections you want it to cross.  The SVG fills 100% of
 * that wrapper's height so the path naturally runs through all
 * of the enclosed sections.
 */
const ScrollRevealLine = () => {
  const svgRef  = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    // Measure the path length so we can set dasharray/offset
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray:  length,
      strokeDashoffset: length,   // fully hidden at start
    });

    // Scrub: 0 scroll → fully hidden, 100% scroll → fully drawn
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: svgRef.current.parentElement, // the wrapper div in Home.jsx
        start:   'top 80%',                    // begin when wrapper top hits 80% vp
        end:     'bottom 20%',                 // finish when wrapper bottom hits 20% vp
        scrub:   1.2,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => {
      // Only kill the one we own — check by trigger element
      if (t.trigger === svgRef.current?.parentElement) t.kill();
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      className={styles.svg}
      viewBox="0 0 200 1000"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/*
        A flowing S-curve that sweeps across the page width as it
        travels from top to bottom. Adjust the control-point X values
        to taste — currently swings left-to-right-to-left.
      */}
      <path
        ref={pathRef}
        d="
          M 160 0
          C 160 80,  40 120,  40 200
          C  40 300, 160 350, 160 450
          C 160 550,  40 600,  40 700
          C  40 800, 160 850, 160 950
          L 160 1000
        "
        stroke="#FF481F"
        strokeWidth="0.3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ScrollRevealLine;

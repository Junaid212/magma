import React, { useEffect, useRef } from 'react';
import { gsap } from '../../utils/gsapConfig';

const Loader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;

    if (!container || !path) return;

    // Initial curve: curved bottom edge
    const initialPath = 'M0 0 L100 0 L100 100 Q50 100 0 100 Z';
    
    // Mid curve: flat/pulled upward control point
    const targetPath = 'M0 0 L100 0 L100 100 Q50 0 0 100 Z';
    
    // Final flat path: fully retracted
    const finalPath = 'M0 0 L100 0 L100 0 Q50 0 0 0 Z';

    const tl = gsap.timeline({
      delay: 1.5, // Allow loading animation text to display
      onComplete: () => {
        if (onComplete) onComplete();
        // Hide loader completely from layout interaction
        gsap.set(container, { display: 'none' });
      }
    });

    // Morph the SVG path to pull the curve upward
    tl.to(path, {
      attr: { d: targetPath },
      duration: 0.8,
      ease: 'power2.in'
    })
    // Flatten out the svg path to the top of screen
    .to(path, {
      attr: { d: finalPath },
      duration: 0.4,
      ease: 'power2.out'
    }, '-=0.1')
    // Slide container off the viewport
    .to(container, {
      yPercent: -100,
      duration: 1,
      ease: 'power4.inOut'
    }, '-=0.4');

  }, [onComplete]);

  return (
    <div ref={containerRef} className="loader-wrap">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          ref={pathRef}
          d="M0 0 L100 0 L100 100 Q50 100 0 100 Z"
        />
      </svg>
      <div className="loader-wrap-heading">
        <div className="load-text">
          <span>m</span>
          <span>a</span>
          <span>g</span>
          <span>m</span>
          <span>a</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;

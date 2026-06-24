import React, { useEffect, useRef } from 'react';
import { gsap } from '../../utils/gsapConfig';

const Cursor = () => {
  const cursorInnerRef = useRef(null);
  const cursorOuterRef = useRef(null);

  useEffect(() => {
    const inner = cursorInnerRef.current;
    const outer = cursorOuterRef.current;

    if (!inner || !outer) return;

    // Set initial position out of screen
    gsap.set([inner, outer], { xPercent: -50, yPercent: -50, x: -100, y: -100, visibility: 'visible' });

    // Use GSAP quickTo for ultra-smooth movement tracking
    const xInnerTo = gsap.quickTo(inner, 'x', { duration: 0.1, ease: 'power3.out' });
    const yInnerTo = gsap.quickTo(inner, 'y', { duration: 0.1, ease: 'power3.out' });
    
    const xOuterTo = gsap.quickTo(outer, 'x', { duration: 0.4, ease: 'power3.out' });
    const yOuterTo = gsap.quickTo(outer, 'y', { duration: 0.4, ease: 'power3.out' });

    const onMouseMove = (e) => {
      xInnerTo(e.clientX);
      yInnerTo(e.clientY);
      xOuterTo(e.clientX);
      yOuterTo(e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);

    // Hover elements selectors
    const handleMouseOver = () => {
      inner.classList.add('cursor-hover');
      outer.classList.add('cursor-hover');
    };

    const handleMouseLeave = () => {
      inner.classList.remove('cursor-hover');
      outer.classList.remove('cursor-hover');
    };

    const addHoverListeners = () => {
      const hoverables = document.querySelectorAll('a, button, .interactive, .swiper-button-next, .swiper-button-prev');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseOver);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Initial attach
    addHoverListeners();

    // Create a MutationObserver to watch for dynamic DOM updates (e.g. page changes, loaded contents)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      
      const hoverables = document.querySelectorAll('a, button, .interactive');
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseOver);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorInnerRef} className="mouse-cursor cursor-inner" />
      <div ref={cursorOuterRef} className="mouse-cursor cursor-outer" />
    </>
  );
};

export default Cursor;

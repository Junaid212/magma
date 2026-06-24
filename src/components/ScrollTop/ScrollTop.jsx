import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    // If lenis smooth scroll is active, it intercepts standard window scroll,
    // but window.scrollTo works with lenis or we can use native options.
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`to_top ${isVisible ? 'show' : ''}`}
      aria-label="Scroll back to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollTop;

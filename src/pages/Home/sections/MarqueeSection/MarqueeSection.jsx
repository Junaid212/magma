import React, { useRef, useEffect } from 'react';
import { gsap } from '../../../../utils/gsapConfig';
import styles from './MarqueeSection.module.scss';

const MarqueeSection = () => {
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);

  useEffect(() => {
    const marqueeAnimation = (el, direction = 1) => {
      if (!el) return null;
      const duration = 25;
      const xPercent = direction === 1 ? -50 : 50;
      const anim = gsap.fromTo(
        el,
        { xPercent: direction === 1 ? 0 : -50 },
        {
          xPercent,
          duration,
          ease: 'none',
          repeat: -1,
        }
      );
      return anim;
    };

    const anim1 = marqueeAnimation(track1Ref.current, 1);
    const anim2 = marqueeAnimation(track2Ref.current, -1);

    return () => {
      anim1?.kill();
      anim2?.kill();
    };
  }, []);

  const words = ['Creative', 'Flexiable', 'Dedicated', 'Innovative', 'Creative', 'Flexiable', 'Dedicated', 'Innovative'];

  return (
    <div className={styles.marqueeSection}>
      {/* Row 1 - scrolls left */}
      <div className={styles.marqueeRow}>
        <div className={styles.marqueeTrack} ref={track1Ref}>
          {[...words, ...words].map((word, i) => (
            <span key={i} className={styles.marqueeWord}>
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;

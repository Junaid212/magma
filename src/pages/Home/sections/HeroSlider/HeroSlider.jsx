import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import { gsap, ScrollTrigger } from '../../../../utils/gsapConfig';
import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './HeroSlider.module.scss';
import img1 from '../../../../assets/images/img/1.webp';
import img2 from '../../../../assets/images/img/2.webp';
import { LuMoveUpRight } from 'react-icons/lu';
import { MoveUpRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    bg: img1,
    title: 'magma',
    subtitle: 'Architecture Design Studio',
  },
  {
    id: 2,
    bg: img2,
    title: 'magma',
    subtitle: 'Architecture Language Signature',
  },
  // {
  //   id: 3,
  //   bg: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80',
  //   title: 'time',
  //   subtitle: 'Sustainable Material Resource',
  // },
];

const HeroSlider = () => {
  const sectionRef = useRef(null);
  const counterRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation timeline
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        counterRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' },
          '-=0.7'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.5)' },
          '-=0.4'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSlideChange = (swiper) => {
    const counterEl = counterRef.current;
    const currentEl = counterEl?.querySelector('.current');
    if (currentEl) {
      gsap.fromTo(
        currentEl,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    }

    // Animate title and subtitle on slide change
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 }
    );
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.25 }
    );
  };

  return (
    <section className={styles.heroSection} ref={sectionRef}>
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        className={styles.swiperMain}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div
                className={`${styles.slide} ${isActive ? styles.active : ''}`}
                style={{ backgroundImage: `url(${slide.bg})` }}
              >
                <div className={styles.slideOverlay} />
                <div className={styles.slideContent}>
                  {/* Slide counter (left side) */}
                  <div className={styles.slideCounter} ref={counterRef}>
                    <span className={`${styles.current} current`}>{slide.id}</span>
                    <span className={styles.sep}>/</span>
                    <span className={styles.total}>{slides.length}</span>
                  </div>

                  {/* Center content - title + subtitle */}
                  <div className={styles.centerContent}>
                    <h1 className={styles.slideTitle} ref={titleRef}>
                      {slide.title}
                    </h1>
                    <p className={styles.slideSubtitle} ref={subtitleRef}>
                      {slide.subtitle}
                    </p>
                  </div>

                  {/* Right content - description + CTA */}
                  <div className={styles.rightContent}>
                    <p className={styles.slideDesc} ref={descRef}>
                      We collaborate with clients to create buildings and environments in
                      dialogue with culture and place. And become one of the country's leading
                      architectural practices
                    </p>
                    <Link
                      to="/blog"
                      className={styles.ctaBtn}
                      ref={ctaRef}
                    >
                      Our Services <MoveUpRight strokeWidth={0.75} />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className={styles.navArrows}>
        <button
          className={styles.prevBtn}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className={styles.nextBtn}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      {/* Bottom rounded edge */}
      <div className={styles.bottomCurve} />
    </section>
  );
};

export default HeroSlider;

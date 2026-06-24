import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { gsap, ScrollTrigger } from '../../../../utils/gsapConfig';
import styles from './TestimonialsSection.module.scss';

const testimonials = [
  {
    id: 1,
    quote:
      '"The entire team tactfully delivered a project of exceptional quality while staying on schedule and under budget. More than what I\'m expected. I\'m really satisfied and recommended!."',
    name: 'M. Salah',
    role: 'Dash Private Villa Project Investor',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    quote:
      '"Working with Archin Studio was an absolute pleasure. Their attention to detail and innovative approach transformed our space beyond our expectations."',
    name: 'Sarah Chen',
    role: 'Commercial Client, Boston',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    id: 3,
    quote:
      '"A truly professional team that listens carefully to your vision and delivers outstanding results. Our home renovation was completed on time and within budget."',
    name: 'James Wilson',
    role: 'Residential Client, Melbourne',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const quoteIconRef = useRef(null);
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        quoteIconRef.current,
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.testimonialsSection} ref={sectionRef}>
      <div className="container">
        <div className={styles.innerLayout}>
          {/* Left: Label + Quote Icon */}
          <div className={styles.leftCol} ref={labelRef}>
            <p className={styles.sectionLabel}>
              WHAT CLIENTS SAY<br />ABOUT US
            </p>
            <div className={styles.quoteIcon} ref={quoteIconRef}>
              <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="55" fontSize="80" fontFamily="serif" fill="none" stroke="#FF481F" strokeWidth="2">
                  "
                </text>
                <text x="42" y="55" fontSize="80" fontFamily="serif" fill="none" stroke="#FF481F" strokeWidth="2">
                  "
                </text>
              </svg>
            </div>
          </div>

          {/* Right: Testimonial Swiper */}
          <div className={styles.rightCol}>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              loop={false}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
              className={styles.testimonialSwiper}
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id}>
                  <blockquote className={styles.quoteText}>{t.quote}</blockquote>

                  <hr className={styles.divider} />

                  <div className={styles.clientRow}>
                    <div className={styles.clientInfo}>
                      <img src={t.avatar} alt={t.name} className={styles.avatar} />
                      <div>
                        <p className={styles.clientName}>{t.name}</p>
                        <p className={styles.clientRole}>{t.role}</p>
                      </div>
                    </div>

                    {/* Navigation controls */}
                    <div className={styles.navControls}>
                      <button
                        className={styles.prevBtn}
                        onClick={() => swiperRef.current?.slidePrev()}
                        aria-label="Previous testimonial"
                      >
                        ‹
                      </button>
                      <span className={styles.counter}>
                        {currentSlide} / {testimonials.length}
                      </span>
                      <button
                        className={styles.nextBtn}
                        onClick={() => swiperRef.current?.slideNext()}
                        aria-label="Next testimonial"
                      >
                        ›
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Decorative red line SVG */}
      <div className={styles.decorLeft}>
        <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M150 20 C 80 60, 30 120, 60 200 C 80 260, 40 310, 60 370"
            stroke="#FF481F"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M60 200 C 30 220, 20 260, 50 280"
            stroke="#FF481F"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
};

export default TestimonialsSection;

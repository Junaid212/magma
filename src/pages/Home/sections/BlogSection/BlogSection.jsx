import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { gsap, ScrollTrigger } from '../../../../utils/gsapConfig';
import styles from './BlogSection.module.scss';

const posts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
    date: '25',
    month: 'DECEMBER',
    year: '2023',
    title: 'How to handle the day light in Vray for best reality',
    categories: ['Architecture', 'Guide'],
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1507149833265-60c372daea22?w=700&q=80',
    date: '16',
    month: 'DECEMBER',
    year: '2023',
    title: 'Top 10 Wooden Architecture Building 2023',
    categories: ['Inspiration'],
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80',
    date: '08',
    month: 'NOVEMBER',
    year: '2023',
    title: 'Understanding Sustainable Architecture Principles',
    categories: ['Architecture', 'Guide'],
  },
];

const BlogSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.blogSection} ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className={styles.sectionHeader} ref={headingRef}>
          <h2 className={styles.sectionTitle}>Latest Posts</h2>
          <Link to="/blog" className={styles.allBtn}>
            All Articles ↗
          </Link>
        </div>
      </div>

      {/* Blog Swiper - full width with side navigation */}
      <div className={styles.swiperWrap}>
        {/* Prev arrow */}
        <button
          className={`${styles.navArrow} ${styles.prev}`}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous post"
        >
          ‹
        </button>

        <Swiper
          modules={[Navigation]}
          slidesPerView={2}
          spaceBetween={24}
          loop={false}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className={styles.blogSwiper}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 24 },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className={styles.postCard}>
                {/* Image */}
                <div className={styles.cardImageWrap}>
                  <img src={post.image} alt={post.title} />
                </div>

                {/* Date + Info */}
                <div className={styles.cardMeta}>
                  <div className={styles.dateBlock}>
                    <span className={styles.day}>{post.date}</span>
                    <div>
                      <span className={styles.month}>{post.month}</span>
                      <span className={styles.year}>{post.year}</span>
                    </div>
                  </div>
                  <div className={styles.postInfo}>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <div className={styles.catList}>
                      {post.categories.map((cat, i) => (
                        <Link key={i} to="/blog" className={styles.catLink}>
                          {cat}
                          {i < post.categories.length - 1 ? ', ' : ''}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next arrow */}
        <button
          className={`${styles.navArrow} ${styles.next}`}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next post"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default BlogSection;

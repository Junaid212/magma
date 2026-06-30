import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaMagnifyingGlass, FaChevronRight } from 'react-icons/fa6';
import { gsap, ScrollTrigger } from '../../utils/gsapConfig';
import Footer from '../../components/Footer/Footer';
import styles from './Products.module.scss';

// ─── Stone Products Data ─────────────────────────────────────
const stoneProducts = [
  // Category 1: Natural Stones
  {
    id: 'marble',
    name: 'Marble',
    category: 'natural',
    description: 'Elegant polished marble slab',
    details: 'Premium interiors and luxury flooring',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=85',
  },
  {
    id: 'granite',
    name: 'Granite',
    category: 'natural',
    description: 'Natural granite with rich texture',
    details: 'Durable for kitchens and exteriors',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&q=85',
  },
  {
    id: 'quartzite',
    name: 'Quartzite',
    category: 'natural',
    description: 'Exotic quartzite stone',
    details: 'Strong, luxurious natural finish',
    image: 'https://images.unsplash.com/photo-1628566638003-8ccd6fce6869?w=800&q=85',
  },
  {
    id: 'onyx',
    name: 'Onyx',
    category: 'natural',
    description: 'Translucent premium onyx slab',
    details: 'Ideal for feature walls and backlit designs',
    image: 'https://images.unsplash.com/photo-1565034946487-077786996e27?w=800&q=85',
  },
  {
    id: 'basalt',
    name: 'Basalt',
    category: 'natural',
    description: 'Dark volcanic stone',
    details: 'Contemporary architecture and landscaping',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=800&q=85',
  },
  {
    id: 'limestone',
    name: 'Limestone',
    category: 'natural',
    description: 'Soft natural limestone',
    details: 'Warm and timeless appearance',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=85',
  },
  // Category 2: Artificial Stones
  {
    id: 'rak',
    name: 'RAK',
    category: 'artificial',
    description: 'Premium engineered surface',
    details: 'Modern interiors and commercial spaces',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=85',
  },
  {
    id: 'ceramique-slabs',
    name: 'Ceramique Slabs',
    category: 'artificial',
    description: 'Large-format ceramic slabs',
    details: 'Heat, stain, and scratch resistant',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=85',
  },
  {
    id: 'quartz',
    name: 'Quartz',
    category: 'artificial',
    description: 'Engineered quartz surfaces',
    details: 'Perfect for kitchen countertops',
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=85',
  },
  {
    id: 'terrazzo',
    name: 'Terrazzo',
    category: 'artificial',
    description: 'Designer terrazzo slabs',
    details: 'Contemporary decorative flooring and walls',
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=800&q=85',
  },
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'natural', 'artificial'

  // Refs for animations
  const heroRef = useRef(null);
  const heroInnerRef = useRef(null);
  const controlsRef = useRef(null);
  const sectionsContainerRef = useRef(null);
  const ctaSectionRef = useRef(null);

  // Filter products based on search query and category
  const filteredProducts = stoneProducts.filter((product) => {
    const matchesTab = activeTab === 'all' || product.category === activeTab;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.details.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const naturalStones = filteredProducts.filter((p) => p.category === 'natural');
  const artificialStones = filteredProducts.filter((p) => p.category === 'artificial');

  // GSAP animations for initial page load
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero banner contents slide up
      if (heroInnerRef.current) {
        gsap.fromTo(
          heroInnerRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.12,
            ease: 'power3.out',
            delay: 0.2,
          }
        );
      }

      // 2. Search & filter controls slide in
      if (controlsRef.current) {
        gsap.fromTo(
          controlsRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: controlsRef.current,
              start: 'top 90%',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // GSAP scroll trigger animation for the CTA section at the bottom
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (ctaSectionRef.current) {
        gsap.fromTo(
          ctaSectionRef.current.querySelectorAll('.animate-cta'),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaSectionRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // GSAP ScrollTrigger refresh on filter changes
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [searchQuery, activeTab]);

  return (
    <div className={styles.pageWrapper}>
      {/* ══════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════ */}
      <section className={styles.heroSection} ref={heroRef}>
        <div className={styles.heroBg} aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=85"
            alt="Luxury premium stone slab"
          />
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className="container">
          <div className={styles.heroInner} ref={heroInnerRef}>
            {/* Breadcrumb Navigation */}
            <div className={styles.heroBreadcrumb}>
              <Link to="/">Home</Link>
              <span className={styles.sep}><FaChevronRight /></span>
              <span className={styles.active}>Products</span>
            </div>

            <h1 className={styles.heroTitle}>Our Products</h1>
            <p className={styles.heroSubtitle}>
              Explore our premium collection of natural and engineered stones crafted for
              timeless architecture and interior spaces.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEARCH AND FILTER CONTROLS
      ══════════════════════════════════════════ */}
      <section className={styles.filterSection} ref={controlsRef}>
        <div className="container">
          <div className={styles.controlsRow}>
            {/* Search Bar */}
            <div className={styles.searchWrapper}>
              <FaMagnifyingGlass className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search products, materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={styles.clearSearch}
                  aria-label="Clear search query"
                >
                  &times;
                </button>
              )}
            </div>

            {/* Filter Tabs */}
            <div className={styles.tabsWrapper}>
              <button
                className={`${styles.tabBtn} ${activeTab === 'all' ? styles.active : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Stones
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'natural' ? styles.active : ''}`}
                onClick={() => setActiveTab('natural')}
              >
                Natural Stones
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'artificial' ? styles.active : ''}`}
                onClick={() => setActiveTab('artificial')}
              >
                Artificial Stones
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRODUCTS LIST SECTION
      ══════════════════════════════════════════ */}
      <section className={styles.productsSection} ref={sectionsContainerRef}>
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div className={styles.noResults}>
              <h3>No stones match your criteria</h3>
              <p>Try resetting the search query or changing active category filter.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveTab('all');
                }}
                className={styles.resetBtn}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className={styles.categoriesStack}>
              {/* Category 1: Natural Stones */}
              {naturalStones.length > 0 && (
                <div className={styles.categoryBlock}>
                  <div className={styles.categoryHeader}>
                    <h2 className={styles.categoryTitle}>Natural Stones</h2>
                    <div className={styles.categoryDivider}>
                      <span className={styles.dividerLine} />
                      <span className={styles.dividerLabel}>MAGMA NATURAL</span>
                    </div>
                  </div>

                  <div className={styles.productsGrid}>
                    {naturalStones.map((product) => (
                      <div key={product.id} className={styles.productCard}>
                        <div className={styles.cardImageContainer}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className={styles.productImage}
                            loading="lazy"
                          />
                        </div>
                        <div className={styles.cardContent}>
                          <h3 className={styles.productName}>{product.name}</h3>
                          {/* <p className={styles.productDesc}>{product.description}</p>
                          <p className={styles.productDetails}>{product.details}</p>
                          <div className={styles.cardFooter}>
                            <Link to="/contact" className={styles.viewDetailsBtn}>
                              View Details <span className={styles.arrow}>↗</span>
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Category 2: Artificial Stones */}
              {artificialStones.length > 0 && (
                <div className={styles.categoryBlock}>
                  <div className={styles.categoryHeader}>
                    <h2 className={styles.categoryTitle}>Artificial Stones</h2>
                    <div className={styles.categoryDivider}>
                      <span className={styles.dividerLine} />
                      <span className={styles.dividerLabel}>MAGMA ENGINEERED</span>
                    </div>
                  </div>

                  <div className={styles.productsGrid}>
                    {artificialStones.map((product) => (
                      <div key={product.id} className={styles.productCard}>
                        <div className={styles.cardImageContainer}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className={styles.productImage}
                            loading="lazy"
                          />
                        </div>
                        <div className={styles.cardContent}>
                          <h3 className={styles.productName}>{product.name}</h3>
                          {/* <p className={styles.productDesc}>{product.description}</p>
                          <p className={styles.productDetails}>{product.details}</p>
                          <div className={styles.cardFooter}>
                            <Link to="/contact" className={styles.viewDetailsBtn}>
                              View Details <span className={styles.arrow}>↗</span>
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT CALL TO ACTION (CTA)
      ══════════════════════════════════════════ */}
      <section className={styles.ctaSection} ref={ctaSectionRef}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaContent}>
              <h2 className={`${styles.ctaTitle} animate-cta`}>
                Need Help Choosing the Right Stone?
              </h2>
              <p className={`${styles.ctaDesc} animate-cta`}>
                Our stone consultants are here to guide you through materials, finishes, and specs. Get in touch with our team to find the perfect solution for your space.
              </p>
              <div className="animate-cta">
                <Link to="/contact" className={styles.ctaBtn}>
                  Contact Us ↗
                </Link>
              </div>
            </div>
            {/* Soft decorative blur background elements */}
            <div className={styles.ctaBlob} aria-hidden="true" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;

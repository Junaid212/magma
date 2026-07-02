import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap, ScrollTrigger } from '../../utils/gsapConfig';
import Footer from '../../components/Footer/Footer';
import styles from './Services.module.scss';
import img1  from '../../assets/images/img/1.webp';
import img2  from '../../assets/images/img/2.webp';
import img9  from '../../assets/images/img/9.webp';
import img14 from '../../assets/images/img/14.webp';
import img15 from '../../assets/images/img/15.webp';
import img17 from '../../assets/images/img/17.webp';
import { ArrowUpRight } from 'lucide-react';

// ─── Data ───────────────────────────────────────────────────

const services = [
  {
    id: 1,
    title: 'Marble Fabrication',
    desc: 'Custom cutting, shaping and finishing of marble slabs with surgical precision for countertops, feature walls and flooring.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Stone Installation',
    desc: 'Expert on-site installation by certified craftsmen ensuring seamless joints, perfect levelling and impeccable finish.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#FF481F" strokeWidth="1.5"/>
        <path d="M8 21H16M12 17V21" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Design Consultation',
    desc: 'Collaborative design sessions with our expert consultants to find the perfect stone, colour and pattern for your space.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Surface Restoration',
    desc: 'Professional polishing, honing and sealing to revive worn or damaged stone surfaces back to their original glory.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#FF481F" strokeWidth="1.5"/>
        <path d="M12 8V12L15 15" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const processSteps = [
  { num: '01', title: 'Discovery', desc: 'We listen carefully to understand your vision, space requirements and budget parameters.' },
  { num: '02', title: 'Selection', desc: 'Browse our exclusive stone library and receive expert guidance to choose the perfect material.' },
  { num: '03', title: 'Fabrication', desc: 'Precision cutting and finishing in our state-of-the-art facility, crafted to exact specifications.' },
  { num: '04', title: 'Installation', desc: 'Flawless on-site installation by our master craftsmen with minimal disruption to your space.' },
];

// ─── Component ───────────────────────────────────────────────

const Services = () => {
  const heroRef        = useRef(null);
  const heroInnerRef   = useRef(null);
  const introRef       = useRef(null);
  const introImageRef  = useRef(null);
  const introTextRef   = useRef(null);
  const bentoRef       = useRef(null);
  const processRef     = useRef(null);
  const processHdrRef  = useRef(null);
  const stepCardsRef   = useRef([]);
  const ctaBannerRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Hero: content slides up on mount
      gsap.fromTo(
        heroInnerRef.current?.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.3 }
      );

      // ── Intro: image reveals
      gsap.fromTo(
        introImageRef.current,
        { opacity: 0, x: -60, scale: 0.96 },
        {
          opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: introRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
        }
      );

      // ── Intro: text stagger
      const textChildren = introTextRef.current?.children;
      if (textChildren) {
        gsap.fromTo(
          textChildren,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.85, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: introTextRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
          }
        );
      }

      // ── Bento grid items
      if (bentoRef.current) {
        gsap.fromTo(
          bentoRef.current.querySelectorAll(`.${styles.bentoItem}`),
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.85, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: bentoRef.current, start: 'top 75%' },
          }
        );
      }

      // ── Process header
      if (processHdrRef.current) {
        gsap.fromTo(
          processHdrRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1, y: 0, duration: 0.85, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: processHdrRef.current, start: 'top 80%' },
          }
        );
      }

      // ── Step cards
      const sCards = stepCardsRef.current.filter(Boolean);
      gsap.fromTo(
        sCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: processRef.current, start: 'top 75%' },
        }
      );

      // ── CTA Banner
      if (ctaBannerRef.current) {
        gsap.fromTo(
          ctaBannerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: ctaBannerRef.current, start: 'top 80%' },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>

      {/* ══════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════ */}
      <section className={styles.heroSection} ref={heroRef}>
        <div className={styles.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1800&q=85"
            alt="Luxury marble stone surface"
          />
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className="container">
          <div className={styles.heroInner} ref={heroInnerRef}>
            <div className={styles.heroBreadcrumb}>
              <span>Home</span>
              <span className={styles.sep}>/</span>
              <span className={styles.active}>Services</span>
            </div>
            <h1 className={styles.heroTitle}>Our Services</h1>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTRO — What We Offer (image + text)
      ══════════════════════════════════════════ */}
      {/* <section className={styles.introSection} ref={introRef}>
        <div className={styles.decorLines} aria-hidden="true">
          <svg viewBox="0 0 1440 650" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              d="M1430 10 C 1200 60, 950 80, 780 160 C 620 240, 560 350, 480 420 C 400 490, 300 500, 100 540"
              stroke="#FF481F" strokeWidth="1.5" fill="none" opacity="0.35"
            />
            <path
              d="M 510 460 C 490 510, 545 560, 595 545 C 645 530, 620 590, 575 610"
              stroke="#FF481F" strokeWidth="1.5" fill="none" opacity="0.35"
            />
          </svg>
        </div>

        <div className="container">
          <div className={styles.introInner}>

            
            <div className={styles.introImageSide} ref={introImageRef}>
              <div className={styles.mainImageWrap}>
                <img src={img17} alt="Magma stone craftsmanship" />
              </div>
              <div className={styles.floatingCard}>
                <span className={styles.floatNumber}>15<em style={{ fontSize: '28px', fontWeight: 400 }}>+</em></span>
                <span className={styles.floatLabel}>Years of<br />Excellence</span>
              </div>
            </div>

            
            <div className={styles.introTextSide} ref={introTextRef}>
              <div className={styles.sectionMeta}>
                <span className={styles.metaLine} />
                <span className={styles.metaLabel}>What We Offer</span>
              </div>

              <h2 className={styles.introHeading}>
                Premium Stone Services Crafted for Every Space
              </h2>

              <p className={styles.introLead}>
                From a single statement countertop to an entire commercial lobby — Magma Stone
                delivers end-to-end stone solutions with a standard of excellence that speaks for itself.
              </p>

              <p className={styles.introBody}>
                Our team of master craftsmen, designers and installation specialists work together
                seamlessly to deliver results that combine natural beauty with uncompromising
                structural integrity. Every surface we touch becomes a signature.
              </p>

              
              <div className={styles.serviceHighlights}>
                {services.map((s) => (
                  <div key={s.id} className={styles.highlightItem}>
                    <div className={styles.highlightIcon}>{s.icon}</div>
                    <div>
                      <span className={styles.highlightTitle}>{s.title}</span>
                      <span className={styles.highlightDesc}>{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/contact" className={styles.introCta}>
                Request a Quote ↗
              </Link>
            </div>

          </div>
        </div>
      </section> */}

      {/* ══════════════════════════════════════════
          BENTO SERVICES GRID (replaces stats strip)
      ══════════════════════════════════════════ */}
      <div className={styles.bentoSection}>
        <div className="container">
          <div className={styles.bentoHeader}>
            <p className={styles.bentoLabel}>Our Specialisations</p>
            <h2 className={styles.bentoTitle}>Stone Solutions for Every Vision</h2>
          </div>

          <div className={styles.bentoGrid} ref={bentoRef}>

            {/* Large image — top left */}
            <div className={`${styles.bentoItem} ${styles.bentoImgLg}`}>
              <img src={img1} alt="Marble fabrication workshop" />
              <div className={styles.bentoImgOverlay} />
              <div className={styles.bentoImgLabel}>
                <span>Marble Fabrication</span>
                <p>Precision-cut surfaces tailored to your exact specifications.</p>
              </div>
            </div>

            {/* Stat card — top centre */}
            <div className={`${styles.bentoItem} ${styles.bentoStat}`}>
              <span className={styles.bentoStatNum}>850<em>+</em></span>
              <span className={styles.bentoStatText}>Projects Completed</span>
            </div>

            {/* Large image — top right */}
            <div className={`${styles.bentoItem} ${styles.bentoImgMd}`}>
              <img src={img9} alt="Stone installation" />
              <div className={styles.bentoImgOverlay} />
              <div className={styles.bentoImgLabel}>
                <span>Stone Installation</span>
                <p>Flawless on-site installation by certified craftsmen.</p>
              </div>
            </div>

            {/* Stat card — top right corner */}
            <div className={`${styles.bentoItem} ${styles.bentoStat} ${styles.bentoStatAlt}`}>
              <span className={styles.bentoStatNum}>40<em>+</em></span>
              <span className={styles.bentoStatText}>Stone Varieties</span>
            </div>

            {/* Stat card — bottom left */}
            <div className={`${styles.bentoItem} ${styles.bentoStat} ${styles.bentoStatBottom}`}>
              <span className={styles.bentoStatNum}>200<em>+</em></span>
              <span className={styles.bentoStatText}>Happy Clients</span>
            </div>

            {/* Medium image — bottom centre */}
            <div className={`${styles.bentoItem} ${styles.bentoImgSm}`}>
              <img src={img14} alt="Design consultation" />
              <div className={styles.bentoImgOverlay} />
              <div className={styles.bentoImgLabel}>
                <span>Design Consultation</span>
                <p>Expert guidance to find your perfect stone.</p>
              </div>
            </div>

            {/* Stat card — bottom centre-right */}
            <div className={`${styles.bentoItem} ${styles.bentoStat}`}>
              <span className={styles.bentoStatNum}>15<em>+</em></span>
              <span className={styles.bentoStatText}>Years Experience</span>
            </div>

            {/* Image — bottom right */}
            <div className={`${styles.bentoItem} ${styles.bentoImgMd} ${styles.bentoImgBottomRight}`}>
              <img src={img15} alt="Surface restoration" />
              <div className={styles.bentoImgOverlay} />
              <div className={styles.bentoImgLabel}>
                <span>Surface Restoration</span>
                <p>Revive your stone to its original brilliance.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          OUR PROCESS SECTION (replaces Mission/Vision)
      ══════════════════════════════════════════ */}
      <section className={styles.processSection} ref={processRef}>
        <div className="container">

          {/* Header */}
          <div className={styles.processHeader} ref={processHdrRef}>
            <p className={styles.processLabel}>How We Work</p>
          </div>

          {/* Process grid — 2 col image + steps */}
          <div className={styles.processGrid}>
            {/* Left: big image card */}
            <div
              className={styles.processImgCard}
              ref={(el) => (stepCardsRef.current[0] = el)}
            >
              <div className={styles.processImgBg}>
                <img src={img2} alt="Our fabrication process" />
              </div>
              <div className={styles.processImgContent}>
                <div className={styles.processImgTag}>
                  <span className={styles.processTagDot} />
                  <span className={styles.processTagText}>Our Process</span>
                </div>
                <h3 className={styles.processImgTitle}>
                  From Raw Stone to Refined Masterpiece
                </h3>
                <p className={styles.processImgBody}>
                  Every project follows our meticulous four-step methodology — ensuring
                  precision, transparency and an outcome that surpasses expectations.
                </p>
              </div>
            </div>

            {/* Right: steps grid */}
            <div className={styles.stepsGrid}>
              {processSteps.map((step, i) => (
                <div
                  key={step.num}
                  className={styles.stepCard}
                  ref={(el) => (stepCardsRef.current[i + 1] = el)}
                >
                  <span className={styles.stepNum}>{step.num}</span>
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service feature cards (replaces core values) */}
          {/* <div className={styles.serviceCards}>
            {services.map((s, i) => (
              <div
                key={s.id}
                className={styles.serviceCard}
                ref={(el) => (stepCardsRef.current[i + 5] = el)}
              >
                <div className={styles.serviceCardIcon}>{s.icon}</div>
                <h4 className={styles.serviceCardTitle}>{s.title}</h4>
                <p className={styles.serviceCardDesc}>{s.desc}</p>
              </div>
            ))}
          </div> */}

        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA STRIP (replaces team teaser)
      ══════════════════════════════════════════ */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaStripInner} ref={ctaBannerRef}>
            <div className={styles.ctaTextBlock}>
              <div className={styles.sectionMeta}>
                <span className={styles.metaLine} />
                <span className={styles.metaLabel}>Ready to Begin?</span>
              </div>
              <h2 className={styles.ctaHeading}>
                Let's Bring Your Stone Vision to Life
              </h2>
              <p className={styles.ctaDesc}>
                Speak with one of our stone specialists today and receive a personalised quote
                tailored to your project — no obligation, just expertise.
              </p>
            </div>
            <Link to="/contact" className={styles.ctaButton}>
              Get In Touch <ArrowUpRight strokeWidth={0.75} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <Footer />
    </div>
  );
};

export default Services;

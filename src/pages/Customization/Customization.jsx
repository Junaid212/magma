import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from '../../utils/gsapConfig';
import Footer from '../../components/Footer/Footer';
import styles from './Customization.module.scss';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { FaChevronRight } from 'react-icons/fa6';


// ─── Local images ─────────────────────────────────────────────────────────────
import img1  from '../../assets/images/img/1.webp';
import img2  from '../../assets/images/img/2.webp';
import img9  from '../../assets/images/img/9.webp';
import img14 from '../../assets/images/img/14.webp';
import img15 from '../../assets/images/img/15.webp';
import img17 from '../../assets/images/img/17.webp';
import img18 from '../../assets/images/img/18.webp';

// ─── Data ─────────────────────────────────────────────────────────────────────

const capabilities = [
  {
    id: 1, number: '01', title: 'Kitchen Countertops',
    desc: 'Custom-crafted surfaces that combine durability, functionality, and timeless elegance in every kitchen environment.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6H21M3 6V20H21V6M3 6L5 4H19L21 6M8 12H16M8 16H12" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    image: img1,
  },
  {
    id: 2, number: '02', title: 'Vanity Tops',
    desc: 'Premium stone vanities tailored to complement sophisticated interior spaces with precision edge profiling.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="8" width="18" height="4" rx="1" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5 12V20M19 12V20M8 20H16" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 8V5C9 4.44772 9.44772 4 10 4H14C14.5523 4 15 4.44772 15 5V8" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    image: img9,
  },
  {
    id: 3, number: '03', title: 'Staircases',
    desc: 'Precision-finished stone staircases that create a grand architectural statement and a lasting first impression.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 20H7V16H11V12H15V8H19V4" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 20V4" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    image: img14,
  },
  {
    id: 4, number: '04', title: 'Wall Cladding',
    desc: 'Elegant natural stone panels that add depth, texture, and refined character to any interior or exterior wall.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="8" height="5" rx="1" stroke="#FF481F" strokeWidth="1.5"/>
        <rect x="13" y="3" width="8" height="5" rx="1" stroke="#FF481F" strokeWidth="1.5"/>
        <rect x="3" y="10" width="8" height="5" rx="1" stroke="#FF481F" strokeWidth="1.5"/>
        <rect x="13" y="10" width="8" height="5" rx="1" stroke="#FF481F" strokeWidth="1.5"/>
        <rect x="3" y="17" width="8" height="4" rx="1" stroke="#FF481F" strokeWidth="1.5"/>
        <rect x="13" y="17" width="8" height="4" rx="1" stroke="#FF481F" strokeWidth="1.5"/>
      </svg>
    ),
    image: img15,
  },
  {
    id: 5, number: '05', title: 'Flooring Solutions',
    desc: 'Seamless stone flooring systems crafted for both residential and commercial environments with flawless finish.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21M3 12H21M3 3H21" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 3V21M16 3V21" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    image: img17,
  },
  {
    id: 6, number: '06', title: 'Custom Furniture',
    desc: 'Exclusive marble furniture pieces designed for luxury interiors — from dining tables to fireplace surrounds.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V9" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M1 9H23V14H1V9Z" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 14V19M20 14V19" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    image: img18,
  },
];

const processSteps = [
  { num: '01', title: 'Consultation', desc: 'A one-on-one session to understand your vision, functional needs, and aesthetic preferences in depth.' },
  { num: '02', title: 'Stone Selection', desc: 'Browse our curated stone library with expert guidance to select the perfect material, colour, and finish.' },
  { num: '03', title: 'Custom Fabrication', desc: 'Our master craftsmen precisely cut, shape, and finish each piece to your exact specifications in our facility.' },
  { num: '04', title: 'Delivery & Install', desc: 'Flawless on-site installation by certified specialists, ensuring seamless joints and an impeccable result.' },
];

const faqs = [
  { id: 1, q: 'What stone types are available for custom projects?', a: 'We offer an extensive selection including marble, granite, quartzite, onyx, basalt, limestone, and engineered surfaces like quartz and ceramique slabs. Our team can source specialty stones on request.' },
  { id: 2, q: 'How long does a custom fabrication project take?', a: 'Timelines vary by project complexity. Simple countertop replacements can be completed in 2–3 weeks, while larger custom installations such as staircases or feature walls may take 4–8 weeks from approval to installation.' },
  { id: 3, q: 'Do you offer design consultation before committing?', a: 'Absolutely. Our design consultation is a complimentary service where our stone specialists work with you to explore options, review samples, and create detailed drawings before any fabrication begins.' },
  { id: 4, q: 'Can you match existing stone in my home?', a: 'In most cases, yes. We maintain an extensive network of international quarries and stone suppliers. Bring us a sample or high-resolution photographs and our team will work to find the closest possible match.' },
  { id: 5, q: 'What edge profiles are available for countertops?', a: 'We offer a full range of edge profiles — from classic bullnose and bevelled to waterfall, mitered, and ogee profiles. Custom edge profiles can also be machined to your precise specification.' },
  { id: 6, q: 'Do you handle both residential and commercial projects?', a: 'Yes. We serve homeowners, interior designers, architects, and commercial developers alike. Our production capacity and project management systems are built for projects of every scale.' },
];

const materialsList = ['Marble', 'Granite', 'Quartzite', 'Onyx', 'Basalt', 'Limestone', 'Quartz', 'Ceramique', 'Terrazzo'];

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L14.85 8.62L22 9.27L17 13.97L18.47 21L12 17.27L5.53 21L7 13.97L2 9.27L9.15 8.62L12 2Z" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Unmatched Precision',
    desc: 'Every cut, edge, and surface is executed with surgical accuracy by our master craftsmen.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#FF481F" strokeWidth="1.5"/>
        <path d="M12 6v6l4 2" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'On-Time Delivery',
    desc: 'We commit to project timelines and deliver without compromise on quality or schedule.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '10-Year Warranty',
    desc: 'Our installations carry a decade-long guarantee covering craftsmanship and materials.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Dedicated Support',
    desc: 'A single point of contact guides you from first consultation through to final sign-off.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const Customization = () => {
  const [activeCapability, setActiveCapability] = useState(0);
  const [openFaq, setOpenFaq]                   = useState(null);

  const heroInnerRef  = useRef(null);
  const introRef      = useRef(null);
  const introImgRef   = useRef(null);
  const introTextRef  = useRef(null);
  const valuesRef     = useRef(null);
  const capRef        = useRef(null);
  const processRef    = useRef(null);
  const stepCardsRef  = useRef([]);
  const faqRef        = useRef(null);
  const ctaRef        = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Hero ──────────────────────────────────────────────
      if (heroInnerRef.current) {
        gsap.fromTo(
          heroInnerRef.current.children,
          { opacity: 0, y: 45 },
          { opacity: 1, y: 0, duration: 1.1, stagger: 0.14, ease: 'power3.out', delay: 0.3 }
        );
      }

      // ── Intro: image slides in from left ──────────────────
      if (introImgRef.current) {
        gsap.fromTo(
          introImgRef.current,
          { opacity: 0, x: -60, scale: 0.96 },
          {
            opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: introRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
          }
        );
      }

      // ── Intro: text stagger ────────────────────────────────
      if (introTextRef.current) {
        gsap.fromTo(
          introTextRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: introTextRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
          }
        );
      }

      // ── Values strip ──────────────────────────────────────
      if (valuesRef.current) {
        gsap.fromTo(
          valuesRef.current.querySelectorAll('[data-value]'),
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.85, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: valuesRef.current, start: 'top 78%' },
          }
        );
      }

      // ── Capabilities header ────────────────────────────────
      if (capRef.current) {
        gsap.fromTo(
          capRef.current.querySelectorAll('[data-cap-hdr]'),
          { opacity: 0, y: 25 },
          {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: capRef.current, start: 'top 82%' },
          }
        );
      }

      // ── Process step cards ─────────────────────────────────
      const cards = stepCardsRef.current.filter(Boolean);
      if (cards.length && processRef.current) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: processRef.current, start: 'top 75%' },
          }
        );
      }

      // ── FAQ header ────────────────────────────────────────
      if (faqRef.current) {
        gsap.fromTo(
          faqRef.current.querySelectorAll('[data-faq-hdr]'),
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: faqRef.current, start: 'top 82%' },
          }
        );
      }

      // ── CTA ───────────────────────────────────────────────
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const toggleFaq = (id) => setOpenFaq(openFaq === id ? null : id);

  return (
    <div className={styles.pageWrapper}>

      {/* ════════════════════════════════════
          HERO BANNER
      ════════════════════════════════════ */}
       <section className={styles.heroSection} >
        <div className={styles.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=85"
            alt="Studio workspace"
          />
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className="container">
          <div className={styles.heroInner} ref={heroInnerRef}>
            <div className={styles.heroBreadcrumb}>
              <span>Home</span>
              <span className={styles.sep}>/</span>
              <span className={styles.active}>Customization</span>
            </div>
            <h1 className={styles.heroTitle}>Customization</h1>
            {/* <p className={styles.heroSubtitle}>
              Have a project in mind? Our team is ready to listen, advise and deliver.
            </p> */}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          INTRO SECTION — image + text
      ════════════════════════════════════ */}
      <section className={styles.introSection} ref={introRef}>
        <div className="container">
          <div className={styles.introInner}>

            {/* Left: image with floating stat card */}
            <div className={styles.introImageSide} ref={introImgRef}>
              <div className={styles.mainImageWrap}>
                <img src={img17} alt="Magma stone craftsmanship" />
              </div>
              {/* <div className={styles.floatingCard}>
                <span className={styles.floatNumber}>500<em>+</em></span>
                <span className={styles.floatLabel}>Custom Projects<br />Completed</span>
              </div> */}
            </div>

            {/* Right: text content */}
            <div className={styles.introTextSide} ref={introTextRef}>
              <div className={styles.sectionMeta}>
                <span className={styles.metaLine} />
                <span className={styles.metaLabel}>Our Approach</span>
              </div>

              <h2 className={styles.introHeading}>
                Every detail, precisely considered.
              </h2>

              <p className={styles.introLead}>
                At Magma, customization is not an add-on — it is our core offering. Each project
                begins with a deep understanding of your space, your lifestyle, and your vision.
              </p>

              <p className={styles.introBody}>
                From a single kitchen countertop to a complete architectural installation, our team
                brings the same meticulous attention to detail, the same precision fabrication, and
                the same commitment to enduring quality. We translate your vision into stone.
              </p>

              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>18<em>+</em></span>
                  <span className={styles.statText}>Years Experience</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>40<em>+</em></span>
                  <span className={styles.statText}>Stone Varieties</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>100<em>%</em></span>
                  <span className={styles.statText}>Bespoke Made</span>
                </div>
              </div>

              {/* <Link to="/contact" className={styles.introCta}>
                Request a Consultation <ArrowUpRight strokeWidth={0.75} size={16} />
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          VALUES STRIP — dark section
      ════════════════════════════════════ */}
      <div className={styles.valuesStrip} ref={valuesRef}>
        <div className={styles.valuesGrid}>
          {values.map((v, i) => (
            <div key={i} className={styles.valueItem} data-value="true">
              <div className={styles.valueIcon}>{v.icon}</div>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════
          CAPABILITIES — SPLIT PANEL
      ════════════════════════════════════ */}
      <section className={styles.capabilitiesSection} ref={capRef}>
        <div className="container">
          <div className={styles.capHeader}>
            <p className={styles.sectionLabel} data-cap-hdr="true">Capabilities</p>
            <h2 className={styles.capHeading} data-cap-hdr="true">What We Craft</h2>
            <p className={styles.capSubtitle} data-cap-hdr="true">
              From functional surfaces to architectural statements — every application, executed to perfection.
            </p>
          </div>
        </div>

        <div className={styles.capLayout}>
          {/* Left — selectable list */}
          <div className={styles.capList}>
            {capabilities.map((cap, i) => (
              <div
                key={cap.id}
                className={`${styles.capItem} ${activeCapability === i ? styles.capActive : ''}`}
                onClick={() => setActiveCapability(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveCapability(i)}
              >
                <span className={styles.capNumber}>{cap.number}</span>
                <div className={styles.capItemBody}>
                  <div className={styles.capIcon}>{cap.icon}</div>
                  <div className={styles.capItemText}>
                    <h3 className={styles.capTitle}>{cap.title}</h3>
                    <p className={`${styles.capDesc} ${activeCapability === i ? styles.capDescVisible : ''}`}>
                      {cap.desc}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className={styles.capArrow} strokeWidth={1} size={20} />
              </div>
            ))}
          </div>

          {/* Right — image preview */}
          <div className={styles.capImagePane}>
            {capabilities.map((cap, i) => (
              <div
                key={cap.id}
                className={`${styles.capImageSlide} ${activeCapability === i ? styles.capSlideActive : ''}`}
              >
                <img src={cap.image} alt={cap.title} loading="lazy" />
                <div className={styles.capImageLabel}>
                  <span>{cap.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          PROCESS SECTION — image card + step cards grid
      ════════════════════════════════════ */}
      <section className={styles.processSection} ref={processRef}>
        <div className="container">

          <div className={styles.processHeader}>
            <p className={styles.sectionLabel}>How We Work</p>
          </div>

          <div className={styles.processGrid}>

            {/* Left: big image card */}
            <div className={styles.processImgCard} ref={(el) => (stepCardsRef.current[0] = el)}>
              <div className={styles.processImgBg}>
                <img src={img9} alt="Our fabrication process" />
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
                  precision, transparency, and an outcome that surpasses expectations.
                </p>
              </div>
            </div>

            {/* Right: step cards grid */}
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
        </div>
      </section>

      {/* ════════════════════════════════════
          MATERIALS MARQUEE STRIP
      ════════════════════════════════════ */}
      <div className={styles.materialsStrip} aria-hidden="true">
        <div className={styles.stripTrack}>
          {[...materialsList, ...materialsList].map((m, i) => (
            <span key={i} className={styles.stripItem}>
              {m}<span className={styles.stripDot}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════
          FAQ ACCORDION
      ════════════════════════════════════ */}
      <section className={styles.faqSection} ref={faqRef}>
        <div className="container">
          <div className={styles.faqLayout}>

            <div className={styles.faqLeft}>
              <p className={styles.sectionLabel} data-faq-hdr="true">FAQ</p>
              <h2 className={styles.faqHeading} data-faq-hdr="true">
                Common questions<br />answered.
              </h2>
              <p className={styles.faqIntro} data-faq-hdr="true">
                Have a question not listed here? Our team is always ready to help.
              </p>
              <Link to="/contact" className={styles.faqLink} data-faq-hdr="true">
                Ask Us Directly <ArrowUpRight strokeWidth={1} size={16} />
              </Link>
            </div>

            <div className={styles.faqRight}>
              {faqs.map((faq) => (
                <div key={faq.id} className={`${styles.faqItem} ${openFaq === faq.id ? styles.faqOpen : ''}`}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={openFaq === faq.id}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={styles.faqChevron} size={18} strokeWidth={1.5} />
                  </button>
                  <div className={styles.faqAnswer}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          CTA STRIP — matches Services style
      ════════════════════════════════════ */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaStripInner} ref={ctaRef}>
            <div className={styles.ctaTextBlock}>
              <div className={styles.sectionMeta}>
                <span className={styles.metaLine} />
                <span className={styles.metaLabel}>Ready to Begin?</span>
              </div>
              <h2 className={styles.ctaHeading}>
                Let's Bring Your Stone Vision to Life
              </h2>
              <p className={styles.ctaDesc}>
                Speak with one of our stone specialists today and receive a personalised
                quote tailored to your project — no obligation, just expertise.
              </p>
            </div>
            <Link to="/contact" className={styles.ctaButton}>
              Get In Touch <ArrowUpRight strokeWidth={0.75} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Customization;

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from '../../utils/gsapConfig';
import Footer from '../../components/Footer/Footer';
import styles from './Contact.module.scss';

// ─── Component ───────────────────────────────────────────────

const Contact = () => {
  const heroRef      = useRef(null);
  const heroInnerRef = useRef(null);
  const infoRef      = useRef(null);
  const formRef      = useRef(null);
  const mapRef       = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1200);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        heroInnerRef.current?.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.3 }
      );

      // Info cards
      if (infoRef.current) {
        gsap.fromTo(
          infoRef.current.querySelectorAll(`.${styles.infoCard}`),
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: infoRef.current, start: 'top 80%' },
          }
        );
      }

      // Form panel
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: formRef.current, start: 'top 80%' },
          }
        );
      }

      // Map
      if (mapRef.current) {
        gsap.fromTo(
          mapRef.current,
          { opacity: 0 },
          {
            opacity: 1, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: mapRef.current, start: 'top 85%' },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.contactPage}>

      {/* ══════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════ */}
      <section className={styles.heroSection} ref={heroRef}>
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
              <span className={styles.active}>Contact</span>
            </div>
            <h1 className={styles.heroTitle}>Get In Touch</h1>
            <p className={styles.heroSubtitle}>
              Have a project in mind? Our team is ready to listen, advise and deliver.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT INFO CARDS
      ══════════════════════════════════════════ */}
      {/* <section className={styles.infoSection} ref={infoRef}>
        <div className="container">

          <div className={styles.infoGrid}> */}

            {/* Phone */}
            {/* <div className={styles.infoCard}>
              <div className={styles.infoIconWrap}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.56 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012.47 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.09 6.09l1.27-.81a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.infoCardBody}>
                <span className={styles.infoLabel}>Call Us</span>
                <a href="tel:+923001234567" className={styles.infoValue}>+92 300 123 4567</a>
                <a href="tel:+922112345678" className={styles.infoValueSub}>+92 21 1234 5678</a>
              </div>
            </div> */}

            {/* Email */}
            {/* <div className={styles.infoCard}>
              <div className={styles.infoIconWrap}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.infoCardBody}>
                <span className={styles.infoLabel}>Email Us</span>
                <a href="mailto:hello@magmastone.com" className={styles.infoValue}>hello@magmastone.com</a>
                <a href="mailto:support@magmastone.com" className={styles.infoValueSub}>support@magmastone.com</a>
              </div>
            </div> */}

            {/* Address */}
            {/* <div className={styles.infoCard}>
              <div className={styles.infoIconWrap}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                    stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                  <circle
                    cx="12" cy="10" r="3"
                    stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.infoCardBody}>
                <span className={styles.infoLabel}>Visit Us</span>
                <span className={styles.infoValue}>Plot 14-C, Industrial Area</span>
                <span className={styles.infoValueSub}>Karachi, Pakistan — 75700</span>
              </div>
            </div> */}

            {/* Hours */}
            {/* <div className={styles.infoCard}>
              <div className={styles.infoIconWrap}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#FF481F" strokeWidth="1.5"/>
                  <polyline
                    points="12,6 12,12 16,14"
                    stroke="#FF481F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.infoCardBody}>
                <span className={styles.infoLabel}>Working Hours</span>
                <span className={styles.infoValue}>Mon – Sat: 9:00 AM – 6:00 PM</span>
                <span className={styles.infoValueSub}>Sunday: Closed</span>
              </div>
            </div> */}

          {/* </div>
        </div>
      </section> */}

      {/* ══════════════════════════════════════════
          FORM + SIDE INFO PANEL
      ══════════════════════════════════════════ */}
      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.formGrid}>

            {/* Left: Form */}
            <div className={styles.formWrap} ref={formRef}>

              <div className={styles.sectionMeta}>
                <span className={styles.metaLine} />
                <span className={styles.metaLabel}>Send a Message</span>
              </div>

              <h2 className={styles.formHeading}>
                Let's Talk About Your Project
              </h2>

              {submitted ? (
                <div className={styles.successBox}>
                  <div className={styles.successIcon}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#FF481F" strokeWidth="1.5"/>
                      <polyline points="9,12 11,14 15,10" stroke="#FF481F" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className={styles.resetBtn}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name <span>*</span></label>
                      <input
                        id="name" type="text" name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address <span>*</span></label>
                      <input
                        id="email" type="email" name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        id="phone" type="tel" name="phone"
                        placeholder="+92 300 000 0000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="subject">Subject <span>*</span></label>
                      <select
                        id="subject" name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="marble">Marble Fabrication</option>
                        <option value="installation">Stone Installation</option>
                        <option value="consultation">Design Consultation</option>
                        <option value="restoration">Surface Restoration</option>
                        <option value="other">Other Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Your Message <span>*</span></label>
                    <textarea
                      id="message" name="message"
                      placeholder="Tell us about your project — space type, stone preferences, timeline..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span className={styles.btnSpinner} />
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Info sidebar */}
            <aside className={styles.sidePanel}>

              <div className={styles.sidePanelInner}>

                <div className={styles.sectionMeta}>
                  <span className={styles.metaLine} />
                  <span className={styles.metaLabel}>Contact Info</span>
                </div>

                <h3 className={styles.sidePanelHeading}>
                  We'd Love to Hear From You
                </h3>

                <p className={styles.sidePanelDesc}>
                  Whether you're planning a new build, renovation or restoration — our
                  stone specialists are ready to guide you from concept to completion.
                </p>

                <ul className={styles.sideContactList}>
                  <li>
                    <div className={styles.sideContactIcon}>
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.56 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012.47 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.09 6.09l1.27-.81a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <span className={styles.sideContactLabel}>Phone</span>
                      <a href="tel:+923001234567" className={styles.sideContactValue}>+92 300 123 4567</a>
                    </div>
                  </li>
                  <li>
                    <div className={styles.sideContactIcon}>
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="22,6 12,13 2,6"
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <span className={styles.sideContactLabel}>Email</span>
                      <a href="mailto:hello@magmastone.com" className={styles.sideContactValue}>hello@magmastone.com</a>
                    </div>
                  </li>
                  <li>
                    <div className={styles.sideContactIcon}>
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="10" r="3"
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <span className={styles.sideContactLabel}>Address</span>
                      <span className={styles.sideContactValue}>Plot 14-C, Industrial Area,<br/>Karachi, Pakistan 75700</span>
                    </div>
                  </li>
                </ul>

                {/* Social links */}
                <div className={styles.socialRow}>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                    aria-label="Instagram" className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                    aria-label="LinkedIn" className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                    aria-label="Facebook" className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                    aria-label="Twitter" className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GOOGLE MAP
      ══════════════════════════════════════════ */}
      <div className={styles.mapSection} ref={mapRef}>
        {/* <div className={styles.mapHeader}>
          <div className="container">
            <div className={styles.mapHeaderInner}>
              <div className={styles.sectionMeta}>
                <span className={styles.metaLine} />
                <span className={styles.metaLabel}>Find Us</span>
              </div>
              <h2 className={styles.mapHeading}>Our Studio Location</h2>
            </div>
          </div>
        </div> */}

        <div className={styles.mapFrame}>
          <iframe
            title="Magma Stone Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.062!2d67.0099!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Map overlay card */}
          {/* <div className={styles.mapOverlayCard}>
            <div className={styles.mapCardIcon}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                  stroke="#FF481F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3"
                  stroke="#FF481F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className={styles.mapCardTitle}>Magma Stone Studio</p>
              <p className={styles.mapCardAddr}>Plot 14-C, Industrial Area, Karachi</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <Footer />
    </div>
  );
};

export default Contact;

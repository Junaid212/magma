import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Column 1: Logo + Description */}
          <div className={styles.col}>
            <div className={styles.footerLogo}>
              <div className={styles.logoIcon}>
                <svg viewBox="0 0 100 100" width="32" height="32">
                  <path
                    d="M10 10 H90 V90 H10 Z M30 30 V70 H70 V50 H50 V30 Z"
                    fillRule="evenodd"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              <div className={styles.logoText}>
                <span>MAGMA</span>
                <span>co.</span>
              </div>
            </div>
            <p className={styles.footerDesc}>
              We collaborate with clients to create buildings and environments in dialogue with
              culture and place.
            </p>
            <div className={styles.socials}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.footerLinks}>
              <li><Link to="/blog">Supply</Link></li>
              <li><Link to="/blog">Manufacturing ( cutting and polishing )</Link></li>
              <li><Link to="/blog">Installation</Link></li>
              <li><Link to="/blog">Maintenance</Link></li>
            </ul>
          </div>

          {/* Column 3: Studio */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Newsletter</h4>
            <p className={styles.newsletterText}>
              Subscribe to receive our latest updates and news.
            </p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className={styles.emailInput}
                aria-label="Email for newsletter"
              />
              <button type="submit" className={styles.submitBtn}>
                →
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} MAGMA Stone. All rights reserved.
          </p>
          {/* <div className={styles.bottomLinks}>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

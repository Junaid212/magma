import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  FaMagnifyingGlass, 
  FaXmark, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn 
} from 'react-icons/fa6';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [lang, setLang] = useState('EN');
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Toggle sticky state
      if (currentScrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
        setIsHide(false);
      }

      // Scroll direction reveal toggle
      if (currentScrollY > 250 && currentScrollY > lastScrollY) {
        setIsHide(true); // scrolling down -> hide header
      } else if (currentScrollY < lastScrollY) {
        setIsHide(false); // scrolling up -> reveal header
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer/search on route changes
  useEffect(() => {
    setIsDrawerOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${isSticky ? styles.sticky : ''} ${isHide ? styles.hide : ''}`}>
        {/* Logo */}
        <Link to="/" className={styles.logoContainer}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 100 100" width="32" height="32">
              <path d="M10 10 H90 V90 H10 Z M30 30 V70 H70 V50 H50 V30 Z" fillRule="evenodd" />
            </svg>
          </div>
          <div className={styles.logoText}>
            <span>Magma</span>
            <span>co.</span>
          </div>
        </Link>

        {/* Navigation Menu Links (Desktop) */}
        <nav className={styles.navMenu}>
          <NavLink to="/" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Products
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Services
          </NavLink>
          <NavLink to="/customization" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Customization
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Contact
          </NavLink>
        </nav>

        {/* Right Panel Items */}
        <div className={styles.rightPanel}>
          {/* Language Switcher */}
          {/* <div className={styles.langSwitch}>
            <span className={lang === 'EN' ? styles.active : ''} onClick={() => setLang('EN')}>EN</span>
            <span className={styles.divider}>/</span>
            <span className={lang === 'FR' ? styles.active : ''} onClick={() => setLang('FR')}>FR</span>
          </div> */}

          {/* Search Icon Trigger */}
          {/* <div className={styles.searchIcon} onClick={toggleSearch} role="button" aria-label="Open search">
            <FaMagnifyingGlass />
          </div> */}

          {/* Hamburger Trigger button */}
          <button 
            className={`${styles.burgerBtn} ${isDrawerOpen ? styles.open : ''}`} 
            onClick={toggleDrawer}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Side Drawer Overlay Menu */}
      <div className={`${styles.drawerOverlay} ${isDrawerOpen ? styles.open : ''}`}>
        <div className={styles.drawerBg} onClick={toggleDrawer} />
        <div className={styles.drawerContent}>
          <div className={styles.drawerTop}>
            {/* Logo in Drawer */}
            <div className={styles.logoContainer}>
              <div className={styles.logoIcon}>
                <svg viewBox="0 0 100 100" width="32" height="32">
                  <path d="M10 10 H90 V90 H10 Z M30 30 V70 H70 V50 H50 V30 Z" fillRule="evenodd" fill="#ffffff" />
                </svg>
              </div>
              <div className={styles.logoText}>
                <span>magma</span>
                {/* <span>co.</span> */}
              </div>
            </div>

            {/* Paragraph Description */}
            <p className={styles.drawerDesc}>
              We collaborate with clients to create buildings and environments in dialogue with culture and place. And become one of the country's leading architectural practices.
            </p>

            {/* Mobile Navigation List (Visible only on <= 992px) */}
            <div className={styles.drawerMenu}>
              <NavLink to="/" className={({ isActive }) => `${styles.drawerNavLink} ${isActive ? styles.active : ''}`}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `${styles.drawerNavLink} ${isActive ? styles.active : ''}`}>
                Studio
              </NavLink>
              <NavLink to="/projects" className={({ isActive }) => `${styles.drawerNavLink} ${isActive ? styles.active : ''}`}>
                Cases
              </NavLink>
              <NavLink to="/blog" className={({ isActive }) => `${styles.drawerNavLink} ${isActive ? styles.active : ''}`}>
                News
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `${styles.drawerNavLink} ${isActive ? styles.active : ''}`}>
                Contact
              </NavLink>
            </div>
          </div>

          {/* Contact Details & Info */}
          <div className={styles.drawerInfo}>
            <div className={styles.infoItem}>
              <h4>Get in touch</h4>
              <a href="mailto:hello@archinstudio.co">hello@archinstudio.co</a>
              <a href="tel:+05432567887">(054) 3256 78 87</a>
            </div>

            <div className={styles.infoItem}>
              <h4>Studio Location</h4>
              <p>121 King Street, Melbourne<br />Victoria 3000 Australia</p>
            </div>
          </div>

          {/* Drawer Footer Socials */}
          <div className={styles.drawerFooter}>
            <div className={styles.socials}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
            <div className={styles.copyright}>
              &copy; {new Date().getFullYear()} Archin.
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Search Modal Overlay */}
      <div className={`${styles.searchOverlay} ${isSearchOpen ? styles.open : ''}`}>
        <button className={styles.searchClose} onClick={toggleSearch} aria-label="Close search">
          <FaXmark />
        </button>
        <div className={styles.searchContainer}>
          <h3>Search Our Site</h3>
          <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              placeholder="Type keyword and press enter..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus={isSearchOpen}
            />
            <button type="submit" aria-label="Submit search">
              <FaMagnifyingGlass />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useLenis from '../../hooks/useLenis';
import Navbar from '../Navbar/Navbar';
import Cursor from '../Cursor/Cursor';
import Loader from '../Loader/Loader';
import ScrollTop from '../ScrollTop/ScrollTop';

// Scrolls window to top on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const Layout = () => {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis smooth scrolling
  useLenis();

  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Dynamic Cursor tracking mouse movements */}
      <Cursor />

      {/* SVG Curtain morph transition loader */}
      <Loader onComplete={() => setLoading(false)} />

      {/* Standard Wrapper, hidden during load to avoid content layout shifting */}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.6s ease' }}>
        {/* Sticky responsive Navbar */}
        <Navbar />

        {/* Outer content container containing standard nested pages */}
        <main>
          <Outlet />
        </main>

        {/* Back-to-top scroll trigger button */}
        <ScrollTop />
      </div>
    </>
  );
};

export default Layout;

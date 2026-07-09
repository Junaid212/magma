import React from 'react';
import VideoHero from './sections/VideoHero/VideoHero';
import HeroSlider from './sections/HeroSlider/HeroSlider';
import AboutSection from './sections/AboutSection/AboutSection';
import ServicesSection from './sections/ServicesSection/ServicesSection';
import ProcessSection from './sections/ProcessSection/ProcessSection';
import ProductsSection from './sections/ProductsSection/ProductsSection';
import ProjectsSection from './sections/ProjectsSection/ProjectsSection';
import CustomizationSection from './sections/CustomizationSection/CustomizationSection';
import TestimonialsSection from './sections/TestimonialsSection/TestimonialsSection';
import MarqueeSection from './sections/MarqueeSection/MarqueeSection';
import AwardsSection from './sections/AwardsSection/AwardsSection';
import TeamSection from './sections/TeamSection/TeamSection';
import BlogSection from './sections/BlogSection/BlogSection';
import ContactCTA from './sections/ContactCTA/ContactCTA';
import Footer from '../../components/Footer/Footer';
import ScrollRevealLine from './sections/ScrollRevealLine/ScrollRevealLine';

const Home = () => {
  return (
    <div>
      {/* 1. Video Hero - Scroll-driven video scrub with animated text */}
      {/* <VideoHero /> */}
      <HeroSlider />

      {/*
        ── SVG Scroll Line Wrapper ────────────────────────────────────────────
        position: relative so the absolutely-positioned SVG can fill it.
        The SVG line draws from top (AboutSection) to bottom (MarqueeSection)
        as the user scrolls through this block.
      */}
      <div style={{ position: 'relative' }}>
        {/* The decorative orange line — sits behind all sections */}
        <ScrollRevealLine />

        {/* 2. About Section - Est. 1986, tilted image, years stat */}
        <AboutSection />

        {/* Products - Nature Paints The Best Masterpieces */}
        <ProductsSection />

        {/* 3. Services Section - 4-col grid with icons */}
        <ServicesSection />

        {/* Customization - Custom stone applications */}
        <CustomizationSection />

        {/* 4. Process Work - Accordion + rotated image */}
        {/* <ProcessSection /> */}

        {/* 5. Featured Projects - Filter tabs + 2-col grid */}
        <ProjectsSection />

        {/* 6. Testimonials - Large quote slider */}
        {/* <TestimonialsSection /> */}

        {/* 7. Marquee - Scrolling outlined text */}
        <MarqueeSection />
      </div>

      {/* 8. Awards & Recognition - Dark section with award list */}
      {/* <AwardsSection /> */}

      {/* 9. Team - Circular portraits + stats */}
      {/* <TeamSection /> */}

      {/* 10. Latest Posts - Blog swiper */}
      {/* <BlogSection /> */}

      {/* 11. Contact CTA - Large email address */}
      {/* <ContactCTA /> */}

      {/* 12. Footer */}
      <Footer />
    </div>
  );
};

export default Home;

import React from 'react';
import HeroSlider from './sections/HeroSlider/HeroSlider';
import AboutSection from './sections/AboutSection/AboutSection';
import ServicesSection from './sections/ServicesSection/ServicesSection';
import ProcessSection from './sections/ProcessSection/ProcessSection';
import ProjectsSection from './sections/ProjectsSection/ProjectsSection';
import TestimonialsSection from './sections/TestimonialsSection/TestimonialsSection';
import MarqueeSection from './sections/MarqueeSection/MarqueeSection';
import AwardsSection from './sections/AwardsSection/AwardsSection';
import TeamSection from './sections/TeamSection/TeamSection';
import BlogSection from './sections/BlogSection/BlogSection';
import ContactCTA from './sections/ContactCTA/ContactCTA';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      {/* 1. Hero Slider - Full viewport with 3 slides */}
      <HeroSlider />

      {/* 2. About Section - Est. 1986, tilted image, years stat */}
      <AboutSection />

      {/* 3. Services Section - 4-col grid with icons */}
      <ServicesSection />

      {/* 4. Process Work - Accordion + rotated image */}
      {/* <ProcessSection /> */}

      {/* 5. Featured Projects - Filter tabs + 2-col grid */}
      <ProjectsSection />

      {/* 6. Testimonials - Large quote slider */}
      {/* <TestimonialsSection /> */}

      {/* 7. Marquee - Scrolling outlined text */}
      <MarqueeSection />

      {/* 8. Awards & Recognition - Dark section with award list */}
      <AwardsSection />

      {/* 9. Team - Circular portraits + stats */}
      {/* <TeamSection /> */}

      {/* 10. Latest Posts - Blog swiper */}
      <BlogSection />

      {/* 11. Contact CTA - Large email address */}
      {/* <ContactCTA /> */}

      {/* 12. Footer */}
      <Footer />
    </div>
  );
};

export default Home;

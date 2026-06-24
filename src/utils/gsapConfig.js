import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register standard GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Global default configuration
gsap.config({
  nullTargetWarn: false, // Suppress warnings about empty animation targets during transitions
});

export { gsap, ScrollTrigger };

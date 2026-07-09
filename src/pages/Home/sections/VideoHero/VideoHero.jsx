import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, ScrollTrigger } from '../../../../utils/gsapConfig';
import { MoveUpRight } from 'lucide-react';
import styles from './VideoHero.module.scss';
import heroVideo from '../../../../assets/images/video/magma-video.mp4';

const VideoHero = () => {
  const sectionRef   = useRef(null);
  const videoRef     = useRef(null);
  const containerRef = useRef(null);
  const titleRef     = useRef(null);
  const subtitleRef  = useRef(null);
  const descRef      = useRef(null);
  const ctaRef       = useRef(null);
  const taglineRef   = useRef(null);
  const overlayRef   = useRef(null);
  const progressBarRef = useRef(null);
  const scrollLineRef  = useRef(null);

  // RAF state – lives outside React to avoid stale closures
  const rafRef        = useRef(null);
  const targetTimeRef = useRef(0);   // where scroll wants us to be
  const currentTimeRef = useRef(0);  // where we actually are (lerped)

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;

    // ─── RAF lerp loop ────────────────────────────────────────────────────
    // Instead of jumping currentTime on every GSAP tick, we smoothly ease
    // toward the target using lerp each animation frame.  This prevents the
    // browser's seek throttle from causing stutter.
    const LERP = 0.12; // lower = smoother but laggier; 0.08–0.15 is the sweet spot

    const tick = () => {
      const duration = video.duration;
      if (duration && isFinite(duration)) {
        const diff = targetTimeRef.current - currentTimeRef.current;
        // Skip the lerp when the delta is tiny to avoid micro-seeks
        if (Math.abs(diff) > 0.001) {
          currentTimeRef.current += diff * LERP;
          // Use fastSeek where available (Firefox) – silently falls back
          if (video.fastSeek) {
            video.fastSeek(currentTimeRef.current);
          } else {
            video.currentTime = currentTimeRef.current;
          }
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    // ─── Wait for metadata before wiring ScrollTrigger ───────────────────
    const init = () => {
      const ctx = gsap.context(() => {

        // Main scroll scrub – just updates the targetTime, the RAF does the rest
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,           // small scrub = responsive; lerp handles the silk
          onUpdate: (self) => {
            const duration = video.duration;
            if (duration && isFinite(duration)) {
              targetTimeRef.current = duration * self.progress;
            }
            if (progressBarRef.current) {
              gsap.set(progressBarRef.current, {
                scaleX: self.progress,
                transformOrigin: 'left center',
              });
            }
          },
        });

        // ─── Entrance animation ─────────────────────────────────────────
        const entranceTl = gsap.timeline({ delay: 0.15 });

        entranceTl
          .fromTo(
            taglineRef.current,
            { opacity: 0, y: 18, letterSpacing: '8px' },
            { opacity: 1, y: 0, letterSpacing: '3px', duration: 1, ease: 'power3.out' }
          )
          .fromTo(
            titleRef.current.querySelectorAll('.word'),
            { opacity: 0, y: 70, rotateX: -25 },
            {
              opacity: 1, y: 0, rotateX: 0,
              duration: 1.1, ease: 'power4.out', stagger: 0.12,
            },
            '-=0.55'
          )
          .fromTo(
            descRef.current,
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
            '-=0.55'
          )
          .fromTo(
            ctaRef.current,
            { opacity: 0, scale: 0.88 },
            { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.6)' },
            '-=0.45'
          )
          .fromTo(
            scrollLineRef.current,
            { scaleY: 0, transformOrigin: 'top center' },
            { scaleY: 1, duration: 1.1, ease: 'power2.out' },
            '-=0.35'
          );

        // ─── Left panel: drift up + fade as the section ends ───────────
        gsap.to(subtitleRef.current, {
          y: -50,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: '75% top',    // starts fading out at 75% scroll
            end: '95% top',
            scrub: true,
          },
        });

      }, sectionRef);

      return () => ctx.revert();
    };

    let cleanup;
    video.addEventListener('loadedmetadata', () => { cleanup = init(); });
    if (video.readyState >= 1) cleanup = init();

    return () => {
      cancelAnimationFrame(rafRef.current);
      if (cleanup) cleanup();
    };
  }, []);

  const titleWords = ['Crafted', 'From', 'Earth'];

  return (
    <div className={styles.videoHeroWrapper} ref={sectionRef}>
      <div className={styles.scrollContainer} ref={containerRef}>
        <div className={styles.stickyView}>

          {/* ─── VIDEO ─────────────────────────────────────────────── */}
          <div className={styles.videoWrap}>
            <video
              ref={videoRef}
              className={styles.video}
              src={heroVideo}
              muted
              playsInline
              preload="auto"
            />
            <div className={styles.videoOverlay} ref={overlayRef} />
          </div>

          {/* ─── LEFT CONTENT ────────────────────────────────────────── */}
          <div className={styles.leftContent} ref={subtitleRef}>

            <span className={styles.tagline} ref={taglineRef}>
              Stone &amp; Architecture Studio
            </span>

            <h1 className={styles.heroTitle} ref={titleRef}>
              {titleWords.map((w, i) => (
                <span key={i} className={`${styles.wordRow} word`}>{w}</span>
              ))}
            </h1>

            <p className={styles.heroDesc} ref={descRef}>
              We harness the raw beauty of natural stone to craft spaces that
              breathe with culture, permanence and purpose. Every surface tells
              the story of the earth it came from.
            </p>

            <Link to="/projects" className={styles.ctaBtn} ref={ctaRef}>
              Explore Our Work <MoveUpRight strokeWidth={0.75} size={18} />
            </Link>

            {/* <div className={styles.scrollHint}>
              <div className={styles.scrollLine} ref={scrollLineRef} />
              <span className={styles.scrollLabel}>Scroll to reveal</span>
            </div> */}
          </div>

          {/* ─── BOTTOM INFO BAR ───────────────────────────────────── */}
          {/* <div className={styles.infoBar}>
            <div className={styles.infoItem}>
              <span className={styles.infoNum}>38+</span>
              <span className={styles.infoLabel}>Years of Craftsmanship</span>
            </div>
            <div className={styles.infoDivider} />
            <div className={styles.infoItem}>
              <span className={styles.infoNum}>500+</span>
              <span className={styles.infoLabel}>Projects Completed</span>
            </div>
            <div className={styles.infoDivider} />
            <div className={styles.infoItem}>
              <span className={styles.infoNum}>12</span>
              <span className={styles.infoLabel}>Industry Awards</span>
            </div>

            <div className={styles.progressTrack}>
              <div className={styles.progressBar} ref={progressBarRef} />
            </div>
          </div> */}

          {/* <div className={styles.bottomCurve} /> */}
        </div>
      </div>
    </div>
  );
};

export default VideoHero;

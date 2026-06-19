import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

function Banner() {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const easePremium = [0.22, 1, 0.36, 1];

  // ---- Framer Motion variants for the realistic 3D book ----
  const rigVariants = {
    idle: {
      rotateY: -20,
      rotateX: 8,
      y: shouldReduceMotion ? 0 : [0, -10, 0],
      transition: shouldReduceMotion
        ? { duration: 0.01 }
        : {
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 0.8, ease: easePremium },
            rotateX: { duration: 0.8, ease: easePremium },
          },
    },
    open: {
      rotateY: -6,
      rotateX: -3,
      y: -22,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.9, ease: easePremium },
    },
  };

  // Cover now swings to -178deg so it lies almost completely flat open
  const coverVariants = {
    closed: { rotateY: 0, transition: { duration: shouldReduceMotion ? 0.2 : 0.7, ease: easePremium } },
    open: {
      rotateY: -178,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.95, ease: easePremium, delay: shouldReduceMotion ? 0 : 0.05 },
    },
  };

  // Pages fan out to nearly flat too, staggered slightly behind the cover
  const pageVariants = {
    closed: { rotateY: 0, transition: { duration: shouldReduceMotion ? 0.2 : 0.45, ease: easePremium } },
    open: (i) => ({
      rotateY: -172 + i * 4,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.8,
        ease: easePremium,
        delay: shouldReduceMotion ? 0 : 0.16 + i * 0.09,
      },
    }),
  };

  const spreadVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1, transition: { duration: shouldReduceMotion ? 0.2 : 0.6, delay: shouldReduceMotion ? 0 : 0.45 } },
  };

  const glowVariants = {
    idle: { opacity: 0.5, scale: 1 },
    open: { opacity: 0.95, scale: 1.3 },
  };

  const burstVariants = {
    closed: { opacity: 0, scale: 0.6 },
    open: { opacity: 0.85, scale: 1.15, transition: { duration: shouldReduceMotion ? 0.2 : 0.8, delay: shouldReduceMotion ? 0 : 0.55 } },
  };

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      <style>{`
        .banner-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a1a 0%, #0f0520 40%, #0a0a1a 100%);
          display: flex;
          align-items: center;
          overflow: hidden;
          position: relative;
          padding-top: 80px;
        }
        .banner-bg-orb-1 {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%);
          top: -100px;
          left: -200px;
          pointer-events: none;
          animation: pulse-orb 6s ease-in-out infinite;
        }
        .banner-bg-orb-2 {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%);
          bottom: -100px;
          right: -100px;
          pointer-events: none;
          animation: pulse-orb 8s ease-in-out infinite reverse;
        }
        .banner-bg-orb-3 {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          pointer-events: none;
          animation: pulse-orb 10s ease-in-out infinite;
        }
        @keyframes pulse-orb {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.7; }
        }
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .banner-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .banner-left {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .banner-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(168,85,247,0.12);
          border: 1px solid rgba(168,85,247,0.3);
          color: #c084fc;
          padding: 0.4rem 1rem;
          border-radius: 100px;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          width: fit-content;
        }
        .banner-eyebrow-dot {
          width: 6px;
          height: 6px;
          background: #c084fc;
          border-radius: 50%;
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .banner-headline {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          line-height: 1.1;
          color: #fff;
          letter-spacing: -2px;
        }
        .banner-headline .gradient-word {
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }
        .banner-desc {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          max-width: 480px;
        }
        .banner-email-row {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          flex-wrap: wrap;
        }
        .email-input-wrap {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          padding: 0 1.2rem;
          gap: 10px;
          flex: 1;
          min-width: 220px;
          transition: all 0.3s;
        }
        .email-input-wrap:focus-within {
          border-color: rgba(168,85,247,0.5);
          background: rgba(168,85,247,0.08);
          box-shadow: 0 0 0 3px rgba(168,85,247,0.12);
        }
        .email-input-wrap svg {
          color: rgba(255,255,255,0.3);
          flex-shrink: 0;
        }
        .email-input-wrap input {
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          font-size: 0.92rem;
          padding: 0.85rem 0;
          width: 100%;
        }
        .email-input-wrap input::placeholder { color: rgba(255,255,255,0.3); }
        .btn-primary {
          background: linear-gradient(135deg, #a855f7, #ec4899);
          color: #fff;
          border: none;
          padding: 0.85rem 1.8rem;
          border-radius: 14px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(168,85,247,0.4);
          letter-spacing: 0.02em;
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(168,85,247,0.6);
        }
        .banner-stats {
          display: flex;
          gap: 2.5rem;
          margin-top: 0.5rem;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .stat-value {
          font-size: 1.6rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: -1px;
        }
        .stat-label {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          align-self: center;
        }

        /* ===================================================
           Right: Realistic 3D Hardcover Book — Yellow Leather
           =================================================== */
        .banner-right {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .book-scene {
          width: 320px;
          height: 400px;
          position: relative;
        }

        /* Ambient light pool beneath the book — now warm gold */
        .book-ambient-glow {
          position: absolute;
          width: 260px;
          height: 130px;
          left: 50%;
          bottom: 46px;
          transform: translateX(-50%);
          background: radial-gradient(ellipse at center, rgba(255,196,64,0.6) 0%, rgba(250,170,30,0.25) 45%, transparent 75%);
          filter: blur(20px);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .book-perspective {
          position: absolute;
          top: 48%;
          left: 50%;
          width: 210px;
          height: 280px;
          transform: translate(-50%, -50%);
          perspective: 1300px;
          cursor: pointer;
          z-index: 1;
        }
        .book-perspective:focus-visible {
          outline: 2px solid rgba(250,180,40,0.6);
          outline-offset: 6px;
          border-radius: 8px;
        }

        .book-rig {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          will-change: transform;
        }

        /* Inner two-page spread, revealed once the cover opens */
        .book-spread {
          position: absolute;
          left: 18px;
          top: 0;
          width: 165px;
          height: 100%;
          border-radius: 2px 6px 6px 2px;
          background: linear-gradient(90deg, #efe6cf 0%, #e7dcc0 50%, #efe6cf 100%);
          overflow: hidden;
          z-index: 1;
        }
        .spread-gutter {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(90deg, transparent 44%, rgba(70,48,24,0.4) 50%, transparent 56%);
        }
        .spread-lines {
          position: absolute;
          top: 18%;
          bottom: 18%;
          width: 38%;
          background-image: repeating-linear-gradient(180deg, rgba(70,48,24,0.16) 0 2px, transparent 2px 11px);
        }
        .spread-lines-left { left: 10%; }
        .spread-lines-right { right: 10%; }

        /* Golden light burst rising from the open pages */
        .page-glow-burst {
          position: absolute;
          top: -30%;
          left: 50%;
          width: 220px;
          height: 220px;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(255,236,170,0.95) 0%, rgba(250,180,40,0.5) 35%, transparent 70%);
          mix-blend-mode: screen;
          pointer-events: none;
        }
        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #fff3cf;
          box-shadow: 0 0 6px 2px rgba(255,221,130,0.9);
          animation: twinkle 2.4s ease-in-out infinite;
        }
        .sparkle-1 { top: 14%; left: 30%; animation-delay: 0s; }
        .sparkle-2 { top: 8%; left: 58%; animation-delay: 0.6s; }
        .sparkle-3 { top: 22%; left: 72%; animation-delay: 1.2s; }
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.6); }
          50% { opacity: 1; transform: scale(1); }
        }

        /* Static shell: spine + page-block edge (always present, gives the book its thickness) */
        .book-shell {
          position: absolute;
          inset: 0;
          z-index: 2;
        }
        .book-spine {
          position: absolute;
          left: 0;
          top: 0;
          width: 18px;
          height: 100%;
          border-radius: 4px 0 0 4px;
          background: linear-gradient(90deg, #8a5a1e 0%, #6b4214 55%, #4a2d0c 100%);
          box-shadow: inset -3px 0 6px rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          padding: 14px 0;
        }
        .spine-band {
          width: 70%;
          height: 2px;
          background: linear-gradient(90deg, rgba(255,221,140,0.6), rgba(255,221,140,0.15));
          border-radius: 1px;
        }
        .book-pages-edge {
          position: absolute;
          right: 0;
          top: 0;
          width: 27px;
          height: 100%;
          border-radius: 0 8px 8px 2px;
          background: repeating-linear-gradient(180deg, #f1e6cb 0 1.5px, #d9c89e 1.5px 3px);
          box-shadow:
            inset 4px 0 8px rgba(60,42,20,0.35),
            2px 0 10px rgba(0,0,0,0.35);
        }
        .book-pages-edge::after {
          content: '';
          position: absolute;
          right: 0;
          top: 2%;
          bottom: 2%;
          width: 2px;
          background: linear-gradient(180deg, rgba(212,175,98,0.8), rgba(212,175,98,0.2));
        }

        /* Turning pages */
        .turn-page {
          position: absolute;
          left: 18px;
          top: 0;
          width: 163px;
          height: 100%;
          transform-origin: 0% 50%;
          background: linear-gradient(100deg, #f7f0dd 0%, #ece1c4 55%, #d6c59c 100%);
          border-radius: 1px 8px 8px 1px;
          box-shadow:
            inset -10px 0 16px -8px rgba(110,90,55,0.5),
            2px 4px 12px rgba(0,0,0,0.35);
          backface-visibility: visible;
        }

        /* Front cover — yellow leather hardcover */
        .front-cover {
          position: absolute;
          left: 18px;
          top: 0;
          width: 165px;
          height: 100%;
          transform-origin: 0% 50%;
          border-radius: 1px 8px 8px 1px;
          background:
            radial-gradient(120% 90% at 20% 10%, rgba(255,238,180,0.55) 0%, transparent 55%),
            repeating-linear-gradient(125deg, rgba(120,75,15,0.10) 0px, rgba(120,75,15,0.10) 2px, transparent 2px, transparent 5px),
            linear-gradient(160deg, #f3c33d 0%, #e3a829 28%, #c8841a 60%, #a8680f 85%, #8c5309 100%);
          box-shadow:
            inset 0 0 30px rgba(90,55,10,0.45),
            inset 0 0 3px rgba(255,245,210,0.4),
            0 18px 50px rgba(250,180,40,0.45),
            0 6px 18px rgba(0,0,0,0.5);
          z-index: 8;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 1.4rem;
          overflow: hidden;
        }
        .front-cover::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 50%);
        }
        .front-cover::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 12% 8%, rgba(60,35,5,0.35) 0%, transparent 3%),
            radial-gradient(circle at 80% 18%, rgba(60,35,5,0.3) 0%, transparent 2.5%),
            radial-gradient(circle at 30% 85%, rgba(60,35,5,0.3) 0%, transparent 3%),
            radial-gradient(circle at 70% 70%, rgba(60,35,5,0.25) 0%, transparent 2%);
          mix-blend-mode: multiply;
          pointer-events: none;
        }
        .cover-frame {
          position: absolute;
          inset: 14px;
          border: 1.5px solid rgba(120,75,15,0.55);
          border-radius: 3px;
          box-shadow: inset 0 0 0 1px rgba(255,238,180,0.35);
        }
        .cover-title-text {
          position: relative;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #4a2e06;
          text-align: center;
          letter-spacing: 0.01em;
          line-height: 1.3;
          text-shadow: 0 1px 0 rgba(255,238,180,0.5), 0 -1px 1px rgba(0,0,0,0.25);
        }
        .cover-author-text {
          position: relative;
          font-size: 0.7rem;
          color: rgba(90,58,12,0.85);
          text-align: center;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        @media (max-width: 480px) {
          .book-scene { transform: scale(0.82); }
        }
        @media (prefers-reduced-motion: reduce) {
          .sparkle { animation: none; opacity: 0.6; }
        }

        @media (max-width: 900px) {
          .banner-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
          .banner-eyebrow { margin: 0 auto; }
          .banner-desc { margin: 0 auto; }
          .banner-stats { justify-content: center; }
          .banner-email-row { justify-content: center; }
          .banner-right { order: -1; }
        }
      `}</style>

      <section className="banner-section">
        <div className="banner-bg-orb-1"></div>
        <div className="banner-bg-orb-2"></div>
        <div className="banner-bg-orb-3"></div>
        <div className="grid-overlay"></div>

        <div className="banner-container">
          {/* Left Content */}
          <div className="banner-left">
            <div className="banner-eyebrow">
              <span className="banner-eyebrow-dot"></span>
              #1 Online Book Platform
            </div>

            <h1 className="banner-headline">
              Discover Your Next<br />
              <span className="gradient-word">Favourite Book</span><br />
              Today
            </h1>

            <p className="banner-desc">
              Explore thousands of titles across every genre. From timeless classics to brand-new releases — your next great read is just a search away.
            </p>

            <div className="banner-email-row">
              <div className="email-input-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="email" placeholder="Enter your email address" />
              </div>
              <button className="btn-primary">Get Started →</button>
            </div>

            <div className="banner-stats">
              <div className="stat-item">
                <span className="stat-value">50K+</span>
                <span className="stat-label">Books</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">200+</span>
                <span className="stat-label">Genres</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">1M+</span>
                <span className="stat-label">Readers</span>
              </div>
            </div>
          </div>

          {/* Right: Realistic 3D Hardcover Book */}
          <div className="banner-right">
            <div className="book-scene">
              <motion.div
                className="book-ambient-glow"
                variants={glowVariants}
                animate={isOpen ? "open" : "idle"}
                transition={{ duration: 0.9, ease: easePremium }}
              />

              <div
                className="book-perspective"
                role="button"
                tabIndex={0}
                aria-pressed={isOpen}
                aria-label="Open the featured book"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                onClick={toggleOpen}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleOpen();
                  }
                }}
              >
                <motion.div
                  className="book-rig"
                  variants={rigVariants}
                  animate={isOpen ? "open" : "idle"}
                >
                  {/* Inner page spread, revealed as the cover opens */}
                  <motion.div className="book-spread" variants={spreadVariants} animate={isOpen ? "open" : "closed"}>
                    <div className="spread-gutter" />
                    <div className="spread-lines spread-lines-left" />
                    <div className="spread-lines spread-lines-right" />
                    <motion.div className="page-glow-burst" variants={burstVariants} animate={isOpen ? "open" : "closed"} />
                    <span className="sparkle sparkle-1" />
                    <span className="sparkle sparkle-2" />
                    <span className="sparkle sparkle-3" />
                  </motion.div>

                  {/* Spine + page-block edge — gives the book its real thickness */}
                  <div className="book-shell">
                    <div className="book-spine">
                      <span className="spine-band" />
                      <span className="spine-band" />
                      <span className="spine-band" />
                      <span className="spine-band" />
                      <span className="spine-band" />
                    </div>
                    <div className="book-pages-edge" />
                  </div>

                  {/* Turning pages */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="turn-page"
                      style={{ zIndex: 6 - i }}
                      custom={i}
                      variants={pageVariants}
                      animate={isOpen ? "open" : "closed"}
                    />
                  ))}

                  {/* Front cover */}
                  <motion.div className="front-cover" variants={coverVariants} animate={isOpen ? "open" : "closed"}>
                    <div className="cover-frame" />
                    <div className="cover-title-text">The Art of Reading</div>
                    <div className="cover-author-text">BookStore Premium</div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
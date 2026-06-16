import React, { useEffect, useRef } from "react";

function Banner() {
  const floatingRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    const animate = () => {
      angle += 0.4;
      if (floatingRef.current) {
        floatingRef.current.style.transform = `
          perspective(1000px)
          rotateY(${Math.sin(angle * Math.PI / 180) * 12}deg)
          rotateX(${Math.cos(angle * Math.PI / 180) * 6}deg)
          translateY(${Math.sin(angle * 2 * Math.PI / 180) * 10}px)
        `;
      }
      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, []);

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
        /* Right: 3D Book Stack */
        .banner-right {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .book-3d-scene {
          width: 320px;
          height: 400px;
          position: relative;
        }
        .book-3d-wrapper {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          transition: transform 0.1s linear;
        }
        .book-3d {
          width: 220px;
          height: 300px;
          position: relative;
          transform-style: preserve-3d;
        }
        .book-face {
          position: absolute;
          inset: 0;
          border-radius: 4px 16px 16px 4px;
          background: linear-gradient(145deg, #1a1a3e 0%, #2d1b69 40%, #1a1a3e 100%);
          border: 1px solid rgba(168,85,247,0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 2rem;
          box-shadow:
            inset -4px 0 20px rgba(0,0,0,0.3),
            0 20px 60px rgba(168,85,247,0.3),
            0 4px 20px rgba(0,0,0,0.5);
          overflow: hidden;
        }
        .book-face::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(168,85,247,0.2) 0%, transparent 60%);
          border-radius: inherit;
        }
        .book-face::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 12px;
          height: 100%;
          background: linear-gradient(90deg, rgba(0,0,0,0.4), rgba(0,0,0,0.1));
          border-radius: 4px 0 0 4px;
        }
        .book-title-text {
          font-size: 1.1rem;
          font-weight: 800;
          color: #fff;
          text-align: center;
          letter-spacing: -0.5px;
          z-index: 1;
        }
        .book-author-text {
          font-size: 0.75rem;
          color: rgba(168,85,247,0.9);
          text-align: center;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          z-index: 1;
        }
        .book-icon-large {
          font-size: 3rem;
          z-index: 1;
        }
        .book-lines {
          width: 80%;
          z-index: 1;
        }
        .book-line {
          height: 2px;
          background: rgba(255,255,255,0.15);
          border-radius: 2px;
          margin-bottom: 8px;
        }
        .book-line:last-child { width: 60%; }
        /* Floating mini books */
        .mini-book {
          position: absolute;
          width: 70px;
          height: 95px;
          border-radius: 3px 10px 10px 3px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }
        .mini-book-1 {
          background: linear-gradient(135deg, #1e3a5f, #0f4c81);
          top: 20px; right: 0;
          animation: float1 4s ease-in-out infinite;
        }
        .mini-book-2 {
          background: linear-gradient(135deg, #3d1a78, #6b21a8);
          bottom: 30px; left: -10px;
          animation: float2 5s ease-in-out infinite;
        }
        .mini-book-3 {
          background: linear-gradient(135deg, #7c2d12, #c2410c);
          bottom: 10px; right: 20px;
          animation: float3 3.5s ease-in-out infinite;
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(-12px) rotate(-5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(5deg); }
          50% { transform: translateY(-8px) rotate(8deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-15px) rotate(-6deg); }
        }
        .glow-ring {
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          border: 1px solid rgba(168,85,247,0.2);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: ring-spin 20s linear infinite;
        }
        .glow-ring-2 {
          width: 350px;
          height: 350px;
          border-color: rgba(236,72,153,0.1);
          animation-duration: 30s;
          animation-direction: reverse;
        }
        @keyframes ring-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
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

          {/* Right: 3D Book Scene */}
          <div className="banner-right">
            <div className="book-3d-scene">
              <div className="glow-ring"></div>
              <div className="glow-ring glow-ring-2"></div>

              <div className="book-3d-wrapper" ref={floatingRef}>
                <div className="book-3d">
                  <div className="book-face">
                    <span className="book-icon-large">📖</span>
                    <div className="book-title-text">The Art of Reading</div>
                    <div className="book-author-text">BookStore Premium</div>
                    <div className="book-lines">
                      <div className="book-line"></div>
                      <div className="book-line"></div>
                      <div className="book-line"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mini-book mini-book-1">📘</div>
              <div className="mini-book mini-book-2">📗</div>
              <div className="mini-book mini-book-3">📕</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
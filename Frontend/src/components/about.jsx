import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function useOnScreen(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, options);
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
    // eslint-disable-next-line
  }, []);
  return [ref, visible];
}

function Counter({ end, suffix = "", duration = 1800, visible }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };
    requestAnimationFrame(step);
    // eslint-disable-next-line
  }, [visible]);
  return <>{count.toLocaleString()}{suffix}</>;
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useOnScreen();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}s, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function About() {
  const [statsRef, statsVisible] = useOnScreen({ threshold: 0.3 });

  const stats = [
    { end: 50, suffix: "K+", label: "Books Available" },
    { end: 1000, suffix: "K+", label: "Happy Readers" },
    { end: 200, suffix: "+", label: "Genres Covered" },
    { end: 12, suffix: "", label: "Years of Trust" },
  ];

  const timeline = [
    { year: "2014", title: "The Idea", desc: "Started in a small apartment with a single shelf and a big dream — make great books reachable for everyone." },
    { year: "2017", title: "Going Digital", desc: "Launched our first online store, bringing thousands of titles to readers beyond our city." },
    { year: "2020", title: "Free Library", desc: "Introduced a growing collection of completely free books to remove cost as a barrier to reading." },
    { year: "2024", title: "1 Million Readers", desc: "Crossed a major milestone — a community of readers spanning over 40 countries." },
  ];

  const values = [
    {  title: "Curated Quality", desc: "Every title is vetted by our editorial team before it reaches the shelf." },
    {  title: "Access for All", desc: "We believe great stories shouldn't be locked behind a high price tag." },
    {  title: "Instant Delivery", desc: "Digital books delivered the moment you hit purchase, no waiting." },
    {  title: "Author First", desc: "Fair royalties and real partnerships with the writers we publish." },
  ];

  const team = [
    { name: "Sumit", role: "Founder & CEO", color: "#a855f7" },
    { name: "Krishna", role: "Head of Curation",   color: "#ec4899" },
    { name: "Rahul", role: "Lead Designer",  color: "#f59e0b" },
    { name: "Ayush", role: "Engineering Lead",  color: "#10b981" },
  ];

  return (
    <>
      <Navbar />
      <style>{`
        .about-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #0a0a1a 0%, #0f0520 30%, #0a0a1a 70%, #0a0a1a 100%);
          padding-top: 90px;
          overflow: hidden;
        }
        .about-hero {
          max-width: 1300px;
          margin: 0 auto;
          padding: 3rem 2rem 5rem;
          text-align: center;
          position: relative;
        }
        .about-hero::before {
          content: '';
          position: absolute;
          width: 700px; height: 350px;
          background: radial-gradient(ellipse, rgba(168,85,247,0.13) 0%, transparent 70%);
          top: -50px; left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }
        .about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(168,85,247,0.1);
          border: 1px solid rgba(168,85,247,0.25);
          color: #c084fc;
          padding: 0.35rem 1rem;
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
          position: relative;
          z-index: 2;
        }
        .about-title {
          font-size: clamp(2.2rem, 5.5vw, 4rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: -2px;
          line-height: 1.1;
          margin-bottom: 1.25rem;
          position: relative;
          z-index: 2;
        }
        .about-title span {
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 60%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .about-desc {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.45);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
          position: relative;
          z-index: 2;
        }
        /* Stats */
        .stats-section {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem 5rem;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          background: linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 2.5rem 2rem;
        }
        .stat-box {
          text-align: center;
          position: relative;
        }
        .stat-box:not(:last-child)::after {
          content: '';
          position: absolute;
          right: -0.75rem;
          top: 10%;
          height: 80%;
          width: 1px;
          background: rgba(255,255,255,0.08);
        }
        .stat-num {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -1.5px;
        }
        .stat-lbl {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.4);
          margin-top: 0.4rem;
          letter-spacing: 0.03em;
        }
        /* Story split */
        .story-section {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem 6rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .story-visual {
          position: relative;
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .story-card {
          position: absolute;
          width: 230px;
          height: 300px;
          border-radius: 20px;
          background: linear-gradient(145deg, #1a1a3e, #2d1b69);
          border: 1px solid rgba(168,85,247,0.3);
          box-shadow: 0 30px 70px rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
        }
        .story-card-1 {
          transform: rotate(-8deg) translateX(-50px);
          z-index: 1;
          opacity: 0.7;
        }
        .story-card-2 {
          z-index: 2;
        }
        .story-card-3 {
          transform: rotate(8deg) translateX(50px);
          z-index: 1;
          opacity: 0.7;
        }
        .story-content h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: -1.5px;
          margin-bottom: 1.25rem;
          line-height: 1.2;
        }
        .story-content h2 span {
          background: linear-gradient(135deg, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .story-content p {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.85;
          margin-bottom: 1rem;
        }
        /* Timeline */
        .timeline-section {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem 6rem;
        }
        .section-heading-center {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .section-heading-center h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: -1.5px;
          margin-bottom: 0.75rem;
        }
        .section-heading-center h2 span {
          background: linear-gradient(135deg, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .section-heading-center p {
          color: rgba(255,255,255,0.4);
          font-size: 0.95rem;
          max-width: 450px;
          margin: 0 auto;
        }
        .timeline-track {
          position: relative;
          padding-left: 2.5rem;
        }
        .timeline-track::before {
          content: '';
          position: absolute;
          left: 8px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: linear-gradient(180deg, #a855f7, #ec4899, #f59e0b);
        }
        .timeline-entry {
          position: relative;
          padding-bottom: 3rem;
        }
        .timeline-entry:last-child { padding-bottom: 0; }
        .timeline-dot {
          position: absolute;
          left: -2.5rem;
          top: 4px;
          width: 18px; height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          box-shadow: 0 0 0 4px rgba(168,85,247,0.15), 0 4px 15px rgba(168,85,247,0.5);
        }
        .timeline-year {
          font-size: 0.8rem;
          font-weight: 800;
          color: #c084fc;
          letter-spacing: 0.1em;
          margin-bottom: 0.3rem;
        }
        .timeline-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.5rem;
        }
        .timeline-desc {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.42);
          line-height: 1.7;
          max-width: 540px;
        }
        /* Values */
        .values-section {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem 6rem;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .value-card {
          background: linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .value-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(168,85,247,0.35);
          box-shadow: 0 25px 50px rgba(0,0,0,0.4);
        }
        .value-icon {
          font-size: 2.2rem;
          margin-bottom: 1rem;
        }
        .value-title {
          font-size: 1.02rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.5rem;
        }
        .value-desc {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.65;
        }
        /* Team */
        .team-section {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem 6rem;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .team-card {
          background: linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .team-card:hover {
          transform: translateY(-6px);
          border-color: rgba(168,85,247,0.3);
        }
        .team-avatar {
          width: 80px; height: 80px;
          border-radius: 50%;
          margin: 0 auto 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.2rem;
          border: 2px solid;
        }
        .team-name {
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.2rem;
        }
        .team-role {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
        }
        /* CTA */
        .about-cta {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem 6rem;
        }
        .cta-box {
          background: linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.12));
          border: 1px solid rgba(168,85,247,0.3);
          border-radius: 28px;
          padding: 3.5rem 2.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-box::before {
          content: '';
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%);
          top: -150px; right: -100px;
          pointer-events: none;
        }
        .cta-box h2 {
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: -1px;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }
        .cta-box p {
          color: rgba(255,255,255,0.5);
          margin-bottom: 1.75rem;
          font-size: 0.95rem;
          position: relative;
          z-index: 2;
        }
        .cta-btn {
          display: inline-block;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          color: #fff;
          text-decoration: none;
          padding: 0.9rem 2.2rem;
          border-radius: 14px;
          font-weight: 700;
          font-size: 0.95rem;
          box-shadow: 0 4px 20px rgba(168,85,247,0.4);
          transition: all 0.3s;
          position: relative;
          z-index: 2;
        }
        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(168,85,247,0.6);
        }
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .stat-box:nth-child(2)::after { display: none; }
          .story-section { grid-template-columns: 1fr; }
          .story-visual { height: 320px; margin-bottom: 2rem; order: -1; }
          .values-grid { grid-template-columns: repeat(2, 1fr); }
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div className="about-page">
        {/* Hero */}
        <div className="about-hero">
          <Reveal>
            <div className="about-eyebrow">✨ Our Story</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="about-title">
              Built by Readers,<br />
              <span>For Readers</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="about-desc">
              We started BookStore with one belief: everyone deserves easy access to stories that move them. Twelve years later, that belief still drives everything we build.
            </p>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="stats-section">
          <Reveal>
            <div className="stats-grid" ref={statsRef}>
              {stats.map((s) => (
                <div className="stat-box" key={s.label}>
                  <div className="stat-num">
                    <Counter end={s.end} suffix={s.suffix} visible={statsVisible} />
                  </div>
                  <div className="stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Story */}
        <div className="story-section">
          <Reveal>
            <div className="story-visual">
              <div className="story-card story-card-1"></div>
              <div className="story-card story-card-2"></div>
              <div className="story-card story-card-3"></div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="story-content">
              <h2>From One Shelf to <span>a Million Readers</span></h2>
              <p>
                What began as a single bookshelf in a small apartment has grown into a home for over a million readers across 40+ countries. We curate every title with the same care we had on day one.
              </p>
              <p>
                Our mission hasn't changed: make great books easy to find, easy to afford, and easy to fall in love with — whether you're discovering your first novel or your five-hundredth.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="timeline-section">
          <Reveal>
            <div className="section-heading-center">
              <h2>Our <span>Journey</span></h2>
              <p>Key milestones that shaped who we are today</p>
            </div>
          </Reveal>
          <div className="timeline-track">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.1}>
                <div className="timeline-entry">
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">{t.year}</div>
                  <div className="timeline-title">{t.title}</div>
                  <div className="timeline-desc">{t.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="values-section">
          <Reveal>
            <div className="section-heading-center">
              <h2>What We <span>Stand For</span></h2>
              <p>The principles behind every decision we make</p>
            </div>
          </Reveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="value-card">
                  <div className="value-icon">{v.icon}</div>
                  <div className="value-title">{v.title}</div>
                  <div className="value-desc">{v.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="team-section">
          <Reveal>
            <div className="section-heading-center">
              <h2>Meet the <span>Team</span></h2>
              <p>The people building your reading experience</p>
            </div>
          </Reveal>
          <div className="team-grid">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="team-card">
                  <div
                    className="team-avatar"
                    style={{ background: `${t.color}22`, borderColor: `${t.color}55` }}
                  >
                    {t.emoji}
                  </div>
                  <div className="team-name">{t.name}</div>
                  <div className="team-role">{t.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta">
          <Reveal>
            <div className="cta-box">
              <h2>Ready to find your next read?</h2>
              <p>Join over a million readers exploring our library today.</p>
              <Link to="/course" className="cta-btn">Browse Books →</Link>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}

export default About;
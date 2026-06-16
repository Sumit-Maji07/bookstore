import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from "./Cards";

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");

  const CustomPrevArrow = ({ onClick }) => (
    <button className="custom-arrow custom-prev" onClick={onClick}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="m15 18-6-6 6-6"/>
      </svg>
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button className="custom-arrow custom-next" onClick={onClick}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <>
      <style>{`
        .freebook-section {
          background: linear-gradient(180deg, #0a0a1a 0%, #0f0520 50%, #0a0a1a 100%);
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }
        .freebook-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(168,85,247,0.4), transparent);
        }
        .freebook-section::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(236,72,153,0.4), transparent);
        }
        .freebook-bg-blob {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%);
          right: -100px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }
        .freebook-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }
        .freebook-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 3rem;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .freebook-header-left {}
        .freebook-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.3);
          color: #34d399;
          padding: 0.35rem 1rem;
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .freebook-title {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: -1.5px;
          line-height: 1.1;
        }
        .freebook-title span {
          background: linear-gradient(135deg, #10b981, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .freebook-desc {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.45);
          margin-top: 0.75rem;
          max-width: 450px;
          line-height: 1.7;
        }
        .freebook-view-all {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #a855f7;
          font-weight: 600;
          font-size: 0.88rem;
          text-decoration: none;
          border: 1px solid rgba(168,85,247,0.3);
          padding: 0.6rem 1.2rem;
          border-radius: 10px;
          transition: all 0.3s;
          white-space: nowrap;
        }
        .freebook-view-all:hover {
          background: rgba(168,85,247,0.1);
          border-color: rgba(168,85,247,0.6);
          transform: translateX(3px);
        }
        /* Slick overrides */
        .freebook-slider .slick-track { display: flex !important; align-items: stretch; }
        .freebook-slider .slick-slide { height: inherit !important; }
        .freebook-slider .slick-slide > div { height: 100%; }
        .custom-dots { margin-top: 2rem !important; }
        .custom-dots li button:before {
          color: rgba(168,85,247,0.4) !important;
          font-size: 8px !important;
        }
        .custom-dots li.slick-active button:before {
          color: #a855f7 !important;
        }
        .custom-arrow {
          position: absolute;
          top: -60px;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          z-index: 10;
        }
        .custom-arrow:hover {
          background: rgba(168,85,247,0.2);
          border-color: rgba(168,85,247,0.5);
          color: #fff;
        }
        .custom-prev { right: 56px; }
        .custom-next { right: 8px; }
        .freebook-slider-wrap { position: relative; }
        .free-count-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.25);
          color: #34d399;
          padding: 0.3rem 0.9rem;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 600;
          margin-top: 0.75rem;
        }
      `}</style>

      <section className="freebook-section">
        <div className="freebook-bg-blob"></div>
        <div className="freebook-container">
          <div className="freebook-header">
            <div className="freebook-header-left">
              <div className="freebook-eyebrow">🎁 Zero Cost</div>
              <h2 className="freebook-title">
                Free to Read,<br />
                <span>Free to Keep</span>
              </h2>
              <p className="freebook-desc">
                Start reading instantly — no credit card needed. Our curated free library grows every week.
              </p>
              <div className="free-count-badge">
                ✓ {filterData.length} free books available right now
              </div>
            </div>
            <a href="/course" className="freebook-view-all">
              Browse All Free Books →
            </a>
          </div>

          <div className="freebook-slider-wrap">
            <Slider {...settings} className="freebook-slider">
              {filterData.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default Freebook;
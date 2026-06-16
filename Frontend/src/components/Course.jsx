import React, { useState } from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Course() {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", ...new Set(list.map((item) => item.category))];
  const filtered = activeFilter === "All" ? list : list.filter((i) => i.category === activeFilter);

  return (
    <>
      <style>{`
        .course-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #0a0a1a 0%, #080818 100%);
          padding-top: 90px;
          padding-bottom: 5rem;
        }
        .course-hero {
          max-width: 1400px;
          margin: 0 auto;
          padding: 3rem 2rem 2rem;
          text-align: center;
          position: relative;
        }
        .course-hero::before {
          content: '';
          position: absolute;
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(168,85,247,0.12) 0%, transparent 70%);
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }
        .course-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 2rem;
          padding: 0.5rem 1rem;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          transition: all 0.3s;
          background: rgba(255,255,255,0.04);
        }
        .course-back-btn:hover {
          color: #fff;
          border-color: rgba(168,85,247,0.4);
          background: rgba(168,85,247,0.08);
        }
        .course-eyebrow {
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
        }
        .course-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: -2px;
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        .course-title span {
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 60%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .course-subtitle {
          font-size: 1rem;
          color: rgba(255,255,255,0.45);
          max-width: 520px;
          margin: 0 auto 2.5rem;
          line-height: 1.75;
        }
        /* Filters */
        .filter-row {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }
        .filter-btn {
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.55);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.25s;
          letter-spacing: 0.02em;
        }
        .filter-btn:hover {
          color: #fff;
          border-color: rgba(168,85,247,0.4);
          background: rgba(168,85,247,0.08);
        }
        .filter-btn.active {
          background: linear-gradient(135deg, #a855f7, #ec4899);
          border-color: transparent;
          color: #fff;
          box-shadow: 0 4px 15px rgba(168,85,247,0.4);
        }
        /* Results info */
        .results-info {
          text-align: center;
          color: rgba(255,255,255,0.3);
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
          letter-spacing: 0.02em;
        }
        .results-info span {
          color: rgba(168,85,247,0.9);
          font-weight: 600;
        }
        /* Grid */
        .course-grid {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1rem;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 0;
        }
        /* Divider line */
        .section-divider {
          max-width: 1400px;
          margin: 0 auto 2rem;
          padding: 0 2rem;
        }
        .divider-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent);
        }
      `}</style>

      <div className="course-page">
        <div className="course-hero">
          <Link to="/" className="course-back-btn">
            ← Back to Home
          </Link>

          <div>
            <div className="course-eyebrow">📚 Full Library</div>
          </div>

          <h1 className="course-title">
            Explore Our<br />
            <span>Complete Collection</span>
          </h1>

          <p className="course-subtitle">
            Thousands of titles handpicked for learners, dreamers, and curious minds. Find your next obsession.
          </p>

          {/* Filters */}
          <div className="filter-row">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="section-divider">
          <div className="divider-line"></div>
        </div>

        <div className="results-info">
          Showing <span>{filtered.length}</span> books
          {activeFilter !== "All" && <> in <span>{activeFilter}</span></>}
        </div>

        <div className="course-grid">
          {filtered.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
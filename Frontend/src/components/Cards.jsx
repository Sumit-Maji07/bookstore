import React, { useRef } from "react";

function Cards({ item }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -10;
    const rotateY = ((x - cx) / cx) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    card.style.transition = "transform 0.1s linear";
    const shine = card.querySelector(".card-shine");
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.12) 0%, transparent 60%)`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    card.style.transition = "transform 0.5s cubic-bezier(0.4,0,0.2,1)";
    const shine = card.querySelector(".card-shine");
    if (shine) shine.style.background = "none";
  };

  const categoryColors = {
    Free: { bg: "rgba(16,185,129,0.15)", border: "rgba(16,185,129,0.4)", text: "#34d399" },
    Fiction: { bg: "rgba(168,85,247,0.15)", border: "rgba(168,85,247,0.4)", text: "#c084fc" },
    "Non-Fiction": { bg: "rgba(245,158,11,0.15)", border: "rgba(245,158,11,0.4)", text: "#fbbf24" },
    default: { bg: "rgba(236,72,153,0.15)", border: "rgba(236,72,153,0.4)", text: "#f472b6" },
  };
  const cat = categoryColors[item.category] || categoryColors.default;

  return (
    <>
      <style>{`
        .book-card-outer {
          padding: 1rem;
        }
        .book-card {
          background: linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          will-change: transform;
          transform-style: preserve-3d;
        }
        .book-card:hover {
          border-color: rgba(168,85,247,0.3);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(168,85,247,0.2);
        }
        .card-shine {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          pointer-events: none;
          z-index: 3;
        }
        .card-img-wrap {
          position: relative;
          height: 240px;
          overflow: hidden;
          background: linear-gradient(135deg, #1a1a3e 0%, #2d1b69 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(10,10,26,0.95) 100%);
          z-index: 1;
        }
        .card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
          filter: brightness(0.85);
        }
        .book-card:hover .card-img-wrap img {
          transform: scale(1.08);
          filter: brightness(1);
        }
        .card-img-fallback {
          font-size: 5rem;
          z-index: 0;
          filter: drop-shadow(0 4px 20px rgba(168,85,247,0.4));
        }
        .category-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 2;
          padding: 0.3rem 0.8rem;
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 1px solid;
        }
        .card-body {
          padding: 1.25rem;
          position: relative;
          z-index: 2;
        }
        .card-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.4rem;
          letter-spacing: -0.3px;
          line-height: 1.35;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-desc {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.6;
          margin-bottom: 1.1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .card-price {
          font-size: 1.25rem;
          font-weight: 800;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
        }
        .card-price.free {
          background: linear-gradient(135deg, #10b981, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .buy-btn {
          background: linear-gradient(135deg, #a855f7, #ec4899);
          color: #fff;
          border: none;
          padding: 0.55rem 1.1rem;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.82rem;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(168,85,247,0.35);
          letter-spacing: 0.02em;
        }
        .buy-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(168,85,247,0.55);
        }
        .buy-btn.free-btn {
          background: linear-gradient(135deg, #10b981, #059669);
          box-shadow: 0 4px 12px rgba(16,185,129,0.35);
        }
        .buy-btn.free-btn:hover {
          box-shadow: 0 8px 20px rgba(16,185,129,0.55);
        }
        .card-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 0.8rem;
        }
        .star { color: #f59e0b; font-size: 0.75rem; }
        .rating-count { font-size: 0.75rem; color: rgba(255,255,255,0.35); margin-left: 4px; }
      `}</style>

      <div className="book-card-outer">
        <div
          className="book-card"
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-shine"></div>

          {/* Image Area */}
          <div className="card-img-wrap">
            {item.image ? (
              <img src={item.image} alt={item.name} />
            ) : (
              <span className="card-img-fallback">📚</span>
            )}
            <div
              className="category-badge"
              style={{ background: cat.bg, borderColor: cat.border, color: cat.text }}
            >
              {item.category}
            </div>
          </div>

          {/* Body */}
          <div className="card-body">
            <div className="card-name">{item.name}</div>
            <div className="card-rating">
              {"★★★★☆".split("").map((s, i) => (
                <span key={i} className="star">{s}</span>
              ))}
              <span className="rating-count">(128)</span>
            </div>
            <div className="card-desc">{item.title}</div>
            <div className="card-footer">
              <span className={`card-price ${item.category === "Free" ? "free" : ""}`}>
                {item.category === "Free" ? "Free" : `$${item.price}`}
              </span>
              <button className={`buy-btn ${item.category === "Free" ? "free-btn" : ""}`}>
                {item.category === "Free" ? "Read Free" : "Buy Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
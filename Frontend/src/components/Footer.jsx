import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Explore: ["Home", "Browse Books", "Free Books", "New Arrivals", "Bestsellers"],
    Company: ["About Us", "Careers", "Press Kit", "Blog", "Partners"],
    Support: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  const socials = [
    {
      label: "Twitter",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{`
        .footer-section {
          background: #05050f;
          border-top: 1px solid rgba(168,85,247,0.15);
          padding: 5rem 0 2rem;
          position: relative;
          overflow: hidden;
        }
        .footer-top-glow {
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 200px;
          background: radial-gradient(ellipse, rgba(168,85,247,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        .footer-brand {}
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1.25rem;
        }
        .footer-logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          box-shadow: 0 4px 15px rgba(168,85,247,0.35);
        }
        .footer-logo-name {
          font-size: 1.3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-brand-desc {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.38);
          line-height: 1.75;
          max-width: 280px;
          margin-bottom: 1.5rem;
        }
        .footer-newsletter {
          display: flex;
          gap: 0.5rem;
        }
        .footer-newsletter input {
          flex: 1;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 0.65rem 1rem;
          color: #fff;
          font-size: 0.85rem;
          outline: none;
          transition: all 0.3s;
        }
        .footer-newsletter input::placeholder { color: rgba(255,255,255,0.25); }
        .footer-newsletter input:focus {
          border-color: rgba(168,85,247,0.5);
          background: rgba(168,85,247,0.08);
        }
        .footer-newsletter button {
          background: linear-gradient(135deg, #a855f7, #ec4899);
          border: none;
          border-radius: 10px;
          padding: 0.65rem 1.1rem;
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.3s;
        }
        .footer-newsletter button:hover {
          box-shadow: 0 4px 15px rgba(168,85,247,0.5);
          transform: translateY(-1px);
        }
        .footer-col-title {
          font-size: 0.78rem;
          font-weight: 700;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }
        .footer-col-links {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .footer-col-links a {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.38);
          text-decoration: none;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .footer-col-links a:hover {
          color: rgba(255,255,255,0.9);
          transform: translateX(3px);
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .footer-copy {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.28);
        }
        .footer-copy span {
          color: rgba(168,85,247,0.7);
        }
        .footer-socials {
          display: flex;
          gap: 0.5rem;
        }
        .social-btn {
          width: 38px;
          height: 38px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          color: rgba(255,255,255,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          cursor: pointer;
          text-decoration: none;
        }
        .social-btn:hover {
          background: rgba(168,85,247,0.15);
          border-color: rgba(168,85,247,0.4);
          color: #c084fc;
          transform: translateY(-3px);
        }
        .footer-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.25);
        }
        .footer-badge-dot {
          width: 6px;
          height: 6px;
          background: #10b981;
          border-radius: 50%;
          animation: badge-pulse 2s ease-in-out infinite;
        }
        @keyframes badge-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
          50% { opacity: 0.8; box-shadow: 0 0 0 4px rgba(16,185,129,0); }
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-brand { grid-column: auto; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <footer className="footer-section">
        <div className="footer-top-glow"></div>
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">📚</div>
                <span className="footer-logo-name">BookStore</span>
              </div>
              <p className="footer-brand-desc">
                Your gateway to thousands of books across every genre. Read more, explore more, discover more — every single day.
              </p>
              <div className="footer-newsletter">
                <input type="email" placeholder="Get weekly picks in your inbox" />
                <button>Subscribe</button>
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(links).map(([col, items]) => (
              <div key={col}>
                <div className="footer-col-title">{col}</div>
                <div className="footer-col-links">
                  {items.map((item) => (
                    <a key={item} href="#">{item}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            <div className="footer-copy">
              © {currentYear} <span>BookStore</span>. All rights reserved.
            </div>

            <div className="footer-badge">
              <span className="footer-badge-dot"></span>
              All systems operational
            </div>

            <div className="footer-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="social-btn" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
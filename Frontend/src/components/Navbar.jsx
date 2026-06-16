import React, { useEffect, useState } from "react";
import Login from "./Login";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/course" },
    { label: "Contact", href: "#contact" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .navbar-wrapper.scrolled {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          background: rgba(10, 10, 20, 0.85);
          border-bottom: 1px solid rgba(168, 85, 247, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(168, 85, 247, 0.1);
        }
        .navbar-wrapper.dark.scrolled {
          background: rgba(5, 5, 15, 0.9);
        }
        .navbar-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          cursor: pointer;
        }
        .logo-icon {
          width: 38px;
          height: 38px;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          box-shadow: 0 4px 15px rgba(168, 85, 247, 0.5);
          transform-style: preserve-3d;
          transform: perspective(500px) rotateY(0deg);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .logo:hover .logo-icon {
          transform: perspective(500px) rotateY(20deg) rotateX(10deg);
          box-shadow: 0 8px 25px rgba(168, 85, 247, 0.7);
        }
        .logo-text {
          font-size: 1.4rem;
          font-weight: 800;
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links li a {
          position: relative;
          padding: 0.5rem 1rem;
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          transition: color 0.3s;
          border-radius: 8px;
        }
        .nav-links li a::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 60%;
          height: 2px;
          background: linear-gradient(90deg, #a855f7, #ec4899);
          border-radius: 2px;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-links li a:hover {
          color: #fff;
        }
        .nav-links li a:hover::after {
          transform: translateX(-50%) scaleX(1);
        }
        .search-bar {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 0.45rem 1rem;
          gap: 8px;
          transition: all 0.3s;
        }
        .search-bar:focus-within {
          background: rgba(168,85,247,0.1);
          border-color: rgba(168,85,247,0.5);
          box-shadow: 0 0 0 3px rgba(168,85,247,0.15);
        }
        .search-bar input {
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          font-size: 0.85rem;
          width: 140px;
        }
        .search-bar input::placeholder {
          color: rgba(255,255,255,0.35);
        }
        .search-icon {
          color: rgba(255,255,255,0.4);
          flex-shrink: 0;
        }
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .theme-btn {
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 10px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        .theme-btn:hover {
          background: rgba(168,85,247,0.2);
          border-color: rgba(168,85,247,0.4);
          color: #fff;
          transform: rotate(20deg);
        }
        .login-btn {
          background: linear-gradient(135deg, #a855f7, #ec4899);
          color: #fff;
          border: none;
          padding: 0.55rem 1.4rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(168,85,247,0.35);
          letter-spacing: 0.02em;
        }
        .login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(168,85,247,0.55);
        }
        .login-btn:active {
          transform: translateY(0);
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px;
          border-radius: 8px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .hamburger span {
          width: 22px;
          height: 2px;
          background: rgba(255,255,255,0.8);
          border-radius: 2px;
          transition: all 0.3s;
        }
        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(10, 10, 25, 0.97);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(168,85,247,0.2);
          padding: 1.5rem 2rem;
          flex-direction: column;
          gap: 0.5rem;
        }
        .mobile-menu.open {
          display: flex;
        }
        .mobile-menu a {
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          font-weight: 500;
          transition: all 0.2s;
        }
        .mobile-menu a:hover {
          background: rgba(168,85,247,0.15);
          color: #fff;
          padding-left: 1.5rem;
        }
        @media (max-width: 768px) {
          .hamburger { display: flex; }
          .nav-links { display: none; }
          .search-bar { display: none; }
          .navbar-inner { padding: 0 1rem; }
        }
      `}</style>

      <nav className={`navbar-wrapper ${sticky ? "scrolled" : ""} ${theme === "dark" ? "dark" : ""}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <a href="/" className="logo">
            <div className="logo-icon">📚</div>
            <span className="logo-text">BookStore</span>
          </a>

          {/* Center Nav Links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="nav-right">
            {/* Search */}
            <div className="search-bar">
              <svg className="search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input type="text" placeholder="Search books..." />
            </div>

            {/* Theme Toggle */}
            <button className="theme-btn" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label="Toggle theme">
              {theme === "light" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5ZM5.64,17l-.71.71a1,1,0,0,0,1.41,1.41l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,1.41-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41-1.41Z"/>
                </svg>
              )}
            </button>

            {/* Login Button */}
            <button
              className="login-btn"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </button>
            <Login />

            {/* Hamburger */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.5rem" }}>
            <input
              type="text"
              placeholder="Search books..."
              style={{
                flex: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "10px", padding: "0.6rem 1rem", color: "#fff", outline: "none", fontSize: "0.9rem"
              }}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
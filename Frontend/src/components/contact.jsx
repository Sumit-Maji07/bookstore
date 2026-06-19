import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      console.log(data);
      setLoading(false);
      setSent(true);
      reset();
      setTimeout(() => setSent(false), 4000);
    }, 1400);
  };

  const contactMethods = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: "Email Us",
      value: "hello@bookstore.com",
      sub: "Replies within 24 hours",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      label: "Call Us",
      value: "+91 9876543222",
      sub: "Mon–Fri, 9am–6pm EST",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: "Visit Us",
      value: "Durgapur, West Bengal",
      sub: "Open Mon–Sat, 10am–8pm",
    },
  ];

  const faqs = [
    { q: "How fast do you respond?", a: "We typically reply within 24 hours on business days." },
    { q: "Do you offer bulk orders?", a: "Yes — reach out and our team will set up a custom plan." },
    { q: "Can I request a book?", a: "Absolutely, use the form and pick 'Book Request' as your topic." },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Navbar />
      <style>{`
        .contact-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #0a0a1a 0%, #0f0520 35%, #0a0a1a 100%);
          padding-top: 90px;
          padding-bottom: 6rem;
          position: relative;
          overflow: hidden;
        }
        .contact-orb-1 {
          position: absolute;
          width: 550px; height: 550px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%);
          top: -150px; right: -150px;
          pointer-events: none;
        }
        .contact-orb-2 {
          position: absolute;
          width: 450px; height: 450px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%);
          bottom: 10%; left: -150px;
          pointer-events: none;
        }
        .contact-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }
        .contact-hero {
          text-align: center;
          margin-bottom: 4rem;
        }
        .contact-eyebrow {
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
        .contact-title {
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: -2px;
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        .contact-title span {
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 60%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .contact-desc {
          font-size: 1rem;
          color: rgba(255,255,255,0.45);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.75;
        }
        /* Method cards */
        .method-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 4rem;
        }
        .method-card {
          background: linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 1.75rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          cursor: default;
          transform-style: preserve-3d;
        }
        .method-card:hover {
          transform: translateY(-6px);
          border-color: rgba(168,85,247,0.35);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(168,85,247,0.15);
        }
        .method-icon {
          width: 46px; height: 46px;
          flex-shrink: 0;
          border-radius: 13px;
          background: linear-gradient(135deg, rgba(168,85,247,0.18), rgba(236,72,153,0.18));
          border: 1px solid rgba(168,85,247,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c084fc;
        }
        .method-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.3rem;
        }
        .method-value {
          font-size: 1.02rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.2rem;
        }
        .method-sub {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.35);
        }
        /* Main grid: form + side */
        .contact-main-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        .contact-form-card {
          background: linear-gradient(145deg, rgba(20,10,40,0.6) 0%, rgba(12,5,25,0.7) 100%);
          border: 1px solid rgba(168,85,247,0.18);
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 30px 70px rgba(0,0,0,0.4);
        }
        .form-card-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.4rem;
          letter-spacing: -0.5px;
        }
        .form-card-sub {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.4);
          margin-bottom: 1.75rem;
        }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .c-form-group { margin-bottom: 1.15rem; }
        .c-form-label {
          display: block;
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(255,255,255,0.55);
          margin-bottom: 0.45rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .c-input, .c-textarea, .c-select {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 0.8rem 1rem;
          color: #fff;
          font-size: 0.9rem;
          outline: none;
          transition: all 0.3s;
          box-sizing: border-box;
          font-family: inherit;
        }
        .c-textarea { resize: vertical; min-height: 110px; }
        .c-input::placeholder, .c-textarea::placeholder { color: rgba(255,255,255,0.25); }
        .c-input:focus, .c-textarea:focus, .c-select:focus {
          border-color: rgba(168,85,247,0.5);
          background: rgba(168,85,247,0.07);
          box-shadow: 0 0 0 3px rgba(168,85,247,0.12);
        }
        .c-input.error, .c-textarea.error { border-color: rgba(239,68,68,0.5); background: rgba(239,68,68,0.05); }
        .c-error { font-size: 0.76rem; color: #f87171; margin-top: 0.35rem; }
        .c-select option { background: #15082b; }
        .topic-chips { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .topic-chip {
          padding: 0.5rem 1rem;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.55);
          font-size: 0.82rem;
          cursor: pointer;
          transition: all 0.25s;
        }
        .topic-chip.active {
          background: linear-gradient(135deg, #a855f7, #ec4899);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(168,85,247,0.4);
        }
        .submit-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .c-submit-btn {
          flex: 1;
          padding: 0.9rem;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          border: none;
          border-radius: 14px;
          color: #fff;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(168,85,247,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .c-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(168,85,247,0.6);
        }
        .c-submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .c-spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .sent-banner {
          background: rgba(16,185,129,0.12);
          border: 1px solid rgba(16,185,129,0.35);
          color: #34d399;
          padding: 0.85rem 1.2rem;
          border-radius: 12px;
          font-size: 0.88rem;
          font-weight: 600;
          margin-top: 1.25rem;
          display: flex;
          align-items: center;
          gap: 8px;
          animation: slide-in 0.3s ease;
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Side: 3D card + faq */
        .contact-side { display: flex; flex-direction: column; gap: 1.5rem; }
        .map-card-3d {
          position: relative;
          height: 220px;
          border-radius: 22px;
          overflow: hidden;
          background: linear-gradient(135deg, #1a1a3e 0%, #2d1b69 100%);
          border: 1px solid rgba(168,85,247,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 25px 60px rgba(0,0,0,0.4);
        }
        .map-grid-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(168,85,247,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.15) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .map-pin {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .map-pin-icon {
          width: 50px; height: 50px;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(168,85,247,0.5);
          animation: pin-bounce 2.5s ease-in-out infinite;
        }
        .map-pin-icon span { transform: rotate(45deg); font-size: 1.3rem; }
        @keyframes pin-bounce {
          0%, 100% { transform: rotate(-45deg) translateY(0); }
          50% { transform: rotate(-45deg) translateY(-8px); }
        }
        .map-pin-text {
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          background: rgba(0,0,0,0.3);
          padding: 0.3rem 0.9rem;
          border-radius: 100px;
          backdrop-filter: blur(4px);
        }
        .faq-card {
          background: linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 1.75rem;
        }
        .faq-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1.1rem;
        }
        .faq-item {
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 0.9rem 0;
          cursor: pointer;
        }
        .faq-item:last-child { border-bottom: none; padding-bottom: 0; }
        .faq-item:first-child { padding-top: 0; }
        .faq-q {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
          gap: 1rem;
        }
        .faq-q-arrow {
          flex-shrink: 0;
          transition: transform 0.3s;
          color: #c084fc;
        }
        .faq-q-arrow.open { transform: rotate(180deg); }
        .faq-a {
          font-size: 0.83rem;
          color: rgba(255,255,255,0.42);
          line-height: 1.65;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .faq-a.open {
          max-height: 200px;
          margin-top: 0.6rem;
        }
        .social-strip {
          display: flex;
          gap: 0.6rem;
        }
        .social-strip a {
          flex: 1;
          height: 44px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.5);
          transition: all 0.3s;
          text-decoration: none;
        }
        .social-strip a:hover {
          background: rgba(168,85,247,0.15);
          border-color: rgba(168,85,247,0.4);
          color: #c084fc;
          transform: translateY(-3px);
        }
        @media (max-width: 900px) {
          .method-row { grid-template-columns: 1fr; }
          .contact-main-grid { grid-template-columns: 1fr; }
          .form-row-2 { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="contact-page">
        <div className="contact-orb-1"></div>
        <div className="contact-orb-2"></div>

        <div className="contact-container">
          {/* Hero */}
          <div className="contact-hero">
            <div className="contact-eyebrow"> Get In Touch</div>
            <h1 className="contact-title">
              Let's Start a<br />
              <span>Conversation</span>
            </h1>
            <p className="contact-desc">
              Questions, feedback, or partnership ideas — our team reads every message and replies fast.
            </p>
          </div>

          {/* Method Cards */}
          <div className="method-row">
            {contactMethods.map((m) => (
              <div className="method-card" key={m.label}>
                <div className="method-icon">{m.icon}</div>
                <div>
                  <div className="method-label">{m.label}</div>
                  <div className="method-value">{m.value}</div>
                  <div className="method-sub">{m.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Grid */}
          <div className="contact-main-grid">
            {/* Form */}
            <div className="contact-form-card">
              <h2 className="form-card-title">Send us a message</h2>
              <p className="form-card-sub">Fill out the form and we'll get back within a day.</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row-2">
                  <div className="c-form-group">
                    <label className="c-form-label">Full Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      className={`c-input ${errors.name ? "error" : ""}`}
                      {...register("name", { required: true })}
                    />
                    {errors.name && <p className="c-error">⚠ Name is required</p>}
                  </div>
                  <div className="c-form-group">
                    <label className="c-form-label">Email Address</label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      className={`c-input ${errors.email ? "error" : ""}`}
                      {...register("email", { required: true })}
                    />
                    {errors.email && <p className="c-error">⚠ Email is required</p>}
                  </div>
                </div>

                <div className="c-form-group">
                  <label className="c-form-label">Topic</label>
                  <select className="c-select" {...register("topic")}>
                    <option value="general">General Inquiry</option>
                    <option value="support">Order Support</option>
                    <option value="book-request">Book Request</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div className="c-form-group">
                  <label className="c-form-label">Message</label>
                  <textarea
                    placeholder="Tell us how we can help…"
                    className={`c-textarea ${errors.message ? "error" : ""}`}
                    {...register("message", { required: true })}
                  />
                  {errors.message && <p className="c-error">⚠ Message is required</p>}
                </div>

                <div className="submit-row">
                  <button type="submit" className="c-submit-btn" disabled={loading}>
                    {loading ? <><div className="c-spinner"></div> Sending…</> : "Send Message →"}
                  </button>
                </div>

                {sent && (
                  <div className="sent-banner">
                    ✓ Message sent! We'll be in touch within 24 hours.
                  </div>
                )}
              </form>
            </div>

            {/* Side */}
            <div className="contact-side">
              <div className="map-card-3d">
                <div className="map-grid-lines"></div>
                <div className="map-pin">
                  <div className="map-pin-icon"><span>📍</span></div>
                  <div className="map-pin-text">Durgapur, West Bengal</div>
                </div>
              </div>

              <div className="faq-card">
                <div className="faq-card-title">Quick Answers</div>
                {faqs.map((f, i) => (
                  <div className="faq-item" key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <div className="faq-q">
                      {f.q}
                      <svg className={`faq-q-arrow ${openFaq === i ? "open" : ""}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </div>
                    <div className={`faq-a ${openFaq === i ? "open" : ""}`}>{f.a}</div>
                  </div>
                ))}
              </div>

              <div className="social-strip">
                <a href="#" aria-label="Twitter">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" aria-label="Facebook">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
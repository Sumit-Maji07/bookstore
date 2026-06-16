import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      console.log(data);
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <style>{`
        .signup-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a1a 0%, #0f0520 50%, #0a0a1a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          position: relative;
          overflow: hidden;
        }
        .signup-bg-orb-1 {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%);
          top: -150px;
          left: -150px;
          pointer-events: none;
        }
        .signup-bg-orb-2 {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%);
          bottom: -150px;
          right: -150px;
          pointer-events: none;
        }
        .signup-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .signup-card {
          width: 100%;
          max-width: 480px;
          background: linear-gradient(145deg, rgba(20,10,40,0.96) 0%, rgba(12,5,25,0.98) 100%);
          border: 1px solid rgba(168,85,247,0.2);
          border-radius: 28px;
          padding: 3rem 2.5rem;
          position: relative;
          z-index: 2;
          box-shadow:
            0 40px 80px rgba(0,0,0,0.6),
            0 0 0 1px rgba(168,85,247,0.08),
            inset 0 1px 0 rgba(255,255,255,0.04);
        }
        .signup-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 500;
          margin-bottom: 2rem;
          transition: color 0.2s;
        }
        .signup-back:hover { color: rgba(255,255,255,0.8); }
        .signup-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1.75rem;
        }
        .signup-logo-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          box-shadow: 0 4px 16px rgba(168,85,247,0.45);
        }
        .signup-logo-name {
          font-size: 1.3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .signup-heading {
          font-size: 1.8rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: -1px;
          margin-bottom: 0.35rem;
        }
        .signup-subtext {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.38);
          margin-bottom: 2rem;
        }
        .perks-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .perk-chip {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.45);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 0.3rem 0.75rem;
          border-radius: 8px;
        }
        .perk-chip span:first-child { font-size: 0.9rem; }
        .s-form-group { margin-bottom: 1.2rem; }
        .s-form-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(255,255,255,0.55);
          margin-bottom: 0.45rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .s-input-wrap { position: relative; }
        .s-input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255,255,255,0.22);
          pointer-events: none;
        }
        .s-input {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 12px;
          padding: 0.85rem 1rem 0.85rem 2.8rem;
          color: #fff;
          font-size: 0.92rem;
          outline: none;
          transition: all 0.3s;
          box-sizing: border-box;
        }
        .s-input::placeholder { color: rgba(255,255,255,0.22); }
        .s-input:focus {
          border-color: rgba(168,85,247,0.5);
          background: rgba(168,85,247,0.07);
          box-shadow: 0 0 0 3px rgba(168,85,247,0.12);
        }
        .s-input.error {
          border-color: rgba(239,68,68,0.5);
          background: rgba(239,68,68,0.05);
        }
        .s-error {
          font-size: 0.77rem;
          color: #f87171;
          margin-top: 0.4rem;
        }
        .signup-submit-btn {
          width: 100%;
          padding: 0.95rem;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          border: none;
          border-radius: 14px;
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          margin-top: 0.75rem;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(168,85,247,0.4);
          letter-spacing: 0.02em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .signup-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(168,85,247,0.6);
        }
        .signup-submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .signup-footer {
          text-align: center;
          margin-top: 1.5rem;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.38);
        }
        .signup-footer button {
          background: none;
          border: none;
          color: #c084fc;
          font-weight: 600;
          cursor: pointer;
          font-size: inherit;
          transition: color 0.2s;
          padding: 0;
        }
        .signup-footer button:hover { color: #e879f9; }
        .s-spinner {
          width: 18px; height: 18px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <div className="signup-page">
        <div className="signup-bg-orb-1"></div>
        <div className="signup-bg-orb-2"></div>
        <div className="signup-grid"></div>

        <div className="signup-card">
          <Link to="/" className="signup-back">← Back to Home</Link>

          <div className="signup-logo">
            <div className="signup-logo-icon">📚</div>
            <span className="signup-logo-name">BookStore</span>
          </div>

          <h1 className="signup-heading">Create your account</h1>
          <p className="signup-subtext">Join over 1 million readers worldwide</p>

          <div className="perks-row">
            <div className="perk-chip"><span>🎁</span> Free books daily</div>
            <div className="perk-chip"><span>📖</span> Unlimited reading</div>
            <div className="perk-chip"><span>⚡</span> Instant access</div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className="s-form-group">
              <label className="s-form-label">Full Name</label>
              <div className="s-input-wrap">
                <span className="s-input-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Your full name"
                  className={`s-input ${errors.name ? "error" : ""}`}
                  {...register("name", { required: true })}
                />
              </div>
              {errors.name && <p className="s-error">⚠ Full name is required</p>}
            </div>

            {/* Email */}
            <div className="s-form-group">
              <label className="s-form-label">Email Address</label>
              <div className="s-input-wrap">
                <span className="s-input-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className={`s-input ${errors.email ? "error" : ""}`}
                  {...register("email", { required: true })}
                />
              </div>
              {errors.email && <p className="s-error">⚠ Email is required</p>}
            </div>

            {/* Password */}
            <div className="s-form-group">
              <label className="s-form-label">Password</label>
              <div className="s-input-wrap">
                <span className="s-input-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </span>
                <input
                  type="password"
                  placeholder="Create a strong password"
                  className={`s-input ${errors.password ? "error" : ""}`}
                  {...register("password", { required: true })}
                />
              </div>
              {errors.password && <p className="s-error">⚠ Password is required</p>}
            </div>

            <button type="submit" className="signup-submit-btn" disabled={loading}>
              {loading ? <><div className="s-spinner"></div> Creating account…</> : "Create Account →"}
            </button>
          </form>

          <div className="signup-footer">
            Already have an account?{" "}
            <button onClick={() => document.getElementById("my_modal_3").showModal()}>
              Sign in
            </button>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
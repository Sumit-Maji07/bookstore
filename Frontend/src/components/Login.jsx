import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
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
        .login-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: fade-in 0.2s ease;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .login-modal-box {
          width: 100%;
          max-width: 440px;
          background: linear-gradient(145deg, rgba(20,10,40,0.98) 0%, rgba(15,5,30,0.99) 100%);
          border: 1px solid rgba(168,85,247,0.2);
          border-radius: 24px;
          padding: 2.5rem;
          position: relative;
          box-shadow:
            0 40px 80px rgba(0,0,0,0.7),
            0 0 0 1px rgba(168,85,247,0.1),
            inset 0 1px 0 rgba(255,255,255,0.05);
          animation: slide-up 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .modal-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          width: 34px;
          height: 34px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          color: rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.2s;
          text-decoration: none;
        }
        .modal-close-btn:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
          border-color: rgba(255,255,255,0.2);
        }
        .login-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1.75rem;
        }
        .login-logo-icon {
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          box-shadow: 0 4px 15px rgba(168,85,247,0.4);
        }
        .login-logo-text {
          font-size: 1.3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .login-heading {
          font-size: 1.65rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.8px;
          margin-bottom: 0.4rem;
        }
        .login-subtext {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.4);
          margin-bottom: 2rem;
        }
        .form-group {
          margin-bottom: 1.25rem;
        }
        .form-label {
          display: block;
          font-size: 0.82rem;
          font-weight: 600;
          color: rgba(255,255,255,0.6);
          margin-bottom: 0.5rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .form-input-wrap {
          position: relative;
        }
        .form-input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255,255,255,0.25);
          pointer-events: none;
        }
        .form-input {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 0.85rem 1rem 0.85rem 2.8rem;
          color: #fff;
          font-size: 0.92rem;
          outline: none;
          transition: all 0.3s;
          box-sizing: border-box;
        }
        .form-input::placeholder { color: rgba(255,255,255,0.25); }
        .form-input:focus {
          border-color: rgba(168,85,247,0.5);
          background: rgba(168,85,247,0.07);
          box-shadow: 0 0 0 3px rgba(168,85,247,0.12);
        }
        .form-input.error {
          border-color: rgba(239,68,68,0.5);
          background: rgba(239,68,68,0.05);
        }
        .form-error {
          font-size: 0.78rem;
          color: #f87171;
          margin-top: 0.4rem;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .submit-btn {
          width: 100%;
          padding: 0.9rem;
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
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(168,85,247,0.6);
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .login-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 1.5rem 0;
        }
        .divider-l {
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.08);
        }
        .divider-text {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.25);
          white-space: nowrap;
        }
        .login-footer-text {
          text-align: center;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.4);
        }
        .login-footer-text a {
          color: #c084fc;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s;
        }
        .login-footer-text a:hover { color: #e879f9; }
        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <dialog id="my_modal_3" className="modal" style={{ background: "transparent", border: "none", padding: 0, maxWidth: "none", width: "100vw", height: "100vh", position: "fixed", inset: 0 }}>
        <div className="login-modal-backdrop" onClick={(e) => {
          if (e.target === e.currentTarget) document.getElementById("my_modal_3").close();
        }}>
          <div className="login-modal-box">
            {/* Close */}
            <button
              className="modal-close-btn"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            {/* Logo */}
            <div className="login-logo">
              <div className="login-logo-icon">📚</div>
              <span className="login-logo-text">BookStore</span>
            </div>

            <h2 className="login-heading">Welcome back</h2>
            <p className="login-subtext">Sign in to continue your reading journey</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div className="form-input-wrap">
                  <span className="form-input-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className={`form-input ${errors.email ? "error" : ""}`}
                    {...register("email", { required: true })}
                  />
                </div>
                {errors.email && <p className="form-error">⚠ Email is required</p>}
              </div>

              {/* Password */}
              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="form-input-wrap">
                  <span className="form-input-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </span>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className={`form-input ${errors.password ? "error" : ""}`}
                    {...register("password", { required: true })}
                  />
                </div>
                {errors.password && <p className="form-error">⚠ Password is required</p>}
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? <><div className="spinner"></div> Signing in…</> : "Sign In →"}
              </button>
            </form>

            <div className="login-divider">
              <div className="divider-l"></div>
              <span className="divider-text">New to BookStore?</span>
              <div className="divider-l"></div>
            </div>

            <p className="login-footer-text">
              <Link to="/signup" onClick={() => document.getElementById("my_modal_3").close()}>
                Create a free account →
              </Link>
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Login;
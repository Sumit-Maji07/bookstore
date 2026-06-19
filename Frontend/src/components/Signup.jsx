import { useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getPasswordStrength = (password) => {
  if (!password) {
    return { label: "Empty", color: "bg-slate-600", score: 0 };
  }
  const lengthScore = Math.min(password.length / 4, 1);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  const score = lengthScore + [hasUpper, hasNumber, hasSymbol].filter(Boolean).length * 0.25;
  if (score >= 2.25) {
    return { label: "Strong", color: "bg-fuchsia-500", score: 3 };
  }
  if (score >= 1.5) {
    return { label: "Good", color: "bg-violet-400", score: 2 };
  }
  return { label: "Weak", color: "bg-pink-500", score: 1 };
};

const containerVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const bookVariants = {
  rest: { rotateX: 18, rotateY: -18, y: 0, scale: 1 },
  hover: {
    rotateX: 21,
    rotateY: -12,
    y: -12,
    scale: 1.02,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

const coverVariants = {
  rest: { rotateY: 0 },
  hover: { rotateY: -42, transition: { type: "spring", stiffness: 90, damping: 16 } },
};

const pageStackVariants = {
  rest: { rotateY: -10, x: 0 },
  hover: { rotateY: -18, x: -6, transition: { duration: 0.55, ease: "easeOut" } },
};

const pageFlipVariants = {
  rest: { rotateY: -5, x: 0 },
  hover: {
    rotateY: [ -5, 4, -3, 2, -5 ],
    x: [ 0, -8, -4, -10, 0 ],
    transition: { duration: 2.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 },
  },
};

const BookScene = () => (
  <section className="relative flex items-center justify-center overflow-hidden rounded-[1.75rem] bg-[radial-gradient(circle_at_top,_rgba(148,76,255,0.18),transparent_35%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.12),transparent_40%)] p-6">
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_75%)]" />
    <div className="pointer-events-none absolute inset-x-0 bottom-8 h-28 rounded-full bg-violet-500/12 blur-3xl" />
    <div className="pointer-events-none absolute -left-12 top-10 h-24 w-24 rounded-full bg-fuchsia-400/10 blur-3xl" />
    <div className="pointer-events-none absolute right-6 bottom-16 h-32 w-32 rounded-full bg-violet-400/10 blur-3xl" />

    <motion.div style={{ perspective: 1400 }} className="relative w-full max-w-[340px] sm:max-w-[300px]">
      <motion.div variants={bookVariants} initial="rest" whileHover="hover" animate="rest" className="relative">
        <motion.div className="absolute inset-x-0 -bottom-4 h-12 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="absolute left-0 top-8 h-[calc(100%-4rem)] w-12 rounded-l-[2rem] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 shadow-inner" />

        <motion.div
          variants={pageStackVariants}
          className="absolute inset-y-10 right-6 w-20 rounded-r-[1.75rem] bg-gradient-to-r from-white/90 via-white/20 to-white/5 shadow-[0_30px_90px_rgba(255,255,255,0.08)]"
        >
          <div className="relative h-full overflow-hidden">
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className="absolute left-1 right-1 h-[1px] bg-slate-300/15"
                style={{ top: `${14 + index * 14}px` }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={pageFlipVariants}
          className="absolute inset-y-12 right-16 w-16 rounded-r-[1.5rem] bg-white/10 shadow-[0_24px_60px_rgba(255,255,255,0.08)]"
        />

        <motion.div
          variants={coverVariants}
          style={{ transformStyle: "preserve-3d", transformOrigin: "left center" }}
          className="relative z-30 h-[340px] rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#141528] via-[#0c0f1f] to-[#100f27] shadow-[0_40px_120px_rgba(0,0,0,0.44)]"
        >
          <div className="absolute inset-x-6 top-8 h-24 rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_75%)]" />
          <div className="absolute inset-x-6 bottom-10 h-24 rounded-[1.5rem] bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.16),transparent_75%)]" />
          <div className="absolute inset-x-8 top-16 h-4 rounded-full bg-white/5" />
          <div className="absolute right-8 top-20 h-4 w-16 rounded-full bg-white/5" />
          <div className="absolute inset-x-10 bottom-20 h-[2px] rounded-full bg-white/10" />
          <div className="absolute inset-x-10 top-28 flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-2 w-16 rounded-full bg-white/10" />
              <div className="h-2 w-10 rounded-full bg-white/10" />
            </div>
            <div className="h-10 w-10 rounded-2xl bg-white/10" />
          </div>
        </motion.div>

        <motion.div className="absolute inset-x-0 top-0 h-16 rounded-t-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_75%)]" />
      </motion.div>
    </motion.div>
  </section>
);

export default function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const emailValue = watch("email", "");
  const passwordValue = watch("password", "");
  const emailValid = useMemo(() => emailRegex.test(emailValue), [emailValue]);
  const passwordStrength = useMemo(() => getPasswordStrength(passwordValue), [passwordValue]);

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#04070f] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.18),transparent_30%)]" />
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-48 h-72 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.02),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_65%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf8,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22 opacity=%220.08%22%3E%3Cpath d=%22M40 0L0 40%22/%3E%3Cpath d=%22M0 0L40 40%22/%3E%3C/g%3E%3C/svg%3E')] opacity-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex min-h-screen w-full max-w-[1240px] items-center justify-center px-6 py-10"
      >
        <motion.div className="relative z-10 grid w-full gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-4 shadow-[0_40px_120px_rgba(4,7,15,0.55)] backdrop-blur-2xl md:grid-cols-[1.2fr_1fr] md:p-8">
          <section className="relative flex flex-col justify-between gap-8 rounded-[1.75rem] bg-white/5 p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] sm:p-10">
            <Link
              to="/"
              className="group absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-slate-200 transition hover:-rotate-12 hover:border-fuchsia-400/50 hover:bg-slate-800/90"
              aria-label="Close signup modal"
            >
              <span className="text-xl leading-none">✕</span>
            </Link>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300/80">Premium reading access</p>
              <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Start Your Reading Journey</h1>
              <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">Join thousands of readers discovering their next favorite book with elegant tools, curated recommendations, and effortless access.</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <motion.button
                type="button"
                whileHover={{ y: -2, scale: 1.01 }}
                className="flex items-center justify-center gap-3 rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-3 text-sm text-slate-200 transition hover:border-fuchsia-400/50 hover:bg-slate-900/90"
              >
                <span className="h-5 w-5 rounded-full bg-slate-700 ring-1 ring-white/10" />
                Sign up with Apple
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ y: -2, scale: 1.01 }}
                className="flex items-center justify-center gap-3 rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-3 text-sm text-slate-200 transition hover:border-violet-400/50 hover:bg-slate-900/90"
              >
                <span className="h-5 w-5 rounded-full bg-white" />
                Sign up with Google
              </motion.button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-5">
                <div className="relative">
                  <input
                    id="fullname"
                    type="text"
                    placeholder=" "
                    {...register("fullname", { required: true })}
                    className="peer h-14 w-full rounded-[1.5rem] border border-white/10 bg-slate-950/80 px-5 text-sm text-white outline-none transition focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/20"
                    aria-invalid={errors.fullname ? "true" : "false"}
                  />
                  <label
                    htmlFor="fullname"
                    className="pointer-events-none absolute left-5 top-4 origin-left text-sm text-slate-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:text-fuchsia-300"
                  >
                    Full name
                  </label>
                  {errors.fullname && (
                    <p className="mt-2 text-xs text-pink-400">This field is required.</p>
                  )}
                </div>

                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    placeholder=" "
                    {...register("email", { required: true })}
                    className="peer h-14 w-full rounded-[1.5rem] border border-white/10 bg-slate-950/80 px-5 pr-14 text-sm text-white outline-none transition focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/20"
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  <label
                    htmlFor="email"
                    className="pointer-events-none absolute left-5 top-4 origin-left text-sm text-slate-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:text-fuchsia-300"
                  >
                    Email address
                  </label>
                  <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-lg text-emerald-400">
                    {emailValid && emailValue ? "✓" : ""}
                  </span>
                  {errors.email && (
                    <p className="mt-2 text-xs text-pink-400">This field is required.</p>
                  )}
                </div>

                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    placeholder=" "
                    {...register("password", { required: true })}
                    className="peer h-14 w-full rounded-[1.5rem] border border-white/10 bg-slate-950/80 px-5 text-sm text-white outline-none transition focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/20"
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                  <label
                    htmlFor="password"
                    className="pointer-events-none absolute left-5 top-4 origin-left text-sm text-slate-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:text-fuchsia-300"
                  >
                    Create password
                  </label>
                  {errors.password && (
                    <p className="mt-2 text-xs text-pink-400">This field is required.</p>
                  )}
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-4 text-sm">
                  <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.26em] text-slate-400">
                    <span>Password strength</span>
                    <span className="font-semibold text-white">{passwordStrength.label}</span>
                  </div>
                  <div className="flex h-2 items-center gap-2">
                    {[1, 2, 3].map((level) => (
                      <span
                        key={level}
                        className={`h-2 flex-1 rounded-full ${passwordStrength.score >= level ? passwordStrength.color : "bg-white/10"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-pink-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(236,72,153,0.24)] transition"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <span className="relative">Create premium account</span>
              </motion.button>

              <p className="text-center text-sm leading-6 text-slate-400">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-fuchsia-300 transition hover:text-violet-200">
                  Log in
                </Link>
              </p>
            </form>
          </section>

          <BookScene />
        </motion.div>
      </motion.div>
    </div>
  );
}

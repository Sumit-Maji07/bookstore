import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Logged in Successfully");

          document.getElementById("my_modal_3").close();

          setTimeout(() => {
            localStorage.setItem(
              "Users",
              JSON.stringify(res.data.user)
            );
            window.location.reload();
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="
            modal-box
            relative
            max-w-lg
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-slate-900/90
            backdrop-blur-xl
            text-white
            shadow-[0_0_80px_rgba(168,85,247,0.15)]
          "
        >
          {/* Background Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-56 h-56 bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-pink-500/20 rounded-full blur-3xl"></div>
          </div>

          {/* Close Button - FIXED */}
          <motion.button
            type="button"
            whileHover={{ rotate: 90, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              document.getElementById("my_modal_3").close()
            }
            className="
              absolute
              right-4
              top-4
              z-50
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-slate-300
              hover:bg-white/10
              transition
            "
          >
            ✕
          </motion.button>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative z-10"
          >
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold">
                Welcome Back
              </h2>

              <p className="mt-2 text-slate-400">
                Continue your reading journey and discover your
                next favorite book.
              </p>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  py-3
                  hover:bg-white/10
                  transition
                "
              >
                Google
              </button>

              <button
                type="button"
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  py-3
                  hover:bg-white/10
                  transition
                "
              >
                GitHub
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-white/10"></div>

              <span className="px-4 text-xs uppercase tracking-wider text-slate-500">
                or continue
              </span>

              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="mb-2 block text-sm text-slate-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-3
                  outline-none
                  transition-all
                  placeholder:text-slate-500
                  focus:border-pink-500
                  focus:ring-2
                  focus:ring-pink-500/30
                "
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-400">
                  Email is required
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="mb-2 block text-sm text-slate-300">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-3
                  outline-none
                  transition-all
                  placeholder:text-slate-500
                  focus:border-pink-500
                  focus:ring-2
                  focus:ring-pink-500/30
                "
              />

              {errors.password && (
                <p className="mt-2 text-sm text-red-400">
                  Password is required
                </p>
              )}
            </div>

            {/* Login Button */}
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0px 0px 35px rgba(236,72,153,0.45)",
              }}
              whileTap={{ scale: 0.97 }}
              className="
                w-full
                rounded-xl
                bg-gradient-to-r
                from-pink-500
                via-fuchsia-500
                to-purple-600
                py-3
                font-semibold
                text-white
                shadow-lg
              "
            >
              Login
            </motion.button>

            {/* Footer */}
            <div className="mt-6 text-center">
              <span className="text-slate-400">
                Don't have an account?
              </span>

              <Link
                to="/signup"
                className="
                  ml-2
                  font-medium
                  text-pink-400
                  hover:text-pink-300
                  transition
                "
              >
                Sign Up
              </Link>
            </div>
          </form>
        </motion.div>
      </dialog>
    </div>
  );
}

export default Login;
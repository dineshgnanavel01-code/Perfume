import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login functionality will be connected to your backend later.");
  };

  return (
    <div className="min-h-screen bg-[#f7f3ed] px-5 py-10">
      <div className="mx-auto flex min-h-[90vh] max-w-full items-center justify-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid w-full overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2"
        >
          <div className="relative hidden min-h-[650px] lg:block">
            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85"
              alt="Luxury perfume"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-12 left-10 right-10 text-white">
              <p className="text-xs uppercase tracking-[0.35em] text-[#d7b66a]">
                ÉLIXIRÉ
              </p>

              <h2 className="mt-4 font-serif text-5xl leading-tight">
                Your signature
                <br />
                awaits.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
                Enter the world of ÉLIXIRÉ and discover fragrances
                crafted for unforgettable moments.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center p-7 sm:p-12 lg:p-16">
            <div className="w-full max-w-md">

              <Link
                to="/"
                className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#71675d] hover:text-[#b18a45]"
              >
                <ArrowLeft size={15} />
                Back to Home
              </Link>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#b18a45]">
                  Welcome Back
                </p>

                <h1 className="mt-3 font-serif text-5xl text-[#171513]">
                  Sign In
                </h1>

                <p className="mt-3 text-sm leading-6 text-[#81776d]">
                  Sign in to access your ÉLIXIRÉ account.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-5"
              >

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#51483f]">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a9085]"
                    />

                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-black/10 bg-[#faf8f4] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#b18a45]"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-xs uppercase tracking-[0.15em] text-[#51483f]">
                      Password
                    </label>

                    <a
                      href="#"
                      className="text-xs text-[#b18a45] hover:underline"
                    >
                      Forgot Password?
                    </a>
                  </div>

                  <div className="relative">
                    <Lock
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a9085]"
                    />

                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Enter your password"
                      className="w-full rounded-xl border border-black/10 bg-[#faf8f4] py-3.5 pl-11 pr-12 text-sm outline-none transition focus:border-[#b18a45]"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#81776d] hover:text-[#171513]"
                    >
                      {showPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#171513] py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#b18a45]"
                >
                  Login
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-[#81776d]">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-[#b18a45] hover:underline"
                >
                  Create Account
                </Link>
              </p>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
import { useState } from "react";
import {ArrowLeft,Eye,EyeOff,Lock,Mail,User,} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account creation will be connected to your backend later.");
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

          <div className="relative hidden min-h-[700px] lg:block">
            <img
              src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=85"
              alt="ÉLIXIRÉ perfume"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute bottom-12 left-10 right-10 text-white">
              <p className="text-xs uppercase tracking-[0.35em] text-[#d7b66a]">
                ÉLIXIRÉ
              </p>

              <h2 className="mt-4 font-serif text-5xl leading-tight">
                Discover your
                <br />
                signature scent.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
                Join our fragrance community and explore the art
                of fine perfumery.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center p-7 sm:p-12 lg:p-16">
            <div className="w-full max-w-md">

              <Link
                to="/"
                className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#71675d] hover:text-[#b18a45]"
              >
                <ArrowLeft size={15} />
                Back to Home
              </Link>

              <p className="text-xs uppercase tracking-[0.3em] text-[#b18a45]">
                Join ÉLIXIRÉ
              </p>

              <h1 className="mt-3 font-serif text-5xl text-[#171513]">
                Create Account
              </h1>

              <p className="mt-3 text-sm leading-6 text-[#81776d]">
                Create your account and begin your fragrance journey.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-4"
              >

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#51483f]">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a9085]"
                    />

                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-black/10 bg-[#faf8f4] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#b18a45]"
                    />
                  </div>
                </div>

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
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#51483f]">
                    Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a9085]"
                    />

                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      minLength={6}
                      placeholder="Create a password"
                      className="w-full rounded-xl border border-black/10 bg-[#faf8f4] py-3.5 pl-11 pr-12 text-sm outline-none transition focus:border-[#b18a45]"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#81776d]"
                    >
                      {showPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </div>
                </div>

                <label className="flex items-start gap-3 py-2 text-xs leading-5 text-[#81776d]">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 accent-[#b18a45]"
                  />

                  <span>
                    I agree to the ÉLIXIRÉ{" "}
                    <a href="#" className="text-[#b18a45]">
                      Terms & Conditions
                    </a>{" "}
                    and Privacy Policy.
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#171513] py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#b18a45]"
                >
                  Create Account
                </button>
              </form>

              <p className="mt-7 text-center text-sm text-[#81776d]">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-[#b18a45] hover:underline"
                >
                  Login
                </Link>
              </p>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
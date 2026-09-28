import { useState } from "react";

function Home() {
     const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/20">
            <span className="text-2xl font-bold text-white">R</span>
          </div>

          <h1 className="text-3xl font-bold text-white">
            Create an account
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Register to get started with our platform
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          <form className="space-y-5">
            {/* Full name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Full name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Email address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 pr-12 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-white"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Confirm password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Confirm password
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 pr-12 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-white"
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800 text-violet-600 focus:ring-violet-500"
              />

              <p className="text-sm leading-5 text-slate-400">
                I agree to the{" "}
                <a href="#" className="text-violet-400 hover:text-violet-300">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-violet-400 hover:text-violet-300">
                  Privacy Policy
                </a>
              </p>
            </div>

            {/* Register button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-500/30 active:scale-[0.98]"
            >
              Create account
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-800" />
            <span className="text-xs text-slate-500">OR</span>
            <div className="h-px flex-1 bg-slate-800" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            <span className="text-lg font-bold">G</span>
            Continue with Google
          </button>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-violet-400 transition hover:text-violet-300"
            >
              Sign in
            </a>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-slate-600">
          © 2026 Your Company. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Home
import React from "react";

function Home() {
  return (
    <main className="min-h-screen bg-[#0B0D10] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">
          
          {/* Left */}
          <section>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              <span className="h-2 w-2 rounded-full bg-[#8B5CF6]" />
              Creative digital experience
            </div>

            <h1 className="max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Build something
              <span className="block text-[#8B5CF6]">people remember.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-gray-400 sm:text-lg">
              Zamonaviy, sodda va kuchli digital experience yaratish uchun
              kreativ yondashuv va yaxshi dizayn bir joyda.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-[#8B5CF6] px-6 py-3.5 font-medium transition hover:bg-[#7C3AED]">
                Boshlash
              </button>

              <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-medium text-gray-300 transition hover:bg-white/10">
                Ko‘proq ko‘rish →
              </button>
            </div>
          </section>

          {/* Right */}
          <section className="relative flex justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-[#8B5CF6]/20 blur-[100px]" />

            <div className="relative w-full max-w-md rounded-[32px] border border-white/10 bg-[#12151A] p-5 shadow-2xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Overview</p>
                  <h2 className="mt-1 text-xl font-semibold">Your project</h2>
                </div>

                <div className="rounded-xl bg-white/5 px-3 py-2 text-sm text-gray-400">
                  2026
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#4C1D95] p-6">
                <p className="text-sm text-white/60">Total growth</p>

                <div className="mt-2 flex items-end justify-between">
                  <span className="text-4xl font-bold">+84.6%</span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs">
                    ↑ 12.4%
                  </span>
                </div>

                <div className="mt-8 flex h-28 items-end gap-2">
                  {[35, 52, 42, 68, 55, 82, 72, 96, 78, 100].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-lg bg-white/30 transition hover:bg-white/60"
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                  <p className="text-xs text-gray-500">Projects</p>
                  <p className="mt-2 text-2xl font-semibold">24</p>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                  <p className="text-xs text-gray-500">Clients</p>
                  <p className="mt-2 text-2xl font-semibold">18</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}

export default Home;

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="relative mx-auto grid min-h-[85vh] max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">

        {/* LEFT SIDE */}

        <div className="text-center lg:text-left">

          {/* Badge */}

          <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            🚀 Trusted Employee Verification Platform
          </div>

          {/* Heading */}

          <h1 className="mt-10 text-5xl font-black leading-tight text-white md:text-7xl">

            <span className="block">
             Verify Company
            </span>
 
            <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
             Employees Instantly
            </span>

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-400">

            VerifyHub helps students and professionals verify whether
            someone actually works at a company using trusted employee
            records shared directly by verified organizations.

          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col gap-5 sm:flex-row">

            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold shadow-lg shadow-blue-600/30 transition duration-300 hover:scale-105 hover:bg-blue-700">

              Verify Employee →

            </button>

            <button className="rounded-xl border border-slate-700 px-8 py-4 font-semibold transition duration-300 hover:border-blue-500 hover:bg-slate-900">

              Register Company

            </button>

          </div>

          {/* Trust */}

          <p className="mt-10 text-sm text-slate-500">

            ⭐ Trusted by 500+ Companies & 250,000+ Employees

          </p>

        </div>

        {/* RIGHT SIDE */}

        <div className="hidden lg:flex items-center justify-center">

          <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900/80 p-8 shadow-2xl shadow-blue-600/20 backdrop-blur">

            <div className="flex items-center justify-between">

              <h3 className="text-xl font-bold text-white">
                Employee Verification
              </h3>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
                ✔ Verified
              </span>

            </div>

            <div className="mt-8 space-y-6">

              <div>

                <p className="text-sm text-slate-400">
                  Employee Name
                </p>

                <h2 className="text-2xl font-bold text-white">
                  Rahul Sharma
                </h2>

              </div>

              <div>

                <p className="text-sm text-slate-400">
                  Company
                </p>

                <h3 className="text-lg font-semibold text-blue-400">
                  Google
                </h3>

              </div>

              <div>

                <p className="text-sm text-slate-400">
                  Employee ID
                </p>

                <h3 className="font-medium text-white">
                  EMP10482
                </h3>

              </div>

              <div>

                <p className="text-sm text-slate-400 mb-2">
                  Trust Score
                </p>

                <div className="h-3 overflow-hidden rounded-full bg-slate-700">

                  <div className="h-full w-[98%] rounded-full bg-blue-500"></div>

                </div>

                <p className="mt-2 font-semibold text-blue-400">

                  98% Verified

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
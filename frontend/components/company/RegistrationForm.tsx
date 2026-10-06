export default function RegistrationForm() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="grid gap-10 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <h2 className="text-3xl font-bold text-white">
            Register Your Company
          </h2>

          <p className="mt-3 text-slate-400">
            Fill in your official company details to become a verified organization.
          </p>

          <form className="mt-10 space-y-6">

            {/* Company Name */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Company Name
              </label>

              <input
                type="text"
                placeholder="Google Inc."
                className="w-full rounded-xl border border-slate-700 bg-[#0f172a] px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Email */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Official Email
              </label>

              <input
                type="email"
                placeholder="hr@company.com"
                className="w-full rounded-xl border border-slate-700 bg-[#0f172a] px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Website */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Company Website
              </label>

              <input
                type="text"
                placeholder="https://company.com"
                className="w-full rounded-xl border border-slate-700 bg-[#0f172a] px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Password */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Password
              </label>

              <input
                type="password"
                placeholder="********"
                className="w-full rounded-xl border border-slate-700 bg-[#0f172a] px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Confirm Password */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="********"
                className="w-full rounded-xl border border-slate-700 bg-[#0f172a] px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30"
            >
              Register Company →
            </button>

          </form>

        </div>

        {/* RIGHT SIDE */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <h2 className="text-3xl font-bold text-white">
            Why Join VerifyHub?
          </h2>

          <p className="mt-3 text-slate-400">
            Become a verified organization and protect your company from identity misuse.
          </p>

          <div className="mt-10 space-y-8">

            {/* Benefit 1 */}

            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 text-3xl">
                🛡️
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Official Verification
                </h3>

                <p className="mt-2 text-slate-400">
                  Employees are verified directly from your official records.
                </p>
              </div>

            </div>

            {/* Benefit 2 */}

            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600/20 text-3xl">
                🔒
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Secure Employee Database
                </h3>

                <p className="mt-2 text-slate-400">
                  Your employee data remains protected with enterprise-level security.
                </p>
              </div>

            </div>

            {/* Benefit 3 */}

            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/20 text-3xl">
                ⚡
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Instant Verification
                </h3>

                <p className="mt-2 text-slate-400">
                  Students and recruiters receive verification results within seconds.
                </p>
              </div>

            </div>

            {/* Benefit 4 */}

            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600/20 text-3xl">
                🌍
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Build Trust
                </h3>

                <p className="mt-2 text-slate-400">
                  Strengthen your employer brand and eliminate fake employee claims.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
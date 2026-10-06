export default function VerificationResult() {
  return (
    <section className="bg-[#05091d] pb-20">
      <div className="mx-auto max-w-3xl px-6">

        <div className="rounded-3xl border border-green-500/30 bg-slate-900 p-10 shadow-xl shadow-green-900/10">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold text-white">
              Verification Result
            </h2>

            <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-400">
              ✅ VERIFIED
            </span>

          </div>

          <div className="mt-8 space-y-6">

            <div>
              <p className="text-sm text-slate-400">
                Employee Name
              </p>

              <h3 className="text-3xl font-bold text-white">
                Rahul Sharma
              </h3>
            </div>

            <div>
              <p className="text-sm text-slate-400">
                Company
              </p>

              <h3 className="text-xl font-semibold text-blue-400">
                Google
              </h3>
            </div>

            <div>
              <p className="text-sm text-slate-400">
                Verification Status
              </p>

              <p className="mt-1 text-green-400 font-semibold">
                Employee Exists in Company Database
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-400">
                Trust Score
              </p>

              <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-700">

                <div className="h-full w-[98%] rounded-full bg-blue-500"></div>

              </div>

              <p className="mt-3 text-blue-400 font-semibold">
                98% Verified
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
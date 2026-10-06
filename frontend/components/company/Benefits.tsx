export default function Benefits() {
  return (
    <div className="rounded-3xl border border-blue-500/20 bg-slate-900 p-10">

      <h2 className="text-3xl font-bold text-white">
        Why Join VerifyHub?
      </h2>

      <p className="mt-3 text-slate-400">
        Become a verified organization and protect your employees
        from identity fraud.
      </p>

      <div className="mt-10 space-y-6">

        <div className="flex gap-4">
          <div className="text-3xl">🛡️</div>

          <div>
            <h3 className="font-semibold text-white">
              Secure Verification
            </h3>

            <p className="mt-1 text-slate-400">
              Employee records remain secure and protected.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="text-3xl">🏢</div>

          <div>
            <h3 className="font-semibold text-white">
              Company Dashboard
            </h3>

            <p className="mt-1 text-slate-400">
              Manage employee records from one place.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="text-3xl">⚡</div>

          <div>
            <h3 className="font-semibold text-white">
              Instant Verification
            </h3>

            <p className="mt-1 text-slate-400">
              Verify employees within seconds.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="text-3xl">🤝</div>

          <div>
            <h3 className="font-semibold text-white">
              Build Trust
            </h3>

            <p className="mt-1 text-slate-400">
              Increase credibility with students and recruiters.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
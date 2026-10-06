export default function VerificationForm() {
  return (
    <section className="bg-[#05091d] py-16">
      <div className="mx-auto max-w-3xl px-6">

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-2xl shadow-blue-900/20">

          <h2 className="text-3xl font-bold text-white">
            Verify Employee
          </h2>

          <p className="mt-2 text-slate-400">
            Enter the available employee details below.
          </p>

          <div className="mt-8">

            <label className="mb-2 block text-sm font-medium text-slate-300">
              Verification Method
            </label>

            <select
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            >
              <option>Employee ID</option>
              <option>Company Email</option>
              <option>Corporate Phone</option>
              <option>QR Code</option>
            </select>

          </div>

          <div className="mt-6">

            <label className="mb-2 block text-sm font-medium text-slate-300">
              Enter Value
            </label>

            <input
              type="text"
              placeholder="EMP10482"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500"
            />

          </div>

          <button
            className="mt-8 w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-blue-700"
          >
            Verify Employee →
          </button>

        </div>

      </div>
    </section>
  );
}
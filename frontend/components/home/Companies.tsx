export default function Companies() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Adobe",
    "Infosys",
    "TCS",
    "Accenture",
    "IBM",
  ];

  return (
    <section className="bg-[#05081a] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            TRUSTED ORGANIZATIONS
          </p>

          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Trusted By
            <span className="text-blue-500"> Leading Companies</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Employee records are securely managed by verified organizations.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

          {companies.map((company) => (
            <div
              key={company}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.25)]"
            >
              <h3 className="text-2xl font-bold text-white">
                {company}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
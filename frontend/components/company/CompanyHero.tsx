export default function CompanyHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-[#05081a] py-24">

      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
          🏢 Company Registration
        </div>

        <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
          Become a
          <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Verified Organization
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">
          Register your company, securely manage employee records and
          protect your brand from identity fraud.
        </p>

      </div>

    </section>
  );
}
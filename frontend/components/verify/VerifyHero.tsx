export default function VerifyHero() {
  return (
    <section className="border-b border-slate-800 bg-[#05091d]">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">

        {/* Badge */}

        <div className="mx-auto inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
          🔍 Employee Verification
        </div>

        {/* Heading */}

        <h1 className="mt-8 text-5xl font-black text-white md:text-6xl">
          Verify Any Employee
        </h1>

        <h2 className="mt-3 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
          In Seconds
        </h2>

        {/* Description */}

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          Verify whether an employee actually works at a company using
          trusted records provided directly by verified organizations.
        </p>

      </div>
    </section>
  );
}
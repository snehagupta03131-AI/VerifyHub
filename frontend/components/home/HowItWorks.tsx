export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "🔍",
      title: "Enter Employee Details",
      description:
        "Enter the Employee ID or Company Email shared by the person you want to verify.",
    },
    {
      number: "02",
      icon: "⚡",
      title: "AI + Company Verification",
      description:
        "VerifyHub securely checks the information against records provided by verified companies.",
    },
    {
      number: "03",
      icon: "✅",
      title: "Get Trusted Result",
      description:
        "Receive an instant verification result with a trust score and verification status.",
    },
  ];

  return (
    <section className="bg-[#05081a] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            HOW IT WORKS
          </p>

          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Verify Anyone in
            <span className="text-blue-500"> 3 Simple Steps</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Our verification process is simple, secure and powered by trusted
            company data.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.25)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-5xl">{step.icon}</span>

                <span className="text-5xl font-black text-slate-800 group-hover:text-blue-500/20">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
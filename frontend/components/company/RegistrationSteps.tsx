export default function RegistrationSteps() {
  const steps = [
    {
      number: "01",
      title: "Register Company",
      desc: "Submit your official company information.",
    },
    {
      number: "02",
      title: "Admin Review",
      desc: "Our team verifies your company documents.",
    },
    {
      number: "03",
      title: "Company Approved",
      desc: "Your organization becomes verified.",
    },
    {
      number: "04",
      title: "Add Employees",
      desc: "Upload employee records securely.",
    },
  ];

  return (
    <section className="border-t border-slate-800 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-500">
            REGISTRATION PROCESS
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            How Company Registration
            <span className="block text-blue-500">
              Works
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Complete your company verification in four simple steps.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
            >

              <div className="text-5xl font-black text-blue-500">
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
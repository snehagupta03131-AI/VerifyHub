export default function Features() {
  const features = [
    {
      title: "Secure Verification",
      description:
        "Employee verification using official company records.",
      icon: "🛡️",
    },
    {
      title: "Trusted Companies",
      description:
        "Only verified companies can manage employee records.",
      icon: "🏢",
    },
    {
      title: "Instant Results",
      description:
        "Get verification results within seconds.",
      icon: "⚡",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-center text-4xl font-bold">
        Why Choose VerifyHub?
      </h2>

      <p className="mt-4 text-center text-gray-400">
        Built to make employee verification simple, secure and trustworthy.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500 hover:-translate-y-2"
          >
            <div className="text-5xl">{feature.icon}</div>

            <h3 className="mt-6 text-2xl font-semibold">
              {feature.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default function Stats() {
  const stats = [
    {
      number: "500+",
      title: "Companies",
    },
    {
      number: "250K+",
      title: "Employees",
    },
    {
      number: "1M+",
      title: "Verifications",
    },
    {
      number: "99.9%",
      title: "Accuracy",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:-translate-y-2 hover:border-blue-500"
          >

            <h2 className="text-4xl font-bold text-blue-500">
              {item.number}
            </h2>

            <p className="mt-3 text-gray-400">
              {item.title}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
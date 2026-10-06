export default function StatsCards() {

  const cards = [
    {
      title: "Total Employees",
      value: "1,250",
      icon: "👥",
    },
    {
      title: "Verified Today",
      value: "148",
      icon: "✅",
    },
    {
      title: "Pending Requests",
      value: "18",
      icon: "⏳",
    },
    {
      title: "Company Status",
      value: "Verified",
      icon: "🏢",
    },
  ];

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (

        <div
          key={card.title}
          className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500"
        >

          <div className="text-4xl">
            {card.icon}
          </div>

          <h3 className="mt-6 text-slate-400">
            {card.title}
          </h3>

          <p className="mt-3 text-3xl font-black text-white">
            {card.value}
          </p>

        </div>

      ))}

    </div>
  );
}
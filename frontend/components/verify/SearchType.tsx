export default function SearchType() {
  const options = [
    "Employee ID",
    "Company Email",
    "Corporate Phone",
    "QR Code",
  ];

  return (
    <section className="bg-[#05091d] py-10">
      <div className="mx-auto max-w-4xl px-6">

        <h2 className="mb-6 text-center text-2xl font-bold text-white">
          Choose Verification Method
        </h2>

        <div className="grid gap-4 md:grid-cols-2">

          {options.map((item) => (
            <button
              key={item}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-left text-lg font-semibold text-slate-300 transition duration-300 hover:border-blue-500 hover:bg-slate-800 hover:text-white"
            >
              {item}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}
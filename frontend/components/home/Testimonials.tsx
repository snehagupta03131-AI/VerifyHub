export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Computer Science Student",
      review:
        "VerifyHub helped me verify a fake recruiter. The process was fast and reliable.",
    },
    {
      name: "Sneha Verma",
      role: "Software Engineer",
      review:
        "The verification process is clean, secure and incredibly easy to use.",
    },
    {
      name: "Amit Patel",
      role: "HR Manager",
      review:
        "As a company, VerifyHub helps us protect our employees from identity misuse.",
    },
  ];

  return (
    <section className="bg-[#05081a] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            TESTIMONIALS
          </p>

          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            What Our Users Say
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Trusted by students, professionals and companies.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.25)]"
            >
              <div className="text-5xl">⭐</div>

              <p className="mt-6 leading-8 text-slate-300">
                "{review.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-white">
                  {review.name}
                </h3>

                <p className="text-slate-400">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
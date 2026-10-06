export default function Faq() {
  return (
    <section className="bg-[#05081a] py-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-black text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-slate-400">
            Everything you need to know about VerifyHub.
          </p>

        </div>

        {/* FAQ Items */}

        <div className="mt-14 space-y-5">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-white">
              What is VerifyHub?
            </h3>

            <p className="mt-3 text-slate-400">
              VerifyHub helps users verify whether a person is actually employed
              at a company using trusted company records.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-white">
              Is employee information secure?
            </h3>

            <p className="mt-3 text-slate-400">
              Yes. Only verification status is displayed. Sensitive employee
              information is never exposed.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-white">
              Which companies are supported?
            </h3>

            <p className="mt-3 text-slate-400">
              Companies that register and upload verified employee records can
              participate in the verification process.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
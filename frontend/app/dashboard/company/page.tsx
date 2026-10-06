import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

export default function CompanyProfilePage() {
  return (
    <main className="flex min-h-screen bg-[#05081a]">

      <Sidebar />

      <section className="flex-1 p-10">

        <Header />

        <h1 className="mt-10 text-4xl font-bold text-white">
          Company Profile
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your company information.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">

          {/* Left Card */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">

            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 text-5xl font-bold text-white">
              G
            </div>

            <h2 className="mt-6 text-2xl font-bold text-white">
              Google Inc.
            </h2>

            <p className="mt-2 text-slate-400">
              Verified Organization
            </p>

            <span className="mt-5 inline-block rounded-full bg-green-500/20 px-4 py-2 text-green-400">
              ✔ Verified
            </span>

          </div>

          {/* Right Details */}

          <div className="lg:col-span-2 rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <h2 className="text-2xl font-bold text-white">
              Company Information
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div>
                <label className="text-slate-400">Company Name</label>

                <input
                  defaultValue="Google Inc."
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-[#0f172a] px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="text-slate-400">Official Email</label>

                <input
                  defaultValue="hr@google.com"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-[#0f172a] px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="text-slate-400">Website</label>

                <input
                  defaultValue="https://google.com"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-[#0f172a] px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="text-slate-400">Industry</label>

                <input
                  defaultValue="Technology"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-[#0f172a] px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="text-slate-400">Total Employees</label>

                <input
                  defaultValue="1250"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-[#0f172a] px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="text-slate-400">Joined On</label>

                <input
                  defaultValue="12 Jan 2025"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-[#0f172a] px-4 py-3 text-white outline-none"
                />
              </div>

            </div>

            <button className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
              Save Changes
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}
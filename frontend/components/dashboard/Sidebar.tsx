import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen border-r border-slate-800 bg-[#08101f] p-8">

      {/* Logo */}

      <Link
        href="/"
        className="text-3xl font-black text-white"
      >
        Verify<span className="text-blue-500">Hub</span>
      </Link>

      <p className="mt-2 text-sm text-slate-400">
        Company Dashboard
      </p>

      {/* Navigation */}

      <nav className="mt-12 space-y-3">

        <Link
          href="/dashboard"
          className="block rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          📊 Dashboard
        </Link>

        <Link
          href="/dashboard/employees"
          className="block rounded-xl px-5 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
        >
          👥 Employees
        </Link>

        <Link
          href="/dashboard/verification"
          className="block rounded-xl px-5 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
        >
          ✅ Verification Requests
        </Link>

        <Link
          href="/dashboard/company"
          className="block rounded-xl px-5 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
        >
          🏢 Company Profile
        </Link>

        <Link
          href="/dashboard/settings"
          className="block rounded-xl px-5 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
        >
          ⚙ Settings
        </Link>

      </nav>

      {/* Logout */}

      <div className="mt-20">

        <button className="w-full rounded-xl border border-red-500 py-3 font-medium text-red-400 transition hover:bg-red-500 hover:text-white">
          Logout
        </button>

      </div>

    </aside>
  );
}
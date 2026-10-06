import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-[#05081a]/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-3xl font-black text-white">
          Verify<span className="text-blue-500">Hub</span>
        </Link>

        {/* Navigation Menu */}
        <div className="hidden items-center gap-8 text-gray-300 md:flex">

          <Link
            href="/"
            className="transition hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/verify"
            className="transition hover:text-blue-400"
          >
            Verify
          </Link>

          <Link
            href="/company"
            className="transition hover:text-blue-400"
          >
            Company
          </Link>

          <Link
            href="/dashboard"
            className="transition hover:text-blue-400"
          >
            Dashboard
          </Link>

          <Link
            href="/admin"
            className="transition hover:text-blue-400"
          >
            Admin
          </Link>

        </div>

        {/* Login Button */}
        <Link
          href="/login"
          className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30"
        >
          Login
        </Link>

      </div>
    </nav>
  );
}
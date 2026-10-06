export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#05081a]">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Logo */}

          <div>
            <h2 className="text-3xl font-black text-white">
              Verify<span className="text-blue-500">Hub</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Secure employee verification platform helping students,
              recruiters and companies build trust.
            </p>
          </div>

          {/* Product */}

          <div>
            <h3 className="text-lg font-bold text-white">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-slate-400">

              <li className="hover:text-blue-400 cursor-pointer">
                Verify Employee
              </li>

              <li className="hover:text-blue-400 cursor-pointer">
                Company Registration
              </li>

              <li className="hover:text-blue-400 cursor-pointer">
                Dashboard
              </li>

            </ul>
          </div>

          {/* Company */}

          <div>
            <h3 className="text-lg font-bold text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-slate-400">

              <li className="hover:text-blue-400 cursor-pointer">
                About
              </li>

              <li className="hover:text-blue-400 cursor-pointer">
                Contact
              </li>

              <li className="hover:text-blue-400 cursor-pointer">
                Careers
              </li>

            </ul>
          </div>

          {/* Legal */}

          <div>
            <h3 className="text-lg font-bold text-white">
              Legal
            </h3>

            <ul className="mt-5 space-y-3 text-slate-400">

              <li className="hover:text-blue-400 cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-blue-400 cursor-pointer">
                Terms & Conditions
              </li>

              <li className="hover:text-blue-400 cursor-pointer">
                Cookie Policy
              </li>

            </ul>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-slate-500">

          © 2026 VerifyHub. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}
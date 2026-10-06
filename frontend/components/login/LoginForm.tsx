"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const API_URL = "http://127.0.0.1:8000";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const formData = new URLSearchParams();

      formData.append("username", email);
      formData.append("password", password);

      const response = await fetch(`${API_URL}/company/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Invalid email or password"
        );
      }

      // Save JWT token
      localStorage.setItem("access_token", data.access_token);

      // Login successful
      router.push("/dashboard");

    } catch (err) {
      console.error(err);

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#05081c] py-24">

      <div className="mx-auto max-w-6xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-400">
              🔐 Company Login
            </span>

            <h1 className="mt-8 text-6xl font-black leading-tight text-white">
              Welcome
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Back
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-9 text-slate-400">
              Login to manage employee records, verification requests,
              and company profile securely.
            </p>

            <div className="mt-12 space-y-5">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-2xl">
                  🔒
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    Secure Dashboard
                  </h3>

                  <p className="text-slate-400">
                    Enterprise level authentication
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/20 text-2xl">
                  ⚡
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    Fast Access
                  </h3>

                  <p className="text-slate-400">
                    Login within seconds
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

            <h2 className="text-3xl font-bold text-white">
              Login
            </h2>

            <p className="mt-3 text-slate-400">
              Enter your company credentials.
            </p>

            <form
              onSubmit={handleLogin}
              className="mt-10 space-y-6"
            >

              {/* Email */}

              <div>

                <label className="mb-2 block text-sm text-slate-300">
                  Official Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="company@email.com"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-[#0f172a] px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />

              </div>

              {/* Password */}

              <div>

                <label className="mb-2 block text-sm text-slate-300">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-[#0f172a] px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />

              </div>

              {/* Error */}

              {error && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
                  {error}
                </div>
              )}

              {/* Login */}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Login →"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}
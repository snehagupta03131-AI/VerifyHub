export default function Header() {
  return (
    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-black text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Welcome back, ABC Pvt. Ltd.
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-sm text-slate-300">
          🔔 Notifications
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
          A
        </div>

      </div>

    </div>
  );
}
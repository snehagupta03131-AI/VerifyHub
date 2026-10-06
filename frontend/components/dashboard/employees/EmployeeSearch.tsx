export default function EmployeeSearch() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <input
        type="text"
        placeholder="🔍 Search employee..."
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white outline-none transition focus:border-blue-500 md:max-w-md"
      />

      <select className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white outline-none">
        <option>All Employees</option>
        <option>Verified</option>
        <option>Pending</option>
      </select>

    </div>
  );
}
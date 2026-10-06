export default function EmployeeTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">

      <table className="w-full">

        <thead className="border-b border-slate-700 text-slate-400">

          <tr>
            <th className="px-6 py-5 text-left">Employee ID</th>
            <th className="text-left">Name</th>
            <th className="text-left">Email</th>
            <th className="text-left">Designation</th>
            <th className="text-left">Status</th>
            <th className="text-center">Actions</th>
          </tr>

        </thead>

        <tbody>

          <tr className="border-b border-slate-800 hover:bg-slate-800/40">

            <td className="px-6 py-5 text-white">EMP001</td>
            <td className="text-white">Rahul Sharma</td>
            <td className="text-slate-300">rahul@google.com</td>
            <td className="text-slate-300">Software Engineer</td>

            <td>
              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                Verified
              </span>
            </td>

            <td className="space-x-2 text-center">

              <button className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600">
                Edit
              </button>

              <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
                Delete
              </button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}
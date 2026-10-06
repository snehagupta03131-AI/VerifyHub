const requests = [
  {
    employee: "Rahul Sharma",
    method: "Employee ID",
    status: "Verified",
    time: "2 min ago",
  },
  {
    employee: "Priya Singh",
    method: "Company Email",
    status: "Pending",
    time: "10 min ago",
  },
  {
    employee: "Aman Gupta",
    method: "QR Code",
    status: "Rejected",
    time: "25 min ago",
  },
  {
    employee: "Sneha Verma",
    method: "Corporate Phone",
    status: "Verified",
    time: "1 hour ago",
  },
];

export default function RecentRequests() {
  return (
    <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white">
        Recent Verification Requests
      </h2>

      <p className="mt-2 text-slate-400">
        Latest employee verification activities.
      </p>

      <div className="mt-8 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-700 text-left text-slate-400">

              <th className="pb-4">Employee</th>
              <th className="pb-4">Method</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Time</th>

            </tr>

          </thead>

          <tbody>

            {requests.map((item, index) => (

              <tr
                key={index}
                className="border-b border-slate-800"
              >

                <td className="py-5 font-medium text-white">
                  {item.employee}
                </td>

                <td className="text-slate-300">
                  {item.method}
                </td>

                <td>

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium
                    ${
                      item.status === "Verified"
                        ? "bg-green-500/20 text-green-400"
                        : item.status === "Pending"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

                <td className="text-slate-400">
                  {item.time}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
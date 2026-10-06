import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

const requests = [
  {
    id: "VR001",
    employee: "Rahul Sharma",
    method: "Employee ID",
    status: "Verified",
    date: "Today",
  },
  {
    id: "VR002",
    employee: "Priya Singh",
    method: "Company Email",
    status: "Pending",
    date: "Today",
  },
  {
    id: "VR003",
    employee: "Aman Gupta",
    method: "QR Code",
    status: "Rejected",
    date: "Yesterday",
  },
  {
    id: "VR004",
    employee: "Sneha Verma",
    method: "Corporate Phone",
    status: "Verified",
    date: "Yesterday",
  },
];

export default function VerificationPage() {
  return (
    <main className="flex min-h-screen bg-[#05081a]">

      <Sidebar />

      <section className="flex-1 p-10">

        <Header />

        {/* Heading */}

        <div className="mt-10 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Verification Requests
            </h1>

            <p className="mt-2 text-slate-400">
              Review all employee verification requests.
            </p>

          </div>

        </div>

        {/* Search + Filter */}

        <div className="mt-8 flex flex-col gap-4 md:flex-row">

          <input
            type="text"
            placeholder="🔍 Search request..."
            className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none focus:border-blue-500"
          />

          <select className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none focus:border-blue-500">

            <option>All</option>
            <option>Verified</option>
            <option>Pending</option>
            <option>Rejected</option>

          </select>

        </div>

        {/* Table */}

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">

          <table className="w-full">

            <thead>

              <tr className="border-b border-slate-700 text-left text-slate-400">

                <th className="p-5">Request ID</th>
                <th>Employee</th>
                <th>Method</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {requests.map((item) => (

                <tr
                  key={item.id}
                  className="border-b border-slate-800"
                >

                  <td className="p-5 font-medium text-white">
                    {item.id}
                  </td>

                  <td className="text-white">
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
                    {item.date}
                  </td>

                  <td>

                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700">
                      View
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

    </main>
  );
}
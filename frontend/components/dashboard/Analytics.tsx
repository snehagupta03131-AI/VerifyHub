"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", requests: 25 },
  { day: "Tue", requests: 40 },
  { day: "Wed", requests: 32 },
  { day: "Thu", requests: 48 },
  { day: "Fri", requests: 60 },
  { day: "Sat", requests: 44 },
  { day: "Sun", requests: 70 },
];

export default function Analytics() {
  return (
    <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white">
        Verification Analytics
      </h2>

      <p className="mt-2 text-slate-400">
        Verification requests received this week.
      </p>

      <div className="mt-8 h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#1e293b"
            />

            <XAxis
              dataKey="day"
              stroke="#94a3b8"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="requests"
              stroke="#3b82f6"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}
"use client";

import { useEffect, useState } from "react";

type Employee = {
  id: string;
  name: string;
  email: string;
  designation: string;
  status: string;
};

type Props = {
  employee: Employee | null;
  onClose: () => void;
  onSave: (employee: Employee) => void;
};

export default function AddEmployeeModal({
  employee,
  onClose,
  onSave,
}: Props) {
  const [employeeId, setEmployeeId] = useState("");
  const [fullName, setFullName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [designation, setDesignation] = useState("");

  useEffect(() => {
    if (employee) {
      setEmployeeId(employee.id);
      setFullName(employee.name);
      setCompanyEmail(employee.email);
      setDesignation(employee.designation);
    } else {
      setEmployeeId("");
      setFullName("");
      setCompanyEmail("");
      setDesignation("");
    }
  }, [employee]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !employeeId ||
      !fullName ||
      !companyEmail ||
      !designation
    ) {
      alert("Please fill all fields.");
      return;
    }

    onSave({
      id: employeeId,
      name: fullName,
      email: companyEmail,
      designation,
      status: employee?.status || "Active",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <div className="w-full max-w-2xl rounded-3xl border border-slate-800 bg-[#08101f] p-8">

        <div className="flex items-center justify-between">

          <h2 className="text-3xl font-bold text-white">
            {employee ? "Edit Employee" : "Add Employee"}
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-slate-400 hover:text-white"
          >
            ✕
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >

          <div>
            <label className="mb-2 block text-slate-300">
              Employee ID
            </label>

            <input
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-slate-300">
              Full Name
            </label>

            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-slate-300">
              Company Email
            </label>

            <input
              value={companyEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-slate-300">
              Designation
            </label>

            <input
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end gap-4 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-700 px-6 py-3 text-white hover:bg-slate-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              {employee ? "Update Employee" : "Save Employee"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}
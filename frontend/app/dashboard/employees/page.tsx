"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import AddEmployeeModal from "@/components/dashboard/employees/AddEmployeeModal";
import {
  getEmployees,
  updateEmployee,
  deleteEmployee,
  searchEmployee,
  uploadEmployees,
} from "@/lib/api";

type Employee = {
  id: number | string;
  employee_id?: string;
  full_name?: string;
  company_email?: string;
  designation?: string;
  status?: string;
};

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] =
    useState<Employee | null>(null);

  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    loadEmployees();
  }, []);

  async function loadEmployees() {
    try {
      setLoading(true);
      setError("");

      const data = await getEmployees();

      setEmployees(data);
    } catch (err) {
      console.error(err);
      setError("Employees load nahi ho pa rahe hain.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch() {
    const value = searchTerm.trim();

    if (!value) {
      await loadEmployees();
      return;
    }

    try {
      setSearchLoading(true);
      setError("");

      const employee = await searchEmployee(value);

      setEmployees([employee]);
    } catch (err) {
      console.error(err);

      setEmployees([]);

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Employee not found.");
      }
    } finally {
      setSearchLoading(false);
    }
  }

  async function handleCSVUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.name.toLowerCase().endsWith(".csv")) {
      setError("Please select a CSV file.");
      event.target.value = "";
      return;
    }

    try {
      setUploading(true);
      setError("");

      const result = await uploadEmployees(file);

      alert(
        `Upload completed!\n\nTotal: ${result.total}\nInserted: ${result.inserted}\nDuplicates: ${result.duplicates}`
      );

      await loadEmployees();
    } catch (err) {
      console.error(err);

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("CSV upload failed.");
      }
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  }

  function handleAddEmployee() {
    setSelectedEmployee(null);
    setOpenModal(true);
  }

  function handleEditEmployee(employee: Employee) {
    setSelectedEmployee(employee);
    setOpenModal(true);
  }

  async function handleSaveEmployee(employee: {
    id: string;
    name: string;
    email: string;
    designation: string;
    status: string;
  }) {
    try {
      setSaving(true);
      setError("");

      if (!selectedEmployee) {
        setOpenModal(false);
        await loadEmployees();
        return;
      }

      const employeeId =
        selectedEmployee.employee_id ||
        String(selectedEmployee.id);

      await updateEmployee(employeeId, {
        full_name: employee.name,
        company_email: employee.email,
        designation: employee.designation,
      });

      setOpenModal(false);
      setSelectedEmployee(null);

      await loadEmployees();
    } catch (err) {
      console.error(err);

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Employee update nahi ho pa raha hai.");
      }
    } finally {
      setSaving(false);
    }
  }

  async function handleDeleteEmployee(employee: Employee) {
    const employeeId =
      employee.employee_id || String(employee.id);

    const confirmed = window.confirm(
      `Are you sure you want to delete ${
        employee.full_name || employeeId
      }?`
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeleting(true);
      setError("");

      await deleteEmployee(employeeId);

      await loadEmployees();
    } catch (err) {
      console.error(err);

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Employee delete nahi ho pa raha hai.");
      }
    } finally {
      setDeleting(false);
    }
  }

  return (
    <main className="flex min-h-screen bg-[#05081a]">
      <Sidebar />

      <section className="flex-1 p-10">
        <Header />

        {/* Heading */}
        <div className="mt-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Employees
            </h1>

            <p className="mt-2 text-slate-400">
              Manage all employees of your company.
            </p>
          </div>

          <div className="flex gap-3">
            {/* Upload CSV */}
            <button
              onClick={() => {
                document
                  .getElementById("employee-csv-upload")
                  ?.click();
              }}
              disabled={uploading}
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {uploading ? "Uploading..." : "↑ Upload CSV"}
            </button>

            <input
              id="employee-csv-upload"
              type="file"
              accept=".csv"
              className="hidden"
              onChange={handleCSVUpload}
            />

            {/* Add Employee */}
            <button
              onClick={handleAddEmployee}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              + Add Employee
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mt-8 flex gap-3">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            placeholder="🔍 Search by Employee ID..."
            className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none focus:border-blue-500"
          />

          <button
            onClick={handleSearch}
            disabled={searchLoading}
            className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {searchLoading ? "Searching..." : "Search"}
          </button>

          {searchTerm && (
            <button
              onClick={async () => {
                setSearchTerm("");
                setError("");
                await loadEmployees();
              }}
              className="rounded-xl border border-slate-700 px-6 py-4 text-white transition hover:bg-slate-800"
            >
              Clear
            </button>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
            {error}
          </div>
        )}

        {/* Table */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
          {loading ? (
            <div className="p-10 text-center text-slate-400">
              Loading employees...
            </div>
          ) : employees.length === 0 ? (
            <div className="p-10 text-center text-slate-400">
              No employees found.
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700 text-left text-slate-400">
                  <th className="p-5">Employee ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Designation</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {employees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="border-b border-slate-800"
                  >
                    <td className="p-5 font-medium text-white">
                      {employee.employee_id || employee.id}
                    </td>

                    <td className="text-white">
                      {employee.full_name || "-"}
                    </td>

                    <td className="text-slate-300">
                      {employee.company_email || "-"}
                    </td>

                    <td className="text-slate-300">
                      {employee.designation || "-"}
                    </td>

                    <td>
                      <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                        {employee.status || "Active"}
                      </span>
                    </td>

                    <td>
                      <button
                        onClick={() =>
                          handleEditEmployee(employee)
                        }
                        className="mr-3 text-blue-400 hover:text-blue-300"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteEmployee(employee)
                        }
                        disabled={deleting}
                        className="text-red-400 hover:text-red-300 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {deleting ? "Deleting..." : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Employee Modal */}
        {openModal && (
          <AddEmployeeModal
            employee={
              selectedEmployee
                ? {
                    id:
                      selectedEmployee.employee_id ||
                      String(selectedEmployee.id),
                    name:
                      selectedEmployee.full_name || "",
                    email:
                      selectedEmployee.company_email || "",
                    designation:
                      selectedEmployee.designation || "",
                    status:
                      selectedEmployee.status || "Active",
                  }
                : null
            }
            onClose={() => {
              setOpenModal(false);
              setSelectedEmployee(null);
            }}
            onSave={handleSaveEmployee}
          />
        )}

        {/* Saving indicator */}
        {saving && (
          <div className="fixed bottom-6 right-6 z-[60] rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg">
            Updating employee...
          </div>
        )}
      </section>
    </main>
  );
}
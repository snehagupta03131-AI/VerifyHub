const API_URL = "http://127.0.0.1:8000";

export async function getEmployees() {
  const token = localStorage.getItem("access_token");

  if (!token) {
    throw new Error("Please login first");
  }

  const response = await fetch(`${API_URL}/employees`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);

    console.error("Employees API Error:", response.status, errorData);

    throw new Error(
      errorData?.detail || "Failed to fetch employees"
    );
  }

  return response.json();
}

export async function updateEmployee(
  employeeId: string,
  employeeData: {
    full_name: string;
    company_email: string;
    designation: string;
  }
) {
  const token = localStorage.getItem("access_token");

  if (!token) {
    throw new Error("Please login first");
  }

  const response = await fetch(
    `${API_URL}/employees/${employeeId}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);

    console.error(
      "Update Employee API Error:",
      response.status,
      errorData
    );

    throw new Error(
      errorData?.detail || "Failed to update employee"
    );
  }

  return response.json();
}

export async function deleteEmployee(employeeId: string) {
  const token = localStorage.getItem("access_token");

  if (!token) {
    throw new Error("Please login first");
  }

  const response = await fetch(
    `${API_URL}/employees/${employeeId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);

    console.error(
      "Delete Employee API Error:",
      response.status,
      errorData
    );

    throw new Error(
      errorData?.detail || "Failed to delete employee"
    );
  }

  return response.json();
}

export async function searchEmployee(employeeId: string) {
  const token = localStorage.getItem("access_token");

  if (!token) {
    throw new Error("Please login first");
  }

  const response = await fetch(
    `${API_URL}/employees/search/${encodeURIComponent(employeeId)}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);

    throw new Error(
      errorData?.detail || "Employee not found"
    );
  }

  return response.json();
}
export async function uploadEmployees(file: File) {
  const token = localStorage.getItem("access_token");

  if (!token) {
    throw new Error("Please login first");
  }

  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(
    `${API_URL}/employees/upload`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);

    console.error(
      "Upload Employees API Error:",
      response.status,
      errorData
    );

    throw new Error(
      errorData?.detail || "Failed to upload employees"
    );
  }

  return response.json();
}
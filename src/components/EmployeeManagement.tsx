import { useState,useEffect } from "react";
import SearchBar from "./SearchBar";
import EmployeeTable from "./EmployeeTable";
import { useEmployees } from "../context/EmployeeContext";

import "./EmployeeManagement.css";
import Pagination from "./Pagination";

const EmployeeManagement = () => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");
const [currentPage, setCurrentPage] = useState(1);

const employeesPerPage = 10;
  const { employees } = useEmployees();
  useEffect(() => {
    setCurrentPage(1);
  }, [search, department, status]);

  const filteredEmployees = employees.filter((employee) => {
    const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();

    const matchesSearch = fullName.includes(search.toLowerCase());

    const matchesDepartment =
      department === "" || employee.company.department === department;

    const matchesStatus = status === "" || employee.status === status;

    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const lastEmployee = currentPage * employeesPerPage;

  const firstEmployee = lastEmployee - employeesPerPage;

  const currentEmployees = filteredEmployees.slice(firstEmployee, lastEmployee);

  const totalPages =
    Math.ceil(filteredEmployees.length / employeesPerPage) || 1;
  return (
    <div className="employee-management">
      <div className="toolbar">
        <SearchBar onSearch={setSearch} />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Department</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
        </select>

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <EmployeeTable employees={currentEmployees} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default EmployeeManagement;

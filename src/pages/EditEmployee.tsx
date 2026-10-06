import "./AddEmployee.css";
import { useEffect, useState } from "react";
import { useEmployees } from "../context/EmployeeContext";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { employees, updateEmployee } = useEmployees();

  const employee = employees.find((emp) => emp.id === Number(id));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("Active");

  useEffect(() => {
    if (employee) {
      setName(employee.firstName);
      setEmail(employee.email);
      setDepartment(employee.company.department);
      setStatus(employee.status);
    }
  }, [employee]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !department) {
      alert("Please fill all fields");
      return;
    }

    if (employee) {
      updateEmployee({
        ...employee,
        firstName: name,
        email,
        status,
        company: {
          department,
        },
      });

      alert("Employee Updated Successfully");
      navigate("/employee");
    }
  };

  if (!employee) {
    return <h2>Employee Not Found</h2>;
  }

  return (
    <div className="add-employee">
      <h1>Edit Employee</h1>

      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            placeholder="Enter employee name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Department</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        <div className="form-group">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <button type="submit" className="save-btn">
          Update Employee
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;

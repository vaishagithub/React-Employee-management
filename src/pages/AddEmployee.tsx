import "./AddEmployee.css";
import { useState } from "react";
import { useEmployees } from "../context/EmployeeContext";

const AddEmployee = () => {
   const { addEmployee } = useEmployees();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("Active");
  const [saved, setSaved] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
     

  if (!name || !email || !department) {
    alert("Please fill all fields");
    return;
  }
 addEmployee({
   id: Date.now(),
   firstName: name,
   lastName: "",
   email,
   status, // ✅ Add this
   company: {
     department,
   },
 });

    console.log({
      name,
      email,
      department,
      status,
    });
    setSaved(true);
  };
  return (
    <div className="add-employee">
      <h1>Add Employee</h1>

      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter employee name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
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

        <button type="submit" className={saved ? "saved-btn" : "save-btn"}>
        
          {saved ? "✓ Employee Saved" : "Save Employee"}
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;

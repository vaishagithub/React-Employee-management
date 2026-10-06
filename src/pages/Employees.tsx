import { IoIosAdd } from "react-icons/io";
import EmployeeManagement from "../components/EmployeeManagement";

import "./Employees.css";
import { useNavigate } from "react-router-dom";

const Employees = () => {
  const navigate=useNavigate();
  return (
    <div className="employees">
      <div className="top-bar">
        <h1>Employees</h1>

        <button onClick={()=>navigate("/add-employee")}>
          <IoIosAdd />
          Add Employee
        </button>
      </div>

      <EmployeeManagement />

      
    </div>
  );
};

export default Employees;

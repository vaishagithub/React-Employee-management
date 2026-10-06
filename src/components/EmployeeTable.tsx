import user from "../assets/images/user.png";
import { LiaEyeSolid } from "react-icons/lia";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import "./EmployeeTable.css";
import { useEmployees } from "../context/EmployeeContext";
import { useNavigate } from "react-router-dom";
type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  company: {
    department: string;
  };
};

type EmployeeTableProps = {
  employees: Employee[];
};

const EmployeeTable = ({ employees }: EmployeeTableProps) => {  const { deleteEmployee } = useEmployees();
const navigate = useNavigate();
  return (
    <div className="table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <img
                  src={user}
                  alt={employee.firstName}
                  className="profile-img"
                />
              </td>

              <td>
                {employee.firstName} {employee.lastName}
              </td>

              <td>{employee.email}</td>

              <td>{employee.company.department}</td>

              <td>
                <span
                  className={
                    employee.status === "Active"
                      ? "status-active"
                      : "status-inactive"
                  }
                >
                  {employee.status}
                </span>
              </td>

              <td className="actions">
                <LiaEyeSolid
                  title="View"
                  onClick={() => navigate(`/employee/${employee.id}`)}
                />
                <MdOutlineEdit
                  title="Edit"
                  onClick={() => navigate(`/edit-employee/${employee.id}`)}
                />
                
                <MdDeleteOutline
                  title="Delete"
                  onClick={() => deleteEmployee(employee.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;

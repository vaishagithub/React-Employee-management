import { useParams } from "react-router-dom";
import { useEmployees } from "../context/EmployeeContext";

const ViewEmployee = () => {
  const { id } = useParams();
  const { employees } = useEmployees();

  const employee = employees.find((emp) => emp.id === Number(id));

  if (!employee) {
    return <h2>Employee Not Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Details</h1>

      <p>
        <strong>Name:</strong> {employee.firstName} {employee.lastName}
      </p>

      <p>
        <strong>Email:</strong> {employee.email}
      </p>

      <p>
        <strong>Department:</strong> {employee.company.department}
      </p>

      <p>
        <strong>Status:</strong> {employee.status}
      </p>
    </div>
  );
};

export default ViewEmployee;

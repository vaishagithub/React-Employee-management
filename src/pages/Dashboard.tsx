import Statistics from "../components/Statistics";
import "./Dashboard.css";
import { useEmployees } from "../context/EmployeeContext";

const Dashboard = () => {
  const { employees } = useEmployees();
  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (employee) => employee.status === "Active",
  ).length;

  const inactiveEmployees = employees.filter(
    (employee) => employee.status === "Inactive",
  ).length;

  const totalDepartments = new Set(
    employees.map((employee) => employee.company.department),
  ).size;
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stas-container">
        <Statistics icon="👥" title="Total Employees" value={totalEmployees} />

        <Statistics
          icon="🟢"
          title="Active Employees"
          value={activeEmployees}
        />

        <Statistics
          icon="🔴"
          title="Inactive Employees"
          value={inactiveEmployees}
        />

        <Statistics icon="🏢" title="Departments" value={totalDepartments} />
      </div>
    </div>
  );
};

export default Dashboard;

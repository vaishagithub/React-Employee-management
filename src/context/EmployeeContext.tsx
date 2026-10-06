import { createContext, useContext, useEffect, useState } from "react";
import { getEmployees } from "../services/employeeApi";

type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status:string;//Add this line
  company: {
    department: string;
  };
};

type EmployeeContextType = {
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
  deleteEmployee: (id: number) => void;
  updateEmployee: (employee: Employee) => void;
};

const EmployeeContext = createContext<EmployeeContextType | null>(null);

export const EmployeeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

 useEffect(() => {
   const loadEmployees = async () => {
     const storedEmployees = localStorage.getItem("employees");

     if (storedEmployees) {
       setEmployees(JSON.parse(storedEmployees));
     } else {
       const data = await getEmployees();
       setEmployees(data);
     }
   };

   loadEmployees();
 }, []);


const addEmployee = (employee: Employee) => {
  setEmployees((prev) => [...prev, employee]);
};
 
  const deleteEmployee = (id: number) => {
    setEmployees((prev) => prev.filter((employee) => employee.id !== id));
  };

  const updateEmployee = (updatedEmployee: Employee) => {
    setEmployees((prev) =>
      prev.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee,
      ),
    );
  };

   useEffect(() => {
     if (employees.length > 0) {
       localStorage.setItem("employees", JSON.stringify(employees));
     }
   }, [employees]);

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee,deleteEmployee,updateEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = () => {
  const context = useContext(EmployeeContext);

  if (!context) {
    throw new Error("useEmployees must be used inside EmployeeProvider");
  }

  return context;
};

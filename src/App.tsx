
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';

import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';
import MainLayout from './components/MainLayout';
import ViewEmployee from "./pages/ViewEmployee";
import Login from './pages/Login';
import AuthGuard from './components/AuthGuard';
function App() {
  

  return (
    <>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<AuthGuard />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />

            <Route path="employee" element={<Employees />} />

            <Route path="add-employee" element={<AddEmployee />} />

            <Route path="edit-employee/:id" element={<EditEmployee />} />

            <Route path="employee/:id" element={<ViewEmployee />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App

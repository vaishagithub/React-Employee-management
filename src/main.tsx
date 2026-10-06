

import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client"
import { EmployeeProvider } from "./context/EmployeeContext";
import { AuthProvider } from './context/AuthContext.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <AuthProvider>
    <EmployeeProvider>
    
      <App />
    </EmployeeProvider>
    </AuthProvider>
  </BrowserRouter>
);

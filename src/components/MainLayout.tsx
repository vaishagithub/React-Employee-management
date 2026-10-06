import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import "./MainLayout.css";
import "./Navbar.css"

const MainLayout = () => {
  return (
    <>
      <div className="layout">
        <Sidebar />
        <div className="main-content">
          
            <Navbar />
          
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout
{/* <Outlet /> is where the current page will be displayed. */}

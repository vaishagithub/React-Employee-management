import {NavLink} from "react-router-dom"
import { MdDashboard } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
// import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import "./Sidebar.css";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  // const navigate=useNavigate();
  const { logout } = useAuth();
  return (
    <div className="sidebar">
      {/* <h2 onClick={()=>navigate("/")}> */}
      <div className="menu">
        <NavLink to="/">
          <h2>
            <MdDashboard /> Dashboard
          </h2>
        </NavLink>
        <NavLink to="/employee">
          <h2>
            <IoPerson />
            Employees
          </h2>
        </NavLink>

        {/* <h2 onClick={() => navigate("/settings")}>
          <CiSettings />
          Settings
        </h2> */}
        <h2 className="logout" onClick={logout}>
          <IoIosLogOut />
          Logout
        </h2>
      </div>
    </div>
  );
}

export default Sidebar

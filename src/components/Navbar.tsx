
import { IoIosNotifications } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";

import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav">
        <div className="nav-left">
          
          <h2>Employee Management</h2>
        </div>

        <div className="nav-right">
          <IoIosNotifications className="icon" />
          <IoMdPerson className="icon" />
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

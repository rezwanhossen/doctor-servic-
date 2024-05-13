import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo (2).png";
import { AuthContext } from "../Firbase/FirbaseProvider";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navitem = (
    <>
      <li className="mr-1">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mr-1">
        <NavLink to="/services">Services</NavLink>
      </li>
      {user && (
        <li className="dropdown ">
          <div tabIndex={0} role="button" className=" m-1">
            Dashboard
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/addsurvice">Add Service</NavLink>
            </li>
            <li>
              <NavLink to="/managservic">Manag Service</NavLink>
            </li>
            <li>
              <NavLink to="/bookservic">Booking Service</NavLink>
            </li>
            <li>
              <a>Service To Do</a>
            </li>
          </ul>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[20] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navitem}
            </ul>
          </div>
          <Link to="/">
            <img className=" w-18 h-10 btn" src={logo} alt="" />
          </Link>
        </div>
        <div className=" navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navitem}</ul>
        </div>
        <div className="navbar-end">
          <div className=" flex gap-2 items-center">
            {user ? (
              <div className=" flex gap-2 items-center">
                <p>
                  <img
                    title={user?.displayName}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full"
                    src={user?.photoURL || "https://i.ibb.co/ZLvzRqG/user.png"}
                    alt=""
                  />
                </p>
                <button
                  onClick={logout}
                  className="btn btn-outline btn-secondary"
                >
                  LogOut
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn btn-outline btn-secondary">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

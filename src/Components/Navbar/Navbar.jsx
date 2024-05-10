import { Link } from "react-router-dom";
import logo from "../../assets/logo (2).png";
const Navbar = () => {
  const navitem = (
    <>
      <li>
        <Link className="">Item 1</Link>
      </li>
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
          <img className=" w-18 h-10 btn" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navitem}</ul>
        </div>
        <div className="navbar-end">
          <div className=" flex gap-2 items-center">
            <img
              className="w-10 h-10"
              src="https://i.ibb.co/ZLvzRqG/user.png"
              alt=""
            />
            <Link to="/login" className="btn btn-outline btn-secondary">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

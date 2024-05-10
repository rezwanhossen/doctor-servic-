import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
  return (
    <div className=" max-w-[96%] mx-auto">
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
};

export default Root;

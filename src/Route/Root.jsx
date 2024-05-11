import { Outlet } from "react-router-dom";
import Footer from "../Components/Footre/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
  return (
    <div className=" max-w-[96%] mx-auto">
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Root;

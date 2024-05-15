// import axios from "axios";
import { useContext } from "react";
import { Helmet } from "react-helmet";
// import toast from "react-hot-toast";

import Swal from "sweetalert2";

import { AuthContext } from "../../Components/Firbase/FirbaseProvider";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const AddService = () => {
  const { user } = useContext(AuthContext);
  const handeladdSurvice = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const sName = form.name.value;
    const pric = parseFloat(form.pric.value);
    const area = form.area.value;
    const desc = form.desc.value;
    const email = user?.email;
    const UserName = user?.displayName;
    const uimg = user?.photoURL;
    const servics = {
      photo,
      sName,
      pric,
      area,
      desc,
      email,
      UserName,
      uimg,
    };

    //sent data in data base
    fetch("http://localhost:5001/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(servics),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Your Survices is added !",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  AOS.init();
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      className=" mt-10 w-full md:max-w-[70%] mx-auto"
    >
      <Helmet>
        <title> add service</title>
      </Helmet>
      <form
        onSubmit={handeladdSurvice}
        className=" border rounded-md bg-slate-400 shadow-md p-10"
      >
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className=" space-y-1">
            <p> photo URL :</p>
            <input
              className=" input input-disabled w-full"
              type="text"
              name="photo"
              placeholder="https://jkgomskj-4757.jpg"
              id=""
            />
          </div>
          <div className=" space-y-1">
            <p> Service Name :</p>
            <input
              className=" input input-disabled w-full"
              type="text"
              placeholder="name of the service"
              name="name"
              id=""
            />
          </div>
          <div className=" space-y-1">
            <p> Service Price :</p>
            <input
              className=" input input-disabled w-full"
              type="number"
              name="pric"
              placeholder="pric 100.."
              id=""
            />
          </div>
          <div className=" space-y-1">
            <p>Service Area</p>
            <input
              className=" input input-disabled w-full"
              type="text"
              placeholder="area of the service"
              name="area"
              id=""
            />
          </div>
        </div>
        <div className=" space-y-1">
          <p> Description :</p>
          <input
            className=" input input-disabled w-full"
            type="text"
            placeholder="Description"
            name="desc"
            id=""
          />
        </div>
        <br />
        <input
          className=" w-full btn btn-success"
          type="submit"
          value="ADD SERVICE"
        />
      </form>
    </div>
  );
};

export default AddService;

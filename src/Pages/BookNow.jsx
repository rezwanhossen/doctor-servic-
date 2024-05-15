import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/Firbase/FirbaseProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
const BookNow = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const naviget = useNavigate();
  const servic = useLoaderData();
  const { _id, photo, sName, pric, area, desc, email, uimg, UserName } = servic;
  const handelbook = (e) => {
    if (user?.email === email) return toast.error("Action not permitted");
    e.preventDefault();
    const form = e.target;
    const srid = _id;
    const pname = form.pname.value;
    const cnsername = user?.displayName;
    const cemail = user?.email;
    const instruction = form.instruction.value;
    const date = startDate;
    const status = "pending";
    const bookdata = {
      srid,
      sName,
      photo,
      pname,
      cnsername,
      email,
      cemail,
      instruction,
      date,
      pric,
      status,
    };
    fetch("http://localhost:5001/booked", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookdata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Your booked is added !",
            icon: "success",
            confirmButtonText: "Cool",
          });
          naviget("/bookservic");
        }
      });
  };

  return (
    <div className=" w-full md:w-3/4 mx-auto p-3 bg-slate-100">
      <form onSubmit={handelbook}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700 ">Service Name</label>
            <input
              name="sname"
              disabled
              defaultValue={sName}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 " htmlFor="emailAddress">
              Servic img Url
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              disabled
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 " htmlFor="emailAddress">
              Provider Name
            </label>
            <input
              type="text"
              name="pname"
              defaultValue={UserName}
              disabled
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 " htmlFor="emailAddress">
              Special instruction
            </label>
            <input
              type="text"
              name="instruction"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-gray-700">Service Taking Date</label>

            <DatePicker
              className="border w-full p-2 rounded-md"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>

          <div>
            <label className="text-gray-700 " htmlFor="max_price">
              Price
            </label>
            <input
              id="max_price"
              name="price"
              defaultValue={pric}
              type="number"
              disabled
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <input
            className=" btn bg-gradient-to-r from-purple-500 to-pink-500"
            type="submit"
            value="Purchase"
          />
        </div>
      </form>
    </div>
  );
};

export default BookNow;

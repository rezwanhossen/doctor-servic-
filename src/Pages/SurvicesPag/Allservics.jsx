import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Allservics = () => {
  const [servic, setservic] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/service")
      .then((res) => res.json())
      .then((data) => setservic(data));
  }, []);

  return (
    <div className=" mt-10 md:max-w-[90%] mx-auto bg-red-100 p-5">
      <div className=" text-center space-y-2">
        <h1 className="text-3xl md:text-5xl font-bold">All Services</h1>
        <p>
          From preventive care to specialized treatments, our comprehensive
          services ensure that you receive <br /> the attention and support you
          deserve.{" "}
        </p>
        <div className=" md:flex gap-2 my-10 bg-green-700 p-5 rounded-md">
          <input type="text" className=" input input-bordered" name="" id="" />
          <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 ">
            Search
          </button>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-9 ">
          {servic.map((data) => (
            <div
              key={data._id}
              className=" border shadow-xl bg-green-500 rounded-md p-2"
            >
              <img className=" w-full h-[200px]" src={data?.photo} alt="" />
              <div className=" flex gap-1 py-2 ">
                <img
                  className=" w-10 h-10 rounded-full"
                  src={data?.uimg}
                  alt=""
                />
                <h4 className="text-2xl font-bold ">{data?.UserName} </h4>
              </div>
              <hr className=" text-xl font-bold" />
              <div className=" px-3">
                <h5 className="text-xl font-bold mb-1">{data?.sName} </h5>
                <p>{data?.desc.slice(0, 100)}</p>
                <p className=" flex justify-end">
                  <span className=" bg-white px-4 py-1 rounded-full text-2xl font-bold">
                    $ {data?.pric}
                  </span>
                </p>
              </div>
              <Link
                to="/simglepag"
                className=" btn  bg-gradient-to-r from-purple-500 to-pink-500 w-full mt-3"
              >
                View Detail
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allservics;

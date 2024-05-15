import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../../Components/Firbase/FirbaseProvider";

const ToDoServic = () => {
  const { user } = useContext(AuthContext);
  const [dobook, setdobook] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5001/to-do-booked/${user?.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setdobook(data));
  }, []);
  const handleStatus = (id, prev, status) => {
    if (prev === status) return toast.error("you alrady click this one");
    fetch(`http://localhost:5001/updatstaus/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "successfully complited!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <Helmet>to do service</Helmet>
      <section className="container px-4 mx-auto pt-12">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 ">
            Booked Requests
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {dobook.length} Requests
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Servic name</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Date</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <span>present name</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Price</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Special instruction
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Status
                      </th>

                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {dobook.map((data) => (
                      <tr key={data._id}>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {data.sName}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {new Date(data.date).toLocaleDateString()}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {data.cnsername}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          ${data.pric}
                        </td>

                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          {data.instruction}
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                              data.status === "pending" &&
                              "bg-yellow-700 text-white"
                            } ${
                              data.status === "working" &&
                              "bg-blue-700 text-white"
                            } ${
                              data.status === "Complete" &&
                              "bg-emerald-700 text-white"
                            } ${
                              data.status === "Rejected" &&
                              "bg-red-700 text-white"
                            } `}
                          >
                            <h2 className="text-sm font-normal ">
                              {data.status}
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            {/* Accept Button: In Progress */}
                            <button
                              onClick={() =>
                                handleStatus(data._id, data.status, "working")
                              }
                              disabled={data.status === "Complete"}
                              className="disabled:cursor-not-allowed btn text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none"
                            >
                              yes
                            </button>
                            {/* Reject Button */}
                            <button
                              onClick={() =>
                                handleStatus(data._id, data.status, "Rejected")
                              }
                              disabled={data.status === "Complete"}
                              className="disabled:cursor-not-allowed btn text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none"
                            >
                              no
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToDoServic;

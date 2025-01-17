import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { AuthContext } from "../../Components/Firbase/FirbaseProvider";

const BookedServic = () => {
  const { user } = useContext(AuthContext);
  const [book, setbook] = useState([]);
  useEffect(() => {
    fetch(`https://doctor-servic-server.vercel.app/booked/${user?.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setbook(data));
  }, []);
  const handleStatus = (id, status) => {
    fetch(`https://doctor-servic-server.vercel.app/updatstaus/${id}`, {
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
      <Helmet>
        <title>DOC CARE | Booked list</title>
      </Helmet>
      <div className="overflow-x-auto">
        <section className="container px-4 mx-auto pt-12">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 ">Booked LIst</h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
              {book.length}
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
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <span>Date</span>
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
                      {book.map((data) => (
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
                            $ {data.pric}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
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
                              }`}
                            >
                              <h2 className="text-sm font-normal ">
                                {data.status}
                              </h2>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            {/* Complete Button */}
                            <button
                              disabled={data.status !== "working"}
                              onClick={() => handleStatus(data._id, "Complete")}
                              className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none disabled:cursor-not-allowed"
                            >
                              ok
                            </button>
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
    </div>
  );
};

export default BookedServic;

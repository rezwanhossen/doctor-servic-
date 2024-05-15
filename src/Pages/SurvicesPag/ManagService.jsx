import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Components/Firbase/FirbaseProvider";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const ManagService = () => {
  const { user } = useContext(AuthContext);
  const [mngdat, setmngdat] = useState([]);
  useEffect(() => {
    fetch(`https://doctor-servic-server.vercel.app/service/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setmngdat(data);
      });
  }, []);

  const handeldeleted = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://doctor-servic-server.vercel.app/service/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remain = lists.filter((lis) => lis._id != id);
              setmngdat(remain);
            }
          });
      }
    });
  };

  return (
    <div className=" mt-5 w-full md:w-3/4 mx-auto ">
      <Helmet>
        <title>DOC CARE // manag service</title>
      </Helmet>
      <h1 className="text-2xl font-bold rounded-xl p-2 bg-sky-700">
        My Add Servics : {mngdat.length}
      </h1>
      <div className=" grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {mngdat.map((data) => (
          <div key={data._id} className="  border rounded-md p-1">
            <div className="">
              <img className=" w-full h-[200px]" src={data?.photo} alt="" />
            </div>
            <div className="p-3 space-y-1">
              <h1 className="text-2xl font-bold"> {data?.sName}</h1>
              <p className="p-2 rounded-full w-2/5 text-center font-bold bg-green-200">
                $ {data?.pric}
              </p>
              <p>
                <b>Location :</b> {data?.area}
              </p>
              <p>{data?.desc.slice(0, 100)}.... </p>
              <div className=" flex gap-3">
                <Link to={`/updateServic/${data._id}`}>
                  <button className="btn text-3xl btn-success">
                    <FaEdit />
                  </button>
                </Link>
                <button
                  onClick={() => handeldeleted(data._id)}
                  className="btn text-3xl btn-secondary"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagService;

import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const ManagService = () => {
  return (
    <div className=" mt-10 w-full  ">
      <div className=" grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className=" md:flex gap-2 border rounded-md p-1">
          <div className="flex-1">
            <img
              className=" w-full h-[250px]"
              src="https://i.ibb.co/G7jHZhY/ser-3.jpg"
              alt=""
            />
          </div>
          <div className="flex-1  space-y-2">
            <h1 className="text-2xl font-bold">Servic name</h1>
            <p className="p-2 rounded-full w-2/5 text-center font-bold bg-green-200">
              $ pric
            </p>
            <p>
              <b>Location :</b> servic area
            </p>
            <p>ddkldskfokmnowmjnpoeri</p>
            <div className=" flex gap-3">
              <Link to="/updateServic">
                <button className="btn text-3xl btn-success">
                  <FaEdit />
                </button>
              </Link>
              <button className="btn text-3xl btn-secondary">
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagService;

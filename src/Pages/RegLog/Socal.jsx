import { FaGoogle } from "react-icons/fa";
const Socal = () => {
  return (
    <div className="mt-2">
      <div>
        <p className=" divider my-4 text-xl font-bold "> or connect with</p>
        <div className=" flex justify-center">
          <button className="btn text-xl btn-outline btn-secondary">
            <FaGoogle /> Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Socal;

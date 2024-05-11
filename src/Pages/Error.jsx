import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className=" w-3/5 bg-slate-300 p-5 mx-auto mt-5 border rounded-md">
      <img
        className=" w-full h-[450px]"
        src="https://i.ibb.co/DQnW9Ds/error.jpg"
        alt=""
      />
      <div className=" flex justify-center mt-5">
        <Link to="/" className=" btn btn-outline btn-secondary">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;

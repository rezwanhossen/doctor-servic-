import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Socal from "./Socal";

const Register = () => {
  return (
    <div className=" w-3/5 mx-auto mt-5">
      <Helmet>
        <title>DOCCARE || register</title>
      </Helmet>
      <div className=" md:flex gap-5 bg-slate-200 rounded-md p-4 ">
        <div className="flex-1">
          <img
            className=" w-full h-[470px]"
            src="https://i.ibb.co/KXktzk0/servic-1.jpg"
            alt=""
          />
        </div>
        <div className="flex-1  space-y-3">
          <h2 className="text-3xl font-bold text-center mb-5">Register </h2>
          <form className=" space-y-3">
            <div>
              <input
                className=" input input-bordered w-full"
                type="text"
                placeholder="enter your name"
                name="name"
                id=""
              />
            </div>

            <div>
              <input
                className=" input input-bordered w-full"
                type="text"
                placeholder="enter your photo URL"
                name="img"
                id=""
              />
            </div>

            <div>
              <input
                className=" input input-bordered w-full"
                type="email"
                placeholder="enter your email addres"
                name="email"
                required
                id=""
              />
            </div>

            <div>
              <input
                className=" input input-bordered w-full"
                type="password"
                placeholder="enter your password"
                name="password"
                required
                id=""
              />
            </div>

            <input
              className="w-full btn btn-outline btn-secondary "
              type="submit"
              value="Register"
            />
          </form>
          <p>
            have any account please !{" "}
            <Link to="/login" className=" text-xl  text-green-400">
              Login
            </Link>
          </p>
          <Socal></Socal>
        </div>
      </div>
    </div>
  );
};

export default Register;

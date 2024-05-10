import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className=" w-3/5 mx-auto mt-5">
      <div className=" md:flex gap-5 bg-slate-200 rounded-md p-4 ">
        <div className="flex-1">
          <img
            className=" w-full h-[450px]"
            src="https://i.ibb.co/G7jHZhY/ser-3.jpg"
            alt=""
          />
        </div>
        <div className="flex-1 p-3 space-y-3">
          <h2 className="text-3xl font-bold text-center mb-5">Login </h2>
          <form>
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
            <br />
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
            <br />
            <input
              className="w-full btn btn-outline btn-secondary "
              type="submit"
              value="Login"
            />
          </form>
          <p>
            have not any account please !{" "}
            <Link to="/register" className=" text-xl  text-green-400">
              Register
            </Link>
          </p>
          <div>
            <p className=" divider my-4 text-xl font-bold "> or</p>
            <div className=" flex justify-center">
              <button className="btn text-xl btn-outline btn-secondary">
                <FaGoogle /> Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

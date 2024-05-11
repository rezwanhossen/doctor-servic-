import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Socal from "./Socal";

const Login = () => {
  return (
    <div className=" w-3/5 mx-auto mt-5">
      <Helmet>
        <title>DOCCARE || login</title>
      </Helmet>
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
          <Socal></Socal>
        </div>
      </div>
    </div>
  );
};

export default Login;

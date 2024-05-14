import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Components/Firbase/FirbaseProvider";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useEffect } from "react";
// import axios from "axios";
const Login = () => {
  const [showpass, setshowpass] = useState(false);
  const { user, login, googlelogin, loding } = useContext(AuthContext);
  const naviget = useNavigate();
  const location = useLocation();
  const form = location.state || "/";

  useEffect(() => {
    if (user) {
      naviget("/");
    }
  }, [naviget, user]);
  // google Signin
  const googleloginuser = async () => {
    try {
      await googlelogin();
      naviget(form, { replace: true });
      toast.success("Login Succesfully !");
    } catch (error) {
      console.log(error?.message);
      toast.error(error?.message);
    }
  };
  // email password
  const handellogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const result = await login(email, password);

      naviget("/");
      toast.success("Login Succesfully !");
    } catch (error) {
      console.log(error?.message);
      toast.error(error?.message);
    }
  };
  if (user || loding) return;
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
          <form onSubmit={handellogin}>
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
            <div className=" relative mb-3">
              <input
                className=" input input-bordered w-full"
                type="password"
                placeholder="enter your password"
                name="password"
                required
                id=""
              />
              <span
                className=" absolute top-4 right-4"
                onClick={() => setshowpass(!showpass)}
              >
                {showpass ? <FiEyeOff></FiEyeOff> : <FiEye></FiEye>}
              </span>
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
            <p className=" divider my-4 text-xl font-bold "> or connect with</p>
            <div className=" flex justify-center">
              <button
                onClick={googleloginuser}
                className="btn text-xl btn-outline btn-secondary"
              >
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

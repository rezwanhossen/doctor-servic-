import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Components/Firbase/FirbaseProvider";
import toast from "react-hot-toast";
const Register = () => {
  const { creatuser, updatprofil, googlelogin, user, setuser } =
    useContext(AuthContext);
  const naviget = useNavigate();
  // google Signin
  const googleloginuser = async () => {
    try {
      await googlelogin();
      naviget("/");
      toast.success("Login Succesfully !");
    } catch (error) {
      console.log(error?.message);
      toast.error(error?.message);
    }
  };

  const handeregister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const img = form.img.value;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const result = await creatuser(email, password);
      await updatprofil(name, img);
      setuser({ ...user, displayName: name, photoURL: img });
      naviget("/");
      toast.success("Register Succesfully !");
    } catch (error) {
      console.log(error?.message);
      toast.error(error?.message);
    }
  };
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
          <form onSubmit={handeregister} className=" space-y-3">
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

export default Register;

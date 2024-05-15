import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
// AOS.init();

const Sarcicses = () => {
  const [servic, setservic] = useState([]);
  useEffect(() => {
    fetch("https://doctor-servic-server.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setservic(data));
  }, []);

  AOS.init();

  return (
    <div className=" mt-10 w-full md:max-w-[85%] mx-auto">
      <div className=" text-center">
        <h1
          data-aos="fade-left"
          className="text-3xl md:text-5xl font-bold my-4"
        >
          Services
        </h1>
        <p data-aos="fade-right">
          From preventive care to specialized treatments, our comprehensive
          services ensure that you receive <br /> the attention and support you
          deserve.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-9 ">
        {servic.slice(0, 6).map((data) => (
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            key={data._id}
            className=" border shadow-xl bg-green-500 rounded-md p-2"
          >
            <img className=" w-full h-[200px]" src={data?.photo} alt="" />
            <div className=" flex gap-1 py-2 ">
              <img
                className=" w-10 h-10 rounded-full"
                src={data?.uimg}
                alt=""
              />
              <h4 className="text-2xl font-bold ">{data?.UserName} </h4>
            </div>
            <hr className=" text-xl font-bold" />
            <div className=" px-3">
              <h5 className="text-xl font-bold mb-1">{data?.sName} </h5>
              <p>{data?.desc.slice(0, 100)}</p>
              <p className=" flex justify-end">
                <span className=" bg-white px-4 py-1 rounded-full text-2xl font-bold">
                  $ {data?.pric}
                </span>
              </p>
            </div>
            <Link
              to={`/simglepag/${data._id}`}
              className=" btn  bg-gradient-to-r from-purple-500 to-pink-500 w-full mt-3"
            >
              View Detail
            </Link>
          </div>
        ))}
      </div>
      <div className=" flex justify-center my-5">
        <Link className=" btn btn-outline btn-secondary" to="/services">
          See All Services
        </Link>
      </div>
    </div>
  );
};

export default Sarcicses;

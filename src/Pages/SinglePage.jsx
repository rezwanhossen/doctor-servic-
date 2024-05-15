import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// AOS.init();

const SinglePage = () => {
  const servic = useLoaderData();
  const { _id, photo, sName, pric, area, desc, uimg, UserName } = servic;
  AOS.init();
  return (
    <div className="p-5 mt-5 w-full md:w-2/3 mx-auto bg-slate-200 rounded-md">
      <div className=" flex gap-3 items-center mb-3">
        <img className=" w-12 h-12 rounded-full" src={uimg} alt="" />
        <h2 className="text-3xl font-bold">{UserName} </h2>
      </div>
      <div className=" space-y-2">
        <img className=" w-full" src={photo} alt="" />
        <div className=" flex justify-end">
          <p className="px-5 py-2 rounded-full text-xl bg-red-500 font-bold">
            $ {pric}{" "}
          </p>
        </div>
        <h2 className="text-3xl font-bold">{sName} </h2>
        <p>
          <b>Location :</b>
          {area}{" "}
        </p>
        <p>{desc} </p>
        <div className="flex justify-center">
          <Link
            to={`/booknow/${_id}`}
            className="btn bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;

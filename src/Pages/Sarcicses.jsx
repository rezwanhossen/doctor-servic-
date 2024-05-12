import { Link } from "react-router-dom";

const Sarcicses = () => {
  return (
    <div className=" mt-10">
      <div className=" text-center">
        <h1 className="text-3xl md:text-5xl font-bold my-4">Services</h1>
        <p>
          From preventive care to specialized treatments, our comprehensive
          services ensure that you receive <br /> the attention and support you
          deserve.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"></div>
      <div className=" flex justify-center my-5">
        <Link className=" btn btn-outline btn-secondary" to="/services">
          See All Services
        </Link>
      </div>
    </div>
  );
};

export default Sarcicses;

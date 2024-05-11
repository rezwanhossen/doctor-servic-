const SBanner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/54ZTYdZ/bbbb.png"
            className=" rounded-lg shadow-2xl"
          />
          <div>
            <h1 className=" text-3xl md:text-5xl font-bold">
              BEST DOCTOR CARE IN TOWN
            </h1>
            <p className="py-6">
              Best Doctor Care in Town is a comprehensive healthcare platform
              dedicated to providing top-notch medical services tailored to the
              needs of the community.
            </p>
            <div className=" flex gap-4">
              <button className=" btn btn-outline btn-secondary">
                Services
              </button>
              <button className=" btn btn-outline btn-secondary">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBanner;

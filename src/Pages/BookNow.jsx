const BookNow = () => {
  return (
    <div className=" w-full md:w-3/4 mx-auto p-3 bg-slate-100">
      <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700 " htmlFor="job_title">
              Service Name
            </label>
            <input
              name="sname"
              disabled
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 " htmlFor="emailAddress">
              Servic img Url
            </label>
            <input
              type="text"
              name="photo"
              disabled
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 " htmlFor="emailAddress">
              Provider Name
            </label>
            <input
              type="text"
              name="pname"
              disabled
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 " htmlFor="emailAddress">
              Special instruction
            </label>
            <input
              type="text"
              name="inst"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-gray-700">Service Taking Date</label>

            <input
              className=" block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              type="date"
              name="date"
              id=""
            />
          </div>

          <div>
            <label className="text-gray-700 " htmlFor="max_price">
              Price
            </label>
            <input
              id="max_price"
              name="price"
              type="number"
              disabled
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Purchase
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookNow;

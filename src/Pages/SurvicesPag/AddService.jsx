const AddService = () => {
  return (
    <div className=" mt-10 w-full md:max-w-[70%] mx-auto">
      <form className=" border rounded-md bg-slate-400 shadow-md p-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className=" space-y-1">
            <p> photo URL :</p>
            <input
              className=" input input-disabled w-full"
              type="text"
              name="photo"
              placeholder="https://jkgomskj-4757.jpg"
              id=""
            />
          </div>
          <div className=" space-y-1">
            <p> Service Name :</p>
            <input
              className=" input input-disabled w-full"
              type="text"
              placeholder="name of the service"
              name="name"
              id=""
            />
          </div>
          <div className=" space-y-1">
            <p> Service Price :</p>
            <input
              className=" input input-disabled w-full"
              type="number"
              name="pric"
              placeholder="pric 100.."
              id=""
            />
          </div>
          <div className=" space-y-1">
            <p>Service Area</p>
            <input
              className=" input input-disabled w-full"
              type="text"
              placeholder="area of the service"
              name="area"
              id=""
            />
          </div>
        </div>
        <div className=" space-y-1">
          <p> Description :</p>
          <input
            className=" input input-disabled w-full"
            type="text"
            placeholder="Description"
            name="desc"
            id=""
          />
        </div>
        <br />
        <input
          className=" w-full btn btn-success"
          type="submit"
          value="ADD SERVICE"
        />
      </form>
    </div>
  );
};

export default AddService;

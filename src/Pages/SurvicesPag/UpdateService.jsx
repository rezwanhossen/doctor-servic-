// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateService = () => {
  const data = useLoaderData();
  const { _id, photo, sName, pric, area, desc } = data;
  const handelupdatesurvic = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const sName = form.name.value;
    const pric = parseFloat(form.pric.value);
    const area = form.area.value;
    const desc = form.desc.value;

    const servics = {
      photo,
      sName,
      pric,
      area,
      desc,
    };
    fetch(`https://doctor-servic-server.vercel.app/updatsingleservic/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(servics),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Your survics is updated!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className=" mt-10 w-full md:max-w-[70%] mx-auto">
        <form
          onSubmit={handelupdatesurvic}
          className=" border rounded-md bg-slate-400  p-10"
        >
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className=" space-y-1">
              <p> photo URL :</p>
              <input
                className=" input input-disabled w-full"
                type="text"
                name="photo"
                placeholder="https://jkgomskj-4757.jpg"
                defaultValue={photo}
                id=""
              />
            </div>
            <div className=" space-y-1">
              <p> Service Name :</p>
              <input
                className=" input input-disabled w-full"
                type="text"
                placeholder="name of the service"
                defaultValue={sName}
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
                defaultValue={pric}
                placeholder="pric 100.."
                id=""
              />
            </div>
            <div className=" space-y-1">
              <p>Service Area</p>
              <input
                className=" input input-disabled w-full"
                type="text"
                defaultValue={area}
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
              defaultValue={desc}
              placeholder="Description"
              name="desc"
              id=""
            />
          </div>
          <br />
          <input
            className=" w-full btn btn-success"
            type="submit"
            value="UPDATE SERVICE"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateService;

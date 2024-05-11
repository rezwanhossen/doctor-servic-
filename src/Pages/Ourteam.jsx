import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Ourteam = () => {
  const [tame, setteme] = useState([]);
  useEffect(() => {
    fetch("teme.json")
      .then((res) => res.json())
      .then((data) => setteme(data));
  }, []);
  return (
    <div className=" my-5">
      <div className=" text-center md:w-3/5 mx-auto space-y-2">
        <h1 className=" text-2xl font-bold md:text-5xl text-rose-500 ">
          Our Team
        </h1>
        <p>
          At Doc Care, we're proud to have a team of highly skilled and
          compassionate healthcare professionals dedicated to providing you with
          the best possible care. Get to know the faces behind our practice
        </p>
      </div>

      <div className=" mt-10">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-[320px] h-[420px]"
        >
          {tame.map((data) => (
            <SwiperSlide key={data.id} className=" bg-green-500 rounded-md">
              <div className="p-3 ">
                <img
                  className=" w-[200px] h-[220px] rounded-full mx-auto"
                  src={data.img}
                  alt=""
                />
                <div className=" text-center">
                  <h3 className="text-2xl font-bold">{data.name}</h3>
                  <p className=" text-[16px] text-rose-700">
                    {data.specialty}{" "}
                  </p>
                  <p className=" mb-2 text-[16px]">
                    {data.additional_training}{" "}
                  </p>
                  <p>
                    {data.description.slice(0, 65)}.....
                    <Link className=" text-blue-800">read more</Link>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Ourteam;

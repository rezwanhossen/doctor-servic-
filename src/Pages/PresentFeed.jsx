import { useEffect, useState } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdMessage } from "react-icons/md";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "weight", background: "green" }}
      onClick={onClick}
    />
  );
}

const PresentFeed = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [fedbak, setfedbak] = useState([]);
  useEffect(() => {
    fetch("feedbock.json")
      .then((res) => res.json())
      .then((data) => setfedbak(data));
  }, []);
  //   console.log(fedbak);
  return (
    <div className=" mt-10 max-w-[90%] mx-auto">
      <div className=" text-center my-5">
        <h1 className="text-3xl font-bold md:text-5xl mb-3">
          Patient <span className=" text-rose-500">Feedback</span>
        </h1>
        <p>
          Once you've composed your feedback, submit it through the chosen
          method. If you're using a form, fill it out completely.{" "}
        </p>
        <img
          className=" w-full h-[500px]"
          src="https://i.ibb.co/bBDBXtp/doc.jpg"
          alt=""
        />
      </div>
      <div className="slider-container mt-10">
        <Slider {...settings}>
          {fedbak.map((data) => (
            <div key={data.id}>
              <div className="border rounded-md bg-slate-200 p-5 mr-4 ">
                <MdMessage className=" text-3xl " />
                <p>" {data.description.slice(0, 270)} .."</p>
                <h2 className="text-2xl font-bold">{data.name} </h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PresentFeed;

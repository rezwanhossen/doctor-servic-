import { Swiper, SwiperSlide } from "swiper/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper/modules";

const Banner = () => {
  const [typrEffect] = useTypewriter({
    words: [
      "DOC",
      "CARE",
      " Specific",
      " Health Concern",
      "Experienced",
      "Doctors",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div>
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper w-full h-[80vh]"
      >
        <SwiperSlide data-hash="slide1">
          <div className="bg-[url('https://i.ibb.co/T4QzzGV/ser-2.jpg')] bg-cover hero  h-[80vh]">
            <div className="hero-content text-center">
              <div className=" w-3/5 mx-auto">
                <h1 className=" text-2xl md:text-5xl font-bold">
                  Welcome <span className=" text-red-500">{typrEffect}</span>
                </h1>
                <p className="py-6">
                  Welcome to our Consultation Services by Doccare website! We're
                  dedicated to providing you with top-notch medical advice and
                  care from qualified professionals.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide1">
          <div className="bg-[url('https://i.ibb.co/9VMtkqT/Health-Care-Service-Tax.jpg')] bg-cover hero  h-[80vh]">
            <div className="hero-content text-center">
              <div className=" w-3/5 mx-auto">
                <h1 className=" text-2xl md:text-5xl font-bold text-white">
                  {" "}
                  Welcome <span className=" text-red-500">{typrEffect}</span>
                </h1>
                <p className="py-6">
                  Whether you're seeking guidance on a specific health concern
                  or looking for general wellness advice, our team is here to
                  assist you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          data-hash="slide1"
          className="bg-[url('https://i.ibb.co/dcrzCqr/ser-4.jpg')] bg-cover"
        >
          <div className="bg-[url('https://i.ibb.co/dcrzCqr/ser-4.jpg')] bg-cover hero  h-[80vh]">
            <div className="hero-content text-center">
              <div className=" w-3/5 mx-auto">
                <h1 className=" text-red-700 text-2xl md:text-5xl font-bold">
                  Welcome <span className=" text-red-500">{typrEffect}</span>
                </h1>
                <p className="py-6">
                  Our team of experienced doctors is here to address your health
                  needs with care and professionalism. Whether you're seeking
                  advice on managing a chronic condition, exploring treatment
                  options, or simply aiming to prioritize your well-being.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

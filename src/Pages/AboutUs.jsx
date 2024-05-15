import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// AOS.init();
const AboutUs = () => {
  AOS.init();
  return (
    <div className="mt-10 mb-10">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 my-5  p-3 bg-slate-100 ">
        <div>
          <img className="" src="https://i.ibb.co/nbzXwZY/doc2.jpg" alt="" />
        </div>
        <div className=" p-5">
          <h2
            data-aos="flip-right"
            data-aos-duration="2000"
            className="text-xl mb-5 mt-5 text-red-500 md:text-3xl font-bold "
          >
            About Us
          </h2>
          <p className="my-5 " data-aos="fade-up" data-aos-duration="1000">
            Welcome to Doc Care!
          </p>
          <p data-aos="fade-up" data-aos-duration="1500" className="my-5 ">
            At Services by Doc care, we believe in accessible, personalized
            healthcare for everyone. Our platform was founded on the principle
            that quality medical advice should be readily available, regardless
            of geographical location or time constraints.
          </p>
          <p data-aos="fade-up" data-aos-duration="2000">
            Thank you for choosing Services by Doc Care. We look forward to
            serving you with excellence and compassion.
          </p>
        </div>
        <div className="p-5">
          <h5
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" font-bold text-rose-500 my-5"
          >
            Absolutely, here are the bullet points sorted in a more organized
            manner
          </h5>
          <div className=" space-y-3">
            <li data-aos="fade-up" data-aos-duration="1500">
              <b>Compassionate Care:</b> We prioritize your well-being and aim
              to provide a supportive and empathetic environment for all our
              consultations.
            </li>
            <li data-aos="fade-up" data-aos-duration="2000">
              <b>Patient-Centered Care:</b> Your satisfaction and trust are our
              top priorities. We strive to deliver patient-centered care that
              exceeds your expectations.
            </li>
            <li data-aos="fade-up" data-aos-duration="2500">
              <b> Commitment to Excellence:</b> We are committed to upholding
              the highest standards of professionalism, ethics, and quality in
              everything we do.
            </li>
            <li data-aos="fade-up" data-aos-duration="3000">
              <b> Confidentiality:</b> Your privacy is paramount to us. We
              adhere to strict confidentiality guidelines to ensure that your
              information remains secure and protected.
            </li>
          </div>
        </div>
        <div>
          <img className="" src="https://i.ibb.co/4t5B5T3/doc3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

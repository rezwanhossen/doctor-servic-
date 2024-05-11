import logo from "../../assets/logo (2).png";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" mt-10 bg-base-200 py-5">
      <footer className="footer p-5 text-base-content">
        <aside>
          <img className=" w-32 h-24" src={logo} alt="" />
          <p className=" text-2xl font-semibold">
            DOC <span className=" text-rose-500">CARE</span> Ltd.
          </p>
          <p>
            <b>Email :</b> doc@care.gmail.com
          </p>
          <p>
            <b>Location : </b>sibbare,BK.R rode khulna
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Add service</a>
          <a className="link link-hover">Manag service</a>
          <a className="link link-hover">Booking Service</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">services</a>
          <a className="link link-hover">Dasebord</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a className=" text-3xl link link-hover">
            <BsFacebook />
          </a>
          <a className=" text-3xl link link-hover">
            <FaInstagram />
          </a>
        </nav>
      </footer>
      <hr />
      <div className="footer footer-center text-base-content pt-10">
        <aside>
          <p>
            Copyright © 2024 - All right reserved by doc{" "}
            <span className=" text-rose-500">care</span> Ltd
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;

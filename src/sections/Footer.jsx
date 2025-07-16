import React, { useEffect } from "react";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import google from "../assets/google.jpg";
import apple from "../assets/apple.jpg";
import pay1 from "../assets/pay-1.jpg";
import pay2 from "../assets/pay-2.jpg";
import pay3 from "../assets/pay-3.jpg";
import pay4 from "../assets/pay-4.jpg";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div
      id="contact"
      className="w-full flex flex-col justify-center items-center"
    >
      {/*1st box start*/}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="w-full bg-purple-500 lg:px-20 px-10 py-8 grid lg:grid-cols-6 grid-cols-2 justify-center items-center gap-10"
      >
        <img
          src={client1}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client2}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client3}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client4}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client5}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client6}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
      </div>
      {/* 1st box end */}

      {/* 2nd box start */}
      <div className="w-full lg:px-20 px-5 py-[60px] bg-gray-100">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Electra Shop Section */}
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex flex-col justify-center items-start gap-10 max-w-lg"
          >
            <div className="flex flex-col justify-center items-start gap-4">
              <h1 className="text-4xl font-bold text-purple-600 underline italic">
                Electra Shop
              </h1>
              <p className="text-gray-500 text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maxime, nisi beatae? <br /> Ut exercitationem non quod neque{" "}
                <br /> dignissimos fugiat earum, sequi nam corporis hic.
              </p>
            </div>

            <div className="flex flex-col justify-center items-start gap-4">
              <h1 className="text-black text-xl font-semibold capitalize">
                Download our app
              </h1>
              <div className="flex justify-center items-center gap-4">
                <img src={google} alt="Google Play" />
                <img src={apple} alt="App Store" />
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-10"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            {/* Column 1 */}
            <div>
              <h1 className="text-black text-xl font-semibold capitalize">
                Useful Links
              </h1>
              <ul className="mt-8 flex flex-col justify-center items-start gap-2">
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  About Us
                </li>
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  Careers
                </li>
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  Blog
                </li>
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  Contact
                </li>
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  Our Team
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              {/* <h1 className="text-black text-xl font-semibold capitalize">Useful Links</h1> */}
              <ul className="mt-15 flex flex-col justify-center items-start gap-2">
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  Help Center
                </li>
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  Shipping Info
                </li>
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  Returns
                </li>
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  Order Tracking
                </li>
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  Support
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              {/* <h1 className="text-black text-xl font-semibold capitalize">Useful Links</h1> */}
              <ul className="mt-15 flex flex-col justify-center items-start gap-2">
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  Privacy Policy
                </li>
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  Terms & Conditions
                </li>
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  Refund Policy
                </li>
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  Cookies
                </li>
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  Accessibility
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              {/* <h1 className="text-black text-xl font-semibold capitalize"></h1> */}
              <ul className="mt-15 flex flex-col justify-center items-start gap-2">
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  My Account
                </li>
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  Wishlist
                </li>
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  Checkout
                </li>
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  Newsletter
                </li>
                <li className="text-gray-500 cursor-pointer hover:text-black">
                  Affiliate
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd box end */}

      {/* 3rd box start */}
      <div className="w-full lg:px-20 px-5 py-[40px] bg-gray-100">
        <hr className="border-t border-gray-300 py-3" />
        <div className="w-full flex lg:flex-row flex-col justify-between items-center lg:gap-4 gap-10">
          <div className="lg:w-[20%] w-full justify-center items-center gap-4 flex flex-row">
            <img src={pay1} alt="" className="w-[50px] rounded-lg" />
            <img src={pay2} alt="" className="w-[50px] rounded-lg" />
            <img src={pay3} alt="" className="w-[50px] rounded-lg" />
            <img src={pay4} alt="" className="w-[50px] rounded-lg" />
          </div>

          <div className="lg:w-[60%] w-full flex lg:flex-row flex-col justify-center items-center gap-4">
            <h1 className="text-black font-semibold text-2xl">
              Subscribe Newsletter
            </h1>
            <div>
              <input
                type="email"
                placeholder="Enter email"
                className="lg:w-auto w-full capitalize px-6 py-3 rounded-l-lg bg-gray-300"
              />
              <button className="bg-purple-600 lg:w-auto w-full text-white hover:bg-yellow-500 hover:text-black px-6 py-3 rounded-r-lg font-semibold">
                SUBMIT
              </button>
            </div>
          </div>

          <div className="lg:w-[20%] w-full">
            <p className="text-gray-500 lg:text-end text-center">
              2025 Powered by Debug Entity
            </p>
          </div>
        </div>
      </div>
      {/* 3rd box end */}

      {/* Scroll to top button */}
      <div
        id="icon-box"
        className="bg-purple-700 text-white p-3 rounded-full hover:bg-yellow-500 hover:text-black cursor-pointer fixed lg:bottom-6 right-6 bottom-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="w-[35px] h-[35px]" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { useEffect } from "react";
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
import cat4 from "../assets/cat4.jpg";
import cat5 from "../assets/cat5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
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
      id="category"
      className="w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex flex-col justify-center items-center gap-8"
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="w-full flex flex-col justify-center items-center text-center gap-5"
      >
        <h1 className="text-purple-700 text-xl font-semibold">
          Favourite Items
        </h1>
        <h1 className="text-black font-semibold text-[48px] lg:text-[60px] leading-tight">
          Popular Category
        </h1>
        <button className="bg-purple-700 text-white hover:bg-yellow-300 hover:text-black px-8 py-3 rounded-lg font-semibold mt-8">
          VIEW ALL
        </button>
      </div>

      <div className="lg:w-[85%] w-full grid lg:grid-cols-5 grid-cols-1 justify-center items-start gap-10">
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img src={cat1} alt="" className="rounded-full cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover:text-purple-900 cursor-pointer">
            Portable Speakers
          </h1>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img src={cat2} alt="" className="rounded-full cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover:text-purple-900 cursor-pointer">
            Tower Speakers
          </h1>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img src={cat3} alt="" className="rounded-full cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover:text-purple-900 cursor-pointer">
            EV Accessories
          </h1>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img src={cat4} alt="" className="rounded-full cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover:text-purple-900 cursor-pointer">
            External Drives
          </h1>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img src={cat5} alt="" className="rounded-full cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover:text-purple-900 cursor-pointer">
            DSLR Cameras
          </h1>
        </div>

      </div>
    </div>
  );
};

export default Category;

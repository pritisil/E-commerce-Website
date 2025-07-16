import React, { useEffect } from "react";
import payment from "../assets/payment.png";
import shipping from "../assets/shipping.png";
import refund from "../assets/return.png";
import gift from "../assets/gift.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div className="w-full lg:px-20 px-5 pt-[0px] pb-[80px] grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10">
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={shipping} alt="" className="mb-[20px] w-[60px]" />
        <h1 className="text-xl font-semibold text-black">Worldwide Shipping</h1>
        <p className="text-[17px] text-gray-600 text-center">
          We deliver to over 100 countries with reliable partners.
        </p>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={payment} alt="" className="mb-[20px] w-[60px]" />
        <h1 className="text-xl font-semibold text-black">
          100% Secure Payment
        </h1>
        <p className="text-[17px] text-gray-600 text-center">
          Your payments are encrypted and fully protected.
        </p>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={refund} alt="" className="mb-[20px] w-[60px]" />
        <h1 className="text-xl font-semibold text-black">Easy Returns</h1>
        <p className="text-[17px] text-gray-600 text-center">
          Hassle-free returns within 7 days of delivery.
        </p>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={gift} alt="" className="mb-[20px] w-[60px]" />
        <h1 className="text-xl font-semibold text-black">
          Gift Packaging Available
        </h1>
        <p className="text-[17px] text-gray-600 text-center">
          Choose gift wrap and personalized notes at checkout.
        </p>
      </div>
    </div>
  );
};

export default Services;

import { useEffect } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from "../../../assets/headset.jpg";
import earbuds from "../../../assets/earbuds.jpg";
import dslr from "../../../assets/dslr.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrowsL : false
  };

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
      id="hero"
      className="w-full flex justify-center items-center lg:h-[700px] h-[600px]"
    >
      <Slider className="w-full" {...settings}>
        
        {/*1st slide*/}

        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${dslr})` }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              style={{ color: "#f5e60d", borderColor: "#f5e60d" }}
              className="border rounded-lg px-6 py-2 text-xl"
            >
              Get upto Discounts 80% Off
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white lg:text-[120px] text-[60 px] uppercase font-bold lg:leading-[120px] leading-[70px]"
            >
              DSLR 360 <br />
              Camera
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white text-2xl"
            >
              100% trusted{" "}
              <span
                style={{ color: "#f5e60d", borderColor: "#f5e60d" }}
                className="font-semibold"
              >
                Electronics Gadgets
              </span>
            </h1>
            <button
              data-aos="zoom-in"
              data-aos-delay="200"
              style={{
                color: "#000",
                borderColor: "#f5e60d",
                backgroundColor: "#f5e60d",
              }}
              className="px-6 py-3 rounded-lg border font-semibold"
            >
              ONLINE COLLECTIONS
            </button>
          </div>
        </div>

        {/*2nd slide*/}

        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${earbuds})` }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              style={{ color: "#f5e60d", borderColor: "#f5e60d" }}
              className="border rounded-lg px-6 py-2 text-xl"
            >
              Get upto Discounts 80% Off
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white lg:text-[120px] text-[60 px] uppercase font-bold lg:leading-[120px] leading-[70px]"
            >
              Echobuds <br />
              Pro
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white text-2xl"
            >
              100% trusted{" "}
              <span
                style={{ color: "#f5e60d", borderColor: "#f5e60d" }}
                className="font-semibold"
              >
                Electronics Gadgets
              </span>
            </h1>
            <button
              data-aos="zoom-in"
              data-aos-delay="200"
              style={{
                color: "#000",
                borderColor: "#f5e60d",
                backgroundColor: "#f5e60d",
              }}
              className="px-6 py-3 rounded-lg border font-semibold"
            >
              ONLINE COLLECTIONS
            </button>
          </div>
        </div>

        {/*3rd slide*/}

        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${headset})` }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              style={{ color: "#f5e60d", borderColor: "#f5e60d" }}
              className="border rounded-lg px-6 py-2 text-xl"
            >
              Get upto Discounts 80% Off
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white lg:text-[120px] text-[60 px] uppercase font-bold lg:leading-[120px] leading-[70px]"
            >
              SkyBass <br />
              500
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white text-2xl"
            >
              100% trusted{" "}
              <span
                style={{ color: "#f5e60d", borderColor: "#f5e60d" }}
                className="font-semibold"
              >
                Electronics Gadgets
              </span>
            </h1>
            <button
              data-aos="zoom-in"
              data-aos-delay="200"
              style={{
                color: "#000",
                borderColor: "#f5e60d",
                backgroundColor: "#f5e60d",
              }}
              className="px-6 py-3 rounded-lg border font-semibold"
            >
              ONLINE COLLECTIONS
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;

import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaXmark, FaBars, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      link: "Home",
      path: "home",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Products",
      path: "products",
    },
    {
      link: "Testimonials",
      path: "testimonials",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];

  return (
    <>
      <div className="w-full px-16 py-2 bg-yellow-300 lg:flex hidden justify-center items-center gap-35">
        <h1 className="text-small font-semibold flex justify-center items-center gap-2">
          <FaPhoneVolume className="size-[18px]" />
          <span>+91 890 929 7807</span>
        </h1>

        <h1 className="text-small font-semibold flex justify-center items-center gap-2">
          <FaMapMarkerAlt className="size-[18px]" />
          <span>Lorem ipsum dolor sit amet.</span>
        </h1>

        <h1 className="text-small font-semibold flex justify-center items-center gap-2">
          <MdEmail className="size-[18px]" />
          <span>electrashop@company.com</span>
        </h1>
      </div>

      <nav className="w-full bg-gray-100 flex justify-between items-center gap-1 lg:px-16 px-6 py-5 sticky top-0 z-50">
        <h1 className="text-purple-900 font-bold lg:text-[30px] text-3xl underline italic">
          Electra Shop
        </h1>
        <ul className="lg:flex justify-center items-center gap-10 hidden">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-white"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>

        <div
          id="header-icons"
          className="lg:flex hidden justify-center items-center gap-6 text-black"
        >
          <FaSearch className="w-[20px] h-[20px] transform hover:scale-140 transition-transform duration-300 cursor-pointer hover:bg-purple-600 hover:rounded-lg" />
          <IoPerson className="w-[20px] h-[20px] transform hover:scale-140 transition-transform duration-300 cursor-pointer hover:bg-purple-600 hover:rounded-lg" />
          <FaHeart className="w-[20px] h-[20px] transform hover:scale-140 transition-transform duration-300 cursor-pointer hover:bg-purple-600 hover:rounded-lg" />
          <div className="relative">
            <FaShoppingCart className="w-[20px] h-[20px] transform hover:scale-140 transition-transform duration-300 cursor-pointer hover:bg-purple-600 hover:rounded-lg"/>
            <div className="bg-purple-600 hover:bg-yellow-500 px-3 py-1 text-white hover:text-black rounded-full absolute -top-[22px] -right-[15px] text-[12px] font-bold">
              2
            </div>
          </div>
        </div>

        {/* mobile menu start */}
        <div className="flex justify-center items-center lg:hidden mt-3" onClick={toggleMenu}>
          <div>
            {isMenuOpen ? <FaXmark className="text-purple-500 cursor-pointer text-3xl"/> : <FaBars className="text-purple-500 cursor-pointer text-3xl"/>}
          </div>
        </div>

        <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-purple-600 p-4 absolute top-[80px] left-0`} onClick={closeMenu}>
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({link,path})=>(
              <Link
              key={path}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-yellow-300 hover:text-black w-full text-center"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;

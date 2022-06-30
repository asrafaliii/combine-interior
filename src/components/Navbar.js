import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import Logo from ".././assets/Logo/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 flex justify-between border-b items-center bg-[#f1f5f9] text-black  px-12 z-10">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "200px" }} />
      </div>
      <ul className="hidden md:flex ">
        <li className="p-4 hover:text-red-600">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-4 hover:text-red-600">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="p-4 hover:text-red-600">
          <Link to="service" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li className="p-4 hover:text-red-600">
          <Link to="team" smooth={true} duration={500}>
            Team
          </Link>
        </li>

        <li className="p-4 hover:text-red-600">
          <Link to="portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className="p-4 hover:text-red-600">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-20 w-[70%] h-full bg-[#f1f5f9] ease-in-out duration-500"
            : " top-20 ease-in-out duration-500 fixed left-[-100%] "
        }
      >
        <li className="p-4 mx-6 text-2xl ">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-4 mx-6 text-2xl">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="p-4 mx-6 text-2xl">
          <Link to="team" smooth={true} duration={500}>
            Team
          </Link>
        </li>
        <li className="p-4 mx-6 text-2xl">
          <Link to="service" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li className="p-4 mx-6 text-2xl">
          <Link to="portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className="p-4 mx-6 text-2xl">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

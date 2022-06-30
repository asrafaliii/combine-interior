import React from "react";
import { Link } from "react-scroll";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="footer p-10  text-white px-12">
        <div>
          <span className="footer-title text-2xl">Services</span>
          <a className="link link-hover">
            <Link to="services" smooth={true} duration={500}>
              Services
            </Link>
          </a>
          <a className="link link-hover">
            {" "}
            <Link to="portfolio" smooth={true} duration={500}>
              Portfolio
            </Link>
          </a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title text-2xl">Company</span>
          <a className="link link-hover">
            {" "}
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </a>
          <a className="link link-hover">
            <Link to="team" smooth={true} duration={500}>
              Team
            </Link>
          </a>
          <a className="link link-hover">
            <Link to="client" smooth={true} duration={500}>
              Client
            </Link>
          </a>
          <a className="link link-hover">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </a>
        </div>
        <div>
          <span className="footer-title text-2xl">Contact Us</span>
          <div>
            <div className="">
              <div className="flex items-center">
                <p className="text-2xl font-bold text-red-500">
                  <AiOutlineMail />
                </p>
                <p className="text-gray-400 text-2xl px-2">
                  combineinterior@gmail.com
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-2xl font-bold text-red-500">
                  <AiOutlinePhone />
                </p>
                <p className="text-gray-400 text-2xl px-2">
                  +880 1719 687061 +880 1681 929969 +880 1738165563
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-2xl font-bold text-red-500">
                  <GoLocation />
                </p>
                <p className="text-gray-400 text-2xl px-2">
                  Gudaraghat, Gulshan-1, Dhaka-1212.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-3xl text-white mb-3 mt-3">
            <a
              href="https://www.facebook.com/combineinteriorbd"
              target="_blank"
            >
              <FaFacebook size={30} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCywaFqX3sy9aOdthf6rPX8Q"
              target="_blank"
            >
              <FaYoutube size={30} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://www.instagram.com/combineinterior/?fbclid=IwAR36AFQ1rHvZEyICBvTPxFNYUAV5adO0eOC1iOXJpPRVTOSESIPmep0fJLE"
              target="_blank"
            >
              <FaInstagram href="" size={30} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
      </footer>
      <footer className="bg-black">
        <div className="text-center text-white p-4">
          <p className="">
            Copyright © 2022 - All right reserved by Combine Interior
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

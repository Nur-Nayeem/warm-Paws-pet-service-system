import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#2c2c54] ">
      <div className="px-2.5 sm:px-0 py-16 my-container">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h3 className="text-2xl font-bold text-secondary">WarmPaws</h3>
            <p className="mt-3 text-[#b1bcc6] ">
              Your partner in pet wellness this winter and beyond.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-base-200">Contact Us</h3>
            <ul className="mt-3 space-y-2 text-[#b1bcc6]">
              <li className="">Email: myemail@gmail.com</li>
              <li className="">Phone: +880 171 456-7890</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-base-200">
              Follow Our Adventures
            </h3>
            <div className="flex mt-3 space-x-5 text-[#b1bcc6]">
              <Link
                to="#"
                className=" hover:text-white transition-colors duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </Link>
              <Link
                to="#"
                className="hover:text-white transition-colors duration-300"
              >
                <FaInstagram className="text-2xl" />
              </Link>
              <Link
                to="#"
                className="text-text-white hover:text-white transition-colors duration-300"
              >
                <BsTwitterX className="text-2xl" />
              </Link>
              <Link
                to="#"
                className="hover:text-white transition-colors duration-300"
              >
                <FaFacebookF className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-10 border-t border-gray-600 text-center">
          <p className="text-[#b1bcc6]">
            © 2025 WarmPaws. All rights reserved.
            <Link
              to="#"
              className="text-[#b1bcc6] underline hover:text-white transition-colors duration-300 ml-2.5"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

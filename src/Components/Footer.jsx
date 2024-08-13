import React from "react";
import PropTypes from "prop-types";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Footer = (props) => {
  return (
    <div>
      <footer className="footer bg-[#FAF9F6] text-neutral-content p-10">
        <aside className="flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <img
              src="https://imagizer.imageshack.com/img924/5564/PGayhF.png"
              alt=""
              className="h-[90px] w-[90px]"
            />
            <p className="text-[#331A15] text-3xl drop-shadow-md font-rancho font-bold">
              Espresso Emporium
            </p>
            <p className="text-black">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex flex-row gap-3 text-[#331A15]">
              <FaFacebook className="size-8" />
              <FaXTwitter className="size-8" />
              <FaInstagram className="size-8" />
              <ImLinkedin className="size-8" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#331A15] text-3xl drop-shadow-md font-rancho font-bold">
              Get in Touch
            </p>
            <p className="text-xl flex gap-3 items-center text-[#331A15]">
              <FaPhone className="size-5" />
              +88 01533 333 333
            </p>
            <p className="text-xl flex gap-3 items-center text-[#331A15]">
              <MdEmail className="size-5" />
              info@gmail.com
            </p>
            <p className="text-xl flex gap-3 items-center text-[#331A15]">
              <IoLocationSharp className="size-5" />
              72, Wall street, King Road, Dhaka
            </p>
          </div>
        </aside>
        <nav className="w-full flex flex-col gap-12">
          <h6 className="text-4xl flex gap-3 items-center text-[#331A15] font-rancho drop-shadow-md font-bold">Connect with Us</h6>
          <div className="flex flex-col gap-6 w-full">
          <input type="text" placeholder="Name" className="input input-bordered w-full bg-white" />
          <input type="text" placeholder="Email" className="input input-bordered w-full bg-white" />
          <textarea className="textarea textarea-bordered w-full bg-white" placeholder="Message"></textarea>
          <button className="btn btn-outline text-[#331A15] rounded-full">Send Message</button>
          </div>
        </nav>
      </footer>
      <footer
        className="footer footer-center text-base-content"
        style={{
          backgroundImage: `url('https://imagizer.imageshack.com/img923/4036/an5lK7.png')`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="bg-black bg-opacity-70 w-full h-full p-4">
          <aside>
            <p className="font-rancho text-xl">
              Copyright © {new Date().getFullYear()} - Espresso Emporium ! All
              Rights Reserved
            </p>
          </aside>
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;

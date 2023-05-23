import React from "react";
import logo from "../../../assets/images/logo.png";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col bg-gray-50 2xl:px-40 xl:px-20 lg:px-10 p-7 lg:pt-24  mt-20 ">
      <div className="flex md:flex-row flex-col justify-between items-center max-md:gap-10 w-full border-b border-gray-200 md:pb-20 pb-10">
        <div className="md:w-1/2 flex flex-col gap-6">
          <img src={logo} alt="logo" className="w-36" />
          <p className="text-gray-400 md:w-96 leading-relaxed text-sm">
            "On the other hand, we denounce with righteous indignation and
            dislike who are so beguiled and demoralized by the charms of
            pleasure of the moment"
          </p>
        </div>
        <div className="md:w-1/2 flex   justify-end 2xl:gap-40 xl:gap-36 lg:gap-28 md:gap-20 max-md:justify-between w-full md:self-end text-sm">
          <div className=" flex flex-col  gap-2">
            <h2 className="font-[500] mb-4">Tastebite</h2>
            <p className="hover:underline cursor-pointer hover:underline-offset-4 text-gray-400 text-sm">
              About Us
            </p>
            <p className="hover:underline cursor-pointer hover:underline-offset-4 text-gray-400 text-sm">
              Careers
            </p>
            <p className="hover:underline cursor-pointer hover:underline-offset-4 text-gray-400 text-sm">
              Contact Us
            </p>
            <p className="hover:underline cursor-pointer hover:underline-offset-4 text-gray-400 text-sm">
              Feedback
            </p>
          </div>
          <div className=" flex flex-col  gap-2">
            <h2 className="font-[500] mb-4">Legal</h2>
            <p className="hover:underline cursor-pointer hover:underline-offset-4 text-gray-400 text-sm">
              Terms
            </p>
            <p className="hover:underline cursor-pointer hover:underline-offset-4 text-gray-400 text-sm">
              Conditions
            </p>
            <p className="hover:underline cursor-pointer hover:underline-offset-4 text-gray-400 text-sm">
              Cookies
            </p>
            <p className="hover:underline cursor-pointer hover:underline-offset-4 text-gray-400 text-sm">
              Copyright
            </p>
          </div>
          <div className="    flex flex-col  gap-2">
            <h2 className="font-[500] mb-4">Follow</h2>
            <p className="hover:underline cursor-pointer hover:underline-offset-4 text-gray-400 text-sm">
              Facebook
            </p>
            <p className="hover:underline cursor-pointer hover:underline-offset-4 text-gray-400 text-sm">
              Twitter
            </p>
            <p className="hover:underline cursor-pointer hover:underline-offset-4 text-gray-400 text-sm">
              Instagram
            </p>
            <p className="hover:underline cursor-pointer hover:underline-offset-4 text-gray-400 text-sm">
              Youtube
            </p>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col-reverse max-md:gap-5 justify-between items-center text-gray-400 pt-10 pb-5">
        <p className="text-sm">© 2020 Tastebite - All rights reserved</p>
        <div className="flex gap-10 items-center text-2xl text-gray-500">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
          <FiYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;

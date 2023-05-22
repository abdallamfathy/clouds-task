import React from "react";
import logo from "../../../assets/images/logo.png";
import avatar from "../../../assets/images/avatar.png"
import { FiSearch } from "react-icons/fi";
import { NavLinks } from "./NavLinks";



const Navbar: React.FC = () => {

  return (
    <>
      <div className="flex justify-between items-center">
        <a href="#">
          <img src={logo} alt="logo" className="h-10" />
        </a>
        <NavLinks/>
        <div className="flex items-center gap-4">
            <FiSearch size={24}/>
            <img src={avatar} alt="user-avatar" className="h-6" />
        </div>
      </div>
    </>
  );
};

export default Navbar;

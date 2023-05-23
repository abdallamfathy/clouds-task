import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import avatar from "../../../assets/images/avatar.png"
import { FiSearch } from "react-icons/fi";
import { NavLinks } from "./NavLinks";
import { GrMenu } from "react-icons/gr";
import {IoCloseSharp} from "react-icons/all"



const Navbar: React.FC = () => {
  const [show , setShow] = useState(true);

  return (
    <>
      <div className="flex justify-between items-center">
        <a href="#">
          <img src={logo} alt="logo" className="h-10" />
        </a>
        <div className="relative ">
        <NavLinks show={show}/>
        {
          show ? <IoCloseSharp className="text-black md:hidden" size={22} onClick={() => setShow(false)}/> : <GrMenu className="md:hidden" size={22} onClick={() => setShow(true)}/>
        }
        </div>
        <div className="md:flex hidden items-center gap-4">
            <FiSearch size={24}/>
            <img src={avatar} alt="user-avatar" className="h-6" />
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!Nav);
  }
  return (
    <div className="flex justify-between items-center h-24 max-w[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">Stanley .</h1>
        <ul className="hidden md:flex">
            <li className="p-4"><Link to="/">Home</Link></li>
            <li className="p-4"><Link to="/Offerings">Our Offerings</Link></li>
            <li className="p-4"><Link to="/Resources">Resources</Link></li>
            <li className="p-4"><Link to="/About">About</Link></li>
            <li className="p-4"><Link to="/Contact">Contact</Link></li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
         {Nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={Nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Stanley .</h1>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600"> <Link to="/">Home</Link></li>
            <li className="p-4 border-b border-gray-600"> <Link to="/">Our Offerings</Link></li>
            <li className="p-4 border-b border-gray-600"> <Link to="/resources">Resources</Link></li>
            <li className="p-4 border-b border-gray-600"> <Link to="/about">About</Link></li>
            <li className="p-4 border-b border-gray-600"> <Link to="/contact">Contact</Link></li>
          </ul>
        </div>

    </div>
  )
}

export default Navbar;

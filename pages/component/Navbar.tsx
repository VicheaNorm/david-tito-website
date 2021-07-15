import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="h-20 w-screen pt-8 sticky top-0 ">
      <div className="flex px-10 justify-between">
        <div className="justify-start">
          <Link to="bio" spy={true} smooth={true}>
            <a className="animate-pulse px-4 py-2 mx-1 md:px-14 bg-gray-200 hover:bg-gray-800 rounded-lg text-gray-700 hover:text-gray-200 cursor-pointer">
              Bio
            </a>
          </Link>

          <Link to="work" spy={true} smooth={true}>
            <a className="px-4 py-2 mx-1 md:px-14 hover:bg-gray-800 rounded-lg text-gray-200 cursor-pointer">
              My Work
            </a>
          </Link>
        </div>
        <div className="justify-end">
          <Link to="contact" spy={true} smooth={true}>
            <a className="px-4 py-2 md:px-14 hover:bg-gray-800 rounded-lg text-gray-200 cursor-pointer">
              Contact me
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-scroll";
import LinkTo from "next/link";
import { Hidden, Paper } from "@material-ui/core";

const Navbar = () => {
  return (
    <div className="h-20 w-screen pt-8 sticky top-0 z-10">
      <div className="flex px-10 justify-between">
        {/* <Hidden only="sm">
          <Paper> */}
        <div className="justify-start">
          <Link to="bio" spy={true} smooth={true}>
            <LinkTo href="/">
              <a className="animate-pulse px-4 py-2 mx-1 md:px-14   rounded-lg text-gray-300 hover:text-gray-200 cursor-pointer">
                Bio
              </a>
            </LinkTo>
          </Link>

          <Link to="work" spy={true} smooth={true}>
            <a className=" px-4 py-2 mx-1 md:px-14   rounded-lg text-gray-300 hover:text-gray-200 cursor-pointer">
              My Work
            </a>
          </Link>
          <Link to="bio" spy={true} smooth={true}>
            <LinkTo href="/creative">
              <a className=" px-4 py-2 mx-1 md:px-14   rounded-lg text-gray-300 hover:text-gray-200 cursor-pointer">
                About
              </a>
            </LinkTo>
          </Link>
        </div>

        <Link to="contact" spy={true} smooth={true}>
          <a className="px-4 py-2 md:px-14  rounded-lg text-gray-300 cursor-pointer">
            Contact me
          </a>
        </Link>
        {/* </Paper>
        </Hidden> */}
        {/* <Hidden only="md">
          <Paper>
            <div className="justify-start bg-gray-200">
              <Link to="bio" spy={true} smooth={true}>
                <LinkTo href="/">
                  <a className="animate-pulse px-4 py-2 mx-1 md:px-14   rounded-lg text-gray-300 hover:text-gray-200 cursor-pointer">
                    Bio
                  </a>
                </LinkTo>
              </Link>

              <Link to="work" spy={true} smooth={true}>
                <a className=" px-4 py-2 mx-1 md:px-14   rounded-lg text-gray-300 hover:text-gray-200 cursor-pointer">
                  My Work
                </a>
              </Link>
              <Link to="bio" spy={true} smooth={true}>
                <LinkTo href="/creative">
                  <a className=" px-4 py-2 mx-1 md:px-14   rounded-lg text-gray-300 hover:text-gray-200 cursor-pointer">
                    About
                  </a>
                </LinkTo>
              </Link>
            </div>

            <Link to="contact" spy={true} smooth={true}>
              <a className="px-4 py-2 md:px-14  rounded-lg text-gray-300 cursor-pointer">
                Contact me
              </a>
            </Link>
          </Paper>
        </Hidden> */}
      </div>
    </div>
  );
};

export default Navbar;

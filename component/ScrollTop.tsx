import React from "react";
import { Link } from "react-scroll";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
export default function ScrollTop() {
  return (
    <div className="flex justify-end">
      <div className="fixed top-3/4">
        <Link to="top" spy={true} smooth={true}>
          <h1 className="bg-white text-gray-700 mr-4 p-2 rounded-md hover:bg-gray-400 mt-28 cursor-pointer">
            <ArrowUpwardIcon />
          </h1>
        </Link>
      </div>
    </div>
  );
}

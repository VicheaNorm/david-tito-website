import React from "react";
import { Link } from "react-scroll";

const footer = () => {
  return (
    <div className="flex justify-between h-10 opacity-40 items-center py-2">
      <a
        className="text-gray-300 font-light text-xs md:text-sm px-6"
        href="https://asurraa.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        All Rights Reserved © 2021
      </a>
      <a
        className="text-gray-300 font-light text-xs md:text-sm pr-4"
        href="https://asurraa.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by AsurRaa
      </a>
    </div>
  );
};

export default footer;

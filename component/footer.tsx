import React, { Fragment } from "react";

const footer = () => {
  return (
    <Fragment>
      <div className="flex justify-between h-10 opacity-60 items-center py-2 md:-mt-10">
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
    </Fragment>
  );
};

export default footer;

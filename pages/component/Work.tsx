import React from "react";

const Work = () => {
  return (
    <>
      <div className=" dark:bg-gray-800 overflow-hidden lg:flex  lg:items-center h-screen">
        <div className="w-3/4 md:ml-20 pl-4 py-24 sm:px-6 lg:py-16 lg:px-8 z-20 ">
          <h2 className="text-3xl font-extrabold text-gray-200 dark:text-white sm:text-4xl">
            <span className="block">My Work</span>
          </h2>
          <p className="text-md mt-4 text-gray-400 font-thin">
            Say something add more text.
          </p>
          {/* <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Get started
              </button>
            </div>
          </div> */}
        </div>
        <div className="flex items-center gap-8 p-8 lg:p-24">
          <img
            src="https://transferencia.tec.mx/english/wp-content/uploads/2019/04/Lente-Optica-TNA.jpeg"
            className="rounded-lg w-1/2"
            alt="Tree"
          />

          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              className="rounded-lg mb-8"
              alt="Tree"
            />
            <img
              src="https://tinypng.com/images/social/website.jpg"
              className="rounded-lg"
              alt="Tree"
            />
          </div>
        </div>
      </div>
      {/* <div className=" dark:bg-gray-800 overflow-hidden relative lg:flex  lg:items-center">
        <div className="flex items-center gap-8 p-8 lg:p-24">
          <img
            src="https://transferencia.tec.mx/english/wp-content/uploads/2019/04/Lente-Optica-TNA.jpeg"
            class="rounded-lg w-1/2"
            alt="Tree"
          />

          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              class="rounded-lg mb-8"
              alt="Tree"
            />
            <img
              src="https://tinypng.com/images/social/website.jpg"
              class="rounded-lg"
              alt="Tree"
            />
          </div>
        </div>
        <div class="w-3/4 md:ml-20 pl-4 py-12  sm:px-6 lg:py-16 lg:px-8 z-20 "></div>
      </div> */}
    </>
  );
};

export default Work;

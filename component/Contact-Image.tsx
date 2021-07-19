import React from "react";

import { Fragment } from "react";
import DraftsIcon from "@material-ui/icons/Drafts";
const ContactImage = () => {
  return (
    <Fragment>
      {/* <section className="md:px-6 h-screen bg-red-400 -mt-32 flex">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div className="py-0 md:py-10 md:w-3/4 md:pl-20">
            <h2 className=" mb-4 text-4xl font-extrabold tracking-tight text-center text-white md:leading-tight sm:text-left md:text-6xl">
              David Tito
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Visionary, Creative, Leadership
            </p>
            <a href="#" className="w-full btn btn-dark btn-lg sm:w-auto">
              Learn More
            </a>
          </div>
          <div className="grid grid-cols-3 opacity-80 ">
            <img src="/1.png" alt="" className="h-96" />
            <img src="/1.png" alt="" className="h-96" />
            <img src="/1.png" alt="" className="h-96" />
          </div>
        </div>
      </section> */}

      <div className="px-4 py-4 mt-10  mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-2 md:pl-16">
          <div className="flex flex-col justify-center md:pl-28 md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-6 ">
              <h2 className="max-w-lg mb-6 font-sans text-5xl md:text-8xl font-bold tracking-tight text-gray-400 sm:leading-none">
                David Tito
              </h2>
              <p className="max-w-lg mb-6 font-sans text-base font-thin tracking-tight text-gray-400  sm:leading-none">
                <span className="pr-2">
                  <DraftsIcon />
                </span>
                davidtito@gmail.com
              </p>
              <h1 className="text-lg pb-2 font-mono text-gray-400 md:text-lg">
                Visionary, Creative, Leadership
              </h1>
              <p className="text-base text-gray-400 md:text-lg">
                One perspective can develop many emotions through moving images
                or you can say as a visual storyteller can provoke audience
                through colors and movements of the camera.{" "}
              </p>
            </div>
            <div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-1 py-4">
              <img
                className="object-cover mb-6 rounded shadow-lg "
                src="/2.jpg"
                alt=""
              />
              <img
                className="object-cover rounded shadow-lg"
                src="/3.jpg"
                alt=""
              />
              {/* <img
                className="object-cover rounded shadow-lg sm:h-52 xl:h-40 sm:w-52 xl:w-40"
                src="/3.jpg"
                alt=""
              /> */}
            </div>
            <div className="px-1">
              <img
                className="object-cover py-16 rounded md:h-full md:w-full"
                src="/1.png"
                alt=""
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactImage;

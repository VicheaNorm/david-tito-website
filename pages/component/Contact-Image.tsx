import React from "react";
import { Link } from "react-scroll";
import { DownCircleOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import { Hidden, Paper } from "@material-ui/core";
const ContactImage = () => {
  return (
    <Fragment>
      <section className="md:px-6  max-h-full w-auto">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div className="py-0 md:py-10 md:w-3/4 md:pl-20">
            <h2 className="animate-bounce mb-4 text-4xl font-extrabold tracking-tight text-center text-white md:leading-tight sm:text-left md:text-6xl">
              David Tito
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Handle your subscriptions and transactions efficiently with the
              clear overview in Dashboard. Features like the smart search option
              allow you to quickly find any data you’re looking for.
            </p>
            <a href="#" className="w-full btn btn-dark btn-lg sm:w-auto">
              Learn More
            </a>
          </div>
          <div className="md:w-full">
            <img src="/david.png" alt="" className="" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ContactImage;

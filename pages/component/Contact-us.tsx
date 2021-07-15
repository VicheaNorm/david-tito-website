import React from "react";
import { ArrowDownOutlined, UpCircleOutlined } from "@ant-design/icons";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-scroll";
const ContactUs = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex justify-center pt-24">
        <h1 className="text-gray-200 text-5xl md:text-8xl">Get in touch</h1>
      </div>

      <div className="flex justify-center py-10 px-10 text-center">
        <p className="text-gray-200 text-base md:text-3xl">
          I'M NOTORIOUSLY SLOW AT GETTING BACK TOEMAILS
        </p>
      </div>
      <div className="flex justify-center pt-20">
        <span className="text-gray-200 text-2xl md:text-5xl animate-bounce font-thin">
          <ArrowDownOutlined />
        </span>
      </div>
      <div className="flex justify-center py-2 text-center">
        <p className="text-gray-200 text-base md:text-3xl font-thin">
          IN A HURRY? PLEASE CONTACT MY AWESOME PRODUCERS
        </p>
      </div>
      <div className="flex justify-center pt-10">
        <div className="grid grid-cols-3 gap-10 cursor-pointer">
          <Tooltip title="Phone Number">
            <img src="/viber_white.svg" alt="Tel" width="30" />
          </Tooltip>
          <Tooltip title="David Tito">
            <a href="https://www.facebook.com/kakashi.ty" target="_blank">
              <img src="/facebook_white.svg" alt="Facebook" width="30" />
            </a>
          </Tooltip>
          <Tooltip title="Telegram Number">
            <a href="">
              <img src="/telegram_white.svg" alt="Telegram" width="30" />
            </a>
          </Tooltip>
        </div>
      </div>
      <div className="text-gray-200 flex justify-end pr-6 md:pr-10 ">
        <button className="text-3xl md:text-4xl animate-pulse pb-2">
          <Link
            to="bio"
            spy={true}
            smooth={true}
            duration={500}
            isDynamic={true}
            className="cursor-pointer"
          >
            <UpCircleOutlined />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ContactUs;

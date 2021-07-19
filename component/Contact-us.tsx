import React from "react";
import { ArrowDownOutlined, UpCircleOutlined } from "@ant-design/icons";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-scroll";
const ContactUs = () => {
  return (
    <div className="container mx-auto flex items-center h-screen">
      <div className="grid grid-cols-1 justify-center text-center items-center w-screen">
        <div className="">
          <h1 className="text-gray-400 text-3xl md:text-5xl lg:text-6xl">
            Get in touch
          </h1>
        </div>

        <div className="flex justify-center py-10 px-10 text-center">
          <p className="text-gray-400 text-base md:text-3xl">
            I'M NOTORIOUSLY SLOW AT GETTING BACK TOEMAILS
          </p>
        </div>
        <div className="flex justify-center pt-20">
          <span className="text-gray-400 text-2xl md:text-1xl animate-bounce font-thin">
            <ArrowDownOutlined />
          </span>
        </div>
        <div className="flex justify-center py-2 text-center">
          <p className="text-gray-400 text-base md:text-1xl font-thin">
            In a hurry? Please contact my awesome services.
          </p>
        </div>
        <div className="flex justify-center pt-40 ">
          <div className="grid grid-cols-4 gap-10 cursor-pointer opacity-50">
            <Tooltip title="098 483 248">
              <img src="/viber_white.svg" alt="Tel" width="30" />
            </Tooltip>
            <Tooltip title="David Tito">
              <a href="https://www.facebook.com/kakashi.ty" target="_blank">
                <img src="/facebook_white.svg" alt="Facebook" width="30" />
              </a>
            </Tooltip>
            <Tooltip title="David_tito">
              <a href="https://t.me/David_tito" target="_blank">
                <img src="/telegram_white.svg" alt="Telegram" width="30" />
              </a>
            </Tooltip>
            <Tooltip title="khun_david">
              <div className="bg-white rounded-full ">
                <a href="https://www.instagram.com/khun_david/" target="_blank">
                  <img
                    src="/icons8-instagram-48.png"
                    alt="Telegram"
                    width="30"
                    className="text-black"
                  />
                </a>
              </div>
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
    </div>
  );
};

export default ContactUs;

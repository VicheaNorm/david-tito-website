import { Tooltip } from "@material-ui/core";

import { FC, Fragment, useState } from "react";
import { CParticle } from "./Particle";

interface FeatureProps {}

const Feature: FC<FeatureProps> = (props) => {
  return (
    <Fragment>
      <div className="bg-black pb-24 pt-10">
        <CParticle />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <div className="pt-6 items-center flex justify-center">
              <div className="">
                <div className="flex justify-center ">
                  <h1 className="text-5xl font-medium fontcs text-gray-300">
                    CONTACT
                  </h1>
                </div>
                <div className="flex justify-center py-10 px-10 text-center">
                  <p className="text-gray-400 text-base md:text-3xl fontcs">
                    I'M NOTORIOUSLY SLOW AT GETTING BACK TOEMAILS
                  </p>
                </div>

                <div className="flex justify-center py-2 text-center">
                  <p className="text-gray-400 text-base md:text-1xl font-thin">
                    In a hurry? Please contact my awesome services.
                  </p>
                </div>
                <div className="flex justify-center py-10 ">
                  <div className="grid grid-cols-4 gap-10 cursor-pointer opacity-50">
                    <Tooltip title="098 483 248">
                      <img src="/viber_white.svg" alt="Tel" width="30" />
                    </Tooltip>
                    <Tooltip title="David Tito">
                      <a
                        href="https://www.facebook.com/kakashi.ty"
                        target="_blank"
                      >
                        <img
                          src="/facebook_white.svg"
                          alt="Facebook"
                          width="30"
                        />
                      </a>
                    </Tooltip>
                    <Tooltip title="David_tito">
                      <a href="https://t.me/David_tito" target="_blank">
                        <img
                          src="/telegram_white.svg"
                          alt="Telegram"
                          width="30"
                        />
                      </a>
                    </Tooltip>
                    <Tooltip title="khun_david">
                      <div className="bg-white rounded-full ">
                        <a
                          href="https://www.instagram.com/khun_david/"
                          target="_blank"
                        >
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Feature;

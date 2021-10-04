import { Fragment } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "@material-ui/core";

const ContactImage = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 w-screen px-4 ">
        
          <div className="items-center flex justify-center pt-10 sm:order-last">
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ type: "spring" }}
              className="lg:max-w-lg lg:pr-8 xl:pr-6"
            >
              <motion.h2
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.5 },
                }}
                className="mb-5 font-mono md:text-6xl font-bold tracking-tight text-gray-400 text-4xl sm:leading-none md:text-center"
              >
                My name's
                <br className="hidden md:block" />
                David Tito
              </motion.h2>
              <p className="mb-5 text-base text-gray-400 md:text-lg md:text-justify font-thin">
                One perspective can develop many emotions through moving images or
                you can say as a visual storyteller can provoke audience through
                colors and movements of the camera. Cinematography is fundamental
                confident to show your hidden story to the world and a commitment
                to show potential moving image for your story. A cinematographer
                based in Phnom Penh, Cambodia and has been 10 years in filmmaking
                industry. David enjoy working with creative people to develop the
                one thing that you think it would be difficult to be told.
              </p>

              <div className="flex flex-col items-center">
                <div className="mb-4 text-sm text-gray-400  font-mono">
                  Follow us
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <a
                      href="https://www.instagram.com/khun_david/"
                      target="_blank"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <Tooltip title="khun_david">
                        <div className="bg-white rounded-full opacity-40">
                          <a
                            href="https://www.instagram.com/khun_david/"
                            target="_blank"
                          >
                            <img
                              src="/icons8-instagram-48.png"
                              alt="Telegram"
                              width="20"
                              className="text-black opacity-40"
                              style={{ padding: 2 }}
                            />
                          </a>
                        </div>
                      </Tooltip>
                    </a>
                  </div>
                  <div className="flex items-center">
                    <a
                      href="/"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <Tooltip title="David Tito">
                        <a
                          href="https://www.facebook.com/kakashi.ty"
                          target="_blank"
                        >
                          <img
                            className="opacity-40"
                            src="/facebook_white.svg"
                            alt="Facebook"
                            width="20"
                          />
                        </a>
                      </Tooltip>
                    </a>
                  </div>
                  <div className="flex items-center">
                    <a
                      href="/"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <Tooltip title="David_tito">
                        <a href="https://t.me/David_tito" target="_blank">
                          <img
                            className="opacity-40"
                            src="/telegram_white.svg"
                            alt="Telegram"
                            width="20"
                          />
                        </a>
                      </Tooltip>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        
        <div className=" text-center md:ml-20 justify-center content-h pt-14 md:order-last">
          <motion.img
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ type: "spring" }}
            className="object-scale-down w-full h-full rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="/tito.png"
            alt="Content-image"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ContactImage;

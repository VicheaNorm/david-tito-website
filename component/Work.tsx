import React from "react";

import LinkTo from "next/link";
import { motion } from "framer-motion";
const Work = () => {
  const data = [
    {
      link: "/creative-page",
      title: "Creative",
      imageURL: "/creative.jpg",
      text: "Fingerstache flexitarian street art 8-bit waistcoat.Distillery hexagon disrupt edison bulbche.",
    },
    {
      link: "/tvshow",
      title: "TV Show",
      imageURL: "/tvshow.jpg",
      text: "Fingerstache flexitarian street art 8-bit waistcoat.Distillery hexagon disrupt edison bulbche.",
    },
    {
      link: "/ngo",
      title: "NGO",
      imageURL: "/ngo.jpg",
      text: "Fingerstache flexitarian street art 8-bit waistcoat.Distillery hexagon disrupt edison bulbche.",
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-400">
              Creative
            </h1>
            <div className="h-1 w-20 bg-indigo-300 rounded"></div>
          </div>
          {/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Creative ( there will be in some of my work in there as the work I
            have been working with 019 MV as well as Sai …)
          </p> */}
        </div>
        <div className="grid md:grid-cols-3 -m-4">
          {data.map((datas) => (
            <div className="p-4">
              <LinkTo href={datas.link}>
                <a>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.5 },
                    }}
                    className="bg-gradient-to-r from-gray-900 p-6 rounded-lg"
                  >
                    <img
                      className="h-60 rounded w-full object-cover object-center mb-6"
                      src={datas.imageURL}
                      alt="content"
                    />
                    <h2 className="text-lg text-gray-400 font-medium title-font mb-4">
                      {datas.title}
                    </h2>
                    <p className="leading-relaxed text-base">{datas.text}</p>
                  </motion.div>
                </a>
              </LinkTo>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
